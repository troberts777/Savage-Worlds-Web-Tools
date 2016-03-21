function savageCharacter (useLang) {

	if( useLang )
		this.useLang = useLang;
	else if( localStorage["users_preferred_language"] )
		this.useLang = localStorage["users_preferred_language"];
	else
		this.useLang = "en-US";

}

savageCharacter.prototype.init = function(){
	this.name = "";
	this.background = "";

	this.description = "";

	this.XP = 0;

	this.uuid = this.makeUUID();

	this.options = Array();

	this.usesSanity = false;

	this.books = Array();
	for( bookCounter = 0; bookCounter < savageWorldsBooksList.length; bookCounter++ ) {
		this.books[bookCounter] = get_book_by_id( savageWorldsBooksList[bookCounter].id );
		if( this.books[bookCounter].id == 1 )
			this.books[bookCounter].inUse = true;
		else
			this.books[bookCounter].inUse = false;
	}

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
	this.gender = this.genderOptions[0];

	this.skillValues = {};

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

	this.usesSanity = false;

	for( skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		var showSkill = true;
		if( savageWorldsSkillList[skillCounter].name[ this.useLang ] ) {
			savageWorldsSkillList[skillCounter].local_name = savageWorldsSkillList[skillCounter].name[ this.useLang ];
		} else {
			savageWorldsSkillList[skillCounter].local_name = savageWorldsSkillList[skillCounter].name[ "en-US" ];
		}
		if( !savageWorldsSkillList[skillCounter].value )
			savageWorldsSkillList[skillCounter].value = 0;
		if( !savageWorldsSkillList[skillCounter].spec )
			savageWorldsSkillList[skillCounter].spec = "";
		if( !savageWorldsSkillList[skillCounter].specialties )
			savageWorldsSkillList[skillCounter].specialties = Array();

		savageWorldsSkillList[skillCounter].display_value = "";
		if( savageWorldsSkillList[skillCounter].value  > 0 ) {
			diceValue = getDiceValue( savageWorldsSkillList[skillCounter].value );
			savageWorldsSkillList[skillCounter].display_value = diceValue.local_label;
		}

		for( specialtyCounter = 0; specialtyCounter < savageWorldsSkillList[skillCounter].specialties.length; specialtyCounter++) {
			savageWorldsSkillList[skillCounter].specialties[specialtyCounter].display_value = "";
			if( savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value  > 0 ) {
				diceValue = getDiceValue( savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value );
				savageWorldsSkillList[skillCounter].specialties[specialtyCounter].display_value = diceValue.local_label;
			}
		}

		if( !this.bookInUse( savageWorldsSkillList[skillCounter].book) )
			showSkill = false;

		if(  savageWorldsSkillList[skillCounter].for_arcane ) {
			if( !this.hasArcane( savageWorldsSkillList[skillCounter].for_arcane ))
				showSkill = false;
		}

		if( this.skillValues[ savageWorldsSkillList[skillCounter].id ] ) {
			savageWorldsSkillList[skillCounter].value = this.skillValues[ savageWorldsSkillList[skillCounter].short_name ];

		}



		if( showSkill && savageWorldsSkillList[skillCounter].attribute == "agility" ) {
			this.agilitySkills.push( savageWorldsSkillList[skillCounter] );
		}
		if( showSkill && savageWorldsSkillList[skillCounter].attribute == "smarts" ) {
			this.smartsSkills.push( savageWorldsSkillList[skillCounter] );
		}
		if( showSkill && savageWorldsSkillList[skillCounter].attribute == "spirit" ) {
			this.spiritSkills.push( savageWorldsSkillList[skillCounter] );
		}
		if( showSkill && savageWorldsSkillList[skillCounter].attribute == "strength" ) {
			this.strengthSkills.push( savageWorldsSkillList[skillCounter] );
		}
	}

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
	this.isValid = true;
	this.validationReport = Array();
	this.skillPointsAvailable = 15;
	this.skillPointsUsed = 0;

	this.attributePointsAvailable = 5;
	this.attributePointsUsed = 0;

	// Calc init derived stats
	this.derived.toughness = Math.floor(this.attributes.vigor.value / 2) + 2;
	this.derived.armor = 0;
	fightingSkill = this.getSkill("SKILL_FIGHTING");
	this.parry = 2;
	if( fightingSkill.value > 0 ) {
		fightingValue = getDiceValue( fightingSkill.value );
		this.derived.parry = Math.floor(fightingValue.value / 2) + 2;
	}
	this.derived.pace = 6;
	this.derived.charisma = 0;
	this.derived.sanity = Math.floor(this.attributes.spirit.value / 2) + 2;

	// Calculate used skill points
	for( skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++) {
		if( savageWorldsSkillList[skillCounter].value ) {

			if( savageWorldsSkillList[skillCounter].value > this.attributes[savageWorldsSkillList[skillCounter].attribute].id ) {
				regularCost = this.attributes[savageWorldsSkillList[skillCounter].attribute].id;
				doubleCost = savageWorldsSkillList[skillCounter].value - this.attributes[savageWorldsSkillList[skillCounter].attribute].id;
				this.skillPointsUsed += regularCost + doubleCost * 2;

			} else {
				this.skillPointsUsed += savageWorldsSkillList[skillCounter].value;
			}
		}

		for( specialtyCounter = 0; specialtyCounter < savageWorldsSkillList[skillCounter].specialties.length; specialtyCounter++ ) {
			if( savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value ) {
				if( savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value > this.attributes[savageWorldsSkillList[skillCounter].attribute].id ) {
					regularCost = this.attributes[savageWorldsSkillList[skillCounter].attribute].id;
					doubleCost = savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value - this.attributes[savageWorldsSkillList[skillCounter].attribute].id;
					this.skillPointsUsed += regularCost + doubleCost * 2;
				} else {
					this.skillPointsUsed += savageWorldsSkillList[skillCounter].specialties[specialtyCounter].value;
				}
			}
		}
	}

	// Calculate used attribute points
	this.attributePointsUsed += this.attributes.agility.id - 1;
	this.attributePointsUsed += this.attributes.smarts.id - 1;
	this.attributePointsUsed += this.attributes.spirit.id - 1;
	this.attributePointsUsed += this.attributes.strength.id - 1;
	this.attributePointsUsed += this.attributes.vigor.id - 1;


	// this.attributePointsAvailable = this.attributePointsAvailable - this.attributePointsUsed;
	// this.skillPointsAvailable = this.skillPointsAvailable - this.skillPointsUsed;

	if( this.attributePointsUsed > this.attributePointsAvailable ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_ATTRIBUTES") );
		this.isValid = false;
	}

	if( this.skillPointsUsed > this.skillPointsAvailable ) {
		this.validationReport.push( this.getTranslation("CHARGEN_VALIDATION_TOO_MANY_SKILLS") );
		this.isValid = false;
	}

	// Process Racial Hindrances
	// TODO
	// Process Racial Edges
	// TODO

	// Process Hindrances

	// Process Selected Hindrances
	// TODO

	// Process Available Hindrances
	// TODO

	// Process Edges
	// Process Selected Edges
	// TODO


	// Apply Arcane Background
	// TODO

	// Process Available Edges
	// TODO



	// Calculate Perks Available
	// TODO

	// Process Selected Perks
	// TODO



	this.refreshAvailable();
}

