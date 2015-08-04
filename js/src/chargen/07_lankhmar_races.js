/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Fantasy Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_races)
	var chargen_races = Array();


if(!chargen_sourcebooks)
	var chargen_sourcebooks = Array();


if(!overrides_core_races)
	var overrides_core_races = Array();
overrides_core_races[7] = true;

chargen_sourcebooks = chargen_sourcebooks.concat( books_list[7] );

chargen_races = chargen_races.concat(Array(
	/* Savage Worlds Deluxe - These are the same Fantasy Companion Races */
	{
		name: "Human",
		blurb: Array(),
		book: books_list[7],
		page: "p10",

		edges_included: Array(
			"Extra Edge",
			{
				name: "Skilled",
				char_effects: function( character_object ) {
					character_object.skill_points++;
				}

			}
		),
		hindrances_included: Array()
	},
	{
		name: "Human, Lankhmart",
		blurb: Array(),
		book: books_list[7],
		page: "p10",

		edges_included: Array(
			"Jaded",
			"Alertness"
		),
		hindrances_included: Array()
	},
	{
		name: "Human, Kleshite",
		blurb: Array(),
		book: books_list[7],
		page: "p10",

		edges_included: Array(
			{
				name: "Fast",
				char_effects: function( character_object ) {
					character_object.pace = character_object.pace + 2;
				}

			},
			"Quick"
		),
		hindrances_included: Array()
	},
	{
		name: "Human, Northener",
		blurb: Array(),
		book: books_list[7],
		page: "p10",

		edges_included: Array(
			{
				name: "Stature",
				char_effects: function( character_object ) {
					character_object.toughness++;
					character_object.size++;
				}

			},
			{
				name: "Wildling"
			}
		),
		hindrances_included: Array()
	},
	{
		name: "Human, Mingol",
		blurb: Array(),
		book: books_list[7],
		page: "p10",

		edges_included: Array(
			"Steady Hands",
			{
				name: "Skilled"
			}
		),
		hindrances_included: Array()
	},
	{
		name: "Nehwon Ghoul",
		blurb: Array(),
		book: books_list[7],
		page: "p11",

		edges_included: Array(
			{
				name: "Living Skeleton"
			},
			{
				name: "Transparent Flesh"
			}
		),
		hindrances_included: Array()
	},
	{
		name: "Ratlings",
		blurb: Array(),
		book: books_list[7],
		page: "p11-p12",

		edges_included: Array(
			{
				name: "Agile",
				char_effects: function( character_object ) {
					character_object.race.attributes.agility = 1;
				}
			},
			{
				name: "Direction Sense"
			},
			{
				name: "Low-Light Vision"
			},
			{
				name: "Ratkin"
			},
			{
				name: "Secret Nature"
			}
		),
		hindrances_included: Array()
	}


));