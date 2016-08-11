/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsExtrasDatabase) == "undefined")
		var savageWorldsExtrasDatabase = Array();

	if(typeof(savageWorldsExtrasBooksList) == "undefined")
		var savageWorldsExtrasBooksList = Array();

	var currentBook = get_book_by_id(3);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// Acolyte
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 205,
		name: {
			'en-US' : 'Acolyte',
		},
		gear: {
			'en-US' : '[{"name":"Armor +2","description":"In a fantasy setting, acolytes usually wear medium-weight armor, such as chain mail. In a more modern setting, they\'ll wear only their ceremonial robes."},{"name":"Weapons","description":"Acolytes typically carry swords, clubs, or maces; these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)"}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.',
		},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Religion"}},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d4"}}',
		wildcard: 0,
		image: 'http://www.arkhamdrive-in.com/Graphics/Stills/SP12-cultists.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 3,
		page: ''
	}
);
	// Ama-No-Jaku
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 192,
		name: {
			'en-US' : 'Ama-No-Jaku',
		},
		gear: {
			'en-US' : 'The demons prefer to lure victims into death traps (see below), but also take great delight in slashing with nasty (often infected) knives and retreating into the shadows (see Hit-and-Run, below).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blur: Ama-no-jaku move with supernatural speed. Physical attacks against them are made at -4.\nDefender: Some ama-no-jaku keep their most deluded victims nearby as guardians when working with more observant groups. Such a person is typically an ordinary man or woman who has been tricked into believing the demon is the ghost of a child, a friendly spirit, etc, and that any new intruders wish it harm.\nHit-And-Run: Ama-no-jaku are experts at using their preternatural speed to run at a victim\'s blind-side, slash at his lower extremities, and then retreat before he can react. In most situations, the ama-no-jaku can only be hit by a victim who was on Hold. In situations where this isn\'t possible, the ama-no-jaku typically retreats.\nTraps: Ama-no-jaku take great delight into luring their victims into numerous traps they\'ve placed around their lairs. Anytime a character draws a black card in combat, on his action he must make an opposed roll of Smarts versus the ama-no-jaku\'s Taunt. If the creature wins, the character is maneuvered into a trap. He loses his turn and consults the Traps Table at left (p54)\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Translating roughly as "imp of heaven," ama-no-jaku are small demons found in Japan that tempt and provoke mischief into mortals. They often do this by pretending to be something they\'re not-such as a human child or a beneficent spirit.\nAma-no-jaku (sometimes amanojaku) do not have a magical power to obscure their looks, so they must wear natural disguises, such as shrouds or the skin of their victims.\n',
		},
		attributes: '{"agility":"d10","smarts":"d10","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Disguise"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d12"},"SKILL_STEALTH":{"value":"d10"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 3,
		page: 'p53-p54'
	}
);
	// Aswang
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 193,
		name: {
			'en-US' : 'Aswang',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blood Drain: An aswang scoring a raise on its Fighting roll has grappled its victim and impaled him with her long, hollow tongue. Each round the victim remains impaled, he suffers a Fatigue level until he dies. If the grapple is broken, the tongue is withdrawn. An ally may also attempt to sever the tongue (Toughness 3), but with a roll of 1 on the Fighting die hits the struggling victim instead.\nShadow Lick: A person whose shadow is licked by an aswang is cursed. The aswang must make a Touch Attack (+2). On a success, the victim loses all his Bennies and cannot earn any more during the session. Non-Wild Card characters must make a Spirit roll or suffer a terrible accident sometime within the next 24 hours that usually results in death.\nTongue: Str+d4, Reach 2\nWeakness (Dawn): An aswang automatically returns to its human form at ?the first ray of dawn.\nWeakness (Garlic): An aswang must make a Spirit roll to attack anyone carrying garlic.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'An aswang is a vampire-like creature from the Philippines. By day it assumes the form of a beautiful female and lives a normal human life, even marrying and having children. By night, however, it becomes a bloodsucking fiend. It uses its immensely long, hollow tongue to siphon blood, preferring to project it down through cracks in the roof rather than enter buildings. Unlike most vampires, however, the aswang is not undead.\nFor its human form, use the Innocent Victim stats (see page 117) but add the Very Attractive Edge. The stats below are for its vampiric form.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: 'p54-55'
	}
);
	// Banshee
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 194,
		name: {
			'en-US' : 'Banshee',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Claws: Str+d4\nScream: Once per night, and again anytime a banshee draws a Joker in combat, it may elicit the banshee\'s trademark scream. Anyone within 12" (24 yards) must make a Spirit roll or die. Those who are successful automatically lose one point of Sanity and are Shaken.\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Banshees are feminine horrors who take one of three forms-a young maiden, a matron-like figure, or an old crone. All dress in either a dark, hooded cloak or a funeral shroud. Their long nails may be able to tear through flesh, but their most feared power is their terrible scream, which can drive a man mad or even kill him.\nA variant of the banshee, known as the "washer woman" comes in the form of a cloaked figure washing blood-stained clothes. According to legend, these are the garments of those about to die from her wailing.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 3,
		page: 'p55'
	}
);
	// Barrow Dweller
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 195,
		name: {
			'en-US' : 'Barrow Dweller',
		},
		gear: {
			'en-US' : 'Ancient bronze breastplate (+3), bronze long sword (Str+d8).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bony Claws: Str+d4\nBound: A barrow dweller may not move further than 50" (100 yards) from its burial place.\nFear(-2): Anyone seeing the creature must make a Fear test at -2.\nNumbing Touch: Any creature touched by a barrow dweller must make a Vigor roll. On a failure, the victim suffers a cumulative -1 penalty to Agility roll and skills.\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\nWeakness (Sunlight): Barrow dwellers are weakened by the sun. Each round in sunlight, they must make a Vigor roll or become Exhausted.\n',
		},
		tags: {
			'en-US' : 'wights,wight,undead,hagbui,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Also known as wights and hagbui (literally "barrow dweller"), these undead are the corporeal remains of kings and heroes buried in ages past. They are common in northern Europe, especially areas the Vikings settled. Their form is that of a mummified corpse with tight, leathery skin drawn over wasted muscles. Their eyes burn with a pale, cold light. Although barrow dwellers can speak, they only speak languages known to them in the era they died. Their tombs are brimming with treasure, and they intend to ensure it remains that way for eternity.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '3',
		book: 3,
		page: 'p55-56'
	}
);
	// Bat, Giant
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 196,
		name: {
			'en-US' : 'Bat, Giant',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Bite: Str\nEcho Location: Giant bats suffer no penalties for bad lighting, even in Pitch Darkness.\nFlying: Pace 8, Climb -2.\nSize -1: Giant bats are about the size of medium dogs in the body, and have 9\' long wingspans.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Giant bats are usually found in groups of 2d6 members. They are rarely aggressive unless provoked in their lair or under the control of some nefarious master.\n',
		},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 3,
		page: 'p56'
	}
);
	// Black Tree
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 201,
		name: {
			'en-US' : 'Black Tree',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor +3: Thick bark\nBranches: Str+d6. Reach 1. A black tree has four branches and may use them all each round with no multi-action penalty. Only two branches may be used to attack a single foe, however.\nEntangle: The tree\'s lesser branches and roots attempt to trip and entangle its attackers. Everyone within a Large Burst Template centered on the tree is affected by a constant entangle as if cast with a raise.\nFear: Anyone seeing the creature must make a Fear check.\nHuge: Attackers add +4 to attack rolls against a black tree because of its size.\nImpale: A raise on the thing\'s Fighting roll impales its foe on a sharp branch. Each round thereafter, the victim must make a Vigor roll or suffer a level of Fatigue as the black tree drains his blood. Victims may escape as if breaking a grapple. Lost Fatigue recovers at the rate of one level per 24 hours.\nResistance (Piercing Weapons): A black tree suffers half damage from piercing attacks, such as gunshots.\nSize+8: Black trees stand up to 50\' high.\nSticky Sap: An attacker who strikes a black tree with a melee weapon finds his weapon stuck to the sap. On his next action, he must make a Strength roll at -2 to free his weapon. With success, he frees the weapon but it takes the entire round. With a raise, he frees the weapon and may still perform other actions this round. The same is true if a character touches the tree.\nWakness (Fire): A black wood suffers +4 damage from fire attacks.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Black trees are malevolent creatures found in clusters within ancient and dark forests. Some are formed by desecration of old burial grounds, some are possessed by spirits or demons, and others exist where chemical dumping has corrupted the land.\nThey resemble standard trees, but their bark is black, and sticky red sap oozes from gaps in the bark. Most have "facial" features, formed from knots and twists in the wood.\n',
		},
		attributes: '{"agility":"d6","smarts":"d4(A)","spirit":"d10","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '19',
		armor: '3',
		book: 3,
		page: 'p59-60'
	}
);
	// Blob
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 202,
		name: {
			'en-US' : 'Blob',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Blob: +2 to recover from being Shaken; No wound penalties; Immune to poison and disease.\nEngulf: A blob may make a grapple attack against every creature under its template (see below). On a success, it has engulfed its foe. Each round the grapple is maintained thereafter, the victim suffers 2d4 damage. Victims reaching Death are absorbed and add to the blob\'s bulk.\nFear: Anyone seeing the creature must make a Fear check.\nMindless: Immune to Fear and Tests of Will.\nVariable Size: The blob begins as a Small Burst Template (Size +2). For each victim it absorbs, it grows 1" and adds +1 Size (and Toughness), with no limit.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'A blob is basically an amorphous mass of acidic jelly with an insatiable hunger. It might be an alien entity brought to Earth on a crashed satellite, a creature from another dimension, or the result of pollution.\n',
		},
		attributes: '{"agility":"d4","smarts":"d4(A)","spirit":"d12","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 3,
		page: 'p60'
	}
);
	// Blood Mist
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 203,
		name: {
			'en-US' : 'Blood Mist',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Immunity: Blood mists suffer no damage from mundane attacks. Magic items, weapons, and supernatural powers affect them normally. They can be temporarily driven off by tactics such as sucking them into a vent, intense heat, or pelting them with a strong stream of water. Such tactics typically scatter the mist for 1d10 minutes.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The destruction of an ancient vampire\'s physical body isn\'t necessarily the end of its existence. Through dark magic, they can be brought back into existence as near-mindless, ethereal clouds of vapor with an insatiable bloodlust by those who know the proper rituals.\nBlood mists appear as grey clouds until they feed, then change to pink to dark red as they consume more blood. Their preferred tactic is to mingle with natural mist, allowing them to approach unsuspecting victims with ease.\nBlood mists are Swarms (see Savage Worlds). Their attack is a blood drain, so targets in completely sealed suits remain immune as usual.\nBlood mists have typical statistics for Swarms, and the following Special Ability:\n',
		},
		attributes: '',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '0',
		armor: '0',
		book: 3,
		page: 'p60'
	}
);
	// Cat, Small
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 204,
		name: {
			'en-US' : 'Cat, Small',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Acrobat: +2 to Agility rolls to perform acrobatic maneuvers; +1 to Parry if unencumbered.\nBite/Claw: Str\nLow Light Vision: Cats ignore penalties for Dim and Dark lighting.\nSize -2: Cats are typically less than a foot high.\nSmall: Attackers subtract 2 from their attacks to hit.\n',
		},
		tags: {
			'en-US' : 'animal,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'This is an ordinary house cat, the sort that might be a familiar for a spellcaster, a Beast Master\'s animal friend, or an alternate form for the shape change power.\n',
		},
		attributes: '{"agility":"d8","smarts":"d6(A)","spirit":"d10","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '3',
		toughness: '3',
		armor: '0',
		book: 3,
		page: 'p60-61'
	}
);
	// Corpse Worm Swarm
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 216,
		name: {
			'en-US' : 'Corpse Worm Swarm',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Devour: A paralyzed victim begins to be devoured from within. He suffers one wound per hour that can only be stopped by magic or ingesting a full pound of salt (a Vigor roll at -4). This dehydrates the worms like slugs and they die inside the body.\nParalysis: Anyone Shaken or wounded by a corpse worm swarm must make a Vigor roll or be paralyzed for 2d6 rounds.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Corpse worms are one-inch long red worms with a taste for  esh and a paralyzing bite. Although they usually feed on carcasses, they are partial to warm, living tissue. While an individual worm poses little threat to a healthy human, a swarm can render a man incapable of defending himself very quickly.\nCorpse worm swarms  ll a Medium Burst Template and cannot Split. They also have the following Special Abilities:',
		},
		attributes: '{"agility":"","smarts":"","spirit":"","strength":"","vigor":""}',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '0',
		armor: '0',
		book: 3,
		page: 'p62'
	}
);
	// Creeping Hand
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 217,
		name: {
			'en-US' : 'Creeping Hand',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Scuttle: Creeping hands roll a d4 running die, instead of a d6.\nSize -2: Creeping hands are small creatures.\nSmall: Attackers suffer a -2 penalty to attack a creeping hand due to its size.\nThrottle: A creeping hand scoring a raise on a Fighting attack has grabbed its opponent\'s throat. Starting immediately after the throttle begins, roll the hand\'s Strength versus the victim\'s Vigor. If the hand is successful, it causes Fatigue. This continues each round until the victim is dead or succeeds in an opposed Strength roll to remove it. Fatigue caused by a hand fades every 24 hours.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Creeping hands are severed hands given animation by some arcane process. Three different varieties have been recorded, though all share the same traits.\nThe first are those of murderers. In this instance, the hand somehow reanimates after death and sets out on a murderous spree.\nThe second belong to sorcerers who have learned how to detach their hands and send them to perform errands. Not all of these are necessarily evil.\nThe third sort are vengeful creatures, usually belonging to accident victims who have had their hands severed but seek revenge. The hand seems to take on a will of its own, carrying out a terrible revenge on those who wronged their former owner.',
		},
		attributes: '{"agility":"d10","smarts":"d6 (A)","spirit":"d10","strength":"d12+2","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '4',
		armor: '0',
		book: 3,
		page: 'p62'
	}
);
	// Cultist Priest
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 219,
		name: {
			'en-US' : 'Cultist Priest',
		},
		gear: {
			'en-US' : 'Ceremonial robes, cursed dagger (Str+d6+2 damage; wounds can only be healed naturally).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Powers: Bolt (screaming skull), fear (unearthly shriek), obscure (cloud of darkness), puppet (hypnotic voice), smite (bale re along blade), zombie (special powder),15 PP.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Arcane Background (Magic), New Power, Power Points',
		},
		hindrances: {
			'en-US' : 'Arrogant',
		},
		blurb: {
			'en-US' : 'At the top of every cult is the “high priest,” “grand wizard,” or some such high-titled lunatic. Most have supernatural powers granted to them by their deity. Despite believing in the power of their “god,” they actually use arcane magic rather than invoke miracles.\nThe spell trappings are suggestions. Ideally, you should alter them to  t the nature of the cult the characters are facing.',
		},
		attributes: '{"agility":"d6","smarts":"d8","spirit":"d10","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 3,
		page: 'p63'
	}
);
	// Cultist, Typical
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 218,
		name: {
			'en-US' : 'Cultist, Typical',
		},
		gear: {
			'en-US' : 'Ceremonial robes, dagger (Str+d4).',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fanatical: If a cultist is adjacent to a cult leader when the latter is hit, the follower takes the blow for his master with a successful Agility roll.',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The mortal worshippers of insane gods, demons, and other supernatural entities are called cultists. Many are stark-raving mad and all are fanatically loyal to their masters, both human and inhuman.',
		},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 3,
		page: 'p63'
	}
);
	// Damned Children
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 207,
		name: {
			'en-US' : 'Damned Children',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fear: When using their Mind Control power, the eyes of the Damned glow eerily; anyone seeing this happen must make a Guts check.\nKnow it All: Constant use of their Mind Reading power gives the Damned an almost encyclopedic knowledge of Earth lore. Treat all but the most rarified information as Common Knowledge for them.\nMind Control: The Damned can use the Puppet power at will, and get a +2 to their Spirit rolls when doing so.\nMind Link: The Damned are typically inserted on to Earth in packs of up to a dozen. These packs are in constant mental contact with each other, allowing them to share information instantaneously with each other: when one of them learns something, they all learn it. There is a drawback: if one of them becomes Shaken, the rest of them do, too. (This doesn\'t extend to Wounds, though!)\nMind Reading: By making an opposed Spirit roll against a target, the Damned can read their mind. With a normal success, they can scan surface thoughts; subsequent raises allow them to scan deeper.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : 'Small; Level Headed',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These are human children who have been genetically manipulated by the Grays either pre-conception or in utero. From birth there\'s no question that they\'re somehow... different. The Damned often serve as advance scouts for the alien invaders. They\'re all born with blonde hair and blue eyes.',
		},
		attributes: '{"agility":"d6","smarts":"d10","spirit":"d10","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Alien Science"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_REPAIR":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 1,
		image: 'http://2.bp.blogspot.com/-LL_YJa5gGNI/UCvzRkO2XmI/AAAAAAAAG0M/yWrnZzB8YXY/s400/damned.jpg',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '4',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Dark Stalker
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 208,
		name: {
			'en-US' : 'Dark Stalker',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor: Dark stalkers have thick spiny hides.\nBite: Str + d8\nCharge: Dark stalkers charge on their first round of attack, gaining +4 to hit and damageas they scramble down from their hidings.\nSize: -1\nWall Walking: Dark stalkers can climb walls with great skill at their normal Pace, though they cannot hang upside down.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Dark stalkers are small insectoid aliens that hang on the shadowy sides of ceilings, waiting for unsuspecting victims to pass below. When they spot prey, they race down from their hidings, and strike with lightning speed. Their prey almost never sees them coming before it\'s too late.\nBefore they strike, dark stalkers are almost totally silent. They emit an evil hissing sound when fighting that sounds almost like a riled serpent.\n',
		},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_GUTS":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Grays
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 209,
		name: {
			'en-US' : 'Grays',
		},
		gear: {
			'en-US' : '[{"name":"Hypodermic","description":"Str+d4. These are foot-long and wickedly barbed. If the Gray hits with a raise, the extra damage inflicted is caused by blood and other fluids (and sometimes solids!) being extracted from the target. Damage from a hypo is incredibly painful; those Shaken by one are at a -2 to their Spirit roll to recover."},{"name":"Implants","description":"These are small bits of metal implanted into victim during their time with the Grays. They allow the aliens to track the victim anywhere on Earth; they also transmit fear, pain, and feelings of paranoia and isolation back to the Grays for distillation."},{"name":"Probes","description":"These aren\'t used for gathering information, but for inflicting pain. They allow the Grays to torture a victim for days (or longer) without doing any permanent damage to them."}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Alien Intellect: Grays get +2 to any Smarts based opposed rolls against normal humans; their thought patterns are unpredictable, at best.\nFear: \nGarmonbozia: Grays gain power and sustenance from the pain and suffering of others. When injected into themselves, it both removes any Wounds they have and boosts their Agility and Strength to d10 for one hour. When injected into a human, they suffer incredible agony. They must make a Vigor roll at -2 immediately to avoid being Shaken. They must continue to make Vigor rolls every round for 3 +1d6 rounds or take a level of Fatigue and become Shaken again if they\'ve recovered. If reduced to Incapacitated by Fatigue, any additional Fatigue levels become Wounds instead.\nImmunity: Grays are immune to the mental powers of the Damned Children and Nordics.\nMind Wipe: Grays can wipe an individuals memories, up to 48 hours worth, with an opposed Smarts roll. The memories aren\'t really gone, though, just deeply suppressed. They still surface in the form of dreams and hallucinations, and can be recovered through extensive hypnotherapy.\nParalysis: Grays can induce paralysis in humans with their minds. Make an opposed Spirit roll; if the Gray wins, the target can\'t move for 3 rounds. Each Gray that acts in concert to hold the victim doubles the duration (6 rounds with 2 Grays, 12 rounds with 3, etc.); use the Cooperative Roll rules to have them assist. Engaging the paralysis counts as an action for the Grays, but maintaining it does not.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'These beings generally appear to be your archetypal aliens: gray skinned, tall and spindly, with huge black eyes and small slits for mouths, though they can take on other forms. These particular aliens do not come in peace.\nThey utilize a bizarre mixture of super-science and mysticism which to a large degree has baffled Earth scientists. More recently, they have completed development of the technology to distill pain and fear from Earth creatures as a source of techno-occult power. (Hence the rise in horrifying abductions and cattle mutilations.) At some point their supply of such power will reach critical mass; what happens then is up to you, but it certainly won\'t be anything good... The Grays find combat distasteful, and allow their servants to handle it for them.\n',
		},
		attributes: '{"agility":"d8","smarts":"d12","spirit":"d10","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Torture"}},"SKILL_NOTICE":{"value":"d10"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 1,
		image: 'http://www.coasttocoastam.com/cimages/var/ezwebin_site/storage/images/coast-to-coast/repository/photos/gray-alien-digital-sculpture/544100-1-eng-US/Gray-Alien-Digital-Sculpture_photo_medium.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Men in Black
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 210,
		name: {
			'en-US' : 'Men in Black',
		},
		gear: {
			'en-US' : '[{"name":"Vehicle - Edsel","description":"What\'s weirder than the MiB\'s driving Edsels? The fact that they look like they just drove off of the assembly line. A careful examination under the hood reveals that although the engine appears normal at first glance, it\'s put together completely wrong, and could never actually run... They\'re identical to Sports Cars (see SW:DE page 49)."},{"name":"Guns","description":"These are functionally identical to a Colt.45, and look approximately like one as well. Like their Edsels, if the inner workings are examined, there\'s no way these weapons should be able to actually fire."}]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Unshakable: MiB\'s ignore all Wound penalties and are never Shaken by attacks.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'There is considerable speculation on who these agents really work for; is it the Grays? Are they part of a government black op? Someone else, someone we haven\'t seen yet? Or do they work for no one but themselves, serving an agenda we can\'t hope to understand? Men in Black are known to appear wherever a great deal of psychic/supernatural activity has occurred, or is about to occur. They look more or less normal, but their features are uneven, and their voices project down into deep subharmonics. Their behavior is erratic, at best.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Alien Technology"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// Nordic
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 211,
		name: {
			'en-US' : 'Nordic',
		},
		gear: {
			'en-US' : '[]',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Know it All: Having grown up constantly reading the minds of those around them, the Nordicshave a vast array of knowledge to draw upon, allowing them to make a Common Knowledge roll for all but the most bizarre or trivial minformation.\nMind Control: Nordics can use the Puppet power at will, getting a +2 to their Spirit roll. They can use this power on up to three people at a time, though they can only activate it once a round. Unless all the targets are performing similar actions, the Nordic must make a Smarts roll each round to maintain control. If it fails, all the targets are freed.\nMind Reading: Nordics can scan the surface thoughts of anyone within their line of sight with a Spirit roll, getting a +2 to the roll. With a raise, they can read the targets recent memories, and with two raises they can read all their memories.\nTelekinesis: Nordics can use the Telekinesis power at will, lifting 120 pounds normally, or 600 on a raise of their Spirit roll.\n',
		},
		tags: {
			'en-US' : 'alien,aliens,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Contrary to conspiracy theory, the Nordics are not a separate alien race (they\'re alternately described as being in league with, or opposed to, the Grays). Rather, they are Damned Children who have grown to full size... and full power. Despite this power, they remain the thralls of the Grays. Nordics are all statuesque (averaging 6\'6"), with perfectly chiseled features, platinum blonde hair and pale blue eyes. With all their power, they\'re still more comfortable with others of their kind around, and are almost never encountered alone.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d12","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d12","special":{"en-US":"Alien Science"}},"SKILL_NOTICE":{"value":"d12"},"SKILL_PILOTING":{"value":"d8"},"SKILL_REPAIR":{"value":"d10"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 3,
		page: ''
	}
);
	// The Black Coach
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 199,
		name: {
			'en-US' : 'The Black Coach',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Armor: In earlier centuries or in fantasy games, the coach\'s wooden frame provides 2 points of armor. In a modern setting, increase the Toughness to 18(4). In either case, the coach\'s chassis is considered Heavy Armor thanks to its hellish origins.\nFear(-2): Anyone who opens the coach door sees a writhing mass of screaming, tormented spirits. They must make a Fear roll at -2.\nInvulnerable: If the coach is destroyed, the coachman either mounts a horse or fights on foot. It returns the following night along with the coachman until he returns to hell.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The black coach is a prison for souls awaiting delivery to whatever fate awaits them. Black curtains cover the windows, but occasionally the ghostly face of a coachman\'s victim can be seen frantically peering out.\n',
		},
		attributes: '',
		skills: '[]',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '0',
		toughness: '14',
		armor: '2',
		book: 3,
		page: 'p58'
	}
);
	// The Black Coachman
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 197,
		name: {
			'en-US' : 'The Black Coachman',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Reaping Scythe: The reaping scythe is only useful against sentient beings with souls. It causes no damage (but see below), but those hit by it must win an opposed Spirit roll with the coachman or be claimed. Those claimed fall into a torpor, alive but unresponsive until the coachman either escorts them to hell (or wherever he goes), or is defeated. If the former, the victims die. If the latter, they awake Exhausted but alive minutes later. If the coachman is made flesh (see Invulnerable, below), the scythe does not reap souls but causes Str+d10 damage.\nFear: Anyone seeing the creature suffers a Fear test.\nInvulnerable: The coachman can be driven off if wounded by magical weapons, but is not dead and appears the following night as usual. The only way to permanently slay the creature is to use a banish entity spell. Rather than banishing it, the spell makes it whole for 13 minutes. During this time it must fight its summoner (and his companions). If it is not defeated in that time, it fights on as usual. If it is defeated within 13 minutes, it is dragged screaming to the Abyss and does not return-until summoned again!\nUndead: +2 Toughness; +2 to recover from being Shaken; no additional damage from Called Shots; immune to disease and poison; does not suffer wound penalties.\n',
		},
		tags: {
			'en-US' : 'undead,',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'The black coachman has existed in one form or another for millennia. The Egyptians knew him as the "dark charioteer," the Romans called him the "black rider," and the Normans knew him as "death\'s wagoner." His current name stems from the Victorian era.\nThe coachman appears only when summoned via a summon demon spell. This is typically done as vengeance against someone the summoner believes has wronged him.\nOnce summoned and tasked, the coachman begins its long ride the very next night at 13 minutes after midnight. It rides the roads within 13 miles of where it was summoned and gathers the souls of all those it meets. The summoner can task it with reaping the souls of up to 13 named victims, whom it seeks unerringly, one per night. Along the way, the coachman may gather any other unfortunates he comes across except the summoner and up to 12 individuals he\'s named as protected.\n',
		},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_DRIVING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 3,
		page: 'p57-58'
	}
);
	// The Black Coachman's Horses
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 198,
		name: {
			'en-US' : 'The Black Coachman\'s Horses',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fleet Footed: Black horses roll a d8 for their running die.\nGhostly Gallop: Black horses run just above the surface of the ground, and do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6\nSize +3: Black horses weigh between 800 and 1000 pounds.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'Four stallions, with coats as black as pitch and eyes like burning coals, pull the coachman\'s black coach. There are no reins attaching them to the coach, only strands of inky blackness. They fight only if they or the coachman are attacked.\n',
		},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d8","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 3,
		page: 'p58'
	}
);
	// The Black Judge
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 200,
		name: {
			'en-US' : 'The Black Judge',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fearless: Immune to Fear and Intimidation.\nInvulnerable: The judge is invulnerable to all but the person who summoned him.\nDark Insight: If the summoner defeats the judge in single-combat, he may ask how to defeat a single supernatural creature. The judge imparts no other information- his sole cosmic purpose is to reveal such secrets. Some believe this is a sort of "safety net" for knowledge that might otherwise be lost so that no creature is every truly undefeatable.\nJudgement: If the summoner is defeated by the Black Judge in single combat, he must make an opposed Spirit roll with the judge plus or minus his own Charisma modifier. A Mean summoner, for example, subtracts -2 from his opposed roll. If the judge wins the character is cursed with doom. He may no longer spend Bennies to make Soak rolls until he summons another judge-and defeats him!\nWeakness (Summoner): The judge is vulnerable only to the one who summoned him.\n',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : '',
		},
		hindrances: {
			'en-US' : '',
		},
		blurb: {
			'en-US' : 'For those who know the ancient rituals necessary to summon him, the black judge can be an ally in the fight against evil. He takes the form of a cowled figure clad in robes of darkest night. Over his face he wears a vaguely skull-like mask. Although predominantly black, the mask has burning yellow eyes and fangs. What lies beneath the mask has never been revealed.\nOnce summoned, the judge usually takes a moment to hear the petitioner\'s plea, and may even converse with him. Before the judge grants any information, however, he must be defeated in single melee combat.\nThe judge is incredibly tough, but is vulnerable to whoever summoned him. Weighing whether or not the judge should be summoned should be a very difficult decision.\nIf the judge is defeated, the summoner may ask him how to defeat one supernatural creature-good or evil.\nIf the summoner is defeated, the judge renders judgement-see below.\n',
		},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d12","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '6',
		armor: '0',
		book: 3,
		page: 'p58-59'
	}
);
	// Typical Chosen Slayer
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 214,
		name: {
			'en-US' : 'Typical Chosen Slayer',
		},
		gear: {
			'en-US' : 'Sword (Str+d8), sharpened stake (Str+d4), crossbow with wooden bolts.',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Arcane Resistance, Champion, Danger Sense, Quick',
		},
		hindrances: {
			'en-US' : 'Heroic, Loyal',
		},
		blurb: {
			'en-US' : 'Many are called, but most die before they get a chance to prove themselves. Whether a chosen slayer is a feisty young maiden hunting vampires or a mean hombre packing state-of- the-art technology depends on your setting. What they all have in common is a calling to serve a higher power.\nThis stat block is for a chosen slayer at the start of his or her career.',
		},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d4"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '6',
		armor: '0',
		book: 3,
		page: 'p61'
	}
);
	// Veteran Chosen Slayer
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 215,
		name: {
			'en-US' : 'Veteran Chosen Slayer',
		},
		gear: {
			'en-US' : 'Sword (Str+d8), sharpened stake (Str+d4), crossbow with wooden bolts.',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : '',
		},
		tags: {
			'en-US' : '',
		},
		edges: {
			'en-US' : 'Acrobat, Arcane Resistance, Block, Champion, Combat Re exes, Command, Danger Sense, Dodge, Hard to Kill, Level Headed, Quick',
		},
		hindrances: {
			'en-US' : 'Heroic, Loyal',
		},
		blurb: {
			'en-US' : 'Many are called, but most die before they get a chance to prove themselves. Whether a chosen slayer is a feisty young maiden hunting vampires or a mean hombre packing state-of- the-art technology depends on your setting. What they all have in common is a calling to serve a higher power.\nSlayers who survive their first few years have learned how to handle themselves in battle against a variety of supernatural foes.',
		},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '10',
		toughness: '7',
		armor: '0',
		book: 3,
		page: 'p61'
	}
);



