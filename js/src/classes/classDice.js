var classDice = function() {};

classDice.prototype = {

	init: function() {
		this.always_exploding_dice = false;

		this.rollSetCountRolls = [];
		this.rollSetCount = 0;

		this.labelNoEffect = "No Effect";
		this.labelShaken = "Shaken";
		this.labelShakenAndAWound = "Shaken and a wound";
		this.labelShakenAndXWoundS = "Shaken and {raises} wounds";

		this.labelCriticalFailure = "Critical Failure";
		this.labelFailure = "Failure";
		this.labelSuccess = "Success";
		this.labelSuccessWithARaise = "Success with a raise";
		this.labelSuccessWithXRaises = "Success with {raises} raises";

		this.labelDieRollNumber = "die roll #";
		this.labelWildDieRollNumber = "wild die roll #";

		this.labelRollSetNumber = "Roll Set #";

		this.labelTotalRoll = "Total Roll";

		this.successTargetNumber = 4;
		this.successBaseToughness = 5;
		this.successArmor = 1;
		this.successWeaponsAP = 0;
	},
	rollDie: function(number_of_sides, exploding_die, wild_die) {

		if(!number_of_sides)
			number_of_sides = 6;


		total_roll = 0;
		keep_rolling = 1;
		display_roll = "";
		while(keep_rolling > 0) {
			roll = Math.floor(Math.random() * number_of_sides) + 1;
			if(exploding_die > 0) {
				if(roll == number_of_sides)
					keep_rolling = 1;
				else
					keep_rolling = 0;
			} else {
				keep_rolling = 0;
			}


			display_roll += roll + ", ";
			total_roll += roll;

		}

		this.rollSetCountRolls[ this.rollSetCount ].base_rolls.push( display_roll );
		this.rollSetCountRolls[ this.rollSetCount ].base_roll_sides.push(number_of_sides);
		wild_display_roll = "";
		totalwild_dieRoll = 0;
		keep_rolling = 1;
		if(wild_die > 0) {
			number_of_sides = 6;
			while(keep_rolling > 0) {
				roll = Math.floor(Math.random() * number_of_sides) + 1;
				if(exploding_die > 0) {
					if(roll == number_of_sides)
						keep_rolling = 1;
					else
						keep_rolling = 0;
				} else {
					keep_rolling = 0;
				}



				totalwild_dieRoll += roll;

				wild_display_roll += roll + ", ";
			}
		}
		this.rollSetCountRolls[ this.rollSetCount ].wild_die_rolls.push(wild_display_roll);

		if(totalwild_dieRoll == 1 && total_roll == 1)
			this.rollSetCountRolls[ this.rollSetCount ].critical_failure= 1;
		else
			this.rollSetCountRolls[ this.rollSetCount ].critical_failure= 0;

		if(totalwild_dieRoll > total_roll)
			return totalwild_dieRoll;
		else
			return total_roll;

	},

	rollDice: function (number_of_dice, total_modifier) { // 2d6+3 would be this.rollDice(2,3)

		var returnTotal = 0;
		number_of_sides = 6;

		if(number_of_dice.indexOf("*") > 0)
			wild_die = 1;
		else
			wild_die = 0;

		if(number_of_sides < 2)
			number_of_sides = 2;

		number_of_dice = number_of_dice.replace("*", "");

		explodingDice = 0;
		if(number_of_dice.indexOf("d") > -1) {
			rollNumber = number_of_dice.substring(0, number_of_dice.indexOf("d")) / 1;
			number_of_sides = number_of_dice.substring(number_of_dice.indexOf("d") + 1) / 1;
			if(this.always_exploding_dice)
				explodingDice = 1;
		} else {
			if(number_of_dice.indexOf("e") > -1) {
				explodingDice = 1;
				rollNumber = number_of_dice.substring(0, number_of_dice.indexOf("e")) / 1;
				number_of_sides = number_of_dice.substring(number_of_dice.indexOf("e") + 1) / 1;
			} else {
				rollNumber = number_of_dice;
			}
		}

		// a dX assumes 1dX
		if(!rollNumber)
			rollNumber = 1;

		// a 2d assumes 2d6
		if(!number_of_sides)
			number_of_sides = 6;

		var rolls = rollNumber + "d" + number_of_sides + ": ";
		while(rollNumber-- > 0) {

			dieRoll = this.rollDie(number_of_sides, explodingDice, wild_die);
			returnTotal += dieRoll;
			rolls += dieRoll + ",";
			this.rollSetCountRolls[ this.rollSetCount ].total_rolled_dice++;
		}
		rolls = rolls.substring(0, rolls.length -1);
		rolls += "";



		return returnTotal;
	},
	_parseBit: function (input_string) {
		value = 0;

		if(input_string.indexOf("d") > -1)
			value = this.rollDice(input_string, 0);
		else
			if(input_string.indexOf("e") > -1)
				value = this.rollDice(input_string, 0);
			else
				value = input_string / 1;

		return value;
	},

	_parseRollSet: function( input_string ) {
		set_total = 0;

		// remove all spaces...

		input_string = input_string.replace(/ /g, "");
		input_string = input_string.toLowerCase();

		// parse mathematical expressions
		input_string = input_string.replace(/\+/g, " + ");
		input_string = input_string.replace(/x/g, " x ");
		input_string = input_string.replace(/\//g, " / ");
		input_string = input_string.replace(/\-/g, " - ");
		input_string = input_string.replace(/\)/g, " ) ");
		input_string = input_string.replace(/\(/g, " ( ");
		input_string = input_string.replace(/\,/g, " , ");


		this.rollSetCountRolls[ this.rollSetCount ] = {};

		this.rollSetCountRolls[ this.rollSetCount ].base_rolls = [];
		this.rollSetCountRolls[ this.rollSetCount ].wild_die_rolls = [];
		this.rollSetCountRolls[ this.rollSetCount ].base_roll_sides = [];
		this.rollSetCountRolls[ this.rollSetCount ].total_rolled_dice = 0;
		this.rollSetCountRolls[ this.rollSetCount ].critical_failure = 0;

		if(input_string.indexOf(" ") > 0) {
			items = input_string.split(" ");

			current_function = "+";
			for(count = 0; count < items.length; count++) {

				if(
					items[count] != "+"
						&&
					items[count] != "x"
						&&
					items[count] != "-"
						&&
					items[count] != "/"
				) {
					// parse the bit
					if(current_function == "+") {
						set_total += this._parseBit( items[count]) / 1;
					} else {
						if(current_function == "-") {
							set_total -= this._parseBit( items[count]) / 1;
						} else {
							if(current_function == "x") {
								if(set_total == 0) {
									set_total = items[count] / 1;
								} else {
									set_total = set_total * this._parseBit( items[count]) / 1;
								}
							} else {
								if(current_function == "/") {
									set_total = set_total / this._parseBit( items[count]) / 1;
								} else {
									// ignore parentheticals for now
								}
							}
						}
					}
				} else {
					// change what it does...
					current_function = items[count];
				}

			}

		} else {
			set_total += this._parseBit( input_string);

		}
		this.rollSetCountRolls[ this.rollSetCount ].total_roll = set_total;
		this.rollSetCount++;
	},

	parseRoll: function (parseRoll_input_string) {

		// look for modifier(s)....
		total = 0;
		this.rollSetCount = 0;
		this.rollSetCountRolls = [];

		if(parseRoll_input_string.indexOf(",") > 0) {
			parseRoll_items = parseRoll_input_string.split(",");
			for( parseRoll_itemcount = 0; parseRoll_itemcount < parseRoll_items.length; parseRoll_itemcount++) {
				total = this._parseRollSet( parseRoll_items[parseRoll_itemcount] );
			}
		} else {
			total += this._parseRollSet( parseRoll_input_string );
		}

		return total;
	},

	displayResults: function (for_trait, for_damage) {
		html = "";
		for( results_set_count = 0; results_set_count < this.rollSetCount; results_set_count++ ) {
			if( this.rollSetCount > 1 ) {
				if( results_set_count > 0) {
					html += "<hr />";
				}
				html += "<h4>" + this.labelRollSetNumber + (results_set_count + 1) + "</h4>";
			}


			html += "<h5>" + this.labelTotalRoll + ": " + this.rollSetCountRolls[ results_set_count ].total_roll + "</h5>"

			if( for_trait )
				html += this.traitSuccessMargin( this.rollSetCountRolls[ results_set_count ].total_roll, null, results_set_count ) + "<br />";

			if( for_damage )
				html += this.damageSuccessMargin( this.rollSetCountRolls[ results_set_count ].total_roll ) + "<br />";

			for(current_roll = 0; current_roll < this.rollSetCountRolls[ results_set_count ].total_rolled_dice; current_roll++) {
				// each die roll section
				if(typeof(this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ]) != "undefined") {
					html += "<br />" + this.labelDieRollNumber  + "" + (current_roll + 1) + " (d" + this.rollSetCountRolls[ results_set_count ].base_roll_sides[ current_roll ] + "): ";
					if( this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ] ) {
						if( this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ].length > 2 ) {
							html += this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ].substring(
								0,
								this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ].length - 2
							);
						} else {
							html += this.rollSetCountRolls[ results_set_count ].base_rolls[ current_roll ];
						}
					}

				}

				// print out wild die rolls if exists
				if(typeof(this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ]) != "undefined") {
					if(this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ].length > 0)
						html += "<br />" + this.labelWildDieRollNumber + ( current_roll  + 1) + " (d6): ";

					if( this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ] ) {
						//console.log( "wild_die_rolls len: " +  this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ].length );
						if( this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ].length > 2 ) {
							html += this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ].substring(
								0,
								this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ].length - 2
							);
						} else {
							html += this.rollSetCountRolls[ results_set_count ].wild_die_rolls[ current_roll ];
						}
					}
				}

			}
		}

		return html;
	},
	traitSuccessMargin: function (roll, target_number, trait_set_count) {

		if (! target_number )
			target_number = this.successTargetNumber;

		value = roll/1 - target_number/1;

		html = "";


		if(typeof(trait_set_count) != "undefined" && this.rollSetCountRolls[ trait_set_count ].critical_failure > 0) {
			html += "<span  class=\"color-red bolded uppercase\">" + this.labelCriticalFailure + "</span>";
		} else {
			if(value < 0) {
				html += "<span  class=\"color-red\">" + this.labelFailure + "</span>";
			} else {
				raises = Math.floor(value/4);
				if(raises == 0) {
					html += this.labelSuccess;
				} else {
					if( raises == 1) {
						html += "<span  class=\"color-green bolded\">" + this.labelSuccessWithARaise + "</span>";
					} else {
						html += "<span  class=\"color-green bolded uppercase\">" + this.labelSuccessWithXRaises.replace("{raises}", raises) + "</span>";
					}
				}
			}
		}

		return html;
	},

	setResultMargins: function( input_target_number, input_base_toughness, input_armor, input_weapons_ap ) {
		this.successTargetNumber = input_target_number;
		this.successBaseToughness = input_base_toughness;
		this.successArmor = input_armor;
		this.successWeaponsAP = input_weapons_ap;
	},

	setLabel: function( label_name, label_value ) {
		if( label_name == "no_effect") {
			this.labelNoEffect = label_value;
			return label_value;
		}

		if( label_name == "total_roll") {
			this.labelTotalRoll = label_value;
			return label_value;
		}

		if( label_name == "shaken") {
			this.labelShaken = label_value;
			return label_value;
		}

		if( label_name == "shaken_and_a_wound") {
			this.labelShakenAndAWound = label_value;
			return label_value;
		}

		if( label_name == "shaken_and_x_wounds") {
			this.labelShakenAndXWoundS = label_value;
			return label_value;
		}

		if( label_name == "critical_failure") {
			this.labelCriticalFailure = label_value;
			return label_value;
		}

		if( label_name == "roll_set_number") {
			this.labelRollSetNumber = label_value;
			return label_value;
		}

		if( label_name == "failure") {
			this.labelFailure = label_value;
			return label_value;
		}

		if( label_name == "success") {
			this.labelSuccess = label_value;
			return label_value;
		}

		if( label_name == "success_with_a_raise") {
			this.labelSuccessWithARaise = label_value;
			return label_value;
		}

		if( label_name == "success_with_x_raises") {
			this.labelSuccessWithXRaises = label_value;
			return label_value;
		}

		if( label_name == "die_roll_number") {
			this.labelDieRollNumber = label_value;
			return label_value;
		}

		if( label_name == "wild_die_roll_number") {
			this.labelWildDieRollNumber = label_value;
			return label_value;
		}

		return null;
	},

	setAlwaysExplodingDice: function( new_value ) {
		this.always_exploding_dice = new_value;
		return this.always_exploding_dice;
	},

	damageSuccessMargin: function (roll, toughness, armor, armor_piercing) {

		if( !toughness )
			toughness = this.successBaseToughness;

		if( !armor )
			armor = this.successArmor;

		if( !armor_piercing )
			armor_piercing = this.successWeaponsAP;

		armor = armor/1 - armor_piercing/1;
		if(armor < 0)
			armor = 0;

		target_number = toughness/1 + armor/1;
		value = roll/1 - target_number/1;

		html = "";
		if(value < 0) {
			html += "<span>" + this.labelNoEffect + "</span>";
		} else {
			raises = Math.floor(value/4);
			if(raises == 0) {
				html += "<span class=\"color-orange\">" + this.labelShaken + "</span>";
			} else {
				if( raises == 1) {
					html += "<span class=\"color-red\">" + this.labelShakenAndAWound + "</span>";
				} else {
					html += "<span class=\"color-red bolded uppercase\">" + this.labelShakenAndXWoundS.replace("{raises}", raises) + "</span>";
				}
			}
		}
		return html;
	}
}