savageCharacter.prototype.exportBBCode = function() {
	return "TODO";
}

savageCharacter.prototype.importJSON = function( jsonString ) {
	if( jsonString ) {
		importObject = JSON.parse(jsonString);
		if( importObject ) {
			this.name = importObject.name;
			this.background = importObject.background;
			if( importObject.uuid )
				this.uuid = importObject.uuid;
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

	exportObject.xp = this.xp;
	exportObject.gender = this.gender.id;
	exportObject.race = this.race.id;

	exportObject.attributes = {
		agility: this.attributes.agility.id,
		smarts: this.attributes.smarts.id,
		spirit: this.attributes.spirit.id,
		strength: this.attributes.strength.id,
		vigor: this.attributes.vigor.id,
	}

	exportObject.books = Array();

	for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++ ) {
		if ( this.books[bookCounter].inUse  )
			exportObject.books.push( this.books[bookCounter].short_name );
	}

	exportObject.skills = Array();
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if(
			savageWorldsSkillList[skillCounter].value > 0
			||
			savageWorldsSkillList[skillCounter].specialties.length > 0
		) {
			if(savageWorldsSkillList[skillCounter].specialties.length > 0 ) {
				exportObject.skills.push(
					{
						id: savageWorldsSkillList[skillCounter].id,
						value: savageWorldsSkillList[skillCounter].value,
						specialties: savageWorldsSkillList[skillCounter].specialties
					}
				);
			} else {
				exportObject.skills.push(
					{
						id: savageWorldsSkillList[skillCounter].id,
						value: savageWorldsSkillList[skillCounter].value
					}
				);
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
	for( var bookCounter = 0; bookCounter < this.books.length; bookCounter++) {
		if( this.books[bookCounter].id == bookID ) {
			if( this.books[bookCounter].inUse == true ){
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
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			savageWorldsSkillList[skillCounter].value++;
			if( savageWorldsSkillList[skillCounter].value > 5)
				savageWorldsSkillList[skillCounter].value = 5;

			return true;
		}

	}
	return false;
}

savageCharacter.prototype.decrementSkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			savageWorldsSkillList[skillCounter].value--;
			if( savageWorldsSkillList[skillCounter].value < 0)
				savageWorldsSkillList[skillCounter].value = 0;

			return true;
		}

	}
	return false;
}

savageCharacter.prototype.addSpecialtySkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			savageWorldsSkillList[skillCounter].specialties.push(
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
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			savageWorldsSkillList[skillCounter].value = skillValue;
			return true;
		}

	}
	return false;
}

