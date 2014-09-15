/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_edges)
	var chargen_edges = Array();

chargen_edges = chargen_edges.concat(Array(
	{
		name: "Cyber Tolerant",
		category: "Background",

		description: "The individual’s body cyberware better than most. His Maximum Strain for cyberware is increased by +4 (see page 29).",
		book: books_list[4],
		prereqs: {},
		incompatible: {
			edges: 	Array(
				"Cyborg"
			)
		},
		char_effects: function( character_object ) {
			character_object.max_strain += 4;
		},
		page: ""
	},
	{
		name: "Cyborg",
		category: "Background",

		description: "The individual’s body cyberware better than most. His Maximum Strain for cyberware is increased by +4 (see page 29).",
		book: books_list[4],
		prereqs: {},
		incompatible: {
			edges: 	Array(
				"Cyber Tolerant"
			)
		},
		char_effects: function( character_object ) {
			character_object.max_strain += character_object.max_strain * 2;
		},
		page: ""
	},
	{
		name: "Geared Up",
		category: "Background",

		description: "The individual’s body cyberware better than most. His Maximum Strain for cyberware is increased by +4 (see page 29).",
		book: books_list[4],
		prereqs: {},
		incompatible: {
		},
		char_effects: function( character_object ) {
			character_object.starting_funds += 10000;
		},
		page: ""
	},
	{
		name: "Heavy-G Worlder",
		category: "Background",
		unlisted: 0,
		description: "The character comes from a dense world with very heavy gravity. He starts with a d6 in Strength, doubles normal jumping distances, adds +2 to his Pace, his running die increases one step, and does not suffer the –2 Agility penalty for Normal gravity.",
		book: books_list[4],
		prereqs: {},
		incompatible: {
		},
		page: ""
	},
	{
		name: "Atmospheric Acclimation",
		category: "Background",

		description: "Travelers who have spent substantial time in Thin or Dense Atmosphere (see page 26) can learn breathing techniques to negate its ill effects. This Edge may be taken twice, once for each kind of atmosphere. Doing so allows the character to operate normally in that environment—he doesn’t have to make Vigor rolls.",
		book: books_list[4],
		prereqs: {},
		incompatible: {
		},
		page: ""
	},
	{
		name: "Gravitic Acclimation",
		category: "Background",

		description: "Travelers who have spent substantial time in Thin or Dense Atmosphere (see page 26) can learn breathing techniques to negate its ill effects. This Edge may be taken twice, once for each kind of atmosphere. Doing so allows the character to operate normally in that environment—he doesn’t have to make Vigor rolls.",
		book: books_list[4],
		prereqs: {
			attributes: {
				agility: 2
			}
		},
		incompatible: {
		},
		page: ""
	},
	{
		name: "Rocket Jock",
		category: "Background",

		description: "Travelers who have spent substantial time in Thin or Dense Atmosphere (see page 26) can learn breathing techniques to negate its ill effects. This Edge may be taken twice, once for each kind of atmosphere. Doing so allows the character to operate normally in that environment—he doesn’t have to make Vigor rolls.",
		book: books_list[4],
		prereqs: {
			attributes: {
				agility: 3
			},
			skills: Array(
				{
					name: "Piloting",
					required: 3
				},
				{
					name: "Shooting",
					required: 2
				}
			)
		},
		incompatible: {
		},
		page: ""
	}
));