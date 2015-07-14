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
			name: "Angst",
			category: "",
			description: Array ("Dark, brooding heroes and heroines suffer from depression, loneliness, and constant fatalism. It’s harder for them to see the light at the end of the tunnel, and so suffer –2 to Smarts rolls made to recover Sanity."),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p3"
		},
		{
			name: "Bleeder",
			category: "",
			description: Array (
				"Some individuals bleed much more freely than others. Maybe it’s an actual genetic condition, or maybe the victim is just unlucky and nicks a vein every time he gets stuck by some psycho with a knife.",
				"Any time the victim suffers a wound that doesn’t Incapacitate him, he begins to bleed. Each round after suffering the wound he must make a Vigor roll or suffer a level of Fatigue that can lead to death. The bleeding can be stopped with a successful Healing roll, and is recovered at the rate of one level per hour afterwards—assuming reasonable food or fluids."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p3"
		},
		{
			name: "Bullet Magnet",
			category: "",
			description: Array (
				"Sometimes a person just winds up in the wrong place at the wrong time. Some people seem to make a habit out of it.",
				"This unfortunate soul is hit by accidental fire (using the Innocent Bystander rules) on a 1–2 for single-shot weapons, and a 1–3 for shotguns or full-auto fire."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p4"
		},
		{
			name: "Combat Shock",
			category: "",
			description: Array (
				"Some people freeze up when things get dangerous, and your hero is one of them. It could be due to fear, flashbacks, or something else; whatever the reason, in the first round of any combat, you must make a Fear check. If you have the Major version, this roll is at -2."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p4"
		},
		{
			name: "Combat Shock",
			category: "",
			description: Array (
				"Some people freeze up when things get dangerous, and your hero is one of them. It could be due to fear, flashbacks, or something else; whatever the reason, in the first round of any combat, you must make a Fear check. If you have the Major version, this roll is at -2."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p4"
		},
		{
			name: "Cursed",
			category: "",
			description: Array (
				"Your heroine crossed some dark power and has forever after been marked by its tainted touch. Your character may never receive beneficial blessings such as those from the Arcane Background (Miracles) Edge.",
				"This Hindrance may only be taken in a setting that allows the Arcane Background (Miracles) Edge."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p4"
		},
		{
			name: "Doubting Thomas",
			category: "",
			description: Array (
				"Besides the description presented in Savage Worlds, Doubting Thomases are just not prepared to deal with the mind-twisting realization that these horrors could actually be real. Characters with this Hindrance suffer an extra point of Sanity loss (see page 22) when failing a Fear test. On the plus side, they start with a Sanity of +2.",
				"These changes only apply if you’ll be using the mechanics introduced in the Setting Rule Sanity (page 22)."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p4"
		},
		{
			name: "Jumpy",
			category: "",
			description: Array (
				"Every little thing makes this individual nervous and scared. Any time there’s a sudden noise, shock, or surprise, the Jumpy hero must make a Fear test."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p4"
		},
		{
			name: "Screamer",
			category: "",
			description: Array (
				"No matter how much this investigator fights it, fear and terror elicits an ear-splitting scream. The scream might alert other enemies, and it certainly unnerves the character’s nearby companions.",
				"Any time the character fails a Fear test, she automatically screams at the top of her lungs. The worse the Fear modifier, the louder and longer the scream. Anyone within a Large Burst Template of the victim suffers a –1 to their Fear tests as well from the startling and disturbing scream!"
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p4"
		},
		{
			name: "Slow",
			category: "",
			description: Array (
				"This character has cat-like reflexes—if the cat was dead and decayed, that is. He’s often slow to act in stressful situations—but just might be the first to die.",
				"The victim draws two cards in combat and acts on the worst. If he draws a Joker, he uses it normally and ignores his Hindrance for the round.",
				"Slow characters cannot take the Quick Edge, but they can actually improve their reaction time by taking the Level Headed Edge (but not during character creation). For this hero, Level Headed allows them to draw one card and act normally. Improved Level Headed grants them two cards and they act on the best of the two."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p4"
		},
		{
			name: "Touched",
			category: "",
			description: Array (
				"Something happened to your hero. Something bad. Whatever it was robbed her of a little piece of her Sanity (see page 22).",
				"As a Minor Hindrance, the character’s base Sanity is one point less than usual. As a Major Hindrance, it’s two points less."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p5"
		},
		{
			name: "Touched",
			category: "",
			description: Array (
				"Something happened to your hero. Something bad. Whatever it was robbed her of a little piece of her Sanity (see page 22).",
				"As a Minor Hindrance, the character’s base Sanity is one point less than usual. As a Major Hindrance, it’s two points less."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p5"
		},
		{
			name: "Victim",
			category: "",
			description: Array (
				"We’ve all seen the movies. Some lone hero or heroine is destined to survive while her friends are slowly picked off one by one. Your hero is one of the “unlucky ones.”",
				"Anytime the group encounters a hostile threat and there’s no clear indication another individual should be the target, this character draws the short straw.",
				"As a Major Hindrance, she’s the first target and all her Soak rolls are made at –1."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 0,
			minor: 1,
			page: "p5"
		},
		{
			name: "Victim",
			category: "",
			description: Array (
				"We’ve all seen the movies. Some lone hero or heroine is destined to survive while her friends are slowly picked off one by one. Your hero is one of the “unlucky ones.”",
				"Anytime the group encounters a hostile threat and there’s no clear indication another individual should be the target, this character draws the short straw.",
				"As a Major Hindrance, she’s the first target and all her Soak rolls are made at –1."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			major: 1,
			minor: 0,
			page: "p5"
		}
	)
);