savageCharacter.prototype.getSkill = function( skillID ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			return savageWorldsSkillList[skillCounter];
		}

	}
	return null;
}

savageCharacter.prototype.setSpecialties = function( skillID, specialtiesValue ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			savageWorldsSkillList[skillCounter].specialties = specialtiesValue;
			return true;
		}

	}
	return false;
}


savageCharacter.prototype.incrementSpecialtySkill = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex] ) {
				savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value++;
				if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value < 0)
					savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value = 0;
				return true;
			}
		}

	}
	return false;
}

savageCharacter.prototype.decrementSpecialtySkill = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex] ) {

				if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value < 2) {
					//savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value = 0;
					if( savageWorldsSkillList[skillCounter].specialties.length == 1){
						savageWorldsSkillList[skillCounter].specialties = Array();
						return true;
					} else {
						this.removeSpecialtyAtIndex( skillID, specialtyIndex);
						return true;
					}
				} else {
					savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].value--;
					return true;
				}

			}
		}

	}
	return false;
}

savageCharacter.prototype.updateSpecialtySkillName = function( skillID, specialtyIndex, updatedName ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex] ) {
				savageWorldsSkillList[skillCounter].specialties[ specialtyIndex].name = updatedName;
				return true;
			}
		}

	}
	return false;
}

savageCharacter.prototype.removeSpecialtyAtIndex = function( skillID, specialtyIndex ) {
	for( var skillCounter = 0; skillCounter < savageWorldsSkillList.length; skillCounter++ ) {
		if( savageWorldsSkillList[skillCounter].id == skillID ) {
			if( savageWorldsSkillList[skillCounter].specialties[ specialtyIndex] ) {
				savageWorldsSkillList[skillCounter].specialties.splice(specialtyIndex, 1);
				return true;
			}
		}

	}
	return false;
}
