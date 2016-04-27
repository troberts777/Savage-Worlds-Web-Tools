
function savageCharacter (useLang) {

	this.init(useLang);

}

savageCharacter.prototype.init = function(useLang){

	this.appVersion = "2016040101";

	if( useLang )
		this.useLang = useLang;
	else if( localStorage["users_preferred_language"] )
		this.useLang = localStorage["users_preferred_language"];
	else
		this.useLang = "en-US";

	this.name = "";
	this.background = "";

	this.description = "";

	this.selectedAdvancements = Array();

	this.startingFunds = 500;
	this.currentFunds = 500;

	this.xpOptions = Array();
	for( var optCounter = 0; optCounter <= 100; optCounter++) {
		var xpObj = {
			value: optCounter,
			rankValue: 0,
			label: optCounter,
			rankName: "temp"
		};
		if( optCounter < 20) {
			xpObj.rankName = this.getTranslation("CHARGEN_RANK_NOVICE");
			xpObj.rankValue = 0;
		} else if (optCounter < 40 ) {
			xpObj.rankName = this.getTranslation("CHARGEN_RANK_SEASONED");
			xpObj.rankValue = 1;
		} else if (optCounter < 60 ) {
			xpObj.rankName = this.getTranslation("CHARGEN_RANK_VETERAN");
			xpObj.rankValue = 2;
		} else if (optCounter < 80 ) {
			xpObj.rankName = this.getTranslation("CHARGEN_RANK_HEROIC");
			xpObj.rankValue = 3;
		} else {
			xpObj.rankName = this.getTranslation("CHARGEN_RANK_LEGENDARY");
			xpObj.rankValue = 4;
		}

		if( optCounter == 0 )
			this.XP = xpObj;
		this.xpOptions.push( xpObj );
	}

	this.uuid = this.makeUUID();

	this.options = Array();

	this.selectedAdvancements = Array();
	this.selectedEquipment = Array();

	this.selectedPowers = Array();
	this.powerPointsAvailable = 0;

	this.usesSanity = false;
	this.usesGutsSkill = false;

	this.selectedArmor = Array();
	this.selectedMundaneGear = Array();
	this.selectedWeapons = Array();
	this.selectedShields = Array();

	this.books = Array();

	for( bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		this.books[bookCounter] = get_book_by_id( savageWorldsBooksList[bookCounter].id );
		if( this.books[bookCounter].id == 1 ) {
			this.books[bookCounter].inUse = true;
		} else {
			this.books[bookCounter].inUse = false;
		}
	}

	// Localize Edges
	for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++ ) {
		savageWorldsEdges[edgeCounter].local_name = this.getLocalName( savageWorldsEdges[edgeCounter].name );
		savageWorldsEdges[edgeCounter].select_option_name = savageWorldsEdges[edgeCounter].local_name;

		if( savageWorldsEdges[edgeCounter].child == 1 ) {
			savageWorldsEdges[edgeCounter].select_option_name = "↳ " + savageWorldsEdges[edgeCounter].select_option_name;
		}

		if( savageWorldsEdges[edgeCounter].child == 2 ) {
			savageWorldsEdges[edgeCounter].select_option_name = "↳ " + savageWorldsEdges[edgeCounter].select_option_name;
		}


		savageWorldsEdges[edgeCounter].local_description = this.getLocalName( savageWorldsEdges[edgeCounter].description );
		savageWorldsEdges[edgeCounter].bookObj = get_book_by_id( savageWorldsEdges[edgeCounter].book );
	}

	// Localize Hindrances
	for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++ ) {
		savageWorldsHindrances[hindranceCounter].local_name = this.getLocalName( savageWorldsHindrances[hindranceCounter].name );
		savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name;
		if( savageWorldsHindrances[hindranceCounter].severity == "major")
			savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name + " (" + this.getTranslation("CHARGEN_MAJOR_HINDRANCE") + ")";
		else if( savageWorldsHindrances[hindranceCounter].severity == "minor")
			savageWorldsHindrances[hindranceCounter].select_option_name = savageWorldsHindrances[hindranceCounter].local_name  + " (" + this.getTranslation("CHARGEN_MINOR_HINDRANCE") + ")";

		savageWorldsHindrances[hindranceCounter].local_description = this.getLocalName( savageWorldsHindrances[hindranceCounter].description );
		savageWorldsHindrances[hindranceCounter].bookObj = get_book_by_id( savageWorldsHindrances[hindranceCounter].book );
	}



	// Localize Arcane Backgrounds
	for( var abCounter = 0; abCounter < savageWorldsArcaneBackgrounds.length; abCounter++ ) {
		savageWorldsArcaneBackgrounds[abCounter].local_name = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].name );
		savageWorldsArcaneBackgrounds[abCounter].select_option_name = savageWorldsArcaneBackgrounds[abCounter].local_name;
		savageWorldsArcaneBackgrounds[abCounter].local_backlash = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].backlash );
		savageWorldsArcaneBackgrounds[abCounter].local_description = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].description );
		savageWorldsArcaneBackgrounds[abCounter].bookObj = get_book_by_id( savageWorldsArcaneBackgrounds[abCounter].book );
	}

	// Localize Arcane Trappings
	for( var abCounter = 0; abCounter < savageWorldsArcaneTrappings.length; abCounter++ ) {
		savageWorldsArcaneTrappings[abCounter].local_name = this.getLocalName( savageWorldsArcaneTrappings[abCounter].name );
		savageWorldsArcaneTrappings[abCounter].select_option_name = savageWorldsArcaneTrappings[abCounter].local_name;
		savageWorldsArcaneTrappings[abCounter].local_description = this.getLocalName( savageWorldsArcaneTrappings[abCounter].description );
		savageWorldsArcaneTrappings[abCounter].bookObj = get_book_by_id( savageWorldsArcaneTrappings[abCounter].book );
	}

	// Localize Powers
	for( var abCounter = 0; abCounter < savageWorldsPowers.length; abCounter++ ) {
		savageWorldsPowers[abCounter].local_name = this.getLocalName( savageWorldsPowers[abCounter].name );
		savageWorldsPowers[abCounter].select_option_name = savageWorldsPowers[abCounter].local_name;
		savageWorldsPowers[abCounter].local_description = this.getLocalName( savageWorldsPowers[abCounter].description );
		savageWorldsPowers[abCounter].local_duration = this.getLocalName( savageWorldsPowers[abCounter].duration );
		savageWorldsPowers[abCounter].local_additional_effects = this.getLocalName( savageWorldsPowers[abCounter].additional_effects );
		savageWorldsPowers[abCounter].bookObj = get_book_by_id( savageWorldsPowers[abCounter].book );
	}

	// Localize Equipment
		// Localize General -
		for( var eqCounter = 0; eqCounter < savageWorldsGearGeneral.length; eqCounter++ ) {
			savageWorldsGearGeneral[eqCounter].local_name = this.getLocalName( savageWorldsGearGeneral[eqCounter].name );
			savageWorldsGearGeneral[eqCounter].select_option_name = savageWorldsGearGeneral[eqCounter].local_name;
		}

		// Localize Types
		for( var eqCounter = 0; eqCounter < savageWorldsGearTypes.length; eqCounter++ ) {
			savageWorldsGearTypes[eqCounter].local_name = this.getLocalName( savageWorldsGearTypes[eqCounter].name );
			savageWorldsGearTypes[eqCounter].select_option_name = savageWorldsGearTypes[eqCounter].local_name;

			savageWorldsGearTypes[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearTypes[eqCounter].general );
		}

		// Localize Classes
		// for( var eqCounter = 0; eqCounter < savageWorldsGearClasses.length; eqCounter++ ) {
		// 	savageWorldsGearClasses[eqCounter].local_name = this.getLocalName( savageWorldsGearClasses[eqCounter].name );
		// 	savageWorldsGearClasses[eqCounter].select_option_name = savageWorldsGearClasses[eqCounter].local_name;

		// 	savageWorldsGearTypes[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearTypes[eqCounter].general );
		// 	savageWorldsGearTypes[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearTypes[eqCounter].type );
		// }





		// Localize Mundane
		for( var eqCounter = 0; eqCounter < savageWorldsGearMundane.length; eqCounter++ ) {
			savageWorldsGearMundane[eqCounter].local_name = this.getLocalName( savageWorldsGearMundane[eqCounter].name );
			savageWorldsGearMundane[eqCounter].select_option_name = savageWorldsGearMundane[eqCounter].local_name;

			savageWorldsGearMundane[eqCounter].local_notes = this.getLocalName( savageWorldsGearMundane[eqCounter].notes );

			savageWorldsGearMundane[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearMundane[eqCounter].general );
			savageWorldsGearMundane[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearMundane[eqCounter].type );
		}

		// Localize Armor
		for( var eqCounter = 0; eqCounter < savageWorldsGearArmor.length; eqCounter++ ) {
			savageWorldsGearArmor[eqCounter].local_name = this.getLocalName( savageWorldsGearArmor[eqCounter].name );
			savageWorldsGearArmor[eqCounter].select_option_name = savageWorldsGearArmor[eqCounter].local_name;

			savageWorldsGearArmor[eqCounter].local_notes = this.getLocalName( savageWorldsGearArmor[eqCounter].notes );

			savageWorldsGearArmor[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearArmor[eqCounter].general );
			savageWorldsGearArmor[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearArmor[eqCounter].type );
		}

		// Localize Shields
		for( var eqCounter = 0; eqCounter < savageWorldsGearShields.length; eqCounter++ ) {
			savageWorldsGearShields[eqCounter].local_name = this.getLocalName( savageWorldsGearShields[eqCounter].name );
			savageWorldsGearShields[eqCounter].select_option_name = savageWorldsGearShields[eqCounter].local_name;

			//savageWorldsGearShields[eqCounter].local_notes = this.getLocalName( savageWorldsGearShields[eqCounter].notes );

			savageWorldsGearShields[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearShields[eqCounter].general );
			savageWorldsGearShields[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearShields[eqCounter].type );
		}

		// Localize Weapons
		for( var eqCounter = 0; eqCounter < savageWorldsGearWeapons.length; eqCounter++ ) {
			savageWorldsGearWeapons[eqCounter].local_name = this.getLocalName( savageWorldsGearWeapons[eqCounter].name );
			savageWorldsGearWeapons[eqCounter].select_option_name = savageWorldsGearWeapons[eqCounter].local_name;

			savageWorldsGearWeapons[eqCounter].local_notes = this.getLocalName( savageWorldsGearWeapons[eqCounter].notes );

			savageWorldsGearWeapons[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearWeapons[eqCounter].general );
			savageWorldsGearWeapons[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearWeapons[eqCounter].type );
		}

	this.attributes = {
		agility: 1,
		smarts: 1,
		spirit: 1,
		strength: 1,
		vigor: 1
	}


	this.attributeBoost = {
		agility: 0,
		smarts: 0,
		spirit: 0,
		strength: 0,
		vigor: 0,
	};

	// derived statistics...
	this.derived = {
		pace: 6,
		charisma: 0,
		parry: 2,
		toughness: 4,
		armor: 0,
		currentLoad: 0,
		sanity: 0
	};





	localizeDice( this.useLang);

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

	this.race = {};

	this.raceOptions = Array();

	for( var raceCount = 0; raceCount < savageWorldsRaces.length; raceCount++ ) {
		if( this.bookInUse( savageWorldsRaces[raceCount].book ) ) {
			var newItem = {}
			angular.extend(newItem, get_race_by_id( savageWorldsRaces[raceCount].id, this.useLang ));

			this.raceOptions.push( newItem );
		}

	}
	this.race = this.getRace(1);


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

	this.selectedPerks = Array();

	this.perkOptions = Array(
		{
			label: "- " + this.getTranslation("CHARGEN_SELECT_A_PERK") + " -",
			tag: "null",
			cost: 0,
			effect: function() {

			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_ATTRIBUTE"),
			tag: "attribute",
			cost: 2,
			effect: function(savageCharObj) {
				savageCharObj.attributePointsAvailable = savageCharObj.attributePointsAvailable + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_EDGE"),
			tag: "edge",
			cost: 2,
			effect: function(savageCharObj) {
				savageCharObj.availableEdgePoints = savageCharObj.availableEdgePoints + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_SKILL"),
			tag: "skill",
			cost: 1,
			effect: function(savageCharObj) {
				savageCharObj.skillPointsAvailable = savageCharObj.skillPointsAvailable + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_FUNDS"),
			tag: "funds",
			cost: 1,
			effect: function(savageCharObj) {
				savageCharObj.startingFunds = savageCharObj.startingFunds * 2;
			}
		}
	);

	this.skillList = Array();
	for( skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++) {
		this.skillList[skillCounter] = {};
		angular.extend( this.skillList[skillCounter], savageWorldsSkillList[skillCounter]);
	}

	this.gender = this.genderOptions[0];

	this.skillValues = {};

	this.selectedHindrances = Array();
	this.selectedEdges = Array();

	this.installedHindrances = Array();
	this.installedEdges = Array();

	this.refreshAvailable();
	this.validate();
}

savageCharacter.prototype.makeUUID = function(){
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
};

savageCharacter.prototype.refreshAvailable = function( ) {

	this.agilitySkills = Array();
	this.smartsSkills = Array();
	this.spiritSkills = Array();
	this.strengthSkills = Array();
	this.vigorSkills = Array(); // I'm not aware of any vigor skills, but I' m prepared on the backend ;)

	this.usesSanity = false;
	this.usesGutsSkill = false;

	for( skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		var showSkill = true;
		if( this.skillList[skillCounter].name[ this.useLang ] ) {
			this.skillList[skillCounter].local_name = this.skillList[skillCounter].name[ this.useLang ];
		} else {
			this.skillList[skillCounter].local_name = this.skillList[skillCounter].name[ "en-US" ];
		}
		if( !this.skillList[skillCounter].value )
			this.skillList[skillCounter].value = 0;
		if( !this.skillList[skillCounter].spec )
			this.skillList[skillCounter].spec = "";
		if( !this.skillList[skillCounter].specialties )
			this.skillList[skillCounter].specialties = Array();

		this.skillList[skillCounter].displayValue = "";
		if( this.skillList[skillCounter].value + this.skillList[skillCounter].boost > 0 ) {
			diceValue = getDiceValue( this.skillList[skillCounter].value + this.skillList[skillCounter].boost );
			this.skillList[skillCounter].displayValue = diceValue.local_label;
		}

		for( specialtyCounter = 0; specialtyCounter < this.skillList[skillCounter].specialties.length; specialtyCounter++) {
			this.skillList[skillCounter].specialties[specialtyCounter].displayValue = "";
			if( this.skillList[skillCounter].specialties[specialtyCounter].value  > 0 ) {
				diceValue = getDiceValue( this.skillList[skillCounter].specialties[specialtyCounter].value );
				this.skillList[skillCounter].specialties[specialtyCounter].displayValue = diceValue.local_label;
			}
		}




		this.skillList[skillCounter].showSkill = true;
		if( !this.bookInUse( this.skillList[skillCounter].book) ) {
			this.skillList[skillCounter].showSkill = false;
			this.skillList[skillCounter].value = 0;
			this.skillValues[ this.skillList[skillCounter].short_name ] = 0;
		}

		if(  this.skillList[skillCounter].for_arcane ) {
			if( !this.hasArcane( this.skillList[skillCounter].for_arcane )) {
				this.skillList[skillCounter].showSkill = false;
				this.skillValues[ this.skillList[skillCounter].short_name ] = 0;
			}
		}


		if( this.skillList[skillCounter].id == "SKILL_GUTS" ) {
			if( this.usesGutsSkill == false ) {
				this.skillList[skillCounter].showSkill = false;
				this.skillValues[ this.skillList[skillCounter].short_name ] = 0;
			}
		}

		if( this.skillValues[ this.skillList[skillCounter].id ] ) {
			this.skillList[skillCounter].value = this.skillValues[ this.skillList[skillCounter].short_name ];

		}

		if( this.skillList[skillCounter].showSkill && this.skillList[skillCounter].attribute == "agility" ) {
			this.agilitySkills.push( this.skillList[skillCounter] );
		}
		if( this.skillList[skillCounter].showSkill && this.skillList[skillCounter].attribute == "smarts" ) {
			this.smartsSkills.push( this.skillList[skillCounter] );
		}
		if( this.skillList[skillCounter].showSkill && this.skillList[skillCounter].attribute == "spirit" ) {
			this.spiritSkills.push( this.skillList[skillCounter] );
		}
		if( this.skillList[skillCounter].showSkill && this.skillList[skillCounter].attribute == "strength" ) {
			this.strengthSkills.push( this.skillList[skillCounter] );
		}
		if( this.skillList[skillCounter].showSkill && this.skillList[skillCounter].attribute == "vigor" ) {
			this.vigorSkills.push( this.skillList[skillCounter] );
		}
	}


	// base attributes...
	// this.attributes = {
	// 	agility: getDiceValue(this.attributesAllocated.agility + this.attributeBoost.agility),
	// 	smarts: getDiceValue(this.attributesAllocated.smarts + this.attributeBoost.smarts),
	// 	spirit: getDiceValue(this.attributesAllocated.spirit + this.attributeBoost.spirit),
	// 	strength: getDiceValue(this.attributesAllocated.strength + this.attributeBoost.strength),
	// 	vigor: getDiceValue(this.attributesAllocated.vigor + this.attributeBoost.vigor)
	// };

	this.raceOptions = Array();
	for( var raceCount = 0; raceCount < savageWorldsRaces.length; raceCount++ ) {

		if( this.bookInUse( savageWorldsRaces[raceCount].book ) ) {
			var newItem = {}
			angular.extend(newItem, get_race_by_id( savageWorldsRaces[raceCount].id, this.useLang ));

			this.raceOptions.push( newItem );
		}

	}


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

savageCharacter.prototype.setXP = function( xpValue ) {
	for(var xpc = 0; xpc < this.xpOptions.length; xpc++) {
		if( xpValue == this.xpOptions[xpc].value ) {
			this.XP = this.xpOptions[xpc];
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.getRace = function( raceID ) {

	for(var gc = 0; gc < this.raceOptions.length; gc++) {

		if( raceID == this.raceOptions[gc].id ) {
			return  this.raceOptions[gc];
		}
	}
	return null;
}

savageCharacter.prototype.setRace = function( raceID ) {
	for(var gc = 0; gc < this.raceOptions.length; gc++) {
		if( raceID == this.raceOptions[gc].id ) {
			this.race = this.raceOptions[gc];
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.removePower = function(powerIndex) {


	if(
		this.selectedPowers[ powerIndex ]
	) {
		this.selectedPowers.splice(powerIndex, 1);
		return true;
	}

	return false;
}

savageCharacter.prototype.addPower = function(powerBookID, powerTag, trappingBookID, trappingTag, powerName) {

	for( var powerCounter = 0; powerCounter < savageWorldsPowers.length; powerCounter++) {
		if(
			savageWorldsPowers[powerCounter].tag == powerTag
				&&
			savageWorldsPowers[powerCounter].book == powerBookID
		) {
			var newPower = {};
			angular.extend( newPower, savageWorldsPowers[ powerCounter ] );

			newPower.trapping = savageWorldsArcaneTrappings[0];
			for( var trappingCounter = 0; trappingCounter < savageWorldsArcaneTrappings.length; trappingCounter++) {
				if(
					savageWorldsArcaneTrappings[trappingCounter].tag == trappingTag
						&&
					savageWorldsArcaneTrappings[trappingCounter].book == trappingBookID
				) {
					newPower.trapping = savageWorldsArcaneTrappings[trappingCounter];
				}
			}
			newPower.customName = powerName;

			this.selectedPowers.push( newPower );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addEdge = function(bookId, edgeTag) {
	for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++) {
		if(
			savageWorldsEdges[edgeCounter].tag == edgeTag
				&&
			savageWorldsEdges[edgeCounter].book == bookId
		) {
			var newEdge = {};
			angular.extend( newEdge, savageWorldsEdges[ edgeCounter ] );
			this.selectedEdges.push( newEdge );
			return true;
		}
	}
	return false;
}


savageCharacter.prototype.removeEdge = function(indexNumber) {
	if( this.edges[indexNumber] ) {
		this.edges = this.edges.splice(indexNumber, 1);
		return true;
	}
	return false;
}

savageCharacter.prototype.removeEdgeByTag = function(edgeTag) {
	for( var edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++) {
		if( this.selectedEdges[edgeCounter].tag == edgeTag ) {
			this.selectedEdges.splice(edgeCounter, 1);
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addHindrance = function(bookId, hindranceTag, specifyField) {
	for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++) {
		if(
			savageWorldsHindrances[hindranceCounter].tag == hindranceTag
				&&
			savageWorldsHindrances[hindranceCounter].book == bookId
		) {
			if(specifyField)
				savageWorldsHindrances[hindranceCounter ].specifyField = specifyField;
			else
				savageWorldsHindrances[hindranceCounter ].specifyField = "";
			this.selectedHindrances.push( savageWorldsHindrances[hindranceCounter ]);
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.removeHindrance = function(indexNumber) {
	if( this.hindrances[indexNumber] ) {
		this.hindrances = this.hindrances.splice(indexNumber, 1);
		return true;
	}
	return false;
}

savageCharacter.prototype.removeHindranceByTag = function(hindranceTag) {
	for( var hindranceCounter = 0; hindranceCounter < this.selectedHindrances.length; hindranceCounter++) {
		if( this.selectedHindrances[hindranceCounter].tag == hindranceTag ) {
			this.selectedHindrances.splice(hindranceCounter, 1);
			return true;
		}
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
	this.isValid = true;
	this.validationReport = Array();
	this.warningReport = Array();
	this.skillPointsAvailable = 15;
	this.skillPointsUsed = 0;

	this.attributePointsAvailable = 5;
	this.attributePointsUsed = 0;

	this.availableEdgePoints = 0;
	this.installedHindrances = Array();
	this.installedEdges = Array();
	this.hasArcaneBackground = false;

	this.currentArcaneBackground = {};

	this.startingFunds = 500;

	// Savage Worlds Deluxe is ALWAYS in use.
	swDeluxe = get_book_by_id( 1 ) ;
	swDeluxe.inUse = true;

	this.diceValues = {
		agility: Array(),
		smarts: Array(),
		spirit: Array(),
		strength: Array(),
		vigor: Array(),
	}

	if(  this.selectedArcaneBackground && this.selectedArcaneBackground.power_points )
		this.powerPointsAvailable = this.selectedArcaneBackground.power_points;



	this.attributeBoost = {
		agility: 0,
		smarts: 0,
		spirit: 0,
		strength: 0,
		vigor: 0,
	};

	this.displayAttributes = {
		agility: getDiceValue( this.attributes.agility + this.attributeBoost.agility ),
		smarts: getDiceValue( this.attributes.smarts + this.attributeBoost.smarts ),
		spirit: getDiceValue( this.attributes.spirit + this.attributeBoost.spirit ),
		strength: getDiceValue( this.attributes.strength + this.attributeBoost.strength ),
		vigor: getDiceValue( this.attributes.vigor + this.attributeBoost.vigor ),
	};


	// Calc init derived stats
	this.derived.toughness = Math.floor(this.displayAttributes.vigor.value / 2) + 2;
	this.derived.armor = 0;
	this.derived.currentLoad = 0;
	this.derived.combatLoad = 0;
	fightingSkill = this.getSkill("SKILL_FIGHTING");
	this.parry = 2;
	if( fightingSkill.value > 0 ) {
		fightingValue = getDiceValue( fightingSkill.value );
		this.derived.parry = Math.floor(fightingValue.value / 2) + 2;
	}
	this.derived.pace = 6;
	this.derived.charisma = 0;
	this.derived.sanity = Math.floor(this.displayAttributes.spirit.value / 2) + 2;

	// Calculate used attribute points
	this.attributePointsUsed += this.attributes.agility - 1;
	this.attributePointsUsed += this.attributes.smarts - 1;
	this.attributePointsUsed += this.attributes.spirit - 1;
	this.attributePointsUsed += this.attributes.strength - 1;
	this.attributePointsUsed += this.attributes.vigor - 1;


	// this.attributePointsAvailable = this.attributePointsAvailable - this.attributePointsUsed;
	// this.skillPointsAvailable = this.skillPointsAvailable - this.skillPointsUsed;



	for( skillCounter = 0; skillCounter < this.skillList.length; skillCounter++) {
		this.skillList[skillCounter].boost = 0;
	}

	// Process Racial Hindrances
	if( this.race.hindrances ) {
		racial_hindrances = JSON.parse( this.race.hindrances );
		if( racial_hindrances ) {
			for( var hindranceCounter = 0; hindranceCounter < racial_hindrances.length; hindranceCounter++ ) {
				hindrance = this.getHindrance( racial_hindrances[hindranceCounter] );
				if( hindrance ) {
					if( typeof(hindrance.charEffect) == "function" ) {
						hindrance.charEffect( this );
					}
					if( typeof(hindrance.charEffects) == "function" ) {
						hindrance.charEffects( this );
					}
					this.installedHindrances.push( hindrance );
				}
			}
		}
	}

	// Process Racial Edges
	if( this.race.edges ) {
		racial_edges = JSON.parse( this.race.edges );
		if( racial_edges ) {
			for( var edgeCounter = 0; edgeCounter < racial_edges.length; edgeCounter++ ) {
				edge = this.getEdge( racial_edges[edgeCounter] );

				if( edge ) {
					this.installedEdges.push( edge );

					if( typeof(edge.charEffect) == "function" ) {
						edge.charEffect( this );
					}
					if( typeof(edge.charEffects) == "function" ) {
						edge.charEffects( this );
					}
				}

			}
		}
	}

	this.displayAttributes = {
		agility: getDiceValue( this.attributes.agility + this.attributeBoost.agility ),
		smarts: getDiceValue( this.attributes.smarts + this.attributeBoost.smarts ),
		spirit: getDiceValue( this.attributes.spirit + this.attributeBoost.spirit ),
		strength: getDiceValue( this.attributes.strength + this.attributeBoost.strength ),
		vigor: getDiceValue( this.attributes.vigor + this.attributeBoost.vigor ),
	};


	// Calculate used skill points
	for( skillCounter = 0; skillCounter < this.skillList.length; skillCounter++) {
		if( this.skillList[skillCounter].value ) {

			effectiveCurrentValue =  this.skillList[skillCounter].value + this.skillList[skillCounter].boost ;
			if(  effectiveCurrentValue > this.displayAttributes[this.skillList[skillCounter].attribute].id ) {
				regularCost = this.displayAttributes[this.skillList[skillCounter].attribute].id;
				doubleCost = effectiveCurrentValue - this.displayAttributes[this.skillList[skillCounter].attribute].id;
				if( this.skillList[skillCounter].boost > 0 ) {
					regularCost = regularCost - this.skillList[skillCounter].boost;
					if ( regularCost < 0)
						regularCost = 0;
				}

				this.skillPointsUsed += regularCost + doubleCost * 2;
			} else {
				this.skillPointsUsed += this.skillList[skillCounter].value;
			}
		}

		for( specialtyCounter = 0; specialtyCounter < this.skillList[skillCounter].specialties.length; specialtyCounter++ ) {
			//effectiveCurrentValue =  this.skillList[skillCounter].value + this.skillList[skillCounter].boost ;
			if( this.skillList[skillCounter].specialties[specialtyCounter].value ) {
				if( this.skillList[skillCounter].specialties[specialtyCounter].value + this.skillList[skillCounter].specialties[specialtyCounter].boost > this.displayAttributes[this.skillList[skillCounter].attribute].id ) {
					regularCost = this.displayAttributes[this.skillList[skillCounter].attribute].id;
					doubleCost = this.skillList[skillCounter].specialties[specialtyCounter].value - this.displayAttributes[this.skillList[skillCounter].attribute].id;
					this.skillPointsUsed += regularCost + doubleCost * 2;
				} else {
					this.skillPointsUsed += this.skillList[skillCounter].specialties[specialtyCounter].value;
				}
			}
		}
	}


	for(gdvc = 0; gdvc < globalDiceValues.length; gdvc++) {
		if( 1 + this.attributeBoost.agility <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + this.attributeBoost.agility )
			this.diceValues.agility.push( globalDiceValues[gdvc] );
		if( 1 + this.attributeBoost.smarts <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + this.attributeBoost.smarts )
			this.diceValues.smarts.push( globalDiceValues[gdvc] );
		if( 1 + this.attributeBoost.spirit <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + this.attributeBoost.spirit )
			this.diceValues.spirit.push( globalDiceValues[gdvc] );
		if( 1 + this.attributeBoost.strength <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + this.attributeBoost.strength )
			this.diceValues.strength.push( globalDiceValues[gdvc] );
		if( 1 + this.attributeBoost.vigor <= globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id <= 5 + this.attributeBoost.vigor )
			this.diceValues.vigor.push( globalDiceValues[gdvc] );
	}




	// Process Selected Hindrances
	var majorPerk = 0;
	var minorPerk1 = 0;
	var minorPerk2 = 0;
	for( var hindranceCounter = 0; hindranceCounter < this.selectedHindrances.length; hindranceCounter++) {

		if( typeof(this.selectedHindrances[hindranceCounter].charEffect) == "function" ) {
			this.selectedHindrances[hindranceCounter].charEffect( this );
		}
		if( typeof(this.selectedHindrances[hindranceCounter].charEffects) == "function" ) {
			this.selectedHindrances[hindranceCounter].charEffects( this );
		}
		this.installedHindrances.push( this.selectedHindrances[hindranceCounter] );
		if( this.selectedHindrances[hindranceCounter].severity == "major" ) {
			majorPerk = 2;
		}

		if( this.selectedHindrances[hindranceCounter].severity == "minor" ) {
			if( minorPerk1 == 0 ) {
				minorPerk1 = 1;
				minorPerk2 = 0;
			} else if( minorPerk2 == 0) {
				minorPerk1 = 1;
				minorPerk2 = 1;
			}

		}
	}



	// Calculate Perks Available
	this.totalPerkPoints = majorPerk + minorPerk2 + minorPerk1;
	this.availablePerkPoints = majorPerk + minorPerk2 + minorPerk1;

	// Process Selected Perks
	for( var perkCounter = 0; perkCounter < this.selectedPerks.length; perkCounter++) {
		this.selectedPerks[perkCounter].effect(this);
		this.availablePerkPoints = this.availablePerkPoints - this.selectedPerks[perkCounter].cost;
	}

	if( this.attributePointsUsed > this.attributePointsAvailable ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_ATTRIBUTES") );
		this.isValid = false;
	}

	if( this.selectedArcaneBackground && this.selectedArcaneBackground.powers && this.selectedPowers.length > this.selectedArcaneBackground.powers ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_POWERS") );
		this.isValid = false;
	}

	if( this.skillPointsUsed > this.skillPointsAvailable ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_SKILLS") );
		this.isValid = false;
	}

	// Process Selected Edges
	for( var edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++) {

		this.installedEdges.push( this.selectedEdges[edgeCounter] );
		this.availableEdgePoints = this.availableEdgePoints - 1;
		if( typeof(this.selectedEdges[edgeCounter].charEffect) == "function" ) {
			this.selectedEdges[edgeCounter].charEffect( this );
		}
		if( typeof(this.selectedEdges[edgeCounter].charEffects) == "function" ) {
			this.selectedEdges[edgeCounter].charEffects( this );
		}

	}


	if( this.availablePerkPoints < 0 ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_PERKS") );
		this.isValid = false;
	}

	if( this.availableEdgePoints < 0 ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_EDGES") );
		this.isValid = false;
	}

	if( this.hasArcaneBackground > 0 && this.selectedArcaneBackground.tag == "" ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_NO_ARCANE_BG") );
		this.isValid = false;
	}

	// Apply Arcane Background
	this.availableArcaneBackgrounds = Array();
	this.availablePowers = Array();
	this.availableTrappings = Array();


	this.availableArcaneBackgrounds.push(
		{
			local_name: "- " + this.getTranslation("CHARGEN_SELECT_ARCANE_BG") + " -",
			select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_ARCANE_BG") + " -",
			tag: "",
			powers: 0,
			power_points: 0,
			bookObj: {
				local_name: ""
			},
			blank: true
		}
	);


	this.availablePowers.push(
		{
			local_name: "- " + this.getTranslation("CHARGEN_SELECT_POWER") + " -",
			select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_POWER") + " -",
			tag: "",
			bookObj: {
				local_name: ""
			},
			blank: true
		}
	);

	if( this.hasArcaneBackground ) {
		for( var abCounter = 0 ; abCounter < savageWorldsArcaneBackgrounds.length ; abCounter++)
			this.availableArcaneBackgrounds.push( savageWorldsArcaneBackgrounds[abCounter] );

		for( var abCounter = 0 ; abCounter < savageWorldsPowers.length ; abCounter++) {

			if( savageWorldsPowers[abCounter].rank <= this.XP.rankValue )
				 savageWorldsPowers[abCounter].selectable = true;
			else
				 savageWorldsPowers[abCounter].selectable = false;

			this.availablePowers.push( savageWorldsPowers[abCounter] );
		}
		for( var abCounter = 0 ; abCounter < savageWorldsArcaneTrappings.length ; abCounter++)
			this.availableTrappings.push( savageWorldsArcaneTrappings[abCounter] );

	} else {
		this.selectedArcaneBackground = this.availableArcaneBackgrounds[0];
	}

	if( !this.selectedArcaneBackground )
		this.selectedArcaneBackground = this.availableArcaneBackgrounds[0];

	// Process Available Gear
	this.availableMundaneGear = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearMundane.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearMundane[gearCounter].book ) ) {
			this.availableMundaneGear.push( savageWorldsGearMundane[gearCounter] );
		}
	}

	this.availableArmor = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearArmor.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearArmor[gearCounter].book ) ) {
			this.availableArmor.push( savageWorldsGearArmor[gearCounter] );
		}
	}

	this.availableWeapons = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearWeapons.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearWeapons[gearCounter].book ) ) {
			this.availableWeapons.push( savageWorldsGearWeapons[gearCounter] );
		}
	}

	this.availableShields = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearShields.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearShields[gearCounter].book ) ) {
			this.availableShields.push( savageWorldsGearShields[gearCounter] );
		}
	}

	// Process Available Hindrances
	this.availableHindrances = Array();
	this.availableHindrances.push(
	{
		local_name: "- " + this.getTranslation("CHARGEN_SELECT_HINDRANCE") + " -",
		select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_HINDRANCE") + " -",
		tag: "",
		selectable: true,
		bookObj: {
			local_name: ""
		},
		blank: true
	}
	);
	for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++) {
		if( savageWorldsHindrances[hindranceCounter].racial == 0 ) {
			if( this.bookInUse( savageWorldsHindrances[hindranceCounter].book ) ) {
				savageWorldsHindrances[hindranceCounter].selectable = true;



				// if( typeof(savageWorldsHindrances[hindranceCounter].requires) == "function" ) {
				// 	savageWorldsHindrances[hindranceCounter].selectable = savageWorldsHindrances[hindranceCounter].requires( this );
				// }

				if( savageWorldsHindrances[hindranceCounter].conflicts_edge != "" ) {
//					console.log( savageWorldsHindrances[hindranceCounter].tag, savageWorldsHindrances[hindranceCounter].conflicts_edge);
					if( this.hasEdge( savageWorldsHindrances[hindranceCounter].conflicts_edge ))
						savageWorldsHindrances[hindranceCounter].selectable = false;
				}

				if( savageWorldsHindrances[hindranceCounter].conflicts_hindrance != "" ) {
					if( this.hasHindrance( savageWorldsHindrances[hindranceCounter].conflicts_hindrance ))
						savageWorldsHindrances[hindranceCounter].selectable = false;
				}

				if( this.hasHindrance( savageWorldsHindrances[hindranceCounter].tag ) ) {
					savageWorldsHindrances[hindranceCounter].selectable = false;
				}

				this.availableHindrances.push( savageWorldsHindrances[hindranceCounter] );
			}
		}
	}

	// Process Available Edges
	this.availableEdges = Array();
	this.availableEdges.push(
		{
			local_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
			select_option_name:  "- " + this.getTranslation("CHARGEN_SELECT_EDGE") + " -",
			tag: "",
			selectable: true,
			bookObj: {
				local_name: ""
			},
			blank: true
		}
	);

	for( edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++) {
		if( savageWorldsEdges[edgeCounter].racial == 0 ) {
			if( this.bookInUse( savageWorldsEdges[edgeCounter].book ) ) {
				savageWorldsEdges[edgeCounter].selectable = true;

				if( typeof(savageWorldsEdges[edgeCounter].requires) == "function" ) {
					savageWorldsEdges[edgeCounter].selectable = savageWorldsEdges[edgeCounter].requires( this );
					//console.log( savageWorldsEdges[edgeCounter].tag + " unselectable edge attributes: " + savageWorldsEdges[edgeCounter].tag);
				}

				if( savageWorldsEdges[edgeCounter].required_edge != ""  ) {
					if( !this.hasEdge( savageWorldsEdges[edgeCounter].required_edge )) {
						//console.log( savageWorldsEdges[edgeCounter].tag + " unselectable requires edge: " + savageWorldsEdges[edgeCounter].required_edge);
						savageWorldsEdges[edgeCounter].selectable = false;
					}
				}

				if( savageWorldsEdges[edgeCounter].conflicts_edge != "" ) {
					if( this.hasEdge( savageWorldsEdges[edgeCounter].conflicts_edge )) {
						//console.log( savageWorldsEdges[edgeCounter].tag + " unselectable conflicts edge: " + savageWorldsEdges[edgeCounter].conflicts_edge);
						savageWorldsEdges[edgeCounter].selectable = false;

					}
				}

				if( savageWorldsEdges[edgeCounter].required_rank > this.XP.rankValue ) {
						savageWorldsEdges[edgeCounter].selectable = false;
				}

				if( savageWorldsEdges[edgeCounter].conflicts_hindrance != ""  ) {
					if( this.hasHindrance( savageWorldsEdges[edgeCounter].conflicts_hindrance )) {
						//console.log( savageWorldsEdges[edgeCounter].tag + " unselectable conflicts hindrance: " + savageWorldsEdges[edgeCounter].conflicts_hindrance);
						savageWorldsEdges[edgeCounter].selectable = false;
					}
				}
				if( savageWorldsEdges[edgeCounter].reselectable == 0 && this.hasEdge( savageWorldsEdges[edgeCounter].tag ) ) {
					//console.log( savageWorldsEdges[edgeCounter].tag + " unselectable has edge: " + savageWorldsEdges[edgeCounter].tag);
					savageWorldsEdges[edgeCounter].selectable = false;
				}

				this.availableEdges.push( savageWorldsEdges[edgeCounter] );
			}
		}
	}

	// Advancements...
	this.availableAdvancements = Math.floor(this.XP.value / 5);


	if( this.selectedAdvancements > this.availableAdvancements) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_ADVANCEMENTS") );
		this.isValid = false;
	}

	// check to make sure a requirement wasn't removed from edges...

	for( edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++) {


		if( typeof(this.selectedEdges[edgeCounter].requires) == "function" ) {
			if( this.selectedEdges[edgeCounter].requires(this) == false ) {
				this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_EDGE_DOESNT_MEET_REQUIREMENTS") );
				this.isValid = false;
			}
		}

		if( this.selectedEdges[edgeCounter].required_edge != ""  ) {
			if( !this.hasEdge( this.selectedEdges[edgeCounter].required_edge )) {
			//	console.log( savageWorldsEdges[edgeCounter].tag + " unselectable requires edge: " + savageWorldsEdges[edgeCounter].required_edge);
				theEdge = this.getEdge( this.selectedEdges[edgeCounter].required_edge  );
			//	console.log("*1", theEdge );
				this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_REQUIRES_EDGE").replace( "{value}", theEdge.local_name) );
				this.isValid = false;
			}
		}

		if( this.selectedEdges[edgeCounter].conflicts_edge != "" ) {
			if( this.hasEdge( this.selectedEdges[edgeCounter].conflicts_edge )) {
			//	console.log( savageWorldsEdges[edgeCounter].tag + " unselectable conflicts edge: " + savageWorldsEdges[edgeCounter].conflicts_edge);
			theEdge = this.getEdge( this.selectedEdges[edgeCounter].conflicts_edge  );
		//	console.log("*2", theEdge );
			this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_CONFLICTS_EDGE").replace( "{value}", theEdge.local_name) );
				this.isValid = false;

			}
		}

		if( this.selectedEdges[edgeCounter].conflicts_hindrance != ""  ) {
			if( hindranceTag = this.hasHindrance( this.selectedEdges[edgeCounter].conflicts_hindrance ) ) {
			//	console.log( savageWorldsEdges[edgeCounter].tag + " unselectable conflicts hindrance: " + savageWorldsEdges[edgeCounter].conflicts_hindrance);
				theHindrance = this.getHindrance( hindranceTag  );
				this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_CONFLICTS_HINDRANCE").replace( "{value}", theHindrance.local_name) );
				this.isValid = false;
			}
		}




	}
	for( var powerCounter = 0; powerCounter < this.selectedPowers.length; powerCounter++ ) {
		if(  this.selectedPowers[powerCounter].trapping && this.selectedPowers[powerCounter].trapping.tag != "" ) {
			this.selectedPowers[powerCounter].showName = this.selectedPowers[powerCounter].customName + " (" + this.selectedPowers[powerCounter].local_name + ", " + this.selectedPowers[powerCounter].trapping.local_name + ")";
		} else {
			this.selectedPowers[powerCounter].showName = this.selectedPowers[powerCounter].customName + " (" + this.selectedPowers[powerCounter].local_name + ")";
		}

 	}

 	this.refreshAvailable();

 	this.currentFunds = this.startingFunds;
 	this.currentLoad = 0;
 	this.combatLoad = 0;
 	// subtract gear costs....
 	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++) {
 		this.currentFunds -= this.selectedWeapons[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedWeapons[gearCounter].weight;
 		if( this.selectedWeapons[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedWeapons[gearCounter].weight;
 		this.selectedWeapons[gearCounter].toHitRollModifier = 0;
 		this.selectedWeapons[gearCounter].currentParry = this.selectedWeapons[gearCounter].parry;
		if( this.selectedWeapons[gearCounter].min_str > this.displayAttributes.strength.value ) {
			this.warningReport.push( this.getTranslation("CHARGEN_BELOW_STR_WEAPON") );

			if( this.selectedWeapons[gearCounter].damage_strength > 0) {
				var damageBit = this.selectedWeapons[gearCounter].damage;

				damageBit = this.setCharAt( damageBit, 1, this.displayAttributes.strength.value);

				if( this.selectedWeapons[gearCounter].currentParry > 0 )
					this.selectedWeapons[gearCounter].currentParry = 0;

				this.selectedWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " +  damageBit;
			} else {
				this.selectedWeapons[gearCounter].displayDamage = this.selectedWeapons[gearCounter].damage;
				this.selectedWeapons[gearCounter].toHitRollModifier = -1;
			}
		} else {
			if( this.selectedWeapons[gearCounter].damage_strength > 0) {
				this.selectedWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " + this.selectedWeapons[gearCounter].damage;
			} else {
				this.selectedWeapons[gearCounter].displayDamage = this.selectedWeapons[gearCounter].damage;
			}
		}

		if( this.selectedWeapons[gearCounter].readiedLocation != "")
			this.derived.parry += this.selectedWeapons[gearCounter].parry_modifier;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedArmor.length; gearCounter++) {
 		this.currentFunds -= this.selectedArmor[gearCounter].purchaseCost;
 		if( this.selectedArmor[gearCounter].covers_torso > 0 ) {
 			if( this.selectedArmor[gearCounter].armor > this.derived.armor ) {
 				this.derived.armor = this.selectedArmor[gearCounter].armor;
 			}
 		}
 		this.currentLoad += this.selectedArmor[gearCounter].weight;
 		if( this.selectedArmor[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedArmor[gearCounter].weight;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++) {
 		this.currentFunds -= this.selectedShields[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedShields[gearCounter].weight;
		if( this.selectedShields[gearCounter].isReadied != "")
			this.derived.parry += this.selectedShields[gearCounter].parry;
 		if( this.selectedShields[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedShields[gearCounter].weight;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedMundaneGear.length; gearCounter++) {
 		this.currentFunds -= this.selectedMundaneGear[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedMundaneGear[gearCounter].weight;
 		if( this.selectedMundaneGear[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedMundaneGear[gearCounter].weight;
 	}

	if( this.currentFunds < 0 ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_FUNDS") );
		this.isValid = false;
	}

	if( this.armor > 0 ) {
		this.derived.toughnessAndArmor = this.derived.toughness;
	} else {
		this.derived.toughnessAndArmor = ( this.derived.toughness + this.derived.armor ) + " (" + this.derived.armor + ")";
	}

	this.loadLimit = this.displayAttributes.strength.value * 5;
	//console.log( getDiceValue this.attributes.strength );
	if( this.loadLimit > 0 ) {
		this.loadModifier = Math.floor( this.currentLoad / this.loadLimit ) * -1 ;
		this.combatLoadModifier = Math.floor( this.combatLoad / this.loadLimit ) * -1 ;
	} else {
		this.loadModifier = 0;
	}

	if( this.loadModifier < -3 ) {
		this.warningReport.push( this.getTranslation("CHARGEN_CHARACTER_OVERLOADED") );
	}

	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++) {
		this.selectedWeapons[gearCounter].toHitRollModifier += this.loadModifier;
	}


}

savageCharacter.prototype.setCharAt = function(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

savageCharacter.prototype.getEdge = function( edgeTag ) {
	for( var edgeCounter = 0; edgeCounter < savageWorldsEdges.length; edgeCounter++ ) {
		if( savageWorldsEdges[edgeCounter].tag == edgeTag ) {
			return savageWorldsEdges[edgeCounter];
		}
	}
	return null;
}

savageCharacter.prototype.getHindrance = function( hindranceTag ) {
	for( var hindranceCounter = 0; hindranceCounter < savageWorldsHindrances.length; hindranceCounter++ ) {
		if( savageWorldsHindrances[hindranceCounter].tag == hindranceTag ) {
			return savageWorldsHindrances[hindranceCounter];
		}
	}
	return null;
}

savageCharacter.prototype.exportBBCode = function() {
	return "TODO";
}

savageCharacter.prototype.importJSON = function( jsonString ) {

	if( jsonString ) {
		importObject = JSON.parse(jsonString);
		if( importObject ) {
			this.init( this.useLang );
			this.name = importObject.name;
			this.background = importObject.background;
			if( importObject.uuid )
				this.uuid = importObject.uuid;
			this.description = importObject.description;
			for( attribute in this.attributes ) {
				if( importObject.attributes[ attribute ] ) {
					attribute = attribute.toLowerCase().trim();
					if( this.attributes[attribute] )
						this.attributes[attribute] =  importObject.attributes[ attribute ];
				}
			}

			if( importObject.gender )
				this.setGender( importObject.gender  );

			if( importObject.xp )
				this.setXP( importObject.xp  );

			if( importObject.race )
				this.setRace( importObject.race  );

			if( importObject.books ) {
				for( var importCounter = 0; importCounter < importObject.books.length; importCounter++ ) {
					for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++ ) {
						if ( importObject.books[importCounter] == this.books[bookCounter].short_name ) {
							this.books[bookCounter].inUse = true;
						}
					}
				}
			}
			if( importObject.skills ) {
				for( var importCounter = 0; importCounter < importObject.skills.length; importCounter++ ) {
					this.setSkill(
						importObject.skills[importCounter].id,
						importObject.skills[importCounter].value
					);

					if( importObject.skills[importCounter].specialties ) {
						this.setSpecialties(
							importObject.skills[importCounter].id,
							importObject.skills[importCounter].specialties
						);
					}
				}
			}

			if( importObject.edges ) {
				this.selectedEdges = Array();
				for( var importCounter = 0; importCounter < importObject.edges.length; importCounter++ ) {
					this.addEdge(
						importObject.edges[importCounter].book,
						importObject.edges[importCounter].tag
					);
				}
			}

			if( importObject.powers ) {

				for( var powerCounter = 0; powerCounter < importObject.powers.length; powerCounter++ ) {
					this.addPower(
						importObject.powers[powerCounter].powerBook,
						importObject.powers[powerCounter].powerTag,
						importObject.powers[powerCounter].trapBook,
						importObject.powers[powerCounter].trapTag,
						importObject.powers[powerCounter].customName
					);
				}
			}

			if( importObject.hindrances ) {
				this.selectedHindrances = Array();
				for( var importCounter = 0; importCounter < importObject.hindrances.length; importCounter++ ) {
					this.addHindrance(
						importObject.hindrances[importCounter].book,
						importObject.hindrances[importCounter].tag,
						importObject.hindrances[importCounter].specify
					);
				}
			}

			if( importObject.perks ) {
				this.selectedPerks = Array();
				for( var importCounter = 0; importCounter < importObject.perks.length; importCounter++ ) {
					this.addPerk(
						importObject.perks[importCounter]
					);
				}
			}

			if( importObject.arcanebg ) {
				this.setArcaneBackground( importObject.arcanebg );
			}

			if( importObject.gearMundane ) {
				this.selectedMundaneGear = Array();
				for( var importCounter = 0; importCounter < importObject.gearMundane.length; importCounter++ ) {
					this.addGearMundane(
						importObject.gearMundane[importCounter].book,
						importObject.gearMundane[importCounter].tag,
						importObject.gearMundane[importCounter].cost,
						importObject.gearMundane[importCounter].dropped
					);
				}
			}

			if( importObject.gearShields ) {
				this.selectedShields = Array();
				for( var importCounter = 0; importCounter < importObject.gearShields.length; importCounter++ ) {
					this.addGearShield(
						importObject.gearShields[importCounter].book,
						importObject.gearShields[importCounter].tag,
						importObject.gearShields[importCounter].cost,
						importObject.gearShields[importCounter].loc,
						importObject.gearShields[importCounter].dropped
					);
				}
			}

			if( importObject.gearWeapons ) {
				this.selectedWeapons = Array();
				for( var importCounter = 0; importCounter < importObject.gearWeapons.length; importCounter++ ) {
					this.addGearWeapon(
						importObject.gearWeapons[importCounter].book,
						importObject.gearWeapons[importCounter].tag,
						importObject.gearWeapons[importCounter].cost,
						importObject.gearWeapons[importCounter].loc,
						importObject.gearWeapons[importCounter].dropped
					);
				}
			}

			if( importObject.gearArmor ) {
				this.selectedArmor = Array();
				for( var importCounter = 0; importCounter < importObject.gearArmor.length; importCounter++ ) {
					this.addGearArmor(
						importObject.gearArmor[importCounter].book,
						importObject.gearArmor[importCounter].tag,
						importObject.gearArmor[importCounter].cost,
						importObject.gearArmor[importCounter].readied,
						importObject.gearArmor[importCounter].dropped
					);
				}
			}

			this.validate();
			return true;
		}
	}

	return false;
}

savageCharacter.prototype.addBook = function( bookObject ) {

}


savageCharacter.prototype.exportJSON = function(noUUID) {

	exportObject = {};
	exportObject.name = this.name;
	exportObject.background = this.background;
	exportObject.description = this.description;

	if(!noUUID)
		exportObject.uuid = this.uuid;

	exportObject.xp = this.XP.value;
	exportObject.gender = this.gender.id;
	exportObject.race = this.race.id;

	exportObject.attributes = {
		agility: this.attributes.agility,
		smarts: this.attributes.smarts,
		spirit: this.attributes.spirit,
		strength: this.attributes.strength,
		vigor: this.attributes.vigor,
	}

	exportObject.books = Array();

	for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++ ) {
		if ( this.books[bookCounter].inUse  )
			exportObject.books.push( this.books[bookCounter].short_name );
	}

	exportObject.perks = Array();
	for( var perkCounter = 0; perkCounter < this.selectedPerks.length; perkCounter++ ) {
		exportObject.perks.push( this.selectedPerks[perkCounter].tag );
	}

	exportObject.skills = Array();
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if(
			this.skillList[skillCounter].value > 0
			||
			this.skillList[skillCounter].specialties.length > 0
		) {
			if(this.skillList[skillCounter].specialties.length > 0 ) {
				exportObject.skills.push(
					{
						id: this.skillList[skillCounter].id,
						value: this.skillList[skillCounter].value,
						specialties: this.skillList[skillCounter].specialties
					}
				);
			} else {
				exportObject.skills.push(
					{
						id: this.skillList[skillCounter].id,
						value: this.skillList[skillCounter].value
					}
				);
			}
		}
		exportObject.edges = Array();
		for( var edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++ ) {
			exportObject.edges.push( {
				book: this.selectedEdges[edgeCounter].book,
				tag: this.selectedEdges[edgeCounter].tag,
			});
		}

		if( this.selectedPowers.length > 0 ) {
			exportObject.powers = Array();
			for( var powerCounter = 0; powerCounter < this.selectedPowers.length; powerCounter++ ) {
				exportObject.powers.push( {
					powerBook: this.selectedPowers[powerCounter].book,
					powerTag: this.selectedPowers[powerCounter].tag,
					trapBook: this.selectedPowers[powerCounter].trapping.book,
					trapTag: this.selectedPowers[powerCounter].trapping.tag,
					customName: this.selectedPowers[powerCounter].customName,
				});
			}
		}

		exportObject.hindrances = Array();
		for( var hindranceCounter = 0; hindranceCounter < this.selectedHindrances.length; hindranceCounter++ ) {
			exportObject.hindrances.push( {
				book: this.selectedHindrances[hindranceCounter].book,
				tag: this.selectedHindrances[hindranceCounter].tag,
				specify: this.selectedHindrances[hindranceCounter].specifyField,
			});
		}

		if( this.selectedArcaneBackground.tag != "")
			exportObject.arcanebg = this.selectedArcaneBackground.tag;


		exportObject.gearMundane = Array();
		for( var gearCounter = 0; gearCounter < this.selectedMundaneGear.length; gearCounter++ ) {
			exportObject.gearMundane.push( {
				book: this.selectedMundaneGear[gearCounter].book,
				tag: this.selectedMundaneGear[gearCounter].tag,
				cost: this.selectedMundaneGear[gearCounter].purchaseCost,
				dropped: this.selectedMundaneGear[gearCounter].droppedDuringCombat
			});
		}

		exportObject.gearShields = Array();
		for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
			exportObject.gearShields.push( {
				book: this.selectedShields[gearCounter].book,
				tag: this.selectedShields[gearCounter].tag,
				cost: this.selectedShields[gearCounter].purchaseCost,
				loc: this.selectedShields[gearCounter].readiedLocation,
				dropped: this.selectedShields[gearCounter].droppedDuringCombat
			});
		}

		exportObject.gearWeapons = Array();
		for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++ ) {
			exportObject.gearWeapons.push( {
				book: this.selectedWeapons[gearCounter].book,
				tag: this.selectedWeapons[gearCounter].tag,
				cost: this.selectedWeapons[gearCounter].purchaseCost,
				loc: this.selectedWeapons[gearCounter].readiedLocation,
				dropped: this.selectedWeapons[gearCounter].droppedDuringCombat
			});
		}

		exportObject.gearArmor = Array();
		for( var gearCounter = 0; gearCounter < this.selectedArmor.length; gearCounter++ ) {
			exportObject.gearArmor.push( {
				book: this.selectedArmor[gearCounter].book,
				tag: this.selectedArmor[gearCounter].tag,
				cost: this.selectedArmor[gearCounter].purchaseCost,
				readied: this.selectedArmor[gearCounter].isReadied,
				dropped: this.selectedArmor[gearCounter].droppedDuringCombat
			});
		}


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

savageCharacter.prototype.bookInUse = function( bookID ) {
	for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++) {
		if( this.books[bookCounter].id == bookID ) {
			if( this.books[bookCounter].inUse == true ){
				if( this.books[bookCounter].usesGutsSkill )
					this.usesGutsSkill = true;
				if( this.books[bookCounter].uses_sanity > 0)
					this.usesSanity = true;
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.hasArcane = function( arcaneTag ) {

	return false;
}

savageCharacter.prototype.getLocalName = function( incomingStringArray ) {
		if( incomingStringArray[ this.useLang] ) {
			return incomingStringArray[ this.useLang];
		} else {
			return incomingStringArray[ "en-US" ];
		}
}

savageCharacter.prototype.incrementSkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].value++;
			if( this.skillList[skillCounter].value > 5)
				this.skillList[skillCounter].value = 5;

			return true;
		}

	}
	return false;
}

savageCharacter.prototype.decrementSkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].value--;
			if( this.skillList[skillCounter].value < 0)
				this.skillList[skillCounter].value = 0;

			return true;
		}

	}
	return false;
}

savageCharacter.prototype.addSpecialtySkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].specialties.push(
				{
					name: "",
					value: 1 // d4
				}
			);
		}
	}
	return false;
}

savageCharacter.prototype.setSkill = function( skillID, skillValue ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].value = skillValue;
			return true;
		}

	}
	return false;
}

