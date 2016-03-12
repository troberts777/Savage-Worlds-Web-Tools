/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

var sciFiCreator = function() {};
sciFiCreator.prototype = {

	init: function(object_type, object_label, available_sizes, available_mods, available_options) {
		this.item_name = "";
		this.object_description = "";
		this.useLang = "en-US";

		this.uuid = this.make_uuid();

		this.object_label = object_label;
		this.object_label = object_label;
		this.examples = "";
		this.extra_notes = "";
		this.size = 0;
		this.object_type = object_type;
		this.acc = 0;
		this.ts = 0;
		this.climb = 0;
		this.toughness = 0;
		this.base_toughness = 0;
		this.base_cost = 0;
		this.armor = 0;
		this.front_armor = 0
		this.side_armor = 0;
		this.creator_options = Array();
		this.number_of_legs = 0;
		this.rear_armor = 0;
		this.mods = 0;
		this.base_mods = 0;
		this.crew = 0;
		this.has_weapon_mounts = 0;
		this.requires_mount_point = 0;
		this.flying_pace = 0;
		this.cost = 0;
		this.vehicle_weapon_mod_points = 0;
		this.energy_capacity =  0;
		this.base_energy_capacity =  0;
		this.provisions = 0;

		this.has_torpedo_tube = 0;
		this.has_missile_launcher = 0;

		this.aircraft = 0;

		this.selected_size = 0;

		if(available_options)
			this.available_options = available_options;
		else
			this.available_options = Array();

		if(available_sizes)
			this.available_sizes = available_sizes;
		else
			this.available_sizes = Array();

		if(available_mods)
			this.available_mods = available_mods;
		else
			this.available_mods = Array();

		this.selected_modifications = Array();
		this.selected_modifications_list = {};

		this.mods_available = 0;

		this.selected_weapons = Array();
		this.selected_weapons_list = Array();

		if(this.object_type == "power_armor") {
			this.requires_mount_point = 1;
			this.has_weapon_mounts = 1;
		} else {
			this.requires_mount_point = 0;
			this.has_weapon_mounts = 0;
		}
	},

	make_uuid: function(){
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
		this.init(this.object_type, this.object_label, this.available_sizes, this.available_mods, this.available_options);
	},

	set_sizes: function(available_sizes) {
		this.available_sizes = available_sizes
	},

	export_html: function() {
		return this.create_stats_block();
	},

	get_mod_name: function( modTag ) {
		// search through available mods to see if function exists

		for(getModCount = 0; getModCount < this.available_mods.length; getModCount++) {
			if( this.available_mods[getModCount].tag == modTag ) {
				return this.get_local_name( this.available_mods[getModCount].name );
			}
		}

		return "Error: get_mod_name - Not Found !";
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

	get_local_name: function( incoming_string_array ) {
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

	create_stats_block: function(jquery_selector) {
		html_return = "";

		html_return += "<h3>" + this.item_name + "</h3>";
		html_return += "<p>";

		html_return += this.object_description + "</p><br />";

		if(this.selected_size && this.selected_size.size > 0) {
			html_return += "<strong>" + this.get_local_name(this.selected_size.size_label)  + "</strong>: ";
			html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
			if(this.acc > 0)
				html_return += this.getTranslation("CREATOR_ACC_TS") + " " +  this.acc + "/" + this.format_pace_realworld(this.ts) + ", ";
			if(this.aircraft)
				html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
			if(this.flying_pace > 0)
				html_return += this.getTranslation("CREATOR_FLYPACE") + " " +  this.format_pace_realworld(this.flying_pace) + ", ";
			if(this.toughness > 0) {
				if( this.front_armor > 0 ) {
					html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (<span title='" + this.getTranslation("CREATOR_FASARA")  + ")'>" + this.front_armor + "/" + this.side_armor + "/" +  this.rear_armor + "</span>), ";
				} else {
					html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
				}

			} else {
				if(this.armor) {
					html_return += this.getTranslation("CREATOR_ARMOR") + " +"  + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += this.getTranslation("CREATOR_PACE") + " "  + this.format_pace_realworld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += this.getTranslation("CREATOR_CREW") + " "  + this.crew + ", ";

			if(this.strength > 0)
				html_return += this.getTranslation("CREATOR_STRENGTH") + " "  + this.get_strength_label( this.strength ) + ", ";

			html_return += this.getTranslation("CREATOR_COST") + " C$" + this.formatMoney(this.cost, 0) + ", ";
			html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " "  + this.mods_available + "<br />";


			//html_return += "<strong>Mods Available</strong>: " + this.mods_available + "<br />";
			if( this.has_weapon_mounts )
				html_return += "<strong>" + this.getTranslation("CREATOR_WEAPON_MODS_AVAILABLE")  + "</strong>: " + this.vehicle_weapon_mod_points + "<br />";

			html_return += "<strong>" + this.getTranslation("CREATOR_NOTES")  + "</strong>: ";

			this.sort_selected_modifications_list();
			var mod_count = 0;

			for(var modTag in this.selected_modifications_list){

				if( mod_count > 0)
					html_return += ", ";
				if(this.selected_modifications_list[modTag] > 1)
  					html_return += this.selected_modifications_list[modTag] + "x "

  				modName = this.get_mod_name(modTag);
  				html_return += modName;

  				mod_count++;
			}
			if( mod_count == 0)
				html_return += this.getTranslation("CREATOR_NONE");

			html_return += "<br />";

			html_return += "<strong>" + this.getTranslation("CREATOR_WEAPONS")  + "</strong>: ";
			this.sort_selected_weapons_list();
			html_return += "<ul>";
			var weapon_count = 0;
			// console.log("this.selected_weapons_list",this.selected_weapons_list);
			for(var weaponName in this.selected_weapons_list){
				html_return += "<li>";
				if(this.selected_weapons_list[weaponName].count > 1)
  					html_return += this.selected_weapons_list[weaponName].count + "x ";
  				//this.selected_weapons_list[weaponName].obj = this.update_weapon_display_name( this.selected_weapons_list[weaponName] );
  				html_return += this.selected_weapons_list[weaponName].obj.display_name;
  				html_return += this.make_weapon_stat_html( this.selected_weapons_list[weaponName].obj );
  				html_return += "</li>";
  				weapon_count++;
			}
			if( weapon_count == 0 )
				html_return += "<li>" + this.getTranslation("CREATOR_NONE")  + "</li>";
			html_return += "</ul>";

			if( this.get_modification_count("Shields") > 0) {
				html_return += "<strong>" + this.getTranslation("CREATOR_SHIELDS")  + "</strong>: ";
				html_return += this.size * 10;
				may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
				html_return += " - " + may_recover + "<br />";
			}

			if(this.energy_capacity > 0)
				html_return += "<strong>" + this.getTranslation("CREATOR_ENERGY_CAPACITY")  + "</strong>: " + this.energy_capacity + "<br />";

			if( this.extra_notes != "" ) {
				html_return += "<strong>" + this.getTranslation("CREATOR_EXTRA_NOTES")  + "</strong>: ";
				html_return += this.extra_notes;
			}
		} else {
			html_return += this.getTranslation("CREATOR_SIZE_MUST_BE_SELECTED");
		}
		if(jquery_selector)
			$(jquery_selector).html(html_return);

		return html_return;
	},

	make_weapon_stat_html: function( weapon_object ) {
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
		notes = this.get_local_name( weapon_object.notes );
		if( notes != "")
			return_val += notes + ", ";
		return_val = return_val.substring(0, return_val.length - 2);
		return_val += ")";
		return return_val;
	},

	export_bbcode: function(jquery_selector) {
		html_return = "";

		html_return += "[b][size=150]" + this.item_name + "[/size][/b]\n";
		if(this.object_description)
			html_return += "" + this.object_description + "\n\n";
		else
			html_return += "\n";

		if(this.selected_size && this.selected_size.size_label) {
			html_return += "[b]" + this.get_local_name(this.selected_size.size_label) + "[/b]: ";
			html_return += this.getTranslation("CREATOR_SIZE") + " " + this.size + ", ";
			if(this.acc > 0)
				html_return += this.getTranslation("CREATOR_ACC_TS") + " " + this.acc + "/" + this.format_pace_realworld(this.ts) + ", ";
			if(this.aircraft)
				html_return += this.getTranslation("CREATOR_CLIMB") + " " + this.climb + ", ";
			if(this.flying_pace > 0)
				html_return += this.getTranslation("CREATOR_FLYPACE") + " " + this.format_pace_realworld(this.flying_pace) + ", ";
			if(this.toughness > 0) {
				html_return += this.getTranslation("CREATOR_TOUGHNESS") + " " + this.toughness + " (" + this.armor + "), ";
			} else {
				if(this.armor) {
					html_return += this.getTranslation("CREATOR_ARMOR") + "  +" + this.armor + ", ";
				}
			}

			if(this.pace > 0)
				html_return += this.getTranslation("CREATOR_PACE") + "  " + this.format_pace_realworld(this.pace) + ", ";
			if(this.crew > 0)
				html_return += this.getTranslation("CREATOR_CREW") + "  " + this.crew + ", ";

			if(this.strength > 0)
				html_return += this.getTranslation("CREATOR_STRENGTH") + "  " + this.get_strength_label( this.strength ) + ", ";

			html_return += this.getTranslation("CREATOR_COST") + " C$" + this.simplify_cost(this.cost) + ", ";
			html_return += this.getTranslation("CREATOR_REMAINING_MODS") + " " + this.mods_available + "\n";

			html_return += "[b]" + this.getTranslation("CREATOR_NOTES") + "[/b]: ";

			var mod_count = 0;
			for(var modName in this.selected_modifications_list){
				if( mod_count > 0)
					html_return += ", ";
				if(this.selected_modifications_list[modName] > 1)
  					html_return += this.selected_modifications_list[modName] + "x ";
				html_return += modName;
				mod_count++;
			}
			if(mod_count == 0)
				html_return += this.getTranslation("CREATOR_NONE");

			html_return += "\n";

			html_return += "[b]" + this.getTranslation("CREATOR_WEAPONS") + "[/b]: ";
			html_return += "[list]";
			this.sort_selected_weapons_list();
			var weapon_count = 0;
			var weapon_count = 0;
			// console.log("this.selected_weapons_list",this.selected_weapons_list);
			for(var weaponName in this.selected_weapons_list){
				html_return += "[*]";
				if(this.selected_weapons_list[weaponName].count > 1)
  					html_return += this.selected_weapons_list[weaponName].count + "x ";
  				//this.selected_weapons_list[weaponName].obj = this.update_weapon_display_name( this.selected_weapons_list[weaponName] );
  				html_return += this.selected_weapons_list[weaponName].obj.display_name;
  				html_return += this.make_weapon_stat_html( this.selected_weapons_list[weaponName].obj );
  				html_return += "\n";
  				weapon_count++;
			}
			if( weapon_count == 0 )
				html_return += "[*]" + this.getTranslation("CREATOR_NONE") + ".\n";
			html_return += "[/list]";

			html_return += "\n";

			if( this.get_modification_count("Shields") > 0) {
				html_return += "[b]" + this.getTranslation("CREATOR_SHIELDS") + "[/b]: ";
				html_return += this.size * 10;
				may_recover = this.getTranslation("CREATOR_MAY_RECOVER").replace("{value}", this.size);
				html_return += " - " + may_recover + "\n";
			}


			if(this.energy_capacity > 0)
				html_return += "[b]" + this.getTranslation("CREATOR_ENERGY_CAPACITY") + "[/b]: " + this.energy_capacity + "\n";
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

	export_json: function(jquery_selector) {
		exportObject = {};
		exportObject.size = this.size;
		exportObject.object_type = this.object_type;
		exportObject.item_name = this.item_name;
		exportObject.uuid = this.uuid;
		exportObject.object_description = this.object_description;
		exportObject.mods = Array();
		exportObject.options = this.creator_options;
		for(modCounter = 0; modCounter < this.selected_modifications.length; modCounter++)
			exportObject.mods = exportObject.mods.concat( this.selected_modifications[modCounter].tag );
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

	import_json: function(importedObjectString) {
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
			this.set_size(importedObj.size);
			this.set_name(importedObj.item_name);
			if( typeof(importedObj.object_description) != "undefined")
				this.set_description(importedObj.object_description);
			if( typeof(importedObj.uuid) != "undefined")
				this.uuid = importedObj.uuid;

			// legacy version description checks
			if( typeof(importedObj.ship_description) != "undefined")
				this.set_description(importedObj.ship_description);
			if( typeof(importedObj.power_armor_description) != "undefined")
				this.set_description(importedObj.power_armor_description);
			if( typeof(importedObj.walker_description) != "undefined")
				this.set_description(importedObj.walker_description);
			if( typeof(importedObj.vehicle_description) != "undefined")
				this.set_description(importedObj.vehicle_description);

			if( importedObj.options )
				this.creator_options = importedObj.options;

			for(modCounter = 0; modCounter < importedObj.mods.length; modCounter++)
				this.add_mod( importedObj.mods[modCounter] );

			for(local_weapon_counter = 0; local_weapon_counter < importedObj.weapons.length; local_weapon_counter++) {
				if( importedObj.weapons[local_weapon_counter].tag)
					this.add_weapon( importedObj.weapons[local_weapon_counter].tag );
				else
					this.add_weapon( importedObj.weapons[local_weapon_counter].name );

				if( typeof(importedObj.weapons[local_weapon_counter].fixed) != "undefined" && importedObj.weapons[local_weapon_counter].fixed != "")
					this.fix_weapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].fixed );

				if( typeof(importedObj.weapons[local_weapon_counter].count) != "undefined" && importedObj.weapons[local_weapon_counter].count > 0)
					this.set_weapon_count( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].count );

				if( typeof(importedObj.weapons[local_weapon_counter].linked) != "undefined" && importedObj.weapons[local_weapon_counter].linked > 0)
					this.link_weapon( this.selected_weapons.length - 1, importedObj.weapons[local_weapon_counter].linked);

			}
			this.calculate();
			return true;
		}
		// Wasn't an object (or was empty)
		// console.log("Import is not object");
		return false;
	},

	sort_selected_modifications_list: function() {
		var keyList = Object.keys(this.selected_modifications_list);

		keyList.sort();

		var newList = {};

		for (var keyCount = 0; keyCount < keyList.length; keyCount++) {
			keyName = keyList[keyCount];
			newList[keyName] = this.selected_modifications_list[keyName];
		}
		this.selected_modifications_list = newList;
	},

	sort_selected_weapons_list: function() {
	 	/* Do nothing as the main should handle this now */
	},

	sort_weapon_list: function() {

		this.selected_weapons.sort(function(a, b){
			if( a.linkable < b.linkable ) return 1;
			if( a.linkable > b.linkable ) return -1;
			if(a.mods > b.mods) return -1;
			if(a.mods < b.mods) return 1;
			return 0;
		});
	},

	append_extra_notes: function( note ) {
		if(this.extra_notes != "")
			this.extra_notes += ", ";
		this.extra_notes += note;
		return note;
	},

	calculate: function() {


		if( this.selected_size && this.selected_size.size_label ) {
			// Flush Stats for recalulation
			this.strength = 0;

			this.strength_bonus = 0;
			this.aircraft = 0;
			this.watercraft = 0;
			this.flying_pace = 0;
			this.has_weapon_mounts = 0;
			this.vehicle_weapon_mod_points = 0;

			this.has_torpedo_tube = 0;
			this.has_missile_launcher = 0;

			this.examples = this.selected_size.examples;
			this.size = this.selected_size.size;
			this.acc = this.selected_size.acc;
			this.ts = this.selected_size.ts;
			this.aircraft = 0;
			this.strength_bonus = 0;
			this.climb = this.selected_size.climb;
			if(this.selected_size.strength)
				this.strength = this.selected_size.strength;
			this.toughness = this.selected_size.toughness;
			this.base_toughness = this.selected_size.toughness;
			this.armor = this.selected_size.armor;
			this.mods = this.selected_size.mods;
			this.base_mods = this.selected_size.mods;
			this.crew = this.selected_size.crew;
			this.cost = this.selected_size.cost;
			this.base_cost =  this.selected_size.cost;
			this.energy_capacity = this.selected_size.energy_capacity;
			this.base_energy_capacity = this.selected_size.energy_capacity;
			this.provisions = this.selected_size.provisions;
			this.weight = this.selected_size.weight;
			this.pace = this.selected_size.pace;
			this.base_pace = this.selected_size.pace;

			this.extra_notes = "";

			this.mods_available = this.mods;

			// Starship is always an aircraft for these purposes ;)
			if(this.object_type == "starship")
				this.aircraft = 1;

			// Go through Mods for availability, calculation and listings
			this.selected_modifications.sort( this.sort_mods );
			// Sort mods
			this.selected_modifications_list = {};
			for(calcModCount = 0; calcModCount < this.selected_modifications.length; calcModCount++) {
				//this.selected_modifications_list += "<li>" + this.selected_modifications[modCount].name + "</li>";
				this.mods = this.mods - this.selected_modifications[calcModCount].get_mod_cost(this);
				this.cost += this.selected_modifications[calcModCount].get_cost(this);

				// attempt to see if mod is still availble - remove if it's not.
				if( this.selected_modifications[calcModCount].is_available ) {
					if(this.selected_modifications[calcModCount].is_available(this) == false) {
						this.remove_mod(this.selected_modifications[calcModCount].tag);
						this.calculate();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

				// console.log( this.selected_modifications[calcModCount].name + "/" + this.selected_modifications[calcModCount].get_mod_cost(this) + "/" + this.mods );

				if( this.selected_modifications[calcModCount].get_weight )
					this.weight += this.selected_modifications[calcModCount].get_weight(this);

				if( this.selected_modifications[calcModCount].get_mod_effect )
					this.selected_modifications[calcModCount].get_mod_effect(this);

				// Linked weapons are displayed elsewhere...
				if(this.selected_modifications[calcModCount].tag != "linked") {
					if( typeof(this.selected_modifications_list[this.selected_modifications[calcModCount].tag]) == "undefined")
						this.selected_modifications_list[this.selected_modifications[calcModCount].tag] = 1;
					else
						this.selected_modifications_list[this.selected_modifications[calcModCount].tag]++;
				}
			}

			// Go through Weapons for availability, calculation and listings
			// Sort weapons
			//this.selected_weapons.sort( sort_mods );
			this.sort_weapon_list();

			this.selected_weapons_list = {};
			fixedWeaponModUsage = 0;
			linkedWeaponModUsage = Array();
			otherWeaponModUsage = 0;
			for(calcModCount = 0; calcModCount < this.selected_weapons.length; calcModCount++) {

				// attempt to see if weapon is still availble - remove if it's not.
				if( this.selected_weapons[calcModCount].is_available ) {
					if(this.selected_weapons[calcModCount].is_available(this) == false) {
						this.remove_weapon(calcModCount);
						this.calculate();
						// stop all processing as the page is recalcuating anyways
						return;
					}
				}

				this.selected_weapons[calcModCount] = this.update_weapon_display_name( this.selected_weapons[calcModCount] );
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
				//this.vehicle_weapon_mod_points = this.vehicle_weapon_mod_points - weaponModCost;


				if(this.requires_mount_point > 0)
					this.vehicle_weapon_mod_points -= weaponModCost;
				else
					this.mods -= weaponModCost;

				// console.log( this.selected_weapons[calcModCount].name + "(" + this.selected_weapons[calcModCount].count + ")/" + weaponModCost + "/" + this.mods );

				if( this.selected_weapons[calcModCount].get_weight )
					this.weight += this.selected_weapons[calcModCount].get_weight(this);

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
				// console.log("this.selected_weapons_list[weaponListName]", this.selected_weapons_list[weaponListName]);
				if( typeof(this.selected_weapons_list[weaponListName]) == "undefined" || this.selected_weapons_list[weaponListName] == "0") {
					if( this.selected_weapons[calcModCount].missiles_per > 0)
						this.selected_weapons_list[weaponListName] = {
							obj: this.selected_weapons[calcModCount],
							count: this.selected_weapons[calcModCount].missiles_per
						};
					else
						this.selected_weapons_list[weaponListName] = {
							obj: this.selected_weapons[calcModCount],
							count: 1
						};

				} else {
					if( this.selected_weapons[calcModCount].missiles_per > 0 )
						this.selected_weapons_list[weaponListName].count += this.selected_weapons[calcModCount].missiles_per.count;
					else
						this.selected_weapons_list[weaponListName].count++;
				}
			}

			this.mods_available = this.mods; // - sort_selected_modifications_list.length;
			if(this.requires_mount_point == 0) {
				this.vehicle_weapon_mod_points = this.mods_available; // - sort_selected_modifications_list.length;
			}


		}
	},

	set_name: function(newValue) {
		this.item_name = newValue;
	},

	set_option: function( short_tag, value ) {
//		console.log("set_option called: " + this.get_option_ls_name(short_tag) + ", " + value);
		localStorage.setItem( this.get_option_ls_name(short_tag), value.toString() );
	},

	get_option_ls_name: function( short_tag) {
		return "com.jdg.swwt.settings." + current_selected_object.object_type + "." + short_tag;
	},

	get_available_options: function() {
//		console.log("get_available_options called");
		if(this.available_options) {
			// put current values into system
			for(localSettingCount = 0; localSettingCount < this.available_options.length; localSettingCount++) {
				if( typeof(this.available_options[localSettingCount].desciption) == "undefined") {
					this.available_options[localSettingCount].desciption = "";
				}

				this.available_options[localSettingCount].value = localStorage.getItem( this.get_option_ls_name( this.available_options[localSettingCount].short_tag ) );
//				console.log(this.get_option_ls_name( this.available_options[localSettingCount].short_tag ) + " - " + this.available_options[localSettingCount].value);
				if(this.available_options[localSettingCount].value == "1")
					this.available_options[localSettingCount].value = this.available_options[localSettingCount].value / 1;
			}
			return this.available_options;

		} else {
//			console.log("No settings?");
			return Array();
		}
	},

	format_pace_realworld: function(pace_value) {
		// never take things at pace value. /groan
		return pace_value + " (" + Math.floor(pace_value * 2.4)+ " mph, " + Math.floor(pace_value * 3.862416) + " kph)";
	},

	set_description: function(newValue) {
		this.object_description = newValue;
	},

	add_mod: function(modName) {
		return_value = 0;
		if( !modName ) {
			return false;
		}
		for(addModCount = 0; addModCount < this.available_mods.length; addModCount++) {
			if(
				modName.toLowerCase() == this.available_mods[addModCount].tag.toLowerCase()
				||
				modName.toLowerCase() == this.available_mods[addModCount].name["en-US"].toLowerCase()
			) {
				//newMod = jQuery.extend({}, this.available_mods[addModCount]);
				var newMod = {};
				angular.extend(newMod, this.available_mods[addModCount]);
				this.selected_modifications = this.selected_modifications.concat( newMod  );
				return;
			}
		}

		return return_value;
	},

	get_strength_label: function( strength_value ) {
		strength_value = strength_value / 1;
		if( attribute_labels[strength_value] )
			return attribute_labels[strength_value];
		else
			return "UNKNOWN VALUE";
	},

	add_weapon: function(weaponName) {
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

	update_weapon_display_name: function( weaponObject ) {
		weaponObject.count = weaponObject.count / 1;
		weaponObject.mods = weaponObject.mods / 1;

		if( weaponObject.count == 1 ){
			weaponObject.display_name = this.get_local_name(weaponObject.name);
		}
		if( weaponObject.count == 2 ){
			linkedTranslation = this.getTranslation("CREATOR_DUAL_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.get_local_name(weaponObject.name_plural) );
		}
		if( weaponObject.count == 3 ){
			linkedTranslation = this.getTranslation("CREATOR_TRI_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.get_local_name(weaponObject.name_plural) );
		}
		if( weaponObject.count == 4 ){
			linkedTranslation = this.getTranslation("CREATOR_QUAD_LINKED");
			weaponObject.display_name = linkedTranslation.replace("{name}",this.get_local_name(weaponObject.name_plural) );
		}

		if( weaponObject.count > 1 ) {
			weaponObject.current_mod_cost = (weaponObject.mods * weaponObject.count) / 2;
		} else {
			weaponObject.current_mod_cost = weaponObject.mods;
		}

		return weaponObject;
	},

	increment_weapon_count: function( weaponIndex ) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons[weaponIndex].count++;
		if( this.selected_weapons[weaponIndex].count > 4)
			this.selected_weapons[weaponIndex].count = 4;

	},

	set_weapon_count: function( weaponIndex, newCount ) {
		weaponIndex = weaponIndex / 1;
		if( this.selected_weapons[weaponIndex] ) {
			this.selected_weapons[weaponIndex].count = newCount;
			if( this.selected_weapons[weaponIndex].count < 1)
				this.selected_weapons[weaponIndex].count = 1;
			if( this.selected_weapons[weaponIndex].count > 4)
				this.selected_weapons[weaponIndex].count = 4;
		}
	},

	decrement_weapon_count: function( weaponIndex ) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons[weaponIndex].count--;
		if( this.selected_weapons[weaponIndex].count < 1)
			this.selected_weapons[weaponIndex].count = 1;
	},

	remove_mod: function(modName) {
		for(removeModCount = 0; removeModCount < this.selected_modifications.length; removeModCount++) {
			if(modName.toLowerCase() == this.selected_modifications[removeModCount].tag.toLowerCase()) {
				this.selected_modifications.splice(removeModCount, 1);
				return;
			}
		}
	},

	remove_weapon: function(weaponIndex) {
		weaponIndex = weaponIndex / 1;
		this.selected_weapons.splice(weaponIndex, 1);
	},

	link_weapon: function(weaponIndex, linkIndex) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].linked = (linkIndex / 1);
	},

	fix_weapon: function(weaponIndex, fixedValue) {
		weaponIndex = weaponIndex / 1;

		this.selected_weapons[weaponIndex].fixed = (fixedValue);
	},

	get_linked_weapons: function() {
		numberOfLinks = this.get_modification_count("Linked");
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

	get_modification_count: function(modName) {
		return_value = 0;
		for(modCount = 0; modCount < this.selected_modifications.length; modCount++) {
			if(modName.toLowerCase() == this.selected_modifications[modCount].tag.toLowerCase())
				return_value++;
		}

		return return_value;
	},

	set_size: function(sizeNumber) {
		for(sizeCount = 0; sizeCount < this.available_sizes.length; sizeCount++) {
			if(sizeNumber == this.available_sizes[sizeCount].size) {
				this.selected_size = this.available_sizes[sizeCount];
				this.size = this.available_sizes[sizeCount].size;
				return true;
			}
		}
		return false;
	},

	sort_mods: function(a,b) {
		if( typeof(a.calc_weight) == "undefined")
			a.calc_weight = 5;
		if( typeof(b.calc_weight) == "undefined")
			b.calc_weight = 5;

		if (a.calc_weight < b.calc_weight){
			return -1;
		} else {
			if (a.calc_weight > b.calc_weight) {
				return 1;
			} else {
				return a.name > b.name;
			}
		}
	},
	option_active: function( short_tag ) {
		value = localStorage.getItem( this.get_option_ls_name( short_tag) );
		value = value / 1;
		if( value > 0 )
			return true;
		else
			return false;
	},

	add_option: function(option_tag) {
	//	console.log("add_option", option_tag);
	//	if( this.creator_options && !this.creator_options.contains( option_tag ) ) {
	//		this.creator_options.push( option_tag ) ;
	//	}
		var push_it = false;
		for( var opt_c = this.creator_options.length - 1; opt_c >= 0; opt_c--) {
			if( this.creator_options[opt_c] == option_tag )
				return false;
		}
		this.creator_options.push( option_tag ) ;

	},

	remove_option: function(option_tag) {
	//	console.log("remove_option", option_tag);
		for( var opt_c = this.creator_options.length - 1; opt_c >= 0; opt_c--) {
			if( this.creator_options[opt_c] == option_tag )
				this.creator_options.splice( opt_c, 1);

		}
	},

	has_option: function(option_tag) {

		for( var opt_c = this.creator_options.length - 1; opt_c >= 0; opt_c--) {
			if( this.creator_options[opt_c] == option_tag )
				return true;
		}
		return false;
	},

	propogate_size_select: function(jquery_selector) {
		if(jquery_selector)
			jquery_selector = ".js-select-size";
		selectOptions = "<option value=''>- Select Size -</option>";
		for(sizeCount = 0; sizeCount < this.available_sizes.length; sizeCount++) {
			isSelected = "";
			display_option = true;
			if( typeof(this.available_sizes[sizeCount].show_with_option) != "undefined" ) {
				if( this.option_active( this.available_sizes[sizeCount].show_with_option ) ) {
					display_option = true;
				} else {
					display_option = false;
				}
			}

			if( typeof(this.available_sizes[sizeCount].hide_with_option) != "undefined" ) {
				if( this.option_active( this.available_sizes[sizeCount].hide_with_option ) ) {
					display_option = false;
				} else {
					display_option = true;
				}
			}

			if( display_option ) {
				if( this.selected_size && this.selected_size.size )
					if(  this.selected_size.size == this.available_sizes[sizeCount].size )
						isSelected = " selected='selected'";
				selectOptions += "<option value='" + this.available_sizes[sizeCount].size + "'" + isSelected + ">";
				selectOptions += this.available_sizes[sizeCount].size_label + " - Size " + this.available_sizes[sizeCount].size;
				if( this.available_sizes[sizeCount].examples )
					selectOptions += " - " + this.available_sizes[sizeCount].examples;
				selectOptions += "</option>";
			}
		}
		$(jquery_selector).html(selectOptions);
	}
};
