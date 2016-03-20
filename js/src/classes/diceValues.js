var globalDiceValues = Array(
	{
		id: 0,
		value: 0,
		label: {
			"en-US" : "n/a"
		}
	},
	{
		id: 1,
		value: 4,
		label: {
			"en-US" : "d4"
		}
	},
	{
		id: 2,
		value: 6,
		label: {
			"en-US" : "d6"
		}
	},
	{
		id: 3,
		value: 8,
		label: {
			"en-US" : "d8"
		}
	},
	{
		id: 4,
		value: 10,
		label: {
			"en-US" : "d10"
		}
	},
	{
		id: 5,
		value: 12,
		label: {
			"en-US" : "d12"
		}
	},
	{
		id: 6,
		value: 13,
		label: {
			"en-US" : "d12+1"
		}
	},
	{
		id: 7,
		value: 14,
		label: {
			"en-US" : "d12+2"
		}
	},
	{
		id: 8,
		value: 15,
		label: {
			"en-US" : "d12+3"
		}
	},
	{
		id: 9,
		value: 16,
		label: {
			"en-US" : "d12+4"
		}
	},
	{
		id: 10,
		value: 17,
		label: {
			"en-US" : "d12+5"
		}
	},
	{
		id: 11,
		value: 18,
		label: {
			"en-US" : "d12+6"
		}
	},
	{
		id: 12,
		value: 19,
		label: {
			"en-US" : "d12+7"
		}
	},
	{
		id: 13,
		value: 20,
		label: {
			"en-US" : "d12+8"
		}
	},
	{
		id: 14,
		value: 21,
		label: {
			"en-US" : "d12+9"
		}
	},
	{
		id: 15,
		value: 22,
		label: {
			"en-US" : "d12+10"
		}
	},
	{
		id: 16,
		value: 23,
		label: {
			"en-US" : "d12+11"
		}
	},
	{
		id: 17,
		value: 24,
		label: {
			"en-US" : "d12+12"
		}
	},
	{
		id: 18,
		value: 25,
		label: {
			"en-US" : "d12+13"
		}
	},
	{
		id: 19,
		value: 26,
		label: {
			"en-US" : "d12+14"
		}
	}
);

function localizeDice( language ) {
	if( !language )
		language = localStorage["users_preferred_language"];
	for( var gdv = 0 ; gdv < globalDiceValues.length; gdv++) {
		if( globalDiceValues[gdv].label[language] ) {
			globalDiceValues[gdv].local_label = globalDiceValues[gdv].label[language];
		} else {
			globalDiceValues[gdv].local_label = globalDiceValues[gdv].label["en-US"];
		}
	}
}
function getDiceValue( diceID, language ) {

	for( var gdv = 0 ; gdv < globalDiceValues.length; gdv++) {
		if( diceID == globalDiceValues[gdv].id ) {
			if( globalDiceValues[gdv].label[language] ) {
				globalDiceValues[gdv].local_label = globalDiceValues[gdv].label[language];
			} else {
				globalDiceValues[gdv].local_label = globalDiceValues[gdv].label["en-US"];
			}
			return globalDiceValues[gdv];
		}
	}
	return false;
}