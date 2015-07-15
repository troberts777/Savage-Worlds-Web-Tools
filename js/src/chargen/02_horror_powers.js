/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/


if(!chargen_powers)
	var chargen_powers = Array();

chargen_powers = chargen_powers.concat(Array(

	{
		name: "Banish Entity",
		short_name: "banish-entity",
		rank: 1,
		cost: "special",
		range: "Smarts x 2",
		duration: "Instant",
		page: "p32",
		book: books_list[2],
		trappings: "Runes, chants, gestures, prayers, special substances, an exorcism",
		description: Array(
			"Banish entity forces extradimensional entities back to their own realm. Generally, any entity that can be summoned can be banished.",
			"The cost to invoke this spell is equal to the entity’s Spirit die type, and double that if the entity is a Wild Card. A Wild Card demon with a Spirit die of d10 therefore requires 20 Power Points to banish. Since most casters don’t have so many Power Points, they often rely on rituals or devices.",
			"The spellcaster must be within Range of the target and make an arcane skill roll opposed by the entity’s Spirit. With a success, the entity is instantly driven back to its own realm, though it is not destroyed. On a failure, the entity is free to continue its business and suffers no ill effects. The caster is automatically Fatigued from the effort (in addition to Backlash if a 1 was rolled on the arcane skill die)."
		)
	},{
		name: "Bind Entity",
		short_name: "bind-entity",
		rank: 2,
		cost: "Special",
		range: "Touch",
		duration: "24 hours (5/24 hours)",
		page: "p33",
		book: books_list[2],
		trappings: "A mystical glow, hardened skin, ethereal armor, a mass of insects or worms.",
		description: Array(
			"Bind entity allows its user to force an entity into servitude. Any entity that can be summoned can generally be bound. The creature may be summoned and then bound, or it might already be in the physical world.",
			"The cost to invoke this spell is equal to twice the entity’s Spirit die type. A demon with a Spirit die of d8, for example, requires 16 Power Points to cast bind entity on it.",
			"In either case, the caster makes an arcane skill roll opposed by the entity’s Spirit. If the entity is already subject to a bind entity spell it receives a +4 bonus to its roll.",
			"On a success, the caster has bound the creature to his will for the duration of the spell. The creature must obey commands given to it, both to the letter and spirit, though orders that would undeniably end the entity’s existence allow it another roll to break free.",
			"There is no inherent mental link between the caster and the entity, so commands must be expressed by some method the creature understands.",
			"The caster may not try to bind the same entity more than once in any 24 hour period, nor may he attempt to bind the same entity for 24 hours after the current binding expires (though he may maintain the spell). The entity does not need to be in Range or even seen to maintain the power."
		)
	},
	{
		name: "Consecrate Ground",
		short_name: "consecrate-ground",
		rank: 1,
		cost: 3,
		range: "Large Burst Template",
		duration: "1 minute (1/minute)",
		trappings: "Circle of holy water or salt, energy barrier, pentagram",
		page: "p34",
		book: books_list[2],
		description: Array(
			"Consecrated ground is an anathema to evil creatures. Through the use of this power, an area of holy ground is created, filling a Large Burst Template centered on the caster.",
			"Any supernatural evil creature entering the area must make a Spirit roll or suffer a –2 penalty to all Trait rolls while within the effects of the spell. The penalty is –4 with a raise on the casting roll.",
			"Permanently consecrating an area, like a church or temple, is possible, but not usually within the confines of an adventure. High ranking priests, valuable oils and unguents, and saintly or other holy relics may be required, as is some sort of altar or other focus of worship. At the end of the day, only a deity can permanently consecrate an area—everything else is just to get the god’s attention."
		)
	},
	{
		name: "Corpse Senses",
		short_name: "corpse-senses",
		rank: 1,
		cost: 2,
		range: "Smarts x 100 yards",
		duration: "One hour (1/hour)",
		trappings: "Chanting, staring into a mirror",
		page: "p34",
		book: books_list[2],
		description: Array(
			"Necromancers often guard their tombs with undead, and this spell allows them to use their minions as a set of roving senses. The power only works on corpses the caster has animated himself. If he has multiple undead under his control, he may switch between them as a free action, but only once per round",
			"For the duration of the spell, the caster uses the senses of the target as if they were his own. He sees what the undead sees, hears what it hears, and so on. The power provides no control over the corpse, nor does it let the caster speak through it. Should the target wander out of range, the connection is instantly severed."
		)
	},
	{
		name: "Drain Years",
		short_name: "drain-years",
		rank: 4,
		cost: 20,
		range: "Smarts",
		duration: "Permanent",
		trappings: "Chanting, spoken curse",
		page: "p34",
		book: books_list[2],
		description: Array(
			"This vile spell causes one target to wither and age many years in an instant.",
			"The caster makes an arcane skill roll opposed by the victim’s Vigor. On a success, the victim ages rapidly and loses a permanent die of Strength and Vigor, or two die steps on a raise (both to a minimum of a d4).",
			"If cast on an Elderly character, the victim dies of old age if he fails his Vigor roll."
		)
	},
	{
		name: "Enhance Undead",
		short_name: "enhance-undead",
		rank: 1,
		cost: "3/undead",
		range: "Smarts",
		duration: "Special",
		trappings: "Runes engraved on undead, chanting",
		page: "p35",
		book: books_list[2],
		description: Array(
			"Blast is an area effect power that can put down many opponents at once. The caster first picks where he wants to center the blast, then makes the appropriate skill roll. Normal ranged attack modifiers apply.",
			"The area of effect is a Medium Burst Template. If the roll is failed, the blast deviates as a launched projectile.",
			"Targets within the blast suffer 2d6 damage. Blast counts as a Heavy Weapon."
		),
		additional: Array(
			"This unusual spell allows a necromancer to enhance the abilities of an undead of any sort (undead casters can augment themselves).",
			"Each casting allows the necromancer to give an undead an Advance as if it were a character. Targets might gain increased attributes or extra skills, or even gain a new Edge (without regard to requirements!).",
			"The caster can affect more than one undead at a time by spending the proper number of Power Points, but all targets must receive the same enhancement.",
			"With a success, the dead remain enhanced for 1 hour. With a raise, they remain enhanced for 1d6 hours."
		)
	},
	{
		name: "Grave Shroud",
		short_name: "grave-shroud",
		rank: 1,
		cost: 2,
		range: "Touch",
		duration: "1 minute (1/minute)",
		trappings: "Victim gains the appearance of an undead",
		page: "p35",
		book: books_list[2],
		description: Array(
			"Grave shroud transforms the target’s appearance to that of a zombie. Unwilling victims receive a Spirit roll to resist, opposed by the caster’s arcane skill.",
			"The target does not gain any Special Abilities (including Undead), as the spell is illusory, and he keeps his own traits. However, he looks and smells like a walking corpse.",
			"Near-mindless undead (such as zombies and skeletons) treat the target as one of their own and do not attack him, and intelligent undead (such as vampires) are likely to think of the character as just a mindless minion, and typically ignore them. If the character attacks an undead, it will defend itself, however.",
			"Any intelligent undead closely examining the character may make a Notice roll at –2 to spot the deception, or –4 if the caster scored a raise.",
			"A character subjected to this spell who sees his own reflection must make a Fear test."
		)
	},
	{
		name: "Grave Speak",
		short_name: "grave-speak",
		rank: 1,
		cost: 4,
		range: "Touch",
		duration: "3 (1/round)",
		trappings: "Runes carved on bodily remains, black candles, “leather” books, Ouija boards.",
		page: "p35",
		book: books_list[2],
		description: Array(
			"It is said the dead know many secrets, and through the black arts a mage can reach beyond death to contact departed souls. Though not evil, many good spellcasters avoid using this power for they feel it disturbs those who have earned their rest.",
			"In order for this spell to work, it must be directed toward a particular soul. The caster must either know the name of the deceased or possess a personal item, which includes their corpse, or any part of it at least, as well as a treasured item.",
			"If the spell succeeds, a ghostly voice makes itself known and may be questioned. One question may be asked for each round the spell is active.",
			"The spirit contacted is not necessarily friendly and can lie, but it may not refuse to answer or make guesses. The Game Master must decide what information the entity knows—the spirit is not omnipotent and typically knows only what it knew in life up to the moment of its death.",
			"A roll of a 1 on the caster’s arcane skill, regardless of Wild Die, may summon up a demon or other hostile entity. While these spirits cannot usually affect the caster when contacted in this way (they’re not summoned), it may try to convince him it is the person he sought, then feed him inaccurate or dangerous information to lead the character to his death."
		)
	},
	{
		name: "Nightmares",
		short_name: "nightmares",
		rank: 2,
		cost: 4,
		range: "Smarts x 1 mile",
		duration: "Special",
		page: "p36",
		book: books_list[2],
		description: Array(
			"This insidious spell causes the victim to suffer terrible nightmares. The caster must know the name of the victim and possess something which belonged to him (like a lock of hair or item of clothing), but need not know his exact location.",
			"When the victim next goes to sleep, he must make a Spirit roll at –2, or –4 if the caster scored a raise. With a raise the caster can also implant specific scenes or themes into the victim’s nightmares!",
			"If the target succeeds at the Spirit roll, he tosses and turns but there is no lasting effect. Should he fail, the dreamer receives no rest (see Hazards: Sleep, in Savage Worlds).",
			"If the victim rolls a 1 on his Spirit die, he must also roll on the Fright Table!"
		)
	},
	{
		name: "Spirit Shield",
		short_name: "spirit-shield",
		rank: 1,
		cost: 3,
		range: "Smarts",
		duration: "3 (1/round)",
		trappings: "Ring of holy water or salt, wall of energy, sigils inscribed in the air",
		page: "p36",
		book: books_list[2],
		description: Array(
			"This spell creates a barrier that can keep out ghosts, poltergeists, and other ethereal entities—it has no affect against demons or undead in physical form. The caster makes his arcane skill roll and then places a Medium Burst Template centered on himself.",
			"Entities wishing to enter the Template must make an opposed Spirit check against the caster’s arcane skill. If they fail, they cannot pass the barrier while the spell remains active.",
			"Spirit shield stops the entity from passing through, but does not prevent it from “normal” actions such as intimidation or throwing physical objects. The spell is negated if any living creature of rat-size or larger that started inside the circle crosses to the outside."
		)
	},
	{
		name: "Strength of the Dead",
		short_name: "strength-of-the-dead",
		rank: 2,
		cost: 6,
		range: "Touch",
		duration: "3 (2/round)",
		trappings: "Pallid skin, claws, fangs",
		page: "p36",
		book: books_list[2],
		description: Array(
			"This unusual power allows the caster to mimic a Trait or Special Ability of an undead he is touching when he invokes the spell.",
			"The recipient gains one Trait or Special Ability possessed by the undead for the duration of the power. In the case of Traits, the mimicked Trait replaces the target’s.",
			"The undead does not lose the affected trait or ability."
		)
	},
	{
		name: "Summon Demon",
		short_name: "summon-demon",
		rank: 2,
		cost: "Special",
		range: "Smarts x2",
		duration: "Smarts x Hours",
		trappings: "Pentagrams, black candles, animal sacrifices",
		page: "p36-38",
		book: books_list[2],
		description: Array(
			"Most heroes would never seek to consort with the denizens of Hell. But occasionally, such a feat may be required.",
			"The cost to summon a demon is equal to its Spirit die, or twice its Spirit die if it’s a Wild Card (most powerful demons are).",
			"If the roll is successful, the demon appears. If the creature was not summoned into a summoning circle or other binding, it likely attacks its caster before it can be given a task. See page 30 for binding the demon through occult means, and the bind entity spell on page 33 for trapping it with arcane power."
		),
		additional: Array(
		)
	},
	{
		name: "Summon Spirit",
		short_name: "summon-spirit",
		rank: 1,
		cost: "The spirit’s Spirit die type x2",
		range: "Smarts x2",
		duration: "Smarts",
		trappings: "Ouija boards, personal items, seances",
		page: "p38-p39",
		book: books_list[2],
		description: Array(
			"Whereas demons are typically summoned to complete some task, spirits are more likely summoned for information—or perhaps to materialize in physical form so as to then bind or destroy them.",
			"Spirits such as ghosts, haunts, poltergeists, and the like have a very limited view of the physical world, and an even lesser understanding of the ethereal realm. They spend most of their time in the latter, drifting in a state of semi-consciousness and glimpsing visions of the real world. “Good” spirits find this peaceful and only interact with the mortal realm if forcibly called to it. Restless entities have a very different take. These visions—or memories of their terrible lives—drive them to terrible violence. They actively attempt to reenter the physical domain and take their vengeance on the living beings they find there.",
			"Summoning a spirit requires a ritual of some sort—typically a seance and/or important artifact of the person in life (if it had one prior to its ethereal existence)."
		),
		additional: Array(

		)
	},
	{
		name: "Suppress Lycanthropy",
		short_name: "suppress-lycanthropy",
		rank: 2,
		cost: 6,
		range: "Touch",
		duration: "One Night",
		trappings: "Potion, runes drawn on body, circle of wolf’s bane, silver coins over eyes",
		page: "p39",
		book: books_list[2],
		description: Array(
			"Few curses are as terrible as that of lycanthropy, but for those afflicted, there is hope. This rare spell (which should be found only at the end of a lengthy and dangerous quest) gives lycanthropes a chance to avoid their involuntary changes on nights of the full moon (or other trigger).",
			"The lycanthrope may make a Vigor roll; +2 if the caster scored a raise, to resist the change for one night of the full moon. With a failure, the lycanthrope assumes his animal form.",
			"Permanent Change: If cast as a ritual, the lycanthrope gains control of his transformation. This requires the heart of a greater creature of the same type (a Wild Card), and one or two other rare materials—such as a fragment of meteorite or a vampire’s fangs.",
			"Unfortunately, if the ritual fails, the lycanthrope is trapped forever in its feral form, becoming an enraged predator under the Game Master’s control."
		)
	}

));