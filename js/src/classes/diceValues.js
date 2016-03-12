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