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

	var currentBook = get_book_by_id(6);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// {"en-US":"Acolyte"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 205,
	 name: {
		 'en-US': 'Acolyte',
	},
	 gear: {
		 'en-US': '[{"name":"Armor +2","description":"In a fantasy setting, acolytes usually wear medium-weight armor, such as chain mail. In a more modern setting, they\'ll wear only their ceremonial robes."},{"name":"Weapons","description":"Acolytes typically carry swords, clubs, or maces; these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)"}]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.',
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
		book: 6,
		page: ''
	}
);
	// {"en-US":"Acolyte, Cultist"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 206,
	 name: {
		 'en-US': 'Acolyte, Cultist',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Fervor: Cultists can whip themselves up into a religious fervor. This takes a Spirit roll and a normal action. Once in this frenzy, they get a +2 to all Fighting and Guts rolls, and a +2 to any Smarts, Shooting, or Notice rolls. This fervor lasts until the combat ends.\nArmor+2:In a fantasy setting, acolytes usually wear medium-weight armor, such as chainmail. In a more modern setting, they\'ll wear only their ceremonial robes.\nWeapons: Acolytes typically carry swords,clubs, or maces;these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_GUTS":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d4"},"SKILL_KNOWLEDGE0":{"special":{"en-US":"Religion"},"value":"d8"}}',
		wildcard: 0,
		image: 'http://th08.deviantart.net/fs71/PRE/i/2012/316/5/a/cthulhu_cultist___lucca_comics_and_games_2012_by_cookingmaru-d5kra97.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 6,
		page: ''
	}
);
	// {"en-US":"Damned Children"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 207,
	 name: {
		 'en-US': 'Damned Children',
	},
	 gear: {
		 'en-US': '[]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Fear: When using their Mind Control power, the eyes of the Damned glow eerily; anyone seeing this happen must make a Guts check.\nKnow it All: Constant use of their Mind Reading power gives the Damned an almost encyclopedic knowledge of Earth lore. Treat all but the most rarified information as Common Knowledge for them.\nMind Control: The Damned can use the Puppet power at will, and get a +2 to their Spirit rolls when doing so.\nMind Link: The Damned are typically inserted on to Earth in packs of up to a dozen. These packs are in constant mental contact with each other, allowing them to share information instantaneously with each other: when one of them learns something, they all learn it. There is a drawback: if one of them becomes Shaken, the rest of them do, too. (This doesn\'t extend to Wounds, though!)\nMind Reading: By making an opposed Spirit roll against a target, the Damned can read their mind. With a normal success, they can scan surface thoughts; subsequent raises allow them to scan deeper.',
	},
	 tags: {
		 'en-US': 'alien,aliens,',
	},
	 edges: {
		 'en-US': 'Small; Level Headed',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'These are human children who have been genetically manipulated by the Grays either pre-conception or in utero. From birth there\'s no question that they\'re somehow... different. The Damned often serve as advance scouts for the alien invaders. They\'re all born with blonde hair and blue eyes.',
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
		book: 6,
		page: ''
	}
);
	// {"en-US":"Dark Stalker"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 208,
	 name: {
		 'en-US': 'Dark Stalker',
	},
	 gear: {
		 'en-US': '[]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Armor: Dark stalkers have thick spiny hides.\nBite: Str + d8\nCharge: Dark stalkers charge on their first round of attack, gaining +4 to hit and damageas they scramble down from their hidings.\nSize: -1\nWall Walking: Dark stalkers can climb walls with great skill at their normal Pace, though they cannot hang upside down.',
	},
	 tags: {
		 'en-US': 'alien,aliens,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Dark stalkers are small insectoid aliens that hang on the shadowy sides of ceilings, waiting for unsuspecting victims to pass below. When they spot prey, they race down from their hidings, and strike with lightning speed. Their prey almost never sees them coming before it\'s too late.\nBefore they strike, dark stalkers are almost totally silent. They emit an evil hissing sound when fighting that sounds almost like a riled serpent.',
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
		book: 6,
		page: ''
	}
);
	// {"en-US":"Grays"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 209,
	 name: {
		 'en-US': 'Grays',
	},
	 gear: {
		 'en-US': '[{"name":"Hypodermic","description":"Str+d4. These are foot-long and wickedly barbed. If the Gray hits with a raise, the extra damage inflicted is caused by blood and other fluids (and sometimes solids!) being extracted from the target. Damage from a hypo is incredibly painful; those Shaken by one are at a -2 to their Spirit roll to recover."},{"name":"Implants","description":"These are small bits of metal implanted into victim during their time with the Grays. They allow the aliens to track the victim anywhere on Earth; they also transmit fear, pain, and feelings of paranoia and isolation back to the Grays for distillation."},{"name":"Probes","description":"These aren\'t used for gathering information, but for inflicting pain. They allow the Grays to torture a victim for days (or longer) without doing any permanent damage to them."}]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Alien Intellect: Grays get +2 to any Smarts based opposed rolls against normal humans; their thought patterns are unpredictable, at best.\nFear: \nGarmonbozia: Grays gain power and sustenance from the pain and suffering of others. When injected into themselves, it both removes any Wounds they have and boosts their Agility and Strength to d10 for one hour. When injected into a human, they suffer incredible agony. They must make a Vigor roll at -2 immediately to avoid being Shaken. They must continue to make Vigor rolls every round for 3 +1d6 rounds or take a level of Fatigue and become Shaken again if they\'ve recovered. If reduced to Incapacitated by Fatigue, any additional Fatigue levels become Wounds instead.\nImmunity: Grays are immune to the mental powers of the Damned Children and Nordics.\nMind Wipe: Grays can wipe an individuals memories, up to 48 hours worth, with an opposed Smarts roll. The memories aren\'t really gone, though, just deeply suppressed. They still surface in the form of dreams and hallucinations, and can be recovered through extensive hypnotherapy.\nParalysis: Grays can induce paralysis in humans with their minds. Make an opposed Spirit roll; if the Gray wins, the target can\'t move for 3 rounds. Each Gray that acts in concert to hold the victim doubles the duration (6 rounds with 2 Grays, 12 rounds with 3, etc.); use the Cooperative Roll rules to have them assist. Engaging the paralysis counts as an action for the Grays, but maintaining it does not.',
	},
	 tags: {
		 'en-US': 'alien,aliens,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'These beings generally appear to be your archetypal aliens: gray skinned, tall and spindly, with huge black eyes and small slits for mouths, though they can take on other forms. These particular aliens do not come in peace.\nThey utilize a bizarre mixture of super-science and mysticism which to a large degree has baffled Earth scientists. More recently, they have completed development of the technology to distill pain and fear from Earth creatures as a source of techno-occult power. (Hence the rise in horrifying abductions and cattle mutilations.) At some point their supply of such power will reach critical mass; what happens then is up to you, but it certainly won\'t be anything good... The Grays find combat distasteful, and allow their servants to handle it for them.',
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
		book: 6,
		page: ''
	}
);
	// {"en-US":"Men in Black"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 210,
	 name: {
		 'en-US': 'Men in Black',
	},
	 gear: {
		 'en-US': '[{"name":"Vehicle - Edsel","description":"What\'s weirder than the MiB\'s driving Edsels? The fact that they look like they just drove off of the assembly line. A careful examination under the hood reveals that although the engine appears normal at first glance, it\'s put together completely wrong, and could never actually run... They\'re identical to Sports Cars (see SW:DE page 49)."},{"name":"Guns","description":"These are functionally identical to a Colt.45, and look approximately like one as well. Like their Edsels, if the inner workings are examined, there\'s no way these weapons should be able to actually fire."}]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Unshakable: MiB\'s ignore all Wound penalties and are never Shaken by attacks.',
	},
	 tags: {
		 'en-US': 'alien,aliens,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'There is considerable speculation on who these agents really work for; is it the Grays? Are they part of a government black op? Someone else, someone we haven\'t seen yet? Or do they work for no one but themselves, serving an agenda we can\'t hope to understand? Men in Black are known to appear wherever a great deal of psychic/supernatural activity has occurred, or is about to occur. They look more or less normal, but their features are uneven, and their voices project down into deep subharmonics. Their behavior is erratic, at best.',
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
		book: 6,
		page: ''
	}
);
	// {"en-US":"Nordic"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 211,
	 name: {
		 'en-US': 'Nordic',
	},
	 gear: {
		 'en-US': '[]',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Know it All: Having grown up constantly reading the minds of those around them, the Nordicshave a vast array of knowledge to draw upon, allowing them to make a Common Knowledge roll for all but the most bizarre or trivial minformation.\nMind Control: Nordics can use the Puppet power at will, getting a +2 to their Spirit roll. They can use this power on up to three people at a time, though they can only activate it once a round. Unless all the targets are performing similar actions, the Nordic must make a Smarts roll each round to maintain control. If it fails, all the targets are freed.\nMind Reading: Nordics can scan the surface thoughts of anyone within their line of sight with a Spirit roll, getting a +2 to the roll. With a raise, they can read the targets recent memories, and with two raises they can read all their memories.\nTelekinesis: Nordics can use the Telekinesis power at will, lifting 120 pounds normally, or 600 on a raise of their Spirit roll.',
	},
	 tags: {
		 'en-US': 'alien,aliens,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Contrary to conspiracy theory, the Nordics are not a separate alien race (they\'re alternately described as being in league with, or opposed to, the Grays). Rather, they are Damned Children who have grown to full size... and full power. Despite this power, they remain the thralls of the Grays. Nordics are all statuesque (averaging 6\'6”), with perfectly chiseled features, platinum blonde hair and pale blue eyes. With all their power, they\'re still more comfortable with others of their kind around, and are almost never encountered alone.',
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
		book: 6,
		page: ''
	}
);



