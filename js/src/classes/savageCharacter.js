
function savageCharacter (useLang) {

	this.init(useLang);

}

savageCharacter.prototype.calcSPC = function() {

	if( this.usesSPCCreation ) {
		this.SPCPowerLimit = 0;
		this.SPCCurrentPowerPoints = 0;
		if( this.SPCRisingStars ) {
			this.SPCCurrentPowerPoints = this.SPCPowerLevels[ this.SPCSelectedPowerLevel ].rising_stars_power_points;
			this.SPCCurrentPowerPoints += this.spcExtraPowerPoints;
			this.SPCPowerLimit = this.SPCCurrentPowerPoints;
		} else {
			this.SPCCurrentPowerPoints = this.SPCPowerLevels[ this.SPCSelectedPowerLevel ].power_points;
			this.SPCCurrentPowerPoints += this.spcExtraPowerPoints;
			this.SPCPowerLimit = Math.ceil( this.SPCCurrentPowerPoints / 3 );
		}
		if( this.hasEdge("the-best-there-is"))  {
			if( !this.SPCRisingStars ) {
				this.SPCPowerLimit = Math.ceil( this.SPCCurrentPowerPoints / 2 );
			} else {
				this.SPCPowerLimit = Math.ceil( this.SPCCurrentPowerPoints / 2 );
				if( this.SPCPowerLimit < this.SPCCurrentPowerPoints)
					this.SPCPowerLimit = this.SPCCurrentPowerPoints;
			}
		}


		// for the extra power points perk....
		if( this.SPCTakenExtraPowerPoints ) {
			if( this.SPCSelectedPowerLevel == 0 || this.SPCSelectedPowerLevel == 1 ) {
				this.SPCCurrentPowerPoints += 5;
			} else {
				this.SPCCurrentPowerPoints += 10;
			}
		}

		for( var powerCounter = 0; powerCounter < this.selectedSPCPowers.length; powerCounter++) {
			this.selectedSPCPowers[powerCounter].currentCost = this.selectedSPCPowers[powerCounter].cost  / 1* this.selectedSPCPowers[powerCounter].selectedLevel / 1;
			for( var modCounter = 0; modCounter < this.selectedSPCPowers[powerCounter].modifiersObj.length; modCounter++) {
				if( typeof(this.selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost) != "undefined" && this.selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost != 0) {
					this.selectedSPCPowers[powerCounter].currentCost += this.selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost / 1;
				}
			}

			if( this.selectedSPCPowers[powerCounter].currentCost > this.SPCPowerLimit) {

				this.validationReport.push(
					this.getTranslation("CHARGEN_VALIDATION_SPC_OVER_LIMIT").replace(
						"{value}", this.selectedSPCPowers[powerCounter].local_name
					)
				);
				this.isValid = false;

			}

			this.SPCCurrentPowerPoints -= this.selectedSPCPowers[powerCounter].currentCost;

			if( this.SPCCurrentPowerPoints < 0 ) {
				this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_SPC_OVER_POWER_POINTS") );
				this.isValid = false;
			}

			if( this.selectedSPCPowers[powerCounter].charEffect ) {
				this.selectedSPCPowers[powerCounter].charEffect( this, this.selectedSPCPowers[powerCounter]);
			}
		}
	}
}

