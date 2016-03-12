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
}

savageCharacter.prototype.removeEdge = function(indexNumber) {
}

savageCharacter.prototype.addHindrance = function(bookId, tag) {
}

savageCharacter.prototype.removeHindrance = function(indexNumber) {
}

savageCharacter.prototype.addGear = function(bookId, tag) {
}

savageCharacter.prototype.removeGear = function(indexNumber) {
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
					this.setAttribute( attribute, importObject.attributes[ attribute ] );
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

savageCharacter.prototype.setAttribute = function( attributeName, attributeID ) {
	attributeName = attributeName.toLowerCase().trim();
	if( this.attributes[attributeName] )
		this.attributes[attributeName] = getDiceValue( attributeID );
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