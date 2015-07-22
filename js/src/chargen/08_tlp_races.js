/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_races)
	var chargen_races = Array();

if(!chargen_sourcebooks)
	var chargen_sourcebooks = Array();

chargen_sourcebooks = chargen_sourcebooks.concat( books_list[8] );

chargen_races = chargen_races.concat(Array(

	{
		name: "Saurian, S’Susth",
		blurb: Array(
			"Lizard men typically come from steaming jungles or deep deserts where they have unique civilizations unknown to other sentient races."
		),
		book: books_list[8],
		page: "p35",
		edges_included: Array(
			{
				name: "Keen Senses ",
				description: ""
			},
			{
				name: "Natural Weapons (Str+d6)",
				description: ""
			}
		),
		hindrances_included: Array(
			{
				name: "Environmental Weakness (Cold)",
				description: ""
			}
		)
	},
	{
		name: "Saurian, Yahlo",
		blurb: Array(
			"Lizard men typically come from steaming jungles or deep deserts where they have unique civilizations unknown to other sentient races."
		),
		book: books_list[8],
		page: "p35",
		edges_included: Array(

			{
				name: "Size +1",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 1;
					character_object.derived.size += 1;
				}
			},
			{
				name: "Strong",
				description: "",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			},
			{
				name: "Natural Weapons (Str+d6)",
				description: ""
			}
		),
		hindrances_included: Array(
			{
				name: "Environmental Weakness (Cold)",
				description: ""
			},
			{
				name: "Attribute Penalty (Spirit -1)",
				description: ""
			}
		)
	},
	{
		name: "Saurian, Poth’Tox",
		blurb: Array(
			"Lizard men typically come from steaming jungles or deep deserts where they have unique civilizations unknown to other sentient races."
		),
		book: books_list[8],
		page: "p35",
		edges_included: Array(
			{
				name: "Keen Senses ",
				description: ""
			},
			{
				name: "Camouflage",
				description: "With chameleon skin, distracting pheromones, or some other misdirection, the being gains +4 on Stealth rolls to hide when she does not move"
			}
		),
		hindrances_included: Array(
			{
				name: "Environmental Weakness (Cold)",
				description: ""
			}
		)
	}

)
);