savageCharacter.prototype.addRacialSkill = function( skillID, skillValue ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].boost = skillValue;

		//	console.log( this.displayAttributes[this.skillList[skillCounter].attribute] );
			// check for d4 in related ability, bonus 3 to if it only a 4, oherwise just bonus 2
			// if( this.displayAttributes[this.skillList[skillCounter].attribute].id == 1 )
			// 	this.skillPointsUsed = this.skillPointsUsed - 3;
			// else
			// 	this.skillPointsUsed = this.skillPointsUsed - 2;
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.getSkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			return this.skillList[skillCounter];
		}

	}
	return null;
}

savageCharacter.prototype.setSpecialties = function( skillID, specialtiesValue ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].specialties = specialtiesValue;
			return true;
		}

	}
	return false;
}


savageCharacter.prototype.incrementSpecialtySkill = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			if( this.skillList[skillCounter].specialties[ specialtyIndex] ) {
				this.skillList[skillCounter].specialties[ specialtyIndex].value++;
				if( this.skillList[skillCounter].specialties[ specialtyIndex].value < 0)
					this.skillList[skillCounter].specialties[ specialtyIndex].value = 0;
				return true;
			}
		}

	}
	return false;
}

savageCharacter.prototype.decrementSpecialtySkill = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			if( this.skillList[skillCounter].specialties[ specialtyIndex] ) {

				if( this.skillList[skillCounter].specialties[ specialtyIndex].value < 2) {
					//this.skillList[skillCounter].specialties[ specialtyIndex].value = 0;
					if( this.skillList[skillCounter].specialties.length == 1){
						this.skillList[skillCounter].specialties = Array();
						return true;
					} else {
						this.removeSpecialtyAtIndex( skillID, specialtyIndex);
						return true;
					}
				} else {
					this.skillList[skillCounter].specialties[ specialtyIndex].value--;
					return true;
				}

			}
		}

	}
	return false;
}