savageCharacter.prototype.init = function(useLang){

	this.appVersion = "2016050101";

	if( useLang )
		this.useLang = useLang;
	else if( localStorage["users_preferred_language"] )
		this.useLang = localStorage["users_preferred_language"];
	else
		this.useLang = "en-US";

	this.name = "";
	this.background = "";

	this.description = "";

	this.startingFunds = 500;
	this.currentFunds = 500;

	this.naturalWeapons = false;

	this.isNew = true;
	this.multipleLanguages = false;
	this.usesStrain = false;

	this.selectedSPCPowers = Array();

	this.powerAlterations = Array();

	this.characterJournal = Array();

	this.spcExtraPowerPoints = 0;

	this.knownLanguages = Array();

	this.knownLanguagesLimit = 0;

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

	this.usesRiftsCreation = false;

	this.usesSPCCreation = false;
	this.SPCRisingStars = false;
	this.SPCCurrentPowerPoints = 0;
	this.SPCTakenExtraPowerPoints = false;
	this.SPCPowerLevels = Array();
	this.SPCSelectedPowerLevel = 0;
	this.SPCPowerLevels[0] = {
		power_points: 15,
		rising_stars_power_points: 5,
		name: this.getTranslation("SPC_PULP_HEROES")
	};
	this.SPCPowerLevels[1] = {
		power_points: 30,
		rising_stars_power_points: 10,
		name: this.getTranslation("SPC_STREET_FIGHTERS")
	};
	this.SPCPowerLevels[2] = {
		power_points: 45,
		rising_stars_power_points: 20,
		name: this.getTranslation("SPC_FOUR_COLOR")
	};
	this.SPCPowerLevels[3] = {
		power_points: 60,
		rising_stars_power_points: 30,
		name: this.getTranslation("SPC_HEAVY_HITTERS")
	};
	this.SPCPowerLevels[4] = {
		power_points: 75,
		rising_stars_power_points: 50,
		name: this.getTranslation("SPC_COSMIC")
	};

	this.selectedArmor = Array();
	this.selectedMundaneGear = Array();
	this.selectedRangedWeapons = Array();
	this.selectedHandWeapons = Array();
	this.selectedShields = Array();

	this.perkOptions = Array(
		{
			label: "- " + this.getTranslation("CHARGEN_SELECT_A_PERK") + " -",
			tag: "null",
			cost: 0,
			spcOnly: false,
			effect: function() {

			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_ATTRIBUTE"),
			tag: "attribute",
			cost: 2,
			spcOnly: false,
			effect: function(savageCharObj) {
				savageCharObj.attributePointsAvailable = savageCharObj.attributePointsAvailable + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_EDGE"),
			tag: "edge",
			cost: 2,
			spcOnly: false,
			effect: function(savageCharObj) {
				savageCharObj.availableEdgePoints = savageCharObj.availableEdgePoints + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_SKILL"),
			tag: "skill",
			cost: 1,
			spcOnly: false,
			effect: function(savageCharObj) {
				savageCharObj.skillPointsAvailable = savageCharObj.skillPointsAvailable + 1;
			}
		},
		{
			label: this.getTranslation("CHARGEN_PERKS_FUNDS"),
			tag: "funds",
			cost: 1,
			spcOnly: false,
			effect: function(savageCharObj) {
				savageCharObj.startingFunds = savageCharObj.startingFunds * 2;
			}
		},
		{
			label: this.getTranslation("SPC_ADDITIONAL_POWER_POINTS_PERK"),
			tag: "spc-power-points",
			cost: 2,
			spcOnly: true,
			effect: function(savageCharObj) {
				savageCharObj.SPCTakenExtraPowerPoints = true;
			}
		}
	);

	this.books = Array();

	for( bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		this.books[bookCounter] = get_book_by_id( savageWorldsBooksList[bookCounter].id );
		if( this.books[bookCounter].id == 1 ) {
			this.books[bookCounter].inUse = true;
		} else {
			this.books[bookCounter].inUse = false;
		}
		for( var setting_c = 0; setting_c < this.books[bookCounter].setting_rules.length; setting_c++) {
			this.books[bookCounter].setting_rules[setting_c].inUse = false;
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


		//savageWorldsEdges[edgeCounter].local_description = this.getLocalName( savageWorldsEdges[edgeCounter].description );
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

//		savageWorldsHindrances[hindranceCounter].local_description = this.getLocalName( savageWorldsHindrances[hindranceCounter].description );
		savageWorldsHindrances[hindranceCounter].bookObj = get_book_by_id( savageWorldsHindrances[hindranceCounter].book );
	}

	// Localize SPC Powers...

	for( var spcCounter = 0; spcCounter < savageWorldsSPCPowers.length; spcCounter++ ) {
		savageWorldsSPCPowers[spcCounter].local_name = this.getLocalName( savageWorldsSPCPowers[spcCounter].name );
		savageWorldsSPCPowers[spcCounter].select_option_name = savageWorldsSPCPowers[spcCounter].local_name;

		savageWorldsSPCPowers[spcCounter].modifiersObj =  JSON.parse(savageWorldsSPCPowers[spcCounter].modifiers)
		for( var modCounter = 0; modCounter < savageWorldsSPCPowers[spcCounter].modifiersObj.length; modCounter++ ) {
			savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].local_name = this.getLocalName( savageWorldsSPCPowers[spcCounter].modifiersObj[ modCounter ].name )
		}

//		savageWorldsSPCPowers[spcCounter].local_description = this.getLocalName( savageWorldsSPCPowers[spcCounter].description );
		savageWorldsSPCPowers[spcCounter].bookObj = get_book_by_id( savageWorldsSPCPowers[spcCounter].book );
	}

	// Localize Arcane Backgrounds
	for( var abCounter = 0; abCounter < savageWorldsArcaneBackgrounds.length; abCounter++ ) {
		savageWorldsArcaneBackgrounds[abCounter].local_name = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].name );
		savageWorldsArcaneBackgrounds[abCounter].select_option_name = savageWorldsArcaneBackgrounds[abCounter].local_name;
		savageWorldsArcaneBackgrounds[abCounter].local_backlash = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].backlash );
//		savageWorldsArcaneBackgrounds[abCounter].local_description = this.getLocalName( savageWorldsArcaneBackgrounds[abCounter].description );
		savageWorldsArcaneBackgrounds[abCounter].bookObj = get_book_by_id( savageWorldsArcaneBackgrounds[abCounter].book );
	}

	// Localize Arcane Trappings
	for( var abCounter = 0; abCounter < savageWorldsArcaneTrappings.length; abCounter++ ) {
		savageWorldsArcaneTrappings[abCounter].local_name = this.getLocalName( savageWorldsArcaneTrappings[abCounter].name );
		savageWorldsArcaneTrappings[abCounter].select_option_name = savageWorldsArcaneTrappings[abCounter].local_name;
//		savageWorldsArcaneTrappings[abCounter].local_description = this.getLocalName( savageWorldsArcaneTrappings[abCounter].description );
		savageWorldsArcaneTrappings[abCounter].bookObj = get_book_by_id( savageWorldsArcaneTrappings[abCounter].book );
	}

	// Localize Powers
	for( var abCounter = 0; abCounter < savageWorldsPowers.length; abCounter++ ) {
		savageWorldsPowers[abCounter].local_name = this.getLocalName( savageWorldsPowers[abCounter].name );
		savageWorldsPowers[abCounter].select_option_name = savageWorldsPowers[abCounter].local_name;
	//	savageWorldsPowers[abCounter].local_description = this.getLocalName( savageWorldsPowers[abCounter].description );
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

			savageWorldsGearMundane[eqCounter].bookObj = get_book_by_id( savageWorldsGearMundane[eqCounter].book );
		}

		// Localize Armor
		for( var eqCounter = 0; eqCounter < savageWorldsGearArmor.length; eqCounter++ ) {
			savageWorldsGearArmor[eqCounter].local_name = this.getLocalName( savageWorldsGearArmor[eqCounter].name );
			savageWorldsGearArmor[eqCounter].select_option_name = savageWorldsGearArmor[eqCounter].local_name;

			savageWorldsGearArmor[eqCounter].local_notes = this.getLocalName( savageWorldsGearArmor[eqCounter].notes );

			savageWorldsGearArmor[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearArmor[eqCounter].general );
			savageWorldsGearArmor[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearArmor[eqCounter].type );

			savageWorldsGearArmor[eqCounter].bookObj = get_book_by_id( savageWorldsGearArmor[eqCounter].book );
		}

		// Localize Shields
		for( var eqCounter = 0; eqCounter < savageWorldsGearShields.length; eqCounter++ ) {
			savageWorldsGearShields[eqCounter].local_name = this.getLocalName( savageWorldsGearShields[eqCounter].name );
			savageWorldsGearShields[eqCounter].select_option_name = savageWorldsGearShields[eqCounter].local_name;

			//savageWorldsGearShields[eqCounter].local_notes = this.getLocalName( savageWorldsGearShields[eqCounter].notes );

			savageWorldsGearShields[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearShields[eqCounter].general );
			savageWorldsGearShields[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearShields[eqCounter].type );

			savageWorldsGearShields[eqCounter].bookObj = get_book_by_id( savageWorldsGearShields[eqCounter].book );
		}

		// Localize Hand Weapons
		for( var eqCounter = 0; eqCounter < savageWorldsGearHandWeapons.length; eqCounter++ ) {
			savageWorldsGearHandWeapons[eqCounter].local_name = this.getLocalName( savageWorldsGearHandWeapons[eqCounter].name );
			savageWorldsGearHandWeapons[eqCounter].select_option_name = savageWorldsGearHandWeapons[eqCounter].local_name;

			savageWorldsGearHandWeapons[eqCounter].local_notes = this.getLocalName( savageWorldsGearHandWeapons[eqCounter].notes );

			savageWorldsGearHandWeapons[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearHandWeapons[eqCounter].general );
			savageWorldsGearHandWeapons[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearHandWeapons[eqCounter].type );

			savageWorldsGearHandWeapons[eqCounter].bookObj = get_book_by_id( savageWorldsGearHandWeapons[eqCounter].book );
		}

		// Localize Ranged Weapons
		for( var eqCounter = 0; eqCounter < savageWorldsGearRangedWeapons.length; eqCounter++ ) {
			savageWorldsGearRangedWeapons[eqCounter].local_name = this.getLocalName( savageWorldsGearRangedWeapons[eqCounter].name );
			savageWorldsGearRangedWeapons[eqCounter].select_option_name = savageWorldsGearRangedWeapons[eqCounter].local_name;

			savageWorldsGearRangedWeapons[eqCounter].local_notes = this.getLocalName( savageWorldsGearRangedWeapons[eqCounter].notes );

			savageWorldsGearRangedWeapons[eqCounter].generalObj = get_gear_general_by_id( savageWorldsGearRangedWeapons[eqCounter].general );
			savageWorldsGearRangedWeapons[eqCounter].typeObj = get_gear_type_by_id( savageWorldsGearRangedWeapons[eqCounter].type );

			savageWorldsGearRangedWeapons[eqCounter].bookObj = get_book_by_id( savageWorldsGearRangedWeapons[eqCounter].book );
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


	this.bornAHero = false;

	this.refreshAvailable();
	this.validate();

		// Localize Advancement Types
		this.advancementTypes = Array();
		this.advancementTypes.push ( {
				tag: "none",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_NOT_SELECTED"),
				option1: "",
				option2: "",
			}
		);

		this.advancementTypes.push ( {
				tag: "edge",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_NEW_EDGE"),
				option1: this.availableEdges[0],
				option2: "",
			}
		);

		this.advancementTypes.push ( {
				tag: "incskill",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_SKILL"),
				option1: "",
				option2: "",
			}
		);

		this.advancementTypes.push ( {
				tag: "inc2skills",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_2_SKILLS"),
				option1: "",
				option2: "",
			}
		);

		this.advancementTypes.push ( {
				tag: "skill",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_NEW_SKILL"),
				option1: "",
				option2: "",
			}
		);

		this.advancementTypes.push ( {
				tag: "attribute",
				takenAt: -1,
				label: this.getTranslation("CHARGEN_ADVANCEMENT_INCREASE_ATTRIBUTE"),
				option1: "",
				option2: "",
			}
		);

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
	this.allSkills = Array();
	this.smartsSkills = Array();
	this.spiritSkills = Array();
	this.strengthSkills = Array();
	this.vigorSkills = Array(); // I'm not aware of any vigor skills, but I' m prepared on the backend ;)


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
				this.skillList[skillCounter].value = 0;
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
		this.allSkills.push( this.skillList[skillCounter] );

		for( skc = 0; skc < this.skillList[skillCounter].specialties.length; skc++ ) {
			this.skillList[skillCounter].specialties[skc].is_specialty = this.skillList[skillCounter].id
			this.skillList[skillCounter].specialties[skc].local_name = this.skillList[skillCounter].local_name + ": " + this.skillList[skillCounter].specialties[skc].name;
			this.skillList[skillCounter].specialties[skc].id = this.skillList[skillCounter].id
			this.skillList[skillCounter].specialties[skc].specify_name = this.skillList[skillCounter].specialties[skc].name
			this.skillList[skillCounter].specialties[skc].attribute = this.skillList[skillCounter].attribute
			if( !this.skillList[skillCounter].specialties[skc].boost )
				this.skillList[skillCounter].specialties[skc].boost = 0;
			this.allSkills.push( this.skillList[skillCounter].specialties[skc] );
		}
	}

	this.allSkills.unshift( {id: 'undefined',local_name: this.getTranslation('GENERAL_SELECT')} );

	this.raceOptions = Array();
	for( var raceCount = 0; raceCount < savageWorldsRaces.length; raceCount++ ) {

		if( this.bookInUse( savageWorldsRaces[raceCount].book ) ) {
			var newItem = {}
			angular.extend(newItem, get_race_by_id( savageWorldsRaces[raceCount].id, this.useLang ));

			this.raceOptions.push( newItem );
		}
	}


}

