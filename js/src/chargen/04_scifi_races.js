/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_races)
	var chargen_races = Array();

chargen_races = chargen_races.concat(Array(
	{
		name: "Atlantean",
		blurb: Array(),
		book: books_list[4],
		page: "p7",
		edges_included: Array(
			{
				name: "Aquatic",
				description: "Aquatic species cannot drown in water, move at full Swimming skill, and get a free d6 Swimming.",
				char_effects: function(character_object) {
					character_object.race.skills = Array(
						Array("Swim", 1)
					);
				}
			},
			{
				name: "Toughness",
				description: "Life in the depths of their watery worlds has made aquarian flesh tough and resilient. They add +2 to their Toughness.",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Dependency",
				description: "Aquarians must immerse themselves in water one hour out of every 24 or become automatically Fatigued each day until they are Incapacitated. The day after that, they perish. Each hour spent in water restores one level of Fatigue.",

			}
		)
	},
	{
		name: "Aurax",
		blurb: Array(),
		book: books_list[4],
		page: "p7",
		edges_included: Array(

			{
				name: "Size +2",
				description: "The humanoid part of an aurax is thick, stocky, and man-sized, while the rear body is the size of a bull. This adds +2 to Toughness.",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			},
			{
				name: "Strong",
				description: "The aurax are large, bull-like creatures. They start with a d6 in Strength.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Low Tech Hindrance",
				description: "The aurax home-world is low tech compared to most developed worlds. They have the Low Tech Hindrance (Major).",
			}
		)
	},
	{
		name: "Avion",
		blurb: Array("Avions are any basically human race with wings. They tend to be very slight of build owing to their hollow bones."),
		book: books_list[4],
		page: "p7",

		edges_included: Array(
			{
				name: "Flight",
				description: "Avions can fly at their basic Pace and even “run” while flying. It costs 2” of Pace to gain 1” of height."
			},
			"Agile"
		),
		hindrances_included: Array(
			{
				name: "Frail",
				description: "Avions have –1 Toughness",
				char_effects: function( character_object ) {
					character_object.derived.toughness -= 1;
				}
			},
			{
				name: "Low-G Worlder Hindrance",
				description: "The avion home-world has light gravity."
			}
		)
	},
	{
		name: "Construct (Robot)",
		blurb: Array("Constructs are any number of artificial beings. Those that can pass for human are generally called androids. Those that are obviously machines are robots."),
		book: books_list[4],
		page: "p7",

		edges_included: Array(
			{
				name: "Construct",
				description: ""
			},
			{
				name: "Mods",
				description: ""
			}
		),
		hindrances_included: Array(
			{
				name: "Dependency (Electricity)",
			},
			{
				name: "Outsider",
				description: "Organic species often treat constructs as property rather than sentient beings",
				char_effects: function( character_object ) {
					character_object.derived.charisma -= 2;
				}
			},
			{
				name: "Vow Hindrance",
				description: ""
			},
			{
				name: "Environmental Weakness (Electricity)",
				description: ""
			}
		)
	},
	{
		name: "Deader",
		blurb: Array("These creatures are slug-like parasites in their natural form. To better interact with other species and make use of common technology, they graft themselves to the brainstems of reasonably intact humanoid corpses and preserve the bodies in special suits."),
		book: books_list[4],
		page: "p8",

		edges_included: Array(
			{
				name: "Undead",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.charisma -= 2;
					character_object.derived.toughness += 2;
				}
			},
			"Arcane Background"
		),
		hindrances_included: Array(
			{
				name: "Clumsy",
			},
			{
				name: "Poor Parry",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.parry -= 2;
				}
			},
			{
				name: "Slow",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.pace = 4;
				}
			},
			{
				name: "Outsider",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.charisma -= 2;
				}
			},
			{
				name: "Weak",
				description: ""
			}
		)
	},
	{
		name: "Floran",
		blurb: Array("On some worlds, “plant people” evolved into humanoids. The example below is representative of a leafy green origin."),
		book: books_list[4],
		page: "p8",

		edges_included: Array(
			{
				name: "Hardy",
				description: ""
			},
			{
				name: "No Vital Organs",
				description: ""
			},
			{
				name: "Regeneration",
				description: ""
			}
		),
		hindrances_included: Array(
			{
				name: "Dependency (Sunlight)",
				description: ""
			},
			{
				name: "Environmental Weakness, Heat/Fire",
				description: ""
			},
			{
				name: "High Tech Hindrance",
				description: ""
			}
		)
	},
	{
		name: "Human",
		blurb: Array(),
		book: books_list[4],
		page: "p21",

		edges_included: Array(
			"Extra Edge"
		),
		hindrances_included: Array()
	},
	{
		name: "Insectoid",
		blurb: Array("On some worlds, insects developed to be the dominant, sentient species. This particular example represents a sort of ant- mantis-humanoid hybrid."),
		book: books_list[4],
		page: "p8",

		edges_included: Array(
			{
				name: "Armor",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.race_armor += 4;
				}

			},
			{
				name: "Natural Weaponry (Str+d6, AP2)",
				description: ""
			}
		),
		hindrances_included: Array(
			{
				name: "Cannot Speak",
				description: ""
			},
			"Outsider"
		)
	},
	{
		name: "Kalian",
		blurb: Array("A four-armed race of highly agile humanoids, kalians are known for their quick reactions, razor sharp wit, marksmanship, and swordplay."),
		book: books_list[4],
		page: "p8",

		edges_included: Array(
			{
				name: "Additional Action",
				description: ""

			}
		),
		hindrances_included: Array(
			{
				name: "Frail",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.toughness -= 1;
				}
			}
		)
	},
	{
		name: "Rakashans",
		blurb: Array("A four-armed race of highly agile humanoids, kalians are known for their quick reactions, razor sharp wit, marksmanship, and swordplay."),
		book: books_list[4],
		page: "p8",

		edges_included: Array(
			"Agile",
			{
				name: "Natural Weaponry (Str+d6, AP2)",
				description: ""
			},
			{
				name: "Low Light Vision",
				description: ""
			}
		),
		hindrances_included: Array(
			"Bloodthirsty",
			{
				name: "Racial Enemy",
				description: ""
			}
		)
	},
	{
		name: "Saurian",
		blurb: Array(
			"Lizard men typically come from steaming jungles or deep deserts where they have unique civilizations unknown to other sentient races."
		),
		book: books_list[4],
		page: "p10",
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
		name: "Serran",
		blurb: Array(
			"On a remote world far from the usual trade lanes lives a race of beings called the serran. They are a thoughtful, cautious people often gifted with powerful telepaths. Would-be conquerors have thought the serrans weak given their disposition—but quickly learned otherwise when they sought to cause them harm"
		),
		book: books_list[4],
		page: "p10",
		edges_included: Array(
			"Danger Sense",
			{
				name: "Parry",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.parry += 2;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Weak",
				description: ""
			}
		)
	},
	{
		name: "Yeti",
		blurb: Array(
			"Any breed of fur-covered mammalian from a cold world inevitably winds up being labeled as “yetis” by earthers. These types of xenos are tall, hairy, and ferocious when threatened."
		),
		book: books_list[4],
		page: "p10",
		edges_included: Array(
			{
				name: "Environmental Resistance (Cold)",
				description: ""
			},
			{
				name: "Size+2",
				description: "",
				char_effects: function( character_object ) {
					character_object.derived.toughness += 2;
				}
			},
			{
				name: "Strong",
				description: "The aurax are large, bull-like creatures. They start with a d6 in Strength.",
				char_effects: function( character_object) {
					character_object.race.attributes.strength = 1;
				}
			}
		),
		hindrances_included: Array(
			{
				name: "Environmental Weakness (Heat)",
				description: ""
			},
			{
				name: "Low Tech Hindrance",
				description: ""
			}
		)
	}
)
);