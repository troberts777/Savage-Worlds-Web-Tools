/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Horror Companion and are owned by Pinnacle Entertainment Group.
*/
if(typeof(extraDatabase) == "undefined")
	var extraDatabase = Array();

if(typeof(extraBooks) == "undefined")
	var extraBooks = Array();

var currentBook = books_list[2];

extraBooks = extraBooks.concat(currentBook);


extraDatabase = extraDatabase.concat(Array(
	{
		name: "Ama-No-Jaku",
		wildcard: 1,
		image: "",
		blurb: Array(
			"Translating roughly as \"imp of heaven,\" ama-no-jaku are small demons found in Japan that tempt and provoke mischief into mortals. They often do this by pretending to be something they’re not—such as a human child or a beneficent spirit.",
			"Ama-no-jaku (sometimes amanojaku) do not have a magical power to obscure their looks, so they must wear natural disguises, such as shrouds or the skin of their victims."
		),
		attributes: {
			agility: "d10",
			smarts: "d10",
			spirit: "d6",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d8",
			'Fighting' : "d6",
			'Knowledge (Disguise)' : "d10",
			'Notice' : "d8",
			'Persuasion' : "d12",
			'Stealth' : "d10",
			'Taunt' : "d12"
		},
		charisma: "",
		pace: "10",
		parry: "5",
		toughness: "5",
		armor: "0",
		gear: "The demons prefer to lure victims into death traps (see below), but also take great delight in slashing with nasty (often infected) knives and retreating into the shadows (see Hit-and-Run, below).",
		abilities: Array(
			{
				name: "Blur",
				description: "Ama-no-jaku move with supernatural speed. Physical attacks against them are made at –4."
			},
			{
				name: "Defender",
				description: "Some ama-no-jaku keep their most deluded victims nearby as guardians when working with more observant groups. Such a person is typically an ordinary man or woman who has been tricked into believing the demon is the ghost of a child, a friendly spirit, etc, and that any new intruders wish it harm."
			},
			{
				name: "Hit-And-Run",
				description: "Ama-no-jaku are experts at using their preternatural speed to run at a victim’s blind-side, slash at his lower extremities, and then retreat before he can react. In most situations, the ama-no-jaku can only be hit by a victim who was on Hold. In situations where this isn’t possible, the ama-no-jaku typically retreats."
			},
			{
				name: "Traps",
				description: "Ama-no-jaku take great delight into luring their victims into numerous traps they’ve placed around their lairs. Anytime a character draws a black card in combat, on his action he must make an opposed roll of Smarts versus the ama-no-jaku’s Taunt. If the creature wins, the character is maneuvered into a trap. He loses his turn and consults the Traps Table at left (p54)"
			}
		),
		book: currentBook,

		page: "p53-p54"
	},
	{
		name: "Aswang",
		wildcard: 1,
		image: "",
		blurb: Array(
			"An aswang is a vampire-like creature from the Philippines. By day it assumes the form of a beautiful female and lives a normal human life, even marrying and having children. By night, however, it becomes a bloodsucking fiend. It uses its immensely long, hollow tongue to siphon blood, preferring to project it down through cracks in the roof rather than enter buildings. Unlike most vampires, however, the aswang is not undead.",
			"For its human form, use the Innocent Victim stats (see page 117) but add the Very Attractive Edge. The stats below are for its vampiric form."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d10",
			strength: "d12+2",
			vigor: "d10"
		},
		skills: {
			'Climbing' : "d10",
			'Fighting' : "d10",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "7",
		toughness: "7",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Blood Drain",
				description: "An aswang scoring a raise on its Fighting roll has grappled its victim and impaled him with her long, hollow tongue. Each round the victim remains impaled, he suffers a Fatigue level until he dies. If the grapple is broken, the tongue is withdrawn. An ally may also attempt to sever the tongue (Toughness 3), but with a roll of 1 on the Fighting die hits the struggling victim instead."
			},
			{
				name: "Shadow Lick",
				description: "A person whose shadow is licked by an aswang is cursed. The aswang must make a Touch Attack (+2). On a success, the victim loses all his Bennies and cannot earn any more during the session. Non-Wild Card characters must make a Spirit roll or suffer a terrible accident sometime within the next 24 hours that usually results in death."
			},
			{
				name: "Tongue",
				description: " Str+d4, Reach 2"
			},
			{
				name: "Weakness (Dawn)",
				description: "An aswang automatically returns to its human form at ￼the first ray of dawn."
			},
			{
				name: "Weakness (Garlic)",
				description: "An aswang must make a Spirit roll to attack anyone carrying garlic."
			}
		),
		book: currentBook,

		page: "p54-55"
	},
	{
		name: "Banshee",
		tags: "undead,",
		wildcard: 1,
		image: "",
		blurb: Array(
			"Banshees are feminine horrors who take one of three forms—a young maiden, a matron-like figure, or an old crone. All dress in either a dark, hooded cloak or a funeral shroud. Their long nails may be able to tear through flesh, but their most feared power is their terrible scream, which can drive a man mad or even kill him.",
			"A variant of the banshee, known as the “washer woman” comes in the form of a cloaked figure washing blood-stained clothes. According to legend, these are the garments of those about to die from her wailing."
		),
		attributes: {
			agility: "d8",
			smarts: "d6",
			spirit: "d8",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d6",
			'Notice' : "d8",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "5",
		toughness: "8",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Claws",
				description: "Str+d4"
			},
			{
				name: "Scream",
				description: "Once per night, and again anytime a banshee draws a Joker in combat, it may elicit the banshee’s trademark scream. Anyone within 12” (24 yards) must make a Spirit roll or die. Those who are successful automatically lose one point of Sanity and are Shaken."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties."
			}
		),
		book: currentBook,

		page: "p55"
	},
	{
		name: "Barrow Dweller",
		wildcard: 0,
		tags: "wights,wight,undead,hagbui,",
		image: "",
		blurb: Array(
			"Also known as wights and hagbui (literally “barrow dweller”), these undead are the corporeal remains of kings and heroes buried in ages past. They are common in northern Europe, especially areas the Vikings settled. Their form is that of a mummified corpse with tight, leathery skin drawn over wasted muscles. Their eyes burn with a pale, cold light. Although barrow dwellers can speak, they only speak languages known to them in the era they died. Their tombs are brimming with treasure, and they intend to ensure it remains that way for eternity."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d10",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "12",
		armor: "3",
		gear: "Ancient bronze breastplate (+3), bronze long sword (Str+d8).",
		abilities: Array(
			{
				name: "Bony Claws",
				description: "Str+d4"
			},
			{
				name: "Bound",
				description: "A barrow dweller may not move further than 50” (100 yards) from its burial place."
			},
			{
				name: "Fear(-2)",
				description: "Anyone seeing the creature must make a Fear test at –2."
			},
			{
				name: "Numbing Touch",
				description: "Any creature touched by a barrow dweller must make a Vigor roll. On a failure, the victim suffers a cumulative -1 penalty to Agility roll and skills."
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties."
			},
			{
				name: "Weakness (Sunlight)",
				description: "Barrow dwellers are weakened by the sun. Each round in sunlight, they must make a Vigor roll or become Exhausted."
			}
		),
		book: currentBook,

		page: "p55-56"
	},
	{
		name: "Bat, Giant",
		wildcard: 0,
		tags: "animal,",
		image: "",
		blurb: Array(
			"Giant bats are usually found in groups of 2d6 members. They are rarely aggressive unless provoked in their lair or under the control of some nefarious master."
		),
		attributes: {
			agility: "d8",
			smarts: "d4(A)",
			spirit: "d6",
			strength: "d6",
			vigor: "d6"
		},
		skills: {
			'Fighting' : "d8",
			'Notice' : "d12",
			'Stealth' : "d10"
		},
		charisma: "",
		pace: "0",
		parry: "6",
		toughness: "5",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Bite",
				description: "Str"
			},
			{
				name: "Echo Location",
				description: "Giant bats suffer no penalties for bad lighting, even in Pitch Darkness."
			},
			{
				name: "Flying",
				description: "Pace 8, Climb -2."
			},
			{
				name: "Size -1",
				description: "Giant bats are about the size of medium dogs in the body, and have 9’ long wingspans."
			}
		),
		book: currentBook,

		page: "p56"
	},
	{
		name: "The Black Coachman",
		wildcard: 1,
		tags: "undead,",
		image: "",
		blurb: Array(
			"The black coachman has existed in one form or another for millennia. The Egyptians knew him as the “dark charioteer,” the Romans called him the “black rider,” and the Normans knew him as “death’s wagoner.” His current name stems from the Victorian era.",
			"The coachman appears only when summoned via a summon demon spell. This is typically done as vengeance against someone the summoner believes has wronged him.",
			"Once summoned and tasked, the coachman begins its long ride the very next night at 13 minutes after midnight. It rides the roads within 13 miles of where it was summoned and gathers the souls of all those it meets. The summoner can task it with reaping the souls of up to 13 named victims, whom it seeks unerringly, one per night. Along the way, the coachman may gather any other unfortunates he comes across except the summoner and up to 12 individuals he’s named as protected."
		),
		attributes: {
			agility: "d8",
			smarts: "d8",
			spirit: "d8",
			strength: "d10",
			vigor: "d10"
		},
		skills: {
			'Driving' : "d10",
			'Fighting' : "d8",
			'Notice' : "d8",
			'Riding' : "d10",
			'Stealth' : "d6"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "9",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Reaping Scythe",
				description: "The reaping scythe is only useful against sentient beings with souls. It causes no damage (but see below), but those hit by it must win an opposed Spirit roll with the coachman or be claimed. Those claimed fall into a torpor, alive but unresponsive until the coachman either escorts them to hell (or wherever he goes), or is defeated. If the former, the victims die. If the latter, they awake Exhausted but alive minutes later. If the coachman is made flesh (see Invulnerable, below), the scythe does not reap souls but causes Str+d10 damage."
			},
			{
				name: "Fear",
				description: "Anyone seeing the creature suffers a Fear test."
			},
			{
				name: "Invulnerable",
				description: "The coachman can be driven off if wounded by magical weapons, but is not dead and appears the following night as usual. The only way to permanently slay the creature is to use a banish entity spell. Rather than banishing it, the spell makes it whole for 13 minutes. During this time it must fight its summoner (and his companions). If it is not defeated in that time, it fights on as usual. If it is defeated within 13 minutes, it is dragged screaming to the Abyss and does not return—until summoned again!"
			},
			{
				name: "Undead",
				description: "+2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties."
			}
		),
		book: currentBook,

		page: "p57-58"
	},
	{
		name: "The Black Coachman's Horses",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: Array(
			"Four stallions, with coats as black as pitch and eyes like burning coals, pull the coachman’s black coach. There are no reins attaching them to the coach, only strands of inky blackness. They fight only if they or the coachman are attacked."
		),
		attributes: {
			agility: "d6",
			smarts: "d6(A)",
			spirit: "d8",
			strength: "d12+4",
			vigor: "d10"
		},
		skills: {

			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "10",
		parry: "6",
		toughness: "10",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Fleet Footed",
				description: "Black horses roll a d8 for their running die."
			},
			{
				name: "Ghostly Gallop",
				description: "Black horses run just above the surface of the ground, and do not suffer movement penalties for Difficult Terrain."
			},
			{
				name: "Kick",
				description: "Str+d6"
			},
			{
				name: "Size +3",
				description: "Black horses weigh between 800 and 1000 pounds."
			}
		),
		book: currentBook,

		page: "p58"
	},
	{
		name: "The Black Coach",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: Array(
			"The black coach is a prison for souls awaiting delivery to whatever fate awaits them. Black curtains cover the windows, but occasionally the ghostly face of a coachman’s victim can be seen frantically peering out."
		),

		acc: "Half animal’s Pace",
		top_speed: "Top Speed is animal’s Pace + running",
		charisma: "",
		toughness: "14",
		armor: "2",
		gear: "",
		abilities: Array(
			{
				name: "Armor",
				description: "In earlier centuries or in fantasy games, the coach’s wooden frame provides 2 points of armor. In a modern setting, increase the Toughness to 18(4). In either case, the coach’s chassis is considered Heavy Armor thanks to its hellish origins."
			},
			{
				name: "Fear(-2)",
				description: "Anyone who opens the coach door sees a writhing mass of screaming, tormented spirits. They must make a Fear roll at –2."
			},
			{
				name: "Invulnerable",
				description: "If the coach is destroyed, the coachman either mounts a horse or fights on foot. It returns the following night along with the coachman until he returns to hell."
			}
		),
		book: currentBook,

		page: "p58"
	},
	{
		name: "The Black Judge",
		wildcard: 1,
		image: "",
		tags: "",
		blurb: Array(
			"For those who know the ancient rituals necessary to summon him, the black judge can be an ally in the fight against evil. He takes the form of a cowled figure clad in robes of darkest night. Over his face he wears a vaguely skull-like mask. Although predominantly black, the mask has burning yellow eyes and fangs. What lies beneath the mask has never been revealed.",
			"Once summoned, the judge usually takes a moment to hear the petitioner’s plea, and may even converse with him. Before the judge grants any information, however, he must be defeated in single melee combat.",
			"The judge is incredibly tough, but is vulnerable to whoever summoned him. Weighing whether or not the judge should be summoned should be a very difficult decision.",
			"If the judge is defeated, the summoner may ask him how to defeat one supernatural creature—good or evil.",
			"If the summoner is defeated, the judge renders judgement–see below."
		),
		attributes: {
			agility: "d8",
			smarts: "d10",
			spirit: "d12",
			strength: "d8",
			vigor: "d8"
		},
		skills: {

			'Fighting' : "d12",
			'Intimidation' : "d10",
			'Notice' : "d8",
			'Persuasion' : "d10",
			'Stealth' : "d8",
			'Taunt' : "d10",
		},
		charisma: "",
		pace: "6",
		parry: "8",
		toughness: "6",
		armor: "0",
		gear: "",
		abilities: Array(
			{
				name: "Fearless",
				description: "Immune to Fear and Intimidation."
			},
			{
				name: "Invulnerable",
				description: "The judge is invulnerable to all but the person who summoned him."
			},
			{
				name: "Dark Insight",
				description: "If the summoner defeats the judge in single-combat, he may ask how to defeat a single supernatural creature. The judge imparts no other information— his sole cosmic purpose is to reveal such secrets. Some believe this is a sort of “safety net” for knowledge that might otherwise be lost so that no creature is every truly undefeatable."
			},
			{
				name: "Judgement",
				description: "If the summoner is defeated by the Black Judge in single combat, he must make an opposed Spirit roll with the judge plus or minus his own Charisma modifier. A Mean summoner, for example, subtracts –2 from his opposed roll. If the judge wins the character is cursed with doom. He may no longer spend Bennies to make Soak rolls until he summons another judge—and defeats him!"
			},
			{
				name: "Weakness (Summoner)",
				description: "The judge is vulnerable only to the one who summoned him."
			}
		),
		book: currentBook,

		page: "p58-59"
	},
	{
		name: "Black Tree",
		wildcard: 1,
		image: "",
		tags: "",
		blurb: Array(
			"Black trees are malevolent creatures found in clusters within ancient and dark forests. Some are formed by desecration of old burial grounds, some are possessed by spirits or demons, and others exist where chemical dumping has corrupted the land.",
			"They resemble standard trees, but their bark is black, and sticky red sap oozes from gaps in the bark. Most have “facial” features, formed from knots and twists in the wood."
		),
		attributes: {
			agility: "d6",
			smarts: "d4(A)",
			spirit: "d10",
			strength: "d12+4",
			vigor: "d12"
		},
		skills: {

			'Fighting' : "d8",
			'Intimidation' : "d10",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "6",
		toughness: "19",
		armor: "3",
		gear: "",
		abilities: Array(
			{
				name: "Armor +3",
				description: "Thick bark"
			},
			{
				name: "Branches",
				description: "Str+d6. Reach 1. A black tree has four branches and may use them all each round with no multi-action penalty. Only two branches may be used to attack a single foe, however."
			},
			{
				name: "Entangle",
				description: "The tree’s lesser branches and roots attempt to trip and entangle its attackers. Everyone within a Large Burst Template centered on the tree is affected by a constant entangle as if cast with a raise."
			},
			{
				name: "Fear",
				description: "Anyone seeing the creature must make a Fear check."
			},
			{
				name: "Huge",
				description: "Attackers add +4 to attack rolls against a black tree because of its size."
			},
			{
				name: "Impale",
				description: "A raise on the thing’s Fighting roll impales its foe on a sharp branch. Each round thereafter, the victim must make a Vigor roll or suffer a level of Fatigue as the black tree drains his blood. Victims may escape as if breaking a grapple. Lost Fatigue recovers at the rate of one level per 24 hours."
			},
			{
				name: "Resistance (Piercing Weapons)",
				description: "A black tree suffers half damage from piercing attacks, such as gunshots."
			},
			{
				name: "Size+8",
				description: "Black trees stand up to 50’ high."
			},
			{
				name: "Sticky Sap",
				description: " An attacker who strikes a black tree with a melee weapon finds his weapon stuck to the sap. On his next action, he must make a Strength roll at –2 to free his weapon. With success, he frees the weapon but it takes the entire round. With a raise, he frees the weapon and may still perform other actions this round. The same is true if a character touches the tree."
			},
			{
				name: "Wakness (Fire)",
				description: "A black wood suffers +4 damage from fire attacks."
			}
		),
		book: currentBook,

		page: "p59-60"
	},
	{
		name: "Blob",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: Array(
			"A blob is basically an amorphous mass of acidic jelly with an insatiable hunger. It might be an alien entity brought to Earth on a crashed satellite, a creature from another dimension, or the result of pollution."
		),
		attributes: {
			agility: "d4",
			smarts: "d4(A)",
			spirit: "d12",
			strength: "d12+2",
			vigor: "d12"
		},
		skills: {

			'Fighting' : "d8",
			'Notice' : "d8"
		},
		charisma: "",
		pace: "4",
		parry: "6",
		toughness: "10",
		armor: "",
		gear: "",
		abilities: Array(
			{
				name: "Blob",
				description: "+2 to recover from being Shaken; No wound penalties; Immune to poison and disease."
			},
			{
				name: "Engulf",
				description: "A blob may make a grapple attack against every creature under its template (see below). On a success, it has engulfed its foe. Each round the grapple is maintained thereafter, the victim suffers 2d4 damage. Victims reaching Death are absorbed and add to the blob’s bulk."
			},
			{
				name: "Fear",
				description: "Anyone seeing the creature must make a Fear check."
			},
			{
				name: "Mindless",
				description: "Immune to Fear and Tests of Will."
			},
			{
				name: "Variable Size",
				description: "The blob begins as a Small Burst Template (Size +2). For each victim it absorbs, it grows 1” and adds +1 Size (and Toughness), with no limit."
			}
		),
		book: currentBook,

		page: "p60"
	},
	{
		name: "Blood Mist",
		wildcard: 0,
		image: "",
		tags: "",
		blurb: Array(
			"The destruction of an ancient vampire’s physical body isn’t necessarily the end of its existence. Through dark magic, they can be brought back into existence as near–mindless, ethereal clouds of vapor with an insatiable bloodlust by those who know the proper rituals.",
			"Blood mists appear as grey clouds until they feed, then change to pink to dark red as they consume more blood. Their preferred tactic is to mingle with natural mist, allowing them to approach unsuspecting victims with ease.",
			"Blood mists are Swarms (see Savage Worlds). Their attack is a blood drain, so targets in completely sealed suits remain immune as usual.",
			"Blood mists have typical statistics for Swarms, and the following Special Ability:"
		),


		abilities: Array(
			{
				name: "Immunity",
				description: "Blood mists suffer no damage from mundane attacks. Magic items, weapons, and supernatural powers affect them normally. They can be temporarily driven off by tactics such as sucking them into a vent, intense heat, or pelting them with a strong stream of water. Such tactics typically scatter the mist for 1d10 minutes."
			}
		),
		book: currentBook,

		page: "p60"
	},
	{
		name: "Cat, Small",
		wildcard: 0,
		image: "",
		tags: "animal,",
		blurb: Array(
			"This is an ordinary house cat, the sort that might be a familiar for a spellcaster, a Beast Master’s animal friend, or an alternate form for the shape change power."
		),
		attributes: {
			agility: "d8",
			smarts: "d6(A)",
			spirit: "d10",
			strength: "d4",
			vigor: "d6"
		},
		skills: {
			'Climbing' : "d6",
			'Notice' : "d6",
			'Stealth' : "d8"
		},
		charisma: "",
		pace: "6",
		parry: "3",
		toughness: "3",
		armor: "",
		gear: "",
		abilities: Array(
			{
				name: "Acrobat",
				description: "+2 to Agility rolls to perform acrobatic maneuvers; +1 to Parry if unencumbered."
			},
			{
				name: "Bite/Claw",
				description: "Str"
			},
			{
				name: "Low Light Vision",
				description: "Cats ignore penalties for Dim and Dark lighting."
			},
			{
				name: "Size -2",
				description: "Cats are typically less than a foot high."
			},
			{
				name: "Small",
				description: "Attackers subtract 2 from their attacks to hit."
			}
		),
		book: currentBook,

		page: "p60-61"
	}
));