savageCharacter.prototype.updateSpecialtySkillName = function( skillID, specialtyIndex, updatedName ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			if( this.skillList[skillCounter].specialties[ specialtyIndex] ) {
				this.skillList[skillCounter].specialties[ specialtyIndex].name = updatedName;
				return true;
			}
		}

	}
	return false;
}

savageCharacter.prototype.hasEdge = function( edgeTag ) {
	for( var edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++ ) {

		if( this.selectedEdges[edgeCounter].tag == edgeTag) {
//			console.log("hasEdge", edgeTag);
			return true;
		}
	}

	for( var edgeCounter = 0; edgeCounter < this.race.edges.length; edgeCounter++ ) {
		if( this.race.edges[edgeCounter].tag == edgeTag){
//			console.log("hasRacialEdge", edgeTag);
			return this.race.edges[edgeCounter].tag;
		}
	}
	return false;
}

savageCharacter.prototype.hasHindrance = function( edgeTag ) {
	for( var hindranceCounter = 0; hindranceCounter < this.selectedHindrances.length; hindranceCounter++ ) {
		if(
			this.selectedHindrances[hindranceCounter].tag.indexOf(edgeTag + "-") === 0
				||
			this.selectedHindrances[hindranceCounter].tag == edgeTag
		) {
			return this.selectedHindrances[hindranceCounter].tag;
		}
	}

	for( var hindranceCounter = 0; hindranceCounter < this.race.hindrances.length; hindranceCounter++ ) {
		if(
			this.race.hindrances[hindranceCounter].indexOf(edgeTag + "-") === 0
				||
			this.race.hindrances[hindranceCounter].tag == edgeTag
		) {

			return this.race.hindrances[hindranceCounter].tag;
		}
	}
	return false;
}

