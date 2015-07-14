/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_edges)
	var chargen_edges = Array();

	chargen_edges = chargen_edges.concat(Array(
		{
			name: "Relentless",
			category: "Background",
			unlisted: 0,
			description: Array(
				"Your slayer is truly driven to defeat evil. He must seek it out wherever he suspects it lies, and brooks no interference from those he thinks bar his way.",
				"In exchange for this dogged determination and unflinching dedication to the chase, Relentless characters who get a success to recover from being Shaken may take a single action."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					spirit: 3
				}
			},
			page: "p5"
		},
		{
			name: "Fanaticism",
			category: "Leadership",
			unlisted: 0,
			description: Array(
				"This Edge is most appropriate for members of the military, but the leader of a seasoned band of monster hunters might develop it as well.",
				"When under this character’s command, his followers gain great courage and add +2 to their Fear checks."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				edges: Array("Command"),
				skills:  Array(
					{
						name: "Persusasion",
						required: 3
					}
				),
			},
			page: "p5"
		},
		{
			name: "Exorcist",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"The character is a member of the clergy trained to drive demonic spirits from human bodies. Anytime he makes an opposed Spirit or Faith test versus demons or supernaturally evil forces, he adds +4 to his roll."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "miracles",
				attributes: {
					spirit: 3
				},
				skills: {
					faith: 4
				}
			},
			page: "p5"
		},
		{
			name: "Necromancer",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Necromancers are steeped in the lore and rituals of death. They are particularly adept at raising the dead and forcing them to serve their foul requests. While most heroes should avoid such vile sorcery, few can deny its efficiency.",
				"The benefits of the Necromancer Edge are two-fold. First, the Necromancer may cast the zombie power at Novice level (rather than its normal Veteran Rank requirement).",
				"Second, when casting zombie, the Necromancer reduces the Power Point cost to 2/corpse. Additionally, he may double the cost per corpse to increase the Duration to 2d6 hours with a success, 2d6 days with a raise, or permanent with two raises.",
				"A Necromancer may never have more than twice his Spirit die in permanent undead servants."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "magic||miracles",
				attributes: {
					spirit: 3
				},
				skills: Array(
					{
						name: "Spellcasting",
						required: 3
					},
					{
						name: "Knowledge: Arcana||Knowledge: Arcane||Knowledge: Magic", // just in case some forget the skill
						required: 3
					}
				),
			},
			page: "p5"
		},
		{
			name: "Master Necromancer",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Zombies raised by the Necromancer now have an extra die in Strength and one skill of his choice (usually Fighting)."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Necromancer"),
			},
			page: "p6"
		},
		{
			name: "Talisman Craftsman",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"This is a magical version of the Gadgeteer Edge. Once per game session, a character with the Talisman Edge can create a magic device and imbue it with arcane energy.",
				"The device uses any power available to a magician or miracle worker in that setting (though this is still subject to Rank restrictions). It has half the creator’s Power Points. Once these are used up, they do not recharge.",
				"The ritual to imbue the object takes d20 minutes. Activating the device requires a Smarts (magic) or Spirit (miracles) roll."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "magic||miracles",
				attributes: {
					smarts: 3,
					spirit: 3
				},
				skills: Array(
					{
						name: "Spellcasting",
						required: 3
					},
					{
						name: "Knowledge: Occult", // just in case some forget the skill
						required: 3
					}
				),
			},
			page: "p6"
		},
		{
			name: "Monster Hunter",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"The character is completely immune to Fear checks from one broad type of creature, such as ghosts, werewolves, vampires, or constructs. If applied to spellcasters, it includes the fear spell as well.",
				"The Game Master is the final arbiter of whether or not the Edge applies to a particular horror.",
				"The Edge may be taken multiple times, each applying to a different creature type."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				attributes: {

					spirit: 3
				}
			},
			page: "p6"
		},
		{
			name: "Sound Mind",
			category: "Social",
			unlisted: 0,
			description: Array(
				"This investigator has learned to cope with the terrors he must face and the dark things that lurk in his world. Increase his Sanity by +2."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				attributes: {
					spirit: 3
				}
			},
			char_effects: function( character_object ) {
				character_object.derived.sanity++;
			},
			page: "p6"
		},
		{
			name: "Tower of Will",
			category: "Social",
			unlisted: 0,
			description: Array(
				"Some people know their minds better than others and have trained to keep it that way. A character with this Edge may add +2 to any attempt to resist being mentally controlled by unnatural means, whether by a creature’s Special Ability, magical artifact, or magical spell. The +2 bonus also applies to resisting Tests of Wills."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					vigor: 3,
					spirit: 3
				}
			},
			page: "p6"
		},
		{
			name: "Hardened",
			category: "Social",
			unlisted: 0,
			description: Array(
				"This monster slayer has seen things that would make most men lose their minds. Somehow he’s hardened himself to it and can live with it. If the hero makes his Smarts roll, he gains one extra point of Sanity during “down time” (see page 23). This is usually between adventures, and is entirely at the Game Master’s discretion (a character who spends his time researching monsters shouldn’t get the bonus, for example) and is in addition to any he might gain for other reasons."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				attributes: {
					spirit: 3
				}
			},
			page: "p6"
		},
		{
			name: "Occultist",
			category: "Social",
			unlisted: 0,
			description: Array(
				"Knowledge is power, and occasionally the path to madness.",
				"The Occultist begins the game with Forbidden Lore (see page 25). The player may choose what it pertains to. Broad subjects such as “monsters” lead to suitably broad benefits but lack of specifics when it comes to information. More specific lore, such as “vampires” should yield appropriate levels of details."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					smarts: 3
				}
			},
			skills: Array(
				{
					name: "Investigation",
					required: 3
				},
				{
					name: "Knowledge: Occult", // just in case some forget the skill
					required: 3
				}
			),
			page: "p7"
		},
		{
			name: "One of the Chosen",
			category: "Social",
			unlisted: 0,
			description: Array(
				"Your investigator gains either a +1 to attack rolls vs. supernatural evil or they suffer a –1 penalty to attack rolls to hit him—your choice. You may take this Edge a second time but only after achieving a new Rank to gain the other ability."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					spirit: 2
				}
			},
			page: "p7"
		},
		{
			name: "Visions",
			category: "Social",
			unlisted: 0,
			description: Array(
				"Dark dreams or flashing visions of doom and dread fill this person’s thoughts. While they are disturbing, they are often useful as well.",
				"Once per game session, the visionary is granted a vision. This may be a sudden flash that can occur at any time, a nightmare that only happens when sleeping, or it may be an active process such as reading tea leaves or tarot cards.",
				"When this occurs, use the Signs & Portents system described on page 28.",
				"Immediately after, the visionary must make a Smarts roll. If the roll is failed, the visions take their toll on her mind, confusing fantasy with reality, the past with the present, or simply straining the mind with arcane energy. The seer loses 1 Sanity point."
			),
			book: books_list[2],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0
			},
			page: "p7"
		}
	)
);
