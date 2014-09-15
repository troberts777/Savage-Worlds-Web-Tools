/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_edges)
	var chargen_edges = Array();

if(!chargen_hindrances)
	var chargen_hindrances = Array();

chargen_hindrances = chargen_hindrances.concat(Array(
	{
		name: "Cyber Resistant",
		category: "",
		description: Array ("Cyberware doesn’t take in this spacer’s body. She may never have cyberware installed. If it is for some reason, it doesn’t function. This Hindrance may only be taken if cyberware is relatively prominent in the campaign. Cyberware is described on page 29."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p11"
	},
	{
		name: "FtL sickness ",
		category: "",
		description: Array (
			"This Hindrance may only be taken in campaigns where FTL (Faster Than Light) travel is common.",
			"Something about the spacer doesn’t sit right with the bizarre warping effects of hyperspace. After each use of FTL travel, he suffers a level of Fatigue that takes 24 hours to fade. FTL Sickness can cause Incapacitation but not death."
		),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p11"
	},
	{
		name: "Low-G Worlder",
		category: "",
		description: Array (
			"The being hails from a world with light gravity, making his muscles weak compared to most other species.",
			"He subtracts 1 from all Strength rolls (including damage), but does not suffer the –2 Agility penalty for Normal gravity."
		),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p11"
	},
	{
		name: "Low Tech (minor)",
		category: "",
		description: Array ("The character comes from a world where technology is a few generations ahead or behind the galactic average. That makes using computers and other devices of an unknown tech level tricky, and he suffers a –2 penalty when doing so."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p11"
	},
	{
		name: "Low Tech (major)",
		category: "",
		description: Array ("The character comes from a world where technology is a few generations ahead or behind the galactic average. That makes using computers and other devices of an unknown tech level tricky, and he suffers a –4 penalty when doing so."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p11"
	},
	{
		name: "High Tech (minor)",
		category: "",
		description: Array ("The character comes from a world where technology is a few generations ahead or behind the galactic average. That makes using computers and other devices of an unknown tech level tricky, and he suffers a –2 penalty when doing so."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 0,
		minor: 1,
		page: "p11"
	},
	{
		name: "High Tech (major)",
		category: "",
		description: Array ("The character comes from a world where technology is a few generations ahead or behind the galactic average. That makes using computers and other devices of an unknown tech level tricky, and he suffers a –4 penalty when doing so."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p11"
	},
	{
		name: "Zero-G Sickness",
		category: "",
		description: Array ("The lack of gravity makes this spacer hurl. He becomes dizzy and throws up intermittently, causing an automatic level of Fatigue when in zero-g and not restrained in some way. Zero-g Fatigue can cause Incapacitation but not death, and is recovered after one hour in any other type of gravity."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p11"
	},
	{
		name: "Zero-G Worlder",
		category: "",
		description: Array ("The character was born on a world with no gravity. He subtracts 2 from all Strength rolls (including damage), but does not suffer the –2 Agility penalty for Normal gravity. This stacks with the Negative Racial Ability Attribute Limit if the character happens to have both."),
		book: books_list[4],
		prereqs: {},
		incompatible: {},
		major: 1,
		minor: 0,
		page: "p11"
	}
));