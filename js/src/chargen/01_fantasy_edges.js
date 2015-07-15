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
			name: "Familiar",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"The mage has acquired an animal familiar. The creature gained varies with the mage’s Rank when he first takes this Edge. Use the Available Familiars table to determine the type of animal a mage can choose."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "magic",
				skills: Array(

					{
						name: "Knowledge: Arcana||Knowledge: Arcane||Knowledge: Magic", // just in case some forget the skill
						required: 4
					}
				),
			},
			page: "p5"
		},
		{
			name: "Adept",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Adepts are holy warriors who have trained themselves to be living weapons. Some do so to be ultimate warriors; others do it in the service of a cause or deity.",
				"As a free action, an adept can spend 1 Power Point to gain AP 2 with all of his unarmed attacks until his next action.",
				"In addition, upon taking this Edge and at each new Rank, they may choose to change the trappings of one of the following powers to work only on themselves but be activated as a free action: boost/lower trait, deflection, healing, smite, or speed. The Adept must have the power to begin with, and this does not allow him to activate more than one power in a round."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "miracles",
				edges: Array("Martial Artist"),
				skills: Array(
					{
						name: "Faith",
						required: 3
					},
					{
						name: "Fighting",
						required: 3
					}
				),
			},
			page: "p6"
		},
		{
			name: "Artifact Hunter",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Artifact hunters scour ruins for magic items. If there is an Artifact Hunter in the party and you are using the rules for treasure found in this book, the chance of finding a relic increases by 10%. If the chance is 100%, they find one artifact and have a 10% chance of finding a second."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				skills: Array(
					{
						name: "Notice",
						required: 4
					}
				),
			},
			page: "p6"
		},
		{
			name: "Assassin",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Assassins are trained killers who know how to kill with deadly precision—if they can properly approach their prey. Assassins add +2 to any damage roll where they strike a foe unawares (even with ranged attacks)."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					agility: 3
				},
				skills: Array(
					{
						name: "Climbing",
						required: 2
					},
					{
						name: "Fighting",
						required: 2
					},
					{
						name: "Stealth",
						required: 3
					}
				),
			},
			page: "p6"
		},
		{
			name: "Knight",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Knights are chivalric heroes dedicated to a particular cause. All Knights swear holy oaths to their patron, whether it is a god, an order, or a noble, and must answer the call when summoned—even if it means his certain death.",
				"On acceptance into his order, a knight is gifted with the tools of his trade—a light warhorse, a lance, chain mail armor, and a medium shield emblazoned with the symbol of his patron.",
				"In addition to these material rewards, Knights of good causes gain +2 to Charisma."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				attributes: {
					spirit: 2,
					strength: 3,
					vigor: 3,
				},
				skills: Array(
					{
						name: "Fighting",
						required: 3
					},
					{
						name: "Riding",
						required: 3
					}
				),
			},
			page: "p7"
		},
		{
			name: "Troubadour",
			category: "Professional",
			unlisted: 0,
			description: Array(
				"Troubadours are traveling entertainers who bring news and amusement to people across the land. Despite using the rules for Arcane Background (Miracles), Troubadours typically don’t worship a specific deity for their power. They believe in the power of the arts, so their Arcane Skill is Perform (Spirit) instead of Faith. Additionally, they don’t worry about sins, though they have to deal with occasional “strain.”",
				"Strain: Troubadours who roll a 1 on their Perform die, regardless of the Wild Die, suffer the effects as for a minor sin (–2 to Perform for a week). Should they critically fail such a roll, they suffer the effect of a major sin (complete loss of powers for a week and –4 to “normal” uses of the Perform skill). This represents terrible strain on their voice, mind, or raw nerves for the given period.",
				"The Perform skill may also be used simply to entertain instead of activating powers. In these cases, the Troubadour can earn money for his performance. A successful skill roll per “set” (usually a couple of hours) nets him $1d6 for every 10 members of the audience. Double this number with a raise. The performer may add his Charisma to the roll when using the skill in this way. This assumes the audience can tip instead of a set fee. The audience may also tip with libations, livestock, blind dates with their daughters, or local rumors that may lead to adventure, fortune, and glory"
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 0,
				arcane_background: 1,
				arcane_background_selected: "miracles",
				attributes: {
					spirit: 2,
					strength: 3,
					vigor: 3,
				},
				skills: Array(
					{
						name: "Perform",
						required: 3
					}
				),
			},
			page: "p7"
		},
		{
			name: "Adaptable",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Humans are capable of picking up new talents quite readily even if mastery some- times eludes them. When a human takes this Edge he gains one non-Improved version of an Edge restricted to another race as long as he meets all other requirements.",
				"This Edge may be taken multiple times, but only once per Rank. If a human learns Scamper, it applies to any creature one or more Sizes larger than him."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				race: "Human||Half-Elf (Human)",

			},
			page: "p7"
		},
		{
			name: "Barbaric Blood",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Some half-orcs have an animal rage inside them they can trigger consciously. A half-orc with Barbaric Blood may spend a Benny to activate his Berserk Edge."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				edges: Array("Berserk"),
				race: "Half-Orc"

			},
			page: "p8"
		},
		{
			name: "Improved Barbaric Blood",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Some half-orcs have an animal rage inside them they can trigger consciously. A half-orc with Barbaric Blood may spend a Benny to activate his Berserk Edge."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Barbaric Blood"),
				attributes: {
					spirit: 3
				}

			},
			page: "p8"
		},
		{
			name: "Double Shot",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Elves are renowned not only for their accuracy with the bow but for incredible trick shots as well. Double Shot allows an elf to fire two arrows in his bow at once, firing two shots at a single target with one attack roll at a –2 modifier.",
				"The target must be within short range. If the attack is successful, both arrows hit, each causing normal damage. Double shot does not work with crossbows or other ranged weapons—only with bows and arrows."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				race: "Elf||Half-Elf (Elf)",
				skills: Array(
					{
						name: "Shooting",
						required: 3
					}
				)

			},
			page: "p8"
		},
		{
			name: "Improved Double Shot",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"The elf may attack as above, but ignores the –2 penalty."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Double Shot")

			},
			page: "p8"
		},
		{
			name: "Natural Warrior",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Races with natural weapons, such as rakashans and saurians, have members who specialize in fighting “tooth and claw.” The damage for their natural weapons increases a die type."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				edges: "Natural Weapons",
				skills: Array(
					{
						name: "Fighting",
						required: 3
					}
				)

			},
			page: "p8"
		},
		{
			name: "Improved Natural Warrior",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"If this warrior gets a raise on his Fighting roll when attacking with natural weapons, he gains an extra +d10 damage instead of the normal +1d6."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Natural Warrior")

			},
			page: "p8"
		},
		{
			name: "Scamper",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Half-folk are small and quick. Some make great use of this in combat too, scampering about to avoid the blows of larger foes. Opponents of man-size or larger subtract 1 from attack rolls against half-folk with this Edge. The benefit only applies when the character is aware the attack is coming, he is unbound and able to move freely, and has no encumbrance penalty."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				race: "Half-Folk",
				attributes: {
					agility: 3
				}

			},
			page: "p8"
		},
		{
			name: "Improved Scamper",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"The half-folk can move so quickly as to cause multiple opponents to interfere with each other’s attacks. Opponents get no Gang Up bonus against the half-folk."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Scamper")

			},
			page: "p8"
		},
		{
			name: "Sunder",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"Dwarves have an instinctual knowledge of materials. Those with this Edge know just where to strike objects or armored foes to cause the most damage. Any weapon in the hands of a dwarf with this Edge ignores 1 point of armor (in addition to any AP value the weapon may already have) on a successful hit. If the dwarf gets a raise on the attack roll, he ignores 2 points of armor. The Edge applies against all forms of armor, natural or magical."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 1,
				race: "Dwarf)"

			},
			page: "p8"
		},
		{
			name: "Improved Sunder",
			category: "Racial",
			unlisted: 0,
			description: Array(
				"As above, but the dwarf ignores up to 2 points of armor on a success and 4 points of Armor on a raise."
			),
			book: books_list[1],
			prereqs: {},
			incompatible: {},
			prereqs: {
				rank: 2,
				edges: Array("Sunder")

			},
			page: "p8"
		}

	)
);