savageCharacter.prototype.getArcaneSkill = function() {
	for(var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if(  this.skillList[skillCounter].for_arcane ) {
			if( this.hasArcane( this.skillList[skillCounter].for_arcane )) {
				return this.skillList[skillCounter];
			}
		}
	}
	return null;
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
	for(var gc = 0; gc < savageWorldsRaces.length; gc++) {
		if( raceID == savageWorldsRaces[gc].id ) {
			this.race = savageWorldsRaces[gc];
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
			if( powerName )
				newPower.customName = powerName;
			else
				newPower.customName = newPower.local_name;

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
	this.powerAlterations = Array();
	this.skillPointsAvailable = 15;
	this.skillPointsUsed = 0;

	this.encumbrance_multiplier = 5;


	this.spcExtraPowerPoints = 0;

	this.attributePointsAvailable = 5;
	this.attributePointsUsed = 0;

	this.availableEdgePoints = 0;
	this.installedHindrances = Array();
	this.installedEdges = Array();
	this.hasArcaneBackground = false;

	this.currentArcaneBackground = {};

	this.startingFunds = 500;

	this.usesSanity = false;
	this.usesGutsSkill = false;

	this.usesRiftsCreation = false;
	this.usesSPCCreation = false;

	// for( key in this.books ) {
	// 	if( this.books[key].inUse ) {
	// 		if( this.books[key].uses_rifts_creation > 0 )
	// 			this.usesRiftsCreation = true;
	// 		if( this.books[key].uses_spc_creation > 0 )
	// 			this.usesSPCCreation = true;
	// 		if( this.books[key].usesGutsSkill > 0 )
	// 			this.usesGutsSkill = true;
	// 		if( this.books[key].uses_sanity > 0)
	// 			this.usesSanity = true;
	// 	}
	// }
	// console.log( "this.usesSPCCreation", this.usesSPCCreation);
	// console.log( "this.usesGutsSkill", this.usesGutsSkill);
	// console.log( "this.usesRiftsCreation", this.usesRiftsCreation);
	// console.log( "this.usesSanity", this.usesSanity);
	// Savage Worlds Deluxe is ALWAYS in use.
	swDeluxe = get_book_by_id( 1 ) ;
	swDeluxe.inUse = true;


	this.bornAHero = false;
	if( this.isSettingRuleEnabled( "born-a-hero") )
		this.bornAHero = true;

	this.usesSPCCreation = false;
	if( this.isSettingRuleEnabled( "super-hero") )
		this.usesSPCCreation = true;

	this.multipleLanguages = false;
	if( this.isSettingRuleEnabled( "multiple-languages") )
		this.multipleLanguages = true;

	this.usesSanity = false;
	if( this.isSettingRuleEnabled( "sanity") )
		this.usesSanity = true;

	this.usesStrain = false;
	if( this.isSettingRuleEnabled( "cyberware-strain") )
		this.usesStrain = true;

	this.diceValues = {
		agility: Array(),
		smarts: Array(),
		spirit: Array(),
		strength: Array(),
		vigor: Array(),
	}

	if(  this.selectedArcaneBackground && this.selectedArcaneBackground.power_points ) {
		this.powerPointsAvailable = this.selectedArcaneBackground.power_points;
	}


	// for( lBookCounter = 0; lBookCounter.u)

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
	this.derived.toughness = 0; // Math.floor(this.displayAttributes.vigor.value / 2) + 2;
	this.derived.armor = 0;
	this.derived.currentLoad = 0;
	this.derived.combatLoad = 0;
	fightingSkill = this.getSkill("SKILL_FIGHTING");
	this.derived.parry = 2;
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
				if( !this.skillList[skillCounter].advskill || this.skillList[skillCounter].advskill == 0)
					this.skillPointsUsed += regularCost + doubleCost * 2;
			} else {
				if( !this.skillList[skillCounter].advskill || this.skillList[skillCounter].advskill == 0)
					this.skillPointsUsed += this.skillList[skillCounter].value;
			}
		}

		for( specialtyCounter = 0; specialtyCounter < this.skillList[skillCounter].specialties.length; specialtyCounter++ ) {
			//effectiveCurrentValue =  this.skillList[skillCounter].value + this.skillList[skillCounter].boost ;
			if( this.skillList[skillCounter].specialties[specialtyCounter].value ) {
				if( this.skillList[skillCounter].specialties[specialtyCounter].value + this.skillList[skillCounter].specialties[specialtyCounter].boost > this.displayAttributes[this.skillList[skillCounter].attribute].id ) {
					regularCost = this.displayAttributes[this.skillList[skillCounter].attribute].id;
					doubleCost = this.skillList[skillCounter].specialties[specialtyCounter].value - this.displayAttributes[this.skillList[skillCounter].attribute].id;
					if(  !this.skillList[skillCounter].advskill || this.skillList[skillCounter].advskill == 0)
						this.skillPointsUsed += regularCost + doubleCost * 2;
				} else {
					if(  !this.skillList[skillCounter].advskill || this.skillList[skillCounter].advskill == 0)
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
	var majorPerk2 = 0;
	this.secondMajorHindranceChosen = false;
	for( var hindranceCounter = 0; hindranceCounter < this.selectedHindrances.length; hindranceCounter++) {

		if( typeof(this.selectedHindrances[hindranceCounter].charEffect) == "function" ) {
			this.selectedHindrances[hindranceCounter].charEffect( this );
		}
		if( typeof(this.selectedHindrances[hindranceCounter].charEffects) == "function" ) {
			this.selectedHindrances[hindranceCounter].charEffects( this );
		}
		this.installedHindrances.push( this.selectedHindrances[hindranceCounter] );

		if( this.selectedHindrances[hindranceCounter].severity == "major" ) {

			if( this.usesSPCCreation ) {
				if( majorPerk == 0 ) {
					majorPerk = 2;
					majorPerk2 = 0;
				} else if( majorPerk2 == 0) {
					majorPerk = 2;
					majorPerk2 = 2;
					this.secondMajorHindranceChosen = true;
				}
			} else {
				majorPerk = 2;
			}
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
	if( this.usesSPCCreation ) {
		this.totalPerkPoints = majorPerk + majorPerk2 + minorPerk2 + minorPerk1;
		this.availablePerkPoints = majorPerk + majorPerk2 + minorPerk2 + minorPerk1;
		this.optimizedPerkPoints = 6;

	}
	else {
		this.totalPerkPoints = majorPerk + minorPerk2 + minorPerk1;
		this.availablePerkPoints = majorPerk + minorPerk2 + minorPerk1;
		this.optimizedPerkPoints = 4;
	}

	this.SPCTakenExtraPowerPoints = false;
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

	if( this.SPCTakenExtraPowerPoints && majorPerk2 == 0 ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_SPC_EP_REQUIRES_2MAJOR") );
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
		this.selectedArcaneBackground.freePower = null;
		for( var abCounter = 0 ; abCounter < savageWorldsArcaneBackgrounds.length ; abCounter++)
			this.availableArcaneBackgrounds.push( savageWorldsArcaneBackgrounds[abCounter] );

		for( var abCounter = 0 ; abCounter < savageWorldsPowers.length ; abCounter++) {

			if(
				this.powerAlterations.length > 0
				&&
				typeof(this.powerAlterations[ savageWorldsPowers[abCounter].id ]) != "undefined"
			) {

				if( typeof(this.powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank) != "undefined" ) {
					console.log("!", this.powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank, this.XP.rankValue);
					if( this.powerAlterations[ savageWorldsPowers[abCounter].id ].adjusted_rank <= this.XP.rankValue  )
						 savageWorldsPowers[abCounter].selectable = true;
					else
						 savageWorldsPowers[abCounter].selectable = false;
				} else {
					if( savageWorldsPowers[abCounter].rank <= this.XP.rankValue  )
						 savageWorldsPowers[abCounter].selectable = true;
					else
						 savageWorldsPowers[abCounter].selectable = false;
				}
				console.log("this.powerAlterations", this.powerAlterations[ savageWorldsPowers[abCounter].id ]);
				console.log("savageWorldsPowers[abCounter]", abCounter, savageWorldsPowers[abCounter]);
			} else {

				if( savageWorldsPowers[abCounter].rank <= this.XP.rankValue  )
					 savageWorldsPowers[abCounter].selectable = true;
				else
					 savageWorldsPowers[abCounter].selectable = false;
			}

			if( this.selectedArcaneBackground && this.selectedArcaneBackground.power_list && this.selectedArcaneBackground.power_list.length > 0 ) {
				if( this.selectedArcaneBackground.power_list.indexOf( savageWorldsPowers[abCounter].tag ) < 0 ) {
					savageWorldsPowers[abCounter].selectable = false;
				}
			}

			this.availablePowers.push( savageWorldsPowers[abCounter] );
			if( this.selectedArcaneBackground.free_power != "" && this.selectedArcaneBackground.free_power == savageWorldsPowers[abCounter].tag) {
				this.selectedArcaneBackground.freePower = savageWorldsPowers[abCounter];
			}
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

	this.availableHandWeapons = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearHandWeapons.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearHandWeapons[gearCounter].book ) ) {
			this.availableHandWeapons.push( savageWorldsGearHandWeapons[gearCounter] );
		}
	}

	this.availableRangedWeapons = Array();
	for( var gearCounter = 0; gearCounter < savageWorldsGearRangedWeapons.length; gearCounter++) {
		if( this.bookInUse( savageWorldsGearRangedWeapons[gearCounter].book ) ) {
			this.availableRangedWeapons.push( savageWorldsGearRangedWeapons[gearCounter] );
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

				if( typeof(savageWorldsHindrances[hindranceCounter].requires) == "function" ) {
					savageWorldsHindrances[hindranceCounter].selectable = savageWorldsHindrances[hindranceCounter].requires( this );
				}

				if( savageWorldsHindrances[hindranceCounter].conflicts_edge != "" ) {
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
				}

				if( savageWorldsEdges[edgeCounter].required_edge != ""  ) {
					if( !this.hasEdge( savageWorldsEdges[edgeCounter].required_edge )) {
						savageWorldsEdges[edgeCounter].selectable = false;
					}
				}

				if( savageWorldsEdges[edgeCounter].conflicts_edge != "" ) {
					if( this.hasEdge( savageWorldsEdges[edgeCounter].conflicts_edge )) {
						savageWorldsEdges[edgeCounter].selectable = false;

					}
				}

				if( savageWorldsEdges[edgeCounter].required_rank > this.XP.rankValue ) {
					if(
						( this.bornAHero == false )
							||
						(	this.bornAHero == true && this.isMARS() == false && this.XP.value > 0 )
							||
						(	this.bornAHero == true && this.isMARS() == true && this.XP.value > 20 )

					) {
							savageWorldsEdges[edgeCounter].selectable = false;
					}
				}

				if( savageWorldsEdges[edgeCounter].conflicts_hindrance != ""  ) {
					if( this.hasHindrance( savageWorldsEdges[edgeCounter].conflicts_hindrance )) {
						savageWorldsEdges[edgeCounter].selectable = false;
					}
				}
				if( savageWorldsEdges[edgeCounter].reselectable == 0 && this.hasEdge( savageWorldsEdges[edgeCounter].tag ) ) {
					savageWorldsEdges[edgeCounter].selectable = false;
				}

				if(
					this.usesSPCCreation == true  &&
					(
						savageWorldsEdges[edgeCounter].tag == "arcane-background"
							||
						savageWorldsEdges[edgeCounter].tag == "arcane-resistance"
							||
						savageWorldsEdges[edgeCounter].tag == "arcane-resistance-improved"
							||
						savageWorldsEdges[edgeCounter].tag == "holy-warrior"
							||
						savageWorldsEdges[edgeCounter].tag == "gadgeteer"
							||
						savageWorldsEdges[edgeCounter].tag == "unholy-warrior"
							||
						savageWorldsEdges[edgeCounter].tag == "unholy-warrior"
							||
						savageWorldsEdges[edgeCounter].tag == "holy-warrior"
							||
						savageWorldsEdges[edgeCounter].tag == "holy-unholy-warrior"
							||
						savageWorldsEdges[edgeCounter].tag == "new-power"
							||
						savageWorldsEdges[edgeCounter].tag == "no-mercy"
							||
						savageWorldsEdges[edgeCounter].tag == "power-points"
							||
						savageWorldsEdges[edgeCounter].tag == "rapid-recharge"
							||
						savageWorldsEdges[edgeCounter].tag == "soul-drain"
							||
						savageWorldsEdges[edgeCounter].tag == "wizard"
					)
				) {
					if(
						savageWorldsEdges[edgeCounter].tag == "power-points"
							&&
						this.SPCRisingStars == true
					) {
						savageWorldsEdges[edgeCounter].selectable = true;
					} else {
						savageWorldsEdges[edgeCounter].selectable = false;
					}
				}

				this.availableEdges.push( savageWorldsEdges[edgeCounter] );
			}
		}
	}

	// Advancements...
	this.availableAdvancements = Math.floor(this.XP.value / 5);

	this.allocateAdvancementSlots();

	// clear out advancement skill specialties
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		for(var specialtyCounter = this.skillList[skillCounter].specialties - 1; specialtyCounter >= 0; specialtyCounter++) {
			if( this.skillList[skillCounter].specialties[specialtyCounter].advskill > 0 ) {
				this.skillList[skillCounter].specialties = this.skillList[skillCounter].specialties.splice(specialtyCounter, 1);
			}
		}
	}

	if( this.selectedAdvancements.length > this.availableAdvancements) {
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
				theEdge = this.getEdge( this.selectedEdges[edgeCounter].required_edge  );
				this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_REQUIRES_EDGE").replace( "{value}", theEdge.local_name) );
				this.isValid = false;
			}
		}

		if( this.selectedEdges[edgeCounter].conflicts_edge != "" ) {
			if( this.hasEdge( this.selectedEdges[edgeCounter].conflicts_edge )) {

				theEdge = this.getEdge( this.selectedEdges[edgeCounter].conflicts_edge  );
				this.validationReport.push( this.selectedEdges[edgeCounter].local_name + ": " + this.getTranslation("CHARGEN_VALIDATION_CONFLICTS_EDGE").replace( "{value}", theEdge.local_name) );
				this.isValid = false;

			}
		}

		if( this.selectedEdges[edgeCounter].conflicts_hindrance != ""  ) {
			if( hindranceTag = this.hasHindrance( this.selectedEdges[edgeCounter].conflicts_hindrance ) ) {
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



 	var attributeIncreaseNovice = false;
 	var attributeIncreaseSeasoned = false;
 	var attributeIncreaseVeteran = false;
 	var attributeIncreaseHeroic = false;

 	for( advCounter = 0; advCounter < this.selectedAdvancements.length; advCounter++) {
 		// Edge Advancement
 		if( this.selectedAdvancements[advCounter].tag == "edge" ) {
 			if(
 				this.selectedAdvancements[advCounter].option1
 					&&
 				typeof( this.selectedAdvancements[advCounter].option1.charEffect) == "function"
 			) {
 				this.selectedAdvancements[advCounter].option1.charEffect(this);
 			}

			if(
				this.selectedAdvancements[advCounter].option1
					&&
				typeof( this.selectedAdvancements[advCounter].option1.requires) == "function"
			) {
				if( !this.selectedAdvancements[advCounter].option1.requires(this) ) {
					invalidMessage = this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_INVALID_EDGE");
					invalidMessage = invalidMessage.replace("{value}", this.selectedAdvancements[advCounter].option1.local_name );
					this.validationReport.push( invalidMessage );
					this.isValid = false;
				}
			}

			if(
				this.selectedAdvancements[advCounter].option1
					&&
				this.selectedAdvancements[advCounter].option1.required_edge
			) {
				if( !this.hasEdge( this.selectedAdvancements[advCounter].option1.required_edge, advCounter ) ) {
					invalidMessage = this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_INVALID_EDGE");
					invalidMessage = invalidMessage.replace("{value}", this.selectedAdvancements[advCounter].option1.local_name );
					this.validationReport.push( invalidMessage );
					this.isValid = false;
				}
			}

			this.installedEdges.push( this.selectedAdvancements[advCounter].option1 );


 		}
 		// End of Edge Advancement

 		// Attribute Advancement
 		if( this.selectedAdvancements[advCounter].tag == "attribute" ) {
 			this.boostAttribute( this.selectedAdvancements[advCounter].option1 );

 			if( advCounter < 3 ) {
 				if( attributeIncreaseNovice ) {
 					this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_NOVICE") );
 					this.isValid = false;
 				}
 				attributeIncreaseNovice = true;
 			} else if( advCounter < 7 ) {
 				if( attributeIncreaseSeasoned ) {
 					this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_SEASONED") );
 					this.isValid = false;
 				}
 				attributeIncreaseSeasoned = true;
 			} else if( advCounter < 11 ) {

 				if( attributeIncreaseVeteran ) {
 					this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_VETERAN") );
 					this.isValid = false;
 				}
 				attributeIncreaseVeteran = true;
 			} else if( advCounter < 15 ) {
 				if( attributeIncreaseHeroic ) {
 					this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_HEROIC") );
 					this.isValid = false;
 				}
 				attributeIncreaseHeroic = true;
 			} else {
 				// Legendary can have an attribute increase every other advance
 				if(
 					advCounter != 15 // just in case someone chose it at advance #15.
 						&&
 					this.selectedAdvancements[advCounter - 1].tag != "attribute"
 				) {
 					this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_ADVANCEMENT_ATTRIBUTE_LEGENDARY") );
 					this.isValid = false;
 				}
 			}
 		}
 		// End of Attribute Advancement

 		// Skill Increase Advancement
 		if( this.selectedAdvancements[advCounter].tag == "incskill" ) {
 			// TODO
 			if( this.selectedAdvancements[advCounter].option1 )
 				this.boostSkill( this.selectedAdvancements[advCounter].option1.id );


 		}
 		// End of Skill Increase Advancement

 		// 2 Skills Increase Advancement
 		if( this.selectedAdvancements[advCounter].tag == "inc2skills" ) {
 			// TODO
 			if( this.selectedAdvancements[advCounter].option1 )
 				this.boostSkill( this.selectedAdvancements[advCounter].option1.id );
 			if( this.selectedAdvancements[advCounter].option2 )
 				this.boostSkill( this.selectedAdvancements[advCounter].option2.id );
 		}
 		// End of 2 Skills Increase Advancement

 		// New Skill Advancement
 		if( this.selectedAdvancements[advCounter].tag == "skill" ) {
 			if(
 				this.selectedAdvancements[advCounter].option1
 				&& this.selectedAdvancements[advCounter].option1.specify
 				&& this.selectedAdvancements[advCounter].option1.specify > 0
 			) {
 				this.addSpecialtySkill(
 					this.selectedAdvancements[advCounter].option1,
 					this.selectedAdvancements[advCounter].option2,
 					1,
 					1
 				);
 				//this.refreshAvailable();
 			} else {
 				this.selectedAdvancements[advCounter].option2 = null;
 				if( this.selectedAdvancements[advCounter].option1 ) {
 					if( this.selectedAdvancements[advCounter].option1.id )
 						this.boostSkill( this.selectedAdvancements[advCounter].option1.id );
 					else
 						this.boostSkill( this.selectedAdvancements[advCounter].option1 );
 				} else {
 					this.selectedAdvancements[advCounter].option1 = this.allSkills[0];
 				}
 			}
 		}
 		// End of New Skill Advancement

	 	// recalculate attributes from advancement boosts
		this.displayAttributes = {
			agility: getDiceValue( this.attributes.agility + this.attributeBoost.agility ),
			smarts: getDiceValue( this.attributes.smarts + this.attributeBoost.smarts ),
			spirit: getDiceValue( this.attributes.spirit + this.attributeBoost.spirit ),
			strength: getDiceValue( this.attributes.strength + this.attributeBoost.strength ),
			vigor: getDiceValue( this.attributes.vigor + this.attributeBoost.vigor ),
		};
	}

	this.calcSPC();

	this.refreshAvailable();

 	// recalculate attributes from advancement boosts
	this.displayAttributes = {
		agility: getDiceValue( this.attributes.agility + this.attributeBoost.agility ),
		smarts: getDiceValue( this.attributes.smarts + this.attributeBoost.smarts ),
		spirit: getDiceValue( this.attributes.spirit + this.attributeBoost.spirit ),
		strength: getDiceValue( this.attributes.strength + this.attributeBoost.strength ),
		vigor: getDiceValue( this.attributes.vigor + this.attributeBoost.vigor ),
	};

	// recalc derived toughness
	this.derived.toughness_base = Math.floor(this.displayAttributes.vigor.value / 2) + 2;
	//this.derived.toughness += this.attributeBoost.vigor; // will always be in steps of 2, so just add it ;)
	this.derived.toughness += this.derived.toughness_base;
 	this.currentFunds = this.startingFunds;
 	this.currentLoad = 0;
 	this.combatLoad = 0;
 	// subtract gear costs....
 	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++) {
 		this.currentFunds -= this.selectedHandWeapons[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedHandWeapons[gearCounter].weight;
 		if( this.selectedHandWeapons[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedHandWeapons[gearCounter].weight;
 		this.selectedHandWeapons[gearCounter].toHitRollModifier = 0;
 		this.selectedHandWeapons[gearCounter].currentParry = this.selectedHandWeapons[gearCounter].parry;

		if( this.selectedHandWeapons[gearCounter].readiedLocation && this.selectedHandWeapons[gearCounter].min_str > this.displayAttributes.strength.value ) {
			this.warningReport.push( this.getTranslation("CHARGEN_BELOW_STR_WEAPON") );

			if( this.selectedHandWeapons[gearCounter].damage_strength > 0) {
				var damageBit = this.selectedHandWeapons[gearCounter].damage;

				damageBit = this.setCharAt( damageBit, 1, this.displayAttributes.strength.value);

				if( this.selectedHandWeapons[gearCounter].currentParry > 0 )
					this.selectedHandWeapons[gearCounter].currentParry = 0;

				this.selectedHandWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " +  damageBit;
			} else {
				this.selectedHandWeapons[gearCounter].displayDamage = this.selectedHandWeapons[gearCounter].damage;
				this.selectedHandWeapons[gearCounter].toHitRollModifier = -1;
			}
		} else {
			if( this.selectedHandWeapons[gearCounter].damage_strength > 0) {
				this.selectedHandWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " + this.selectedHandWeapons[gearCounter].damage;
			} else {
				this.selectedHandWeapons[gearCounter].displayDamage = this.selectedHandWeapons[gearCounter].damage;
			}
		}

		if( this.selectedHandWeapons[gearCounter].readiedLocation != "")
			this.derived.parry += this.selectedHandWeapons[gearCounter].parry_modifier;
 	}
	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++) {
 		this.currentFunds -= this.selectedRangedWeapons[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedRangedWeapons[gearCounter].weight;
 		if( this.selectedRangedWeapons[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedRangedWeapons[gearCounter].weight;
 		this.selectedRangedWeapons[gearCounter].toHitRollModifier = 0;
 		this.selectedRangedWeapons[gearCounter].currentParry = this.selectedRangedWeapons[gearCounter].parry;

		if( this.selectedRangedWeapons[gearCounter].readiedLocation && this.selectedRangedWeapons[gearCounter].min_str > this.displayAttributes.strength.value ) {
			this.warningReport.push( this.getTranslation("CHARGEN_BELOW_STR_WEAPON") );

			if( this.selectedHandWeapons[gearCounter].damage_strength > 0) {
				var damageBit = this.selectedRangedWeapons[gearCounter].damage;

				damageBit = this.setCharAt( damageBit, 1, this.displayAttributes.strength.value);

				if( this.selectedRangedWeapons[gearCounter].currentParry > 0 )
					this.selectedRangedWeapons[gearCounter].currentParry = 0;

				this.selectedRangedWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " +  damageBit;
			} else {
				this.selectedRangedWeapons[gearCounter].displayDamage = this.selectedRangedWeapons[gearCounter].damage;
				this.selectedRangedWeapons[gearCounter].toHitRollModifier = -1;
			}
		} else {
			if( this.selectedRangedWeapons[gearCounter].damage_strength > 0) {
				this.selectedRangedWeapons[gearCounter].displayDamage = this.displayAttributes.strength.local_label + " + " + this.selectedRangedWeapons[gearCounter].damage;
			} else {
				this.selectedRangedWeapons[gearCounter].displayDamage = this.selectedRangedWeapons[gearCounter].damage;
			}
		}

		if( this.selectedRangedWeapons[gearCounter].readiedLocation != "")
			this.derived.parry += this.selectedRangedWeapons[gearCounter].parry_modifier;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedArmor.length; gearCounter++) {
 		this.currentFunds -= this.selectedArmor[gearCounter].purchaseCost;
 		if( this.selectedArmor[gearCounter].isReadied ) {
	 		if( this.selectedArmor[gearCounter].covers_torso > 0 ) {
	 			if( this.selectedArmor[gearCounter].armor > this.derived.armor ) {
	 				this.derived.armor = this.selectedArmor[gearCounter].armor;
	 			}
	 		}
	 	}
 		this.currentLoad += this.selectedArmor[gearCounter].weight;
 		if( this.selectedArmor[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedArmor[gearCounter].weight;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++) {
 		this.currentFunds -= this.selectedShields[gearCounter].purchaseCost;
 		this.currentLoad += this.selectedShields[gearCounter].weight;
		if( this.selectedShields[gearCounter].readiedLocation && this.selectedShields[gearCounter].readiedLocation != "")
			this.derived.parry += this.selectedShields[gearCounter].parry;
 		if( this.selectedShields[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedShields[gearCounter].weight;
 	}
 	for( var gearCounter = 0; gearCounter < this.selectedMundaneGear.length; gearCounter++) {
 		this.currentFunds -= this.selectedMundaneGear[gearCounter].purchaseCost * this.selectedMundaneGear[gearCounter].count;
 		this.selectedMundaneGear[gearCounter].totalWeight = this.selectedMundaneGear[gearCounter].weight * this.selectedMundaneGear[gearCounter].count;
 		this.selectedMundaneGear[gearCounter].totalPurchaseCost = this.selectedMundaneGear[gearCounter].purchaseCost * this.selectedMundaneGear[gearCounter].count;
 		this.currentLoad += this.selectedMundaneGear[gearCounter].weight * this.selectedMundaneGear[gearCounter].count;
 		if( this.selectedMundaneGear[gearCounter].droppedDuringCombat == false )
 			this.combatLoad += this.selectedMundaneGear[gearCounter].weight * this.selectedMundaneGear[gearCounter].count;
 	}

	if( this.currentFunds < 0 ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_FUNDS") );
		this.isValid = false;
	}

	if( this.usesSPCCreation ) {
		if( this.hasEdge("arcane-background") ) {
			var invalidMessage = this.getTranslation("CHARGEN_SPC_CANNOT_HAVE_AB");
			this.validationReport.push( invalidMessage );
			this.isValid = false;
		}
	}

	if( this.derived.armor == 0) {
		this.derived.toughnessAndArmor = this.derived.toughness;
	} else {
		this.derived.toughnessAndArmor = ( this.derived.toughness + this.derived.armor ) + " (" + this.derived.armor + ")";
	}

	this.loadLimit = this.displayAttributes.strength.value * this.encumbrance_multiplier;
	// if( this.hasEdge("brawny") )
	// 	this.loadLimit = this.displayAttributes.strength.value * 8;

	if( this.loadLimit > 0 ) {
		this.loadModifier = Math.floor( this.currentLoad / this.loadLimit ) * -1 ;
		this.combatLoadModifier = Math.floor( this.combatLoad / this.loadLimit ) * -1 ;
	} else {
		this.loadModifier = 0;
	}

	if( this.loadModifier < -3 ) {
		this.warningReport.push( this.getTranslation("CHARGEN_CHARACTER_OVERLOADED") );
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++) {
		this.selectedHandWeapons[gearCounter].toHitRollModifier -= this.loadModifier;
	}

	this.knownLanguagesLimit = this.displayAttributes.smarts.value / 2 + 1;
	//console.log( "this.knownLanguagesLimit", this.knownLanguagesLimit );
	for( langCounter = 0; langCounter < this.knownLanguagesLimit; langCounter++ ) {
		if( typeof(this.knownLanguages[ langCounter]) == "undefined")
			this.knownLanguages[ langCounter ] = "";
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

savageCharacter.prototype.getHindrance = function( hindranceTag  ) {

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

savageCharacter.prototype.enableSettingRule = function(settingTag) {
//	console.log( "enableSettingRule", settingTag);
	for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
			if( settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].tag ) {
				savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse = true;
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.disableSettingRule = function(settingTag) {
//	console.log( "enableSettingRule", settingTag);
	for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
			if( settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].tag ) {
				savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse = false;
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.isSettingRuleEnabled = function( settingTag ) {
//	console.log( "isSettingRuleEnabled", settingTag);
	for(var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		for( var settingCounter = 0 ; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
			if(
				settingTag
				&&
				settingTag != ""
				&&
				savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ]
				&&
				savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ].tag
				&&
				settingTag == savageWorldsBooksList[bookCounter].setting_rules[ settingCounter ].tag
			) {
				if( savageWorldsBooksList[bookCounter].inUse == true ) {
					return savageWorldsBooksList[bookCounter].setting_rules[ settingCounter].inUse;
				} else {
					// book is disabled, so setting rule is too.
					return false;
				}
			}
		}
	}
	return false;
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

			if( importObject.books ) {
				for( var importCounter = 0; importCounter < importObject.books.length; importCounter++ ) {
					for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++ ) {
						//this.books[bookCounter].inUse = false;
						if ( importObject.books[importCounter] == this.books[bookCounter].short_name ) {
							this.books[bookCounter].inUse = true;
						}
					}
				}
			}

			if( importObject.settingRules ) {
				for( var importCounter = 0; importCounter < importObject.settingRules.length; importCounter++ ) {
					this.enableSettingRule( importObject.settingRules[importCounter] );
				}
			}

			for( attribute in this.attributes ) {
				if( importObject.attributes[ attribute ] ) {
					attribute = attribute.toLowerCase().trim();
					if( this.attributes[attribute] )
						this.attributes[attribute] =  importObject.attributes[ attribute ];
				}
			}

			if( importObject.knownLanguages ) {
				this.knownLanguages = importObject.knownLanguages;
			}

			if( importObject.gender )
				this.setGender( importObject.gender  );

			if( importObject.xp )
				this.setXP( importObject.xp  );

			if( importObject.race ){
				this.setRace( importObject.race  );
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
					itemCount = 1;
					if( importObject.gearMundane[importCounter].count )
						itemCount = importObject.gearMundane[importCounter].count;
					this.addGearMundane(
						importObject.gearMundane[importCounter].book,
						importObject.gearMundane[importCounter].tag,
						importObject.gearMundane[importCounter].cost,
						importObject.gearMundane[importCounter].dropped,
						itemCount
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

			if( importObject.gearHandWeapons ) {
				this.selectedHandWeapons = Array();
				for( var importCounter = 0; importCounter < importObject.gearHandWeapons.length; importCounter++ ) {
					this.addGearHandWeapon(
						importObject.gearHandWeapons[importCounter].book,
						importObject.gearHandWeapons[importCounter].tag,
						importObject.gearHandWeapons[importCounter].cost,
						importObject.gearHandWeapons[importCounter].loc,
						importObject.gearHandWeapons[importCounter].dropped
					);
				}
			}

			if( importObject.gearRangedWeapons ) {
				this.selectedRangedWeapons = Array();
				for( var importCounter = 0; importCounter < importObject.gearRangedWeapons.length; importCounter++ ) {
					this.addGearRangedWeapon(
						importObject.gearRangedWeapons[importCounter].book,
						importObject.gearRangedWeapons[importCounter].tag,
						importObject.gearRangedWeapons[importCounter].cost,
						importObject.gearRangedWeapons[importCounter].loc,
						importObject.gearRangedWeapons[importCounter].dropped
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


			if(importObject.spcpowerlevel)
				this.SPCSelectedPowerLevel = importObject.spcpowerlevel;

			if(
				importObject.risingstars
					&&
				(
					importObject.risingstars > 1 || importObject.risingstars == "1"
				)
			){
				this.SPCRisingStars = true;
			} else {
				this.SPCRisingStars = false;
			}

			if( importObject.spcPowers ) {
				//powerID, descriptionText, level, modifiers

				for( var importCounter = 0; importCounter < importObject.spcPowers.length; importCounter++ ) {
					//console.log(" *", importObject.spcPowers[ importCounter ])
					powerID = importObject.spcPowers[ importCounter ].id;
					descriptionText = importObject.spcPowers[ importCounter ].desc;
					customName = importObject.spcPowers[ importCounter ].customName;
					level = importObject.spcPowers[ importCounter ].level;
					modifiers = importObject.spcPowers[ importCounter ].modifiers;
					this.addSPCPower( powerID, customName, descriptionText, level, modifiers  );
				}
			}

			if( importObject.advancements ) {
				this.selectedAdvancements = Array();
				this.validate();
				for( var importCounter = 0; importCounter < importObject.advancements.length; importCounter++ ) {
					this.setAdvancementType(
						importObject.advancements[importCounter].takenAt,
						importObject.advancements[importCounter].tag
					);

					if( importObject.advancements[importCounter].option1 ) {
						option1name = null;
						if( importObject.advancements[importCounter].option1name )
							option1name = importObject.advancements[importCounter].option1name;

						if( importObject.advancements[importCounter].option1book ){
							this.setAdvancementOption1(
								importObject.advancements[importCounter].takenAt,
								importObject.advancements[importCounter].option1,
								option1name,
								importObject.advancements[importCounter].option1book
							 );
						} else {
							this.setAdvancementOption1(
								importObject.advancements[importCounter].takenAt,
								importObject.advancements[importCounter].option1,
								option1name
							);
						}
					}

					if( importObject.advancements[importCounter].option2 ) {
						option2name = null;
						if( importObject.advancements[importCounter].option2name )
							option2name = importObject.advancements[importCounter].option2name;
						if( importObject.advancements[importCounter].option2book ){
							this.setAdvancementOption2(
								importObject.advancements[importCounter].takenAt,
								importObject.advancements[importCounter].option2,
								option2name,
								importObject.advancements[importCounter].option2book
							 );
						} else {

							this.setAdvancementOption2(
								importObject.advancements[importCounter].takenAt,
								importObject.advancements[importCounter].option2,
								option2name
							);
						}
					}
				}
			}
			this.isNew = false;
			this.validate();
			return true;
		}
	}

	return false;
}


savageCharacter.prototype.setAdvancementOption1 = function( advIndex, optionItem, specifyName, bookID ) {

	if( optionItem && this.selectedAdvancements[advIndex] ) {
		if( this.selectedAdvancements[advIndex].tag == "edge" ) {
			this.selectedAdvancements[advIndex].option1 = this.getEdge( optionItem );
		} else {

			if(
				this.selectedAdvancements[advIndex].tag == "incskill"
					||
				this.selectedAdvancements[advIndex].tag == "inc2skills"
					||
				this.selectedAdvancements[advIndex].tag == "skill"
			) {
				//console.log( "setAdvancementOption1", advIndex, optionItem)
				if( optionItem.id ) {
					this.selectedAdvancements[advIndex].option1 = optionItem;
				} else {
					this.selectedAdvancements[advIndex].option1 = this.getSkill( optionItem , specifyName);
				}
			} else {
				this.selectedAdvancements[advIndex].option1 = optionItem;
			}


		}
		if( bookID )
			this.selectedAdvancements[advIndex].option1book = bookID;
	}
	//console.log( "option 1 this.selectedAdvancements[advIndex]", this.selectedAdvancements[advIndex]);
}

savageCharacter.prototype.setAdvancementOption2 = function( advIndex, optionItem, specifyName, bookID ) {
	//console.log( "setAdvancementOption2", advIndex, optionItem, specifyName, bookID);
	if( optionItem && this.selectedAdvancements[advIndex] ) {
		if(
			this.selectedAdvancements[advIndex].tag == "skill"

		) {
			//if( optionItem.id ) {
				this.selectedAdvancements[advIndex].option2 = specifyName;
			//} else {
			//	this.selectedAdvancements[advIndex].option2 = this.getSkill( optionItem , specifyName);
			//}
		} else {
			if(
				this.selectedAdvancements[advIndex].tag == "incskill"
					||
				this.selectedAdvancements[advIndex].tag == "inc2skills"
			) {
				if( optionItem.id ) {
					this.selectedAdvancements[advIndex].option2 = optionItem;
				} else {
					this.selectedAdvancements[advIndex].option2 = this.getSkill( optionItem , specifyName);
				}

			} else {
				this.selectedAdvancements[advIndex].option2 = optionItem;
			}

		}
		if( bookID )
			this.selectedAdvancements[advIndex].option2book = bookID;
	}
}

savageCharacter.prototype.setAdvancementType = function( advIndex, advTag ) {
	if( advTag && this.selectedAdvancements[advIndex] ) {
		for( advCounter = 0; advCounter < this.advancementTypes.length; advCounter++ ) {
			if( advTag == this.advancementTypes[advCounter].tag) {
				var advItem = {};
				angular.extend( advItem, this.advancementTypes[advCounter] );
				advItem.takenAt = advIndex;
				this.selectedAdvancements[advIndex] = advItem;
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.addBook = function( bookObject ) {

}

savageCharacter.prototype.allocateAdvancementSlots = function () {
	if( this.selectedAdvancements.length < this.availableAdvancements ) {
		for( advCounter = this.selectedAdvancements.length; advCounter < this.availableAdvancements; advCounter++ ) {
			var advItem = {};
			angular.extend( advItem, this.advancementTypes[0] );
			advItem.takenAt = advCounter;
			this.selectedAdvancements[advCounter] = advItem;
		}
	}

	if( this.selectedAdvancements.length > this.availableAdvancements ) {
		this.selectedAdvancements = this.selectedAdvancements.slice(0, this.availableAdvancements);
	}
}

savageCharacter.prototype.exportJSON = function(noUUID) {

	var exportObject = {};
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
			var skillObj = {
				id: this.skillList[skillCounter].id,
				value: this.skillList[skillCounter].value
			};

			if( this.skillList[skillCounter].specialties.length > 0 ) {
				skillObj.specialties = Array();

				for(var specCounter = 0; specCounter < this.skillList[skillCounter].specialties.length; specCounter++ ) {
					if( this.skillList[skillCounter].specialties[specCounter].advskill == 0 ) {
						skillObj.specialties.push(
							this.skillList[skillCounter].specialties[specCounter]
						);
					}

				}
			}
			exportObject.skills.push( skillObj );
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
				count: this.selectedMundaneGear[gearCounter].count,
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

		exportObject.gearHandWeapons = Array();
		for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
			exportObject.gearHandWeapons.push( {
				book: this.selectedHandWeapons[gearCounter].book,
				tag: this.selectedHandWeapons[gearCounter].tag,
				cost: this.selectedHandWeapons[gearCounter].purchaseCost,
				loc: this.selectedHandWeapons[gearCounter].readiedLocation,
				dropped: this.selectedHandWeapons[gearCounter].droppedDuringCombat
			});
		}

		exportObject.gearRangedWeapons = Array();
		for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
			exportObject.gearRangedWeapons.push( {
				book: this.selectedRangedWeapons[gearCounter].book,
				tag: this.selectedRangedWeapons[gearCounter].tag,
				cost: this.selectedRangedWeapons[gearCounter].purchaseCost,
				loc: this.selectedRangedWeapons[gearCounter].readiedLocation,
				dropped: this.selectedRangedWeapons[gearCounter].droppedDuringCombat
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

		exportObject.settingRules = Array();
		for( var bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
			for( var settingCounter = 0; settingCounter < savageWorldsBooksList[bookCounter].setting_rules.length; settingCounter++ ) {
				if( savageWorldsBooksList[bookCounter].inUse && savageWorldsBooksList[bookCounter].setting_rules[settingCounter].inUse ) {
					exportObject.settingRules.push( savageWorldsBooksList[bookCounter].setting_rules[settingCounter].tag );
				}
			}

		}

		exportObject.spcpowerlevel = this.SPCSelectedPowerLevel;
		if(this.SPCRisingStars )
			exportObject.risingstars = 1;
		else
			exportObject.risingstars = 0;

		exportObject.knownLanguages = Array();
		for( var langCounter = 0; langCounter < this.knownLanguagesLimit + 1; langCounter++ ) {
			exportObject.knownLanguages.push( this.knownLanguages[langCounter] );
		}

		if( this.usesSPCCreation ) {
			exportObject.spcPowers = Array()

			for( var powerCounter = 0; powerCounter < this.selectedSPCPowers.length; powerCounter++) {

				var modifierObj = Array();
				for( var modCounter = 0; modCounter < this.selectedSPCPowers[powerCounter].modifiersObj.length; modCounter++) {

					modifierObj[modCounter] = {
						//desc: this.selectedSPCPowers[powerCounter].modifiersObj[modCounter].description,
						cost: this.selectedSPCPowers[powerCounter].modifiersObj[modCounter].currentCost,
					}
				}

				var exportItem = {
					id: this.selectedSPCPowers[powerCounter].id,
					level: this.selectedSPCPowers[powerCounter].selectedLevel,
					desc: this.selectedSPCPowers[powerCounter].description,
					customName: this.selectedSPCPowers[powerCounter].custom_name,
					modifiers: modifierObj
				}

				exportObject.spcPowers.push( exportItem );
			}
		}

		exportObject.advancements = Array();
		for( var advCounter = 0; advCounter < this.selectedAdvancements.length; advCounter++ ) {
			if( this.selectedAdvancements[advCounter].tag != "none") {
				var exportItem = {
					tag: this.selectedAdvancements[advCounter].tag,
					takenAt: this.selectedAdvancements[advCounter].takenAt
				}

				if( this.selectedAdvancements[advCounter].option1 ) {

					if( this.selectedAdvancements[advCounter].option1.tag ) {
						exportItem.option1 = this.selectedAdvancements[advCounter].option1.tag;
					} else {
						if( this.selectedAdvancements[advCounter].option1.id ) {
							exportItem.option1 = this.selectedAdvancements[advCounter].option1.id;
						} else {
							exportItem.option1 = this.selectedAdvancements[advCounter].option1;
						}
					}
					if( typeof(this.selectedAdvancements[advCounter].option1.specify_name) == "string" ) {
						exportItem.option1name = this.selectedAdvancements[advCounter].option1.specify_name;
					}
				}

				if( this.selectedAdvancements[advCounter].option1book ) {
					exportItem.option1book = this.selectedAdvancements[advCounter].option1book;
				}

				if( this.selectedAdvancements[advCounter].option2 ) {
					if( this.selectedAdvancements[advCounter].option2.tag ) {
						exportItem.option2 = this.selectedAdvancements[advCounter].option2.tag;
					} else {
						if( this.selectedAdvancements[advCounter].option2.id ) {
							exportItem.option2 = this.selectedAdvancements[advCounter].option2.id;
						} else {
							exportItem.option2 = this.selectedAdvancements[advCounter].option2;
						}
					}

					if( typeof(this.selectedAdvancements[advCounter].option2.specify_name) == "string" ) {
						exportItem.option2name = this.selectedAdvancements[advCounter].option2.specify_name;
					}
				}

				if( this.selectedAdvancements[advCounter].option2book ) {
					exportItem.option2book = this.selectedAdvancements[advCounter].option2book;
				}

				exportObject.advancements.push(
					exportItem
				)
			}
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
	// console.log(this.books);
	for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++) {
		if( this.books[bookCounter].id == bookID ) {
			if( this.books[bookCounter].inUse == true ){
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.hasArcane = function( arcaneTag ) {
	if( typeof( arcaneTag ) == "string") {
		if( this.selectedArcaneBackground && this.selectedArcaneBackground.tag == arcaneTag)
			return true;
	} else {
		// for possible future use.
		if( typeof( arcaneTag ) == "array") {
			for(var atc = 0; atc > arcaneTag.length; atc++ ) {
				if( this.selectedArcaneBackground && this.selectedArcaneBackground.tag == arcaneTag[atc])
					return true;
			}
		}
	}
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

savageCharacter.prototype.addSpecialtySkill = function( skillItem, specialtyName, specialtyValue, advancementSkill ) {
	if( !specialtyName )
		specialtyName = '';
	if( !specialtyValue )
		specialtyValue = 1;  // d4
	if( !advancementSkill )
		advancementSkill = 0;
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if(
			(
				this.skillList[skillCounter].id == skillItem
					||
				this.skillList[skillCounter].id == skillItem.id
			)
				&&
			!this.skillList[skillCounter].is_specialty
		) {
			this.skillList[skillCounter].specialties.push(
				{
					name: specialtyName,
					value: specialtyValue,
					advskill: advancementSkill
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
			this.skillList[skillCounter].advskill = 0;
			return true;
		}

	}
	return false;
}

savageCharacter.prototype.addRacialSkill = function( skillID, skillValue ) {
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			this.skillList[skillCounter].boost = skillValue;
			this.skillList[skillCounter].advskill = 0;
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.getSkill = function( skillID, specifyName ) {
	for( var skillCounter = 0; skillCounter < this.allSkills.length; skillCounter++ ) {
		if(
			this.allSkills[skillCounter].id == skillID
				||
			this.allSkills[skillCounter] == skillID
				||
			(
				skillID.id
					&&
				(
					this.allSkills[skillCounter].id == skillID.id
						||
					this.allSkills[skillCounter] == skillID.id
				)
			)
		) {
			if( specifyName ) {
				if( specifyName ) {
					if( this.allSkills[skillCounter].specialties ) {

						for( var specC = 0; specC < this.allSkills[skillCounter].specialties.length; specC++ ) {

							if( this.allSkills[skillCounter].specialties[specC].name.trim().toLowerCase() == specifyName.trim().toLowerCase() ) {
								return this.allSkills[skillCounter].specialties[specC];
							}
						}
					}
					return null;
				}
			} else {
				return this.allSkills[skillCounter];
			}

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

savageCharacter.prototype.hasEdge = function( edgeTag, maxCount ) {
	if( !maxCount )
		maxCount = -1;
	for( var edgeCounter = 0; edgeCounter < this.selectedEdges.length; edgeCounter++ ) {

		if( this.selectedEdges[edgeCounter].tag == edgeTag) {
			return true;
		}
	}

	for( var edgeCounter = 0; edgeCounter < this.race.edges.length; edgeCounter++ ) {
		if( this.race.edges[edgeCounter].tag == edgeTag){
			return true;
		}
	}

	for( var edgeCounter = 0; edgeCounter < this.selectedAdvancements.length; edgeCounter++ ) {
		if(
			this.selectedAdvancements[edgeCounter].tag == "edge"
				&&
		 	this.selectedAdvancements[edgeCounter].option1
		 		&&
		 	this.selectedAdvancements[edgeCounter].option1.tag
		 		&&
		 	this.selectedAdvancements[edgeCounter].option1.tag == edgeTag
		){
			if( maxCount == -1 || maxCount >= edgeCounter )
		 		return true;
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
	this.attributes[attributeName] = diceID - this.attributeBoost[attributeName];
}

savageCharacter.prototype.boostAttribute = function( attributeName, boostNumber ) {
	if( !boostNumber )
		boostNumber = 1;
	this.attributeBoost[attributeName] += boostNumber;
}

savageCharacter.prototype.boostSkill = function( skillID, specialtyName, boostNumber ) {

	if( !boostNumber )
		boostNumber = 1;
	for( var skillCounter = 0; skillCounter < this.skillList.length; skillCounter++ ) {
		if( this.skillList[skillCounter].id == skillID ) {
			if( specialtyName ) {
				for( var skillCounter2 = 0; skillCounter2 < this.skillList[skillCounter].specialties.length; skillCounter2++ ) {
					if(  this.skillList[skillCounter].specialties[skillCounter2].name == specialtyName ) {
						this.skillList[skillCounter].specialties[skillCounter2].boost += boostNumber;
						return true;
					}
				}
			} else {
				this.skillList[skillCounter].boost += boostNumber;
				return true;
			}
		}
	}
	return false;
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

savageCharacter.prototype.addGearMundane = function( fromBook, gearTag, itemCost, droppedDuringCombat, itemCount ) {
	if( !itemCount )
		itemCount = 1;
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableMundaneGear.length; gearCounter++ ) {
		if(
			gearTag == this.availableMundaneGear[gearCounter].tag
				&&
			fromBook == this.availableMundaneGear[gearCounter].book
		) {
			mundaneGearIndex = this.getMundaneGear( gearTag );
			if( mundaneGearIndex > -1 ) {
				this.selectedMundaneGear[mundaneGearIndex].count++;
				return true;
			} else {


				var pushedItem = {};
				angular.extend( pushedItem, this.availableMundaneGear[gearCounter]);
				pushedItem.droppedDuringCombat = droppedDuringCombat;
				if( itemCost > -1 ) {
					pushedItem.purchaseCost = itemCost;
				} else {
					pushedItem.purchaseCost = pushedItem.cost;
				}
				pushedItem.count = itemCount;

				this.selectedMundaneGear.push( pushedItem );
				return true;
			}
		}
	}
	return false;
}

savageCharacter.prototype.getMundaneGear = function( gearTag ) {
	for( var findCounter = 0; findCounter < this.selectedMundaneGear.length; findCounter++ ) {
		if( this.selectedMundaneGear[findCounter].tag == gearTag )
			return findCounter;
	}

	return -1;
}

savageCharacter.prototype.addGearRangedWeapon = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableRangedWeapons.length; gearCounter++ ) {
		if(
			gearTag == this.availableRangedWeapons[gearCounter].tag
				&&
			fromBook == this.availableRangedWeapons[gearCounter].book
		) {
			var pushedItem = {};
			angular.extend( pushedItem, this.availableRangedWeapons[gearCounter]);
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
			this.selectedRangedWeapons.push( pushedItem );
			return true;
		}
	}
	return false;
}

savageCharacter.prototype.addGearHandWeapon = function( fromBook, gearTag, itemCost, readiedLocation, droppedDuringCombat ) {
	if(!droppedDuringCombat)
		droppedDuringCombat = false;
	for( var gearCounter = 0; gearCounter < this.availableHandWeapons.length; gearCounter++ ) {
		if(
			gearTag == this.availableHandWeapons[gearCounter].tag
				&&
			fromBook == this.availableHandWeapons[gearCounter].book
		) {
			var pushedItem = {};
			angular.extend( pushedItem, this.availableHandWeapons[gearCounter]);
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
			this.selectedHandWeapons.push( pushedItem );
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
			var pushedItem = {};
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
			var pushedItem = {};
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
	if( this.selectedMundaneGear[gearIndex].count > 1)
		this.selectedMundaneGear[gearIndex].count--;
	else
		this.selectedMundaneGear.splice( gearIndex, 1);
}

savageCharacter.prototype.removeArmor = function( gearIndex ) {
	this.selectedArmor.splice( gearIndex, 1);
}
savageCharacter.prototype.removeHandWeapon = function( gearIndex ) {
	this.selectedHandWeapons.splice( gearIndex, 1);
}

savageCharacter.prototype.removeRangedWeapon = function( gearIndex ) {
	this.selectedRangedWeapons.splice( gearIndex, 1);
}

savageCharacter.prototype.removeShield = function( gearIndex ) {
	this.selectedShields.splice( gearIndex, 1);
}

savageCharacter.prototype.equipPrimaryHandWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "primary" )
			this.selectedShields[gearCounter].readiedLocation = "";
		if( this.selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
				this.selectedShields[gearCounter].readiedLocation = "";
		}
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
		if( this.selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
				this.selectedHandWeapons[gearCounter].readiedLocation = "";
		}
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
		if( this.selectedRangedWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
				this.selectedRangedWeapons[gearCounter].readiedLocation = "";
		}
	}

	this.selectedHandWeapons[gearIndex].droppedDuringCombat = false;
	this.selectedHandWeapons[gearIndex].readiedLocation = "primary";

}

savageCharacter.prototype.equipPrimaryRangedWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "primary" )
			this.selectedShields[gearCounter].readiedLocation = "";
		if( this.selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
				this.selectedShields[gearCounter].readiedLocation = "";
		}
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
		if( this.selectedHandWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
				this.selectedHandWeapons[gearCounter].readiedLocation = "";
		}
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "primary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
		if( this.selectedRangedWeapons[gearIndex].requires_2_hands > 0 ) {
			if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
				this.selectedRangedWeapons[gearCounter].readiedLocation = "";
		}
	}

	this.selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
	this.selectedRangedWeapons[gearIndex].readiedLocation = "primary";

}


savageCharacter.prototype.equipSecondaryHandWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
	}


	this.selectedHandWeapons[gearIndex].readiedLocation = "secondary";
	this.selectedHandWeapons[gearIndex].droppedDuringCombat = false;
}

savageCharacter.prototype.equipSecondaryRangedWeapon = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
	}


	this.selectedRangedWeapons[gearIndex].readiedLocation = "secondary";
	this.selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
}


savageCharacter.prototype.equipPrimaryShield = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "primary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedShields[gearIndex].readiedLocation = "primary";
	this.selectedShields[gearIndex].droppedDuringCombat = false;
}


savageCharacter.prototype.equipSecondaryShield = function( gearIndex ) {
	// unequip all items in primary hand....
	for( var gearCounter = 0; gearCounter < this.selectedShields.length; gearCounter++ ) {
		if( this.selectedShields[gearCounter].readiedLocation == "secondary" )
			this.selectedShields[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedHandWeapons.length; gearCounter++ ) {
		if( this.selectedHandWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedHandWeapons[gearCounter].readiedLocation = "";
	}

	for( var gearCounter = 0; gearCounter < this.selectedRangedWeapons.length; gearCounter++ ) {
		if( this.selectedRangedWeapons[gearCounter].readiedLocation == "secondary" )
			this.selectedRangedWeapons[gearCounter].readiedLocation = "";
	}

	this.selectedShields[gearIndex].readiedLocation = "secondary";
	this.selectedShields[gearIndex].droppedDuringCombat = false;
}

savageCharacter.prototype.unequipShield = function( gearIndex ) {
	this.selectedShields[gearIndex].readiedLocation = "";
}

savageCharacter.prototype.unequipHandWeapon = function( gearIndex ) {
	this.selectedHandWeapons[gearIndex].readiedLocation = "";
}

savageCharacter.prototype.unequipRangedWeapon = function( gearIndex ) {
	this.selectedRangedWeapons[gearIndex].readiedLocation = "";
}

savageCharacter.prototype.equipArmor = function( gearIndex ) {
	this.selectedArmor[gearIndex].isReadied = true;
	this.selectedArmor[gearIndex].droppedDuringCombat = false;
}

savageCharacter.prototype.unequipArmor = function( gearIndex ) {
	this.selectedArmor[gearIndex].isReadied = false;
}

savageCharacter.prototype.setDroppedDuringCombat = function( itemType, gearIndex ) {
	if( itemType == "armor")
		this.selectedArmor[gearIndex].droppedDuringCombat = true;
	if( itemType == "handweapon")
		this.selectedHandWeapons[gearIndex].droppedDuringCombat = true;
	if( itemType == "rangedweapon")
		this.selectedRangedWeapons[gearIndex].droppedDuringCombat = true;
	if( itemType == "shield")
		this.selectedShields[gearIndex].droppedDuringCombat = true;
	if( itemType == "gear")
		this.selectedMundaneGear[gearIndex].droppedDuringCombat = true;
}

savageCharacter.prototype.setUsedDuringCombat = function( itemType, gearIndex ) {
	if( itemType == "armor")
		this.selectedArmor[gearIndex].droppedDuringCombat = false;
	if( itemType == "handweapon")
		this.selectedHandWeapons[gearIndex].droppedDuringCombat = false;
	if( itemType == "handweapon")
		this.selectedRangedWeapons[gearIndex].droppedDuringCombat = false;
	if( itemType == "shield")
		this.selectedShields[gearIndex].droppedDuringCombat = false;
	if( itemType == "gear")
		this.selectedMundaneGear[gearIndex].droppedDuringCombat = false;
}

savageCharacter.prototype.addSPCPower = function( powerID, customName, descriptionText, level, modifiers ) {
	if( !descriptionText )
		descriptionText = "";
	if( !level )
		level = 1;


	for( var spcCounter = 0; spcCounter < savageWorldsSPCPowers.length; spcCounter++) {
		if( powerID == savageWorldsSPCPowers[spcCounter].id) {
			var addPower = angular.copy( savageWorldsSPCPowers[spcCounter] );

			if(!customName) {
				addPower.custom_name = savageWorldsSPCPowers[spcCounter].local_name;
			} else {
				addPower.custom_name = customName;
			}

			addPower.description = descriptionText;
			addPower.selectedLevel = level / 1;
			for( var modCounter = 0; modCounter < addPower.modifiersObj.length;modCounter++) {
				addPower.modifiersObj[modCounter].description = "";
				addPower.modifiersObj[modCounter].currentCost = 0;
				if( modifiers && modifiers[modCounter] ) {
					//addPower.modifiersObj[modCounter].description = modifiers[modCounter].desc;
					addPower.modifiersObj[modCounter].currentCost = modifiers[modCounter].cost;
				}
			}
			this.selectedSPCPowers.push( addPower );

			return true;
		}
	}
	return false;
}
