/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_gear)
	var chargen_gear = Array();

chargen_gear = chargen_gear.concat( Array(
	{
		name: "Body Armor",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 4,
		cost: 200,
		armor: 4,
		notes: Array(
			"AP4", "Negates 4 points ranged ballistic"
		),

		page: "p16",
	},
	{
		name: "Combat Armor",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 12,
		cost: 800,
		armor: 6,
		notes: Array(
			"AP4", "Negates 4 points ranged ballistic"
		),

		page: "p16",
	},
	{
		name: "Energy Skin",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 12,
		cost: 800,
		armor: 0,
		notes: Array(
			"AP8 vs Lasers", "Negates 2 AP from lasers"
		),

		page: "p16",
	},
	{
		name: "Force Field, Personal",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 4,
		cost: 2000,
		armor: 4,
		stackable: 1,
		notes: Array(
			"Unaffected by AP"
		),

		page: "p17",
	},
	{
		name: "Glide Suit",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 8,
		cost: 1500,
		armor: 1,
		notes: Array(
			"See Notes p17"
		),

		page: "p17",
	},
	{
		name: "Polymer Shield, Small",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 2,
		cost: 200,
		armor: 0,
		parry: 1,
		notes: Array(
			"+4 Armor vs Ranged"
		),

		page: "p17",
	},
	{
		name: "Polymer Shield, Medium",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 4,
		cost: 300,
		armor: 0,
		parry: 1,
		notes: Array(
			"+4 Armor vs Ranged"
		),

		page: "p17",
	},
	{
		name: "Polymer Shield, Large",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 6,
		cost: 400,
		armor: 0,
		parry: 2,
		notes: Array(
			"+4 Armor vs Ranged"
		),

		page: "p17",
	},
	{
		name: "Smart Suit",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 12,
		cost: 2000,
		armor: 2,
		notes: Array(
			"See Notes p17"
		),

		page: "p17",
	},
	{
		name: "Space Suit",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 20,
		cost: 2000,
		armor: 1,
		notes: Array(
			"See Notes p17"
		),

		page: "p17",
	},
	{
		name: "Space Suit, Combat",
		book: books_list[4],
		class: "",
		general: "Sci-Fi Armor",
		type: "",
		weight: 26,
		cost: 2500,
		armor: 4,
		notes: Array(
			"See Notes p17", "Negates 4 points AP from Ballistic"
		),

		page: "p17",
	}
));