/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_hindrances)
	var chargen_hindrances = Array();

	chargen_hindrances = chargen_hindrances.concat(Array(
		{
			name: "Amorous",
			category: "",
			description: Array(
				"Some wizards, warriors, thieves, and charlatans are suckers for a pretty face. They're easily enamored with a member of one gender or another and easily distracted. Perhaps it's lust or lechery, or perhaps they just have a keen appreciation of form.",
				"Amorous characters suffer a −2 penalty to resist Tricks and Tests of Will by any character with the Attractive Edge (−4 if Very Attractive). The gender one is attracted to is determined by the player—male, female, or both."

			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p12"
		},
		{
			name: "Cocky",
			category: "",
			description: Array(
				"It's not so much that the adventurer is overconfident—she just thinks everyone else is so incompetent. And she wants them to know it.",
				"Until the character spends an entire round lecturing, chastising, gloating, or otherwise demeaning her foe in combat, she suffers a −2 penalty to all actions. Once she's satisfied the requirement, the penalty is lifted. She may perform a Test of Wills while delivering her speech, but doesn't have to."

			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p12"
		},
		{
			name: "Obligation",
			category: "",
			description: Array(
				"Your hero has a responsibility she can’t ignore. It could be as simple as a duty to an organization, a choice to protect or care for a person, or a vow to serve an alien wizard. Regardless of the specifics, your character is bound in some way to comply. She can expect her responsibilities to occasionally be inconvenient, or in some cases, even dangerous.",
				"As a Minor Hindrance, her Obligations are generally restraints on her time, such as a work schedule she can’t alter. As a Major Hindrance, your character’s Obligations are crucial and hazardous. Failure to honor the hero’s Obligation always has consequences, though exactly what those are depends on the situation and the Game Master."
			),
			book: books_list[7],
			prereqs: {},
			specify_field: 1,
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p12"
		},
		{
			name: "Obligation",
			category: "",
			description: Array(
				"Your hero has a responsibility she can’t ignore. It could be as simple as a duty to an organization, a choice to protect or care for a person, or a vow to serve an alien wizard. Regardless of the specifics, your character is bound in some way to comply. She can expect her responsibilities to occasionally be inconvenient, or in some cases, even dangerous.",
				"As a Minor Hindrance, her Obligations are generally restraints on her time, such as a work schedule she can’t alter. As a Major Hindrance, your character’s Obligations are crucial and hazardous. Failure to honor the hero’s Obligation always has consequences, though exactly what those are depends on the situation and the Game Master."

			),
			book: books_list[7],
			prereqs: {},
			specify_field: 1,
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p12"
		},
		{
			name: "Impulsive",
			category: "",
			description: Array(
				"The character is the kind to jump right into a situation without hesitation or foreknowledge. She is not overconfident; she just doesn't always think things through before taking action."

			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p13"
		},
		{
			name: "Jingoistic",
			category: "",
			description: Array(
				"The character dislikes people from other cultures and believes his own culture to be far superior—a jingoistic Kleshite, for example, dislikes barbarians and Mingols as much as he does the natives of Lankhmar. He cannot help belittling other cultures at every opportunity. A character taking the Minor version has −2 Charisma among other cultures. The penalty increases to −4 for the Major Hindrance.",
				"In both cases, the character may not use Command Edges with “foreigners” until he has worked with them for a week or so."

			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p13"
		},
		{
			name: "Jingoistic",
			category: "",
			description: Array(
				"The character dislikes people from other cultures and believes his own culture to be far superior—a jingoistic Kleshite, for example, dislikes barbarians and Mingols as much as he does the natives of Lankhmar. He cannot help belittling other cultures at every opportunity. A character taking the Minor version has −2 Charisma among other cultures. The penalty increases to −4 for the Major Hindrance.",
				"In both cases, the character may not use Command Edges with “foreigners” until he has worked with them for a week or so."

			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p13"
		},
		{
			name: "One Hand",
			category: "",
			description: Array(
				"This character is missing a hand, but the other now counts as his primary. He suffers a −4 to any action requiring only the missing hand and a −2 to actions using both hands. The character may purchase a socket for the arm for 5 rilks which can attach a small tool such as a dagger or hook (all do Str+d4 damage), reducing the penalty to −2 for fine actions with the handless arm and −1 for actions requiring both hands. Actions not requiring fine manipulation, such as making a Fighting attack with the attached weapon, suffer no penalty."
			),
			book: books_list[7],
			prereqs: {},
			incompatible: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p13"
		}
	));