savageCharacter.prototype.removeSpecialtyAtIndex = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			if( this.skillList[skillCounter].specialties[ specialtyIndex] ) {
				this.skillList[skillCounter].specialties.splice(specialtyIndex, 1);
				return true;
			}
		}

	}
	return false;
}

savageCharacter.prototype.addPerk = function( perkTag ) {
	for( var perkCounter = 0; perkCounter < this.perkOptions.length; perkCounter++ ) {
		if( perkTag == this.perkOptions[perkCounter].tag ) {
			this.selectedPerks.push( this.perkOptions[perkCounter] );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.removePerk = function( perkTag ) {
	for( var perkCounter = 0; perkCounter < this.selectedPerks.length; perkCounter++ ) {
		if( perkTag == this.selectedPerks[perkCounter].tag ) {
			this.selectedPerks.splice( perkCounter, 1 );
			return true;
		}
	}
	return false;
}
savageCharacter.prototype.setAttribute = function( attributeName, diceID ) {
//	console.log("savageCharacter.prototype.setAttribute", attributeName, diceID)
	this.attributes[attributeName] = diceID - this.attributeBoost[attributeName];
}

savageCharacter.prototype.boostAttribute = function( attributeName, boostNumber ) {
	if( !boostNumber )
		boostNumber = 1;
	this.attributeBoost[attributeName] += boostNumber;
}

savageCharacter.prototype.setArcaneBackground = function( abTag ) {
	for( abCounter = 0; abCounter < savageWorldsArcaneBackgrounds.length; abCounter++) {
		if( abTag == savageWorldsArcaneBackgrounds[abCounter].tag ) {
			this.selectedArcaneBackground = savageWorldsArcaneBackgrounds[abCounter];
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addGearMundane = function( fromBook, gearTag, itemCost, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableMundaneGear.length; gearCounter++ ) {
		if(
			gearTag == this.availableMundaneGear[gearCounter].tag
				&&
			fromBook == this.availableMundaneGear[gearCounter].book
		) {
			pushedItem = {};
			angular.extend( pushedItem, this.availableMundaneGear[gearCounter]);
			pushedItem.droppedDuringCombat = droppedDuringCombat;
			if( itemCost > -1 ) {
				pushedItem.purchaseCost = itemCost;
			} else {
				pushedItem.purchaseCost = pushedItem.cost;
			}
			this.selectedMundaneGear.push( pushedItem );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addGearWeapon = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableWeapons.length; gearCounter++ ) {
		if(
			gearTag == this.availableWeapons[gearCounter].tag
				&&
			fromBook == this.availableWeapons[gearCounter].book
		) {
			pushedItem = {};
			angular.extend( pushedItem, this.availableWeapons[gearCounter]);
			pushedItem.droppedDuringCombat = droppedDuringCombat;
			if( itemCost > -1 ) {
				pushedItem.purchaseCost = itemCost;
			} else {
				pushedItem.purchaseCost = pushedItem.cost;
			}
			if( readiedLocation ) {
				pushedItem.readiedLocation = readiedLocation;
			} else {
				pushedItem.readiedLocation = "";
			}
			this.selectedWeapons.push( pushedItem );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addGearShield = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableShields.length; gearCounter++ ) {
		if(
			gearTag == this.availableShields[gearCounter].tag
				&&
			fromBook == this.availableShields[gearCounter].book
		) {
			pushedItem = {};
			angular.extend( pushedItem, this.availableShields[gearCounter]);
			pushedItem.droppedDuringCombat = droppedDuringCombat;
			if( itemCost > -1 ) {
				pushedItem.purchaseCost = itemCost;
			} else {
				pushedItem.purchaseCost = pushedItem.cost;
			}
			if( readiedLocation ) {
				pushedItem.readiedLocation = readiedLocation;
			} else {
				pushedItem.readiedLocation = "";
			}
			this.selectedShields.push( pushedItem );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addGearArmor = function( fromBook, gearTag, itemCost, isReadied, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableArmor.length; gearCounter++ ) {
		if(
			gearTag == this.availableArmor[gearCounter].tag
				&&
			fromBook == this.availableArmor[gearCounter].book
		) {
			pushedItem = {};
			angular.extend( pushedItem, this.availableArmor[gearCounter]);
			pushedItem.droppedDuringCombat = droppedDuringCombat;
			if( itemCost > -1 ) {
				pushedItem.purchaseCost = itemCost;
			} else {
				pushedItem.purchaseCost = pushedItem.cost;
			}
			if( isReadied ) {
				pushedItem.isReadied = isReadied;
			} else {
				pushedItem.isReadied = false;
			}
			this.selectedArmor.push( pushedItem );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.removeMundane = function( gearIndex ) {
	this.selectedMundaneGear.splice( gearIndex, 1);
}

savageCharacter.prototype.removeArmor = function( gearIndex ) {
	this.selectedArmor.splice( gearIndex, 1);
}
savageCharacter.prototype.removeWeapon = function( gearIndex ) {
	this.selectedWeapons.splice( gearIndex, 1);
}
savageCharacter.prototype.removeShield = function( gearIndex ) {
	this.selectedShields.splice( gearIndex, 1);
}

savageCharacter.prototype.equipPrimaryWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "primary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++ ) {
		if( this.selectedWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedWeapons[gearIndex].readiedLocation = "primary";

}


savageCharacter.prototype.equipSecondaryWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++ ) {
		if( this.selectedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedWeapons[gearIndex].readiedLocation = "secondary";

}


savageCharacter.prototype.equipPrimaryShield = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "primary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++ ) {
		if( this.selectedWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedShields[gearIndex].readiedLocation = "primary";

}


savageCharacter.prototype.equipSecondaryShield = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedWeapons.length; gearCounter++ ) {
		if( this.selectedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedShields[gearIndex].readiedLocation = "secondary";

}

savageCharacter.prototype.unequipShield = function( gearIndex ) {
	this.selectedShields[gearIndex].readiedLocation = "";
}

savageCharacter.prototype.unequipWeapon = function( gearIndex ) {
	this.selectedWeapons[gearIndex].readiedLocation = "";
}

savageCharacter.prototype.equipArmor = function( gearIndex ) {
	this.selectedArmor[gearIndex].isReadied = true;
}

savageCharacter.prototype.unequipArmor = function( gearIndex ) {
	this.selectedArmor[gearIndex].isReadied = false;
}

savageCharacter.prototype.setDroppedDuringCombat = function( itemType, gearIndex ) {
	if( itemType == "armor")
		this.selectedArmor[gearIndex].droppedDuringCombat = true;
	if( itemType == "weapon")
		this.selectedWeapons[gearIndex].droppedDuringCombat = true;
	if( itemType == "shield")
		this.selectedShields[gearIndex].droppedDuringCombat = true;
	if( itemType == "gear")
		this.selectedMundaneGear[gearIndex].droppedDuringCombat = true;
}

savageCharacter.prototype.setUsedDuringCombat = function( itemType, gearIndex ) {
	if( itemType == "armor")
		this.selectedArmor[gearIndex].droppedDuringCombat = false;
	if( itemType == "weapon")
		this.selectedWeapons[gearIndex].droppedDuringCombat = false;
	if( itemType == "shield")
		this.selectedShields[gearIndex].droppedDuringCombat = false;
	if( itemType == "gear")
		this.selectedMundaneGear[gearIndex].droppedDuringCombat = false;
}