/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_prohibited_edges) {
	var chargen_prohibited_edges = Array();
}

chargen_prohibited_edges[7] = Array(
	"arcane background",
	"martial artist",
	"mcgyver",
	"power points",
	"power surge",
	"rapid recharge",
	"rock and roll!",
	"soul drain"
);


if(!chargen_edges) {
	var chargen_edges = Array();
}

	chargen_edges = chargen_edges.concat(Array(
		{
			name: "Arcane Background (Black Magic)",
			category: "Background",
			description: "Black magic is the most common form of wizardry. Black Magic focuses on direct power, attacking foes, manipulating the very forces of physics.",
			book: books_list[7],
			prereqs: {
			},
			char_effects: function( character_object ){
				character_object.arcane_background = 1;
			},
			incompatible: {},
			page: "p13"
		},
		{
			name: "Arcane Background (Elemental Magic)",
			category: "Background",
			description: "Falling outside the normal range of white and black magic, elemental magic is practiced by a few and harnesses the natural elements",
			book: books_list[7],
			prereqs: {
			},
			char_effects: function( character_object ){
				character_object.arcane_background = 1;
			},
			incompatible: {},
			page: "p13"
		},
		{
			name: "Arcane Background (White Magic)",
			category: "Background",
			description: "Considered less sinister than black magic, white magic strives for harmony and focuses more on healing and restoration.",
			book: books_list[7],
			prereqs: {
			},
			char_effects: function( character_object ){
				character_object.arcane_background = 1;
			},
			incompatible: {},
			page: "p13"
		},
		{
			name: "Brutal",
			category: "Combat",
			description: "The character with this Edge is more dangerous when roughed up. When determining melee damage, he adds his wound level to the roll. A hero with 3 wounds, for instance, adds +3 to his Fighting damage rolls",
			book: books_list[7],
			prereqs: {
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Close Fighting",
			category: "Combat",
			description: Array(
				"This Edge is for skilled knife-fighters, who pride themselves on defeating their foes up close and personal.",
				"Close fighters move inside most weapons’ reach, adding a bonus to their Parry equal to the enemy weapon’s Reach +1 for that particular foe. No bonus is granted if the foe is unarmed or using a knife or other small weapon."
			),
			book: books_list[7],
			prereqs: {
				attributes: {
					agility: 3
				},
				skills: Array(
					{
						name: "Fighting",
						required: 3
					}
				)
			},

			incompatible: {},
			page: "p14"
		},
		{
			name: "Improved Close Fighting",
			category: "Combat",
			description: "Close fighters train to go for vital areas and weak spots for quick and lethal kills. The attacker adds a bonus to his Fighting roll equal to his enemy’s Reach +1.",
			book: books_list[7],
			prereqs: {
				edges: Array("Close Fighting")
			},

			incompatible: {},
			page: "p37"
		},
		{
			name: "Dirty Fighter",
			category: "Combat",
			description: Array(
				"There is no honor among thieves, and the city of Lankhmar has more than its fair share of scoundrels. Those with this Edge do anything to win in a fight.",
				"This dastardly cur is particularly good at tricks. He adds +2 to all Trick maneuver rolls."
			),
			book: books_list[7],
			prereqs: {
				rank: 1
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Really Dirty Fighter",
			category: "Combat",
			description: "Your character is extremely skilled in tactical deceit. Should he get a raise on a Trick attempt, not only is his target Shaken, but your hero gains The Drop on his opponent. He continues to have The Drop until the foe is no longer Shaken.",
			book: books_list[7],
			prereqs: {
				edges: Array("Dirty Fighter")
			},

			incompatible: {},
			page: "p14"
		},
		{
			name: "Iron Jaw",
			category: "Combat",
			description: Array(
				"The hero can absorb damage like he was made of oak. He gets +2 to Soak rolls and Vigor rolls to avoid Knock-Out Blows (see page 25)."
			),
			book: books_list[7],
			prereqs: {
				attributes: {
					vigor: 3
				},
			},

			incompatible: {},
			page: "p14"
		},
		{
			name: "Shrug It Off",
			category: "Combat",
			description: "At the end of a combat in which he suffered one or more wounds, the hero makes a Vigor roll (wound penalties apply). On a success, he converts one wound to a level of Fatigue from Bumps and Bruises, and on a raise can convert two wounds to two levels of Fatigue. The hero cannot convert a wound if it would cause Incapacitation from Fatigue. Each level of Fatigue is recovered after four hours (see Larger than Life on page 25).",
			book: books_list[7],
			prereqs: {
				edges: Array("Iron Jaw")
			},
			char_effects: function( character_object ) {
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Determination",
			category: "Combat",
			description: Array(
				"When lesser men fall by the wayside, this hero just keeps soldiering on.",
				"When the character takes enough wounds to make him Incapacitated, he may make a free Soak roll. Should the roll fail, the hero may spend a Benny to make a Soak roll as normal. If a character suffers multiple wounds in the same round that take him to Incapacitated, he may make multiple free Soak rolls."
			),
			book: books_list[7],
			prereqs: {
				edges: Array("Iron Jaw"),
				rank: 3
			},
			char_effects: function( character_object ) {
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Lunge",
			category: "Combat",
			description: Array(
				"A lunge allows a swordsman to extend the reach of his weapon. The character gains +1 Reach to his weapon. He may not use this Edge with First Strike, Frenzy, or Sweep."
			),
			book: books_list[7],
			prereqs: {
				attributes: {
					agility: 3
				},
				skills: Array(
					{
						name: "Fighting",
						required: 3
					}
				)
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Named Weapon",
			category: "Combat",
			description: Array(
				"This hero has named one of his weapons and by doing so imbued it with greater effect in his hands. For a melee/thrown weapon, its damage increases one die type, which is not limited by Strength. For example, a long sword deals d8+d10 damage in the hands of a Strength d8 character. For a ranged weapon with fixed damage, it instead gains a +1 bonus to damage, so a bow would do 2d6+1 damage.",
				"If a Named Weapon is lost, the hero can replace it, but the benefit of the Edge doesn’t kick in for two game weeks. This Edge can be taken multiple times each time applying to a different weapon."
			),
			book: books_list[7],
			prereqs: {
				skills: Array(
					{
						name: "Fighting",
						required: 1
					}
				)
			},
			incompatible: {},
			page: "p15"
		},
		{
			name: "Improved Named Weapon",
			category: "Combat",
			description: Array(
				"With this Edge, the hero’s ability with his named weapon is unparalleled. As long as it's in hand, he can deflect incoming ranged attacks he is aware of. Any ranged attack directed against him uses his Parry as the base TN instead of 4.",
				"With a ranged or thrown weapon, the user halves Called Shot penalties.",
				"This Edge can be taken multiple times each time applying to a different weapon."
			),
			book: books_list[7],
			prereqs: {
				edges: Array("Named Weapon", "Trademark Weapon"),
				rank: 2
			},
			char_effects: function( character_object ) {
			},
			incompatible: {},
			page: "p15"
		},
		{
			name: "Spot Weakness",
			category: "Combat",
			description: Array(
				"No swordsman, whether one taught by the finest master from the mysterious east or one who developed his art on the streets of Lankhmar, is flawless. Everyone has a weakness, and this character has the training necessary to spot and exploit such a weakness.",
				"If an opponent making a Fighting attack against the character rolls a 1 on his Fighting die (regardless of Wild Die), the character receives +1 to Fighting rolls against that foe for the rest of the combat. If an opponent rolls a 1 on his Fighting die but hits the hero using his Wild Die, the character still spots the flaw.",
				"You only get the bonus once, no matter how many 1s are rolled."
			),
			book: books_list[7],
			prereqs: {
				edges: Array("Block"),
				rank: 1,
				skills: Array(
					{
						name: "Notice",
						required: 2
					}
				)
			},
			incompatible: {},
			page: "p14"
		},
		{
			name: "Wall of Steel",
			category: "Combat",
			description: Array(
				"Sometimes a fighter finds himself greatly outnumbered in a fight. Fortunately, the character has the perception and agility to handle multiple foes. As long as the character is armed, opponents gain no Gang Up bonus against the hero."
			),
			book: books_list[7],
			prereqs: {
				attributes: {
					smarts: 3
				},
				rank: 2,
				skills: Array(
					{
						name: "Fighting",
						required: 3
					},
					{
						name: "Notice",
						required: 2
					}
				)
			},
			incompatible: {},
			page: "p14"
		}

/* TODO: Power Edges */

	)
);
