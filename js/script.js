var availableLanguages = [];

baseApp = angular.module(
	'baseApp',
	['ngRoute', 'ngResource', 'ngSanitize','pascalprecht.translate'],
	[
		'$routeProvider',
		'$translateProvider',
		function ($routeProvider, $translateProvider, $scope, $http) {


			users_preferred_language = "en-US";
			if( localStorage && localStorage["users_preferred_language"] ) {
				users_preferred_language = localStorage["users_preferred_language"];
			} else {
				localStorage["users_preferred_language"] = users_preferred_language;
			}

			for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
				if( availableLanguages[lang_count].active ) {
					$translateProvider.translations(
						availableLanguages[lang_count].short_code ,
						availableLanguages[lang_count].translations
					);
				}
			}

			$translateProvider.useSanitizeValueStrategy('sanitize');

			$translateProvider.preferredLanguage(users_preferred_language);

			$routeProvider

			// route for the home/welcome page
			.when('/', {
				templateUrl : 'pages/welcome.html',
				controller  : 'welcomeController'
			})

			// route for the credits page
			.when('/credits', {
				templateUrl : 'pages/credits.html',
				controller  : 'creditsController'
			})

			// route for the core about page
			.when('/core/dice', {
				templateUrl : 'pages/core-dice.html',
				controller  : 'coreDiceController'
			})

			// route for the core extras page
			.when('/core/extras', {
				templateUrl : 'pages/core-extras.html',
				controller  : 'coreExtrasController'
			})

			// route for the core character maker page
			.when('/core/character-maker', {
				templateUrl : 'pages/core-character-maker.html',
				controller  : 'coreChargenController'
			})

			// route for the core mass batles page
			.when('/core/mass-battles', {
				templateUrl : 'pages/core-mass-battles.html',
				controller  : 'coreMassbattlesController'
			})

			// route for the core mass bartles page
			.when('/core/raise-calculator', {
				templateUrl : 'pages/core-raise-calculator.html',
				controller  : 'coreRaiseCalcController'
			})

			// route for the scifi power armor maker page
			.when('/scifi/power-armor-maker', {
				templateUrl : 'pages/scifi-power-armor-maker.html',
				controller  : 'scifiPowerarmorController'
			})

			// route for the scifi robot maker page
			.when('/scifi/robot-maker', {
				templateUrl : 'pages/scifi-robot-maker.html',
				controller  : 'scifiRobotController'
			})

			// route for the scifi starship maker page
			.when('/scifi/starship-maker', {
				templateUrl : 'pages/scifi-starship-maker.html',
				controller  : 'scifiStarshipController'
			})

			// route for the scifi vehicle page
			.when('/scifi/vehicle-maker', {
				templateUrl : 'pages/scifi-vehicle-maker.html',
				controller  : 'scifiVehicleController'
			})

			// route for the scifi walker maker page
			.when('/scifi/walker-maker', {
				templateUrl : 'pages/scifi-walker-maker.html',
				controller  : 'scifiWalkerController'
			})

			// route for the scifi world maker page
			.when('/scifi/world-maker', {
				templateUrl : 'pages/scifi-world-maker.html',
				controller  : 'scifiWorldController'
			})

			;
		}
	]
);

angular.module('baseApp').controller(
	'select_language',
	[
		'$translate',
		'$scope',
		'$route',
		function ($translate, $scope, $route) {

			$scope.available_languages = Array();
			$scope.users_language = {};
			for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
				if( availableLanguages[lang_count].active ) {
					language_object = {
						id: availableLanguages[lang_count].short_code,
						label: availableLanguages[lang_count].native_name
					};
					$scope.available_languages.push(
						language_object
					);
					if(localStorage["users_preferred_language"] == availableLanguages[lang_count].short_code ) {
						$scope.users_language = language_object;
						$scope.background_image_url = "url(images/flags/64/" + availableLanguages[lang_count].icon_file + ")";
					}
				}
			}

			$scope.updateLanguage = function( language_selected ) {

				$translate.use($scope.users_language.id);
				localStorage["users_preferred_language"] = $scope.users_language.id;
				for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
					if( availableLanguages[lang_count].active ) {
						if(localStorage["users_preferred_language"] == availableLanguages[lang_count].short_code ) {
							$scope.background_image_url = "url(images/flags/64/" + availableLanguages[lang_count].icon_file + ")";
						}
					}
				}

				$route.reload();
			}

			// $scope.change_language = function (key) {
			// 	$translate.use(key);
			// 	localStorage["users_preferred_language"] = key;

			// 	$route.reload();
			// };

		}
	]
);




function get_book_by_id( book_id, language ) {
	if( language )
		language = localStorage["users_preferred_language"];

	for( bookcount = 0; bookcount < savageWorldsBooksList.length; bookcount++) {
		if( savageWorldsBooksList[bookcount].id == book_id ) {
			if( savageWorldsBooksList[bookcount].name[ language ])
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ language ];
			else
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ "en-US" ];

			if( savageWorldsBooksList[bookcount].publisher[ language ])
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ language ];
			else
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ "en-US" ];

			if( savageWorldsBooksList[bookcount].copyright[ language ])
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ language ];
			else
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ "en-US" ];

			return  savageWorldsBooksList[bookcount];
		}
	}

	return null;
}

function localizeDiceValues() {
	for( var ldcv = 0 ; ldcv < globalDiceValues.length; ldcv++) {
		if( typeof(globalDiceValues[ldcv].label[ localStorage["users_preferred_language"] ] ) != "undefined") {
			globalDiceValues[ldcv].local_label = globalDiceValues[ldcv].label[ localStorage["users_preferred_language"] ];
		} else {
			globalDiceValues.local_label = globalDiceValues[ldcv].label[ "en-US" ];
		}
	}
}

function localizeSkills() {
	for( var ldcv = 0 ; ldcv < savageWorldsSkillList.length; ldcv++) {
		if( typeof(savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
			savageWorldsSkillList[ldcv].local_name = savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ];
		} else {
			savageWorldsSkillList.local_name = savageWorldsSkillList[ldcv].name[ "en-US" ];
		}

		if( typeof(savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
			savageWorldsSkillList[ldcv].local_description = savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ];
		} else {
			savageWorldsSkillList.local_description = savageWorldsSkillList[ldcv].description[ "en-US" ];
		}
	}
}



function get_local_skill_name( skill_id ) {
	for( var ldcv = 0 ; ldcv < savageWorldsSkillList.length; ldcv++) {
		if( savageWorldsSkillList[ldcv].id == skill_id ) {
			if( typeof(savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
				return savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ];;
			} else {
				//return savageWorldsSkillList[ldcv].name[ "en-US" ];
				return skill_id;
			}
		}
	}
	return skill_id;
}
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


var globalDiceValues = Array(
	{
		id: 0,
		label: {
			"en-US" : "n/a"
		}
	},
	{
		id: 1,
		label: {
			"en-US" : "d4"
		}
	},
	{
		id: 2,
		label: {
			"en-US" : "d6"
		}
	},
	{
		id: 3,
		label: {
			"en-US" : "d8"
		}
	},
	{
		id: 4,
		label: {
			"en-US" : "d10"
		}
	},
	{
		id: 5,
		label: {
			"en-US" : "d12"
		}
	},
	{
		id: 6,
		label: {
			"en-US" : "d12+1"
		}
	},
	{
		id: 7,
		label: {
			"en-US" : "d12+2"
		}
	},
	{
		id: 8,
		label: {
			"en-US" : "d12+3"
		}
	},
	{
		id: 9,
		label: {
			"en-US" : "d12+4"
		}
	},
	{
		id: 10,
		label: {
			"en-US" : "d12+5"
		}
	},
	{
		id: 11,
		label: {
			"en-US" : "d12+6"
		}
	},
	{
		id: 12,
		label: {
			"en-US" : "d12+7"
		}
	},
	{
		id: 13,
		label: {
			"en-US" : "d12+8"
		}
	},
	{
		id: 14,
		label: {
			"en-US" : "d12+9"
		}
	},
	{
		id: 15,
		label: {
			"en-US" : "d12+10"
		}
	},
	{
		id: 16,
		label: {
			"en-US" : "d12+11"
		}
	},
	{
		id: 17,
		label: {
			"en-US" : "d12+12"
		}
	},
	{
		id: 18,
		label: {
			"en-US" : "d12+13"
		}
	},
	{
		id: 19,
		label: {
			"en-US" : "d12+14"
		}
	}
);

function getDiceValue( diceID ) {
	for( var gdv = 0 ; gdv < globalDiceValues.length; gdv++) {
		if( diceID == globalDiceValues[gdv].id )
			return globalDiceValues[gdv];
	}
	return false;
}
function savageCharacter (useLang) {
	this.name = "";
	this.background = "";

	this.description = "";

	this.XP = 0;

	this.options = Array();

	// SWD is /always/ available.
	this.books = Array(
		savageWorldsBooksList[0]
	);

	// base attributes...
	this.attributes = {
		agility: getDiceValue(1),
		smarts: getDiceValue(1),
		spirit: getDiceValue(1),
		strength: getDiceValue(1),
		vigor: getDiceValue(1)
	};

	// derived statistics...
	this.derived = {
		pace: 6,
		charisma: 0,
		parry: 2,
		toughness: 4,
		armor: 0,
		sanity: 0
	};

	if( useLang )
		this.useLang = useLang;
	else if( localStorage["users_preferred_language"] )
		this.useLang = localStorage["users_preferred_language"];
	else
		this.useLang = "en-US";
	// character creation perks....
	this.perks = Array();

	// character development advances....
	this.advances = Array();

	// skills list...
	this.skills = Array();

	// edges list...
	this.edges = Array();

	// gear list...
	this.gear = Array();

	this.genderOptions = Array(
		{
			id: "m",
			label: this.getTranslation( "GENERAL_MALE" )
		},
		{
			id: "f",
			label: this.getTranslation( "GENERAL_FEMALE" )
		},
		{
			id: "o",
			label: this.getTranslation( "GENERAL_OTHER" )
		}
	);
	this.gender = this.genderOptions[0];
}

savageCharacter.prototype.setGender = function( genderID ) {
	for(var gc = 0; gc < this.genderOptions.length; gc++) {
		if( genderID == this.genderOptions[gc].id ) {
			this.gender = this.genderOptions[gc];
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addEdge = function(bookId, tag) {
// TODO
}

savageCharacter.prototype.removeEdge = function(indexNumber) {
	if( this.edges[indexNumber] ) {
		this.edges = this.edges.splice(indexNumber, 1);
		return true;
	}
	return false;
}

savageCharacter.prototype.addHindrance = function(bookId, tag) {
// TODO
}

savageCharacter.prototype.removeHindrance = function(indexNumber) {
	if( this.hindrances[indexNumber] ) {
		this.hindrances = this.hindrances.splice(indexNumber, 1);
		return true;
	}
	return false;
}

savageCharacter.prototype.addGear = function(bookId, tag) {
// TODO
}

savageCharacter.prototype.removeGear = function(indexNumber) {
	if( this.gear[indexNumber] ) {
		this.gear = this.gear.splice(indexNumber, 1);
		return true;
	}
	return false;
}

// Validate does both calculation and validation of the character as per the base rules and settings
savageCharacter.prototype.validate = function() {
}

savageCharacter.prototype.loadJSON = function( jsonString ) {
	if( jsonString ) {
		importObject = JSON.parse(jsonString);
		if( importObject ) {
			this.name = importObject.name;
			this.background = importObject.background;
			this.description = importObject.description;
			for( attribute in this.attributes ) {
				if( importObject.attributes[ attribute ] ) {
					attribute = attribute.toLowerCase().trim();
					if( this.attributes[attribute] )
						this.attributes[attribute] = getDiceValue( importObject.attributes[ attribute ] );					
				}
			}

			if( importObject.gender )
				this.setGender( importObject.gender  );

			this.validate();
			return true;
		}
	}

	return false;
}


savageCharacter.prototype.saveJSON = function() {
	exportObject = {};
	exportObject.name = this.name;
	exportObject.background = this.background;
	exportObject.description = this.description;

	exportObject.xp = this.xp;
	exportObject.gender = this.gender.id;

	exportObject.attributes = {
		agility: this.attributes.agility.id,
		smarts: this.attributes.smarts.id,
		spirit: this.attributes.spirit.id,
		strength: this.attributes.strength.id,
		vigor: this.attributes.vigor.id,
	}

	return JSON.stringify( exportObject );
}

savageCharacter.prototype.getTranslation = function(langKey) {
	for( lang_count = 0; lang_count < availableLanguages.length; lang_count++ ) {
		if( availableLanguages[lang_count].short_code == this.useLang ) {

			if(availableLanguages[lang_count].translations[langKey] ) {
				return availableLanguages[lang_count].translations[langKey];
			} else {
				return langKey;
			}
		}
	}
	return langKey;
}


savageCharacter.prototype.getLocalName = function( incoming_string_array ) {
		if( incoming_string_array[ this.useLang] ) {
			return incoming_string_array[ this.useLang];
		} else {
			return incoming_string_array[ "en-US" ];
		}
}

/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

var scifiCreator = function() {};
scifiCreator.prototype = {

	init: function(objectType, objectLabel, availableSizes, availableMods, availableOptions) {
		this.itemName = "";
		this.objectDescription = "";
		this.useLang = "en-US";

		this.uuid = this.makeUUID();

		this.objectLabel = objectLabel;
		this.examples = "";
		this.extraNotes = "";
		this.size = 0;
		this.objectType = objectType;
		this.acc = 0;
		this.ts = 0;
		this.climb = 0;
		this.toughness = 0;
		this.baseToughness = 0;
		this.baseCost = 0;
		this.armor = 0;
		this.frontArmor = 0
		this.sideArmor = 0;
		this.creatorOptions = Array();
		this.numberOfLegs = 0;
		this.rearArmor = 0;
		this.mods = 0;
		this.baseMods = 0;
		this.crew = 0;
		this.hasWeaponMounts = 0;
		this.requiresMountPoint = 0;
		this.flyingPace = 0;
		this.cost = 0;
		this.vehicleWeaponModPoints = 0;
		this.energyCapacity =  0;
		this.baseEnergyCapacity =  0;
		this.provisions = 0;

		this.hasTorpedoTube = 0;
		this.hasMissileLauncher = 0;

		this.aircraft = 0;

		this.selectedSize = 0;

		if(availableOptions)
			this.availableOptions = availableOptions;
		else
			this.availableOptions = Array();

		if(availableSizes)
			this.availableSizes = availableSizes;
		else
			this.availableSizes = Array();

		if(availableMods)
			this.availableMods = availableMods;
		else
			this.availableMods = Array();

		this.selectedModifications = Array();
		this.selectedModifications_list = {};

		this.mods_available = 0;

		this.selected_weapons = Array();
		this.selectedWeaponsList = Array();

		if(this.objectType == "power_armor") {
			this.requiresMountPoint = 1;
			this.hasWeaponMounts = 1;
		} else {
			this.requiresMountPoint = 0;
			this.hasWeaponMounts = 0;
		}
	},

	makeUUID: function(){
	    var d = new Date().getTime();
	    if(window.performance && typeof window.performance.now === "function"){
	        d += performance.now(); //use high-precision timer if available
	    }
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	},

	reset: function() {
		this.init(this.objectType, this.objectLabel, this.availableSizes, this.availableMods, this.availableOptions);
	},

	setSizes: function(availableSizes) {
		this.availableSizes = availableSizes
	},

	exportHTML: function() {
		return this.createStatesBlock();
	},

	getModName: function( modTag ) {
		// search through available mods to see if function exists

		for(getModCount = 0; getModCount < this.availableMods.length; getModCount++) {
			if( this.availableMods[getModCount].tag == modTag ) {
				return this.getLocalName( this.availableMods[getModCount].name );
			}
		}

		return "Error: getModName - Not Found !";
	},

	getTranslation: function(langKey) {
		// console.log("getTranslation", this.useLang + " / " + langKey);
		for( lang_count = 0; lang_count < availableLanguages.length; lang_count++ ) {
			if( availableLanguages[lang_count].short_code == this.useLang ) {

				if(availableLanguages[lang_count].translations[langKey] ) {
					return availableLanguages[lang_count].translations[langKey];
				} else {
					return langKey;
				}
			}
		}
		return langKey;
	},


	simplify_cost: function (input_price) {
		if(input_price > 1000000000) {
			// it's a billion+
			return input_price / 1000000000 + 'B';
		} else if(input_price > 1000000) {
			// it's a million+
			return input_price / 1000000 + 'M';
		} else if(input_price > 1000){
			// it's a thousand+
			return input_price / 1000 + 'K';
		} else {
			return input_price;
		}
	},

	getLocalName: function( incoming_string_array ) {
		if( incoming_string_array[ this.useLang] ) {
			return incoming_string_array[ this.useLang];
		} else {
			return incoming_string_array[ "en-US" ];
		}
	},

	formatMoney: function(n, decPlaces, thouSeparator, decSeparator) {
	    var
	        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
	        decSeparator = decSeparator == undefined ? "." : decSeparator,
	        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
	        sign = n < 0 ? "-" : "",
	        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
	        j = (j = i.length) > 3 ? j % 3 : 0;
	    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
	},

	createStatesBlock: function(jquery_selector) {
		html_return = "";

		html_return += "<h3>" + this.itemName + "</h3>";
		html_return += "<p>";

		html_return += this.objectDescription + "</p><br />";

		if(this.selectedSize && this.selectedSize.size > 0) {
			html_return += "<strong>" + this.getLocalName(this.selectedSize.sizeLabel)  + "</strong>: ";
			html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
			if(this.acc > 0)
				html_return += this.getTranslation("CREATOR_ACC_TS") + " " +  this.acc + "/" + this.formatPaceRealWorld(this.ts) + ", ";
			if(this.aircraft)
				html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
			if(this.flyingPace > 0)
				html_return += this.getTranslation("CREATOR_FLYPACE") + " " +  this.formatPaceRealWorld(this.flyingPace) + ", ";
			if(this.toughness > 0) {
				if( this.frontArmor > 0 ) {
					html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (<span title='" + this.getTranslation("CREATOR_FASARA")  + ")'>" + this.frontArmor + "/" + this.sideArmor + "/" +  this.rearArmor + "</span>), ";
				} else {
					html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
				}

			} else {
				if(this.armor) {
					html_return += this.getTranslation("CREATOR_ARMOR") + " +"  + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += this.getTranslation("CREATOR_PACE") + " "  + this.formatPaceRealWorld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += this.getTranslation("CREATOR_CREW") + " "  + this.crew + ", ";

			if(this.strength > 0 && this.objectType != "power_armor")
				html_return += this.getTranslation("CREATOR_STRENGTH") + " "  + this.getLocalName(  this.getStrengthLabel( this.strength ).label ) + ", ";

			html_return += this.getTranslation("CREATOR_COST") + " C$" + this.formatMoney(this.cost, 0) + ", ";
			html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " "  + this.mods_available + "<br />";


			//html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";
			if( this.hasWeaponMounts )
				html_return += "<strong>" + this.getTranslation("CREATOR_WEAPON_MODS_AVAILABLE")  + "</strong>: " + this.vehicleWeaponModPoints + "<br />";

			html_return += "<strong>" + this.getTranslation("CREATOR_NOTES")  + "</strong>: ";

			this.sortSelectedModificationsList();
			var mod_count = 0;

			for(var modTag in this.selectedModifications_list){

				if( mod_count > 0)
					html_return += ", ";
				if(this.selectedModifications_list[modTag] > 1)
  					html_return += this.selectedModifications_list[modTag] + "x "

  				modName = this.getModName(modTag);
  				html_return += modName;

  				mod_count++;
			}
			if( mod_count == 0)
				html_return += this.getTranslation("CREATOR_NONE");

			html_return += "<br />";

			html_return += "<strong>" + this.getTranslation("CREATOR_WEAPONS")  + "</strong>: ";
			//this.sort_selectedWeaponsList();
			html_return += "<ul>";
			var weapon_count = 0;
//			console.log("this.selectedWeaponsList",this.selectedWeaponsList);
			for(var weaponName in this.selectedWeaponsList){
				html_return += "<li>";
				if(this.selectedWeaponsList[weaponName].count > 1)
  					html_return += this.selectedWeaponsList[weaponName].count + "x ";
  				//this.selectedWeaponsList[weaponName].obj = this.updateWeaponDisplayName( this.selectedWeaponsList[weaponName] );
  				html_return += this.selectedWeaponsList[weaponName].obj.display_name;
  				html_return += this.makeWeaponStatHTML( this.selectedWeaponsList[weaponName].obj );
  				html_return += "</li>";
  				weapon_count++;
			}
			if( weapon_count == 0 )
				html_return += "<li>" + this.getTranslation("CREATOR_NONE")  + "</li>";
			html_return += "</ul>";

			if( this.getModificationCount("Shields") > 0) {
				html_return += "<strong>" + this.getTranslation("CREATOR_SHIELDS")  + "</strong>: ";
				html_return += this.size * 10;
				may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
				html_return += " - " + may_recover + "<br />";
			}

			if(this.energyCapacity > 0)
				html_return += "<strong>" + this.getTranslation("CREATOR_ENERGY_CAPACITY")  + "</strong>: " + this.energyCapacity + "<br />";

			if( this.extraNotes != "" ) {
				html_return += "<strong>" + this.getTranslation("CREATOR_EXTRA_NOTES")  + "</strong>: ";
				html_return += this.extraNotes;
			}
		} else {
			html_return += this.getTranslation("CREATOR_SIZE_MUST_BE_SELECTED");
		}
		if(jquery_selector)
			$(jquery_selector).html(html_return);

		return html_return;
	},

	makeWeaponStatHTML: function( weapon_object ) {
		return_val = " (";
		return_val += weapon_object.range + ", ";
		return_val += weapon_object.damage;
		if( weapon_object.count >= 4)
			return_val += " +2";
		else if( weapon_object.count >= 3)
			return_val += " +1";
		else if( weapon_object.count >= 2)
			return_val += " +1";

		return_val += ", ";
		notes = this.getLocalName( weapon_object.notes );
		if( notes != "")
			return_val += notes + ", ";
		return_val = return_val.substring(0, return_val.length - 2);
		return_val += ")";
		return return_val;
	},

	exportBBCode: function(jquery_selector) {
		html_return = "";

		html_return += "[b][size=150]" + this.itemName + "[/size][/b]\n";
		if(this.objectDescription)
			html_return += "" + this.objectDescription + "\n\n";
		else
			html_return += "\n";

		if(this.selectedSize && this.selectedSize.sizeLabel) {
			html_return += "[b]" + this.getLocalName(this.selectedSize.sizeLabel) + "[/b]: ";
			html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
			if(this.acc > 0)
				html_return += this.getTranslation("CREATOR_ACC_TS") + " " + this.acc + "/" + this.formatPaceRealWorld(this.ts) + ", ";
			if(this.aircraft)
				html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
			if(this.flyingPace > 0)
				html_return += this.getTranslation("CREATOR_FLYPACE") + " " + this.formatPaceRealWorld(this.flyingPace) + ", ";
			if(this.toughness > 0) {
				html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
			} else {
				if(this.armor) {
					html_return += this.getTranslation("CREATOR_ARMOR") + "  +" + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += this.getTranslation("CREATOR_PACE") + "  " + this.formatPaceRealWorld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += this.getTranslation("CREATOR_CREW") + "  " + this.crew + ", ";

			if(this.strength > 0 && this.objectType != "power_armor")
				html_return += this.getTranslation("CREATOR_STRENGTH") + " "  + this.getLocalName(  this.getStrengthLabel( this.strength ).label ) + ", ";

			html_return += this.getTranslation("CREATOR_COST") + " C$" + this.simplify_cost(this.cost) + ", ";
			html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " " + this.mods_available + "\n";

			html_return += "[b]" + this.getTranslation("CREATOR_NOTES") + "[/b]: ";

			var mod_count = 0;
			for(var modName in this.selectedModifications_list){
				if( mod_count > 0)
					html_return += ", ";
				if(this.selectedModifications_list[modName] > 1)
  					html_return += this.selectedModifications_list[modName] + "x ";
				html_return += modName;
				mod_count++;
			}
			if(mod_count == 0)
				html_return += this.getTranslation("CREATOR_NONE");

			html_return += "\n";

			html_return += "[b]" + this.getTranslation("CREATOR_WEAPONS") + "[/b]: ";
			html_return += "[list]";
			//this.sort_selectedWeaponsList();
			var weapon_count = 0;
			var weapon_count = 0;
			// console.log("this.selectedWeaponsList",this.selectedWeaponsList);
			for(var weaponName in this.selectedWeaponsList){
				html_return += "[*]";
				if(this.selectedWeaponsList[weaponName].count > 1)
  					html_return += this.selectedWeaponsList[weaponName].count + "x ";
  				//this.selectedWeaponsList[weaponName].obj = this.updateWeaponDisplayName( this.selectedWeaponsList[weaponName] );
  				html_return += this.selectedWeaponsList[weaponName].obj.display_name;
  				html_return += this.makeWeaponStatHTML( this.selectedWeaponsList[weaponName].obj );
  				html_return += "\n";
  				weapon_count++;
			}
			if( weapon_count == 0 )
				html_return += "[*]" + this.getTranslation("CREATOR_NONE") + ".\n";
			html_return += "[/list]";

			html_return += "\n";

			if( this.getModificationCount("Shields") > 0) {
				html_return += "[b]" + this.getTranslation("CREATOR_SHIELDS") + "[/b]: ";
				html_return += this.size * 10;
				may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
				html_return += " - " + may_recover + "\n";
			}


			if(this.energyCapacity > 0)
				html_return += "[b]" + this.getTranslation("CREATOR_ENERGY_CAPACITY") + "[/b]: " + this.energyCapacity + "\n";
		} else {
			html_return += this.getTranslation("CREATOR_SIZE_MUST_BE_SELECTED");
		}



		for(removeHideCounter = 1; removeHideCounter < 31; removeHideCounter++) {
			html_return = html_return.replace("<span class='hide'>" + removeHideCounter + "</span>", "");

			// fix for bb code sunglasses when posting some vehicles and walkers to a bb forum.
			html_return = html_return.replace("8)", " 8 )");
		}



		if(jquery_selector)
			$(jquery_selector).val(html_return);

		return html_return;
	},

	exportJSON: function(jquery_selector) {
		exportObject = {};
		exportObject.size = this.size;
		exportObject.objectType = this.objectType;
		exportObject.itemName = this.itemName;
		exportObject.uuid = this.uuid;
		exportObject.objectDescription = this.objectDescription;
		exportObject.mods = Array();
		exportObject.options = this.creatorOptions;
		for(modCounter = 0; modCounter < this.selectedModifications.length; modCounter++)
			exportObject.mods = exportObject.mods.concat( this.selectedModifications[modCounter].tag );
		exportObject.weapons = Array();
		for(local_weapon_counter = 0; local_weapon_counter < this.selected_weapons.length; local_weapon_counter++) {
			weapon_item = {
				tag: this.selected_weapons[local_weapon_counter].tag,
				fixed: this.selected_weapons[local_weapon_counter].fixed,
				count: this.selected_weapons[local_weapon_counter].count
			};
			exportObject.weapons = exportObject.weapons.concat( weapon_item );
		}

		export_string = JSON.stringify(exportObject);
		if(jquery_selector)
			$(jquery_selector).val(export_string);

		return export_string;

	},

	stripslashes: function(str) {
		return (str + '').replace(/\\(.?)/g, function (s, n1) {
		switch (n1) {
		case '\\':
		  return '\\';
		case '0':
		  return '\u0000';
		case '':
		  return '';
		default:
		  return n1;
		}
		});
	},

	importJSON: function(importedObjectString) {
		try {
			importedObjectString = this.stripslashes(importedObjectString);
			importedObj= JSON.parse(importedObjectString);
		}
		catch(e) {
			// JSON Import error
			// console.log("JSON import error for '" + importedObjectString + "'");
			// console.log("error object", e);
			return false;
		}

		if(typeof importedObj =='object') {
			this.reset();
			this.setSize(importedObj.size);
			this.setName(importedObj.itemName);
			if( typeof(importedObj.objectDescription) != "undefined")
				this.setDescription(importedObj.objectDescription);



			if( typeof(importedObj.uuid) != "undefined")
				this.uuid = importedObj.uuid;

			// legacy version description checks
			if( typeof(importedObj.ship_description) != "undefined")
				this.setDescription(importedObj.ship_description);
			if( typeof(importedObj.power_armor_description) != "undefined")
				this.setDescription(importedObj.power_armor_description);
			if( typeof(importedObj.walker_description) != "undefined")
				this.setDescription(importedObj.walker_description);
			if( typeof(importedObj.vehicle_description) != "undefined")
				this.setDescription(importedObj.vehicle_description);
			if( typeof(importedObj.object_description) != "undefined")
				this.setDescription(importedObj.object_description);
			if( typeof(importedObj.item_name) != "undefined")
				this.setName(importedObj.item_name);

			if( importedObj.options )
				this.creatorOptions = importedObj.options;

			for(modCounter = 0; modCounter < importedObj.mods.length; modCounter++)
				this.addMod( importedObj.mods[modCounter] );

			for(local_weapon_counter = 0; local_weapon_counter < importedObj.weapons.length; local_weapon_counter++) {
				if( importedObj.weapons[local_weapon_counter].tag)
					this.addWeapon( importedObj.weapons[local_weapon_counter].tag );
				else
					this.addWeapon( importedObj.weapons[local_weapon_counter].name );

				if( typeof(importedObj.weapons[local_weapon_counter].fixed) != "undefined" && importedObj.weapons[local_weapon_counter].fixed != "")
					this.fixWeapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].fixed );

				if( typeof(importedObj.weapons[local_weapon_counter].count) != "undefined" && importedObj.weapons[local_weapon_counter].count > 0)
					this.setWeaponCount( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].count );

				if( typeof(importedObj.weapons[local_weapon_counter].linked) != "undefined" && importedObj.weapons[local_weapon_counter].linked > 0)
					this.linkWeapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].linked);

			}
			this.calculate();
			return true;
		}
		// Wasn't an object (or was empty)
		// console.log("Import is not object");
		return false;
	},

	sortSelectedModificationsList: function() {
		var keyList = Object.keys(this.selectedModifications_list);

		keyList.sort();

		var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
			newList[keyName] = this.selectedModifications_list[keyName];
		}
		this.selectedModifications_list = newList;
	},

	// sort_selectedWeaponsList: function() {
	//  	 Do nothing as the main should handle this now
	// },

	sortWeaponList: function() {

		this.selected_weapons.sort(function(a, b){
			if( a.linkable < b.linkable ) return 1;
			if( a.linkable > b.linkable ) return -1;
			if(a.mods > b.mods) return -1;
			if(a.mods < b.mods) return 1;
			return 0;
		});
	},

	appendExtraNotes: function( note ) {
		if(this.extraNotes != "")
			this.extraNotes += ", ";
		this.extraNotes += note;
		return note;
	},

	calculate: function() {


		if( this.selectedSize && this.selectedSize.sizeLabel ) {
			// Flush Stats for recalulation
			this.strength = 0;

			this.strengthBonus = 0;
			this.aircraft = 0;
			this.watercraft = 0;
			this.flyingPace = 0;
			this.hasWeaponMounts = 0;
			this.vehicleWeaponModPoints = 0;

			this.hasTorpedoTube = 0;
			this.hasMissileLauncher = 0;

			this.examples = this.selectedSize.examples;
			this.size = this.selectedSize.size;
			this.acc = this.selectedSize.acc;
			this.ts = this.selectedSize.ts;
			this.aircraft = 0;
			this.strengthBonus = 0;
			this.climb = this.selectedSize.climb;
			if(this.selectedSize.strength)
				this.strength = this.selectedSize.strength;
			this.toughness = this.selectedSize.toughness;
			this.baseToughness = this.selectedSize.toughness;
			this.armor = this.selectedSize.armor;
			this.mods = this.selectedSize.mods;
			this.baseMods = this.selectedSize.mods;
			this.crew = this.selectedSize.crew;
			this.cost = this.selectedSize.cost;
			this.baseCost =  this.selectedSize.cost;
			this.energyCapacity = this.selectedSize.energyCapacity;
			this.baseEnergyCapacity = this.selectedSize.energyCapacity;
			this.provisions = this.selectedSize.provisions;
			this.weight = this.selectedSize.weight;
			this.pace = this.selectedSize.pace;
			this.basePace = this.selectedSize.pace;

			this.extraNotes = "";

			this.mods_available = this.mods;

			// Starship is always an aircraft for these purposes ;)
			if(this.objectType == "starship")
				this.aircraft = 1;

			if( this.selectedSize && this.selectedSize.strength )
				this.strength = this.selectedSize.strength;
			// Go through Mods for availability, calculation and listings
			this.selectedModifications.sort( this.sortMods );
			// Sort mods
			this.selectedModifications_list = {};
			for(calcModCount = 0; calcModCount < this.selectedModifications.length; calcModCount++) {
				//this.selectedModifications_list += "<li>" + this.selectedModifications[modCount].name + "</li>";
				this.mods = this.mods - this.selectedModifications[calcModCount].getModCost(this);
				this.cost += this.selectedModifications[calcModCount].getCost(this);

				// attempt to see if mod is still availble - remove if it's not.
				if( this.selectedModifications[calcModCount].isAvailable ) {
					if(this.selectedModifications[calcModCount].isAvailable(this) == false) {
						this.removeMod(this.selectedModifications[calcModCount].tag);
						this.calculate();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

				// console.log( this.selectedModifications[calcModCount].name + "/" + this.selectedModifications[calcModCount].getModCost(this) + "/" + this.mods );

				if( this.selectedModifications[calcModCount].getWeight )
					this.weight += this.selectedModifications[calcModCount].getWeight(this);

				if( this.selectedModifications[calcModCount].getModEffect )
					this.selectedModifications[calcModCount].getModEffect(this);

				// Linked weapons are displayed elsewhere...
				if(this.selectedModifications[calcModCount].tag != "linked") {
					if( typeof(this.selectedModifications_list[this.selectedModifications[calcModCount].tag]) == "undefined")
						this.selectedModifications_list[this.selectedModifications[calcModCount].tag] = 1;
					else
						this.selectedModifications_list[this.selectedModifications[calcModCount].tag]++;
				}
			}

			// Go through Weapons for availability, calculation and listings
			// Sort weapons
			//this.selected_weapons.sort( sortMods );
			this.sortWeaponList();

			this.selectedWeaponsList = {};
			fixedWeaponModUsage = 0;
			linkedWeaponModUsage = Array();
			otherWeaponModUsage = 0;
			for(calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {

				// attempt to see if weapon is still availble - remove if it's not.
				if( this.selected_weapons[calcModCount].isAvailable ) {
					if(this.selected_weapons[calcModCount].isAvailable(this) == false) {
						this.removeWeapon(calcModCount);
						this.calculate();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

				this.selected_weapons[calcModCount] = this.updateWeaponDisplayName( this.selected_weapons[calcModCount] );
				// Continue on....
				weaponModCost = this.selected_weapons[calcModCount].mods;

				if( typeof(this.selected_weapons[calcModCount].current_mod_cost) != "undefined") {
					weaponModCost = this.selected_weapons[calcModCount].current_mod_cost;
				}

				if(this.selected_weapons[calcModCount].fixed != 0 && this.selected_weapons[calcModCount].fixed != "")
					weaponModCost = weaponModCost / 2;

				// if(this.selected_weapons[calcModCount].count > 1) {
				// 	console.log(weaponModCost, this.selected_weapons[calcModCount].count);
				// 	weaponModCost = (this.selected_weapons[calcModCount].count * weaponModCost) / 2;
				// 	console.log(weaponModCost);
				// }
				//this.vehicleWeaponModPoints = this.vehicleWeaponModPoints - weaponModCost;


				if(this.requiresMountPoint > 0)
					this.vehicleWeaponModPoints -= weaponModCost;
				else
					this.mods -= weaponModCost;

				// console.log( this.selected_weapons[calcModCount].name + "(" + this.selected_weapons[calcModCount].count + ")/" + weaponModCost + "/" + this.mods );

				if( this.selected_weapons[calcModCount].getWeight )
					this.weight += this.selected_weapons[calcModCount].getWeight(this);

				if( this.selected_weapons[calcModCount].count > 1) {
					this.cost += this.selected_weapons[calcModCount].cost / 1 * this.selected_weapons[calcModCount].count;
				} else {
					this.cost += this.selected_weapons[calcModCount].cost / 1;
				}


				weaponListName = this.selected_weapons[calcModCount].display_name;
				//console.log("*",this.selected_weapons[calcModCount].fixed.toLowerCase().trim());
				if(
					this.selected_weapons[calcModCount].fixed != 0
					&&
					this.selected_weapons[calcModCount].fixed != '0'
					&&
					this.selected_weapons[calcModCount].fixed != ""
				) {

					switch( this.selected_weapons[calcModCount].fixed.toLowerCase().trim() ) {
						case "bow":
							fixedLabel = this.getTranslation("CREATOR_FIXED_BOW_FRONT");
						//	console.log("bow",this.selected_weapons[calcModCount].fixed.toLowerCase().trim());
							break;
						case "port":
							fixedLabel = this.getTranslation("CREATOR_FIXED_PORT_LEFT");
							break;
						case "starboard":
							fixedLabel = this.getTranslation("CREATOR_FIXED_STARBOARD_RIGHT");
							break;
						case "stern":
							fixedLabel = this.getTranslation("CREATOR_FIXED_STERN_REAR");
							break;
						default:
							fixedLabel = this.getTranslation("CREATOR_FIXED");
							break;
					}

					weaponListName = weaponListName + " (" + fixedLabel + ")";
					this.selected_weapons[calcModCount].display_name = weaponListName;

				} else {
					if(this.selected_weapons[calcModCount].linked) {
						weaponListName = weaponListName + " (linked<span class='hide'>" + this.selected_weapons[calcModCount].linked + "</span>)";
					}
				}
				// console.log("weaponListName", weaponListName);
				// console.log("this.selectedWeaponsList[weaponListName]", this.selectedWeaponsList[weaponListName]);
				if( typeof(this.selectedWeaponsList[weaponListName]) == "undefined" || this.selectedWeaponsList[weaponListName] == "0") {
					if( this.selected_weapons[calcModCount].missiles_per > 0)
						this.selectedWeaponsList[weaponListName] = {
							obj: this.selected_weapons[calcModCount],
							count: this.selected_weapons[calcModCount].missiles_per
						};
					else
						this.selectedWeaponsList[weaponListName] = {
							obj: this.selected_weapons[calcModCount],
							count: 1
						};

				} else {
					if( this.selected_weapons[calcModCount].missiles_per > 0 )
						this.selectedWeaponsList[weaponListName].count = (this.selectedWeaponsList[weaponListName].count / 1) + (this.selected_weapons[calcModCount].missiles_per / 1);
					else
						this.selectedWeaponsList[weaponListName].count++;
				}
			}

			this.mods_available = this.mods; // - sortSelectedModificationsList.length;
			if(this.requiresMountPoint == 0) {
				this.vehicleWeaponModPoints = this.mods_available; // - sortSelectedModificationsList.length;
			}


		}
	},

	setName: function(newValue) {
		this.itemName = newValue;
	},

	setOption: function( short_tag, value ) {
//		console.log("setOption called: " + this.getOptionLSName(short_tag) + ", " + value);
		localStorage.setItem( this.getOptionLSName(short_tag), value.toString() );
	},

	getOptionLSName: function( short_tag) {
		return "com.jdg.swwt.settings." + current_selectedObject.objectType + "." + short_tag;
	},

	getAvailableOptions: function() {
//		console.log("getAvailableOptions called");
		if(this.availableOptions) {
			// put current values into system
			for(localSettingCount = 0; localSettingCount < this.availableOptions.length; localSettingCount++) {
				if( typeof(this.availableOptions[localSettingCount].desciption) == "undefined") {
					this.availableOptions[localSettingCount].desciption = "";
				}

				this.availableOptions[localSettingCount].value = localStorage.getItem( this.getOptionLSName( this.availableOptions[localSettingCount].short_tag ) );
//				console.log(this.getOptionLSName( this.availableOptions[localSettingCount].short_tag ) + " - " + this.availableOptions[localSettingCount].value);
				if(this.availableOptions[localSettingCount].value == "1")
					this.availableOptions[localSettingCount].value = this.availableOptions[localSettingCount].value / 1;
			}
			return this.availableOptions;

		} else {
//			console.log("No settings?");
			return Array();
		}
	},

	formatPaceRealWorld: function(pace_value) {
		// never take things at pace value. /groan
		return pace_value + " (" + Math.floor(pace_value * 2.4)+ " mph, " + Math.floor(pace_value * 3.862416) + " kph)";
	},

	setDescription: function(newValue) {
		this.objectDescription = newValue;
	},

	addMod: function(modName) {
		return_value = 0;
		if( !modName ) {
			return false;
		}
		for(addModCount = 0; addModCount < this.availableMods.length; addModCount++) {
			if(
				modName.toLowerCase() == this.availableMods[addModCount].tag.toLowerCase()
				||
				modName.toLowerCase() == this.availableMods[addModCount].name["en-US"].toLowerCase()
			) {
				//newMod = jQuery.extend({}, this.availableMods[addModCount]);
				var newMod = {};
				angular.extend(newMod, this.availableMods[addModCount]);
				this.selectedModifications = this.selectedModifications.concat( newMod  );
				return;
			}
		}

		return return_value;
	},

	getStrengthLabel: function( strength_value ) {
		return getDiceValue( strength_value );
		// strength_value = strength_value / 1;
		// if( attribute_labels[strength_value] )
		// 	return attribute_labels[strength_value];
		// else
		// 	return "UNKNOWN VALUE";
	},

	addWeapon: function(weaponName) {
		return_value = 0;
		for(addlocal_weapon_count = 0; addlocal_weapon_count < savageWorldsVehicleWeapons.length; addlocal_weapon_count++) {
			if(
				(
					weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].tag.toLowerCase()
				)
					||
				(
					typeof(savageWorldsVehicleWeapons[addlocal_weapon_count].name_old) != "undefined"
						&&
					weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].name_old["en-US"].toLowerCase()
				)
					||
				(
					typeof(savageWorldsVehicleWeapons[addlocal_weapon_count].name) != "undefined"
						&&
					weaponName.toLowerCase() == savageWorldsVehicleWeapons[addlocal_weapon_count].name["en-US"].toLowerCase()

				)
			) {
//				newWeapon = new savageWorldsVehicleWeapons[addlocal_weapon_count];
				//newWeapon = jQuery.extend({}, savageWorldsVehicleWeapons[addlocal_weapon_count]);
				var newWeapon = {};
				angular.extend(newWeapon, savageWorldsVehicleWeapons[addlocal_weapon_count]);
				newWeapon.linked = 0;
				newWeapon.count = 1;
				newWeapon.fixed = 0;
				this.selected_weapons = this.selected_weapons.concat( newWeapon );
				return;
			}
		}

		return return_value;
	},

	updateWeaponDisplayName: function( weaponObject ) {
		weaponObject.count = weaponObject.count / 1;
		weaponObject.mods = weaponObject.mods / 1;

		if( weaponObject.count == 1 ){
			weaponObject.display_name = this.getLocalName(weaponObject.name);
		}
		if( weaponObject.count == 2 ){
			linkedTranslation = this.getTranslation("CREATOR_DUAL_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
		}
		if( weaponObject.count == 3 ){
			linkedTranslation = this.getTranslation("CREATOR_TRI_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
		}
		if( weaponObject.count == 4 ){
			linkedTranslation = this.getTranslation("CREATOR_QUAD_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.getLocalName(weaponObject.name_plural) );
		}

		if( weaponObject.count > 1 ) {
			weaponObject.current_mod_cost = (weaponObject.mods * weaponObject.count) / 2;
		} else {
			weaponObject.current_mod_cost = weaponObject.mods;
		}

		return weaponObject;
	},

	incrementWeaponCount: function( weaponIndex ) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons[weaponIndex].count++;
		if( this.selected_weapons[weaponIndex].count > 4)
			this.selected_weapons[weaponIndex].count = 4;

	},

	setWeaponCount: function( weaponIndex, newCount ) {
		weaponIndex = weaponIndex / 1;
		if( this.selected_weapons[weaponIndex] ) {
			this.selected_weapons[weaponIndex].count = newCount;
			if( this.selected_weapons[weaponIndex].count < 1)
				this.selected_weapons[weaponIndex].count = 1;
			if( this.selected_weapons[weaponIndex].count > 4)
				this.selected_weapons[weaponIndex].count = 4;
		}
	},

	decrementWeaponCount: function( weaponIndex ) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons[weaponIndex].count--;
		if( this.selected_weapons[weaponIndex].count < 1)
			this.selected_weapons[weaponIndex].count = 1;
	},

	removeMod: function(modName) {
		for(removeModCount = 0; removeModCount < this.selectedModifications.length; removeModCount++) {
			if(modName.toLowerCase() == this.selectedModifications[removeModCount].tag.toLowerCase()) {
				this.selectedModifications.splice(removeModCount, 1);
				return;
			}
		}
	},

	removeWeapon: function(weaponIndex) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons.splice(weaponIndex, 1);
	},

	linkWeapon: function(weaponIndex, linkIndex) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].linked = (linkIndex / 1);
	},

	fixWeapon: function(weaponIndex, fixedValue) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].fixed = (fixedValue);
	},

	getLinkedWeapons: function() {
		numberOfLinks = this.getModificationCount("Linked");
		returnVal = Array();
		if( numberOfLinks > 0 ){

			for(linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
				if(this.selected_weapons[linked_weapon_count].linked > 0) {
					// unset any links that were removed...
					if(this.selected_weapons[linked_weapon_count].linked > numberOfLinks)
						this.selected_weapons[linked_weapon_count].linked  = 0;
					else
						returnVal[this.selected_weapons[linked_weapon_count].linked] = this.selected_weapons[linked_weapon_count].name;
				}
			}
			while(returnVal.length < numberOfLinks + 1) {
				for(linked_weapon_count = returnVal.length; linked_weapon_count < numberOfLinks + 1; linked_weapon_count++) {
					returnVal[linked_weapon_count] = "";
				}
			}
		} else {
			// unlink all weapons as all links have disappeared
			for(linked_weapon_count = 0; linked_weapon_count < this.selected_weapons.length; linked_weapon_count++) {
				this.selected_weapons[linked_weapon_count].linked  = 0;
			}
			returnVal = Array();
		}

		return returnVal;

	},

	getModificationCount: function(modName) {
		return_value = 0;
		for(modCount = 0; modCount < this.selectedModifications.length; modCount++) {
			if(modName.toLowerCase() == this.selectedModifications[modCount].tag.toLowerCase())
				return_value++;
		}

		return return_value;
	},

	setSize: function(sizeNumber) {
		for(sizeCount = 0; sizeCount < this.availableSizes.length; sizeCount++) {
			if(sizeNumber == this.availableSizes[sizeCount].size) {
				this.selectedSize = this.availableSizes[sizeCount];
				this.size = this.availableSizes[sizeCount].size;
				return true;
			}
		}
		return false;
	},

	sortMods: function(a,b) {
		if( typeof(a.calcWeight) == "undefined")
			a.calcWeight = 5;
		if( typeof(b.calcWeight) == "undefined")
			b.calcWeight = 5;

		if (a.calcWeight < b.calcWeight){
			return -1;
		} else {
			if (a.calcWeight > b.calcWeight) {
				return 1;
			} else {
				return a.name > b.name;
			}
		}
	},
	optionActive: function( short_tag ) {
		value = localStorage.getItem( this.getOptionLSName( short_tag) );
		value = value / 1;
		if( value > 0 )
			return true;
		else
			return false;
	},

	addOption: function(option_tag) {
	//	console.log("addOption", option_tag);
	//	if( this.creatorOptions && !this.creatorOptions.contains( option_tag ) ) {
	//		this.creatorOptions.push( option_tag ) ;
	//	}
		var push_it = false;
		for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
			if( this.creatorOptions[opt_c] == option_tag )
				return false;
		}
		this.creatorOptions.push( option_tag ) ;

	},

	removeOption: function(option_tag) {
	//	console.log("removeOption", option_tag);
		for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
			if( this.creatorOptions[opt_c] == option_tag )
				this.creatorOptions.splice( opt_c, 1);

		}
	},

	hasOption: function(option_tag) {

		for( var opt_c = this.creatorOptions.length - 1; opt_c >= 0; opt_c--) {
			if( this.creatorOptions[opt_c] == option_tag )
				return true;
		}
		return false;
	},

	propogateSizeSelect: function(jquery_selector) {
		if(jquery_selector)
			jquery_selector = ".js-select-size";
		selectOptions = "<option value=''>- Select Size -</option>";
		for(sizeCount = 0; sizeCount < this.availableSizes.length; sizeCount++) {
			isSelected = "";
			display_option = true;
			if( typeof(this.availableSizes[sizeCount].showWithOption) != "undefined" ) {
				if( this.optionActive( this.availableSizes[sizeCount].showWithOption ) ) {
					display_option = true;
				} else {
					display_option = false;
				}
			}

			if( typeof(this.availableSizes[sizeCount].hideWithOption) != "undefined" ) {
				if( this.optionActive( this.availableSizes[sizeCount].hideWithOption ) ) {
					display_option = false;
				} else {
					display_option = true;
				}
			}

			if( display_option ) {
				if( this.selectedSize && this.selectedSize.size )
					if(  this.selectedSize.size == this.availableSizes[sizeCount].size )
						isSelected = " selected='selected'";
				selectOptions += "<option value='" + this.availableSizes[sizeCount].size + "'" + isSelected + ">";
				selectOptions += this.availableSizes[sizeCount].sizeLabel + " - Size " + this.availableSizes[sizeCount].size;
				if( this.availableSizes[sizeCount].examples )
					selectOptions += " - " + this.availableSizes[sizeCount].examples;
				selectOptions += "</option>";
			}
		}
		$(jquery_selector).html(selectOptions);
	}
};

angular.module("baseApp").controller(
	"coreChargenController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_chargen";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.chargen";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.chargen";
			var itemType = "chargen";
			var itemName = "Character";



			$translate([
				'APP_TITLE', 'INDEX_BUTTON_CORE_CHAR'
			]).then(
				function (translation) {

					$rootScope.title_tag = translation.INDEX_BUTTON_CORE_CHAR + " | " + translation.APP_TITLE;
					$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_CHAR;
				}
			);

			localizeDiceValues();

			$scope.diceValues = Array();

			for(gdvc = 0; gdvc < globalDiceValues.length; gdvc++) {
				if( 0 < globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id < 6 )
					$scope.diceValues.push( globalDiceValues[gdvc] );
			}

			$scope.savageCharacter = new savageCharacter( localStorage["users_preferred_language"] );

			if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
				$scope.savageCharacter.loadJSON( localStorage[ currentItemLocalStorageVariable ] );
			}



			$scope.charGenAttributes = $scope.savageCharacter.attributes;
			$scope.validateAndSave = function() {
				$scope.savageCharacter.validate();
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.saveJSON();
			}
			$scope.justSave = function() {
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.saveJSON();
			}
		}
	]
);
angular.module("baseApp").controller(
	"coreDiceController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {
			// Set Page Title Tag

			var dice_object = new classDice();
			dice_object.init();
			dice_object.setAlwaysExplodingDice(true);

			$scope.show_trait_options = false;
			$scope.show_damage_options = false;

			if( localStorage["com.jdg.swwt2.dice.input_parse_dice"] )
				$scope.input_parse_dice = localStorage["com.jdg.swwt2.dice.input_parse_dice"];
			else
				$scope.input_parse_dice = "d8 + 4";


			if( localStorage["com.jdg.swwt2.dice.select_roll_type"] )
				$scope.select_roll_type = localStorage["com.jdg.swwt2.dice.select_roll_type"];
			else
				$scope.select_roll_type = "roll";

			if( localStorage["com.jdg.swwt2.dice.input_target_number"] )
				$scope.input_target_number = localStorage["com.jdg.swwt2.dice.input_target_number"] / 1;
			else
				$scope.input_target_number = 4;

			if( localStorage["com.jdg.swwt2.dice.input_base_toughness"] )
				$scope.input_base_toughness = localStorage["com.jdg.swwt2.dice.input_base_toughness"] / 1;
			else
				$scope.input_base_toughness = 5

			if( localStorage["com.jdg.swwt2.dice.input_armor"] )
				$scope.input_armor = localStorage["com.jdg.swwt2.dice.input_armor"] / 1;
			else
				$scope.input_armor = 1

			if( localStorage["com.jdg.swwt2.dice.input_weapons_ap"] )
				$scope.input_weapons_ap = localStorage["com.jdg.swwt2.dice.input_weapons_ap"] / 1;
			else
				$scope.input_weapons_ap  = 0;


			if( $scope.select_roll_type == "damage" ) {
				$scope.show_trait_options = false;
				$scope.show_damage_options = true;
			} else if( $scope.select_roll_type == "trait" ) {
				$scope.show_trait_options = true;
				$scope.show_damage_options = false;
			} else {
				$scope.show_trait_options = false;
				$scope.show_damage_options = false;
			}

			$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_DICE', 'DICE_NO_DICE_THROWN' ]).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_BUTTON_CORE_DICE + " | " + translation.APP_TITLE;
				$scope.dice_results = translation.DICE_NO_DICE_THROWN;
				$total_roll_label = translation.DICE_TOTAL_ROLL;
				$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_DICE;
			});

			$translate(
				[
				'DICE_LABEL_NO_EFFECT', 'DICE_LABEL_SHAKEN', 'DICE_LABEL_SHAKEN_AND_A_WOUND',
				'DICE_LABEL_SHAKEN_AND_X_WOUNDS', 'DICE_LABEL_CRITICAL_FAILURE', 'DICE_LABEL_FAILURE',
				'DICE_LABEL_SUCCESS', 'DICE_LABEL_SUCCESS_WITH_A_RAISE', 'DICE_LABEL_SUCCESS_WITH_X_RAISES',
				'DICE_LABEL_DIE_ROLL_NUMBER', 'DICE_LABEL_WILD_DIE_ROLL_NUMBER', 'DICE_TOTAL_ROLL',
				'DICE_ROLL_SET_NUM'
				]
			).then( function( translation ) {

				dice_object.setLabel("no_effect",  translation.DICE_LABEL_NO_EFFECT);
				dice_object.setLabel("shaken", translation.DICE_LABEL_SHAKEN);
				dice_object.setLabel("shaken_and_a_wound", translation.DICE_LABEL_SHAKEN_AND_A_WOUND);

				dice_object.setLabel("shaken_and_x_wounds", translation.DICE_LABEL_SHAKEN_AND_X_WOUNDS);
				dice_object.setLabel("critical_failure", translation.DICE_LABEL_CRITICAL_FAILURE);
				dice_object.setLabel("failure", translation.DICE_LABEL_FAILURE);

				dice_object.setLabel("success", translation.DICE_LABEL_SUCCESS);
				dice_object.setLabel("success_with_a_raise", translation.DICE_LABEL_SUCCESS_WITH_A_RAISE);
				dice_object.setLabel("success_with_x_raises", translation.DICE_LABEL_SUCCESS_WITH_X_RAISES);

				dice_object.setLabel("die_roll_number", translation.DICE_LABEL_DIE_ROLL_NUMBER);
				dice_object.setLabel("wild_die_roll_number", translation.DICE_LABEL_WILD_DIE_ROLL_NUMBER);
				dice_object.setLabel("total_roll",  translation.DICE_TOTAL_ROLL);


				dice_object.setLabel("roll_set_number",  translation.DICE_ROLL_SET_NUM);
			} );



			$scope.extra_results = "";
			$scope.total_roll = "";

			$scope.rollDice = function () {
				localStorage["com.jdg.swwt2.dice.input_parse_dice"] = $scope.input_parse_dice;
				localStorage["com.jdg.swwt2.dice.select_roll_type"] = $scope.select_roll_type;

				localStorage["com.jdg.swwt2.dice.input_target_number"] = $scope.input_target_number;
				localStorage["com.jdg.swwt2.dice.input_base_toughness"] = $scope.input_base_toughness;
				localStorage["com.jdg.swwt2.dice.input_roll"] = $scope.input_roll;
				localStorage["com.jdg.swwt2.dice.input_armor"] = $scope.input_armor;
				localStorage["com.jdg.swwt2.dice.input_weapons_ap"] = $scope.input_weapons_ap;

				dice_object.setResultMargins(
				 		$scope.input_target_number,
				 		$scope.input_base_toughness,
				 		$scope.input_armor,
				 		$scope.input_weapons_ap
				);
				for_trait = 0;
				for_damage = 0;
				if( $scope.select_roll_type == "damage" ) {
					for_damage = 1;
				} else if( $scope.select_roll_type == "trait" ) {
					for_trait = 1;
				}

				$dice_roll = dice_object.parseRoll( $scope.input_parse_dice );

				$scope.dice_results  = dice_object.displayResults(for_trait, for_damage);
			};

			$scope.show_hide_options = function() {
				if( $scope.select_roll_type == "damage" ) {
					$scope.show_trait_options = false;
					$scope.show_damage_options = true;
				} else if( $scope.select_roll_type == "trait" ) {
					$scope.show_trait_options = true;
					$scope.show_damage_options = false;
				} else {
					$scope.show_trait_options = false;
					$scope.show_damage_options = false;
				}
				localStorage["com.jdg.swwt2.dice.input_target_number"] = $scope.input_target_number;
				localStorage["com.jdg.swwt2.dice.input_base_toughness"] = $scope.input_base_toughness;
				localStorage["com.jdg.swwt2.dice.input_roll"] = $scope.input_roll;
				localStorage["com.jdg.swwt2.dice.input_armor"] = $scope.input_armor;
				localStorage["com.jdg.swwt2.dice.input_weapons_ap"] = $scope.input_weapons_ap;
			}

		}
	]
);


angular.module("baseApp").controller(
	"coreExtrasController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var extras_default_results = "";
			var extras_no_results_found = "";
			$scope.current_books = Array();

			if( typeof(localStorage["com.jdg.swwt2.extras.input_extras_search"]) != "undefined" )
				$scope.input_extras_search = localStorage["com.jdg.swwt2.extras.input_extras_search"];
			else
				$scope.input_extras_search = "";

			// init localStorage for book checks...
			for( swe_bc = 0; swe_bc < savageWorldsExtrasBooksList.length; swe_bc++) {
				if( typeof(localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc]) == "undefined" ) {
					localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc] = 1;
				}
			}

			$scope.activebooklist = [];
			$scope.active_books = {};

			// add book checkboxes.
			for( swe_bc = 0; swe_bc < savageWorldsExtrasBooksList.length; swe_bc++) {
				book_checked = false;
				if( typeof(localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc]) > 0 ) {
					book_checked = true;
				}

				$scope.active_books[ swe_bc + 1 ] = book_checked;
				book_checkbox_data = get_book_by_id( savageWorldsExtrasBooksList[swe_bc]["id"], localStorage["users_preferred_language"] );
				//console.log("book_checkbox_data", book_checkbox_data);
				//console.log('savageWorldsExtrasBooksList[swe_bc]["id"]', savageWorldsExtrasBooksList[swe_bc]["id"]);
				$scope.activebooklist.push( book_checkbox_data );
			}

			if( typeof(localStorage["com.jdg.swwt2.extras.active_books"]) != "undefined"  && localStorage["com.jdg.swwt2.extras.active_books"] != "") {
				$scope.active_books = JSON.parse(localStorage["com.jdg.swwt2.extras.active_books"]);
			}

			$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_EXTRAS','EXTRAS_SEARCH', 'EXTRAS_LIBRARIES', 'EXTRAS_RESULTS', 'EXTRAS_RESULTS_INTRO', 'EXTRAS_NO_RESULTS' ]).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_BUTTON_CORE_EXTRAS + " | " + translation.APP_TITLE;
				$scope.label_search = translation.EXTRAS_SEARCH;
				$scope.label_libraries = translation.EXTRAS_SEARCH;
				$scope.label_results = translation.EXTRAS_RESULTS;
				$total_roll_label = translation.DICE_TOTAL_ROLL;
				$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_EXTRAS;
				extras_default_results = "<p>" + translation.EXTRAS_RESULTS_INTRO + "</p>";
				extras_no_results_found = "<p>" + translation.EXTRAS_NO_RESULTS + "</p>";

				$scope.update_results_pane();
			});



			$scope.update_results_pane = function() {
				localStorage["com.jdg.swwt2.extras.input_extras_search"] = $scope.input_extras_search;
				localStorage["com.jdg.swwt2.extras.active_books"] = JSON.stringify($scope.active_books);

				$scope.search_results = [];
				if( $scope.input_extras_search && $scope.input_extras_search.length >= 3 ) {
					$scope.show_default_text = false;

					for( extracount = 0; extracount < savageWorldsExtrasDatabase.length; extracount++) {
						if(
							$scope.is_found(  savageWorldsExtrasDatabase[extracount] )
						) {
							$scope.search_results.push(  $scope.localize_extra(savageWorldsExtrasDatabase[extracount]) );
						}
					}
//					console.log("search_results", $scope.search_results);
					if( $scope.search_results.length == 0)
						$scope.show_no_results = true;
					else
						$scope.show_no_results = false;
				} else {
					$scope.show_default_text = true;
				}
			}

			$scope.localize_extra = function( entry_object ) {
				$translate([
					"SKILL_BOATING", "SKILL_CLIMBING",	"SKILL_DRIVING",	"SKILL_FAITH",	"SKILL_FIGHTING",
					"SKILL_GAMBLING",	"SKILL_GUTS",	"SKILL_HEALING",	"SKILL_INTIMIDATION",	"SKILL_INVESTIGATION",
					"SKILL_KNOWLEDGE",	"SKILL_LOCKPICKING",	"SKILL_NOTICE",	"SKILL_PERSUASION",	"SKILL_PILOTING",
					"SKILL_PSIONICS",	"SKILL_REPAIR",	"SKILL_RIDING",	"SKILL_SHOOTING",	"SKILL_SPELLCASTING",
					"SKILL_STEALTH", 	"SKILL_STREETWISE",	"SKILL_SURVIVAL",	"SKILL_SWIMMING",	"SKILL_TAUNT",
					"SKILL_THROWING",	"SKILL_TRACKING",	"SKILL_WEIRD_SCIENCE"
				]).then(function (translation) {

					if( entry_object.name[ localStorage["users_preferred_language"] ] )
						 entry_object.local_name = entry_object.name[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_name = entry_object.name[  "en-US" ];

					if( entry_object.blurb[ localStorage["users_preferred_language"] ] )
						 entry_object.local_blurb = entry_object.blurb[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_blurb = entry_object.blurb[  "en-US" ];

					entry_object.local_blurb = "<p>" + entry_object.local_blurb.trim().replace(/\n/g, "</p><p>") + "</p>";
					if( entry_object.abilities[ localStorage["users_preferred_language"] ] )
						entry_object.local_abilities = entry_object.abilities[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_abilities = entry_object.abilities[  "en-US" ];

					if ( entry_object.local_abilities.trim() )
						entry_object.local_abilities = "<ul><li>" + entry_object.local_abilities.trim().replace(/\n/g, "</li><li>") + "</li></ul>";
					else
						entry_object.local_abilities = "";

					entry_object.local_book = get_book_by_id( entry_object.book );

					entry_object.parsed_attributes = JSON.parse( entry_object.attributes );
					parsed_skills = JSON.parse( entry_object.skills );
//					console.log("parsed_skills", parsed_skills);
					entry_object.display_skills = "";
					for( skill_key in parsed_skills ) {
						//console.log("...", skill_key.substring(0, "SKILL_KNOWLEDGE".length));
						if( skill_key.substring(0, "SKILL_KNOWLEDGE".length) == "SKILL_KNOWLEDGE") {
							if( parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] )
								entry_object.display_skills += get_local_skill_name(skill_key.substring(0, "SKILL_KNOWLEDGE".length)) + " (" + parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] + "): " + parsed_skills[skill_key].value + ", ";
							else
								entry_object.display_skills += get_local_skill_name(skill_key.substring(0, "SKILL_KNOWLEDGE".length)) + " (" + parsed_skills[skill_key].special["en-US"] + "): " + parsed_skills[skill_key].value + ", ";
						} else if ( skill_key.substring(0, "SKILL_CUSTOM".length) == "SKILL_CUSTOM") {
							if( parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] )
								entry_object.display_skills += parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] + ": " + parsed_skills[skill_key].value + ", ";
							else
								entry_object.display_skills += parsed_skills[skill_key].special["en-US"] + ": " + parsed_skills[skill_key].value + ", ";
						} else {
							entry_object.display_skills += get_local_skill_name(skill_key) + ": " + parsed_skills[skill_key].value + ", ";
						}
					}

					if( entry_object.display_skills != "")
						entry_object.display_skills = entry_object.display_skills.substring(0, entry_object.display_skills.length - 2);

					entry_object.display_toughness = entry_object.toughness;
					if( entry_object.armor > 0)
						entry_object.display_toughness += "(" + entry_object.armor + ")";

					if( entry_object.gear[ localStorage["users_preferred_language"] ] )
						entry_object.local_gear = entry_object.gear[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_gear = entry_object.gear[  "en-US" ];

					if( entry_object.treasure[ localStorage["users_preferred_language"] ] )
						entry_object.local_treasure = entry_object.treasure[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_treasure = entry_object.treasure[  "en-US" ];

					if( entry_object.edges[ localStorage["users_preferred_language"] ] )
						entry_object.local_edges = entry_object.edges[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_edges = entry_object.edges[  "en-US" ];

					if( entry_object.hindrances[ localStorage["users_preferred_language"] ] )
						entry_object.local_hindrances = entry_object.hindrances[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_hindrances = entry_object.hindrances[  "en-US" ];
					//return entry_object;
				});
				return entry_object;
			}

			$scope.is_found = function( entry_object ) {
				returnValue = false;

				var search_term = $scope.input_extras_search;
				search_term = search_term.toLowerCase().trim();

				if( entry_object.name[ localStorage["users_preferred_language"] ] ) {
					if( entry_object.name[ localStorage["users_preferred_language"] ].toLowerCase().indexOf( search_term ) > -1 )
						returnValue = true;
				} else {
					if( entry_object.name[ "en-US" ].toLowerCase().indexOf( search_term )  > -1 )
						returnValue = true;
				}

				if( entry_object.tags[ localStorage["users_preferred_language"] ] ) {
					if( entry_object.tags[ localStorage["users_preferred_language"] ].toLowerCase().indexOf( search_term + "," ) > -1 )
						returnValue = true;
				} else {
					if( entry_object.tags[ "en-US" ].toLowerCase().indexOf( search_term + ",")  > -1 )
						returnValue = true;
				}
				if( $scope.active_books[ entry_object.book - 1 ] == false )
					returnValue = false;

				return returnValue;
			}



		}
	]
);


angular.module("baseApp").controller(
	"coreMassbattlesController",
	function() {

	}
);
angular.module("baseApp").controller(
	"coreRaiseCalcController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {
			// Set Page Title Tag

			var dice_object = new classDice();
			dice_object.init();

			if( localStorage["com.jdg.swwt2.raisecalc.input_target_number"] )
				$scope.input_target_number = localStorage["com.jdg.swwt2.raisecalc.input_target_number"] / 1;
			else
				$scope.input_target_number = 4;

			if( localStorage["com.jdg.swwt2.raisecalc.input_roll"] )
				$scope.input_roll = localStorage["com.jdg.swwt2.raisecalc.input_roll"] / 1;
			else
				$scope.input_roll = 5

			if( localStorage["com.jdg.swwt2.raisecalc.input_armor"] )
				$scope.input_armor = localStorage["com.jdg.swwt2.raisecalc.input_armor"] / 1;
			else
				$scope.input_armor = 1

			if( localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] )
				$scope.input_weapons_ap = localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] / 1;
			else
				$scope.input_weapons_ap  = 0;

			$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_RAISE', 'DICE_NO_DICE_THROWN', 'DICE_TOTAL_ROLL']).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_BUTTON_CORE_RAISE + " | " + translation.APP_TITLE;
				$scope.dice_results = translation.DICE_NO_DICE_THROWN;
				$total_roll_label = translation.DICE_TOTAL_ROLL;
				$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_RAISE;
			});

			$translate(
				[
				'DICE_LABEL_NO_EFFECT', 'DICE_LABEL_SHAKEN', 'DICE_LABEL_SHAKEN_AND_A_WOUND',
				'DICE_LABEL_SHAKEN_AND_X_WOUNDS', 'DICE_LABEL_CRITICAL_FAILURE', 'DICE_LABEL_FAILURE',
				'DICE_LABEL_SUCCESS', 'DICE_LABEL_SUCCESS_WITH_A_RAISE', 'DICE_LABEL_SUCCESS_WITH_X_RAISES',
				'DICE_LABEL_DIE_ROLL_NUMBER', 'DICE_LABEL_WILD_DIE_ROLL_NUMBER', 'DICE_TOTAL_ROLL',
				'DICE_ROLL_SET_NUM'
				]
			).then( function( translation ) {

				dice_object.setLabel("no_effect",  translation.DICE_LABEL_NO_EFFECT);
				dice_object.setLabel("shaken", translation.DICE_LABEL_SHAKEN);
				dice_object.setLabel("shaken_and_a_wound", translation.DICE_LABEL_SHAKEN_AND_A_WOUND);

				dice_object.setLabel("shaken_and_x_wounds", translation.DICE_LABEL_SHAKEN_AND_X_WOUNDS);
				dice_object.setLabel("critical_failure", translation.DICE_LABEL_CRITICAL_FAILURE);
				dice_object.setLabel("failure", translation.DICE_LABEL_FAILURE);

				dice_object.setLabel("success", translation.DICE_LABEL_SUCCESS);
				dice_object.setLabel("success_with_a_raise", translation.DICE_LABEL_SUCCESS_WITH_A_RAISE);
				dice_object.setLabel("success_with_x_raises", translation.DICE_LABEL_SUCCESS_WITH_X_RAISES);

				dice_object.setLabel("die_roll_number", translation.DICE_LABEL_DIE_ROLL_NUMBER);
				dice_object.setLabel("wild_die_roll_number", translation.DICE_LABEL_WILD_DIE_ROLL_NUMBER);
				dice_object.setLabel("total_roll",  translation.DICE_TOTAL_ROLL);


				dice_object.setLabel("roll_set_number",  translation.DICE_ROLL_SET_NUM);

				$scope.damage_results = dice_object.damageSuccessMargin(
						$scope.input_roll,
						$scope.input_target_number,
						$scope.input_armor,
						$scope.input_weapons_ap
					);
				$scope.trait_results  = dice_object.traitSuccessMargin( $scope.input_roll, $scope.input_target_number );
			} );



			$scope.update_results = function() {
				localStorage["com.jdg.swwt2.raisecalc.input_target_number"] = $scope.input_target_number;
				localStorage["com.jdg.swwt2.raisecalc.input_roll"] = $scope.input_roll;
				localStorage["com.jdg.swwt2.raisecalc.input_armor"] = $scope.input_armor;
				localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] = $scope.input_weapons_ap;

				$scope.damage_results = dice_object.damageSuccessMargin(
						$scope.input_roll,
						$scope.input_target_number,
						$scope.input_armor,
						$scope.input_weapons_ap
					);
				$scope.trait_results  = "" + dice_object.traitSuccessMargin( $scope.input_roll, $scope.input_target_number );
			}
		}
	]
);

angular.module("baseApp").controller(
	"creditsController",
	function() {

	}
);

angular.module("baseApp").controller(
	"scifiPowerarmorController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_power_armor";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.power_armor";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.power_armor";
			var itemType = "power_armor";
			var itemName = "Power Armor";


			$scope.init = function() {
				$scope.creatorObj = new scifiCreator();



				$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);


				if( typeof(localStorage[ optionsLocalStorageVariable ]) != "undefined" ) {
					$scope.user_options = localStorage[ optionsLocalStorageVariable ];
				} else {
					$scope.user_options = "";
				}

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.creatorObj.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}

				$scope.creatorObj.useLang = localStorage["users_preferred_language"];

				$scope.selected_options = Array();
				$scope.creatorOptions = savageWorldsSciFiOptions[ itemType ];
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( typeof($scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ "en-US" ];
					}

					if( typeof($scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ "en-US" ];
					}
					$scope.selected_options[optc] = false;
				}

				$translate([
					'APP_TITLE', 'INDEX_BUTTON_SCIFI_POWER', 'CREATOR_SIZE',
					"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
					"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_POWER + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_POWER;
						$scope.sizeLabel  = translation.CREATOR_SIZE;

						$scope.fixed_options = Array(
							{
								id: '0',
								label: translation.CREATOR_FIXED_TURRETED_NONE
							},
							{
								id: 'bow',
								label: translation.CREATOR_FIXED_BOW_FRONT
							},
							{
								id: 'port',
								label: translation.CREATOR_FIXED_PORT_LEFT
							},
							{
								id: 'starboard',
								label: translation.CREATOR_FIXED_STARBOARD_RIGHT
							},
							{
								id: 'stern',
								label: translation.CREATOR_FIXED_STERN_REAR
							}
						);

						$scope.updatePage();
					}

				);
			}

			$scope.addMod = function( modTag ) {
				$scope.creatorObj.addMod(modTag);
				$scope.updatePage();
			}

			$scope.addWeapon = function( modTag ) {
				$scope.creatorObj.addWeapon(modTag);
				$scope.updatePage();
			}

			$scope.removeMod = function( modTag ) {
				$scope.creatorObj.removeMod(modTag);
				$scope.updatePage();
			}

			$scope.updateSize = function() {

				$scope.creatorObj.setSize( $scope.size_selected.id );
				$scope.updatePage();
			}

			$scope.linkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.incrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.setFixed = function(weaponIndex) {
				newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
				$scope.creatorObj.fixWeapon( weaponIndex, newValue);
				$scope.updatePage();
			}

			$scope.unlinkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.decrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.updateOption = function( option_index ) {

				for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
					if( $scope.creatorOptions[optc].short_tag ) {
						if( $scope.selected_options[optc] == 0 )
							$scope.creatorObj.removeOption( $scope.creatorOptions[optc].short_tag );
						else
							$scope.creatorObj.addOption( $scope.creatorOptions[optc].short_tag );
					}
				}
				$scope.updatePage();
			}

			$scope.removeWeapon = function(weaponIndex) {
				$scope.creatorObj.removeWeapon( weaponIndex );
				$scope.updatePage();
			}

			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
			}

			$scope.newDialog = function() {

				$scope.closeDialogs();
				$scope.newDialogOpen = true;
			}

			$scope.loadDialog = function() {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.load_item = 0;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();

				$scope.closeDialogs();
				$scope.loadDialogOpen = true;
			}
			$scope.saveDialog = function() {
				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.save_over = -1;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();
				$scope.save_as_name = $scope.creatorObj.itemName;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.importJSON = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(importJSON) {
				$scope.importJSON = importJSON;
			}

			$scope.importData = function(importJSON) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.exportBBCode = $scope.creatorObj.exportBBCode();
				$scope.exportJSON = $scope.creatorObj.exportJSON();
				$scope.closeDialogs();
				$scope.exportDialogOpen = true;
			}
			$scope.optionsDialog = function() {
				$scope.closeDialogs();
				$scope.optionsDialogOpen = true;
			}

			$scope.loadItem = function( load_item ) {
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				if( $scope.saved_items[ load_item ] )
					localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

				$scope.closeDialogs();
				$scope.init();
			}

			$scope.clearCurrent = function(  ) {

				localStorage[ currentItemLocalStorageVariable ] = "";
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.updateLoad = function( load_item ) {
				$scope.load_item = load_item;
			}

			$scope.updateSave = function( save_over ) {
				$scope.save_over = save_over;

			}


			$scope.closeConfirmDialog = function( ) {
				$scope.showConfirmDialog = false;
				// reset confirm to nothing...
				$scope.cofirmDialogYes = function() {
					$scope.showConfirmDialog = false;
				}
			}

			$scope.cofirmDialogYes = function() {
				// empty to be replaced...
				$scope.showConfirmDialog = false;
			}

			$scope.confirmDialogQuestion = "";

			$scope.confirmDialog = function( confirmationMessage, onYes ) {
				$scope.confirmDialogQuestion = confirmationMessage;
				$scope.showConfirmDialog = true;
				$scope.cofirmDialogYes = onYes;
			}


			$scope.removeSavedItem = function( itemIndex ) {

				$translate([
					'CREATOR_DELETION_CONFIRMATION'
				]).then(
					function (translation) {
						$scope.confirmDialog(
							translation.CREATOR_DELETION_CONFIRMATION,
							function() {
								$scope.showConfirmDialog = false;
								$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
								$scope.saved_items.splice( itemIndex, 1);
								localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
							}
						);
					}
				);
			}

			$scope.saveItem = function( save_over, saveName ) {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

				if( save_over > -1 ) {
					$scope.saved_items[ save_over ] = $scope.makeSaveObject( saveName );
				} else {
					$scope.saved_items.push( $scope.makeSaveObject( saveName ));
				}
				localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

				$scope.closeDialogs();
			}

			$scope.makeSaveObject = function( saveName ) {
				save_object = {
					name: saveName,
					datetime: Date(),
					type: itemType,
					data:  $scope.creatorObj.exportJSON()
				};
				return save_object;
			}

			$scope.updatePage = function() {
				$scope.creatorObj.calculate();

				$scope.setSize = $scope.creatorObj.size;

				$scope.creator_preview = $scope.creatorObj.createStatesBlock();
				localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.exportJSON();

				$scope.mod_list = Array();
				angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );

				for(modc = 0; modc < $scope.mod_list.length; modc++) {
					if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
					}
					$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].getModCost($scope.creatorObj);
					$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].getCost($scope.creatorObj));
					$scope.mod_list[modc].local_max = $scope.mod_list[modc].getMax($scope.creatorObj);
					$scope.mod_list[modc].currently_added = $scope.creatorObj.getModificationCount( $scope.mod_list[modc].tag );
					if(
						( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
						&&
						( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
					) {
						if( typeof($scope.mod_list[modc].isAvailable) == "function" ) {
							if ( $scope.mod_list[modc].isAvailable( $scope.creatorObj ) ) {
								$scope.mod_list[modc].can_add = true;
							} else {
								$scope.mod_list[modc].can_add = false;
							}
						} else {
							$scope.mod_list[modc].can_add = true;
						}
					} else {
						$scope.mod_list[modc].can_add = false;
					}


					if( $scope.mod_list[modc].currently_added > 0)
						$scope.mod_list[modc].can_remove = true;
					else
						$scope.mod_list[modc].can_remove = false;
				}

				// remove mods that aren't enabled or disabled by option
				for(var modc = $scope.mod_list.length -1; modc >= 0; modc--) {
					if(

						typeof($scope.mod_list[modc].showWithOption) != "undefined"
							&&
						$scope.mod_list[modc].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].showWithOption ) == false) {
							$scope.mod_list.splice(modc, 1);
						}

					}

					if(

						typeof($scope.mod_list[modc].hideWithOption) != "undefined"
							&&
						$scope.mod_list[modc].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].hideWithOption ) == true ) {
							$scope.mod_list.splice(modc, 1);
						}

					}
				}

				$translate([
					'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {


						$scope.size_options = Array();
						$scope.size_selected = null;
						$scope.setSize = 0;

						default_size_object = {
							id: 0,
							label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
						};
						$scope.size_options.push( default_size_object );
						for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
							if( savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]])
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;
							else
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel["en-US"] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;

							push_object = {
								id: savageWorldsSciFiSizes[itemType][sizec].size,
								label: display_label
							};
							if( savageWorldsSciFiSizes[itemType][sizec].showWithOption )
								push_object.showWithOption = savageWorldsSciFiSizes[itemType][sizec].showWithOption;
							if( savageWorldsSciFiSizes[itemType][sizec].hideWithOption )
								push_object.hideWithOption = savageWorldsSciFiSizes[itemType][sizec].hideWithOption;

							$scope.size_options.push( push_object );
							if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
								$scope.size_selected = push_object;
								$scope.setSize = $scope.creatorObj.size;
							}


						}
						if( $scope.size_selected == null) {
							$scope.size_selected = default_size_object;
							$scope.setSize = 0;
						}

				// remove sizes that aren't enabled or disabled by option
				for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

					if(

						typeof($scope.size_options[sizec].showWithOption) != "undefined"
							&&
						$scope.size_options[sizec].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].showWithOption ) == false) {

							$scope.size_options.splice(sizec, 1);
						}

					}

					if(

						typeof($scope.size_options[sizec].hideWithOption) != "undefined"
							&&
						$scope.size_options[sizec].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].hideWithOption ) == true ) {
							$scope.size_options.splice(sizec, 1);
						}

					}
				}

				});
				$scope.available_weapons = Array();

				for( weap_c = 0; weap_c < savageWorldsVehicleWeapons.length; weap_c++) {
					if( savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].local_cost = $scope.creatorObj.simplify_cost( savageWorldsVehicleWeapons[weap_c].cost );
					if( savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].can_add = true;
					if( typeof(savageWorldsVehicleWeapons[weap_c].isAvailable) == "function") {
						if( savageWorldsVehicleWeapons[weap_c].isAvailable( $scope.creatorObj) == false ){

							savageWorldsVehicleWeapons[weap_c].can_add = false;
						}
					}

					// change vehicleWeaponModPoints to mods_available for non power armor vehicles ;)

					if( $scope.creatorObj.vehicleWeaponModPoints < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}

					if( savageWorldsVehicleWeapons[weap_c].can_add ) {
						$scope.available_weapons.push(savageWorldsVehicleWeapons[weap_c]);
					}
				}

				$scope.available_weapons.sort(
					function(ob1,ob2) {
						if (ob1.local_classification > ob2.local_classification) {
							return 1;
						} else if (ob1.local_classification < ob2.local_classification) {
							return -1;
						}

						// Else go to the 2nd item
						if (ob1.mods < ob2.mods) {
							return -1;
						} else if (ob1.mods > ob2.mods) {
							return 1;
						}

						// Else go to the 3nd item
						if (ob1.local_name < ob2.local_name) {
							return -1;
						} else if (ob1.local_name > ob2.local_name) {
							return 1
						}  else { // nothing to split them
							return 0;
						}
					}
				);

				$scope.selected_options = Array();
				angular.extend(	$scope.creatorOptions, savageWorldsSciFiOptions[ itemType ] );

				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( $scope.creatorObj.hasOption($scope.creatorOptions[optc].short_tag) )
						$scope.selected_options[optc] = true;
					else
						$scope.selected_options[optc] = false;
				}

				$scope.installed_weapons = $scope.creatorObj.selected_weapons;
				for(weap_c = 0; weap_c < $scope.installed_weapons.length; weap_c++) {
					if( $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ "en-US" ];
					}


					found_item = false
					for(optc = 0;optc < $scope.fixed_options.length; optc++ ) {

						if( $scope.fixed_options[optc].id == $scope.installed_weapons[weap_c].fixed ) {
							$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[optc];
							found_item = true;
						}
					}
					if(!found_item)
						$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[0];
				}

			}

			$scope.init();
		}

	]
);

angular.module("baseApp").controller(
	"scifiRobotController",
	function() {

	}
);
angular.module("baseApp").controller(
	"scifiStarshipController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_starship";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.starship";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.starship";
			var itemType = "starship";
			var itemName = "Starship";


			$scope.init = function() {
				$scope.creatorObj = new scifiCreator();



				$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);


				if( typeof(localStorage[ optionsLocalStorageVariable ]) != "undefined" ) {
					$scope.user_options = localStorage[ optionsLocalStorageVariable ];
				} else {
					$scope.user_options = "";
				}

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.creatorObj.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}

				$scope.creatorObj.useLang = localStorage["users_preferred_language"];

				$scope.selected_options = Array();
				$scope.creatorOptions = savageWorldsSciFiOptions[ itemType ];
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( typeof($scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ "en-US" ];
					}

					if( typeof($scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ "en-US" ];
					}
					$scope.selected_options[optc] = false;
				}

				$translate([
					'APP_TITLE', 'INDEX_BUTTON_SCIFI_STARSHIP', 'CREATOR_SIZE',
					"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
					"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_STARSHIP + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_STARSHIP;
						$scope.sizeLabel  = translation.CREATOR_SIZE;

						$scope.fixed_options = Array(
							{
								id: '0',
								label: translation.CREATOR_FIXED_TURRETED_NONE
							},
							{
								id: 'bow',
								label: translation.CREATOR_FIXED_BOW_FRONT
							},
							{
								id: 'port',
								label: translation.CREATOR_FIXED_PORT_LEFT
							},
							{
								id: 'starboard',
								label: translation.CREATOR_FIXED_STARBOARD_RIGHT
							},
							{
								id: 'stern',
								label: translation.CREATOR_FIXED_STERN_REAR
							}
						);

						$scope.updatePage();
					}

				);
			}

			$scope.addMod = function( modTag ) {
				$scope.creatorObj.addMod(modTag);
				$scope.updatePage();
			}

			$scope.addWeapon = function( modTag ) {
				$scope.creatorObj.addWeapon(modTag);
				$scope.updatePage();
			}

			$scope.removeMod = function( modTag ) {
				$scope.creatorObj.removeMod(modTag);
				$scope.updatePage();
			}

			$scope.updateSize = function() {

				$scope.creatorObj.setSize( $scope.size_selected.id );
				$scope.updatePage();
			}

			$scope.linkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.incrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.setFixed = function(weaponIndex) {
				newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
				$scope.creatorObj.fixWeapon( weaponIndex, newValue);
				$scope.updatePage();
			}

			$scope.unlinkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.decrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.updateOption = function( option_index ) {

				for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
					if( $scope.creatorOptions[optc].short_tag ) {
						if( $scope.selected_options[optc] == 0 )
							$scope.creatorObj.removeOption( $scope.creatorOptions[optc].short_tag );
						else
							$scope.creatorObj.addOption( $scope.creatorOptions[optc].short_tag );
					}
				}
				$scope.updatePage();
			}

			$scope.removeWeapon = function(weaponIndex) {
				$scope.creatorObj.removeWeapon( weaponIndex );
				$scope.updatePage();
			}

			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
			}

			$scope.newDialog = function() {

				$scope.closeDialogs();
				$scope.newDialogOpen = true;
			}

			$scope.loadDialog = function() {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.load_item = 0;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();

				$scope.closeDialogs();
				$scope.loadDialogOpen = true;
			}
			$scope.saveDialog = function() {
				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.save_over = -1;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();
				$scope.save_as_name = $scope.creatorObj.itemName;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.importJSON = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(importJSON) {
				$scope.importJSON = importJSON;
			}

			$scope.importData = function(importJSON) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.exportBBCode = $scope.creatorObj.exportBBCode();
				$scope.exportJSON = $scope.creatorObj.exportJSON();
				$scope.closeDialogs();
				$scope.exportDialogOpen = true;
			}
			$scope.optionsDialog = function() {
				$scope.closeDialogs();
				$scope.optionsDialogOpen = true;
			}

			$scope.loadItem = function( load_item ) {
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				if( $scope.saved_items[ load_item ] )
					localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

				$scope.closeDialogs();
				$scope.init();
			}

			$scope.clearCurrent = function(  ) {

				localStorage[ currentItemLocalStorageVariable ] = "";
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.updateLoad = function( load_item ) {
				$scope.load_item = load_item;
			}

			$scope.updateSave = function( save_over ) {
				$scope.save_over = save_over;

			}


			$scope.closeConfirmDialog = function( ) {
				$scope.showConfirmDialog = false;
				// reset confirm to nothing...
				$scope.cofirmDialogYes = function() {
					$scope.showConfirmDialog = false;
				}
			}

			$scope.cofirmDialogYes = function() {
				// empty to be replaced...
				$scope.showConfirmDialog = false;
			}

			$scope.confirmDialogQuestion = "";

			$scope.confirmDialog = function( confirmationMessage, onYes ) {
				$scope.confirmDialogQuestion = confirmationMessage;
				$scope.showConfirmDialog = true;
				$scope.cofirmDialogYes = onYes;
			}


			$scope.removeSavedItem = function( itemIndex ) {

				$translate([
					'CREATOR_DELETION_CONFIRMATION'
				]).then(
					function (translation) {
						$scope.confirmDialog(
							translation.CREATOR_DELETION_CONFIRMATION,
							function() {
								$scope.showConfirmDialog = false;
								$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
								$scope.saved_items.splice( itemIndex, 1);
								localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
							}
						);
					}
				);
			}

			$scope.saveItem = function( save_over, saveName ) {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

				if( save_over > -1 ) {
					$scope.saved_items[ save_over ] = $scope.makeSaveObject( saveName );
				} else {
					$scope.saved_items.push( $scope.makeSaveObject( saveName ));
				}
				localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

				$scope.closeDialogs();
			}

			$scope.makeSaveObject = function( saveName ) {
				save_object = {
					name: saveName,
					datetime: Date(),
					type: itemType,
					data:  $scope.creatorObj.exportJSON()
				};
				return save_object;
			}

			$scope.updatePage = function() {
				$scope.creatorObj.calculate();

				$scope.setSize = $scope.creatorObj.size;

				$scope.creator_preview = $scope.creatorObj.createStatesBlock();
				localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.exportJSON();

				$scope.mod_list = Array();
				angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );
				for(modc = 0; modc < $scope.mod_list.length; modc++) {
					if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
					}
					$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].getModCost($scope.creatorObj);
					$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].getCost($scope.creatorObj));
					$scope.mod_list[modc].local_max = $scope.mod_list[modc].getMax($scope.creatorObj);
					$scope.mod_list[modc].currently_added = $scope.creatorObj.getModificationCount( $scope.mod_list[modc].tag );
					if(
						( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
						&&
						( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
					) {
						if( typeof($scope.mod_list[modc].isAvailable) == "function" ) {
							if ( $scope.mod_list[modc].isAvailable( $scope.creatorObj ) ) {
								$scope.mod_list[modc].can_add = true;
							} else {
								$scope.mod_list[modc].can_add = false;
							}
						} else {
							$scope.mod_list[modc].can_add = true;
						}
					} else {
						$scope.mod_list[modc].can_add = false;
					}


					if( $scope.mod_list[modc].currently_added > 0)
						$scope.mod_list[modc].can_remove = true;
					else
						$scope.mod_list[modc].can_remove = false;
				}

				// remove mods that aren't enabled or disabled by option
				for(var modc = $scope.mod_list.length -1; modc >= 0; modc--) {
					if(

						typeof($scope.mod_list[modc].showWithOption) != "undefined"
							&&
						$scope.mod_list[modc].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].showWithOption ) == false) {
							$scope.mod_list.splice(modc, 1);
						}

					}

					if(

						typeof($scope.mod_list[modc].hideWithOption) != "undefined"
							&&
						$scope.mod_list[modc].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].hideWithOption ) == true ) {
							$scope.mod_list.splice(modc, 1);
						}

					}
				}

				$translate([
					'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {


						$scope.size_options = Array();
						$scope.size_selected = null;
						$scope.setSize = 0;

						default_size_object = {
							id: 0,
							label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
						};
						$scope.size_options.push( default_size_object );
						for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
							if( savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]])
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;
							else
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel["en-US"] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;

							push_object = {
								id: savageWorldsSciFiSizes[itemType][sizec].size,
								label: display_label
							};
							if( savageWorldsSciFiSizes[itemType][sizec].showWithOption )
								push_object.showWithOption = savageWorldsSciFiSizes[itemType][sizec].showWithOption;
							if( savageWorldsSciFiSizes[itemType][sizec].hideWithOption )
								push_object.hideWithOption = savageWorldsSciFiSizes[itemType][sizec].hideWithOption;

							$scope.size_options.push( push_object );
							if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
								$scope.size_selected = push_object;
								$scope.setSize = $scope.creatorObj.size;
							}


						}
						if( $scope.size_selected == null) {
							$scope.size_selected = default_size_object;
							$scope.setSize = 0;
						}

				// remove sizes that aren't enabled or disabled by option
				for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

					if(

						typeof($scope.size_options[sizec].showWithOption) != "undefined"
							&&
						$scope.size_options[sizec].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].showWithOption ) == false) {

							$scope.size_options.splice(sizec, 1);
						}

					}

					if(

						typeof($scope.size_options[sizec].hideWithOption) != "undefined"
							&&
						$scope.size_options[sizec].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].hideWithOption ) == true ) {
							$scope.size_options.splice(sizec, 1);
						}

					}
				}

				});
				$scope.available_weapons = Array();

				for( weap_c = 0; weap_c < savageWorldsVehicleWeapons.length; weap_c++) {
					if( savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].local_cost = $scope.creatorObj.simplify_cost( savageWorldsVehicleWeapons[weap_c].cost );
					if( savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].can_add = true;
					if( typeof(savageWorldsVehicleWeapons[weap_c].isAvailable) == "function") {
						if( savageWorldsVehicleWeapons[weap_c].isAvailable( $scope.creatorObj) == false ){

							savageWorldsVehicleWeapons[weap_c].can_add = false;
						}
					}

					// change vehicleWeaponModPoints to mods_available for non power armor vehicles ;)

					if( $scope.creatorObj.vehicleWeaponModPoints < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}

					if( savageWorldsVehicleWeapons[weap_c].can_add ) {
						$scope.available_weapons.push(savageWorldsVehicleWeapons[weap_c]);
					}
				}

				$scope.available_weapons.sort(
					function(ob1,ob2) {
						if (ob1.local_classification > ob2.local_classification) {
							return 1;
						} else if (ob1.local_classification < ob2.local_classification) {
							return -1;
						}

						// Else go to the 2nd item
						if (ob1.mods < ob2.mods) {
							return -1;
						} else if (ob1.mods > ob2.mods) {
							return 1;
						}

						// Else go to the 3nd item
						if (ob1.local_name < ob2.local_name) {
							return -1;
						} else if (ob1.local_name > ob2.local_name) {
							return 1
						}  else { // nothing to split them
							return 0;
						}
					}
				);

				$scope.selected_options = Array();

				angular.extend(	$scope.creatorOptions,savageWorldsSciFiOptions[ itemType ] );
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( $scope.creatorObj.hasOption($scope.creatorOptions[optc].short_tag) )
						$scope.selected_options[optc] = true;
					else
						$scope.selected_options[optc] = false;
				}

				$scope.installed_weapons = $scope.creatorObj.selected_weapons;
				for(weap_c = 0; weap_c < $scope.installed_weapons.length; weap_c++) {
					if( $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ "en-US" ];
					}


					found_item = false
					for(optc = 0;optc < $scope.fixed_options.length; optc++ ) {

						if( $scope.fixed_options[optc].id == $scope.installed_weapons[weap_c].fixed ) {
							$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[optc];
							found_item = true;
						}
					}
					if(!found_item)
						$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[0];
				}

			}

			$scope.init();
		}

	]
);

angular.module("baseApp").controller(
	"scifiVehicleController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_vehicle";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.vehicle";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.vehicle";
			var itemType = "vehicle";
			var itemName = "Vehicle";


			$scope.init = function() {
				$scope.creatorObj = new scifiCreator();



				$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);


				if( typeof(localStorage[ optionsLocalStorageVariable ]) != "undefined" ) {
					$scope.user_options = localStorage[ optionsLocalStorageVariable ];
				} else {
					$scope.user_options = "";
				}

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.creatorObj.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}

				$scope.creatorObj.useLang = localStorage["users_preferred_language"];

				$scope.selected_options = Array();
				$scope.creatorOptions = savageWorldsSciFiOptions[ itemType ];
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( typeof($scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ "en-US" ];
					}

					if( typeof($scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ "en-US" ];
					}
					$scope.selected_options[optc] = false;
				}

				$translate([
					'APP_TITLE', 'INDEX_BUTTON_SCIFI_VEHICLE', 'CREATOR_SIZE',
					"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
					"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_VEHICLE + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_VEHICLE;
						$scope.sizeLabel  = translation.CREATOR_SIZE;

						$scope.fixed_options = Array(
							{
								id: '0',
								label: translation.CREATOR_FIXED_TURRETED_NONE
							},
							{
								id: 'bow',
								label: translation.CREATOR_FIXED_BOW_FRONT
							},
							{
								id: 'port',
								label: translation.CREATOR_FIXED_PORT_LEFT
							},
							{
								id: 'starboard',
								label: translation.CREATOR_FIXED_STARBOARD_RIGHT
							},
							{
								id: 'stern',
								label: translation.CREATOR_FIXED_STERN_REAR
							}
						);

						$scope.updatePage();
					}

				);
			}

			$scope.addMod = function( modTag ) {
				$scope.creatorObj.addMod(modTag);
				$scope.updatePage();
			}

			$scope.addWeapon = function( modTag ) {
				$scope.creatorObj.addWeapon(modTag);
				$scope.updatePage();
			}

			$scope.removeMod = function( modTag ) {
				$scope.creatorObj.removeMod(modTag);
				$scope.updatePage();
			}

			$scope.updateSize = function() {

				$scope.creatorObj.setSize( $scope.size_selected.id );
				$scope.updatePage();
			}

			$scope.linkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.incrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.setFixed = function(weaponIndex) {
				newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
				$scope.creatorObj.fixWeapon( weaponIndex, newValue);
				$scope.updatePage();
			}

			$scope.unlinkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.decrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.updateOption = function( option_index ) {

				for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
					if( $scope.creatorOptions[optc].short_tag ) {
						if( $scope.selected_options[optc] == 0 )
							$scope.creatorObj.removeOption( $scope.creatorOptions[optc].short_tag );
						else
							$scope.creatorObj.addOption( $scope.creatorOptions[optc].short_tag );
					}
				}
				$scope.updatePage();
			}

			$scope.removeWeapon = function(weaponIndex) {
				$scope.creatorObj.removeWeapon( weaponIndex );
				$scope.updatePage();
			}

			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
			}

			$scope.newDialog = function() {

				$scope.closeDialogs();
				$scope.newDialogOpen = true;
			}

			$scope.loadDialog = function() {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.load_item = 0;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();

				$scope.closeDialogs();
				$scope.loadDialogOpen = true;
			}
			$scope.saveDialog = function() {
				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.save_over = -1;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();
				$scope.save_as_name = $scope.creatorObj.itemName;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.importJSON = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(importJSON) {
				$scope.importJSON = importJSON;
			}

			$scope.importData = function(importJSON) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.exportBBCode = $scope.creatorObj.exportBBCode();
				$scope.exportJSON = $scope.creatorObj.exportJSON();
				$scope.closeDialogs();
				$scope.exportDialogOpen = true;
			}
			$scope.optionsDialog = function() {
				$scope.closeDialogs();
				$scope.optionsDialogOpen = true;
			}

			$scope.loadItem = function( load_item ) {
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				if( $scope.saved_items[ load_item ] )
					localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

				$scope.closeDialogs();
				$scope.init();
			}

			$scope.clearCurrent = function(  ) {

				localStorage[ currentItemLocalStorageVariable ] = "";
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.updateLoad = function( load_item ) {
				$scope.load_item = load_item;
			}

			$scope.updateSave = function( save_over ) {
				$scope.save_over = save_over;

			}


			$scope.closeConfirmDialog = function( ) {
				$scope.showConfirmDialog = false;
				// reset confirm to nothing...
				$scope.cofirmDialogYes = function() {
					$scope.showConfirmDialog = false;
				}
			}

			$scope.cofirmDialogYes = function() {
				// empty to be replaced...
				$scope.showConfirmDialog = false;
			}

			$scope.confirmDialogQuestion = "";

			$scope.confirmDialog = function( confirmationMessage, onYes ) {
				$scope.confirmDialogQuestion = confirmationMessage;
				$scope.showConfirmDialog = true;
				$scope.cofirmDialogYes = onYes;
			}


			$scope.removeSavedItem = function( itemIndex ) {

				$translate([
					'CREATOR_DELETION_CONFIRMATION'
				]).then(
					function (translation) {
						$scope.confirmDialog(
							translation.CREATOR_DELETION_CONFIRMATION,
							function() {
								$scope.showConfirmDialog = false;
								$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
								$scope.saved_items.splice( itemIndex, 1);
								localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
							}
						);
					}
				);
			}

			$scope.saveItem = function( save_over, saveName ) {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

				if( save_over > -1 ) {
					$scope.saved_items[ save_over ] = $scope.makeSaveObject( saveName );
				} else {
					$scope.saved_items.push( $scope.makeSaveObject( saveName ));
				}
				localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

				$scope.closeDialogs();
			}

			$scope.makeSaveObject = function( saveName ) {
				save_object = {
					name: saveName,
					datetime: Date(),
					type: itemType,
					data:  $scope.creatorObj.exportJSON()
				};
				return save_object;
			}

			$scope.updatePage = function() {
				$scope.creatorObj.calculate();

				$scope.setSize = $scope.creatorObj.size;

				$scope.creator_preview = $scope.creatorObj.createStatesBlock();
				localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.exportJSON();

				$scope.mod_list = Array();
				angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );
				for(modc = 0; modc < $scope.mod_list.length; modc++) {
					if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
					}
					$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].getModCost($scope.creatorObj);
					$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].getCost($scope.creatorObj));
					$scope.mod_list[modc].local_max = $scope.mod_list[modc].getMax($scope.creatorObj);
					$scope.mod_list[modc].currently_added = $scope.creatorObj.getModificationCount( $scope.mod_list[modc].tag );
					if(
						( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
						&&
						( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
					) {
						if( typeof($scope.mod_list[modc].isAvailable) == "function" ) {
							if ( $scope.mod_list[modc].isAvailable( $scope.creatorObj ) ) {
								$scope.mod_list[modc].can_add = true;
							} else {
								$scope.mod_list[modc].can_add = false;
							}
						} else {
							$scope.mod_list[modc].can_add = true;
						}
					} else {
						$scope.mod_list[modc].can_add = false;
					}


					if( $scope.mod_list[modc].currently_added > 0)
						$scope.mod_list[modc].can_remove = true;
					else
						$scope.mod_list[modc].can_remove = false;
				}

				// remove mods that aren't enabled or disabled by option
				for(var modc = $scope.mod_list.length -1; modc >= 0; modc--) {
					if(

						typeof($scope.mod_list[modc].showWithOption) != "undefined"
							&&
						$scope.mod_list[modc].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].showWithOption ) == false) {
							$scope.mod_list.splice(modc, 1);
						}

					}

					if(

						typeof($scope.mod_list[modc].hideWithOption) != "undefined"
							&&
						$scope.mod_list[modc].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].hideWithOption ) == true ) {
							$scope.mod_list.splice(modc, 1);
						}

					}
				}

				$translate([
					'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {


						$scope.size_options = Array();
						$scope.size_selected = null;
						$scope.setSize = 0;

						default_size_object = {
							id: 0,
							label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
						};
						$scope.size_options.push( default_size_object );
						for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
							if( savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]])
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;
							else
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel["en-US"] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;

							push_object = {
								id: savageWorldsSciFiSizes[itemType][sizec].size,
								label: display_label
							};
							if( savageWorldsSciFiSizes[itemType][sizec].showWithOption )
								push_object.showWithOption = savageWorldsSciFiSizes[itemType][sizec].showWithOption;
							if( savageWorldsSciFiSizes[itemType][sizec].hideWithOption )
								push_object.hideWithOption = savageWorldsSciFiSizes[itemType][sizec].hideWithOption;

							$scope.size_options.push( push_object );
							if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
								$scope.size_selected = push_object;
								$scope.setSize = $scope.creatorObj.size;
							}


						}
						if( $scope.size_selected == null) {
							$scope.size_selected = default_size_object;
							$scope.setSize = 0;
						}

				// remove sizes that aren't enabled or disabled by option
				for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

					if(

						typeof($scope.size_options[sizec].showWithOption) != "undefined"
							&&
						$scope.size_options[sizec].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].showWithOption ) == false) {

							$scope.size_options.splice(sizec, 1);
						}

					}

					if(

						typeof($scope.size_options[sizec].hideWithOption) != "undefined"
							&&
						$scope.size_options[sizec].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].hideWithOption ) == true ) {
							$scope.size_options.splice(sizec, 1);
						}

					}
				}

				});
				$scope.available_weapons = Array();

				for( weap_c = 0; weap_c < savageWorldsVehicleWeapons.length; weap_c++) {
					if( savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].local_cost = $scope.creatorObj.simplify_cost( savageWorldsVehicleWeapons[weap_c].cost );
					if( savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].can_add = true;
					if( typeof(savageWorldsVehicleWeapons[weap_c].isAvailable) == "function") {
						if( savageWorldsVehicleWeapons[weap_c].isAvailable( $scope.creatorObj) == false ){

							savageWorldsVehicleWeapons[weap_c].can_add = false;
						}
					}

					// change vehicleWeaponModPoints to mods_available for non power armor vehicles ;)

					if( $scope.creatorObj.vehicleWeaponModPoints < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}

					if( savageWorldsVehicleWeapons[weap_c].can_add ) {
						$scope.available_weapons.push(savageWorldsVehicleWeapons[weap_c]);
					}
				}

				$scope.available_weapons.sort(
					function(ob1,ob2) {
						if (ob1.local_classification > ob2.local_classification) {
							return 1;
						} else if (ob1.local_classification < ob2.local_classification) {
							return -1;
						}

						// Else go to the 2nd item
						if (ob1.mods < ob2.mods) {
							return -1;
						} else if (ob1.mods > ob2.mods) {
							return 1;
						}

						// Else go to the 3nd item
						if (ob1.local_name < ob2.local_name) {
							return -1;
						} else if (ob1.local_name > ob2.local_name) {
							return 1
						}  else { // nothing to split them
							return 0;
						}
					}
				);

				$scope.selected_options = Array();

				angular.extend(	$scope.creatorOptions,savageWorldsSciFiOptions[ itemType ] );
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( $scope.creatorObj.hasOption($scope.creatorOptions[optc].short_tag) )
						$scope.selected_options[optc] = true;
					else
						$scope.selected_options[optc] = false;
				}

				$scope.installed_weapons = $scope.creatorObj.selected_weapons;
				for(weap_c = 0; weap_c < $scope.installed_weapons.length; weap_c++) {
					if( $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ "en-US" ];
					}


					found_item = false
					for(optc = 0;optc < $scope.fixed_options.length; optc++ ) {

						if( $scope.fixed_options[optc].id == $scope.installed_weapons[weap_c].fixed ) {
							$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[optc];
							found_item = true;
						}
					}
					if(!found_item)
						$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[0];
				}

			}

			$scope.init();
		}

	]
);

angular.module("baseApp").controller(
	"scifiWalkerController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_walker";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.walker";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.walker";
			var itemType = "walker";
			var itemName = "Walker";


			$scope.init = function() {
				$scope.creatorObj = new scifiCreator();



				$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);


				if( typeof(localStorage[ optionsLocalStorageVariable ]) != "undefined" ) {
					$scope.user_options = localStorage[ optionsLocalStorageVariable ];
				} else {
					$scope.user_options = "";
				}

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.creatorObj.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}

				$scope.creatorObj.useLang = localStorage["users_preferred_language"];

				$scope.selected_options = Array();
				$scope.creatorOptions = savageWorldsSciFiOptions[ itemType ];
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( typeof($scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ "en-US" ];
					}

					if( typeof($scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ "en-US" ];
					}
					$scope.selected_options[optc] = false;
				}

				$translate([
					'APP_TITLE', 'INDEX_BUTTON_SCIFI_WALKER', 'CREATOR_SIZE',
					"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
					"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_WALKER + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_WALKER;
						$scope.sizeLabel  = translation.CREATOR_SIZE;

						$scope.fixed_options = Array(
							{
								id: '0',
								label: translation.CREATOR_FIXED_TURRETED_NONE
							},
							{
								id: 'bow',
								label: translation.CREATOR_FIXED_BOW_FRONT
							},
							{
								id: 'port',
								label: translation.CREATOR_FIXED_PORT_LEFT
							},
							{
								id: 'starboard',
								label: translation.CREATOR_FIXED_STARBOARD_RIGHT
							},
							{
								id: 'stern',
								label: translation.CREATOR_FIXED_STERN_REAR
							}
						);

						$scope.updatePage();
					}

				);
			}

			$scope.addMod = function( modTag ) {
				$scope.creatorObj.addMod(modTag);
				$scope.updatePage();
			}

			$scope.addWeapon = function( modTag ) {
				$scope.creatorObj.addWeapon(modTag);
				$scope.updatePage();
			}

			$scope.removeMod = function( modTag ) {
				$scope.creatorObj.removeMod(modTag);
				$scope.updatePage();
			}

			$scope.updateSize = function() {

				$scope.creatorObj.setSize( $scope.size_selected.id );
				$scope.updatePage();
			}

			$scope.linkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.incrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.setFixed = function(weaponIndex) {
				newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
				$scope.creatorObj.fixWeapon( weaponIndex, newValue);
				$scope.updatePage();
			}

			$scope.unlinkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.decrementWeaponCount( weaponIndex);
				$scope.updatePage();
			}

			$scope.updateOption = function( option_index ) {

				for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
					if( $scope.creatorOptions[optc].short_tag ) {
						if( $scope.selected_options[optc] == 0 )
							$scope.creatorObj.removeOption( $scope.creatorOptions[optc].short_tag );
						else
							$scope.creatorObj.addOption( $scope.creatorOptions[optc].short_tag );
					}
				}
				$scope.updatePage();
			}

			$scope.removeWeapon = function(weaponIndex) {
				$scope.creatorObj.removeWeapon( weaponIndex );
				$scope.updatePage();
			}

			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
			}

			$scope.newDialog = function() {

				$scope.closeDialogs();
				$scope.newDialogOpen = true;
			}

			$scope.loadDialog = function() {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.load_item = 0;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();

				$scope.closeDialogs();
				$scope.loadDialogOpen = true;
			}
			$scope.saveDialog = function() {
				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.save_over = -1;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();
				$scope.save_as_name = $scope.creatorObj.itemName;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.importJSON = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(importJSON) {
				$scope.importJSON = importJSON;
			}

			$scope.importData = function(importJSON) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.exportBBCode = $scope.creatorObj.exportBBCode();
				$scope.exportJSON = $scope.creatorObj.exportJSON();
				$scope.closeDialogs();
				$scope.exportDialogOpen = true;
			}
			$scope.optionsDialog = function() {
				$scope.closeDialogs();
				$scope.optionsDialogOpen = true;
			}

			$scope.loadItem = function( load_item ) {
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				if( $scope.saved_items[ load_item ] )
					localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

				$scope.closeDialogs();
				$scope.init();
			}

			$scope.clearCurrent = function(  ) {

				localStorage[ currentItemLocalStorageVariable ] = "";
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.updateLoad = function( load_item ) {
				$scope.load_item = load_item;
			}

			$scope.updateSave = function( save_over ) {
				$scope.save_over = save_over;

			}

			$scope.closeConfirmDialog = function( ) {
				$scope.showConfirmDialog = false;
				// reset confirm to nothing...
				$scope.cofirmDialogYes = function() {
					$scope.showConfirmDialog = false;
				}
			}

			$scope.cofirmDialogYes = function() {
				// empty to be replaced...
				$scope.showConfirmDialog = false;
			}

			$scope.confirmDialogQuestion = "";

			$scope.confirmDialog = function( confirmationMessage, onYes ) {
				$scope.confirmDialogQuestion = confirmationMessage;
				$scope.showConfirmDialog = true;
				$scope.cofirmDialogYes = onYes;
			}

			$scope.removeSavedItem = function( itemIndex ) {

				$translate([
					'CREATOR_DELETION_CONFIRMATION'
				]).then(
					function (translation) {
						$scope.confirmDialog(
							translation.CREATOR_DELETION_CONFIRMATION,
							function() {
								$scope.showConfirmDialog = false;
								$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
								$scope.saved_items.splice( itemIndex, 1);
								localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
							}
						);
					}
				);
			}

			$scope.saveItem = function( save_over, saveName ) {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

				if( save_over > -1 ) {
					$scope.saved_items[ save_over ] = $scope.makeSaveObject( saveName );
				} else {
					$scope.saved_items.push( $scope.makeSaveObject( saveName ));
				}
				localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

				$scope.closeDialogs();
			}

			$scope.makeSaveObject = function( saveName ) {
				save_object = {
					name: saveName,
					datetime: Date(),
					type: itemType,
					data:  $scope.creatorObj.exportJSON()
				};
				return save_object;
			}

			$scope.updatePage = function() {
				$scope.creatorObj.calculate();

				$scope.setSize = $scope.creatorObj.size;

				$scope.creator_preview = $scope.creatorObj.createStatesBlock();
				localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.exportJSON();

				$scope.mod_list = Array();
				angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );
				for(modc = 0; modc < $scope.mod_list.length; modc++) {
					if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
					}
					$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].getModCost($scope.creatorObj);
					$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].getCost($scope.creatorObj));
					$scope.mod_list[modc].local_max = $scope.mod_list[modc].getMax($scope.creatorObj);
					$scope.mod_list[modc].currently_added = $scope.creatorObj.getModificationCount( $scope.mod_list[modc].tag );
					if(
						( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
						&&
						( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
					) {
						if( typeof($scope.mod_list[modc].isAvailable) == "function" ) {
							if ( $scope.mod_list[modc].isAvailable( $scope.creatorObj ) ) {
								$scope.mod_list[modc].can_add = true;
							} else {
								$scope.mod_list[modc].can_add = false;
							}
						} else {
							$scope.mod_list[modc].can_add = true;
						}
					} else {
						$scope.mod_list[modc].can_add = false;
					}


					if( $scope.mod_list[modc].currently_added > 0)
						$scope.mod_list[modc].can_remove = true;
					else
						$scope.mod_list[modc].can_remove = false;
				}

				// remove mods that aren't enabled or disabled by option
				for(var modc = $scope.mod_list.length -1; modc >= 0; modc--) {
					if(

						typeof($scope.mod_list[modc].showWithOption) != "undefined"
							&&
						$scope.mod_list[modc].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].showWithOption ) == false) {
							$scope.mod_list.splice(modc, 1);
						}

					}

					if(

						typeof($scope.mod_list[modc].hideWithOption) != "undefined"
							&&
						$scope.mod_list[modc].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.mod_list[modc].hideWithOption ) == true ) {
							$scope.mod_list.splice(modc, 1);
						}

					}
				}

				$translate([
					'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {


						$scope.size_options = Array();
						$scope.size_selected = null;
						$scope.setSize = 0;

						default_size_object = {
							id: 0,
							label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
						};
						$scope.size_options.push( default_size_object );
						for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
							if( savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]])
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;
							else
								display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel["en-US"] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;

							push_object = {
								id: savageWorldsSciFiSizes[itemType][sizec].size,
								label: display_label
							};
							if( savageWorldsSciFiSizes[itemType][sizec].showWithOption )
								push_object.showWithOption = savageWorldsSciFiSizes[itemType][sizec].showWithOption;
							if( savageWorldsSciFiSizes[itemType][sizec].hideWithOption )
								push_object.hideWithOption = savageWorldsSciFiSizes[itemType][sizec].hideWithOption;

							$scope.size_options.push( push_object );
							if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
								$scope.size_selected = push_object;
								$scope.setSize = $scope.creatorObj.size;
							}


						}
						if( $scope.size_selected == null) {
							$scope.size_selected = default_size_object;
							$scope.setSize = 0;
						}

				// remove sizes that aren't enabled or disabled by option
				for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

					if(

						typeof($scope.size_options[sizec].showWithOption) != "undefined"
							&&
						$scope.size_options[sizec].showWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].showWithOption ) == false) {

							$scope.size_options.splice(sizec, 1);
						}

					}

					if(

						typeof($scope.size_options[sizec].hideWithOption) != "undefined"
							&&
						$scope.size_options[sizec].hideWithOption != ""
					) {
						if( $scope.creatorObj.hasOption( $scope.size_options[sizec].hideWithOption ) == true ) {
							$scope.size_options.splice(sizec, 1);
						}

					}
				}

				});
				$scope.available_weapons = Array();

				for( weap_c = 0; weap_c < savageWorldsVehicleWeapons.length; weap_c++) {
					if( savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].local_cost = $scope.creatorObj.simplify_cost( savageWorldsVehicleWeapons[weap_c].cost );
					if( savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].can_add = true;
					if( typeof(savageWorldsVehicleWeapons[weap_c].isAvailable) == "function") {
						if( savageWorldsVehicleWeapons[weap_c].isAvailable( $scope.creatorObj) == false ){

							savageWorldsVehicleWeapons[weap_c].can_add = false;
						}
					}

					// change vehicleWeaponModPoints to mods_available for non power armor vehicles ;)

					if( $scope.creatorObj.vehicleWeaponModPoints < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}

					if( savageWorldsVehicleWeapons[weap_c].can_add ) {
						$scope.available_weapons.push(savageWorldsVehicleWeapons[weap_c]);
					}
				}

				$scope.available_weapons.sort(
					function(ob1,ob2) {
						if (ob1.local_classification > ob2.local_classification) {
							return 1;
						} else if (ob1.local_classification < ob2.local_classification) {
							return -1;
						}

						// Else go to the 2nd item
						if (ob1.mods < ob2.mods) {
							return -1;
						} else if (ob1.mods > ob2.mods) {
							return 1;
						}

						// Else go to the 3nd item
						if (ob1.local_name < ob2.local_name) {
							return -1;
						} else if (ob1.local_name > ob2.local_name) {
							return 1
						}  else { // nothing to split them
							return 0;
						}
					}
				);

				$scope.selected_options = Array();

				angular.extend(	$scope.creatorOptions,savageWorldsSciFiOptions[ itemType ] );
				for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
					if( $scope.creatorObj.hasOption($scope.creatorOptions[optc].short_tag) )
						$scope.selected_options[optc] = true;
					else
						$scope.selected_options[optc] = false;
				}

				$scope.installed_weapons = $scope.creatorObj.selected_weapons;
				for(weap_c = 0; weap_c < $scope.installed_weapons.length; weap_c++) {
					if( $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ "en-US" ];
					}


					found_item = false
					for(optc = 0;optc < $scope.fixed_options.length; optc++ ) {

						if( $scope.fixed_options[optc].id == $scope.installed_weapons[weap_c].fixed ) {
							$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[optc];
							found_item = true;
						}
					}
					if(!found_item)
						$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[0];
				}

			}

			$scope.init();
		}

	]
);

angular.module("baseApp").controller(
	"scifiWorldController",
	function() {

	}
);
angular.module("baseApp").controller(
	"welcomeController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {
			$translate(['APP_TITLE', 'INDEX_WELCOME']).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_WELCOME + " | " + translation.APP_TITLE;
				$rootScope.subtitle_tag = translation.INDEX_WELCOME;
			});
		}
	]
);

/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
*/

var savageWorldsBooksList = Array();

savageWorldsBooksList[0] = {
	id: 1,
	core: true,
	name: {
		"en-US": "Savage Worlds Deluxe",
		"de-DE": "German Savage Worlds",
		"pt-BR": "Savage Brazilians",
	},
	short_name: "peg_swd_ee",
	abbrev: "SWD:EE",
	publisher: {
		"en-US": "Pinnacle Entertainment Group",
		"de-DE": "Pinnacle Entertainment Group",
		"pt-BR": "PEG",

	},
	year: "2011",
	copyright: {
		"en-US": "2011 Pinnacle Entertainment Group",
		"de-DE": "2011 Pinnacle Entertainment Group",
		"pt-BR": "Poog",

	},
	buyme: "http://www.peginc.com/store/savage-worlds-deluxe/"
}

savageWorldsBooksList[1] = {
	id: 2,
	core: false,
	name: {
		"en-US": "Fantasy Companion",
		"pt-BR": "Brazilian Fantasy",
		"de-DE": "German Fantasy",
	},
	short_name: "peg_swfc",
	abbrev: "FC",
	publisher: {
		"en-US": "Pinnacle Entertainment Group",
		"pt-BR": "Pinnacle Entertainment Group",
		"de-DE": "",

	},
	year: "2012",
	copyright: {
		"en-US": "2012 Pinnacle Entertainment Group",
		"pt-BR": "",
		"de-DE": "",

	},
	buyme: "http://www.peginc.com/store/savage-worlds-fantasy-companion/"
}

savageWorldsBooksList[2] = {
	id: 3,
	core: false,
	name: {
		"en-US": "Horror Companion",
	},
	short_name: "peg_swhc",
	abbrev: "HC",
	publisher: {
		"en-US": "Pinnacle Entertainment Group",

	},
	year: "2012",
	copyright: {
		"en-US": "2012 Pinnacle Entertainment Group",

	},
	buyme: "http://www.peginc.com/store/savage-worlds-horror-companion-2/"
}

savageWorldsBooksList[3] = {
	id: 4,
	core: false,
	name: {
		"en-US": "Science Fiction Companion",
	},
	short_name: "peg_sfc",
	abbrev: "SFC",
	publisher: {
		"en-US": "Pinnacle Entertainment Group",

	},
	year: "2014",
	copyright: {
		"en-US": "2014 Pinnacle Entertainment Group",

	},
	buyme: "https://www.peginc.com/store/science-fiction-companion-le-bundle/"
}

savageWorldsBooksList[4] = {
	id: 5,
	core: false,
	name: {
		"en-US": "Super Powers Companion",
	},
	short_name: "peg_spc2",
	abbrev: "SPC",
	publisher: {
		"en-US": "Pinnacle Entertainment Group",

	},
	year: "2014",
	copyright: {
		"en-US": "2014 Pinnacle Entertainment Group",

	},
	buyme: "https://www.peginc.com/store/super-powers-companion-second-edition-le/"
}

savageWorldsBooksList[5] = {
	id: 6,
	core: false,
	name: {
		"en-US": "Savage Free Bestiary",
	},
	short_name: "sfb",
	abbrev: "SFB",
	publisher: {
		"en-US": "(Unknown) Pinnacle Enterainment Group, Butch Curry, Andrea �Lord Lance� Parducci and probably others",

	},
	year: "",
	copyright: {
		"en-US": "Butch Curry, Open?",

	},
	buyme: "https://docs.google.com/document/edit?id=1qu4zzMYbPqOquVlCfgpPeoCmCEqGUgWh5dz-rpKJ1ck&hl=it&authkey=CIySp98E"
}

savageWorldsBooksList[6] = {
	id: 7,
	core: false,
	name: {
		"en-US": "Lankhmar",
	},
	short_name: "peg_lank",
	abbrev: "LANK",
	publisher: {
		"en-US": "Pinnacle Enterainment Group",

	},
	year: "2015",
	copyright: {
		"en-US": "2015 Pinnacle Entertainment Group, Trademarks of the Estate of Fritz Leiber.",

	},
	buyme: "https://www.peginc.com/store/lankhmar-city-of-thieves/"
}

savageWorldsBooksList[7] = {
	id: 8,
	core: false,
	name: {
		"en-US": "The Last Parsec",
	},
	short_name: "peg_tlp",
	abbrev: "TLP",
	publisher: {
		"en-US": "Pinnacle Enterainment Group",

	},
	year: "2015",
	copyright: {
		"en-US": "2015 Pinnacle Enterainment Group",

	},
	buyme: "https://www.peginc.com/store/the-last-parsec-core/"
}

savageWorldsBooksList[8] = {
	id: 13,
	core: false,
	name: {
		"en-US": "Thrilling Tales (2nd Edition)",
	},
	short_name: "ad_tt",
	abbrev: "TALES",
	publisher: {
		"en-US": "Adamant Entertainment",

	},
	year: "",
	copyright: {
		"en-US": "Adamant Entertainment",

	},
	buyme: ""
}

/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	var savageWorldsSkillList = Array(


{
		 'id': 'SKILL_BOATING',
	 name: {
		 'en-US': 'Boating',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Boating',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_CLIMBING',
	 name: {
		 'en-US': 'Climbing',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Climbing',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'strength',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_DRIVING',
	 name: {
		 'en-US': 'Driving',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_FAITH',
	 name: {
		 'en-US': 'Faith',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'spirit',
		 'for_arcane': 'miracles',
		 'specify': 0
},
{
		 'id': 'SKILL_FIGHTING',
	 name: {
		 'en-US': 'Fighting',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_GAMBLING',
	 name: {
		 'en-US': 'Gambling',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_HEALING',
	 name: {
		 'en-US': 'Healing',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_INTIMIDATION',
	 name: {
		 'en-US': 'Intimidation',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'spirit',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_INVESTIGATION',
	 name: {
		 'en-US': 'Investigation',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_KNOWLEDGE',
	 name: {
		 'en-US': 'Knowledge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 1
},
{
		 'id': 'SKILL_LOCKPICKING',
	 name: {
		 'en-US': 'Lockpicking',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_NOTICE',
	 name: {
		 'en-US': 'Notice',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_PERSUASION',
	 name: {
		 'en-US': 'Persuasion',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'spirit',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_PILOTING',
	 name: {
		 'en-US': 'Piloting',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_PSIONICS',
	 name: {
		 'en-US': 'Psionics',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': 'psionics',
		 'specify': 0
},
{
		 'id': 'SKILL_REPAIR',
	 name: {
		 'en-US': 'Repair',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_RIDING',
	 name: {
		 'en-US': 'Riding',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_SHOOTING',
	 name: {
		 'en-US': 'Shooting',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_SPELLCASTING',
	 name: {
		 'en-US': 'Spellcasting',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': 'magic',
		 'specify': 0
},
{
		 'id': 'SKILL_STEALTH',
	 name: {
		 'en-US': 'Stealth',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_STREETWISE',
	 name: {
		 'en-US': 'Streetwise',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_SURVIVAL',
	 name: {
		 'en-US': 'Survival',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_SWIMMING',
	 name: {
		 'en-US': 'Swimming',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_TAUNT',
	 name: {
		 'en-US': 'Taunt',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_THROWING',
	 name: {
		 'en-US': 'Throwing',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'agility',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_TRACKING',
	 name: {
		 'en-US': 'Tracking',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': '',
		 'specify': 0
},
{
		 'id': 'SKILL_WEIRD_SCIENCE',
	 name: {
		 'en-US': 'Weird Science',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '1',
		 'attribute': 'smarts',
		 'for_arcane': 'weird-science',
		 'specify': 0
},
{
		 'id': 'SKILL_GUTS',
	 name: {
		 'en-US': 'Guts',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': '2',
		 'attribute': 'spirit',
		 'for_arcane': '',
		 'specify': 0
}
);


/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsExtrasDatabase) == "undefined")
		var savageWorldsExtrasDatabase = Array();

	if(typeof(savageWorldsExtrasBooksList) == "undefined")
		var savageWorldsExtrasBooksList = Array();

	var currentBook = get_book_by_id(1);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// Air Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 11,
		name: {
			'en-US' : 'Air Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nEthereal: Air Elementals can maneuver through any non-solid surface. They can seep through the cracks in doors, bubble through water, and rush through sails.\nFlight: Air Elementals fly at a rate of 6" with a Climb of 3. They may not run.\nInvulnerability:: Immune to all non-magical attacks except fire.\nPush: The air elemental can use an action to push a single adjacent target 1d6" directly away with a concentrated blast of air. The victim makes a Strength roll, with each success and raise reducing the amount moved by 1" (to a minimum of 0).\nWind Blast: Air Elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d6 points of nonlethal damage.\nWhirlwind: As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at -2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Air elementals manifest as sentient whirlwinds.',
		},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.santharia.com/pictures/quellion/quellion_pics/air_elemental.jpg',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p137'
	}
);
	// Alligator/Crocodile
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 1,
		name: {
			'en-US' : 'Alligator/Crocodile',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick skin.\nAquatic: Pace 5\nBite: Str+d6\nRollover: Both gators and crocs are notorious for grasping their prey in their vice-like jaws and rolling over and over with their flailing victims in their mouth. If one of these large amphibians hits with a raise, it causes an extra 2d4 rollover damage to its prey in addition to its regular Strength damage.',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Alligators and crocs are staples of most pulp-genre adventure games. The statistics here represent an average specimen of either species. Much larger versions are often found in more remote areas.',
		},
		attributes: '{"agility":"d4","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://static.ddmcdn.com/gif/alligator-zigzag-1.jpg',
		charisma: '0',
		pace: '3',
		parry: '6',
		toughness: '9',
		armor: '2',
		book: 1,
		page: 'p135'
	}
);
	// Bear, Large
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 2,
		name: {
			'en-US' : 'Bear, Large',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bear Hug: Bears don\'t actually "hug" their victims, but they do attempt to use their weight to pin their prey and rend it with their claws and teeth. A bear that hits with a raise has pinned his foe. The opponent may only attempt to escape the "hug" on his action, which requires a raise on an opposed Strength roll.\nClaws: Str+d6\nSize +2: These creatures can standup to 8\'tall and weigh over 1000 pounds.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Large bears covers grizzlies, kodiaks, and massive polar bears.',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d8","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://static.comicvine.com/uploads/original/8/85165/1933110-grizzly_bear.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 1,
		page: 'p135'
	}
);
	// Bull
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 3,
		name: {
			'en-US' : 'Bull',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Horns: Str+d6\nGore: Bulls charge maneuver to gore their opponents with their long horns. If they can move at least 6" before attacking, they add +4 to their damage total.\nSize +2: Bulls are large creatures.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Bulls are usually only aggressive toward humans when enraged. Of course, if you\'re looking up the statistics here, it\'s probably already seeing red.',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d8","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.shockingtimes.co.uk/wp-content/uploads/2010/03/Bull.jpg',
		charisma: '0',
		pace: '7',
		parry: '4',
		toughness: '10',
		armor: '0',
		book: 1,
		page: 'p135'
	}
);
	// Cat, Small
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 4,
		name: {
			'en-US' : 'Cat, Small',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Acrobat: +2 to Agility rolls to perform acrobatic maneuvers; +1 to Parry if unencumbered.\nBite/Claw: Str.\nLow Light Vision: Cats ignore penalties for Dim and Dark lighting.\nSize -2: Cats are typically less than a foot high.\nSmall: Attackers subtract 2 from their attacks to hit.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'This is an ordinary house cat, the sort that might be a familiar for a spellcaster, a Beast Master\'s animal friend, or an alternate form for the shape change power.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.southbham.cats.org.uk/uploads/images/pages/cat-stalking-crop.jpg',
		charisma: '0',
		pace: '6',
		parry: '3',
		toughness: '3',
		armor: '0',
		book: 1,
		page: 'p135'
	}
);
	// Dog/Wolf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 5,
		name: {
			'en-US' : 'Dog/Wolf',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4.\nFleet-Footed: Roll a d10 when running instead of a d6.\nGo for the Throat: Dogs instinctively go for an opponent\'s soft spots. With a raise on its attack roll, it hits the target\'s most weakly armored location.\nSize -1: Dogs are relatively small.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The stats below are for large attack dogs, such as Rottweilers and Doberman Pinschers, as well as wolves, hyenas, and the like.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.green-humanity.com/uploads/8/0/4/1/8041038/9168429_orig.jpg',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 1,
		page: 'p135'
	}
);
	// Dragon
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 7,
		name: {
			'en-US' : 'Dragon',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear-2: Anyone who sees a mighty dragon must make a Fear check at -2.\nFiery Breath: Dragons breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A dragon may not attack with its claws or bite in the round it breathes fire.\nFlight: Dragons have a Flying Pace of 24" and Climb 0.\nHardy: The creature does not suffer a wound from being Shaken twice.\nHuge: Attackers add +4 to their Fighting or Shooting rolls when attacking a dragon due to its massive size.\nImproved Frenzy: If a dragon does not use its Fiery Breath ability, it may make two Fighting attacks with no penalty.\nLevel Headed: Act on best of two cards.\nSize +8: Dragons are massive creatures. This version is over 40\' long from nose to tail, and weighs well over 30,000 pounds.\nTail Lash: The dragon can sweep all opponents in its rear facing in a 3" long by 6" wide square. This is a standard Fighting attack, and damage is equal to the dragon\'s Strength -2.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dragons are fire-breathing monsters that bring doom and despair to the villages they ravage. Such creatures should not be fought lightly as they are more than a match for even a party of experienced adventurers. These beasts are quite intelligent as well, and use all of their advantages when confronted by would-be dragon- slayers.',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d12+9","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 1,
		image: 'http://www.gamefront.com/wp-content/uploads/2008/12/red-dragon.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '20',
		armor: '4',
		book: 1,
		page: 'p136'
	}
);
	// Drake
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 6,
		name: {
			'en-US' : 'Drake',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear: Drakes are frightening creatures to behold.\nFiery Breath: Drakes breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire (see Fire). A drake may not attack with its claws or bite in the round it breathes fire.\nLarge: Attackers add +2 to their attack rolls when attacking a drake due to its large size.\nSize +5: Drakes are over 20\' long from snout to tail, and weigh in at over 3000 pounds.\nTail Lash: A drake can sweep all opponents in its rear facing in a 3" long by 6" wide rectangle. This is a standard Fighting attack, and damage is equal to the creature\'s Strength -2.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Drakes are non-flying dragons with animal intelligence (rather than the more human-like sentience of true dragons). They are much more aggressive in direct combat than their distant cousins, however.',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d10","strength":"d12+6","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://img2.wikia.nocookie.net/__cb20080714125534/finalfantasy/images/5/52/Greater_Drake_ffx-2.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '17',
		armor: '4',
		book: 1,
		page: 'p136'
	}
);
	// Earth Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 8,
		name: {
			'en-US' : 'Earth Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor +4: Rocky hide.\nBash: Str+d6\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Earth elementals manifest as five-foot tall, vaguely man-shaped collections of earth and stone. Though amazingly strong, they are also quite slow and ponderous.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: 'http://www.elfwood.com/art/o/m/omarmorsy/earth_elemental.jpg',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '11',
		armor: '4',
		book: 1,
		page: 'p136'
	}
);
	// Fire Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 9,
		name: {
			'en-US' : 'Fire Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Fire Elementals are immune to all non-magical attacks, but suffer 1d6 damage when doused in at least a gallon of water, +2 per additional gallon.\nFiery Touch: Str+d6; chance of catching fire.\nFlame Strike: Fire elementals can project a searing blast of flame using the Cone Template. Characters within the cone must beat the spirit\'s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Fire elementals appear as man-shaped flame.',
		},
		attributes: '{"agility":"d12+1","smarts":"d8","spirit":"d8","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://th08.deviantart.net/fs70/PRE/f/2010/036/7/d/Fire_elemental_by_javi_ure.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p136'
	}
);
	// Ghost
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 13,
		name: {
			'en-US' : 'Ghost',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Ethereal: Ghosts are immaterial and can only be harmed by magical attacks.\nFear -2: Ghosts cause Fear checks at -2 when they let themselves be seen.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Spectres, shades, and phantoms sometimes return from death to haunt the living or fulfill some lost goal.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12+2"},"SKILL_NOTICE":{"value":"d12"},"SKILL_TAUNT":{"value":"d10"},"SKILL_STEALTH":{"value":"d12+4"},"SKILL_THROWING":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p137'
	}
);
	// Giant Worm
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 12,
		name: {
			'en-US' : 'Giant Worm',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor +4: Scaly Hide.\nBite: Str+d8.\nBurrow (20"): Giant worms can disappear and reappear on the following action anywhere within 20".\nGargantuan: The worms are Huge and thus suffer +4 to ranged attacks against them. Their attacks count as Heavy Weapons, and they add their Size to Strength rolls.\nHardy: The creature does not suffer a wound from being Shaken twice.\nSize +10: Giant worms are usually well over 50\'long and 10\' or more in diameter.\nSlam: Giant worms attempt to rise up and crush their prey beneath their massive bodies. This is an opposed roll of the creature\'s Fighting versus the target\'s Agility. If the worm wins, the victim suffers 4d6 damage.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Massive worms tunneling beneath the earth to gobble up unsuspecting adventurers are sometimes found in lonesome flatlands. The things sense vibrations through the earth, hearing a walking person at about 200 yards. The stats below are for a monster some 50\' long.',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d10","strength":"d12+10","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '22',
		armor: '4',
		book: 1,
		page: 'p137'
	}
);
	// Goblin
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 14,
		name: {
			'en-US' : 'Goblin',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Infravision: Goblins halve penalties for dark lighting against living targets (round down).\nSize -1: Goblins stand 3-4\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark "fairy tale" goblins as well as those found alongside orcs in contemporary roleplaying games.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_THROWING":{"value":"d6"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/assets/62147/goblins2.jpg',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 1,
		page: 'p137-p138'
	}
);
	// Horse, Riding
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 15,
		name: {
			'en-US' : 'Horse, Riding',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fleet-Footed: Horses roll a d8 when running instead of a d6.\nKick: Str.\nSize +2: Riding horses weigh between 800 and 1000 pounds.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Riding horses are medium-sized animals that manage a good compromise between speed and carrying capacity.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://horsebreedsinfo.com/images/brown_horse.jpg',
		charisma: '0',
		pace: '10',
		parry: '4',
		toughness: '8',
		armor: '0',
		book: 1,
		page: 'p138'
	}
);
	// Horse, War
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 16,
		name: {
			'en-US' : 'Horse, War',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fleet-Footed: Horses roll a d8 when running instead of a d6.\nKick: Str+d4.\nSize +3: Warhorses are large creatures bred for their power and stature.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'War horses are large beasts trained for aggression. They are trained to fight with both hooves, either to their front or their rear. In combat, the animal attacks any round its rider doesn\'t make a trick maneuver of some kind.',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://fc09.deviantart.net/fs44/f/2009/156/0/b/War_Horse_by_BenWootten.jpg',
		charisma: '0',
		pace: '10',
		parry: '4',
		toughness: '8',
		armor: '0',
		book: 1,
		page: 'p138'
	}
);
	// Lich
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 17,
		name: {
			'en-US' : 'Lich',
		},
		gear: {
			'en-US' : 'Magical armor(+6), other magical items',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Death Touch: Liches drain the lives of those around them with a touch. Instead of a normal attack, a lich may make a touch attack. Every raise on its Fighting roll automatically inflicts one wound to its target.\nSpells: Liches have 50 Power Points and know most every spell available.\nUndead: +2 Toughness; +2 to recover from being Shaken; called shots do no extra damage; ignores wound penalties.\nZombie: Liches are necromancers first and foremost. The undead they raise through the zombie spell are permanent, so they are usually surrounded by 4d10 skeletons or zombies as they choose. Some liches have entire armies of the undead at their disposal.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Perhaps the most diabolical creature in any fantasy land is the lich-a necromancer so consumed with the black arts that he eventually becomes undead himself.',
		},
		attributes: '{"agility":"d6","smarts":"d12+2","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d12+2","special":{"en-US":"Occult"}},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '15',
		armor: '6',
		book: 1,
		page: 'p138'
	}
);
	// Lion
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 18,
		name: {
			'en-US' : 'Lion',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite or Claw: Str+d6.\nImproved Frenzy: Lions may make two Fighting attacks each action at no penalty.\nLow Light Vision: Lions ignore penalties for Dim and Dark lighting.\nPounce: Lions often pounce on their prey to best bring their mass and claws to bear. It can leap 1d6" to gain +4 to its attack and damage. Its Parry is reduced by -2 until its next action when performing the maneuver however.\nSize +2: Male lions can weigh over 500 pounds.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The kings of the jungle are fierce predators, particularly in open grassland where their prey cannot seek refuge.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://news.bbcimg.co.uk/media/images/66231000/jpg/_66231792_z9340587-male_african_lion-spl.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '0',
		book: 1,
		page: 'p138'
	}
);
	// Mech (Sentinel)
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 19,
		name: {
			'en-US' : 'Mech (Sentinel)',
		},
		gear: {
			'en-US' : 'Typically a machine gun or flamethrower.',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor+4: \nConstruct: +2 to recover from being Shaken; called shots do no extra damage; does not suffer from disease or poison.\nFearless: Mechs are immune to fear and Intimidation, but may be smart enough to react to fear-causing situations appropriately.\nSensors: Sentinel mechs are equipped with sensor packages that halve penalties for darkness, can detect sounds, or record conversations via directional microphones.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The stats below are for a 12\' high mechanized sentinel such as might be found in a typical hard sci-fi campaign. This is a light patrol-style platform with reasonable intelligence, a sensor package, and high maneuverability.',
		},
		attributes: '{"agility":"d4","smarts":"d6","spirit":"d4","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '5',
		toughness: '10',
		armor: '4',
		book: 1,
		page: 'p138'
	}
);
	// Minotaur
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 20,
		name: {
			'en-US' : 'Minotaur',
		},
		gear: {
			'en-US' : 'Leather armor (+1), spear (Str+d6, Reach 1, Parry+1).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Horns: Str+d4\nFleet-Footed: Minotaurs roll d10s instead of d6s when running.\nGore: Minotaurs use this maneuver to gore their opponents with their horns. If they can charge at least 6" before attacking, they add +4 to their damage total.\nSize +2: Minotaurs stand over 7\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Minotaurs stand over 7\' tall and have massive, bull-like heads and horns. In many fantasy worlds, they are used as guardians of labyrinths. In others, they are simply another race of creatures occupying a fantastically savage setting. In all cases, they are fierce beasts eager for battle and the taste of their opponents\' flesh.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d10"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '8',
		toughness: '11',
		armor: '1',
		book: 1,
		page: 'p139'
	}
);
	// Mule
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 21,
		name: {
			'en-US' : 'Mule',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fleet-Footed: Mules roll d10s instead of d6s when running.\nKick: Str.\nOrnery: Mules are contrary creatures. Characters must subtract 1 from their Riding rolls when riding them.\nSize +2: Mule sare stocky creatures weighing up to 1000 pounds.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mules are a cross between a donkey and a horse, and are usually used to haul heavy goods or pull wagons.',
		},
		attributes: '{"agility":"d4","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: 'http://www.lovelongears.com/curly_spring05.jpg',
		charisma: '0',
		pace: '6',
		parry: '2',
		toughness: '8',
		armor: '0',
		book: 1,
		page: 'p139'
	}
);
	// Ogre
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 22,
		name: {
			'en-US' : 'Ogre',
		},
		gear: {
			'en-US' : 'Thick hides (+1), massive club (Str+d8).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Size +3: Most ogres are over 8\' tall with pot-bellies and massive arms and legs.\nSweep: May attack all adjacent characters at -2.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Ogres are kin to orcs and lesser giants. They are often taken in by orc clans, who respect the dumb brutes for their savagery and strength. Orcs often pit their "pet" ogres in savage combats against their rivals\' ogres.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/assets/161371/Ogre_Warlord.jpg',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '12',
		armor: '1',
		book: 1,
		page: 'p139'
	}
);
	// Orc
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 23,
		name: {
			'en-US' : 'Orc',
		},
		gear: {
			'en-US' : 'Leather armor (+1), scimitar (Str+d8).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'https://www.frontlinegaming.org/wp-content/uploads/2013/01/4e_DnD_Orcs_by_RalphHorsley1.jpeg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '1',
		book: 1,
		page: 'p139'
	}
);
	// Orc Chieftan
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 24,
		name: {
			'en-US' : 'Orc Chieftan',
		},
		gear: {
			'en-US' : 'Plate chest plate (+3), chain arms and legs (+2), battle axe (Str+d10).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.\nSweep: May attack all adjacent characters at -2 penalty.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The leader of small orc clans is always the most deadly brute in the bunch. Orc chieftains generally have a magical item or two in settings where such things are relatively common (most "swords and sorcery" worlds).',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 1,
		page: 'p139-p140'
	}
);
	// Shark, Great White
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 25,
		name: {
			'en-US' : 'Shark, Great White',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 10.\nBite: Str+d8.\nHardy: The creature does not suffer a wound from being Shaken twice.\nLarge: Attackers add +2 to their attack rolls when attacking a great white due to its large size.\nSize+4: Great whites can grow up to 25\' in length.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These statistics cover great whites, 18 to 25 feet long. Larger specimens surely exist.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://24.media.tumblr.com/b2fb55d2fcc1a2c4a79e86b092ef2724/tumblr_mqogn2Sind1r15h5mo1_500.jpg',
		charisma: '0',
		pace: '-',
		parry: '7',
		toughness: '12',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Shark, Medium Maneater
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 26,
		name: {
			'en-US' : 'Shark, Medium Maneater',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 10.\nBite: Str+d6.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These statistics cover most medium sized mankillers, such as tiger sharks an bulls.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.fearbeneath.com/wp-content/gallery/tiger-sharks/Tiger-Shark-Roger-Horrocks.jpg',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Skeleton
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 27,
		name: {
			'en-US' : 'Skeleton',
		},
		gear: {
			'en-US' : 'Varies',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bony Claws: Str+d4.\nFearless: Skeletons are immune to Fear and Intimidation.\nUndead: +2 toughness; +2 to recover from being Shaken; called shots do no extra damage.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The skin has already rotted from these risen dead, leaving them slightly quicker than their flesh laden zombie counterparts. They are often found swarming in vile necromancer legions.',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://wiki.chronicles-of-blood.com/images/thumb/Creatures-Skeleton.jpg/350px-Creatures-Skeleton.jpg',
		charisma: '0',
		pace: '7',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Snake, Constrictor
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 28,
		name: {
			'en-US' : 'Snake, Constrictor',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str.\nConstrict: Large constrictors have very little chance of entangling active man-sized prey in the real world- they must attack while their victim is sleeping, stunned, paralyzed, and so on. Constrictors in pulp and other fantastic genres might be far more deadly. These creatures bite when they succeed at a Fighting roll, and entangle when they succeed with a raise. The round they entangle and each round thereafter, they cause damage to their prey equal to Str+d6. The prey may attempt to escape on his action by getting a raise on an opposed Strength roll.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Pythons, boa constrictors, and other snakes over 15\' long are rarely deadly to man in the real world because they aren\'t particularly aggressive toward such large prey. In games, however, such snakes might be provoked, drugged, or just plain mean.',
		},
		attributes: '{"agility":"d4","smarts":"d4 (A)","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Snake, Venomous
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 29,
		name: {
			'en-US' : 'Snake, Venomous',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str.\nPoison: See the Poison rules on [object Object] page 89.\nQuick: Snakes are notoriously fast. They may discard Action Cards of 5 or lower and draw another. They must keep the replacement card, however.\nSize-2: Most venomous snakes are 4-6\' in length, but only a few inches thick.\nSmall: Anyone attacking a snake must subtract 2 from his attack rolls.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Here are the stats for Taipans (Australian brown snakes), cobras, and similar medium- sized snakes with extremely deadly poison.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d4","vigor":"d4"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '2',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Spider, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 30,
		name: {
			'en-US' : 'Spider, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4.\nPoison (-4): See the Poison rules on [object Object] page 89.\nWall Walker: Can walk on vertical surfaces at Pace 8.\nWebbing: The spiders can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at -4.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant spiders are about the size of large dogs and live in nests of 1d6+2 arachnids. They frequently go hunting in these packs when prey is scarce in their home lair.',
		},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d12+2"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 1,
		page: 'p140'
	}
);
	// Swarm
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 31,
		name: {
			'en-US' : 'Swarm',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite or Sting: Swarms inflict hundreds of tiny bites every round to their victims, hitting automatically and causing 2d4 damage to everyone in the template. Damage is applied to the least armored location (victims in completely sealed suits are immune).\nSplit: Some swarms are clever enough to split into two smaller swarms (Small Burst Templates) should their foes split up. The Toughness of these smaller swarms is lowered by -2 (to 5 each).\nSwarm: Parry +2; Because the swarm is composed of scores, hundreds, or thousands of creatures, cutting and piercing weapons do no real damage. Area-effect weapons work normally, and a character can stomp to inflict his damage in Strength each round. Swarms are usually foiled by jumping in water (unless they are aquatic pests, such as piranha).\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Sometimes the most deadly foes come in the smallest packages. The swarm described below can be of most anything- from biting ants to stinging wasps to filthy rats.',
		},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d12","strength":"d8","vigor":"d10"}',
		skills: '{"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '4',
		toughness: '7',
		armor: '0',
		book: 1,
		page: 'p141'
	}
);
	// Troll
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 32,
		name: {
			'en-US' : 'Troll',
		},
		gear: {
			'en-US' : 'Spiked Club (Str+d8)',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor+1: Rubbery hide.\nClaws: Str+d4.\nImproved Sweep: May attack all adjacent foes at no penalty.\nFast Regeneration: Trollsmayattemptanaturalhealing roll every round unless their wounds were caused by fire or flame. This occurs whether the troll is a Wild Card leader or an Extra. If the latter, a downed troll actually returns to action if it heals itself (and is not Shaken-even if it was before being Incapacitated).\nSize+2: Trolls are tall, lanky creatures over 8\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Trolls in myths and legends are horrid, flesh-eating creatures who live in deep woods, beneath bridges, or in hidden mountain caves. In modern games and fiction, trolls are monsters with the ability to regenerate damage and a weakness to fire. These statistics reflect both backgrounds.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '1',
		book: 1,
		page: 'p141'
	}
);
	// Vampire, Ancient
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 33,
		name: {
			'en-US' : 'Vampire, Ancient',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Change Form: As an action, a vampire can change into a wolf or bat with a Smarts roll at -2. Changing back into humanoid form requires a Smarts roll.\nCharm: Vampires can use the puppet power on the opposite sex using their Smarts as their arcane skill. They can cast and maintain the power indefinitely, but may only affect one target at a time.\nChildren of the Night: Ancient vampires have the ability to summon and control wolves or rats. This requires an action and a Smarts roll at -2. If successful, 1d6 wolves or 1d6 swarms of rats (see Swarm) come from the surrounding wilds in 1d6+2 rounds.\nClaws: Str +d4.\nImproved Frenzy: Vampires may make two attacks per round without penalty.\nInvulnerability: Vampires can only be harmed by their Weaknesses. They may be Shaken by other attacks, but never wounded.\nLevel Headed: Vampires act on the best of two cards.\nMist: Greater vampires have the ability to turn into mist. This requires an action and a Smarts roll at -2.\nSire: Anyone slain by a vampire has a 50% chance of rising as a vampire themselves in 1d4 days.\nUndead: +2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the heart-see below). No wound penalties.\nWeakness (Sunlight): Vampires catch fire if any part of their skin is exposed to direct sunlight. After that they suffer 2d10 damage per round until they are dust. Armor does not protect.\nWeakness (Holy Symbol): A character may keep a vampire at bay by displaying a holy symbol. A vampire who wants to directly attack the victim must beat her in an opposed test of Spirit.\nWeakness (Holy Water): A vampire sprinkled with holy water is Fatigued. If immersed, he combusts as if it were direct sunlight (see above).\nWeakness (Invitation Only): Vampires cannot enter a private dwelling without being invited. They may enter public domains as they please.\nWeakness (Stake Through the Heart): A vampire hit with a called shot to the heart (-4) must make a Vigor roll versus the damage total. If successful, it takes damage normally. If it fails, it disintegrates to dust.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Blood-drinkers of lore are common in many fantasy games. The statistics below are for a vampire somewhat below the legendary Dracula, but far above those bloodsuckers fresh from the grave (detailed next). The abilities listed below are standard-the GM may want to add other Edges as befits the vampire\'s previous lifestyle.',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SWIMMING":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://static.ddmcdn.com/gif/vampire-power-1.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '10',
		armor: '0',
		book: 1,
		page: 'p141'
	}
);
	// Vampire, Young
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 34,
		name: {
			'en-US' : 'Vampire, Young',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Claws: Str +d4.\nFrenzy: Vampires can make two attacks per round with a -2 penalty to each attack.\nLevel Headed: Vampires act on the best of two cards.\nInvulnerability: Vampires can only be harmed by their Weaknesses. They may be Shaken by other attacks, but never wounded.\nSire: Anyone slain by a vampire has a 50% chance of rising as a vampire themselves in 1d4 days.\nUndead: +2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the heart-see below). No wound penalties.\nWeakness (Sunlight): Vampires catch fire if any part of their skin is exposed to direct sunlight. After that they suffer 2d10 damage per round until they are dust. Armor does not protect.\nWeakness (Holy Symbol): A character may keep a vampire at bay by displaying a holy symbol. A vampire who wants to directly attack the victim must beat her in an opposed test of Spirit.\nWeakness (Holy Water): A vampire sprinkled with holy water is Fatigued. If immersed, he combusts as if it were direct sunlight (see above).\nWeakness (Invitation Only): Vampires cannot enter a private dwelling without being invited. They may enter public domains as they please.\nWeakness (Stake Through the Heart): A vampire hit with a called shot to the heart (-4) must make a Vigor roll versus the damage total. If successful, it takes damage normally. If it fails, it disintegrates to dust.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Blood-drinkers of lore are common in many fantasy games. This is a relatively young vampire minion.',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://upload.wikimedia.org/wikipedia/commons/f/f8/VampireE3.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 1,
		page: 'p142'
	}
);
	// Water Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 10,
		name: {
			'en-US' : 'Water Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 12\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Water elementals are immune to all non-magical attacks except fire. A torch or lantern causes them 1d6 damage but is instantly put out if it hits.\nSeep: Water elementals can squeeze through any porous gap as if it were Difficult Ground.\nSlam: Str+d6; nonleathal damage.\nWaterspout: Water spirits can project a torrent of water using the Cone Template. Those in the area may make an Agility roll opposed by the spirit\'s Shooting to avoid it or suffer 2d8 nonlethal damage. This puts out any normal fires.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Water spirits are frothing, man-shaped creatures of water and sea-foam.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SWIMMING":{"value":"d12+2"}}',
		wildcard: 0,
		image: 'http://www.santharia.com/pictures/quellion/quellion_pics/water_elemental.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 1,
		page: 'p137'
	}
);
	// Werewolf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 35,
		name: {
			'en-US' : 'Werewolf',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Claws: Str +d8.\nInfection: Anyone slain by a werewolf has a 50% chance of rising as a werewolf themselves. The character involuntarily transforms every full moon. He gains control of his lycanthropy only after 1d6 years as a werewolf.\nInvulnerability: Werewolves can only be Shaken by weapons that are not silver-not wounded.\nInfravision: Werewolves can see heat and halve penalties for bad lighting when attacking living targets.\nWeakness: Werewolves suffer normal damage from silver weapons.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'When a full moon emerges, humans infected with lycanthropy lose control and become snarling creatures bent on murder. Some embrace their cursed state and revel in the destruction they cause.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d12+2"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d12"},"SKILL_SWIMMING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"},"SKILL_TRACKING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '9',
		toughness: '7',
		armor: '0',
		book: 1,
		page: 'p142'
	}
);
	// Zombie
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 36,
		name: {
			'en-US' : 'Zombie',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Claws: Str.\nFearless: Zombies are immune to Fear and Intimidation.\nUndead: +2 Toughness; +2 to recover from being Shaken; called shots do no extra damage (except to the head).\nWeakness (Head):: Shots to a zombie\'s head are +2 damage.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These walking dead are typical groaning fiends looking for fresh meat.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.foodbeast.com.s3.amazonaws.com/content/wp-content/uploads/2013/02/zombies-620x412.jpeg',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 1,
		page: 'p142'
	}
);




/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsExtrasDatabase) == "undefined")
		var savageWorldsExtrasDatabase = Array();

	if(typeof(savageWorldsExtrasBooksList) == "undefined")
		var savageWorldsExtrasBooksList = Array();

	var currentBook = get_book_by_id(2);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// Air Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 79,
		name: {
			'en-US' : 'Air Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nEthereal: Air Elementals can maneuver through any non-solid surface. They can seep through the cracks in doors, bubble through water, and rush through sails.\nFlight: Air Elementals fly at a rate of 6" with a Climb of 3. They may not run.\nInvulnerability: Immune to all non-magical attacks except fire.\nPush: The air elemental can use an action to push a single adjacent target 1d6" directly away with a concentrated blast of air. The victim makes a Strength roll, with each success and raise reducing the amount moved by 1" (to a minimum of 0).\nWind Blast: Air Elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d6 points of nonlethal damage.\nWhirlwind: As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at -2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nAir elementals manifest as sentient whirlwinds.\n',
		},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p115-p116'
	}
);
	// Arachnaurs
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 37,
		name: {
			'en-US' : 'Arachnaurs',
		},
		gear: {
			'en-US' : 'Leather armor (+1), long sword (Str+d8)',
		},
		treasure: {
			'en-US' : 'Meager per 3 arachnaurs',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4.\nPoison (-2): The bite of an arachnaur causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds.\nSize +1: Arachnaurs measure 7\' in length.\nWebbing: Arachnaurs can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at -4.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Arachnaurs are a mix of human and spider in the same way centaurs are part human, part horse. They live in dense woodlands, spinning webs to catch unwary intruders. Despite being a sentient race, they have no qualms about eating the flesh of other sentients.',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d12"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p100'
	}
);
	// Archmage
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 124,
		name: {
			'en-US' : 'Archmage',
			'pt-BR' : 'br-Archmage',
		},
		gear: {
			'en-US' : 'Various, but at least three magic items',
			'pt-BR' : 'br-Gear',
		},
		treasure: {
			'en-US' : 'Worthwhile',
			'pt-BR' : 'br-Treasure',
		},
		abilities: {
			'en-US' : 'Spells: Archmages have 40 Power Points and typically know armor, blast, bolt, detect/ conceal arcana, dispel, fly, light, puppet, and teleport.',
			'pt-BR' : 'br-Abi',
		},
		tags: {
			'en-US' : 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,mage,',
			'pt-BR' : 'br-Tags',
		},
		edges: {
			'en-US' : 'Arcane Background (Magic), Connections, Improved Rapid Recharge, New Power, Power Points, Wizard',
			'pt-BR' : 'br-Edges',
		},
		hindrances: {
			'en-US' : 'Varies',
			'pt-BR' : 'br-Hind',
		},
		blurb: {
			'en-US' : 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.',
			'pt-BR' : 'br-Blurb',
		},
		attributes: '{"agility":"d6","smarts":"d12","spirit":"d10","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12+2"},"SKILL_STEALTH":{"value":"d6"},"SKILL_KNOWLEDGE0":{"special":{"en-US":"Arcana","pt-BR":"br-Arcana Word"},"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// Assassin
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 38,
		name: {
			'en-US' : 'Assassin',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Poison: The quickest way to kill someone is with poison. A typical poison requires a Vigor roll at -2 or take an automatic wound.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Alertness, First Strike, Thief',
		},
		hindrances: {
			'en-US' : 'Varies',
		},
		blurb: {
			'en-US' : 'Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STREETWISE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p100-p101'
	}
);
	// Assassin, Master
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 39,
		name: {
			'en-US' : 'Assassin, Master',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Poison: Master assassins use more deadly venoms in their trade. Victims must make a Vigor roll at -2 or die in 2d6 rounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Alertness, Block, First Strike, Marksman, Level Headed, Quick Draw, Thief',
		},
		hindrances: {
			'en-US' : 'Varies',
		},
		blurb: {
			'en-US' : 'Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.',
		},
		attributes: '{"agility":"d12","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d12"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p101'
	}
);
	// Bandit
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 40,
		name: {
			'en-US' : 'Bandit',
		},
		gear: {
			'en-US' : 'Leather armor (+1), various weapons',
		},
		treasure: {
			'en-US' : 'Meager per 5 bandits',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : 'Greedy, Mean',
		},
		blurb: {
			'en-US' : 'Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/images/315512/akiyoko.jpg',
		charisma: '-2',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p101'
	}
);
	// Bandit Chief
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 41,
		name: {
			'en-US' : 'Bandit Chief',
		},
		gear: {
			'en-US' : 'Chain mail (+2), various weapons',
		},
		treasure: {
			'en-US' : 'Worthwhile',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Block, Combat Reflexes, Command',
		},
		hindrances: {
			'en-US' : 'Greedy, Mean',
		},
		blurb: {
			'en-US' : 'Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://cdn.obsidianportal.com/images/315512/akiyoko.jpg',
		charisma: '-2',
		pace: '6',
		parry: '8',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p102'
	}
);
	// Bargest
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 43,
		name: {
			'en-US' : 'Bargest',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Bite: Str+d6.\nCurse: The first time the characters see an individual bargest, they must make a Spirit roll at -2 or suffer a curse. Those who fail lose all their bennies and cannot earn any more for the remainder of the session. If a character has no bennies left when he sees the bargest, he suffers a -2 penalty to all trait rolls for the rest of the session instead.\nGo fot the Throat: Bargests instinctively go for an opponent\'s soft spots. With a raise on its attack roll, it hits the target\'s most weakly-armored location.\nFleet-Footed: Bargests roll a d10 instead of d6 when running.\nSize +1: Bargests average 7\' in length and stand as much as 4\' high.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Bargests are huge, black dogs. It is said that anyone who sees a bargest is destined to die soon.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://vampirewarzone.yolasite.com/resources/BARGH.jpg',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p102-103'
	}
);
	// Basilisk
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 42,
		name: {
			'en-US' : 'Basilisk',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile around lair',
		},
		abilities: {
			'en-US' : 'Death Gaze: Victims of the basilisk do not have to meet its gaze to be affected by its deadly power. As an action, the basilisk can stare at any creature it can see. Opponents must make a Vigor roll opposed by the basilisk\'s Spirit or suffer an automatic wound.\nPoison Blood: A basilisk\'s blood is highly toxic. When it receives a wound, every adjacent creature must make an Agility roll to avoid the deadly spray. Those who fail take a wound.\nSize -2: Basilisks measure only 12" in length.\nSmall: Opponents must subtract -2 from attack rolls against the basilisk due to its small size.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Called the king of serpents because of its head crest, the gaze of the basilisk can instantly kill. Even its blood is deadly to the touch. The cockatrice is a form of basilisk, but lacks the poisonous blood.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d12+2","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.gods-and-monsters.com/images/mythical-creatures-basilisk.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p102'
	}
);
	// Bee, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 44,
		name: {
			'en-US' : 'Bee, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Flight: Giant bees have a Flying Pace of 6" and Climb of 3".\nPoison: Any creature Shaken or wounded by a sting attack must make a Vigor roll or take a wound.\nSize -1: Giant bees are 3\' long.\nSting: Str+d4\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant bees are considerably larger than regular bees but fortunately do not form large swarms.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://farm7.staticflickr.com/6120/6263370588_7162b81b4a_z.jpg',
		charisma: '0',
		pace: '3',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// Bird of Prey
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 45,
		name: {
			'en-US' : 'Bird of Prey',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Blind: When attacking large prey (such as characters), birds of prey go for the eyes. If the bird scores a raise on its Fighting roll, it has hit the character\'s face. The character must make an Agility roll. On a failure, he suffers the One Eye Hindrance until his wounds heal. A roll of 1, regardless of the Wild Die, he suffers the Blind Hindrance instead.\nClaws: Str+d6\nFlying: Flying Pace 8".\nSize: Birds of prey measure up to 2\' in height.\nSmall: Attackers suffer a -2 penalty to attack rolls because of the beast\'s size.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Birds of prey may not be big, but their talons can rip through flesh with ease. The bird of prey could be used for eagles, hawks, and any hunting birds.',
		},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d12+4"}}',
		wildcard: 0,
		image: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/red-tailed-hawk_681_600x450.jpg',
		charisma: '0',
		pace: '-',
		parry: '5',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// Black Knight
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 61,
		name: {
			'en-US' : 'Black Knight',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Black plate armor and a closed helm.\nBalefire Weapon: Great sword (Str+d10) and lance (Str+d10), if mounted. Anyone struck by a weapon, whether injured or not, has a chance of catching fire.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nElite Soldiers: Black knights have the following Combat Edges: Combat Reflexes, Improved Block, Improved Frenzy, Improved Sweep, and Level Headed.\nSize +1: Black knights stand over 7\' tall.\nSummon Reinforcements: Once per day a black knight can summon forth 1d6 demonic soldiers per success and raise on a Spirit roll. The minions appear within 6" of the knight.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Clad in jet-black plate armor and armed with weapons swathed in balefire, black knights are the elite troops of the demon lords. Beneath their armor is a mummified corpse with burning green eyes.\nThey most often serve as unit commanders in demonic armies, but can sometimes be found as bodyguards for powerful, evil wizards and priests. Many ride nightmares.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Battle"}},"SKILL_RIDING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.pixel77.com/wp-content/uploads/2010/03/dark_knight_by_zeo_x.jpg',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p109'
	}
);
	// Boar
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 46,
		name: {
			'en-US' : 'Boar',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Berserk: When a boar is Shaken, it goes berserk. It gains +2 to all Fighting and Strength rolls and its Toughness, but Parry is reduced by 2.\nGore: If a boar can charge at least 6" before attacking, it adds +4 to damage.\nTusks: Str+d4\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Wild boars are hunted for their rich meat. They are tenacious fighters, especially when wounded.',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.pennmac.com/blog/wp-content/uploads/2011/12/wild-boar-festival.jpeg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// Caveman Chieftan
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 52,
		name: {
			'en-US' : 'Caveman Chieftan',
		},
		gear: {
			'en-US' : 'Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Brawny, Combat Reflexes, Sweep',
		},
		hindrances: {
			'en-US' : 'All Thumbs, Mean',
		},
		blurb: {
			'en-US' : '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes-the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.\nCave men communities are often lead by a chieftain. Typically, he is the largest and strongest individual in the tribe.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '7/8',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p106'
	}
);
	// Caveman Shaman
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 53,
		name: {
			'en-US' : 'Caveman Shaman',
		},
		gear: {
			'en-US' : 'Flint spear (Str+d6; Parry +1; Reach +1)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Powers: Cave men shamans have 15 Power Points and know the following powers: bolt, boost/lower trait, fear, and telekinesis.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : 'All Thumbs, Mean',
		},
		blurb: {
			'en-US' : '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes-the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.\nMost cave man tribes have at least one shaman in their number. He communes with the spirits and foretells the omens.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p106-p107'
	}
);
	// Caveman Warrior
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 51,
		name: {
			'en-US' : 'Caveman Warrior',
		},
		gear: {
			'en-US' : 'Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Brave, Combat Reflexes',
		},
		hindrances: {
			'en-US' : 'All Thumbs, Mean',
		},
		blurb: {
			'en-US' : '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes-the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '6/7',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p106'
	}
);
	// Centaur
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 54,
		name: {
			'en-US' : 'Centaur',
		},
		gear: {
			'en-US' : 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
		},
		treasure: {
			'en-US' : 'Meager per 3 centaurs',
		},
		abilities: {
			'en-US' : 'Fleet Footed: Centaurs roll a d8 when running, instead of a d6.\nHooves: Str.\nSize +2: Centaurs are the same size as riding horses.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Centaurs have the upper body of a human and the lower body of a horse. In some settings they are reclusive philosophers. In others, they are nomads, wandering the plains and forests in herds.',
		},
		attributes: '{"agility":"d6","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SURVIVAL":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://media1.shmoop.com/images/mythology/characters/centaurs/chiron-centaur-achilles.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '9',
		armor: '1',
		book: 2,
		page: 'p107'
	}
);
	// Centipede, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 55,
		name: {
			'en-US' : 'Centipede, Giant',
		},
		gear: {
			'en-US' : 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Armor +3: Thick chitinous armor.\nBite: Str+d8, AP 4.\nLarge: Attackers add +2 when attacking a giant centipede due to their size.\nPoison: Victims must make a Vigor roll at -2 or suffer an automatic wound.\nSize +4: Giant centipedes grow up to 24\' long.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Measuring up to eight yards in length and covered in black chitinous armor, giant centipedes are predominantly found underground or in tropical jungles. Their powerful mandibles can pierce most armor and deliver a lethal poison.',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '13',
		armor: '0',
		book: 2,
		page: 'p107'
	}
);
	// Changeling
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 62,
		name: {
			'en-US' : 'Changeling',
		},
		gear: {
			'en-US' : 'As last victim',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Change Form: A changeling can assume the form of the last person it has killed. This requires an action and a Smarts roll at -2. Changing back to their natural form requires a Smarts roll. Changelings only assume the physical form-clothing and equipment must be taken from the corpse.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear -2: Anyone who sees a changeling in its natural form must make a Fear check at -2.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'In their natural form, changelings resemble skinless humans devoid of any distinguishing features, save for their gruesome appearance. Changelings have the ability to assume the exact form of their victims, taking on their mannerisms and retaining their memories.\nRegardless of the form they assume, they keep their own attributes. Thus, a changeling who assumes the form of a human with a d10 Strength may look physically impressive but lacks the muscle power of the original. However, a changeling absorbs its victim\'s memories. It gains all its victim\'s skills at one die type lower (minimum d4) unless its own skills are higher-in which case it retains its own levels.\nChangelings are used as infiltrators and assassins.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p109'
	}
);
	// Chimera
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 56,
		name: {
			'en-US' : 'Chimera',
		},
		gear: {
			'en-US' : 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Bite/Claw: Str+d6.\nFiery Breath: Chimeras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A chimera may not attack with its claws or bite in the same round it breathes fire.\nImproved Frenzy: If a chimera does not use its Fiery Breath Ability, it may make an additional Fighting attack with no penalty.\nSize +2: Chimera weigh over 500 pounds.\nTwo Fisted: A chimera may attack with its claws and bite in the same round with no multi-action penalty.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'A chimera has the head of a lion, the body of a goat, and the tail of a dragon, complete with a dragon\'s head at the tip. The creature\'s leonine head can breathe fire. A few chimera can also breathe fire from their dragon-headed tail.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://img2.wikia.nocookie.net/__cb20120615060217/dragonsdogma/images/0/06/Chimera01.png',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p107'
	}
);
	// Citizen
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 57,
		name: {
			'en-US' : 'Citizen',
		},
		gear: {
			'en-US' : 'Knife (Str+d4), improvised weapons (Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager for every 5 citizens, Worthwhile for crafters, merchants, and the like',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'farmer,crafter,blacksmith,normal,dude,guy,waitress,bartender,average,joe,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : '"Citizens" covers everything from farmers to crafters.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Trade"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// Collector
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 63,
		name: {
			'en-US' : 'Collector',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Claws: Str+d6. The claws of a collector ignore all mundane and magical Armor.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear -2: Collectors exude an aura of terror. Anyone seeing one must make a Fear roll at -2.\nImproved Arcane Resistance: +4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers.\nSingle Minded: Collectors are not easily swayed from their goal. They receive a +2 bonus to resist Tests of Will.\nSize +1: These cowled demons stand over 7\' tall.\nSoul Drain: The uncowled stare of a collector can literally rip the soul from a living being. Fortunately, they usually reserve this fate for their quarry. To use this Ability, the collector must grapple its foe, at which point it removes its cowl and forces its prey to stare into its demonic eyes. The victim must make an opposed Spirit roll or die instantly.\nUnnatural Senses: A collector can detect arcana as if it were part of its normal vision. It also ignores all pentalties for bad lighting, including complete darkness\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mortals sometimes make deals with powerful demon lords in the hope of accruing power-sometimes they try to renege on the deal. When this happens, the demon lords despatch a demon whose task it is to drain souls and return them to Hell. Collectors are sometimes used as common assassins, but they are at best halfhearted in this role, finding it beneath them.\nAlthough powerful, they are not interested in wanton destruction-all that matters to them is their quarry. Of course, any creature foolish enough to stand in its way is slaughtered without mercy.\nCollectors always wear black, heavy cowls. They reveal their face only to those they are hunting, for it is said that to gaze on one is to lose one\'s soul.\nBeneath their cowls, collectors resemble bipedal vultures with rotting flesh. Their eyes are empty hollows, in which a vortex of balefire swirls.\n',
		},
		attributes: '{"agility":"d10","smarts":"d8","spirit":"d12","strength":"d12","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d12"},"SKILL_TRACKING":{"value":"d12+2"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p110'
	}
);
	// Common Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 89,
		name: {
			'en-US' : 'Common Giant',
		},
		gear: {
			'en-US' : 'Skins or furs (+1), Large maul or tree trunk (Str+d10, carried in one hand), thrown rock (Range: 6/12/24, Damage: 3d6)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Clueless: Giants receive a -2 penalty to Common Knowledge rolls.\nImproved Sweep: Giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against giants due to their size.\nSize +5: Giants are over 20\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giants come in several forms, but all share two common features-they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nDepending on where they are found, these hulking brutes are known as forest giants, hill giants, mountain giants, or simply as giants. There are slight differences between the breeds, but not enough to separate them.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+5","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '13',
		armor: '1',
		book: 2,
		page: 'p120'
	}
);
	// Common Mercenary
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 130,
		name: {
			'en-US' : 'Common Mercenary',
		},
		gear: {
			'en-US' : 'Leather armor (+1), various weapons',
		},
		treasure: {
			'en-US' : 'Meager per 5 soldiers',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '-',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p134'
	}
);
	// Common Mercenary
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 131,
		name: {
			'en-US' : 'Common Mercenary',
		},
		gear: {
			'en-US' : 'Chain mail (+2), open helm (+3), various weapons',
		},
		treasure: {
			'en-US' : 'Meager per 3 soldiers',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '-',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.\nHardened by battle, these tough combatants charge more for their services. As with common mercenaries, their reputation and weapons vary considerably.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p135'
	}
);
	// Corpse Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 97,
		name: {
			'en-US' : 'Corpse Golem',
		},
		gear: {
			'en-US' : 'Typically a long sword (Str+d8)',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nArmor +1: Hard skin and muscle.\nBerserk: Corpse golems have the Berserk Edge.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFear: Characters seeing a corpse golem must make a Fear check. \nFearless: Golems are immune to Fear and Intimidation.\nSlow: Corpse golems have a Pace of 4 and roll a d4 for their running die.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nThe vilest golems are those crafted from the body parts of corpses. Depending on the creator, the golem may be stitched together from the parts of one species or multiple species. Some corpse golems utilize animal parts.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img4.wikia.nocookie.net/__cb20100814131953/dragonage/images/4/4b/Harvester_golem.png',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p123'
	}
);
	// Corrupt Naga
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 139,
		name: {
			'en-US' : 'Corrupt Naga',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4\nConstrict: A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty.\nHypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nMagic: Corrupt nagas practice arcane magic. They have 30 Power Points and know the following powers: armor, bolt, boost/lower trait, burrow, deflection, detect/ conceal arcana, dispel, fear, invisibility, obscure, quickness, and speak language. They retain this ability in human form.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nShape Change: As an action, a naga can change into female human form with a Smarts roll at -2. Changing back into naga form requires a Smarts roll.\nSize+3: A naga is 15\' long and about a foot in diameter.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha\'s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.\nIn a fantasy setting, there is no reason why a naga cannot follow the gods of evil. Unlike guardian naga, who are forbidden from joining the priesthood and learning magic, corrupt naga are powerful spellcasters. Some even go so far as to form their own cults, with the naga as living gods.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d4"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// Court Jester
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 144,
		name: {
			'en-US' : 'Court Jester',
		},
		gear: {
			'en-US' : 'Stick (Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Knowledgeable: Jesters are expected to be well versed in many topics. They get +2 to all Common Knowledge rolls.\n',
		},
		tags: {
			'en-US' : 'noble',
		},
		edges: {
			'en-US' : 'Acrobat, Ambidextrous, Strong Willed',
		},
		hindrances: {
			'en-US' : 'Various, but often some sort of physical affliction',
		},
		blurb: {
			'en-US' : 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nDespite often being dwarves or hunchbacks (or both), jesters are more than just comical entertainment for the nobility. They have their lord\'s ear, are privy to his most secret affairs, can get away with insulting powerful guests, and conceal great wisdom in their seemingly nonsensical riddles and japes.\n',
		},
		attributes: '{"agility":"d10","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// Courtier
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 143,
		name: {
			'en-US' : 'Courtier',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'noble',
		},
		edges: {
			'en-US' : 'Charismatic',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nCourtiers are more than just servants- they are advisors and often hold positions of importance within the court. Unless the characters know a noble personally, most dealings are conducted through a trusted courtier, typically a seneschal.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_RIDING":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p139'
	}
);
	// Crab, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 58,
		name: {
			'en-US' : 'Crab, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Armor +3: Giant crabs have thick shells.\nClaws: Str+d6.\nSize +1: These creatures weigh over 400 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant crabs live on beaches, hiding under the sand ready to leap out at passing prey.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p108'
	}
);
	// Crocotta
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 59,
		name: {
			'en-US' : 'Crocotta',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair.',
		},
		abilities: {
			'en-US' : 'Bite: Str+d10, AP 10\nFleet Footed: The crocotta rolls a d10 when running instead of a d6.\nSize -1: A crocotta is the same size as a dog.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The crocotta looks like a wolf except for its jaws, which are as long as a crocodile\'s. Its jaws are powerful enough to bite through almost any material.',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// Cyclops
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 60,
		name: {
			'en-US' : 'Cyclops',
		},
		gear: {
			'en-US' : 'Big club (Str+d10)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Lightning Bolts: A cyclops may throw a lightning bolt as an action. Range: 5/10/20; Damage: 3d6; Small Burst Template.\nOne Eye: -2 to all trait rolls involving depth perception, such as Throwing.\nSize +2: Cyclops stand over 8\' tall.\n',
		},
		tags: {
			'en-US' : 'giant,giants,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Cyclopses are a race of one-eyed giants. Despite raising herds of goats, they have a taste for human flesh. In some legends, they crafted lightning bolts for the gods.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12+3","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.cartuneland.com/cyclops1.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// Demonic Soldier
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 64,
		name: {
			'en-US' : 'Demonic Soldier',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Berserk: Demonic soldiers can go berserk at will.\nBite/Claws: Str+d6.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nSize -1: Demonic soldiers are rarely larger than 4\' tall.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Making up the bulk of the legions of Hell are demonic soldiers, small, feral creatures with sharp teeth and claws and only a limited capacity for reasoning. They attack with berserk fury, ripping their prey to shreds with howls of glee. Demon lords use them in "human-wave" tactics and rarely bother to provide them with armor or weapons.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p110-111'
	}
);
	// Dire Wolf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 68,
		name: {
			'en-US' : 'Dire Wolf',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Bite: Str+d6\nGo for the Throat: Wolves instinctively go for an opponent\'s soft spots. With a raise on its attack roll, it hits the target\'s most weakly-armored location.\nFleet-Footed: Dire wolves roll d10s instead of d6s when running.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dire wolves are very large and feral wolves often used by orcs as attack dogs. They may also be found roaming in packs in the deepest, darkest woods.',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p112'
	}
);
	// Dissolver
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 69,
		name: {
			'en-US' : 'Dissolver',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager.',
		},
		abilities: {
			'en-US' : 'Acid: Str+d6\nCamouflage: When lying still, dissolvers gain +4 to Stealth rolls.\nEnvelope: If a dissolver succeeds in a Fighting roll it has enveloped part of its target. Each round the victim remains enveloped, he suffers 2d6 damage. All equipment permanently loses 1 point of Toughness (Protection for armor) per round until it reaches zero, at which point it is destroyed. Trying to escape from a grapple requires a Strength roll at -6. A dissolver may only envelope one foe at a time, regardless of its size.\nPseudopod: A dissolver can extend a single pseudopod out to 1". Damage 2d6.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These vile terrors are black, amorphous blobs whose secretions are highly acidic. Their favorite tactic is to grapple their prey, subjecting them to constant attack.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p112'
	}
);
	// Dragon
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 70,
		name: {
			'en-US' : 'Dragon',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Three Treasure Troves in lair',
		},
		abilities: {
			'en-US' : 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear-2: Anyone who sees a mighty dragon must make a Fear check at -2.\nFiery Breath: Dragons breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A dragon may not attack with its claws or bite in the round it breathes fire.\nFlight: Dragons have a Flying Pace of 24" and Climb 0.\nHardy: The creature does not suffer a wound from being Shaken twice.\nHuge: Attackers add +4 to their Fighting or Shooting rolls when attacking a dragon due to its massive size.\nImproved Frenzy: If a dragon does not use its Fiery Breath ability, it may make two Fighting attacks with no penalty.\nLevel Headed: Act on best of two cards.\nSize +8: Dragons are massive creatures. This version is over 40\' long from nose to tail, and weighs well over 30,000 pounds.\nTail Lash: The dragon can sweep all opponents in its rear facing in a 3" long by 6" wide square. This is a standard Fighting attack, and damage is equal to the dragon\'s Strength -2.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'This dragon is the standard fire-breathing variety common to European mythology. If you want to use different types of dragons in your game, the Variant Dragons sidebar (p113) contains some ideas on how to make them different.',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d12+9","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 1,
		image: 'http://www.gamefront.com/wp-content/uploads/2008/12/red-dragon.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '20',
		armor: '4',
		book: 2,
		page: 'p112-p113'
	}
);
	// Dragon Man Soldier
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 71,
		name: {
			'en-US' : 'Dragon Man Soldier',
		},
		gear: {
			'en-US' : 'Scimitar (Str+d8)',
		},
		treasure: {
			'en-US' : 'Meager.',
		},
		abilities: {
			'en-US' : 'Armor+2: Scaly hide.\nBite/Claws: Str+d4.\nFiery Breath: Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only.\nFlight: Dragon men have leathery wings with a Flying Pace of 8" and a Climb of 4"\n',
		},
		tags: {
			'en-US' : 'dragon,dragon men,',
		},
		edges: {
			'en-US' : 'Brave, Combat Reflexes, Frenzy',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes-warriors and sorcerers.\nThey are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons .\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://suptg.thisisnotatrueending.com/archive/10417239/images/1276223355554.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p114'
	}
);
	// Dragon Man Sorcerer
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 72,
		name: {
			'en-US' : 'Dragon Man Sorcerer',
		},
		gear: {
			'en-US' : 'Scimitar (Str+d8)',
		},
		treasure: {
			'en-US' : 'Meager.',
		},
		abilities: {
			'en-US' : 'Armor+2: Scaly hide.\nBite/Claws: Str+d4.\nFiery Breath: Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only.\nFlight: Dragon men have leathery wings with a Flying Pace of 8" and a Climb of 4"\nPowers: Dragon men sorcerers have 30 Power Points and know the following powers: armor, blast, deflection, detect/conceal arcana, dispel, fear, healing, obscure, shape change, smite, and speak language.\n',
		},
		tags: {
			'en-US' : 'dragon,dragon men,',
		},
		edges: {
			'en-US' : 'Combat Reflexes, Frenzy',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes-warriors and sorcerers.\nThey are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://i42.tinypic.com/2qjayk5.png',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p114'
	}
);
	// Drake
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 73,
		name: {
			'en-US' : 'Drake',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear: Drakes are frightening creatures to behold.\nFiery Breath: Drakes breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire (see Fire). A drake may not attack with its claws or bite in the round it breathes fire.\nLarge: Attackers add +2 to their attack rolls when attacking a drake due to its large size.\nSize +5: Drakes are over 20\' long from snout to tail, and weigh in at over 3000 pounds.\nTail Lash: A drake can sweep all opponents in its rear facing in a 3" long by 6" wide rectangle. This is a standard Fighting attack, and damage is equal to the creature\'s Strength -2.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Drakes are non-flying dragons with animal intelligence (rather than the more human-like sentience of true dragons). They are much more aggressive in direct combat than their distant cousins, however.',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d10","strength":"d12+6","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://img2.wikia.nocookie.net/__cb20080714125534/finalfantasy/images/5/52/Greater_Drake_ffx-2.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '17',
		armor: '4',
		book: 2,
		page: 'p114'
	}
);
	// Dryad
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 74,
		name: {
			'en-US' : 'Dryad',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Animate Tree: A dryad may animate her tree as a war tree (see War Tree). This costs 20 Power Points and has a fixed duration of one hour.\nAttractive: Dryads resemble attractive human females, but often have a green or brown tint to their skin.\nMagic: Dryads have 30 Power Points and know the following powers: armor (bark), barrier (wall of thorns), beast friend, deflection (tree branches get in the way), entangle, healing, shape change, and stun.\nTree Bond: Dryads share their soul with a particular tree. They must remain within 36" of the tree or their magic does not work. If the tree dies or becomes unhealthy, so does the dryad (and vice versa).\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dryads are nature spirits, specifically those of the woodlands. Shy by nature, they prefer to watch intruders, only making their presence felt if the need arises. They get along well with elves and other woodland folk of good character.\nThough they are usually reluctant to deal with outsiders dryads, have been known to administer aid to kind souls in great need.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p115'
	}
);
	// Dwarf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 75,
		name: {
			'en-US' : 'Dwarf',
		},
		gear: {
			'en-US' : 'Chain mail (+2), open helm (+3), battle axe (Str+d8), medium shield (+1 Parry), throwing axes (Range: 3/6/12, Damage: Str+d6)',
		},
		treasure: {
			'en-US' : 'Meager.',
		},
		abilities: {
			'en-US' : 'Low Light Vision: Dwarves penalties for Dim and Dark lighting.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dwarves are common in mountains, where they live in vast underground cities. The statistics presented here are for a typical dwarf warrior.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Stonecraft"}},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '7',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p115'
	}
);
	// Earth Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 76,
		name: {
			'en-US' : 'Earth Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +4: Rocky hide.\nBash: Str+d6\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nEarth elementals manifest as five-foot tall, vaguely man-shaped collections of earth and stone. Though amazingly strong, they are also quite slow and ponderous.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p116'
	}
);
	// Elephant, War
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 80,
		name: {
			'en-US' : 'Elephant, War',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick Hide\nHardy: War elephants do not suffer a wound from being Shaken twice.\nHeadbutt: Str+d6. Heavy Weapon. A war elephant cannot headbutt anything of Size +3 or smaller.\nHuge: Attackers have +4 to attack rolls against these beasts due to their size.\nPlatform: The wooden platform provides Light Cover to anyone riding in it and grants +2 Armor.\nSize +8: War elephants weigh over 20,000 pounds.\nTrample: As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at -2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form.\nTusks: Str+d10. The tusks of a war elephant are fitted with spiked, metal caps.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'War elephants are larger than standard bull elephants and are bred purely for battle. In war, they carry a wooden platform on their back, housing the steersman and three soldiers.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+8","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p117'
	}
);
	// Elf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 81,
		name: {
			'en-US' : 'Elf',
		},
		gear: {
			'en-US' : 'Leather armor (+1), long sword (Str+d8), long bow (Range: 15/30/60, Damage: 2d6)',
		},
		treasure: {
			'en-US' : 'Meager per 3 warriors.',
		},
		abilities: {
			'en-US' : 'Low Light Vision: Elves ignore penalties for Dim and Dark lighting.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Combat Reflexes, Marksman, Woodsman',
		},
		hindrances: {
			'en-US' : 'All Thumbs, Cautious',
		},
		blurb: {
			'en-US' : 'Elves commonly inhabit forests, living in tune with nature. The statistics presented here are for a typical elf warrior.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p117'
	}
);
	// Fire Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 77,
		name: {
			'en-US' : 'Fire Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Fire Elementals are immune to all non-magical attacks, but suffer 1d6 damage when doused in at least a gallon of water, +2 per additional gallon.\nFiery Touch: Str+d6; chance of catching fire.\nFlame Strike: Fire elementals can project a searing blast of flame using the Cone Template. Characters within the cone must beat the spirit\'s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nFire elementals appear as man-shaped flame.\n',
		},
		attributes: '{"agility":"d12+1","smarts":"d8","spirit":"d8","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p116'
	}
);
	// Fire Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 90,
		name: {
			'en-US' : 'Fire Giant',
		},
		gear: {
			'en-US' : 'Chain mail (+2), large great axe (Str+d12, carried in one hand), heated thrown rock (Range: 5/10/20, Damage: 3d6+2)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Fire Aura: Fire giants radiate fearsome heat. At the end of movement, all adjacent foes suffer 2d6 damage.\nImmunity (Heat): Fire giants take no damage from fire, including arcane powers with a fire or heat trapping.\nImproved Sweep: Fire giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against fire giants due to their size.\nSize +5: Fire giants are over 20\' tall.\nWeakness (Cold): Magical cold and ice attacks cause +4 damage. Nonmagical cold has no additional effect.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giants come in several forms, but all share two common features-they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nFire giants prefer to dwell in hot places, such as near volcanoes or in the middle of scorching-hot deserts. Their ruddy complexion and flame-red hair makes them easy to identify.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dun200_firegiant.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '14',
		armor: '2',
		book: 2,
		page: 'p120'
	}
);
	// Fire Salamander
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 82,
		name: {
			'en-US' : 'Fire Salamander',
		},
		gear: {
			'en-US' : 'Two flaming scimitars (Str+d10)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Fiery Body: Fire attacks cause no damage. Nonmagical attacks "melt" as they impact the salamander\'s body. The creature has 4 points of armor against such attacks and the attacker must roll a d6. On a 5-6, wooden weapons catch fire. On a 6, metal weapons melt slightly and cause 1 less die of damage until repaired by a blacksmith. Anyone who attacks a fire salamander with their bare hands and hits suffers an automatic 2d6 damage. Salamanders often grapple their foes to scorch them in this manner.\nWeakness (Water): Magical water-based attacks cause +4 damage. Nonmagical water has no additional effect.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These bright orange creatures live in volcanic areas or baking-hot deserts. They can survive in moderate temperatures for several hours before needing to return to their infernal pits.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p117-p118'
	}
);
	// Frost Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 91,
		name: {
			'en-US' : 'Frost Giant',
		},
		gear: {
			'en-US' : 'Thick furs (+1), large maul (Str+d10, carried in one hand), thrown rock (Range: 5/10/20, Damage: 3d6)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Icy Aura: Frost giants radiate deadly cold. At the end of movement, all adjacent foes suffer 2d6 damage.\nImmunity (Cold): Frost giants take no damage from arcane powers with a cold or ice trapping.\nImproved Sweep: Frost giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against frost giants due to their size.\nSize +4: Frost giants are over 15\' tall.\nWeakness (Fire): Magical heat and flame attacks cause +4 damage. Nonmagical heat has no additional effect.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giants come in several forms, but all share two common features-they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nFrost giants live in high mountains, above the snow line, or in the frozen reaches of the world. They build vast stone forts, from which they rule over lesser races, such as orcs and goblins, as veritable gods. Their skin is pale blue, and their hair as white as snow.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://img1.wikia.nocookie.net/__cb20110621041734/forgottenrealms/images/7/74/Frost_giant.png',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '12',
		armor: '1',
		book: 2,
		page: 'p121'
	}
);
	// Frost Mammoth
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 126,
		name: {
			'en-US' : 'Frost Mammoth',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick hide and fur.\nIcy Breath: Frost mammoths breathe an icy blast using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d8. A frost mammoth may not attack with its tusks or trample in the round it breathes fire.\nImmunity (Cold): Mammoths take no damage from cold, including magical attacks.\nLarge: Attackers have +2 to attack rolls against these beasts due to their size\nSize +5: Frost mammoths weigh over 4,000 pounds.\nTrample: Str.\nTusks: Str+d6\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates.\nFrost mammoths resemble small mammoths. Unlike regular mammoths, however, their breath can freeze a man to death.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '14',
		armor: '2',
		book: 2,
		page: 'p133'
	}
);
	// Frost Wolf
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 83,
		name: {
			'en-US' : 'Frost Wolf',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Bite: Str+d6\nChill Bite: The icy bite of a frost wolf can paralyze prey. Anyone Shaken or wounded must make a Vigor roll or be paralyzed for 1d6 rounds.\nFleet Footed: Frost wolves have a d10 running die.\nGo for the Throat: If a frost wolf gets a raise on its attack roll, it strikes its opponent\'s least armored location.\nImmunity (Cold): Frost wolves take no damage from cold.\nSize +1: Frost wolves stand 5\' tall and are over 7\' long.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Frost wolves haunt arctic climes, roaming the tundra in packs. Their thick fur is pure white, allowing them to blend in with the snow and ice.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p118'
	}
);
	// Fury
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 84,
		name: {
			'en-US' : 'Fury',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +1: Hide\nBerserk: Furies can become Berserk at will.\nClaws: Str+d4\nFlight: Furies have a Flying Pace of 6" and a Climb of 3".\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Furies are savage, bestial creatures sent by the gods to punish worshippers for major transgressions. The exact form of a fury varies by deity, but all have sharp claws and wings of some description.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p118'
	}
);
	// Ghost Blade
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 87,
		name: {
			'en-US' : 'Ghost Blade',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Fearless: Stone gargoyles are immune to fear and Intimidation.\nGhost Warrior: The ghostly figure cannot be harmed or dispelled by any means. The sword, however, can be damaged as a regular character. The sword breaks when Incapacitated. Because the ghostly warrior is a figment of the sword\'s memory and not a real being, it cannot be disarmed.\nGreat Sword: Str+d10. Toughness: 12.\nImproved Block: +2 Parry\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Ghost blades take the form of spectral warriors clutching a great sword. The ghostly figure is, in fact, a manifestation of the true creature-the blade.\nGhost blades are created by swords used by great heroes fallen in battle. The memories of the former wielder become burned into the blade, which then creates a ghostly figure to carry it into battle. Ghost blades seek only to kill, not caring if their victims are helpless children or mighty dragons.\nThe attributes are for the ghostly form, which cannot be harmed by any means so long as the sword is intact. Attacks against the sword are conducted as normal.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d10","vigor":"d4"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '10',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p119'
	}
);
	// Ghoul
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 88,
		name: {
			'en-US' : 'Ghoul',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager per 3 ghouls',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4.\nInfravision: Ghouls halve penalties (round down) for bad lighting when attacking living targets.\nKeen Nose: Ghouls get +2 to Notice and Tracking rolls against living targets.\nParalysis: Victims of a ghoul\'s claw attacks must make a Vigor roll at -2 or be paralyzed for 1d6 rounds.\nUndead: +2 Toughness; +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Ghouls are vile scavengers, feasting off carrion and unfortunate victims who cross their path.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://fc06.deviantart.net/fs70/f/2010/276/7/d/ghoul_by_kelsm-d300tgr.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p119-p120'
	}
);
	// Glass Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 98,
		name: {
			'en-US' : 'Glass Golem',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Glass golems are depicted wearing plate armor. Despite being glass, it is magically hardened and acts as metal armor.\nCamouflage: When guarding a temple, glass golems stand motionless in stained glass windows, appearing to be part of the scene. When in this environment, detecting them requires an opposed Notice roll at -4 against their Stealth.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nGlass Shield: Glass golems normally carry magically-hardened glass shields. +1 Parry; +2 Armor to ranged attacks that hit.\nGlass Sword: Str+d10. The edge is razor sharp and never dulls.\nSize +1: Glass golems average 8\' tall.\nWeakness: Glass golems take double damage from blunt weapons, such as clubs and hammers.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nThese unusual constructs are crafted to resemble a stained glass warrior and are most often used as guardians in temples. Unlike other golems, they are almost two- dimensional, being no thicker than a pane of glass.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/1013449.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p123'
	}
);
	// Glide Monkeys
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 93,
		name: {
			'en-US' : 'Glide Monkeys',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager per 5 glide monkeys',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4.\nGliders: These monkeys can glide descending 1" vertically for every 2" moved horizontally.\nHurl: Glide monkeys hurl hard nuts or stones from the high branches of their homes before gliding down to snatch stunned prey. These cause Str+d6 damage if they are above a victim, or Str if the monkey does not have a significant altitude advantage. Range is 5/10/20.\nSize -1: Glide monkeys are the size of small children.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Glide monkeys resemble large baboons with leathery flaps stretching from their wrists to their ankles. They live in the highest treetops, and travel from tree to tree by leaping or gliding, thus avoiding ground- based predators.\n',
		},
		attributes: '{"agility":"d10","smarts":"d8 (A)","spirit":"d8","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p121'
	}
);
	// Goblin
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 94,
		name: {
			'en-US' : 'Goblin',
		},
		gear: {
			'en-US' : 'Short spears (Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager, per 3 goblins',
		},
		abilities: {
			'en-US' : 'Infravision: Goblins halve penalties for dark lighting against living targets (round down)\nSize -1: Goblins stand 3-4\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark "fairy tale" goblins as well as those found alongside orcs in contemporary roleplaying games.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/assets/62147/goblins2.jpg',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p121-p122'
	}
);
	// Goblin Shaman
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 95,
		name: {
			'en-US' : 'Goblin Shaman',
		},
		gear: {
			'en-US' : 'Short spear (Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Infravision: Goblins halve penalties for dark lighting against living targets (round down)\nSize -1: Goblins stand 3-4\' tall.\nSpells: Shamans have 15 Power Points, and typically know bolt, fear, obscure, and smite.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark "fairy tale" goblins as well as those found alongside orcs in contemporary roleplaying games.\nGoblin shamans serve as advisors to goblin lords. Their arcane talents give them a position of respect within the tribe.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://fc01.deviantart.net/fs71/f/2010/107/4/f/wow_goblin_shaman_concept_art_by_nightlybrian212.jpg',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p122'
	}
);
	// Golden Ram
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 96,
		name: {
			'en-US' : 'Golden Ram',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Fleece is Worthwhile, but never any relics',
		},
		abilities: {
			'en-US' : 'Gore: Rams use the charge maneuver to gore their opponents with their long horns. If they can move at least 6" before attacking, they add +4 to their damage total.\nHorns: Str+d6.\nMountain Beast: Golden rams ignore penalties for Difficult Terrain in mountainous regions.\nSize +2: Golden rams weight over 800 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golden ram are large beasts, living in remote mountainous regions. Their fleece is actually made of fine gold threads, which makes them popular with hunters and trappers.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p122'
	}
);
	// Grave Guardian
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 103,
		name: {
			'en-US' : 'Grave Guardian',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None, but they usually guard a Treasure Trove',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nClaws: Str+d6\nFear -2: Anyone seeing a grave guardian must make a Fear roll at -2.\nPowers: Grave guardians are not true spellcasters, but can use the following powers: armor, burrow, detect/conceal arcana, environmental protection, fear, and obscure. They have 15PP.\nRegeneration: Grave Vigor roll every round to heal all damage, except that caused by cold iron weapons.\nUndead: +2 Toughness, +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison.\nWeakness (Cold Iron): Grave guardians cannot Regenerate wounds inflicted by cold iron weapons, but may heal them through natural Healing.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Grave guardians are placed in tombs to watch over the valuables entombed with the deceased. They resemble blackened corpses, with long talons and yellow eyes. Their orders are simple-destroy any creature entering the tomb, and hunt down and retrieve any stolen items.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d12","vigor":"d12"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://gerezon.se/wp-content/uploads/2013/11/spit-tombguardian.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p124-p125'
	}
);
	// Griffin
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 104,
		name: {
			'en-US' : 'Griffin',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Bite/Claws: Str+d6\nFlight: Griffins have a Flying Pace of 12" and a Climb of 6".\nGrapple: If a griffin gets a raise while performing a grapple, it has knocked its foe to the ground and pinned it with its paws. Bite attacks against a pinned foe are made at +2.\nHorse Terror: Griffins\' favorite prey is horse flesh. Horses seeing a griffin must make a Fear check or become Panicked.\nImproved Frenzy: Griffins may make two Fighting attacks each action at no penalty.\nSize +2: Griffins weigh over 500 pounds.\nSwoop: Griffins often swoop on their prey to pin it to the ground. It gains +4 to its attack and damage for this action . Its Parry is reduced by -2 until its next action when performing the maneuver, however.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Griffins have the body of a lion and the head and wings of an eagle. They are fierce predators, swooping down on their foes to pin them. Once their prey is trapped and helpless, they tear them open with their sharp beaks.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img4.wikia.nocookie.net/__cb20120819183320/mythology/images/f/f1/Griffin.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p125'
	}
);
	// Guardian Mummies
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 136,
		name: {
			'en-US' : 'Guardian Mummies',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor versus magic, and +2 to rolls made to resist magical effects.\nFear: Anyone seeing a guardian mummy must make a Fear check.\nFist: Str+d6\nMummy Rot: Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has "mummy rot" and suffers an immediate wound.\nShuffling Gait: Guardian mummies roll a d4 running die.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called\nWeakness (Fire): Mummies take +4 damage from fire.\n',
		},
		tags: {
			'en-US' : 'guardian mummy,mummy,undead',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.\nThe most common type of mummy, these creatures were servants and soldiers placed in tombs to guard them for all eternity.\n',
		},
		attributes: '{"agility":"d4","smarts":"d6","spirit":"d10","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p136'
	}
);
	// Guardian Naga
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 138,
		name: {
			'en-US' : 'Guardian Naga',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4\nConstrict: A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty.\nHypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nShape Change: As an action, a naga can change into female human form with a Smarts roll at -2. Changing back into naga form requires a Smarts roll.\nSize+3: A naga is 15\' long and about a foot in diameter.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha\'s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d4"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p137'
	}
);
	// Hag
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 105,
		name: {
			'en-US' : 'Hag',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Claws: Str+d6\nFear: Anyone seeing a hag must make a Fear check.\nSpells: Hags have 20 Power Points and typically know the following spells: armor (iron skin), boost/lower trait (blessing/curse), fear (hideous visage), obscure (dark cloud), puppet (persuasive words), and quickness (superhuman reflexes).\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These cannibalistic ogres have powerful magical abilities. They are fond of eating children, but are not picky and eat nearly anything made of meat.\n',
		},
		attributes: '{"agility":"d4","smarts":"d10","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d12"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '5',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p125-p126'
	}
);
	// Half-Folk
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 106,
		name: {
			'en-US' : 'Half-Folk',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), sling (Range: 4/8/16, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager per 5 half-folk',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'halfling,halflings,hobbit,hobbits,',
		},
		edges: {
			'en-US' : 'Luck, Marksman',
		},
		hindrances: {
			'en-US' : 'Small',
		},
		blurb: {
			'en-US' : 'Half-folk try to avoid trouble, but sometimes trouble comes to them. The statistics are for a typical militiaman.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p126'
	}
);
	// Harpy
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 107,
		name: {
			'en-US' : 'Harpy',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4\nFlight: Harpies have a Flying Pace of 8" and a Climb of 4"\nPoison -2: Harpies live in unsanitary habitats, and their claws are caked in filth. Any victim wounded or Shaken by a claw attack must make a Vigor roll or the wound becomes infected. Each day, the victim must make a Vigor roll or gain a level of Fatigue. A successful Healing roll, also at -2, cleans out the infection. Fatigue levels are recovered at the rate of one per day once the infection is stopped.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Harpies have the lower body, wings, and claws of a vulture and the head and chest of an ugly woman. In mythology, they were created by the gods, but in your setting they may be a natural species, capable of breeding and forming a rudimentary society.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p126'
	}
);
	// Hellhound
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 108,
		name: {
			'en-US' : 'Hellhound',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Bite: Str+d6\nFear: Anyone who sees a hellhound must make a Fear check.\nFleet Footed: Hellhounds have a d10 running die\nGo for the Throat: If a hellhound gets a raise on its attack roll, it strikes its opponent\'s least armored location.\nImmunity (Fire): Hellhounds take no damage from fire\nTerrible Wounds: The jagged teeth of a hellhound inflict terrible wounds, which do not heal quickly. Healing rolls, including magical and natural healing, are subject to a -2 penalty on top of any wound penalties.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Hellhounds are monstrous dogs, often with black skin which steams from the heat of the beast\'s demonic blood. Their eyes burn with demonic fire and their teeth are oversized, protruding from their jaw at all angles. Certain demons often keep them as pets, though they may also be found in the company of necromancers and other evil wizards.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p126-p127'
	}
);
	// Hippogriff
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 109,
		name: {
			'en-US' : 'Hippogriff',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Bite/Claws: Str+d6\nFlight: Hippogriffs have a Flying Pace of 8" and a Climb of 4".\nImproved Frenzy: Hippogriffs may make two Fighting attacks each action at no penalty.\nSize+3: Hippogriffs are comparable in size to a war horse.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'A hippogriff has the body and hindquarters of a horse and the head, wings, and forelimbs of a giant eagle. They are natural enemies of griffins, but are no less fond of flesh than their rivals.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '11',
		armor: '0',
		book: 2,
		page: 'p127'
	}
);
	// Hobgoblin
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 110,
		name: {
			'en-US' : 'Hobgoblin',
		},
		gear: {
			'en-US' : 'Leather armor (+1), long swords (Str+d8)',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Infravision: Hobgoblins halve penalties for dark lighting against living targets (round down).\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Hobgoblins are large goblins. They can be found in their own communities, as well as lording over their lesser kin.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p127'
	}
);
	// Holy/Unholy Knight
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 118,
		name: {
			'en-US' : 'Holy/Unholy Knight',
		},
		gear: {
			'en-US' : 'Corselet (+3), plates arms and legs (+3), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
		},
		treasure: {
			'en-US' : 'Meager, Worthwhile in castle',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Command, Holy/Unholy Warrior, Noble',
		},
		hindrances: {
			'en-US' : 'Code of Honor, Vow',
		},
		blurb: {
			'en-US' : 'Knights are the fantasy equivalent of tanks-heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.\nReligious knights are champions of faith, acting as the military wing of a religion. Some serve good gods, defending the weak and fighting evil. Others follow dark gods, promoting their evil agendas.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '7',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// Horse, Elven
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 111,
		name: {
			'en-US' : 'Horse, Elven',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Fleet-Footed: Elven horses roll a d12 for their running die. Elven horses do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6.\nRider Empathy: Elves gain +2 to Riding rolls on an elven horse.\nSize +2: Elven horses weigh between 600 and 800 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Elven horses are slightly smaller than riding horses but are considerably faster and can cross broken ground as if it were a smooth road. Elves never sell them and only rarely give them as gifts to non-elves who have done their people a great service.',
		},
		attributes: '{"agility":"d10","smarts":"d10 (A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '4',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p127'
	}
);
	// Hydra
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 112,
		name: {
			'en-US' : 'Hydra',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair.',
		},
		abilities: {
			'en-US' : 'Armor +2: Scaly Hide.\nBite: Str+d6, Reach 1.\nFierty Breath: Some hydras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at -2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. Individual heads may not attack with bite in the round they breathe fire.\nMultiple Heads: Hydras have between four and ten heads. Each head may make a Fighting roll in a round without incurring a multi-action penalty, though no more than four heads may attack a single target, regardless of its size. Every head has 1 wound and is severed if it is Incapacitated. Damage caused to heads does not affect the hydra, though it dies when the last head is severed.\nRegeneration: Each round after a head is severed, the hydra makes a Vigor roll. On a success, any severed heads are replaced by two new ones. Damage caused by fire prevents regeneration, as does cauterizing the wound before a new heads grow. This requires a successful Fighting roll with a torch or other flaming object.\nSize +5: Hydra are large creatures. Most weigh over 10,000 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Hydra are multi-headed beasts, akin to dragons. Some breathe fire, others can grow new heads to replace ones lost in combat, and others are more mundane. The number of heads varies.\nThe stats below include fire breathing and regenerating heads. Whether you choose to use one, both, or none depends on how powerful a hydra you want.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.pantheon.org/areas/gallery/mythology/europe/greek_people/hydra.gif',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '13',
		armor: '2',
		book: 2,
		page: 'p128'
	}
);
	// Imp
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 65,
		name: {
			'en-US' : 'Imp',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nClaws: Str+d4.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nPowers: Imps have 20 Power Points and know the following powers: bolt, detect/ conceal arcana, entangle, invisibility, obscure, and shape change.\nLending: An imp can share its Power Points with its master. It cannot be forced to share its power.\nSize -1: Imps are the size of small children.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Imps are small, winged demons. They are often sent to the material world to serve as familiars to honored wizards. Although they aid their new masters, they also report back to their demonic overlords and are thus useful spies.\n',
		},
		attributes: '{"agility":"d10","smarts":"d10","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p111'
	}
);
	// Jabber Birds
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 113,
		name: {
			'en-US' : 'Jabber Birds',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, per 5 birds',
		},
		abilities: {
			'en-US' : 'Flight: Pace 6", Climb 4"\nJabber: The jabbering of these birds fills a Medium Burst Template centered on the bird. Characters within the Template must make as Spirit roll, -1 for each additional Template they are caught in, or become disoriented. Disoriented characters suffer a -2 penalty to trait rolls and Pace so long as they remain within at least one Template and for 3 rounds after they leave.\nSize -2: Jabber birds are 1\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Jabber birds are cowardly forest-dwelling scavengers. Their high-pitched jabbering, for which they are named, serves two purposes-it disorients potential prey and alerts predators that there is an easy meal waiting. Once the predators have killed the prey and taken their fill, the jabber birds feed on the remains.\nJabber birds hunt in small flocks, surrounding prey and preventing it from escaping before the nearest predator arrives.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6 (A)","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '4',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p128-p129'
	}
);
	// Jinni
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 114,
		name: {
			'en-US' : 'Jinni',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None, but can often bestow wealth upon their patrons',
		},
		abilities: {
			'en-US' : 'Immunity (Fire): Jinn from fire or heat, being born of such material.\nInvisibility: Jinn can become completely invisible with a successful Smarts roll and can remain that way indefinitely.\nMagic: In addition to their other abilities, jinn have 20 Power Points and know the following powers: blast (fire trapping), bolt (fire trapping), fear, and shape change.\nServitude: A jinni Incapacitated by violent means will seek to make a bargain with its opponent. The jinni offers service for a year and a day in return for sparing its life. During the period of servitude, the jinni is gracious and obedient (though not suicidal), but once the period elapses it strives to destroy the one who forced its enslavement.\nSmoky Form: A jinni can assume a smoky form with a successful Smarts roll. While in this form, the jinni cannot be harmed by any means, but it cannot affect the world in any way. As smoke, they can fit into small containers, such as lamps.\nTeleport: Jinn can teleport anywhere in the world. A Smarts roll is required for teleporting to an unseen location as normal.\nVariable Size: Jinn can vary their size from that of a man (their base form) to over 100\' high. The base statistics assume they are human-sized. Each point of Size they gain gives them +1 Toughness and Strength. At Size +4 they become Large creatures, at Size +8 they are Huge, and at Size +12 and over they are Gargantuan. Changing Size requires a Smarts roll, with the jinni gaining or losing 1 level of Size per success and raise. The roll may be made once per round.\nWeakness (Earth): Jinn were born of fire, but man, who the gods favor over jinn, was born of clay. Attacks involving earth, whether thrown rocks or magical trappings, inflict double damage.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Jinn (singular: jinni) are grouped into five categories. Marids are the most powerful, then efrit, shaitan, jinn, and finally the jann. All five are powerful, corporeal beings with the power to disappear at will. Some jinn are good, but the majority are evil-all are masters of trickery. The Westernized spelling is genie. The stats presented here are for a typical jinni.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_TAUNT":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p129'
	}
);
	// Khazok
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 115,
		name: {
			'en-US' : 'Khazok',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, per every 5 khazoks',
		},
		abilities: {
			'en-US' : 'Armor +2: Rocky shell.\nBite: Str+d6.\nCamouflage: While not moving, khazoks resemble small boulders. Characters actively searching for danger suffer -4 to their Notice rolls. Khazoks which aren\'t detected strike with surprise, getting the Drop on their unsuspecting foes.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Khazok is a dwarven word meaning "rock monster." Khazoks are carnivorous creatures with sharp mandibles and a rocky shell and are found in mountainous terrain and deep underground. Their favorite tactic is to curl into a ball, which resembles a small boulder, then spring to attack unwary passersby.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 2,
		page: 'p129'
	}
);
	// Knight
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 116,
		name: {
			'en-US' : 'Knight',
		},
		gear: {
			'en-US' : 'Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
		},
		treasure: {
			'en-US' : 'Meager, Worthwhile in castle',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Command, Noble',
		},
		hindrances: {
			'en-US' : 'Code of Honor',
		},
		blurb: {
			'en-US' : 'Knights are the fantasy equivalent of tanks-heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '7',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// Knowledge Eater
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 119,
		name: {
			'en-US' : 'Knowledge Eater',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Ambush: Knowledge eaters lurk above ground level. When prey passes beneath, they attempt to drop onto its head. If a character passes beneath an undetected knowledge eater, it has the Drop. Its first attack is always a Called Shot to the head.\nInfravision: Halve darkness penalties against living targets (round down).\nPotion: The membranous body of a knowledge eater can be boiled to make a thick, grey sludge. Successfully creating the potion requires a Smarts roll. When drunk, the imbiber gains a +1 step increase in his Smarts and all linked skills for one hour.\nProboscis: Str+d4. If the victim of a Called Shot to the head is Shaken or wounded, the beast sinks its proboscis into his brain. Each round it remains attached, the victim suffers a permanent 1 die reduction in Smarts and all linked skills. If Smarts reaches zero, the victim is left a gibbering idiot.\nSize -1: Knowledge eaters are the size of small dogs.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Knowledge eaters resemble large spiders but have an extendable proboscis and a grey, pulsating, membranous body. They feed on the knowledge of their victims, literally sucking away intelligence. It seems unlikely that such a beast could have evolved naturally, but so far no race has uncovered any knowledge regarding their creation.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p130-p131'
	}
);
	// Lasher
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 66,
		name: {
			'en-US' : 'Lasher',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Iron Scales\nBarbed Whip: Str+d8, Reach 2. Anyone struck by the whip, whether they are injured or not, must make a Vigor roll or be Shaken by the immense pain caused by the barbs. They cannot attempt to recover for 1d6 rounds after the attack.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear: Anyone seeing a lasher must make a Fear check at -2.\nFlight: Lashers have a Flying Pace of 12" and a Climb of 6"\nInfravision: Lashers halve penalties for poor lighting against living targets.\nSize +3: Lashers stand 9\' tall and weigh over 1000 pounds.\nSweep: By whirling its whip round, a lasher can attack all opponents within 2" at no penalty.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Lashers are demonic taskmasters, using their barbed whips to keep lesser demons in line. Considerably larger than humans, they resemble an unholy giant bat with blackened, iron scales. They can be summoned into the world through dark rituals, but are usually only employed when a number of lesser demons need controlling.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '14',
		armor: '3',
		book: 2,
		page: 'p111'
	}
);
	// Lava Border Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 47,
		name: {
			'en-US' : 'Lava Border Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +3: Rocky hide.\nBurrow (6"): Lava elementals can meld into and out of the ground.\nElemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nFlame Strike: Lava elementals can spit a searing blast of flame using the Cone Template. Characters within the cone must beat the elemental\'s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Composed of fire and earth, these creatures have a stony skin overlaying a body of molten rock. They look similar to earth elementals, but have fiery eyes, a mouth that looks like the centre of an active volcano when opened, and smoking, blackened, rocky skin.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p105'
	}
);
	// Lava Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 99,
		name: {
			'en-US' : 'Lava Golem',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Armor +3: Magically hardened stone.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nSize +1: Lava golems stand over 8\' high and weigh 2,000 pounds.\nSpit Lava: Lava golems can spew a glob of molten lava. Range 6/12/24, Damage: 2d10, Medium Burst Template. Targets under the Template may make an Agility roll at -2 to escape the glob. Victims have a chance of catching fire.\nSuperheated Fists: Str+d10\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nAlthough superficially similar to stone golems, lava golems have fiery ichor running through their rock bodies. Their eyes glow red and their fists are superheated.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://fc02.deviantart.net/fs49/f/2009/168/0/5/Lava_Golem_by_Vij_8.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p123-p124'
	}
);
	// Liche
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 120,
		name: {
			'en-US' : 'Liche',
		},
		gear: {
			'en-US' : 'Magical armor (+6), other magical items',
		},
		treasure: {
			'en-US' : 'Treasure Trove',
		},
		abilities: {
			'en-US' : 'Death Touch: Liches drain the lives of those around them with a touch. Instead of a normal attack, a liche may make a touch attack. Every raise on its Fighting roll automatically inflicts one wound to its target.\nSpells: Liches have 50 Power Points and know most every spell available.\nUndead: +2 Toughness; +2 to recover from being Shaken; Called shots do no extra damage.\nZombie: Liches are necromancers first and foremost. The undead they raise through the zombie spell are permanent, so they are usually surrounded by 4d10 skeletons or zombies as they choose. Some liches have entire armies of the undead at their disposal.\n',
		},
		tags: {
			'en-US' : 'undead,zombie,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Perhaps the most diabolical creature in any fantasy land is the liche-a necromancer so consumed with the black arts that he eventually becomes undead himself.\n',
		},
		attributes: '{"agility":"d6","smarts":"d12+2","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d12+2","special":{"en-US":"Occult"}},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '15',
		armor: '6',
		book: 2,
		page: 'p131'
	}
);
	// Lizard Men
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 121,
		name: {
			'en-US' : 'Lizard Men',
		},
		gear: {
			'en-US' : 'Leather armor (+1), stiff hide shield (+1 Parry), flint battle axe (Str+d8), flint throwing axe (Range: 3/6/12, Damage: Str+d6)',
		},
		treasure: {
			'en-US' : 'Meager per 5 Lizard men',
		},
		abilities: {
			'en-US' : 'Keen Senses: Lizard men "taste" the air, giving them +2 to all Notice rolls. This ever- present advantage means they are always considered "Active" when consulting the Stealth results table.\nNatural Swimmers: Lizard men\'s tails make them powerful swimmers, giving them +2 on all Swimming rolls and increasing their swimming Pace to equal their Swimming skill.\n',
		},
		tags: {
			'en-US' : 'lizard man,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Lizard men are aggressive bipedal lizards with a fondness for warm flesh. Most live in marshy terrain, where they hunt fish and water fowl. Their society is extremely primitive. They have never developed metalworking, but prize metal tools and weapons looted from the corpses of those who intrude in their realms.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p131'
	}
);
	// Mage
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 122,
		name: {
			'en-US' : 'Mage',
		},
		gear: {
			'en-US' : 'Various',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Spells: Novice mages have 15 Power Points and typically know armor, bolt, detect/conceal arcana, and light.\n',
		},
		tags: {
			'en-US' : 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,',
		},
		edges: {
			'en-US' : 'Arcane Background (Magic), New Power, Power Points, Wizard',
		},
		hindrances: {
			'en-US' : 'Varies',
		},
		blurb: {
			'en-US' : 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.\n',
		},
		attributes: '{"agility":"d6","smarts":"d10","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// Mage
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 123,
		name: {
			'en-US' : 'Mage',
		},
		gear: {
			'en-US' : 'Various, but at least one magic item',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Spells: Veteran mages have 25 Power Points and typically know armor, bolt, detect/conceal arcana, dispel, fly, and light.\n',
		},
		tags: {
			'en-US' : 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,',
		},
		edges: {
			'en-US' : 'Arcane Background (Magic), New Power, Power Points, Rapid Recharge, Wizard',
		},
		hindrances: {
			'en-US' : 'Varies',
		},
		blurb: {
			'en-US' : 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.\n',
		},
		attributes: '{"agility":"d6","smarts":"d12","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d12"},"SKILL_STEALTH":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// Mage Bane
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 125,
		name: {
			'en-US' : 'Mage Bane',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'One relic',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImproved Arcane Resistance: +4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers.\nInvulnerability: Mage banes take no damage from non-magical attacks.\nMagic Drain: On a successful Touch Attack the mage bane drains 1d6 Power Points from a victim unless the victim succeeds in an opposed Spirit roll. Drained points are added to the mage bane\'s own pool. It cannot exceed its starting level, however.\nMagic Sense: Mage banes can detect arcana as a natural sense.\nPowers: Mage banes have 40 Power Points and know the following powers: bolt, deflection, dispel, entangle, fear, obscure, telekinesis, and teleport.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Many stories exist about how mage banes came to be. Some say they are the spirits of mages who never fulfilled their potential in life. Others claim they are the result of magical backlash. A few even say they are elementals, drawn from the realm of magic. Whatever the truth, they detest mages (but not priests or other Miracle workers). They appear as black, faceless humanoids.\n',
		},
		attributes: '{"agility":"d10","smarts":"d12","spirit":"d10","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p133'
	}
);
	// Manticore
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 128,
		name: {
			'en-US' : 'Manticore',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Bite/Claw: Str+d6\nDefensive Volley: Rather than fire its tail darts at one target, the manticore may launch them in a circular pattern. The manticore makes a single Shooting roll against all target within range. Victims suffer 2d6 damage. The manticore may take no other actions in the round it uses this ability, including movement. This ability may be used only once per day and uses all the darts in the tail. There must be at least 3 volleys of darts left for this ability to work.\nImproved Frenzy: Manticores may make two Fighting attacks each action at no penalty.\nTail Darts: Each round, a manticore may fire a volley of darts at one target (Range: 4/8/16, Damage: 2d6). It may not fire its darts at the same target it attacks with its claws or bite during the same round. A manticore can only fire 10 volleys in a single day.\nSize +2: Manticores weigh over 600 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'A manticore has the body of a lion and a vaguely human head. Its mouth contains three rows of razor sharp teeth and its tail ends in a ball of darts or spines. Manticores are fierce predators and devour every part of their victims, including their gear.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://images.wikia.com/olympians/images/4/45/Percy_Jackson_Manticore.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p134'
	}
);
	// Marsh Troll
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 178,
		name: {
			'en-US' : 'Marsh Troll',
		},
		gear: {
			'en-US' : 'Spiked clubs (Str+d8)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Armor +1: Rubbery hide\nClaws: Str+d4\nImmunity: Immune to poison and disease.\nInfection: The claws of a marsh troll are caked in filth. Any creature Shaken or wounded by a claw must make a Vigor roll. On a failure, the wound becomes infected. The victim has a cumulative -1 penalty to trait rolls until the wound is cleaned. This requires a successful Healing roll for each wound.\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +1: Marsh trolls are smaller than regular trolls, being only 7\' tall.\nStench: Any creature adjacent to a marsh troll must make a Vigor roll or become Shaken with nausea.\n',
		},
		tags: {
			'en-US' : 'swamp troll,swamp,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Also known as swamp trolls, bog trolls, and marsh fiends, these foul creatures haunt dank marshes. Their skin is black and slimy, matching the murky waters of their home, and they stink like rotting vegetation.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '9',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// Master Thief
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 169,
		name: {
			'en-US' : 'Master Thief',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Worthwhile, Rich in lair',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Dodge, Level Headed, Thief',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves\' guilds are often excellent sources of information-if you can find them.\n',
		},
		attributes: '{"agility":"d12","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_LOCKPICKING":{"value":"d12"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d12"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p147'
	}
);
	// Mature Tree Man
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 176,
		name: {
			'en-US' : 'Mature Tree Man',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick Bark\nCamouflage: When a tree man isn\'t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls.\nLashing Branches: Str+d10, Reach 6.\nGargantuan: Heavy Armor. Ranged attacks against tree men by man-size creatures are made at +4. His attacks are Heavy Weapons. Add Size to Damage when stomping.\nHuge: Characters add +4 when attacking a tree man because of its great size.\nImproved Sweep: May attack all adjacent foes.\nPowers: Tree men are lords of the forest. They have 25 Power Points and know beast friend and entangle.\nSize +11: Tree men are over 100\' tall.\nWeakness (Fire): Fire-based attacks do +2 damage and the chance of catching alight is 5-6 on a d6.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live.\n',
		},
		attributes: '{"agility":"d4","smarts":"d6","spirit":"d8","strength":"d12+6","vigor":"d12+1"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '10',
		parry: '7',
		toughness: '21',
		armor: '2',
		book: 2,
		page: 'p149'
	}
);
	// Medusa
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 129,
		name: {
			'en-US' : 'Medusa',
		},
		gear: {
			'en-US' : 'Short sword (Str+d6), bow (Range: 12/24/48, Damage: 2d6)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Petrify: The visage of a medusa is deadly to behold. In combat, a character may avert his eyes by taking a penalty to his attack roll. The attacker may take a -1, -2, -4, or -6 penalty to his attack roll (his choice). Whether the attack is successful or not, he must then make a Spirit roll with a bonus equal to the penalty he took to his attack roll. On a failure, he catches sight of the medusa\'s face and is turned to stone- permanently. A character Surprised by a medusa may make an Agility roll at -4 to avert his gaze.\nSnake Hair: The writhing snake hair of a medusa can attack all adjacent foes with no multi-action penalty. The bite inflicts d4+2 damage, and also delivers poison. Victim must make a Vigor roll at -2. With success, the bite area swells and becomes numb. The victim becomes Exhausted until healed. With a failure, the victim becomes Incapacitated and must make a second Vigor roll or die.\nPoison Arrow: As an action, a medusa may drip venom from a snake onto an arrow. The poison is good for one shot and functions as described in Snake Hair.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The legendary medusa was a unique creature-a former maiden of beauty cursed by the gods for her vanity. In fantasy settings, the creature may be unique or part of a race of the same name. Medusas are found in most terrains. They lair is usually decorated with numerous "statues."\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://deyoung.famsf.org/files/imagecache/exhibition_preview_large/blog/MedusaFace.JPG',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p134'
	}
);
	// Mercenary Captain
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 132,
		name: {
			'en-US' : 'Mercenary Captain',
		},
		gear: {
			'en-US' : 'Plate corselet (+3), chain limbs (+2), open helm (+3), various weapons, war horse',
		},
		treasure: {
			'en-US' : 'Worthwhile',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '-',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.\nCaptains are experienced soldiers commanding a mercenary unit. They typically carry the same weapons as their men but are mounted.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Battle"}},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p135'
	}
);
	// Mermaid
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 133,
		name: {
			'en-US' : 'Mermaid',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile per 5 mermaids',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 6\nClaws: Str+d6\nSiren Song: The mermaid\'s song is like a narcotic for men. When first heard, male characters of all species must make Spirit rolls. Those who fail stumble into the sea and become completely complacent, believing they\'re cavorting with the beautiful sea nymphs. In truth, the victims are drowning. Every time the victim suffers a wound or a Fatigue level from any source, he gets a Spirit roll at -2 (plus the Fatigue penalty) to realize his peril and break the spell. Those who do are quickly savaged by the watching mermaids. Aquatic races may fall victim to the mermaids as well, but since they can\'t drown, they\'ll simply be ripped to shreds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mermaids appear as beautiful, naked young women from the waist up with glistening fish tales for their lower torso. Once underwater, their true form is revealed. They are hideous monsters with jagged teeth, blood-red fish eyes, and green scaly skin covered in slime.\nOnce sailors are in the water, they attempt to hold them there and drown the unfortunate souls.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn2-b.examiner.com/sites/default/files/styles/article_large/hash/17/bc/17bcc3eff2b01dec93b7cc32dae4e7d2.jpg?itok=8-GDWrLu',
		charisma: '+4',
		pace: '0',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p135'
	}
);
	// Metal Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 100,
		name: {
			'en-US' : 'Metal Golem',
		},
		gear: {
			'en-US' : 'Great axe (Str+d10, -1 Parry, requires 2 hands)',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Armor +5: Magically hardened metal.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nImproved Sweep: Metal golems may attack all adjacent creatures at no penalty.\nSize +2: Metal golems stand over 10\' high and weigh 6,000 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nTypically crafted in humanoid form from iron or bronze, metal golems are among the most powerful golems. Some creators give their iron golems long swords instead of hands, allowing them to attack more often.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d12+3","vigor":"d12+1"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://th02.deviantart.net/fs7/PRE/i/2005/159/2/5/iron_golem_by_muninsnape.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '15',
		armor: '5',
		book: 2,
		page: 'p124'
	}
);
	// Methusaleh Tree
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 134,
		name: {
			'en-US' : 'Methusaleh Tree',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, scattered around base',
		},
		abilities: {
			'en-US' : 'Armor +2: Bark\nBranches: Str+d6. A Methusaleh tree may make up to four attacks each round. On a raise, the creature impales the victim. The victim must make a Vigor roll or gain a level of Fatigue (recover one level per 24 hours). Every round a connected branch stays impaled, the victim must make another Vigor roll. Removing the branch requires an opposed Strength roll to pull it free. For each Fatigue level drained, the tree heals 1 wound. The branches have Toughness 10 and one wound. Severing them does not affect the tree\'s overall health. Severed branches regenerate after 1d6 days.\nCanopy: A Methusaleh tree spreads wide for sun and prey. Branches have Reach 3.\nHuge: Attackers are +4 to attack rolls due to the tree\'s size.\nPlant: Plants are not subject to Fear and Tests of Will.\nSize +8: Methusaleh trees stands over 60\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Methusaleh trees look like oaks, spruces, and other mundane trees, but are always healthy specimens unbothered by nesting birds or tree-dwelling mammals. There is good reason why animals do not bother the tree-it feeds on their life-force.\nAs well as regular foliage, a Methusaleh tree has four sharpened branches which it uses to impale prey, draining and sucking out their vitality, thus rejuvenating itself.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d10","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '17',
		armor: '2',
		book: 2,
		page: 'p136'
	}
);
	// Moss Man
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 135,
		name: {
			'en-US' : 'Moss Man',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4\nCamouflage: Moss men gain +2 to Stealth rolls in forest and jungle because of their appearance.\nSpores: Moss men can release a cloud of choking spores. The cloud fills a Medium Burst Template centered on the moss man. Creatures within the Template must make a Vigor roll or be Shaken. Each cloud costs 2 Power Points and the moss man has 10 available for this purpose only.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Moss men are mobile, semi-intelligent humanoid plants composed of tightly packed moss, vines, and grass. They have a mouth tipped with sharp thorns which function as teeth and glowing yellow eyes.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p136'
	}
);
	// Mud Border Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 48,
		name: {
			'en-US' : 'Mud Border Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImmunity: The semisolid body of a mud elemental gives it limited resistance to attacks. Nonmagical attacks of any sort cause half-damage.\nSeep: Mud elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances-there must be an actual hole through the obstacle (such as a keyhole).\nSlam: Str+d6, nonlethal damage.\nSmother: If a mud elemental scores a raise on a grapple attack it has enveloped its target. Escaping requires an opposed Strength roll. Each round the victim remains smothered, he suffers a Fatigue level.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mud elementals bridge the realms of earth and water. They resemble earth elementals in shape, but are fluid like their water elemental kin.',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// Mummy Lord
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 137,
		name: {
			'en-US' : 'Mummy Lord',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Rich',
		},
		abilities: {
			'en-US' : 'Arcane Background (Magic): A mummy typically has 30 Power Points and knows barrier (wall of darkness), bolt (swarm of tiny skulls), deflection (shield of swirling skulls), fear (unearthly cry), obscurement (area of darkness), and zombie (ritual preparation).\nFearless: Mummy lords are immune to Fear and Intimidation.\nFist: Str+d6\nImproved Arcane Resistance: +4 Armor versus magic, and +4 to rolls made to resist magic effects.\nMummy Rot: Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has "mummy rot" and suffers an immediate wound.\nShuffling Gait: Guardian mummies roll a d4 running die.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called\nWeakness (Fire): Mummies take +4 damage from fire.\n',
		},
		tags: {
			'en-US' : 'mummies,mummy,undead',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.\nMummy lords were priests and mages preserved for eternity and granted an unearthly life through arcane rituals.\n',
		},
		attributes: '{"agility":"d4","smarts":"d10","spirit":"d12","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '13',
		armor: '3',
		book: 2,
		page: 'p137'
	}
);
	// Naga - Human Form
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 140,
		name: {
			'en-US' : 'Naga - Human Form',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Hypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.\nVery Attractive: The human form of the naga is that of a beautiful, dusky-skinned woman.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha\'s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+4',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// Naiad
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 141,
		name: {
			'en-US' : 'Naiad',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Aquatic: Naiads have a Pace of 10 underwater.\nAttractive: Naiads resemble beautiful human females.\nMagic: Naiads have 30 Power Points and know the following powers: barrier (wall of water), beast friend (aquatic only), entangle (bound by water ), healing, invisibility (assumes a watery, translucent form), shape change (aquatic only), and stun.\nPool Bond: Naiads share their soul with a particular pool or similar small body of water. They must remain within 36" of the water or their magic does not work. If the pool is polluted, the naiad must make a Vigor roll each day or suffer a Fatigue level until the taint is cleared.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Naiads are fresh water spirits in the way dryads are tree spirits. Nereids are the salt water equivalent to naiads and use the same stats.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// Natural Gargoyle
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 85,
		name: {
			'en-US' : 'Natural Gargoyle',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager in nest',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick, leathery skin.\nBite/Claws: Str+d6.\nCamouflage: Natural gargoyles receive +2 to Stealth rolls in rocky terrain due to their skin color.\nFlight: Furies have a Flying Pace of 10" and a Climb of 4".\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The little-known natural gargoyle is the base for the stone figures. They fly on leathery wings that fold flush with the body to prevent damage on jagged rocks. They perch on craggy rock faces waiting for prey, a tireless vigil that prompted their use in architecture.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '9',
		armor: '2',
		book: 2,
		page: 'p118'
	}
);
	// Nightmare
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 142,
		name: {
			'en-US' : 'Nightmare',
		},
		gear: {
			'en-US' : 'Some necromancers give their nightmares barding (+3)',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Brave: Nightmares are not prone to fright and gain +2 to Fear checks.\nFleet Footed: Nightmares roll a d8 for their running die. Nightmares run just above the surface of the ground and do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6\nSize+3: Nightmares weigh between 800 and 1000 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Nightmares are demonic steeds. They are black as night, with fiery hooves and eyes. They only accept evil riders, throwing off and stomping those of good heart.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '10 or',
		armor: '0',
		book: 2,
		page: 'p139'
	}
);
	// Noble
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 145,
		name: {
			'en-US' : 'Noble',
		},
		gear: {
			'en-US' : 'Rapier (Str+d4, +1 Parry) in court; war gear varies with type of noble',
		},
		treasure: {
			'en-US' : 'Worthwhile, Rich in castle',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'noble',
		},
		edges: {
			'en-US' : 'Command, Connection, Noble',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nSome nobles are decadent dandies content with living a life of luxury. Others are rich landowners, skilled in business matters. Other noble types include military commanders, advisors to a higher authority, poverty stricken ones, extremely wealthy ones, and those who dabble in forbidden arts.\nThis version presents a typical middle-of- the-road noble. A few specific Hindrances and Edges can quickly turn this into any sort of noble you need.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// Octopus, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 146,
		name: {
			'en-US' : 'Octopus, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 6\nHuge: Characters add +4 when attacking a giant octopus due to their great size.\nInk Cloud: A giant octopus can spurt a cloud of black ink once per day. The cloud fills a sphere equal to a Large Burst Template. No sight or smell functions within this putrid stuff, even for the octopus.\nSize+6: The body of a giant octopus is as big as a sloop, while each tentacle is over 20\' long.\nTentacles: A giant octopus may make up to four attacks each round. On a raise, the creature has grappled the victim. An entangled victim may only attempt an opposed Strength roll each round to escape. Once grappled, the octopus does its Strength damage automatically by crushing with its arms and rending with its beak. A victim killed by an octopus\' tentacles is usually ripped in half.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These terrors of the deep are aggressive and always hungry. Alone, they are quite cowardly and attack only what they consider easy prey. Wounded beasts typically emit an ink cloud and attempt to escape.\nCharacters often try to sever tentacles. A tentacle is severed if it takes the creature\'s Toughness in damage in one shot from an edged weapon. Attacking a tentacle that has entangled a friend is somewhat risky-a roll of 1 on the attack die means the ally is hit instead.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d12+4","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '6',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// Ogre
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 147,
		name: {
			'en-US' : 'Ogre',
		},
		gear: {
			'en-US' : 'Thick hides (+1), massive club (Str+d8)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Size+3: Most ogres are over 8\' tall with pot-bellies and massive arms and legs.\nSweep: May attack all adjacent foes at -2.\n',
		},
		tags: {
			'en-US' : 'ogres',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Ogres are kin to orcs and lesser giants. They are often taken in by orc clans, who respect the dumb brutes for their savagery and strength. Orcs often pit their "pet" ogres in savage combats against their rivals\' ogres.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '7',
		toughness: '11',
		armor: '1',
		book: 2,
		page: 'p141'
	}
);
	// Orc
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 148,
		name: {
			'en-US' : 'Orc',
		},
		gear: {
			'en-US' : 'Leather armor (+1), scimitar (Str+d8).',
		},
		treasure: {
			'en-US' : 'Meager, per 3 orcs',
		},
		abilities: {
			'en-US' : 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'https://www.frontlinegaming.org/wp-content/uploads/2013/01/4e_DnD_Orcs_by_RalphHorsley1.jpeg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p141'
	}
);
	// Orc Chieftan
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 149,
		name: {
			'en-US' : 'Orc Chieftan',
		},
		gear: {
			'en-US' : 'Plate chest plate (+3), chain arms and legs (+2), battle axe (Str+d10).',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.\nSweep: May attack all adjacent characters at -2 penalty.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.\nThe leader of small orc clans is always the most deadly brute in the bunch. Orc chieftains generally have a magical item or two in settings where such things are relatively common (most "swords and sorcery" worlds).\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p141'
	}
);
	// Orc Shaman
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 150,
		name: {
			'en-US' : 'Orc Shaman',
		},
		gear: {
			'en-US' : 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Infravision: Halves penalties for poor light vs. warm targets.\nSpells: Shamans have 15 power points and typically know armor, bolt, fear, and smite.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.\nOrcs worship gods of destruction and slaughter. Their shamans personify this image, and while they are usually the smallest members of a clan, they are often the most savage.\nOrc shamans drape themselves in crude fetishes, bones, and other occult trappings to appear more menacing to their foes. Their power is simple hedge magic, however, and is not divinely inspired despite several millennia believing otherwise.\n',
		},
		attributes: '{"agility":"d6","smarts":"d8","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p142'
	}
);
	// Pegasus
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 151,
		name: {
			'en-US' : 'Pegasus',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Flying: Pegasi have a Flying Pace of 12" and a Climb of 6".\nKick: Str\nSize+2: Pegasi weigh around 800 pounds.\n',
		},
		tags: {
			'en-US' : 'pegasi',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Pegasi (singular: pegasus) are horses with great, feathery wings. In Greek myth the animal was unique, but in many fantasy settings they are standard creatures.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p142'
	}
);
	// Phoenix
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 152,
		name: {
			'en-US' : 'Phoenix',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Flight: Phoenix have a Flying Pace of 12" and a Climb of 6".\nPowers: A phoenix has 35 Power Points and knows the following powers: barrier, blast, bolt, burst, and light. All powers have a fire trapping.\nRebirth: If a phoenix is killed, it explodes into flame filling a Medium Burst Template. Creatures within the Template suffer 2d10 damage and have a chance of catching fire. During the explosion, the body of the phoenix transforms into an egg. A new phoenix hatches 2d6 days later.\nSize-1: A phoenix is the same size as a large eagle.\nTail Feathers: Every phoenix has 35 magical tail feathers, each acting as a one-shot spell. Each of the thirteen yellow feathers contain bolt (one bolt, 3d6 damage), the twelve orange feathers have burst, and the ten red feathers hold blast (3d6 damage in Medium Burst Template). The powers are cast using the phoenix\'s Spellcasting-all the user need do to activate the power is throw the feather at the target (as an action). Removed tail feathers do not grow back. Furthermore, each lost feather permanently reduces the bird\'s Power Points by one. When the last feather is removed, the bird explodes (as above) but is not reborn.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Clad in fiery feathers of yellow, orange, and red, the immortal phoenix is seen as a representation of the sun god. Many cultures consider the bird sacred, but its feathers contain magical power and thus the bird is often hunted.\nThe greatest gift a phoenix can bestow is one of its tail feathers. Although the magic in them is temporary, the phoenix forever weakens its life-force with the gift.\n',
		},
		attributes: '{"agility":"d10","smarts":"d10 (A)","spirit":"d8","strength":"d6","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p142'
	}
);
	// Priest of Death
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 153,
		name: {
			'en-US' : 'Priest of Death',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), holy symbol',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Spells: Death priests typically have 15 Power Points and know armor (bone trapping), fear, and zombie.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Arcane Background (Miracles), New Power, Points',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_FAITH":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p142-p143'
	}
);
	// Priest of Healing
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 154,
		name: {
			'en-US' : 'Priest of Healing',
		},
		gear: {
			'en-US' : 'Staff (Str+d4, Parry +1, Reach 1), holy symbol',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Spells: Healing priests typically have 15 Power Points and know deflection, healing, and light.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Arcane Background (Miracles), Healer, New Power, Power Points',
		},
		hindrances: {
			'en-US' : 'Pacifist (Minor), Vow (care for the sick)',
		},
		blurb: {
			'en-US' : 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FAITH":{"value":"d10"},"SKILL_HEALING":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '3',
		toughness: '5',
		armor: '1',
		book: 2,
		page: 'p143'
	}
);
	// Priest of War
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 155,
		name: {
			'en-US' : 'Priest of War',
		},
		gear: {
			'en-US' : 'Chain mail (+2), battle axe (Str+d8), medium shield (+1 Parry), holy symbol',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Spells: War priests typically have 15 Power Points and know armor, boost/lower trait, and smite.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Arcane Background (Miracles), New Power, Power Points',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_FAITH":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p143'
	}
);
	// Rat Men
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 158,
		name: {
			'en-US' : 'Rat Men',
		},
		gear: {
			'en-US' : 'Short sword (Str+d6)',
		},
		treasure: {
			'en-US' : 'Meager, per 5 rat men',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4\nDirection Sense: Rat men usually live in sewers or slums. Maneuvering around these mazes has given them a good sense of direction. Rat men never get lost, even in nonnative locales.\nImmunity: Rat men are immune to poison and disease.\nInfection: Anyone bitten by a rat man must make a Vigor roll or the wound becomes swollen and infected. The victim suffers a level of Fatigue, which is recovered with a successful Healing roll or after 24 hours. Cumulative infections can cause a victim to be Incapacitated, but cannot lead to Death.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Rat men are, as the name implies, a cross between rats and humans. They are bipedal, but otherwise resemble rats. They are not lycanthropes, for they cannot change into a purely human form. Most rat men colonies are found in or beneath cities, where they scavenge for food and dropped coins.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p144'
	}
);
	// Redcap
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 159,
		name: {
			'en-US' : 'Redcap',
		},
		gear: {
			'en-US' : 'Leather armor (+1), great axe (Str+d10, -1 Parry, requires 2 hands)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : 'Fear: Characters seeing a redcap must make a Fear check.\nInfravision: Redcaps halve penalties for dark lighting against living targets (round down).\nSize+2: Redcaps stand over 8\' tall.\n',
		},
		tags: {
			'en-US' : 'goblins,goblin',
		},
		edges: {
			'en-US' : 'Berserk, Combat Reflexes, Improved Frenzy, Improved Nerves of Steel, Improved Sweep',
		},
		hindrances: {
			'en-US' : 'Bloodthirsty',
		},
		blurb: {
			'en-US' : 'Redcaps are related to goblins, but are much larger and more ferocious. Their name comes from the woolen hats they wear, which are soaked in the blood of their victims.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '10',
		armor: '1',
		book: 2,
		page: 'p144'
	}
);
	// Roc
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 160,
		name: {
			'en-US' : 'Roc',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Rich, In Nest',
		},
		abilities: {
			'en-US' : 'Bash: Rocs have incredible lift, and can pick up small ships (those with a base Toughness of 15 or less) to drop them on the rocks. It takes the roc a full round to properly grasp a ship, which is a Fighting attack against a "Parry" of 2. With a raise, the roc lifts the boat in the air and ascends 6" per round afterward. After five full rounds, it drops its prey, automatically destroying any boat it can lift. Characters suffer damage according to the height.\nFlight: Rocs have a Flying Pace of 16", with an Acceleration of 4" and a Climb of 6".\nHuge: Characters add +4 when attacking a roc due to their great size.\nSize+8: Rocs are huge creatures with wingspans over 120\'.\nTalons: Str+d6; AP 4. These claws are large enough to damage ships with Heavy Armor and fortifications.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These massive birds are large enough to pick up small ships and whales. The great Sinbad the Sailor had a near-fatal encounter with one. Most roost in isolated aeries, searching for large prey for their feasts. Sailors and city guard have sometimes managed to fend off these beasts with ballistae, but even these weapons rarely penetrate the roc\'s lizard-like skin.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d6","strength":"d12+8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '14',
		armor: '0',
		book: 2,
		page: 'p144-p145'
	}
);
	// Sabre-Toothed Tiger
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 161,
		name: {
			'en-US' : 'Sabre-Toothed Tiger',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, In Lair',
		},
		abilities: {
			'en-US' : 'Bite: Str+d10, AP 1.\nClaws: Str+d6.\nImproved Frenzy: A sabre-toothed tiger may make two attacks each round with no penalty.\nPounce: Sabre-tooths often pounce on their prey to best bring their mass and teeth to bear. It can leap 1d6" to gain +4 to its attack and damage. Its Parry is reduced by -2 until its next action when performing the maneuver, however.\nSize+3: Sabre-tooths weigh over 800 pounds.\n',
		},
		tags: {
			'en-US' : 'saber,sabertooth',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Sabre-toothed tigers haunt grasslands using their patterned skin to sneak up on unsuspecting prey. Their twin canine teeth can slice through armor and bone as easily as flesh.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6(A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p145'
	}
);
	// Sand Border Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 49,
		name: {
			'en-US' : 'Sand Border Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImmunity: Half-damage from all non- magical attacks.\nSand Blast: Sand elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d8.\nSeep: Sand elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances-there must be an actual hole through the obstacle (such as a keyhole).\nSlam: Str+d4\nWhirlwind: As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the sand elemental wins, its foe is pulled into the swirling maelstrom of its sandy body. While trapped, the target is at -2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Sand elementals inhabit the dusty border between the realms of earth and air. They manifest as sandy humanoids, but can turn into whirling clouds of flying dust and grit.',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// Sand Troll
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 180,
		name: {
			'en-US' : 'Sand Troll',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Armor +1: Thick hide\nBurrow: Pace 4\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +3: Sand trolls are over 8\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Sand trolls primarily inhabit deserts, though they can sometimes be found on beaches. Their favorite tactic is to burrow just below the surface, then leap out to attack passing prey.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '11',
		armor: '1',
		book: 2,
		page: 'p151'
	}
);
	// Scorpion Man
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 163,
		name: {
			'en-US' : 'Scorpion Man',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, per 3 scorpion men',
		},
		abilities: {
			'en-US' : 'Armor +2: Chitinous skin.\nFleet Footed: Scorpion Men roll a d8 for their running die, instead of a d6.\nMarksman: Scorpion men are expert archers. If they do not move in a turn, they may fire as if they took the aim maneuver.\nPoison: Anyone wounded or Shaken by a stinger attack must make a Vigor roll or become Incapacitated. Death follows in 2d6 minutes. A Healing roll at -2 prevents death\nStinger: Str+d6.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Scorpion men have the upper bodies of humans and the lower bodies of scorpions. They prefer hot, dusty environments, but can survive in temperate conditions. They guard their lairs with deadly force.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p146'
	}
);
	// Scorpion, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 162,
		name: {
			'en-US' : 'Scorpion, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, In Lair',
		},
		abilities: {
			'en-US' : 'Armor +3: Chitinous skin.\nGrapple: A scorpion may grapple a foe with one or both pincers. If it uses both, each must make a successful opposed Strength roll. Escaping from a double grapple gives the prey a -4 penalty to his Strength roll to escape. A stinger attack against a grappled foe is made at +2, +4 if the victim is held in both pincers.\nImproved Frenzy: A sabre-toothed tiger may make two attacks each round with no penalty.\nPincers: Str+d4.\nPoison: Anyone wounded or Shaken by a stinger attack must make a Vigor roll or immediately become Incapacitated. Death follows in 2d6 rounds.\nStinger: Str+d6.\nSize+1: Giant scorpions measure 7\' in length.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant scorpions are usually found in hot climates. Unlike their normal-size cousins, giant scorpions are fierce predators.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d8","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p145'
	}
);
	// Sea Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 92,
		name: {
			'en-US' : 'Sea Giant',
		},
		gear: {
			'en-US' : 'Large maul (Str+d10, carried in one hand)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Aquatic: Sea giants have a Pace of 8 underwater.\nImproved Sweep: Sea giants can attack all adjacent foes at no penalty.\nHuge: Attackers gain +4 to attack rolls against sea giants due to their size.\nSize +8: Sea giants are over 35\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giants come in several forms, but all share two common features-they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nSea giants dwell in caves beneath the ocean. For the most part they eat marine animals, but sometimes they rise to the surface to swipe unsuspecting sailors from passing ships.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+7","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '15',
		armor: '0',
		book: 2,
		page: 'p121'
	}
);
	// Sea Serpent
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 164,
		name: {
			'en-US' : 'Sea Serpent',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 12\nBite: Str+d6, Reach 2, Heavy Weapon.\nCrush: A sea serpent may wrap itsserpentine body around a ship (or large sea creature) as a grapple. Victims suffer damage each round the grapple is maintained. A sea serpent may crush and bite in the same round without incurring a multi-action penalty.\nGargantuan: Heavy Armor. Creatures add +4 when attacking the body of a sea serpent due to its great size. Add Size to damage when crushing but subtract Size of victim. This attack ignores any Armor value of a ship.\nLong Neck: A sea serpent\'s long neck gives it a Reach of 2.\nQuick: Sea serpents possess fast reflexes, able to turn in an instant and whip their long necks to attack passing prey. They redraw action cards of 5 or lower.\nSize +12: Sea serpents measure over 150\' long.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Sea serpents are monstrous beasts, capable of crushing ships into kindling. Even ship- mounted artillery can do little to hurt these nightmarish beasts.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d8","strength":"d12+8","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '19',
		armor: '0',
		book: 2,
		page: 'p146'
	}
);
	// Sea Troll
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 179,
		name: {
			'en-US' : 'Sea Troll',
		},
		gear: {
			'en-US' : 'Coral-tipped spear (Str+d6, Parry +1, Reach 1)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Aquatic: Sea trolls have a Pace of 10 underwater.\nArmor +1: Leathery hide\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSea Suit: +2 Stealth when hiding.\n',
		},
		tags: {
			'en-US' : 'skrag,skrags,mane,manes,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Called sea trolls by some, skrags and manes by others, these flesh-eating fiends haunt areas of rocks and seaweed.\nThey dress in numerous soft kelps, seashells, and other natural materials that add +2 to their Stealth when they sit quietly in small pools or piles of detritus from the sea.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '7',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// Siren Bush
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 165,
		name: {
			'en-US' : 'Siren Bush',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, around base',
		},
		abilities: {
			'en-US' : 'Plant: Plants are not subject to Fear and Tests of Will.\nRoots: Str. Extending from the siren bush to a range of 3" is a tangle of surface roots, each covered in sharp thorns. The roots are mobile and can attack everything within range with no multi-action penalty.\nSiren Song: Siren bushes emit a low, hypnotic hum when a living creatures approaches within 12". All creatures in range must make an opposed Spirit roll. Those who fail are subject to the puppet power. Normally the tree uses the power to draw its prey close enough for its roots to attach themselves, though if the need arises it can order them to defend it from attackers.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Siren bushes are carnivorous plants. When they detect living prey, they emit a hypnotic hum which lures the victim into the web of roots. Once close enough, the thorny roots rip into the target\'s flesh, saturating the surrounding ground in blood, which the roots then absorb.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4(A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p146'
	}
);
	// Skeleton
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 166,
		name: {
			'en-US' : 'Skeleton',
		},
		gear: {
			'en-US' : 'Varies',
		},
		treasure: {
			'en-US' : 'none',
		},
		abilities: {
			'en-US' : 'Bony Claws: Str+d4\nFearless: Skeletons are immune to Fear and Intimidation.\nUndead: +2 Toughness; +2 to recover from being Shaken; No additional damage from Called Shots; Immune to disease and poison.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The skin has already rotted from these risen dead, leaving them slightly quicker than their flesh-laden zombie counterparts.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img2.wikia.nocookie.net/__cb20130516203624/warriorsofmyth/images/4/4a/640x747_16373_Skeleton_2d_fantasy_creature_dark_darkness_skeleton_warrior_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '7',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p147'
	}
);
	// Sphinx
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 167,
		name: {
			'en-US' : 'Sphinx',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Rich, in lair',
		},
		abilities: {
			'en-US' : 'Bite/Claw: Str+d6\nFlight: Sphinxes have a Flying pace of 12" and a Climb of 6".\nRiddles: Rather than immediately attack sentient prey, sphinxes prefer to enter into riddle contests. If the prey loses, it gets eaten. Riddle contests are conducted as an opposed Smarts roll.\nSize+2: Sphinxes are the same size as lions.\nStrong Willed: As masters of trickery, sphinxes gets a +2 bonus on Tests of Will.\nWise: Sphinxes are renowned for their wisdom. They get +2 to all Common Knowledge rolls and roll a d8 for all Knowledge skills.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'An sphinx has the body of a lion, the head of a human (often female), and feathered wings. They are extremely clever, enjoy riddles, and savor the taste of human flesh.\n',
		},
		attributes: '{"agility":"d8","smarts":"d12+1","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p147'
	}
);
	// Steam Border Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 50,
		name: {
			'en-US' : 'Steam Border Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nFlight: Steam elementals fly at a rate of 6" with a Climb rate of 4". They may never "run"\nImmunity: Steam elementals suffer no damage from non-magical attacks.\nSteam Blast: Steam elementals can send directed blasts of superheated air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d10 and ignores nonmagical Armor.\nSeep: Steam elementals can squeeze through any gaps or porous surfaces as if they were Difficult Ground\nSlam: Str+d4\nWhirlwind: As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the elemental wins then its foe is pulled into the swirling maelstrom of its steamy body. While trapped, the target is at -2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The last of the common border elementals are those inhabiting the overlap of the realms of fire and water. They manifest as clouds of swirling steam.',
		},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// Stone Gargoyle
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 86,
		name: {
			'en-US' : 'Stone Gargoyle',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Armor +4: Body of stone..\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Stone gargoyles are immune to fear and Intimidation.\nBite/Claws: Str+d6.\nCamouflage: Stone gargoyles receive +2 to Stealth rolls to blend in with normal, decorative gargoyles on buildings.\nFlight: Furies have a Flying Pace of 10" and a Climb of 4".\nPlunge: Gargoyles can literally drop like a rock. Any gargoyle that falls at least 4" to attack may add +4 to its damage.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Most gargoyles are lifeless statues used to impress or decorate, but some have been given magical life to serve as guardians. Whether they serve good or evil depends upon their controller\'s whim.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '3',
		parry: '7',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p118-p119'
	}
);
	// Stone Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 101,
		name: {
			'en-US' : 'Stone Golem',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Armor +4: Magically hardened stone.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nSize +1: Stone golems stand over 8\' high and weigh 4,000 pounds.\nStone Fists: Str+d6\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nStone golems are the traditional animated statue. As with most golems, they are shaped in the form of warriors and serve as guardians.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://4.bp.blogspot.com/-OM8U5jk53ao/TlqKIELs8qI/AAAAAAAAAKQ/QKcOvwxuTRk/s1600/stonegolem.jpg',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '13',
		armor: '4',
		book: 2,
		page: 'p124'
	}
);
	// Straw Golem
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 102,
		name: {
			'en-US' : 'Straw Golem',
		},
		gear: {
			'en-US' : 'Pitchfork (Str+d6, Reach 1, requires 2 hands) or scythe (Str+d10, -1 Parry, requires 2 hands)',
		},
		treasure: {
			'en-US' : 'None.',
		},
		abilities: {
			'en-US' : 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nWeaknes (Fire): Straw golems take double damage from fire.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem\'s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nStraw golems are most often designed to resemble scarecrows. As well as scaring off birds and natural predators such as wolves, they can bolster a village\'s militia in times of invasion.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.entertainmentearth.com/images/AUTOIMAGES/MS019lg.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p124'
	}
);
	// Succubus/Incubus
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 67,
		name: {
			'en-US' : 'Succubus/Incubus',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nLife Drain: These foul creatures have more than one way to kill. If a succubus or incubus kisses a victim, they must make a Vigor roll opposed by the demon\'s Spirit or lose one die of Vigor. If Vigor drops to zero, the demon has sucked out the victim\'s life force, killing him. Assuming the victim survives, lost Vigor returns at the rate of one die per day.\nLure: Sometimes good looks aren\'t enough to lure prey to their doom. These demons can use the puppet power using their Spirit as their arcane skill. They have 20 Power Points for this purpose.\nVery Attractive: Succubi and Incubi resemble stunningly beautiful creatures in their illusory form. They can assume the shape of any sentient being. Their illusory appearance gives them +6 Charisma. A detect arcana spell can penetrate the illusion.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.\n',
		},
		tags: {
			'en-US' : 'demon,devil,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Succubi and incubi resemble beautiful females and males respectively. This form is illusory, however, and in their natural form they are winged demons with grotesque faces, leathery skin, and long claws. They use their illusory looks to lure unsuspecting victims into their deadly embrace.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d12+2"}}',
		wildcard: 0,
		image: 'http://blaine.org/sevenimpossiblethings/wp-content/uploads/2009/08/incubus.jpg',
		charisma: '+6',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p111-p112'
	}
);
	// Thief
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 168,
		name: {
			'en-US' : 'Thief',
		},
		gear: {
			'en-US' : 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager, Worthwhile in lair',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Thief',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves\' guilds are often excellent sources of information-if you can find them.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_LOCKPICKING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_STREETWISE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p147'
	}
);
	// Toad, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 170,
		name: {
			'en-US' : 'Toad, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Bite: Str+d6\nEngulf: Giant toads can swallow prey as large as Size +2 whole. While engulfed, the target is grappled as per the core rulebook with a -4 penalty to Strength rolls to escape and suffers 2d6 damage per round from digestive juices. Armor offers no protection\nLarge: Attackers are +2 to attack rolls against the toad due to its size.\nSize+4: Giant toads weigh over 4000 pounds.\nTongue: Reach 3. The tongue is coated in sticky saliva. If the toad scores a success on its Fighting roll, it has grappled its prey. Unless the foe can escape, it Engulfs him on its next action. On a raise, the victim is grappled and Engulfed in the same action.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant toads are monstrous, bloated amphibians, capable of swallowing a riding horse in one gulp.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p148'
	}
);
	// Town/Village Militia
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 174,
		name: {
			'en-US' : 'Town/Village Militia',
		},
		gear: {
			'en-US' : 'Leather (+1), short sword (Str+d6), dagger (Str+d4), some use slings (Range: 4/8/12, Damage: Str+d4)',
		},
		treasure: {
			'en-US' : 'Meager for every 5 soldiers',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'guard,police,guards,soldier,soldiers,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Militia are employed in smaller towns and in large villages. Though they are tasked with defending the area in case of emergency, it isn\'t their primary job, and they are not particularly skilled.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d4"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://wiki.totalwar.com/images/e/e5/Ven_pike_militia_info.png',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p149'
	}
);
	// Tree Man Sapling
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 175,
		name: {
			'en-US' : 'Tree Man Sapling',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick Bark\nCamouflage: When a tree man isn\'t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls.\nLashing Branches: Str+d10, Reach 3.\nHuge: Characters add +4 when attacking a tree man because of its great size.\nImproved Sweep: May attack all adjacent foes.\nPowers: Tree men are lords of the forest. They have 10 Power Points and know beast friend and entangle.\nSize +6: Tree men are over 50\' tall\nWeakness (Fire): Fire-based attacks do +2 damage and the chance of catching alight is 5-6 on a d6.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '15',
		armor: '2',
		book: 2,
		page: 'p149'
	}
);
	// Troll
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 177,
		name: {
			'en-US' : 'Troll',
		},
		gear: {
			'en-US' : 'Spiked clubs (Str+d8)',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Armor +1: Rubbery hide\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +2: Trolls are tall, lanky creatures over 8\' tall.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Trolls in myths and legends were horrid, flesh-eating creatures who lived in deep woods, beneath bridges, or in hidden mountain caves. In modern games and fiction, the ability to regenerate damage and a weakness to fire have been added. These statistics reflect both backgrounds.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// Typical Ranger
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 156,
		name: {
			'en-US' : 'Typical Ranger',
		},
		gear: {
			'en-US' : 'Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Beast Master, Woodsman',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p143'
	}
);
	// Tyrannosaurus Rex
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 181,
		name: {
			'en-US' : 'Tyrannosaurus Rex',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick hide\nBite: Str+d8; AP 2.\nLarge: Creatures add +2 when attacking a T-rex due to their great size.\nRoar: As an action a T-rex can emit a terrifying roar. All those who hear the roar-typically anyone within a mile- must make a Spirit roll or be Shaken.\nSize +7: These fearsome creatures stand 30\' tall and weigh over 20,000 pounds.\n',
		},
		tags: {
			'en-US' : 'dinosaur,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'King of the dinosaurs, the T-rex is a deadly predator, capable of taking on prey much larger than itself. T-rex are poorly suited for mountainous and dense forest terrain, and can most often be found in hilly areas or on plains, where they hunt large herbivores.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d8","strength":"d12+4","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.rareresource.com/photos/dinosaur-gallery/tyrannosaurus-rex.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '15',
		armor: '2',
		book: 2,
		page: 'p151'
	}
);
	// Unicorn
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 182,
		name: {
			'en-US' : 'Unicorn',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Fleet Footed: Unicorns roll a d10 for their running die, rather than a d6.\nForce of Good: Unicorns add +2 to damage when attacking supernatural evil foes, and have +2 Toughness when suffering damage from such creatures.\nHealing: A unicorn can cast healing and greater healing by touching its horn to a target. It has 40 Power Points. A horn cut from a living unicorn retains these powers. Anyone performing such a foul deed is cursed by the gods of good. The victim\'s skin becomes covered in boils and blisters which no magic can heal. He suffers -4 Charisma.\nKick: Str+d6\nSize +2: Unicorns weigh between 600 and 800 pounds.\n',
		},
		tags: {
			'en-US' : 'scotland,scottish,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Often seen as the embodiment of good and purity, unicorns are white horses with a horn growing from their forehead. The horn is said to possess magical properties, which makes them a target for unscrupulous hunters. A unicorn that loses its horn while still alive instantly dies.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d10","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d12"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '5',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p151'
	}
);
	// Velociraptor
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 183,
		name: {
			'en-US' : 'Velociraptor',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Armor +2: Velociraptors have thick scaly hides.\nBite or Rake: Str+d8\nSize +1: Velociraptors are about 7\' tall.\n',
		},
		tags: {
			'en-US' : 'dinosaur,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These smart, bipedal dinosaurs are pack hunters, and use remarkably well-developed tactics. True velociraptors were the size of turkeys-the larger variety made famous in the movies are actually dinonychus, a related species.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://velociraptorinmycloset.webstarts.com/uploads/43245373-velociraptors.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '2',
		book: 2,
		page: 'p152'
	}
);
	// Veteran Knight
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 117,
		name: {
			'en-US' : 'Veteran Knight',
		},
		gear: {
			'en-US' : 'Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
		},
		treasure: {
			'en-US' : 'Worthwhile, Treasure trove in castle',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Command, Noble',
		},
		hindrances: {
			'en-US' : 'Code of Honor',
		},
		blurb: {
			'en-US' : 'Knights are the fantasy equivalent of tanks-heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.\nThese knights are the elite of a kingdom, having survived several battles. Most own a small castle and control 100 soldiers.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '10',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// Veteran Ranger
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 157,
		name: {
			'en-US' : 'Veteran Ranger',
		},
		gear: {
			'en-US' : 'Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Beast Master, Combat Reflexes, Steady Hands, Woodsman',
		},
		hindrances: {
			'en-US' : 'Various',
		},
		blurb: {
			'en-US' : 'Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_RIDING":{"value":"d6"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d10"},"SKILL_TRACKING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p144'
	}
);
	// Veteran Watch
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 172,
		name: {
			'en-US' : 'Veteran Watch',
		},
		gear: {
			'en-US' : 'Corselet (+3), chain arms and legs (+2), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)',
		},
		treasure: {
			'en-US' : 'Meager',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'guard,police,guards,soldier,soldiers,',
		},
		edges: {
			'en-US' : 'Combat Reflexes',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These fellows are well-trained, well- equipped, and well-led. They are veterans of many scrapes and know how to handle themselves.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://blogs-images.forbes.com/erikkain/files/2012/05/holy-grail-guard.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p148'
	}
);
	// War tree
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 184,
		name: {
			'en-US' : 'War tree',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +4: Thick bark.\nBranch Swipe: Str+d6, Reach 1.\nHuge: Attackers are +4 to attack rolls against a war tree due to its siz\nPlant: Plants are not subject to Fear and Tests of Will.\nSize +8: An average war tree is over 40\' tall.\nStomp: Str+d10. The creature is naturally adept at using its full weight to smash its foes. Nonrigid armor (leather, chain mail) offers no protection against the stomp.\nSweep: A war tree can attack all adjacent opponents at no penalty.\nWeakness (Fire): Fire attacks cause +4 damage.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'War trees are regular trees animated through dryad or special elven magic. They are not sentient, but possess animal-like intelligence.\n',
		},
		attributes: '{"agility":"d4","smarts":"d4 (A)","spirit":"d10","strength":"d12+6","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '19',
		armor: '4',
		book: 2,
		page: 'p152'
	}
);
	// Watch
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 171,
		name: {
			'en-US' : 'Watch',
		},
		gear: {
			'en-US' : 'Chain mail (+2), long sword (Str+d8), open helm (+3), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)',
		},
		treasure: {
			'en-US' : 'Meager for every 3 soldiers',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'guard,police,guards,soldier,soldiers,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The watch are charged with maintaining law and order within the settlement and defending it in time of attack. Depending on the settlement, the watch may be a full-time professional body led by officers or local farmers.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.oocities.org/televisioncity/4766/film/hg/frenchsn.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '2',
		book: 2,
		page: 'p148'
	}
);
	// Watch Captain
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 173,
		name: {
			'en-US' : 'Watch Captain',
		},
		gear: {
			'en-US' : 'Corselet (+3), plate arms and legs (+3), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry)',
		},
		treasure: {
			'en-US' : 'Worthwhile',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : 'guard,police,guards,soldier,soldiers,',
		},
		edges: {
			'en-US' : 'Block, Combat Reflexes, Command',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Captains command a squad of town or city guards and answer only to the ruling authority.',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: 'http://rs264.pbsrc.com/albums/ii174/Alowhakid/1265385946003.gif~c200',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p149'
	}
);
	// Water Elemental
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 78,
		name: {
			'en-US' : 'Water Elemental',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Aquatic: Pace 12\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Water elementals are immune to all non-magical attacks except fire. A torch or lantern causes them 1d6 damage but is instantly put out if it hits.\nSeep: Water elementals can squeeze through any porous gap as if it were Difficult Ground.\nSlam: Str+d6; nonleathal damage.\nWaterspout: Water spirits can project a torrent of water using the Cone Template. Those in the area may make an Agility roll opposed by the spirit\'s Shooting to avoid it or suffer 2d8 nonlethal damage. This puts out any normal fires.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nWater spirits are frothing, man-shaped creatures of water and sea-foam.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SWIMMING":{"value":"d12+2"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p116-117'
	}
);
	// Werebear
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 185,
		name: {
			'en-US' : 'Werebear',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Meager, in lair',
		},
		abilities: {
			'en-US' : 'Bear Hug: A werebear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the hug on his action, which requires a raise on an opposed Strength roll.\nBite/Claws: Str+d8\nInfection: Anyone slain by a has a 50% chance of rising as a werebear themselves. The character involuntarily transforms every full moon. He gains control of his lycanthropy only after 1d6 years as a wearbear.\nImmunity: Werecreatures cannot be wounded by weapons that are not silver, only Shaken\nLow Light Vision: Werebears ignore penalties for Dim and Dark lighting.\nSize +2: These creatures stand up to 8\' tall and weigh over 1000 pounds each.\nWeakness (Silver): Wearbears suffer normal damage from silver weapons.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Whereas werewolves take delight in using their powers to kill, werebears are generally more refrained. Even in human form, werebears prefer to stay far from civilization. Good werebears, and they do exist, often help elves and rangers patrol the wilderness. Those of evil nature revel in their dark powers, however.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d12+6","vigor":"d12+2"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12+2"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d12"},"SKILL_SWIMMING":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '9',
		toughness: '11',
		armor: '0',
		book: 2,
		page: 'p153'
	}
);
	// Wight
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 186,
		name: {
			'en-US' : 'Wight',
		},
		gear: {
			'en-US' : 'Ancient bronze breastplate (+3), bronze long sword (Str+d8)',
		},
		treasure: {
			'en-US' : 'Rich, in lair',
		},
		abilities: {
			'en-US' : 'Armor +1: Leathery Skin\nBony Claws: Str+d4\nFear -1: Anyone who sees a wight must make a Fear check at -1.\nFearless: Wights are immune to Fear and Intimidation.\nPoison: Wights\' claws deliver a powerful neurotoxin. A character clawed by a wight must make a Vigor roll at -2. With success, the character gets the "shakes," suffering -1 to all trait rolls for 24 hours. On a failure, the victim becomes immediately Incapacitated and dies in 2d6 rounds unless treated. A successful Healing roll at -2 prevents this.\nQuick: Wights redraw action cards less than 5.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Wights are restless dead, most often noble lords whose greed and earthly desires cause their spirits to remain behind to guard their treasures.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p153'
	}
);
	// Will-o-the-Wisp
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 187,
		name: {
			'en-US' : 'Will-o-the-Wisp',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Charm: By swaying from side to side and pulsating, wisps can charm prey into following them. This requires a Spirit roll opposed by the victim\'s Smarts. If the victim ever loses sight of the wisp, the charm is broken.\nSize -2: Wisps measure 1\' in diameter.\nSmall: Attackers are -2 to attack wisps because of their size.\n',
		},
		tags: {
			'en-US' : 'willowisp,will-o-wisp,marsh,phantom,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Also known as marsh phantoms and ghost lanterns, wisps are malicious spirits resembling glowing balls of light. They captivate victims with their lights, then lead them into quicksand or the lairs of dangerous beasts. They have no combat capabilities and so try to remain a safe distance from their prey.\n',
		},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_NOTICE":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '2',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p153'
	}
);
	// Woolly Mammoth
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 127,
		name: {
			'en-US' : 'Woolly Mammoth',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick hide and fur.\nImmunity (Cold): Mammoths take no damage from cold, including magical attacks.\nLarge: Attackers have +2 to attack rolls against these beasts due to their size\nSize +6: Mammoths weigh over 5,000 pounds.\nTrample: Str.\nTusks: Str+d6\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+6","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '16',
		armor: '2',
		book: 2,
		page: 'p133'
	}
);
	// Wyvern
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 188,
		name: {
			'en-US' : 'Wyvern',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'Worthwhile, in lair',
		},
		abilities: {
			'en-US' : 'Armor +2: Thick Scales\nBite/Sting: Str+d6, Reach 1\nImproved Frenzy: Wyverns may make a bite and sting attack in the same round at no penalty.\nPoison: Anyone Shaken or wounded by a sting attack must make a Vigor roll at -2 or be paralyzed for 1d6 rounds.\nQuick: Wyverns move with exceptional speed. They redraw action cards of 5 or lower.\nSize +3: Wyverns weigh around 1500 points\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Wyverns resemble small, two-legged dragons. They have no fiery breath, but possess long necks, sharp teeth, and a poisonous sting in their tail. Some wyverns have wings (Flight: 6"; Climb 3").\n',
		},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '2',
		book: 2,
		page: 'p153'
	}
);
	// Zombie
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 189,
		name: {
			'en-US' : 'Zombie',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4\nFearless: Zombies are immune to Fear and Intimidation.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie\'s head are +2 damage.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These walking dead are typical groaning fiends looking for fresh meat.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);
	// Zombie Bear
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 190,
		name: {
			'en-US' : 'Zombie Bear',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Bear Hug: Bears don\'t actually "hug" their victims, but they do attempt to use their weight to pin their prey and rend it with their claws and teeth. A bear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the "hug" on his action, which requires a raise on an opposed Strength roll.\nClaws: Str+d6\nSize+2: These creatures stand up to 8\' tall and weigh over 1000 pounds each.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie\'s head are +2 damage.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d8","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);
	// Zombie Giant Spider
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 191,
		name: {
			'en-US' : 'Zombie Giant Spider',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : 'None',
		},
		abilities: {
			'en-US' : 'Bite: Str+d4\nPoison(-4): The bite of the spider causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds.\nWebbing: Spiders can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at -4.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie\'s head are +2 damage.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline.\n',
		},
		attributes: '{"agility":"d10","smarts":"d4(A)","spirit":"d6","strength":"d10","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d12+2"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);




/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsExtrasDatabase) == "undefined")
		var savageWorldsExtrasDatabase = Array();

	if(typeof(savageWorldsExtrasBooksList) == "undefined")
		var savageWorldsExtrasBooksList = Array();

	var currentBook = get_book_by_id(3);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// Acolyte
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 205,
		name: {
			'en-US' : 'Acolyte',
		},
		gear: {
			'en-US' : '[{"name":"Armor +2","description":"In a fantasy setting, acolytes usually wear medium-weight armor, such as chain mail. In a more modern setting, they\'ll wear only their ceremonial robes."},{"name":"Weapons","description":"Acolytes typically carry swords, clubs, or maces; these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)"}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Religion"}},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d4"}}',
		wildcard: 0,
		image: 'http://www.arkhamdrive-in.com/Graphics/Stills/SP12-cultists.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 3,
		page: ''
	}
);
	// Acolyte, Cultist
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 206,
		name: {
			'en-US' : 'Acolyte, Cultist',
		},
		gear: {
			'en-US' : '[{"name":"Armor +2","description":"In a fantasy setting, acolytes usually wear medium-weight armor, such as chain mail. In a more modern setting, they\'ll wear only their ceremonial robes."},{"name":"Weapons","description":"Acolytes typically carry swords, clubs, or maces; these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)"}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fervor: Cultists can whip themselves up into a religious fervor. This takes a Spirit roll and a normal action. Once in this frenzy, they get a +2 to all Fighting and Guts rolls, and a -2 to any Smarts, Shooting, or Notice rolls. This fervor lasts until the combat ends.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Religion"}},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d4"}}',
		wildcard: 0,
		image: 'http://th08.deviantart.net/fs71/PRE/i/2012/316/5/a/cthulhu_cultist___lucca_comics_and_games_2012_by_cookingmaru-d5kra97.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 3,
		page: ''
	}
);
	// Ama-No-Jaku
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 192,
		name: {
			'en-US' : 'Ama-No-Jaku',
		},
		gear: {
			'en-US' : 'The demons prefer to lure victims into death traps (see below), but also take great delight in slashing with nasty (often infected) knives and retreating into the shadows (see Hit-and-Run, below).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blur: Ama-no-jaku move with supernatural speed. Physical attacks against them are made at -4.\nDefender: Some ama-no-jaku keep their most deluded victims nearby as guardians when working with more observant groups. Such a person is typically an ordinary man or woman who has been tricked into believing the demon is the ghost of a child, a friendly spirit, etc, and that any new intruders wish it harm.\nHit-And-Run: Ama-no-jaku are experts at using their preternatural speed to run at a victim\'s blind-side, slash at his lower extremities, and then retreat before he can react. In most situations, the ama-no-jaku can only be hit by a victim who was on Hold. In situations where this isn\'t possible, the ama-no-jaku typically retreats.\nTraps: Ama-no-jaku take great delight into luring their victims into numerous traps they\'ve placed around their lairs. Anytime a character draws a black card in combat, on his action he must make an opposed roll of Smarts versus the ama-no-jaku\'s Taunt. If the creature wins, the character is maneuvered into a trap. He loses his turn and consults the Traps Table at left (p54)\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Translating roughly as "imp of heaven," ama-no-jaku are small demons found in Japan that tempt and provoke mischief into mortals. They often do this by pretending to be something they\'re not-such as a human child or a beneficent spirit.\nAma-no-jaku (sometimes amanojaku) do not have a magical power to obscure their looks, so they must wear natural disguises, such as shrouds or the skin of their victims.\n',
		},
		attributes: '{"agility":"d10","smarts":"d10","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Disguise"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d12"},"SKILL_STEALTH":{"value":"d10"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 3,
		page: 'p53-p54'
	}
);
	// Aswang
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 193,
		name: {
			'en-US' : 'Aswang',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blood Drain: An aswang scoring a raise on its Fighting roll has grappled its victim and impaled him with her long, hollow tongue. Each round the victim remains impaled, he suffers a Fatigue level until he dies. If the grapple is broken, the tongue is withdrawn. An ally may also attempt to sever the tongue (Toughness 3), but with a roll of 1 on the Fighting die hits the struggling victim instead.\nShadow Lick: A person whose shadow is licked by an aswang is cursed. The aswang must make a Touch Attack (+2). On a success, the victim loses all his Bennies and cannot earn any more during the session. Non-Wild Card characters must make a Spirit roll or suffer a terrible accident sometime within the next 24 hours that usually results in death.\nTongue: Str+d4, Reach 2\nWeakness (Dawn): An aswang automatically returns to its human form at ?the first ray of dawn.\nWeakness (Garlic): An aswang must make a Spirit roll to attack anyone carrying garlic.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'An aswang is a vampire-like creature from the Philippines. By day it assumes the form of a beautiful female and lives a normal human life, even marrying and having children. By night, however, it becomes a bloodsucking fiend. It uses its immensely long, hollow tongue to siphon blood, preferring to project it down through cracks in the roof rather than enter buildings. Unlike most vampires, however, the aswang is not undead.\nFor its human form, use the Innocent Victim stats (see page 117) but add the Very Attractive Edge. The stats below are for its vampiric form.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: 'p54-55'
	}
);
	// Banshee
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 194,
		name: {
			'en-US' : 'Banshee',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4\nScream: Once per night, and again anytime a banshee draws a Joker in combat, it may elicit the banshee\'s trademark scream. Anyone within 12" (24 yards) must make a Spirit roll or die. Those who are successful automatically lose one point of Sanity and are Shaken.\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Banshees are feminine horrors who take one of three forms-a young maiden, a matron-like figure, or an old crone. All dress in either a dark, hooded cloak or a funeral shroud. Their long nails may be able to tear through flesh, but their most feared power is their terrible scream, which can drive a man mad or even kill him.\nA variant of the banshee, known as the "washer woman" comes in the form of a cloaked figure washing blood-stained clothes. According to legend, these are the garments of those about to die from her wailing.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 3,
		page: 'p55'
	}
);
	// Barrow Dweller
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 195,
		name: {
			'en-US' : 'Barrow Dweller',
		},
		gear: {
			'en-US' : 'Ancient bronze breastplate (+3), bronze long sword (Str+d8).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bony Claws: Str+d4\nBound: A barrow dweller may not move further than 50" (100 yards) from its burial place.\nFear(-2): Anyone seeing the creature must make a Fear test at -2.\nNumbing Touch: Any creature touched by a barrow dweller must make a Vigor roll. On a failure, the victim suffers a cumulative -1 penalty to Agility roll and skills.\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\nWeakness (Sunlight): Barrow dwellers are weakened by the sun. Each round in sunlight, they must make a Vigor roll or become Exhausted.\n',
		},
		tags: {
			'en-US' : 'wights,wight,undead,hagbui,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Also known as wights and hagbui (literally "barrow dweller"), these undead are the corporeal remains of kings and heroes buried in ages past. They are common in northern Europe, especially areas the Vikings settled. Their form is that of a mummified corpse with tight, leathery skin drawn over wasted muscles. Their eyes burn with a pale, cold light. Although barrow dwellers can speak, they only speak languages known to them in the era they died. Their tombs are brimming with treasure, and they intend to ensure it remains that way for eternity.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '3',
		book: 3,
		page: 'p55-56'
	}
);
	// Bat, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 196,
		name: {
			'en-US' : 'Bat, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str\nEcho Location: Giant bats suffer no penalties for bad lighting, even in Pitch Darkness.\nFlying: Pace 8, Climb -2.\nSize -1: Giant bats are about the size of medium dogs in the body, and have 9\' long wingspans.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant bats are usually found in groups of 2d6 members. They are rarely aggressive unless provoked in their lair or under the control of some nefarious master.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 3,
		page: 'p56'
	}
);
	// Black Tree
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 201,
		name: {
			'en-US' : 'Black Tree',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor +3: Thick bark\nBranches: Str+d6. Reach 1. A black tree has four branches and may use them all each round with no multi-action penalty. Only two branches may be used to attack a single foe, however.\nEntangle: The tree\'s lesser branches and roots attempt to trip and entangle its attackers. Everyone within a Large Burst Template centered on the tree is affected by a constant entangle as if cast with a raise.\nFear: Anyone seeing the creature must make a Fear check.\nHuge: Attackers add +4 to attack rolls against a black tree because of its size.\nImpale: A raise on the thing\'s Fighting roll impales its foe on a sharp branch. Each round thereafter, the victim must make a Vigor roll or suffer a level of Fatigue as the black tree drains his blood. Victims may escape as if breaking a grapple. Lost Fatigue recovers at the rate of one level per 24 hours.\nResistance (Piercing Weapons): A black tree suffers half damage from piercing attacks, such as gunshots.\nSize+8: Black trees stand up to 50\' high.\nSticky Sap: An attacker who strikes a black tree with a melee weapon finds his weapon stuck to the sap. On his next action, he must make a Strength roll at -2 to free his weapon. With success, he frees the weapon but it takes the entire round. With a raise, he frees the weapon and may still perform other actions this round. The same is true if a character touches the tree.\nWakness (Fire): A black wood suffers +4 damage from fire attacks.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Black trees are malevolent creatures found in clusters within ancient and dark forests. Some are formed by desecration of old burial grounds, some are possessed by spirits or demons, and others exist where chemical dumping has corrupted the land.\nThey resemble standard trees, but their bark is black, and sticky red sap oozes from gaps in the bark. Most have "facial" features, formed from knots and twists in the wood.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4(A)","spirit":"d10","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '19',
		armor: '3',
		book: 3,
		page: 'p59-60'
	}
);
	// Blob
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 202,
		name: {
			'en-US' : 'Blob',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blob: +2 to recover from being Shaken; No wound penalties; Immune to poison and disease.\nEngulf: A blob may make a grapple attack against every creature under its template (see below). On a success, it has engulfed its foe. Each round the grapple is maintained thereafter, the victim suffers 2d4 damage. Victims reaching Death are absorbed and add to the blob\'s bulk.\nFear: Anyone seeing the creature must make a Fear check.\nMindless: Immune to Fear and Tests of Will.\nVariable Size: The blob begins as a Small Burst Template (Size +2). For each victim it absorbs, it grows 1" and adds +1 Size (and Toughness), with no limit.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'A blob is basically an amorphous mass of acidic jelly with an insatiable hunger. It might be an alien entity brought to Earth on a crashed satellite, a creature from another dimension, or the result of pollution.\n',
		},
		attributes: '{"agility":"d4","smarts":"d4(A)","spirit":"d12","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 3,
		page: 'p60'
	}
);
	// Blood Mist
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 203,
		name: {
			'en-US' : 'Blood Mist',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Immunity: Blood mists suffer no damage from mundane attacks. Magic items, weapons, and supernatural powers affect them normally. They can be temporarily driven off by tactics such as sucking them into a vent, intense heat, or pelting them with a strong stream of water. Such tactics typically scatter the mist for 1d10 minutes.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The destruction of an ancient vampire\'s physical body isn\'t necessarily the end of its existence. Through dark magic, they can be brought back into existence as near-mindless, ethereal clouds of vapor with an insatiable bloodlust by those who know the proper rituals.\nBlood mists appear as grey clouds until they feed, then change to pink to dark red as they consume more blood. Their preferred tactic is to mingle with natural mist, allowing them to approach unsuspecting victims with ease.\nBlood mists are Swarms (see Savage Worlds). Their attack is a blood drain, so targets in completely sealed suits remain immune as usual.\nBlood mists have typical statistics for Swarms, and the following Special Ability:\n',
		},
		attributes: '',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '0',
		armor: '0',
		book: 3,
		page: 'p60'
	}
);
	// Cat, Small
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 204,
		name: {
			'en-US' : 'Cat, Small',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Acrobat: +2 to Agility rolls to perform acrobatic maneuvers; +1 to Parry if unencumbered.\nBite/Claw: Str\nLow Light Vision: Cats ignore penalties for Dim and Dark lighting.\nSize -2: Cats are typically less than a foot high.\nSmall: Attackers subtract 2 from their attacks to hit.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'This is an ordinary house cat, the sort that might be a familiar for a spellcaster, a Beast Master\'s animal friend, or an alternate form for the shape change power.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6(A)","spirit":"d10","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '3',
		toughness: '3',
		armor: '0',
		book: 3,
		page: 'p60-61'
	}
);
	// Corpse Worm Swarm
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 216,
		name: {
			'en-US' : 'Corpse Worm Swarm',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Devour: A paralyzed victim begins to be devoured from within. He suffers one wound per hour that can only be stopped by magic or ingesting a full pound of salt (a Vigor roll at -4). This dehydrates the worms like slugs and they die inside the body.\nParalysis: Anyone Shaken or wounded by a corpse worm swarm must make a Vigor roll or be paralyzed for 2d6 rounds.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Corpse worms are one-inch long red worms with a taste for  esh and a paralyzing bite. Although they usually feed on carcasses, they are partial to warm, living tissue. While an individual worm poses little threat to a healthy human, a swarm can render a man incapable of defending himself very quickly.\nCorpse worm swarms  ll a Medium Burst Template and cannot Split. They also have the following Special Abilities:',
		},
		attributes: '{"agility":"","smarts":"","spirit":"","strength":"","vigor":""}',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '0',
		armor: '0',
		book: 3,
		page: 'p62'
	}
);
	// Creeping Hand
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 217,
		name: {
			'en-US' : 'Creeping Hand',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Scuttle: Creeping hands roll a d4 running die, instead of a d6.\nSize -2: Creeping hands are small creatures.\nSmall: Attackers suffer a -2 penalty to attack a creeping hand due to its size.\nThrottle: A creeping hand scoring a raise on a Fighting attack has grabbed its opponent\'s throat. Starting immediately after the throttle begins, roll the hand\'s Strength versus the victim\'s Vigor. If the hand is successful, it causes Fatigue. This continues each round until the victim is dead or succeeds in an opposed Strength roll to remove it. Fatigue caused by a hand fades every 24 hours.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Creeping hands are severed hands given animation by some arcane process. Three different varieties have been recorded, though all share the same traits.\nThe first are those of murderers. In this instance, the hand somehow reanimates after death and sets out on a murderous spree.\nThe second belong to sorcerers who have learned how to detach their hands and send them to perform errands. Not all of these are necessarily evil.\nThe third sort are vengeful creatures, usually belonging to accident victims who have had their hands severed but seek revenge. The hand seems to take on a will of its own, carrying out a terrible revenge on those who wronged their former owner.',
		},
		attributes: '{"agility":"d10","smarts":"d6 (A)","spirit":"d10","strength":"d12+2","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '4',
		armor: '0',
		book: 3,
		page: 'p62'
	}
);
	// Damned Children
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 207,
		name: {
			'en-US' : 'Damned Children',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fear: When using their Mind Control power, the eyes of the Damned glow eerily; anyone seeing this happen must make a Guts check.\nKnow it All: Constant use of their Mind Reading power gives the Damned an almost encyclopedic knowledge of Earth lore. Treat all but the most rarified information as Common Knowledge for them.\nMind Control: The Damned can use the Puppet power at will, and get a +2 to their Spirit rolls when doing so.\nMind Link: The Damned are typically inserted on to Earth in packs of up to a dozen. These packs are in constant mental contact with each other, allowing them to share information instantaneously with each other: when one of them learns something, they all learn it. There is a drawback: if one of them becomes Shaken, the rest of them do, too. (This doesn\'t extend to Wounds, though!)\nMind Reading: By making an opposed Spirit roll against a target, the Damned can read their mind. With a normal success, they can scan surface thoughts; subsequent raises allow them to scan deeper.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : 'Small; Level Headed',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These are human children who have been genetically manipulated by the Grays either pre-conception or in utero. From birth there\'s no question that they\'re somehow... different. The Damned often serve as advance scouts for the alien invaders. They\'re all born with blonde hair and blue eyes.',
		},
		attributes: '{"agility":"d6","smarts":"d10","spirit":"d10","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Alien Science"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_REPAIR":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 1,
		image: 'http://2.bp.blogspot.com/-LL_YJa5gGNI/UCvzRkO2XmI/AAAAAAAAG0M/yWrnZzB8YXY/s400/damned.jpg',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '4',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Dark Stalker
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 208,
		name: {
			'en-US' : 'Dark Stalker',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor: Dark stalkers have thick spiny hides.\nBite: Str + d8\nCharge: Dark stalkers charge on their first round of attack, gaining +4 to hit and damageas they scramble down from their hidings.\nSize: -1\nWall Walking: Dark stalkers can climb walls with great skill at their normal Pace, though they cannot hang upside down.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dark stalkers are small insectoid aliens that hang on the shadowy sides of ceilings, waiting for unsuspecting victims to pass below. When they spot prey, they race down from their hidings, and strike with lightning speed. Their prey almost never sees them coming before it\'s too late.\nBefore they strike, dark stalkers are almost totally silent. They emit an evil hissing sound when fighting that sounds almost like a riled serpent.\n',
		},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_GUTS":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Grays
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 209,
		name: {
			'en-US' : 'Grays',
		},
		gear: {
			'en-US' : '[{"name":"Hypodermic","description":"Str+d4. These are foot-long and wickedly barbed. If the Gray hits with a raise, the extra damage inflicted is caused by blood and other fluids (and sometimes solids!) being extracted from the target. Damage from a hypo is incredibly painful; those Shaken by one are at a -2 to their Spirit roll to recover."},{"name":"Implants","description":"These are small bits of metal implanted into victim during their time with the Grays. They allow the aliens to track the victim anywhere on Earth; they also transmit fear, pain, and feelings of paranoia and isolation back to the Grays for distillation."},{"name":"Probes","description":"These aren\'t used for gathering information, but for inflicting pain. They allow the Grays to torture a victim for days (or longer) without doing any permanent damage to them."}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Alien Intellect: Grays get +2 to any Smarts based opposed rolls against normal humans; their thought patterns are unpredictable, at best.\nFear: \nGarmonbozia: Grays gain power and sustenance from the pain and suffering of others. When injected into themselves, it both removes any Wounds they have and boosts their Agility and Strength to d10 for one hour. When injected into a human, they suffer incredible agony. They must make a Vigor roll at -2 immediately to avoid being Shaken. They must continue to make Vigor rolls every round for 3 +1d6 rounds or take a level of Fatigue and become Shaken again if they\'ve recovered. If reduced to Incapacitated by Fatigue, any additional Fatigue levels become Wounds instead.\nImmunity: Grays are immune to the mental powers of the Damned Children and Nordics.\nMind Wipe: Grays can wipe an individuals memories, up to 48 hours worth, with an opposed Smarts roll. The memories aren\'t really gone, though, just deeply suppressed. They still surface in the form of dreams and hallucinations, and can be recovered through extensive hypnotherapy.\nParalysis: Grays can induce paralysis in humans with their minds. Make an opposed Spirit roll; if the Gray wins, the target can\'t move for 3 rounds. Each Gray that acts in concert to hold the victim doubles the duration (6 rounds with 2 Grays, 12 rounds with 3, etc.); use the Cooperative Roll rules to have them assist. Engaging the paralysis counts as an action for the Grays, but maintaining it does not.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These beings generally appear to be your archetypal aliens: gray skinned, tall and spindly, with huge black eyes and small slits for mouths, though they can take on other forms. These particular aliens do not come in peace.\nThey utilize a bizarre mixture of super-science and mysticism which to a large degree has baffled Earth scientists. More recently, they have completed development of the technology to distill pain and fear from Earth creatures as a source of techno-occult power. (Hence the rise in horrifying abductions and cattle mutilations.) At some point their supply of such power will reach critical mass; what happens then is up to you, but it certainly won\'t be anything good... The Grays find combat distasteful, and allow their servants to handle it for them.\n',
		},
		attributes: '{"agility":"d8","smarts":"d12","spirit":"d10","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Torture"}},"SKILL_NOTICE":{"value":"d10"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 1,
		image: 'http://www.coasttocoastam.com/cimages/var/ezwebin_site/storage/images/coast-to-coast/repository/photos/gray-alien-digital-sculpture/544100-1-eng-US/Gray-Alien-Digital-Sculpture_photo_medium.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Men in Black
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 210,
		name: {
			'en-US' : 'Men in Black',
		},
		gear: {
			'en-US' : '[{"name":"Vehicle - Edsel","description":"What\'s weirder than the MiB\'s driving Edsels? The fact that they look like they just drove off of the assembly line. A careful examination under the hood reveals that although the engine appears normal at first glance, it\'s put together completely wrong, and could never actually run... They\'re identical to Sports Cars (see SW:DE page 49)."},{"name":"Guns","description":"These are functionally identical to a Colt.45, and look approximately like one as well. Like their Edsels, if the inner workings are examined, there\'s no way these weapons should be able to actually fire."}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Unshakable: MiB\'s ignore all Wound penalties and are never Shaken by attacks.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'There is considerable speculation on who these agents really work for; is it the Grays? Are they part of a government black op? Someone else, someone we haven\'t seen yet? Or do they work for no one but themselves, serving an agenda we can\'t hope to understand? Men in Black are known to appear wherever a great deal of psychic/supernatural activity has occurred, or is about to occur. They look more or less normal, but their features are uneven, and their voices project down into deep subharmonics. Their behavior is erratic, at best.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Alien Technology"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Nordic
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 211,
		name: {
			'en-US' : 'Nordic',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Know it All: Having grown up constantly reading the minds of those around them, the Nordicshave a vast array of knowledge to draw upon, allowing them to make a Common Knowledge roll for all but the most bizarre or trivial minformation.\nMind Control: Nordics can use the Puppet power at will, getting a +2 to their Spirit roll. They can use this power on up to three people at a time, though they can only activate it once a round. Unless all the targets are performing similar actions, the Nordic must make a Smarts roll each round to maintain control. If it fails, all the targets are freed.\nMind Reading: Nordics can scan the surface thoughts of anyone within their line of sight with a Spirit roll, getting a +2 to the roll. With a raise, they can read the targets recent memories, and with two raises they can read all their memories.\nTelekinesis: Nordics can use the Telekinesis power at will, lifting 120 pounds normally, or 600 on a raise of their Spirit roll.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Contrary to conspiracy theory, the Nordics are not a separate alien race (they\'re alternately described as being in league with, or opposed to, the Grays). Rather, they are Damned Children who have grown to full size... and full power. Despite this power, they remain the thralls of the Grays. Nordics are all statuesque (averaging 6\'6"), with perfectly chiseled features, platinum blonde hair and pale blue eyes. With all their power, they\'re still more comfortable with others of their kind around, and are almost never encountered alone.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d12","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Alien Science"}},"SKILL_NOTICE":{"value":"d12"},"SKILL_PILOTING":{"value":"d8"},"SKILL_REPAIR":{"value":"d10"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// The Black Coach
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 199,
		name: {
			'en-US' : 'The Black Coach',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor: In earlier centuries or in fantasy games, the coach\'s wooden frame provides 2 points of armor. In a modern setting, increase the Toughness to 18(4). In either case, the coach\'s chassis is considered Heavy Armor thanks to its hellish origins.\nFear(-2): Anyone who opens the coach door sees a writhing mass of screaming, tormented spirits. They must make a Fear roll at -2.\nInvulnerable: If the coach is destroyed, the coachman either mounts a horse or fights on foot. It returns the following night along with the coachman until he returns to hell.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The black coach is a prison for souls awaiting delivery to whatever fate awaits them. Black curtains cover the windows, but occasionally the ghostly face of a coachman\'s victim can be seen frantically peering out.\n',
		},
		attributes: '',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '14',
		armor: '2',
		book: 3,
		page: 'p58'
	}
);
	// The Black Coachman
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 197,
		name: {
			'en-US' : 'The Black Coachman',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Reaping Scythe: The reaping scythe is only useful against sentient beings with souls. It causes no damage (but see below), but those hit by it must win an opposed Spirit roll with the coachman or be claimed. Those claimed fall into a torpor, alive but unresponsive until the coachman either escorts them to hell (or wherever he goes), or is defeated. If the former, the victims die. If the latter, they awake Exhausted but alive minutes later. If the coachman is made flesh (see Invulnerable, below), the scythe does not reap souls but causes Str+d10 damage.\nFear: Anyone seeing the creature suffers a Fear test.\nInvulnerable: The coachman can be driven off if wounded by magical weapons, but is not dead and appears the following night as usual. The only way to permanently slay the creature is to use a banish entity spell. Rather than banishing it, the spell makes it whole for 13 minutes. During this time it must fight its summoner (and his companions). If it is not defeated in that time, it fights on as usual. If it is defeated within 13 minutes, it is dragged screaming to the Abyss and does not return-until summoned again!\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The black coachman has existed in one form or another for millennia. The Egyptians knew him as the "dark charioteer," the Romans called him the "black rider," and the Normans knew him as "death\'s wagoner." His current name stems from the Victorian era.\nThe coachman appears only when summoned via a summon demon spell. This is typically done as vengeance against someone the summoner believes has wronged him.\nOnce summoned and tasked, the coachman begins its long ride the very next night at 13 minutes after midnight. It rides the roads within 13 miles of where it was summoned and gathers the souls of all those it meets. The summoner can task it with reaping the souls of up to 13 named victims, whom it seeks unerringly, one per night. Along the way, the coachman may gather any other unfortunates he comes across except the summoner and up to 12 individuals he\'s named as protected.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_DRIVING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 3,
		page: 'p57-58'
	}
);
	// The Black Coachman's Horses
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 198,
		name: {
			'en-US' : 'The Black Coachman\'s Horses',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fleet Footed: Black horses roll a d8 for their running die.\nGhostly Gallop: Black horses run just above the surface of the ground, and do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6\nSize +3: Black horses weigh between 800 and 1000 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Four stallions, with coats as black as pitch and eyes like burning coals, pull the coachman\'s black coach. There are no reins attaching them to the coach, only strands of inky blackness. They fight only if they or the coachman are attacked.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d8","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 3,
		page: 'p58'
	}
);
	// The Black Judge
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 200,
		name: {
			'en-US' : 'The Black Judge',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fearless: Immune to Fear and Intimidation.\nInvulnerable: The judge is invulnerable to all but the person who summoned him.\nDark Insight: If the summoner defeats the judge in single-combat, he may ask how to defeat a single supernatural creature. The judge imparts no other information- his sole cosmic purpose is to reveal such secrets. Some believe this is a sort of "safety net" for knowledge that might otherwise be lost so that no creature is every truly undefeatable.\nJudgement: If the summoner is defeated by the Black Judge in single combat, he must make an opposed Spirit roll with the judge plus or minus his own Charisma modifier. A Mean summoner, for example, subtracts -2 from his opposed roll. If the judge wins the character is cursed with doom. He may no longer spend Bennies to make Soak rolls until he summons another judge-and defeats him!\nWeakness (Summoner): The judge is vulnerable only to the one who summoned him.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'For those who know the ancient rituals necessary to summon him, the black judge can be an ally in the fight against evil. He takes the form of a cowled figure clad in robes of darkest night. Over his face he wears a vaguely skull-like mask. Although predominantly black, the mask has burning yellow eyes and fangs. What lies beneath the mask has never been revealed.\nOnce summoned, the judge usually takes a moment to hear the petitioner\'s plea, and may even converse with him. Before the judge grants any information, however, he must be defeated in single melee combat.\nThe judge is incredibly tough, but is vulnerable to whoever summoned him. Weighing whether or not the judge should be summoned should be a very difficult decision.\nIf the judge is defeated, the summoner may ask him how to defeat one supernatural creature-good or evil.\nIf the summoner is defeated, the judge renders judgement-see below.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d12","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '6',
		armor: '0',
		book: 3,
		page: 'p58-59'
	}
);
	// Typical Chosen Slayer
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 214,
		name: {
			'en-US' : 'Typical Chosen Slayer',
		},
		gear: {
			'en-US' : 'Sword (Str+d8), sharpened stake (Str+d4), crossbow with wooden bolts.',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Arcane Resistance, Champion, Danger Sense, Quick',
		},
		hindrances: {
			'en-US' : 'Heroic, Loyal',
		},
		blurb: {
			'en-US' : 'Many are called, but most die before they get a chance to prove themselves. Whether a chosen slayer is a feisty young maiden hunting vampires or a mean hombre packing state-of- the-art technology depends on your setting. What they all have in common is a calling to serve a higher power.\nThis stat block is for a chosen slayer at the start of his or her career.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d4"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '6',
		armor: '0',
		book: 3,
		page: 'p61'
	}
);
	// Veteran Chosen Slayer
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 215,
		name: {
			'en-US' : 'Veteran Chosen Slayer',
		},
		gear: {
			'en-US' : 'Sword (Str+d8), sharpened stake (Str+d4), crossbow with wooden bolts.',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Arcane Resistance, Block, Champion, Combat Re exes, Command, Danger Sense, Dodge, Hard to Kill, Level Headed, Quick',
		},
		hindrances: {
			'en-US' : 'Heroic, Loyal',
		},
		blurb: {
			'en-US' : 'Many are called, but most die before they get a chance to prove themselves. Whether a chosen slayer is a feisty young maiden hunting vampires or a mean hombre packing state-of- the-art technology depends on your setting. What they all have in common is a calling to serve a higher power.\nSlayers who survive their first few years have learned how to handle themselves in battle against a variety of supernatural foes.',
		},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '10',
		toughness: '7',
		armor: '0',
		book: 3,
		page: 'p61'
	}
);




availableLanguages.push ({
	english_name: "German",
	native_name: "Deutsch",
	icon_file: "DE.png",
	short_code: "de-DE",
	active: true,

	translations: {
			BUTTON_LANG_EN: 'English',
			BUTTON_LANG_BR: 'German',

	}

} );
availableLanguages.push ({
	english_name: "English",
	native_name: "English",
	icon_file: "US.png",
	short_code: "en-US",
	active: true,

	translations: {
			BUTTON_LANG_EN: 'English',
			BUTTON_LANG_DE: 'German',
			BUTTON_LANG_BR: 'Brazilian',
			APP_TITLE: 'Savage Worlds Web Tools',
			INDEX_WELCOME: 'Welcome',
			INDEX_H3_CORE: 'Savage Worlds Core Tools',
			INDEX_H3_SCIFI: 'Sci-Fi Companion Tools',
			INDEX_BUTTON_CORE_DICE: 'Flexible Dice Roller',
			INDEX_BUTTON_CORE_RAISE: 'Raise Calculator',
			INDEX_BUTTON_CORE_EXTRAS: 'Extras Database',
			INDEX_BUTTON_CORE_CHAR: 'Character Maker',
			INDEX_BUTTON_CORE_MASSBATTLES: 'Mass Battles',
			INDEX_BUTTON_SCIFI_POWER: 'Power Armor Maker',
			INDEX_BUTTON_SCIFI_ROBOT: 'Robot Maker',
			INDEX_BUTTON_SCIFI_STARSHIP: 'Starship Maker',
			INDEX_BUTTON_SCIFI_VEHICLE: 'Vehicle Maker',
			INDEX_BUTTON_SCIFI_WALKER: 'Walker Maker',
			INDEX_BUTTON_SCIFI_WORLD: 'World Maker',
			GENERAL_NEW: 'New',
			GENERAL_NAME: 'Name',
			GENERAL_RACE: 'Race',
			GENERAL_DESCRIPTION: 'Description',
			GENERAL_BACKGROUND: 'Background',
			GENERAL_GENDER: 'Gender',
			GENERAL_LOAD: 'Load',
			GENERAL_SAVE: 'Save',
			GENERAL_IMPORT: 'Import',
			GENERAL_EXPORT: 'Export',
			GENERAL_OPTIONS: 'Options',
			GENERAL_BOOKS: 'Books',
			GENERAL_PRINT: 'Print',
			GENERAL_YES: 'Yes',
			GENERAL_NO: 'No',
			GENERAL_CLOSE: 'Close',
			GENERAL_CANCEL: 'Cancel',
			GENERAL_REMOVE: 'Remove',
			GENERAL_DELETE: 'Delete',
			GENERAL_ADD: 'Add',
			GENERAL_MALE: 'Male',
			GENERAL_FEMALE: 'Female',
			GENERAL_OTHER: 'Other',
			GENERAL_BBCODE: 'BB Code',
			GENERAL_JSON: 'JSON',
			GENERAL_ATTRIBUTES: 'Attributes',
			ATTRIBUTE_AGILITY: 'Agility',
			ATTRIBUTE_SMARTS: 'Smarts',
			ATTRIBUTE_SPIRIT: 'Spirit',
			ATTRIBUTE_STRENGTH: 'Strength',
			ATTRIBUTE_VIGOR: 'Vigor',
			EXTRAS_SKILLS: 'Skills',
			EXTRAS_H4_ABILITIES: 'Abilities',
			EXTRAS_BUY_BOOK: 'Buy this book',
			GENERAL_TOUGHNESS: 'Toughness',
			GENERAL_PACE: 'Pace',
			GENERAL_CHARISMA: 'Charisma',
			GENERAL_PARRY: 'Parry',
			GENERAL_HINDARANCES: 'Hindrances',
			GENERAL_EDGES: 'Edges',
			GENERAL_GEAR: 'Gear',
			CHARGEN_ATTRIBUTES_AND_SKILLS: 'Attributes & Skills',
			CHARGEN_CHARACTER_INFORMATION: 'Character Information',
			CHARGEN_AGILITY_SKILLS: 'Agility Skills',
			CHARGEN_SMARTS_SKILLS: 'Smarts Skills',
			CHARGEN_SPIRIT_SKILLS: 'Spirit Skills',
			CHARGEN_STRENGTH_SKILLS: 'Strength Skills',
			DICE_TITLE_TAG: 'Flexible Dice Roller | Savage Worlds Web Tools',
			DICE_H3_DICE: 'Dice',
			DICE_H3_ROLL_TYPE: 'Roll Type',
			DICE_H3_RESULTS: 'Results',
			DICE_WILD_DIE: 'Throw a Wild Die too',
			DICE_ROLL_DICE: 'Roll Results',
			DICE_ROLL_TYPE: 'Roll Type',
			DICE_ROLL_TYPE_ROLL: 'Just a roll of the dice...',
			DICE_ROLL_TYPE_TRAIT: 'Trait Test',
			DICE_ROLL_TYPE_DAMAGE: 'Damage Roll',
			DICE_NO_DICE_THROWN: 'No dice have been thrown',
			DICE_TOTAL_ROLL: 'Total Roll',
			DICE_TARGET_NUMBER: 'Target Number',
			DICE_BASE_TOUGHNESS: 'Base Toughness',
			DICE_ARMOR: 'Armor',
			DICE_WEAPON_AP: 'Weapon\'s AP',
			DICE_TRAIT_OPTIONS: 'Trait Options',
			DICE_DAMAGE_OPTIONS: 'Damage Options',
			DICE_WILD_DIE_NOTE: 'Put a * after the d6, d8, etc to roll a wild die with that roll. Example: d4* - 2 for an untrained wild card skill check',
			DICE_LABEL_NO_EFFECT: 'No Effect',
			DICE_LABEL_SHAKEN: 'Shaken',
			DICE_LABEL_SHAKEN_AND_A_WOUND: 'Shaken and a wound',
			DICE_LABEL_SHAKEN_AND_X_WOUNDS: 'Shaken and {raises} wounds',
			DICE_LABEL_CRITICAL_FAILURE: 'Critical Failure',
			DICE_LABEL_FAILURE: 'Failure',
			DICE_LABEL_SUCCESS: 'Success',
			DICE_LABEL_SUCCESS_WITH_A_RAISE: 'Success with a raise',
			DICE_LABEL_SUCCESS_WITH_X_RAISES: 'Success with {raises} raises',
			DICE_LABEL_DIE_ROLL_NUMBER: 'die roll #',
			DICE_LABEL_WILD_DIE_ROLL_NUMBER: 'wild die roll #',
			DICE_ROLL_SET_NUM: 'Roll Set #',
			RAISE_ROLL_VARS: 'Raise Specifics',
			RAISE_ROLL_RESULTS: 'Results',
			RAISE_ROLL: 'Roll',
			RAISE_TARGET_NUMBER: 'Target Number/Base Toughness',
			RAISE_ARMOR: 'Armor (ignored for trait results)',
			RAISE_WEAPON_AP: 'Weapon\'s AP (ignored for trait results)',
			RAISE_RESULT_DAMAGE: 'Damage Result',
			RAISE_RESULT_TRAIT: 'Trait Result',
			EXTRAS_LIBRARIES: 'Libraries',
			EXTRAS_SEARCH: 'Search',
			EXTRAS_RESULTS: 'Results',
			EXTRAS_NO_RESULTS: 'No extras were found with your search terms.',
			EXTRAS_RESULTS_INTRO: 'Please search for a name in the search field.',
			EXTRAS_TREASURE: 'Treasure',
			CREATOR_SIZE: 'Size',
			CREATOR_ACC_TS: 'Acc/TS',
			CREATOR_CLIMB: 'Climb',
			CREATOR_FLYPACE: 'Flying Pace',
			CREATOR_FASARA: 'Front Armor/Side Armor/Rear Armor',
			CREATOR_TOUGHNESS: 'Toughness',
			CREATOR_ARMOR: 'Armor',
			CREATOR_PACE: 'Pace',
			CREATOR_CREW: 'Crew',
			CREATOR_STRENGTH: 'Strength',
			CREATOR_COST: 'Cost',
			CREATOR_REMAINING_MODS: 'Remaining Mods',
			CREATOR_WEAPON_MODS_AVAILABLE: 'Weapon Mods Available',
			CREATOR_NOTES: 'Notes',
			CREATOR_WEAPONS: 'Weapons',
			CREATOR_NONE: 'None',
			CREATOR_SHIELDS: 'Shields',
			CREATOR_MAY_RECOVER: 'may recover {value}/round',
			CREATOR_ENERGY_CAPACITY: 'Energy Cpacity',
			CREATOR_EXTRA_NOTES: 'Extra Notes',
			CREATOR_SIZE_MUST_BE_SELECTED: 'Size must be selected',
			CREATOR_ARMOR_NAME: 'Power Armor Name',
			CREATOR_ARMOR_DESCRIPTION: 'Power Armor Description',
			CREATOR_ARMOR_SIZE: 'Power Armor Size',
			CREATOR_MOD_COST: 'Mod Cost',
			CREATOR_MOD_NAME: 'Name',
			CREATOR_USED_MAX: 'Used/Max',
			CREATOR_BASIC: 'Basic Information',
			CREATOR_MODS: 'Modifications',
			CREATOR_REMOVE: 'Remove',
			CREATOR_INSTALLED_WEAPONS: 'Installed Weapons',
			CREATOR_AVAILABLE_WEAPONS: 'Available Weapons',
			CREATOR_DUAL_LINKED: 'Dual-Linked {name}',
			CREATOR_TRI_LINKED: 'Tri-Linked {name}',
			CREATOR_QUAD_LINKED: 'Quad-Linked {name}',
			CREATOR_NO_INSTALLED_WEAPONS: 'You have no installed weapons',
			CREATOR_LINK: 'Link',
			CREATOR_DELINK: 'Unlink',
			CREATOR_FIXED_BOW_FRONT: 'Fixed to bow',
			CREATOR_FIXED_STARBOARD_RIGHT: 'Fixed to starboard',
			CREATOR_FIXED_PORT_LEFT: 'Fixed to port',
			CREATOR_FIXED_STERN_REAR: 'Fixed astern',
			CREATOR_FIXED_TURRETED_NONE: 'Not Fixed',
			CREATOR_SELECT_A_SIZE: 'select a size',
			CREATOR_NEW_CONFIRM: 'Are you sure that you want to clear out your current item?',
			CREATOR_DELETION_CONFIRMATION: 'Are you sure you want to delete this item?',
			CREATOR_SAVED_ITEM_AS: 'Save Item As',
			CREATOR_SAVE_NAME: 'Save Name',
			CREATOR_NO_SAVED_ITEMS: 'You have no saved items',
			CREATOR_SAVE_AS_NEW: 'Save as a new item',
			CREATOR_LOAD_ITEM: 'Load a saved item',
			CREATOR_LOAD_WARNING: 'Warning: This will replace your current item',
			CREATOR_IMPORT_WARNING: 'Warning: This will replace your selected saved item',
			CREATOR_SAVE_WARNING: 'Warning: This will replace your current item',
			CREATOR_EXPORT_DATA: 'Export Data',
			CREATOR_IMPORT_DATA: 'Import Data',
			CREATOR_IMPORT: 'Import Item',
			CREATOR_NO_OPTIONS_AVAILABLE: 'There are no options available for this type of item',
			CREATOR_OPTIONS_DIALOG: 'Options',

	}

} );
availableLanguages.push ({
	english_name: "Brazillian",
	native_name: "Brasileiro",
	icon_file: "BR.png",
	short_code: "pt-BR",
	active: true,

	translations: {
			BUTTON_LANG_EN: 'English',
			BUTTON_LANG_DE: 'German',

	}

} );
/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsSciFiSizes) == "undefined")
		var savageWorldsSciFiSizes = Array();

	if(typeof(savageWorldsSciFiMods) == "undefined")
		var savageWorldsSciFiMods = Array();

	if(typeof(savageWorldsSciFiOptions) == "undefined")
		var savageWorldsSciFiOptions = Array();
savageWorldsSciFiOptions['power_armor'] = Array(
{
	 name: {
		 'en-US': 'Exchange Climb for Top Speed',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Some Ideas for making more agressive flight systems for Power Armor. <a href=\'http://www.peginc.com/forum/viewtopic.php?p=423784#423784\'>Discussion is here.</a>',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'climb-top-speed',
},
{
	 name: {
		 'en-US': 'Faster Flight Systems',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Some Ideas for making more agressive flight systems for Power Armor. <a href=\'http://www.peginc.com/forum/viewtopic.php?p=423784#423784\'>Discussion is here.</a>',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'faster-flight',
}
);
savageWorldsSciFiSizes['power_armor'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Light Power Armor',
		 'pt-BR': 'pg-Light Power Armor',
		 'de-DE': 'de-Light Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 1,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 0,
	 armor: 8,
	 mods: 5,
	 crew: 1,
	 cost: 500000,
	 weight: 100,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium Power Armor',
		 'pt-BR': 'pg-Medium Power Armor',
		 'de-DE': 'de-Medium Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 2,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 6,
	 toughness: 0,
	 armor: 10,
	 mods: 8,
	 crew: 1,
	 cost: 1000000,
	 weight: 200,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Heavy Power Armor',
		 'pt-BR': 'pg-Heavy Power Armor',
		 'de-DE': 'de-Heavy Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 3,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 4,
	 toughness: 0,
	 armor: 12,
	 mods: 12,
	 crew: 1,
	 cost: 2000000,
	 weight: 300,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['power_armor'] = Array(
{
	 name: {
		 'en-US': 'Anti-Personnel System',
	},
	 description: {
		 'en-US': 'When activated (a free action via voice command), detonation packs attached to the suit explode in a Large Burst Template around the armor, causing 5d6 damage (the blast is shaped away from the suit so the wearer suffers only half damage). Wearers are advised to use this only as a last resort. Shrapnel pack reloads cost $1000, weigh 10 lb, and take one hour to install.',
	},
	 tag: 'anti-personnel-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
//selectedObject.ts = Math.ceil(selectedObject.ts / 2);
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 10;
}
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Adds +2 Heavy Armor each time this Modification is taken.',
	},
	 tag: 'armor',
getMax: function(selectedObject) { return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.armor += 2;
},
getWeight: function(selectedObject) {
//return 10;
return 0;
}
},
{
	 name: {
		 'en-US': 'Command Pack',
	},
	 description: {
		 'en-US': 'A well-designed suite of HUD apps and sensors to constantly monitor up to 100 team members within twenty miles. This extends the user’s Command Range to all those in contact. The Command Pack requires the Sensor Suite Modification first.',
	},
	 tag: 'command-pack',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
//selectedObject.ts = Math.ceil(selectedObject.ts / 2);
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - +1 Climb',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'fflight-1-climb',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.climb++;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - Double Speed',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'fflight-double-speed',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.ts = selectedObject.ts * 2;
selectedObject.acc = selectedObject.ts / 4;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - Exchange Climb for Speed',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'fflight-exchange-climb-fo',
showWithOption: "climb-top-speed",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.ts = selectedObject.ts * 2;
selectedObject.acc = selectedObject.ts / 4;
selectedObject.climb--;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0 && selectedObject.climb > -2 )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial)',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'fflight',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
if(selectedObject.aircraft == 0) {
selectedObject.climb = 0;
//selectedObject.flyingPace = selectedObject.basePace;
selectedObject.ts = selectedObject.basePace;
selectedObject.acc = selectedObject.ts / 4;
}
selectedObject.aircraft = 1;
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Flight - +1 Climb',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'flight-1-climb',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.climb++;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Flight - Double Speed',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'flight-double-speed',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.flyingPace = selectedObject.flyingPace * 2;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Flight',
	},
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
	},
	 tag: 'flight',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
if(selectedObject.aircraft == 0) {
selectedObject.climb = 0;
selectedObject.flyingPace = 6;
}
selectedObject.aircraft = 1;
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Jump Pack',
	},
	 description: {
		 'en-US': 'The user can jump up to 2× the suit’s Pace horizontally or 1× Pace vertically.',
	},
	 tag: 'jump-pack',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Magnetic Pads',
	},
	 description: {
		 'en-US': 'The soles and palms of the suit are fitted with powerful magnets, allowing the wearer to walk up or cling to metal surfaces at full Pace. These are most often used in zero-g to allow marines to attach to ship’s hulls or walkways.',
	},
	 tag: 'magnetic-pads',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Pace',
	},
	 description: {
		 'en-US': 'Powerful motors in the leg joints combine with gyroscopic stabilizers to increase Pace by +2 and the running die to d10. Each enhancement after the first only increases Pace by +2.',
	},
	 tag: 'pace',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.pace++;
selectedObject.pace++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Power Pack',
	},
	 description: {
		 'en-US': 'Additional power cells add another 72 hours of energy.',
	},
	 tag: 'power-pack',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000 ;
},
getModEffect: function(selectedObject) {
selectedObject.pace++;
selectedObject.pace++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Propulsion Jets',
	},
	 description: {
		 'en-US': 'Small propulsion jets allow the character to move in vacuum or water at 6”. The jets provide no benefits outside these environments.',
	},
	 tag: 'propulsion-jets',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Self-Sealing',
	},
	 description: {
		 'en-US': 'The suit automatically seals minor breaches (the user suffers one or two wounds) with a fast-hardening sealant. This is critical when operating in a vacuum. If the wearer suffers three or more wounds from a single attack, however, the suit cannot seal and is breached.',
	},
	 tag: 'self-sealing',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite',
	},
	 description: {
		 'en-US': 'An array of various sensors extends the suit’s +2 bonus to visual and aural Notice rolls to 500 yards.',
	},
	 tag: 'sensor-suite',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Signal Booster',
	},
	 description: {
		 'en-US': 'Increases communication range to 500 miles.',
	},
	 tag: 'signal-booster',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 description: {
		 'en-US': 'This thin and pliable piezoelectric material combines chameleon-like visual skin with heat baffles, radar scramblers, and other devices to make the suit difficult to detect by vision or sensors. Those trying to attack or detect the suit subtract 4 from their rolls against it. The effect is triggered as a free action, but is negated any round in which the user fires a weapon or emits some other non-cloakable signal such as radio broadcasts or active sensor searches.',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 10000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Strength Enhancement',
	},
	 description: {
		 'en-US': 'Increases Strength by one die type each time it’s taken. After d12, add +1 per servo (d12+1, d12+2, etc).',
	},
	 tag: 'strength-enhancement',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
	},
	 description: {
		 'en-US': 'An integrated system connects to all personal and weapon mounts to compensate for movement, range, multi-actions, and the like. This negates up to two points of the user’s Shooting penalties.',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 20000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Trauma System',
	},
	 description: {
		 'en-US': 'Automated systems within the suit are loaded with minor antibiotics, stimulants, and anesthetics designed to keep a soldier alive after suffering trauma. It has a d8 Healing and adds +2 to recover from being Shaken and resisting Bleeding Out.',
	},
	 tag: 'trauma-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 25000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Weapon Mount',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'A single mount can hold any one personal weapon up to 100 pounds, or one Mod point of vehicular weaponry. Two shoulder mounts can be combined into a central weapon mount over the user’s head to hold a vehicle weapon with a Mod cost of 2. The user may fire mounted and personal weapons at standard multi-action penalties (but see Targeting System). Weaponry is purchased separately.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'weapon-mount',
getMax: function(selectedObject) { return 2 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.hasWeaponMounts = 1;
selectedObject.vehicleWeaponModPoints++;
},
getWeight: function(selectedObject) {
return 0;
}
}
);

/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsSciFiSizes) == "undefined")
		var savageWorldsSciFiSizes = Array();

	if(typeof(savageWorldsSciFiMods) == "undefined")
		var savageWorldsSciFiMods = Array();

	if(typeof(savageWorldsSciFiOptions) == "undefined")
		var savageWorldsSciFiOptions = Array();
savageWorldsSciFiOptions['starship'] = Array(

);
savageWorldsSciFiSizes['starship'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Small',
	},
	 examples: {
		 'en-US': 'Fighters, shuttles',
	},
	 size: 6,
	 strength: 0,
	 acc: 50,
	 ts: 700,
	 climb: 3,
	 pace: 0,
	 toughness: 20,
	 armor: 5,
	 mods: 20,
	 crew: 1,
	 cost: 2000000,
	 weight: 0,
	 energyCapacity: 25,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium',
	},
	 examples: {
		 'en-US': 'Bombers, large shuttles, scout ships',
	},
	 size: 8,
	 strength: 0,
	 acc: 45,
	 ts: 600,
	 climb: 2,
	 pace: 0,
	 toughness: 25,
	 armor: 6,
	 mods: 25,
	 crew: 5,
	 cost: 5000000,
	 weight: 0,
	 energyCapacity: 100,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Large',
	},
	 examples: {
		 'en-US': 'Freighters, corvettes, scientific exploration vessels',
	},
	 size: 12,
	 strength: 0,
	 acc: 40,
	 ts: 500,
	 climb: 1,
	 pace: 0,
	 toughness: 35,
	 armor: 8,
	 mods: 30,
	 crew: 50,
	 cost: 20000000,
	 weight: 0,
	 energyCapacity: 300,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Huge',
	},
	 examples: {
		 'en-US': 'Destroyers, bulk freighters, light cruisers',
	},
	 size: 16,
	 strength: 0,
	 acc: 35,
	 ts: 400,
	 climb: 0,
	 pace: 0,
	 toughness: 45,
	 armor: 10,
	 mods: 40,
	 crew: 300,
	 cost: 50000000,
	 weight: 0,
	 energyCapacity: 500,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Giant',
	},
	 examples: {
		 'en-US': 'Cruisers, small battleships or carriers',
	},
	 size: 20,
	 strength: 0,
	 acc: 30,
	 ts: 300,
	 climb: -1,
	 pace: 0,
	 toughness: 50,
	 armor: 11,
	 mods: 50,
	 crew: 1000,
	 cost: 200000000,
	 weight: 0,
	 energyCapacity: 1000,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Gargantuan',
	},
	 examples: {
		 'en-US': 'Battleships, carriers',
	},
	 size: 24,
	 strength: 0,
	 acc: 25,
	 ts: 200,
	 climb: -2,
	 pace: 0,
	 toughness: 55,
	 armor: 13,
	 mods: 70,
	 crew: 3000,
	 cost: 1000000000,
	 weight: 0,
	 energyCapacity: 2000,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Behemoth',
	},
	 examples: {
		 'en-US': 'Dreadnoughts, invasion carriers.',
	},
	 size: 28,
	 strength: 0,
	 acc: 20,
	 ts: 200,
	 climb: -3,
	 pace: 0,
	 toughness: 60,
	 armor: 15,
	 mods: 90,
	 crew: 8000,
	 cost: 2147483647,
	 weight: 0,
	 energyCapacity: 2000,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Leviathan',
	},
	 examples: {
		 'en-US': 'Super dreadnoughts, super carriers, settlement ships.',
	},
	 size: 32,
	 strength: 0,
	 acc: 20,
	 ts: 200,
	 climb: -4,
	 pace: 0,
	 toughness: 70,
	 armor: 20,
	 mods: 120,
	 crew: 20000,
	 cost: 2147483647,
	 weight: 0,
	 energyCapacity: 2000,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'World Killer',
	},
	 examples: {
		 'en-US': 'Mega dreadnoughts, mega carriers, colony ships.',
	},
	 size: 40,
	 strength: 0,
	 acc: 20,
	 ts: 200,
	 climb: -5,
	 pace: 0,
	 toughness: 80,
	 armor: 25,
	 mods: 150,
	 crew: 50000,
	 cost: 2147483647,
	 weight: 0,
	 energyCapacity: 2000,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['starship'] = Array(
{
	 name: {
		 'en-US': 'AMCM',
	},
	 description: {
		 'en-US': 'Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.',
	},
	 tag: 'amcm',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Aquatic',
	},
	 description: {
		 'en-US': 'The ship is built to withstand deep pressurization and is equipped with thrusters suitable for use in aqueous mediums, allowing it to function underwater as if it were a submersible. Acc and Top Speed are half a vehicle of equal Size',
	},
	 tag: 'aquatic',
showWithOption: "the-last-parsec",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.watercraft = 1;
if( selectedObject.size > 0) {
sameVehicle = getSameVehicleSize(selectedObject.size);
waterTS = 0;
waterAcc = 0;
if( sameVehicle ) {
waterTS = Math.ceil(sameVehicle.ts / 2);
waterAcc = Math.ceil(sameVehicle.acc / 2);
}
if( waterTS > 0 )
selectedObject.appendExtraNotes("Water Top Speed: " + waterTS);
if( waterAcc > 0 )
selectedObject.appendExtraNotes("Water Acc: " + waterAcc);
}
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Increases a ship’s Armor value by +2. Due to the nature of space and the size and shape of starships, all Armor is considered Heavy Armor.',
	},
	 tag: 'armor',
getMax: function(selectedObject) {  return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.armor++;
selectedObject.armor++;
selectedObject.toughness++;
selectedObject.toughness++;
}
},
{
	 name: {
		 'en-US': 'Artificial Intelligence',
	},
	 description: {
		 'en-US': 'The ship’s AI can operate all systems — from locomotion to weapons to opening or closing hatches. It has a skill level of d10 in these tasks, but is an “Extra” and does not receive a Wild Die. The AI does not suffer from multi-action penalties if given simultaneous tasks. In combat, the AI acts on the captain’s Action Card. Giving the AI a short verbal command is a free action.',
	},
	 tag: 'artificial-intelligence',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Atmospheric',
	},
	 description: {
		 'en-US': 'Allows the ship to enter planetary atmospheres. This includes heat shielding and additional work to handle the stress and strain of entry. All starships have vertical take-off and landing (VTOL) capability.',
	},
	 tag: 'atmospheric',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Bomb Bay',
	},
	 description: {
		 'en-US': 'Each bomb bay may drop up to four Small, 2 Medium, or 1 Large (or larger) bomb per round at no penalty. All use the same attack roll. Dropping bombs uses the Knowledge (Bombardier) skill.',
	},
	 tag: 'bomb-bay',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
},
{
	 name: {
		 'en-US': 'Crew Reduction',
	},
	 description: {
		 'en-US': 'Reduces living space, quarters, and facilities for personnel equal to 20% of the listed Crew for the vessel’s Size, granting Size/4 Mods. If this reduces the Crew to 0, the ship is a fully automated drone',
	},
	 tag: 'crew-reduction',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.mods +=  selectedObject.size / 4;
selectedObject.crew -= selectedObject.selectedSize.crew / 5;
}
},
{
	 name: {
		 'en-US': 'Crew Space',
	},
	 description: {
		 'en-US': 'Enough space and facilities for more personnel equal to 20% of the listed Crew for the vessel’s Size. To accommodate even more passengers, use Superstructures instead.',
	},
	 tag: 'crew-space',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 100000;
},
getModEffect: function(selectedObject) {
selectedObject.crew += selectedObject.selectedSize.crew / 5;
}
},
{
	 name: {
		 'en-US': 'Deflector Screens',
	},
	 description: {
		 'en-US': 'The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large ships, and 3 for Huge to Gargantuan vessels.',
	},
	 tag: 'deflector-screens',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
if( selectedObject.size >= 25)
return 5;
if( selectedObject.size >= 13)
return 3;
if( selectedObject.size >= 6)
return 2;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Electromagnetic Shielding',
	},
	 description: {
		 'en-US': 'Adds +6 to the ship’s effective Toughness from EMP missiles (see page 25).',
	},
	 tag: 'electromagnetic-shielding',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'FTL Drive',
	},
	 description: {
		 'en-US': 'This includes both the drive and the navigation system required to use it.',
	},
	 tag: 'ftl-drive',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 2000000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'FTL Drive, Kalian',
	},
	 description: {
		 'en-US': 'Kalian superluminal drives are considered the most finely crafted faster-than-light drives in the known worlds. They are high-end drives known for durability and dependability. They add +2 to Knowledge (Astrogation) rolls when traveling via “hyperspace.” For more information, see Space Travel on page 69. In addition, if a Kalian FTL system is damaged with a starship critical hit during combat, the Repair roll is only –1 per wound instead of the normal –2.',
	},
	 tag: 'ftl-drive-kalian',
showWithOption: "the-last-parsec",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 4000000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Fuel Pods',
	},
	 description: {
		 'en-US': 'Each fuel pod increases the vessel’s energy capacity by 50%',
	},
	 tag: 'fuel-pods',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 100000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.energyCapacity +=  selectedObject.baseEnergyCapacity / 2;
}
},
{
	 name: {
		 'en-US': 'Garage / Hangar',
	},
	 description: {
		 'en-US': 'A small hangar (or garage or external lift-hooks) can carry up 8 Size points of ship, vehicle, or walker.',
	},
	 tag: 'garage-/-hangar',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 4;
},
getCost: function(selectedObject) {
return 1000000;
}
},
{
	 name: {
		 'en-US': 'Mercantile',
	},
	 description: {
		 'en-US': 'Found only on Huge and Gargantuan ships, this might be a restaurant, commissary, or speciality store. Each generates Size+$1d4K a month for the ship (and the same for the mercantile’s owner). The store has 300 square feet of space. Each additional Mod adds roughly 100 square feet and +$1d4K to revenue.',
	},
	 tag: 'mercantile',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 100000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 16)
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Missile Launcher',
	},
	 description: {
		 'en-US': 'Allows up to four Light or two Heavy (or AT) missiles to be fired at once.',
	},
	 tag: 'missile-launcher',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
selectedObject.hasMissileLauncher = 1;
}
},
{
	 name: {
		 'en-US': 'Passenger Pod',
	},
	 description: {
		 'en-US': 'Small and Medium ships only. These are rows of fairly spacious seats with safety harnesses, personal vid-screens, and other amenities designed for short travels (typically less than 24 hours). Each pod seats 10.',
	},
	 tag: 'passenger-pod',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Self-Destruct',
	},
	 description: {
		 'en-US': 'Self-destruct is a mechanism that can cause an object to destroy itself within a predefined set of circumstances. The self-destruct mechanism is usually the most complete way to destroy the object. For that reason the self-destruct mechanism can be used to destroy objects that are meant to be discarded. Most civilian starships do not have a self-destruct mechanism.',
	},
	 tag: 'self-destruct',
showWithOption: "the-last-parsec",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 1000000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Sensor Suite (Galactic)',
	},
	 description: {
		 'en-US': 'Light, chemical, motion, and other active sensors allow detection of targets up to one light year away with a Knowledge (Electronics) roll. Within 10K miles, the sensors add +2 to the roll. Illumination penalties are ignored. Targets don’t have to be in direct line of sight, but asteroid or powerful energy fields may cause inaccurate or false readings at the GM’s discretion.',
	},
	 tag: 'sensor-suite-galactic',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 1000000;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite (Planetary)',
	},
	 description: {
		 'en-US': 'This functions exactly like the Medium Sensor Suite (page 16) but has a range of 10K miles.',
	},
	 tag: 'sensor-suite-planetary',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Shields',
	},
	 description: {
		 'en-US': 'The craft is protected by an ablative energy field that absorbs 10×Size points of damage before it’s depleted. Apply all damage to the shield first, then any left over to the ship (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A craft may regenerate its Size in shield points if it makes no attacks in a round.',
	},
	 tag: 'shields',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 25000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Sloped Armor',
	},
	 description: {
		 'en-US': 'Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.',
	},
	 tag: 'sloped-armor',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Speed Reduction',
	},
	 description: {
		 'en-US': 'The ship trades power and speed for additional room. Each time this is taken, reduce Acc by 5 and Top Speed by 50 to gain half the ship’s Size in Mod slots.',
	},
	 tag: 'speed-reduction',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.ts -=  50;
selectedObject.acc -=  5;
selectedObject.mods += selectedObject.size / 2;
}
},
{
	 name: {
		 'en-US': 'Speed',
	},
	 description: {
		 'en-US': 'Each purchase increases the ship’s Acc by 5 and Top Speed by 50. (This cannot be taken with Speed Reduction.)',
	},
	 tag: 'speed',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 100000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.ts +=  50;
selectedObject.acc +=  5;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 description: {
		 'en-US': 'Radar-absorbing paint, heat baffles, scramblers, and other devices make the ship difficult to detect by vision or sensors. Those trying to spot, attack, (or lock on to) the ship subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the ship fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Bulk Cargo)',
	},
	 description: {
		 'en-US': 'These are massive, open hulls for hauling bulk cargo. This is equivalent to 18 train box-cars, and can handle up to 800,000 cubic feet of cargo (but no more than 1800 tons if the vessel enters atmosphere). Halve the cost if the storage area is a vacuum.',
	},
	 tag: 'superstructure-bulk-cargo',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
selectedObject.crew += 100;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Factory)',
	},
	 description: {
		 'en-US': 'The ship contains processing and manufacturing facilities that can take in raw materials and create new goods (usually those necessary for extended voyages, military operations, or colony survival). This adds 100 Crew. The vessel must also have at least one shuttle per Factory Superstructure to take in raw goods. Each factory can generate 2d6×$100K in goods, supplies, or raw materials a week in an average environment (such as an asteroid field or small planet). Add or subtract a d6 for a sparse / rich find.) Materials can be used to fuel and resupply the ship (and other ships as well).',
	},
	 tag: 'superstructure-factory',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
selectedObject.crew += 100;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Hangar)',
	},
	 description: {
		 'en-US': 'A large, dedicated flight bay that holds up to 24 Size points of vehicles, walkers, or Small or Medium ships (Large and greater ships won’t fit due to logarithmic scaling). This includes additional fuel storage, maintenance bays, training rooms, and briefing areas, and adds 50 additional crew members.',
	},
	 tag: 'superstructure-hangar',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
selectedObject.crew += 50;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Passenger, Civilian)',
	},
	 description: {
		 'en-US': 'Luxury accommodations for long-term travelers, including hydroponic gardens, theatres, gyms, malls, restaurants, shopping, and lodging for 700 passengers and 50 additional staff. Passengers typically pay an average of $200 per day.',
	},
	 tag: 'superstructure-passenger-',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Passenger, Military)',
	},
	 description: {
		 'en-US': 'Spartan barracks, training facilities, armories, and a few multi- purpose recreational areas for 450 marines and 50 staff (cooks, techs, etc).',
	},
	 tag: 'superstructure-passenger-',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
}
},
{
	 name: {
		 'en-US': 'Superstructure (Specialty)',
	},
	 description: {
		 'en-US': 'This covers anything not detailed above, such as massive medical bays for a hospital ship, research facilities, etc. The specific function determines specifics, but a basic guideline is a Specialty Superstructure houses and services 200 individuals, their equipment, and storage needs.',
	},
	 tag: 'superstructure-specialty',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
}
},
{
	 name: {
		 'en-US': 'Superstructure',
	},
	 description: {
		 'en-US': 'Superstructures are large sections that add great amounts of space to large ships, typically to accommodate more passengers or cargo. Each superstructure adds one to the fuel used per day, consumes 10 regular Mods, and subtracts 1 from the ship’s base Toughness (not Armor) as it reduces overall structural integrity. Choose the type of superstructure from the sidebar below.',
	},
	 tag: 'superstructure',
hidden: 1,
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 10;
},
getCost: function(selectedObject) {
return 5000000;
},
isAvailable: function(selectedObject) {
if(selectedObject.size >= 12)
return true;
else
return false;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness - 1;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
	},
	 description: {
		 'en-US': 'The ship’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000  * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Teleporter',
	},
	 description: {
		 'en-US': 'Ultra Tech. Teleporters work by turning physical objects into energy, blasting them through space, and then reconstituting them at the destination. Each teleporter can transport six average size humans at a time, or 1000 pounds of cargo up to 100 miles distant, or up to 1000 miles distant if a linked transmitter is present at the destination.',
	},
	 tag: 'teleporter',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000000;
}
},
{
	 name: {
		 'en-US': 'Torpedo Tube',
	},
	 description: {
		 'en-US': 'Each tube allows up to two Light or one Heavy torpedo to be fired at once (at one or two targets, as desired).',
	},
	 tag: 'torpedo-tube',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 500000;
},
getModEffect: function(selectedObject) {
selectedObject.hasTorpedoTube = 1;
}
},
{
	 name: {
		 'en-US': 'Tractor Beam',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Tractor beams are specialized starship weapons designed to hold an enemy ship in place and pull it to the “attacker.” Ships can only affect vessels of smaller Size. Their range is quite short (about 1000 yards), so they must get a Short Range result on the Chase table to use the weapon. This is an opposed Knowledge (Electronics) roll at –4 vs the defender’s Piloting (or Knowledge (Electronics) in Large or larger ships). If the attacker is successful, the enemy ship is caught and pulled into contact in 2d6 rounds. A captive’s ship’s life support systems remain active, but all locomotion and weapons are shut down.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'tractor-beam',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 5;
},
getCost: function(selectedObject) {
return 1000000;
}
}
);

/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsSciFiSizes) == "undefined")
		var savageWorldsSciFiSizes = Array();

	if(typeof(savageWorldsSciFiMods) == "undefined")
		var savageWorldsSciFiMods = Array();

	if(typeof(savageWorldsSciFiOptions) == "undefined")
		var savageWorldsSciFiOptions = Array();
savageWorldsSciFiOptions['vehicle'] = Array(
{
	 name: {
		 'en-US': 'The Last Parsec Options',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Various options from The Last Parsec Sourcebooks vehicle options',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'the-last-parsec',
}
);
savageWorldsSciFiSizes['vehicle'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Ultralight',
	},
	 examples: {
		 'en-US': '',
	},
	 size: 1,
	 strength: 0,
	 acc: 10,
	 ts: 35,
	 climb: 0,
	 pace: 0,
	 toughness: 5,
	 armor: 0,
	 mods: 2,
	 crew: 1,
	 cost: 500,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Light',
	},
	 examples: {
		 'en-US': 'Motorcycles',
	},
	 size: 2,
	 strength: 0,
	 acc: 10,
	 ts: 30,
	 climb: 0,
	 pace: 0,
	 toughness: 9,
	 armor: 2,
	 mods: 5,
	 crew: 2,
	 cost: 1000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium',
	},
	 examples: {
		 'en-US': 'Cars',
	},
	 size: 3,
	 strength: 0,
	 acc: 10,
	 ts: 25,
	 climb: 0,
	 pace: 0,
	 toughness: 12,
	 armor: 3,
	 mods: 10,
	 crew: 4,
	 cost: 8000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Large',
	},
	 examples: {
		 'en-US': 'SUVs, Pickups',
	},
	 size: 4,
	 strength: 0,
	 acc: 10,
	 ts: 20,
	 climb: 0,
	 pace: 0,
	 toughness: 15,
	 armor: 4,
	 mods: 15,
	 crew: 6,
	 cost: 12000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Heavy',
	},
	 examples: {
		 'en-US': 'APCs, Light tanks',
	},
	 size: 6,
	 strength: 0,
	 acc: 5,
	 ts: 15,
	 climb: 0,
	 pace: 0,
	 toughness: 20,
	 armor: 5,
	 mods: 20,
	 crew: 8,
	 cost: 30000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Super Heavy',
	},
	 examples: {
		 'en-US': 'Tanks',
	},
	 size: 8,
	 strength: 0,
	 acc: 5,
	 ts: 10,
	 climb: 0,
	 pace: 0,
	 toughness: 25,
	 armor: 6,
	 mods: 25,
	 crew: 10,
	 cost: 60000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Titan',
	},
	 examples: {
		 'en-US': 'Tanks',
	},
	 size: 10,
	 strength: 0,
	 acc: 5,
	 ts: 19,
	 climb: 0,
	 pace: 0,
	 toughness: 30,
	 armor: 7,
	 mods: 30,
	 crew: 20,
	 cost: 100000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Colossus',
	},
	 examples: {
		 'en-US': 'Tanks',
	},
	 size: 12,
	 strength: 0,
	 acc: 5,
	 ts: 10,
	 climb: 0,
	 pace: 0,
	 toughness: 35,
	 armor: 8,
	 mods: 40,
	 crew: 40,
	 cost: 500000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Goliath',
	},
	 examples: {
		 'en-US': 'Battle Platforms',
	},
	 size: 14,
	 strength: 0,
	 acc: 5,
	 ts: 10,
	 climb: 0,
	 pace: 0,
	 toughness: 40,
	 armor: 9,
	 mods: 50,
	 crew: 80,
	 cost: 1000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['vehicle'] = Array(
{
	 name: {
		 'en-US': 'Aircraft, Anti-Grav',
	},
	 description: {
		 'en-US': 'Ultra Tech. The vehicle is an aircraft powered by anti-gravitic propulsion. It can hover or fly, and has a Acc/TS of 30/100 and Climb of 2.',
	},
	 tag: 'aircraft-anti-grav',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 20000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.aircraft += 1;
selectedObject.climb = 2;
selectedObject.acc = 30;
selectedObject.ts = 100;
},
calcWeight: 1 // one of the first things to be calculated
},
{
	 name: {
		 'en-US': 'Aircraft, Helicopter',
	},
	 description: {
		 'en-US': 'The vehicle is a helicopter. It can hover or fly, and has a Acc/TS 10/80 and a Climb of –1.',
	},
	 tag: 'aircraft-helicopter',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.aircraft += 1;
selectedObject.climb = -1;
selectedObject.acc = 10;
selectedObject.ts = 80;
},
calcWeight: 1 // one of the first things to be calculated
},
{
	 name: {
		 'en-US': 'Aircraft, Jet Plane',
	},
	 description: {
		 'en-US': 'Jet planes are Acc/TS 50/600, Climb 2. They must move at least half their Top Speed each round or go Out of Control (they stall). The Speed Mod increases Acc by 10 instead of 5 and Top Speed by 100 instead of 10.',
	},
	 tag: 'aircraft-jet-plane',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.aircraft += 1;
selectedObject.climb = 2;
selectedObject.acc = 50;
selectedObject.ts = 600;
},
calcWeight: 1 // one of the first things to be calculated
},
{
	 name: {
		 'en-US': 'Aircraft, Propeller Plane',
	},
	 description: {
		 'en-US': 'A traditional prop plane. Acc/TS 20/150, Climb 1. Planes must move at least half their Top Speed each round or go Out of Control (they stall). The Speed Mod increases Top Speed by 50 instead of 10.',
	},
	 tag: 'aircraft-propeller-plane',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.aircraft += 1;
selectedObject.climb = 1;
selectedObject.acc = 20;
selectedObject.ts = 150;
},
calcWeight: 1 // one of the first things to be calculated
},
{
	 name: {
		 'en-US': 'AMCM',
	},
	 description: {
		 'en-US': 'Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.',
	},
	 tag: 'amcm',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Amphibious',
	},
	 description: {
		 'en-US': 'The vehicle may move at half Acc/Top Speed while in water.',
	},
	 tag: 'amphibious',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Increases a vehicle’s Armor value by +2. Armor +4 and higher is considered Heavy Armor. Vehicular Armor can also be front-loaded if desired. If so, Armor’s maximum becomes 2x Size and each level increases the front armor by +3, side and top armor by +2, and rear and bottom Armor by +1. In the Chase rules, an attacker with Advantage and a Jack or higher can target the side armor, and one with a King or higher can target the rear.',
	},
	 tag: 'armor',
getMax: function(selectedObject) { return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.armor++;
selectedObject.armor++;
selectedObject.toughness++;
selectedObject.toughness++;
}
},
{
	 name: {
		 'en-US': 'Armor, Front Loaded',
	},
	 description: {
		 'en-US': 'Increases a vehicle’s Armor value by +2. Armor +4 and higher is considered Heavy Armor. Vehicular Armor can also be front-loaded if desired. If so, Armor’s maximum becomes 2x Size and each level increases the front armor by +3, side and top armor by +2, and rear and bottom Armor by +1. In the Chase rules, an attacker with Advantage and a Jack or higher can target the side armor, and one with a King or higher can target the rear.',
	},
	 tag: 'armor-front-loaded',
getMax: function(selectedObject) { return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.frontArmor++;
selectedObject.frontArmor++;
selectedObject.frontArmor++;
selectedObject.sideArmor++;
selectedObject.sideArmor++;
selectedObject.rearArmor++;
selectedObject.toughness++;
selectedObject.toughness++;
}
},
{
	 name: {
		 'en-US': 'Artificial Intelligence',
	},
	 description: {
		 'en-US': 'The vehicle’s AI can operate all systems — from locomotion to weapons to opening or closing hatches. It has a skill level of d10 in these tasks, but is an “Extra” and does not receive a Wild Die. The AI does not suffer from multi-action penalties if given simultaneous tasks. In combat, the AI acts on the captain’s Action Card. Giving the AI a short verbal command is a free action.',
	},
	 tag: 'artificial-intelligence',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Boosters',
	},
	 description: {
		 'en-US': 'Nitrous oxide or other propellants double a vehicle’s Acceleration and Top Speed for a round. Each booster has six uses before it must be replaced. Their effects do not stack. Refills cost $100 per booster.',
	},
	 tag: 'boosters',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Climb',
	},
	 description: {
		 'en-US': 'Aircraft only. The vehicle’s Climb is increased by 1.',
	},
	 tag: 'climb',
getMax: function(selectedObject) { return 5 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.climb = selectedObject.climb + 1;
}
},
{
	 name: {
		 'en-US': 'Crew Reduction',
	},
	 description: {
		 'en-US': 'Add 1 Mod slot for every four crewman deducted (round up).',
	},
	 tag: 'crew-reduction',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.crew += -4;
selectedObject.mods ++;
}
},
{
	 name: {
		 'en-US': 'Crew Space',
	},
	 description: {
		 'en-US': 'Space for four permanent crew members.',
	},
	 tag: 'crew-space',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 100000;
},
getModEffect: function(selectedObject) {
selectedObject.crew += 4;
}
},
{
	 name: {
		 'en-US': 'Deflector Screens',
	},
	 description: {
		 'en-US': 'The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large vehicles, and 3 for Huge to Gargantuan vessels.',
	},
	 tag: 'deflector-screens',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Ejection System',
	},
	 description: {
		 'en-US': 'Should a vehicle suffer a Wrecked result, crew members may make Agility rolls at –4 (or no penalty if an individual was on Hold or hasn’t acted yet that round). Failure results in damage as usual and failure to eject that round. Those who succeed are launched into the air and descend safely via parachute. The system covers all passengers and crew.',
	},
	 tag: 'ejection-system',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Electromagnetic Shielding',
	},
	 description: {
		 'en-US': 'Adds +6 to the vehicle’s effective Toughness from EMP missiles (see page 25).',
	},
	 tag: 'electromagnetic-shielding',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Exposed Crew',
	},
	 description: {
		 'en-US': 'Motorcycles and other “ridden” vehicles offer no protection for their passengers. Crew get no Armor bonus should it sustain a Crew critical hit.',
	},
	 tag: 'exposed-crew',
getMax:  function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return  (selectedObject.baseCost / 2 ) * -1;
}
},
{
	 name: {
		 'en-US': 'Four Wheel Drive',
	},
	 description: {
		 'en-US': 'Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)',
	},
	 tag: 'four-wheel-drive',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Handling',
	},
	 description: {
		 'en-US': 'The vehicle is precision crafted and very maneuverable. This adds +1 to Driving rolls per level.',
	},
	 tag: 'handling',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Hover Vehicle',
	},
	 description: {
		 'en-US': 'The vehicle uses hover fans instead of wheels. It ignores difficult terrain modifiers and obstacles less than a yard tall. Round Mod cost up. The Ultra Tech version uses anti-grav. It doubles the cost but halves the Mod cost.',
	},
	 tag: 'hover-vehicle',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Living Space',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Large or greater vehicles only. The vehicle has an extended superstructure with bunk beds, personal storage bins for up to four individuals, and one shared bathroom and kitchenette (regardless of how many times this is taken) for long- term travel. The superstructure decreases overall Toughness by 1 each time it’s taken. The limit is half the vehicle’s base Toughness.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'living-space',
		getMax: function(selectedObject) { return selectedObject.baseToughness / 2 },
		getModCost: function(selectedObject) {
			return 3;
		},
		getCost: function(selectedObject) {
			return 5000;
		},
		getModEffect: function(selectedObject) {
			selectedObject.toughness = selectedObject.toughness - 1;
		},
},
{
	 name: {
		 'en-US': 'Luxury Features',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Typically reserved for civilian vehicles, luxury features include music systems, minibars, video screens, and other comforts. The larger the vehicle, the more extravagant the features.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'luxury-features',
		getMax: function(selectedObject) { return 1 },
		getModCost: function(selectedObject) {
			return 1;
		},
		getCost: function(selectedObject) {
			return 1000 * selectedObject.size;
		}
},
{
	 name: {
		 'en-US': 'Missile Launcher',
	},
	 description: {
		 'en-US': 'Allows up to four Light or two Heavy (or AT) missiles to be fired at once.',
	},
	 tag: 'missile-launcher',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
selectedObject.hasMissileLauncher = 1;
}
},
{
	 name: {
		 'en-US': 'Multi-Legged',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The vehicle has legs instead of wheels or tracks and can climb over small obstacles. Each time this Mod is taken increase Acc by 5 and TS by 10. The vehicle gains four legs and an additional pair each time this Mod is taken. Ignore driving penalties for difficult terrain and treat each inch of difficult terrain as 1.5” instead of 2”. On Super Heavy and Titan vehicles this modifier must be taken twice and on Colossus and Goliath taken three times for eight legs total. Vehicles with legs may not take the Speed modifier but may still take Speed Reduction.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'multi-legged',
showWithOption: "the-last-parsec",
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
if( selectedObject.size < 8) {
return 2;
} else if ( selectedObject.size < 12) {
return 4;
} else {
return 6;
}
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.acc += 5;
selectedObject.ts += 10;
thisModCount = selectedObject.getModificationCount("Multi-Legged");
if( thisModCount == 1 )
selectedObject.numberOfLegs = 4;
else if( thisModCount == 2 )
selectedObject.numberOfLegs = 6;
else if( thisModCount == 3 )
selectedObject.numberOfLegs = 8;

},
getDisplayName: function(selectedObject) {
return "Multi-Legged (" + selectedObject.numberOfLegs + " legs)";
}
},
{
	 name: {
		 'en-US': 'Reinforced Chassis',
	},
	 description: {
		 'en-US': 'Increases Toughness of the chassis by +1.',
	},
	 tag: 'reinforced-chassis',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness + 1;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite',
	},
	 description: {
		 'en-US': 'Light, chemical, motion, and other active sensors allow detection of targets up to one light year away with a Knowledge (Electronics) roll. Within 10K miles, the sensors add +2 to the roll. Illumination penalties are ignored. Targets don’t have to be in direct line of sight, but asteroid or powerful energy fields may cause inaccurate or false readings at the GM’s discretion.',
	},
	 tag: 'sensor-suite',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Shields',
	},
	 description: {
		 'en-US': 'The craft is protected by an ablative energy field that absorbs 10×Size points of damage before it’s depleted. Apply all damage to the shield first, then any left over to the vehicle (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A craft may regenerate its Size in shield points if it makes no attacks in a round.',
	},
	 tag: 'shields',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 25000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Sloped Armor',
	},
	 description: {
		 'en-US': 'Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.',
	},
	 tag: 'sloped-armor',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 3000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Speed Reduction',
	},
	 description: {
		 'en-US': 'The vehicle trades power and speed for additional room. Each time this is taken, reduce Acc by 5 and Top Speed by 50 to gain half the vehicle’s Size in Mod slots.',
	},
	 tag: 'speed-reduction',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.ts -=  2;
selectedObject.acc -=  1;
selectedObject.mods += selectedObject.size / 2;
}
},
{
	 name: {
		 'en-US': 'Speed',
	},
	 description: {
		 'en-US': 'Each purchase increases the vehicle’s Acc by 5 and Top Speed by 50. (This cannot be taken with Speed Reduction.)',
	},
	 tag: 'speed',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.ts +=  10;
selectedObject.acc +=  5;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 description: {
		 'en-US': 'Radar-absorbing paint, heat baffles, scramblers, and other devices make the vehicle difficult to detect by vision or sensors. Those trying to spot, attack, (or lock on to) the vehicle subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the vehicle fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
	},
	 description: {
		 'en-US': 'The vehicle’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000  * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Torpedo Tube',
	},
	 description: {
		 'en-US': 'Each tube allows up to two Light or one Heavy torpedo to be fired at once (at one or two targets, as desired).',
	},
	 tag: 'torpedo-tube',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 500000;
},
getModEffect: function(selectedObject) {
selectedObject.hasTorpedoTube = 1;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0 || selectedObject.watercraft > 0)
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Tracked',
	},
	 description: {
		 'en-US': 'The vehicle has tracks instead of wheels and can climb over small obstacles. This reduces Acc by 2 and TS by 5, and ignores Driving penalties for difficult terrain. On the table-top, every inch of movement is treated as 1.5”.',
	},
	 tag: 'tracked',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 1000  * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.ts -=  5;
selectedObject.acc -=  2;
selectedObject.mods += selectedObject.baseMods / 2;
}
},
{
	 name: {
		 'en-US': 'Watercraft',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The vehicle is a boat or ship. It’s base Acceleration and Top Speed are halved (round up). Speed Modifications increase Acc by 3 and TS by 5. For larger vessels such as naval vessels or cruise ships, use the Starship rules for Size, Toughness, and Crew, and add any enhancements that aren’t specifically designed for space such as FTL drives. If a Modification is listed under Vehicles, use that instead. Ships may have Torpedo Tubes.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'watercraft',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.ts = Math.ceil(selectedObject.ts / 2);
selectedObject.acc = Math.ceil(selectedObject.acc / 2);
selectedObject.watercraft = 1;
}
}
);

/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsSciFiSizes) == "undefined")
		var savageWorldsSciFiSizes = Array();

	if(typeof(savageWorldsSciFiMods) == "undefined")
		var savageWorldsSciFiMods = Array();

	if(typeof(savageWorldsSciFiOptions) == "undefined")
		var savageWorldsSciFiOptions = Array();
savageWorldsSciFiOptions['walker'] = Array(
{
	 name: {
		 'en-US': 'Ultra-Light Chassis',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This is a proposed walker size for 12-15 foot tall, Heavy Gear sized, Walkers. <a href=\'http://www.peginc.com/forum/viewtopic.php?t=45126\'>The discussion is here</a>.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'ultra-light',
}
);
savageWorldsSciFiSizes['walker'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Ultralight (unofficial)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '12 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 4,
	 strength: 7,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 30,
	 toughness: 0,
	 armor: 4,
	 mods: 15,
	 crew: 1,
	 cost: 400000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: 'ultra-light',
},
{
	 sizeLabel: {
		 'en-US': 'Light',
	},
	 examples: {
		 'en-US': '20 feet tall',
	},
	 size: 6,
	 strength: 9,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 24,
	 toughness: 20,
	 armor: 5,
	 mods: 20,
	 crew: 1,
	 cost: 1000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium',
	},
	 examples: {
		 'en-US': '30 feet tall',
	},
	 size: 8,
	 strength: 11,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 18,
	 toughness: 25,
	 armor: 6,
	 mods: 25,
	 crew: 1,
	 cost: 3000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Heavy',
	},
	 examples: {
		 'en-US': '50 feet tall',
	},
	 size: 10,
	 strength: 13,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 12,
	 toughness: 30,
	 armor: 8,
	 mods: 30,
	 crew: 1,
	 cost: 5000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Super Heavy',
	},
	 examples: {
		 'en-US': '80 feet tall',
	},
	 size: 12,
	 strength: 15,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 35,
	 armor: 8,
	 mods: 40,
	 crew: 1,
	 cost: 10000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Titan',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '120 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 14,
	 strength: 17,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 40,
	 armor: 9,
	 mods: 50,
	 crew: 1,
	 cost: 20000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['walker'] = Array(
{
	 name: {
		 'en-US': 'AMCM',
	},
	 description: {
		 'en-US': 'Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.',
	},
	 tag: 'amcm',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Increases a walker&apos;s Armor value by +2. All walker Armor is considered Heavy Armor.',
	},
	 tag: 'armor',
getMax: function(selectedObject) { return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.armor++;
selectedObject.armor++;
selectedObject.toughness++;
selectedObject.toughness++;
}
},
{
	 name: {
		 'en-US': 'Close Combat Weapon',
	},
	 description: {
		 'en-US': 'Some walkers are equipped with chain- blades or swords designed to cut through the hard armor of rival mechs, buildings, or enemy tanks. They have AP equal to the mech&apos;s Size and cause Str+2d10 damage (Heavy Weapon). The pilot uses the lower of his Fighting or Piloting to hit. The TN to hit an enemy mech or vehicle is 4, plus or minus normal speed or Size modifiers. Walkers aren&apos;t subject to all the normal rules of close combat, but GMs can use those as the basis for situational modifiers based on specific circumstances (such as multiple mechs ganging up on a foe).',
	},
	 tag: 'close-combat-weapon',
getMax: function(selectedObject) { return 2 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 75000;
},
},
{
	 name: {
		 'en-US': 'Deflector Screens',
	},
	 description: {
		 'en-US': 'The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large walkers, and 3 for Huge to Gargantuan vessels.',
	},
	 tag: 'deflector-screens',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Electromagnetic Shielding',
	},
	 description: {
		 'en-US': 'Adds +6 to the walker&apos;s effective Toughness from EMP missiles (see page 25).',
	},
	 tag: 'electromagnetic-shielding',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Jump Jets',
	},
	 description: {
		 'en-US': 'Powerful rockets give walkers the ability to propel themselves high in the air—to clear obstacles or perform “death from above” attacks on foes. To jump, the pilot uses an action to make a Piloting roll to both maneuver his walker and manage his power reserves. Each round spent jumping increases his height 50 feet for Light walkers, 30 feet for Mediums, and 20 feet for Heavies. Each subsequent round spent jumping (essentially flying) afterwards inflicts a –2 to the Piloting roll, cumulative to a maximum of –6. Failure means the walker descends immediately (a critical failure results in a fall—see Falling, page 59).',
	},
	 tag: 'jump-jets',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return selectedObject.size / 2;
},
},
{
	 name: {
		 'en-US': 'Missile Launcher',
	},
	 description: {
		 'en-US': 'Allows up to four Light or two Heavy (or AT) missiles to be fired at once.',
	},
	 tag: 'missile-launcher',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
selectedObject.hasMissileLauncher = 1;
}
},
{
	 name: {
		 'en-US': 'Pace',
	},
	 description: {
		 'en-US': 'Increases the mech&apos;s Pace by +4. (This cannot be taken with Speed Reduction.)',
	},
	 tag: 'pace',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 4000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.pace = selectedObject.pace + 4;
}
},
{
	 name: {
		 'en-US': 'Passenger Compartment',
	},
	 description: {
		 'en-US': 'Cramped space for four passengers. Rescue mechs often use this Modification.',
	},
	 tag: 'passenger-compartment',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
}
},
{
	 name: {
		 'en-US': 'Reinforced Frame',
	},
	 description: {
		 'en-US': 'Increases Toughness of the chassis by +2.',
	},
	 tag: 'reinforced-frame',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite',
	},
	 description: {
		 'en-US': '+4 Notice vs sound, motion, strong chemicals, radiation, or electrical fields up to 1000 yards.',
	},
	 tag: 'sensor-suite',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Shields',
	},
	 description: {
		 'en-US': 'The walker is protected by an ablative energy field that absorbs 10×Size points of damage before it&apos;s depleted. Apply all damage to the shield first, then any left over to the mech (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A walker may regenerate its Size in shield points if it makes no attacks in a round.',
	},
	 tag: 'shields',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Sloped Armor',
	},
	 description: {
		 'en-US': 'Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.',
	},
	 tag: 'sloped-armor',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Speed Reduction',
	},
	 description: {
		 'en-US': 'The walker sacrifices speed for additional room. Subtract 2 from Pace and add half its Size in Mod slots (round down).',
	},
	 tag: 'speed-reduction',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 20000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.pace -=  2;
selectedObject.mods += selectedObject.size / 2;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 description: {
		 'en-US': 'Radar-absorbing paint, heat baffles, scramblers, and other devices make the walker difficult to detect by vision or sensors. Those trying to attack or spot the mech subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the walker fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Strength Enhancement',
	},
	 description: {
		 'en-US': 'Add +2 to the walker&apos;s Strength.',
	},
	 tag: 'strength-enhancement',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.strength +=  2;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The walker&apos;s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000  * selectedObject.size;
}
}
);

/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	var savageWorldsVehicleWeapons = Array(


{
	 name: {
		 'en-US': 'Anti-Tank Missile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Anti-Tank Missiles',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 50, HW, MBT.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '100/200/400',
		 'damage': '8d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'anti-tank-missile',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0)
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Block Buster Bomb',
	},
	 name_plural: {
		 'en-US': 'Block Buster Bombs',
	},
	 description: {
		 'en-US': 'Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.',
	},
	 classification: {
		 'en-US': 'Bombs',
	},
	 notes: {
		 'en-US': 'AP 40, HW, 30” radius. 1001 to 4000 lb. bombs.',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '2',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'block-buster-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'City Buster Bomb',
	},
	 name_plural: {
		 'en-US': 'City Buster Bombs',
	},
	 description: {
		 'en-US': 'Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.',
	},
	 classification: {
		 'en-US': 'Bombs',
	},
	 notes: {
		 'en-US': 'AP 40, HW, 50” radius. 4001 to 8000 lb. bombs.',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '1',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'city-buster-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Grenade Launcher',
	},
	 name_plural: {
		 'en-US': 'Grenade Launchers',
	},
	 description: {
		 'en-US': 'Futuristic grenades are smaller, lighter, and pack a bit more punch than their predecessors. Grenade launchers may also use the grenades found on page 20.',
	},
	 classification: {
		 'en-US': 'Grenade Launcher',
	},
	 notes: {
		 'en-US': 'HW. LBT. Grenades cost $50 and weigh .25 pounds each. They are the same as the grenades listed on page 20 and may be thrown as well.',
	},
		 'range': '24/48/96',
		 'damage': '3d6',
		 'rof': '3',
		 'shots': '20',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'grenade-launcher',
		 'cost': '1000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Autocannon',
	},
	 name_plural: {
		 'en-US': 'Heavy Autocannons',
	},
	 description: {
		 'en-US': 'Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
	},
	 notes: {
		 'en-US': 'AP 8, Auto, HW. Covers 31 to 50mm rounds',
	},
		 'range': '75/150/300',
		 'damage': '4d8',
		 'rof': '3',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'heavy-autocannon',
		 'cost': '200000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Cannon',
	},
	 name_plural: {
		 'en-US': 'Heavy Cannons',
	},
	 description: {
		 'en-US': 'Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load',
	},
	 classification: {
		 'en-US': 'Cannons',
	},
	 notes: {
		 'en-US': 'AP 30, HW, MBT, Up to 80mm',
	},
		 'range': '100/200/400',
		 'damage': '5d10',
		 'rof': '1',
		 'shots': '30',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'heavy-cannon',
		 'cost': '800000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Flamethrower',
	},
	 name_plural: {
		 'en-US': 'Heavy Flamethrowers',
	},
	 description: {
		 'en-US': 'Flamethrowers use liquid or vapor fuel to burn targets. They’re often used to dig opponents out of caves or other tight places. The ones listed here are more powerful, lighter, and carry more propellant than older versions (such as those found in Savage Worlds).',
	},
	 classification: {
		 'en-US': 'Flame Weapons',
	},
	 notes: {
		 'en-US': 'HW, targets may catch fire. Can be fired in a Cone Template or a Medium Burst Template up to 18” distant. Affects target’s least Armored area.',
	},
		 'range': 'Cone',
		 'damage': '3d12',
		 'rof': '1',
		 'shots': '30',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '2',
		 'tag': 'heavy-flamethrower',
		 'cost': '1000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Laser',
	},
	 name_plural: {
		 'en-US': 'Heavy Lasers',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
	},
	 notes: {
		 'en-US': 'AP 15, HW.',
	},
		 'range': '150/300/600',
		 'damage': '4d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'heavy-laser',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy MG (2)',
	},
	 name_plural: {
		 'en-US': 'Heavy MG (2)',
	},
	 description: {
		 'en-US': 'Slugthrowers are traditional firearms firing chemically-propelled rounds.',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
	},
	 notes: {
		 'en-US': 'AP 4, Auto, HW. A 200 round belt of ammo costs $500 and weighs 20 pounds.',
	},
		 'range': '50/100/200',
		 'damage': '2d10',
		 'rof': '3',
		 'shots': '200',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'heavy-mg-2',
		 'cost': '5000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Missile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Missiles',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 12, HW, MBT.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '200/400/800',
		 'damage': '8d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'heavy-missile',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0 )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Heavy Torpedo',
	},
	 name_plural: {
		 'en-US': 'Heavy Torpedoes',
	},
	 description: {
		 'en-US': 'These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
	},
	 notes: {
		 'en-US': 'AP 50, HW, LBT. Space or watercraft only. Half Range in water.',
	},
		 'range': '300/600/1200',
		 'damage': '8d12',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '4',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'heavy-torpedo',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasTorpedoTube > 0 && ( selectedObject.aircraft > 0 || selectedObject.watercraft > 0 ) )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Large Bomb',
	},
	 name_plural: {
		 'en-US': 'Large Bombs',
	},
	 description: {
		 'en-US': 'Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.',
	},
	 classification: {
		 'en-US': 'Bombs',
	},
	 notes: {
		 'en-US': 'AP 30, HW, 20” radius. 501 to 1000 lb. bombs.',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '4',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'large-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Light Autocannon',
	},
	 name_plural: {
		 'en-US': 'Light Autocannons',
	},
	 description: {
		 'en-US': 'Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
	},
	 notes: {
		 'en-US': 'AP 4, Auto, HW, Reaction Fire. Up to 20mm rounds.',
	},
		 'range': '50/100/200',
		 'damage': '2d12',
		 'rof': '4',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'light-autocannon',
		 'cost': '50000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Flamethrower',
	},
	 name_plural: {
		 'en-US': 'Light Flamethrowers',
	},
	 description: {
		 'en-US': 'Flamethrowers use liquid or vapor fuel to burn targets. They’re often used to dig opponents out of caves or other tight places. The ones listed here are more powerful, lighter, and carry more propellant than older versions (such as those found in Savage Worlds).',
	},
	 classification: {
		 'en-US': 'Flame Weapons',
	},
	 notes: {
		 'en-US': 'HW, Cone Template, targets may catch fire. Affects target’s least Armored area.',
	},
		 'range': 'Cone',
		 'damage': '2d12',
		 'rof': '1',
		 'shots': '10',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-flamethrower',
		 'cost': '500',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Laser',
	},
	 name_plural: {
		 'en-US': 'Light Lasers',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
	},
	 notes: {
		 'en-US': 'AP 5, HW, Reaction Fire.',
	},
		 'range': '150/300/600',
		 'damage': '2d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'light-laser',
		 'cost': '100000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Missile',
	},
	 name_plural: {
		 'en-US': 'Light Missiles',
	},
	 description: {
		 'en-US': 'These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
	},
	 notes: {
		 'en-US': 'AP 6, HW, SBT.',
	},
		 'range': '200/400/800',
		 'damage': '5d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-missile',
		 'cost': '150000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0)
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Light Torpedo',
	},
	 name_plural: {
		 'en-US': 'Light Torpedoes',
	},
	 description: {
		 'en-US': 'These weapons use the rules for missiles in Savage Worlds and require missile launchers or torpedo tubes to mount. Attackers use Shooting to get a lock if firing directly or Knowledge (Computers) if fired indirectly from a bridge or weapons station. Defenders use Piloting if evading directly or Knowledge (Navigation) from a bridge or nav station. Determine lock by ship—if a ship gets a lock, it may fire all the missiles or torpedoes it’s allowed.',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
	},
	 notes: {
		 'en-US': 'AP 50, HW, LBT. Space or watercraft only. Half Range in water.',
	},
		 'range': '300/600/1200',
		 'damage': '5d12',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-torpedo',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasTorpedoTube > 0 && ( selectedObject.aircraft > 0 || selectedObject.watercraft > 0 ) )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Mass Driver 1',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 1',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 10 pound spheres that cost $100 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '1d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'mass-driver-1',
		 'cost': '100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 1 || selectedObject.objectType == "power_armor")
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 10',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 10',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '10d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'mass-driver-10',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 10)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 11',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 11',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '11d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-11',
		 'cost': '1100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 11)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 12',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 12',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '12d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-12',
		 'cost': '1200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 12)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 13',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 13',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '13d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-13',
		 'cost': '1300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 13)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 14',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 14',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '14d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-14',
		 'cost': '1300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 14)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 2',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 2',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 20 pound spheres that cost $200 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '2d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'mass-driver-2',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 2 || selectedObject.objectType == "power_armor")
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 3',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 3',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 30 pound spheres that cost $300 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '3d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'mass-driver-3',
		 'cost': '300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 3)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 4',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 4',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 40 pound spheres that cost $400 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '4d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'mass-driver-4',
		 'cost': '400000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 4)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 5',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 5',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 50 pound spheres that cost $500 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '5d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'mass-driver-5',
		 'cost': '500000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 5)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 6',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 6',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 60 pound spheres that cost $600 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '6d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'mass-driver-6',
		 'cost': '600000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 6)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 7',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 7',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 70 pound spheres that cost $700 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '7d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'mass-driver-7',
		 'cost': '700000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 7)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 8',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 8',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 80 pound spheres that cost $800 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '8d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'mass-driver-8',
		 'cost': '100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 8)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 9',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 9',
	},
	 description: {
		 'en-US': 'Mass drivers are large, space-based, rail systems used to magnetically accelerate heavy projectiles at high speed, causing devastating damage wherever they impact. The ranges listed below are practical limits. In space the actual range is infinite. Projectiles are made of dense metallic materials (rocks) such as can be found easily in asteroids or planets with no manufacturing capability, making them favorite weapons for long-range military vessels that need to supply from natural materials (5 shots per hour can be mined from most asteroids).',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 90 pound spheres that cost $90 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '9d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'mass-driver-9',
		 'cost': '900000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 9)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Massive Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Massive Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 25, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '8d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '7',
		 'tag': 'massive-laser',
		 'cost': '4000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if( selectedObject.size >= 14  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Medium Autocannon',
	},
	 name_plural: {
		 'en-US': 'Medium Autocannons',
	},
	 description: {
		 'en-US': 'Auto-cannons (also called chain guns) are powered weapons that fire bursts of chemically- propelled metal slugs at the target. They are primarily used by aircraft to destroy ground targets, or as point-defense weapons for starships. Ammo costs are for a full load.',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
	},
	 notes: {
		 'en-US': 'AP 6, Auto, HW. Covers 21 to 30mm rounds.',
	},
		 'range': '50/100/200',
		 'damage': '3d8',
		 'rof': '3',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'medium-autocannon',
		 'cost': '75000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium Bomb',
	},
	 name_plural: {
		 'en-US': 'Medium Bombs',
	},
	 description: {
		 'en-US': 'Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.',
	},
	 classification: {
		 'en-US': 'Bombs',
	},
	 notes: {
		 'en-US': 'AP 20, HW, 10” radius. 251 to 500 lb. bombs.',
	},
		 'range': 'Dropped',
		 'damage': '8d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'medium-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Medium Cannon',
	},
	 name_plural: {
		 'en-US': 'Medium Cannons',
	},
	 description: {
		 'en-US': 'Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load',
	},
	 classification: {
		 'en-US': 'Cannons',
	},
	 notes: {
		 'en-US': 'AP 20, HW, MBT, Up to 60mm',
	},
		 'range': '75/150/300',
		 'damage': '4d10',
		 'rof': '1',
		 'shots': '40',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'medium-cannon',
		 'cost': '600000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium Laser',
	},
	 name_plural: {
		 'en-US': 'Medium Lasers',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
	},
	 notes: {
		 'en-US': 'AP 10, HW.',
	},
		 'range': '150/300/600',
		 'damage': '3d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'medium-laser',
		 'cost': '500000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium MG (2)',
	},
	 name_plural: {
		 'en-US': 'Medium MG (2)',
	},
	 description: {
		 'en-US': 'Slugthrowers are traditional firearms firing chemically-propelled rounds.',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
	},
	 notes: {
		 'en-US': 'AP 2, Auto. A 200 round belt of ammo costs $400 and weighs 15 pounds.',
	},
		 'range': '30/60/120',
		 'damage': '2d8+1',
		 'rof': '4',
		 'shots': '200',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'medium-mg-2',
		 'cost': '3000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Mega Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Mega Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 25, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '10d10',
		 'rof': '',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '10',
		 'tag': 'massive-laser',
		 'cost': '10000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if( selectedObject.size >= 16  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Minigun',
	},
	 name_plural: {
		 'en-US': 'Miniguns',
	},
	 description: {
		 'en-US': 'Slugthrowers are traditional firearms firing chemically-propelled rounds.',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
	},
	 notes: {
		 'en-US': 'AP 3, Auto, HW. An additional 1000 round drum of ammunition weighs 20 pounds and costs $1000.',
	},
		 'range': '24/48/96',
		 'damage': '2d8+4',
		 'rof': '4',
		 'shots': '1000',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'minigun',
		 'cost': '10000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Heavy',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Heavy',
	},
	 description: {
		 'en-US': 'Vehicular blasters fire a stream of charged particles (ions). Because the weapon fires a stream, a raise on the attack roll causes +2d6 damage instead of the usual 1d6.',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
	},
	 notes: {
		 'en-US': 'AP 20, HW',
	},
		 'range': '100/200/400',
		 'damage': '6d8+2',
		 'rof': '1',
		 'shots': 'U',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'particle-accelerator-heavy',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Light',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Light',
	},
	 description: {
		 'en-US': 'Vehicular blasters fire a stream of charged particles (ions). Because the weapon fires a stream, a raise on the attack roll causes +2d6 damage instead of the usual 1d6.',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
	},
	 notes: {
		 'en-US': 'AP 20, HW',
	},
		 'range': '100/200/400',
		 'damage': '3d8+2',
		 'rof': '1',
		 'shots': 'U',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'particle-accelerator-light',
		 'cost': '100000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Medium',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Medium',
	},
	 description: {
		 'en-US': 'Vehicular blasters fire a stream of charged particles (ions). Because the weapon fires a stream, a raise on the attack roll causes +2d6 damage instead of the usual 1d6.',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
	},
	 notes: {
		 'en-US': 'AP 20, HW',
	},
		 'range': '100/200/400',
		 'damage': '4d8+2',
		 'rof': '1',
		 'shots': 'U',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'particle-accelerator-medium',
		 'cost': '500000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Small Bomb',
	},
	 name_plural: {
		 'en-US': 'Small Bombs',
	},
	 description: {
		 'en-US': 'Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.',
	},
	 classification: {
		 'en-US': 'Bombs',
	},
	 notes: {
		 'en-US': 'AP 10, HW, LBT. Up to 250 lb. bombs.',
	},
		 'range': 'Dropped',
		 'damage': '6d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'small-bomb',
		 'cost': '500000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Small Cannon',
	},
	 name_plural: {
		 'en-US': 'Small Cannons',
	},
	 description: {
		 'en-US': 'Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load',
	},
	 classification: {
		 'en-US': 'Cannons',
	},
	 notes: {
		 'en-US': 'AP 10, HW, MBT, Up to 40mm',
	},
		 'range': '50/100/200',
		 'damage': '3d10',
		 'rof': '1',
		 'shots': '50',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'small-cannon',
		 'cost': '400000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Super-Heavy Cannon',
	},
	 name_plural: {
		 'en-US': 'Super-Heavy Cannons',
	},
	 description: {
		 'en-US': 'Cannons fire large, chemically-propelled, explosive shells. The shells listed below are the most common. High explsive versions reduce the damage die type to d8 and halve AP but increase the Burst Template to Large ot 10” radius if already Large. Ammo costs are per full load',
	},
	 classification: {
		 'en-US': 'Cannons',
	},
	 notes: {
		 'en-US': 'AP 40, HW, MBT, Up to 200mm',
	},
		 'range': '150/300/600',
		 'damage': '6d10',
		 'rof': '1',
		 'shots': '20',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'super-heavy-cannon',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Super-Heavy Laser',
	},
	 name_plural: {
		 'en-US': 'Super-Heavy Lasers',
	},
	 description: {
		 'en-US': 'Lasers of this size burn through solid materials and flashboil flesh. (They don’t use the rules for personal lasers listed on page 20.)',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
	},
	 notes: {
		 'en-US': 'AP 20, HW.',
	},
		 'range': '150/300/600',
		 'damage': '5d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'super-heavy-laser',
		 'cost': '2000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if( selectedObject.size >= 14  )
return true;
else
return false;
}}
);

