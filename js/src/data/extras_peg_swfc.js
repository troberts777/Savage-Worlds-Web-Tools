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

	var currentBook = get_book_by_id(2);

	savageWorldsExtrasBooksList = savageWorldsExtrasBooksList.concat(currentBook);




	// {"en-US":"Air Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 79,
	 name: {
		 'en-US': 'Air Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nEthereal: Air Elementals can maneuver through any non-solid surface. They can seep through the cracks in doors, bubble through water, and rush through sails.\nFlight: Air Elementals fly at a rate of 6&rdquo; with a Climb of 3. They may not run.\nInvulnerability: Immune to all non-magical attacks except fire.\nPush: The air elemental can use an action to push a single adjacent target 1d6&rdquo; directly away with a concentrated blast of air. The victim makes a Strength roll, with each success and raise reducing the amount moved by 1&rdquo; (to a minimum of 0).\nWind Blast: Air Elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d6 points of nonlethal damage.\nWhirlwind: As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at &ndash;2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form.',
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
		 'en-US': 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nAir elementals manifest as sentient whirlwinds.',
	},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p115-p116'
	}
);
	// {"en-US":"Arachnaurs"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 37,
	 name: {
		 'en-US': 'Arachnaurs',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), long sword (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Meager per 3 arachnaurs',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4.\nPoison (-2): The bite of an arachnaur causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds.\nSize +1: Arachnaurs measure 7\' in length.\nWebbing: Arachnaurs can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at &ndash;4.',
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
		 'en-US': 'Arachnaurs are a mix of human and spider in the same way centaurs are part human, part horse. They live in dense woodlands, spinning webs to catch unwary intruders. Despite being a sentient race, they have no qualms about eating the flesh of other sentients.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d12"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p100'
	}
);
	// {"en-US":"Archmage"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 124,
	 name: {
		 'en-US': 'Archmage',
	},
	 gear: {
		 'en-US': 'Various, but at least three magic items',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': 'Spells: Archmages have 40 Power Points and typically know armor, blast, bolt, detect/ conceal arcana, dispel, fly, light, puppet, and teleport.',
	},
	 tags: {
		 'en-US': 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,mage,',
	},
	 edges: {
		 'en-US': 'Arcane Background (Magic), Connections, Improved Rapid Recharge, New Power, Power Points, Wizard',
	},
	 hindrances: {
		 'en-US': 'Varies',
	},
	 blurb: {
		 'en-US': 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.',
	},
		attributes: '{"agility":"d6","smarts":"d12","spirit":"d10","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12+2"},"SKILL_STEALTH":{"value":"d6"},"SKILL_KNOWLEDGE0":{"special":{"en-US":"Arcana"},"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// {"en-US":"Assassin"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 38,
	 name: {
		 'en-US': 'Assassin',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Poison: The quickest way to kill someone is with poison. A typical poison requires a Vigor roll at &ndash;2 or take an automatic wound.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Alertness, First Strike, Thief',
	},
	 hindrances: {
		 'en-US': 'Varies',
	},
	 blurb: {
		 'en-US': 'Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STREETWISE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p100-p101'
	}
);
	// {"en-US":"Assassin, Master"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 39,
	 name: {
		 'en-US': 'Assassin, Master',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Poison: Master assassins use more deadly venoms in their trade. Victims must make a Vigor roll at &ndash;2 or die in 2d6 rounds.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Acrobat, Alertness, Block, First Strike, Marksman, Level Headed, Quick Draw, Thief',
	},
	 hindrances: {
		 'en-US': 'Varies',
	},
	 blurb: {
		 'en-US': 'Assassins are hired killers. They may be mysterious loners or belong to an organized guild. What they have in common is a lack of scruples about killing for money.',
	},
		attributes: '{"agility":"d12","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d12"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dmg35_gallery/DMG35_PG180_WEB.jpg',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p101'
	}
);
	// {"en-US":"Bandit Chief"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 41,
	 name: {
		 'en-US': 'Bandit Chief',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), various weapons',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Block, Combat Reflexes, Command',
	},
	 hindrances: {
		 'en-US': 'Greedy, Mean',
	},
	 blurb: {
		 'en-US': 'Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://cdn.obsidianportal.com/images/315512/akiyoko.jpg',
		charisma: '-2',
		pace: '6',
		parry: '8',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p102'
	}
);
	// {"en-US":"Bandit"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 40,
	 name: {
		 'en-US': 'Bandit',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), various weapons',
	},
	 treasure: {
		 'en-US': 'Meager per 5 bandits',
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
		 'en-US': 'Greedy, Mean',
	},
	 blurb: {
		 'en-US': 'Bandits are outlaws, earning a living by raiding small settlements or waylaying travelers. Not all bandits are necessarily evil. Some may have been wrongly outlawed or forced to flee their homes by an invading force. Others may be Robin Hood-type figures, fighting against an unjust system.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/images/315512/akiyoko.jpg',
		charisma: '-2',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p101'
	}
);
	// {"en-US":"Bargest"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 43,
	 name: {
		 'en-US': 'Bargest',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d6.\nCurse: The first time the characters see an individual bargest, they must make a Spirit roll at &ndash;2 or suffer a curse. Those who fail lose all their bennies and cannot earn any more for the remainder of the session. If a character has no bennies left when he sees the bargest, he suffers a &ndash;2 penalty to all trait rolls for the rest of the session instead.\nGo fot the Throat: Bargests instinctively go for an opponent&rsquo;s soft spots. With a raise on its attack roll, it hits the target&rsquo;s most weakly-armored location.\nFleet-Footed: Bargests roll a d10 instead of d6 when running.\nSize +1: Bargests average 7&rsquo; in length and stand as much as 4&rsquo; high.',
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
		 'en-US': 'Bargests are huge, black dogs. It is said that anyone who sees a bargest is destined to die soon.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://vampirewarzone.yolasite.com/resources/BARGH.jpg',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p102-103'
	}
);
	// {"en-US":"Basilisk"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 42,
	 name: {
		 'en-US': 'Basilisk',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile around lair',
	},
	 abilities: {
		 'en-US': 'Death Gaze: Victims of the basilisk do not have to meet its gaze to be affected by its deadly power. As an action, the basilisk can stare at any creature it can see. Opponents must make a Vigor roll opposed by the basilisk&rsquo;s Spirit or suffer an automatic wound.\nPoison Blood: A basilisk&rsquo;s blood is highly toxic. When it receives a wound, every adjacent creature must make an Agility roll to avoid the deadly spray. Those who fail take a wound.\nSize -2: Basilisks measure only 12&rdquo; in length.\nSmall: Opponents must subtract &ndash;2 from attack rolls against the basilisk due to its small size.',
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
		 'en-US': 'Called the king of serpents because of its head crest, the gaze of the basilisk can instantly kill. Even its blood is deadly to the touch. The cockatrice is a form of basilisk, but lacks the poisonous blood.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d12+2","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.gods-and-monsters.com/images/mythical-creatures-basilisk.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p102'
	}
);
	// {"en-US":"Bee, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 44,
	 name: {
		 'en-US': 'Bee, Giant',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Flight: Giant bees have a Flying Pace of 6" and Climb of 3".\nPoison: Any creature Shaken or wounded by a sting attack must make a Vigor roll or take a wound.\nSize -1: Giant bees are 3&rsquo; long.\nSting: Str+d4',
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
		 'en-US': 'Giant bees are considerably larger than regular bees but fortunately do not form large swarms.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://farm7.staticflickr.com/6120/6263370588_7162b81b4a_z.jpg',
		charisma: '0',
		pace: '3',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// {"en-US":"Bird of Prey"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 45,
	 name: {
		 'en-US': 'Bird of Prey',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Blind: When attacking large prey (such as characters), birds of prey go for the eyes. If the bird scores a raise on its Fighting roll, it has hit the character&rsquo;s face. The character must make an Agility roll. On a failure, he suffers the One Eye Hindrance until his wounds heal. A roll of 1, regardless of the Wild Die, he suffers the Blind Hindrance instead.\nClaws: Str+d6\nFlying: Flying Pace 8".\nSize: Birds of prey measure up to 2&rsquo; in height.\nSmall: Attackers suffer a &ndash;2 penalty to attack rolls because of the beast&rsquo;s size.',
	},
	 tags: {
		 'en-US': 'animal,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Birds of prey may not be big, but their talons can rip through flesh with ease. The bird of prey could be used for eagles, hawks, and any hunting birds.',
	},
		attributes: '{"agility":"d10","smarts":"d4 (A)","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d12+4"}}',
		wildcard: 0,
		image: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/red-tailed-hawk_681_600x450.jpg',
		charisma: '0',
		pace: '-',
		parry: '5',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// {"en-US":"Black Knight"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 61,
	 name: {
		 'en-US': 'Black Knight',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Black plate armor and a closed helm.\nBalefire Weapon: Great sword (Str+d10) and lance (Str+d10), if mounted. Anyone struck by a weapon, whether injured or not, has a chance of catching fire.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nElite Soldiers: Black knights have the following Combat Edges: Combat Reflexes, Improved Block, Improved Frenzy, Improved Sweep, and Level Headed.\nSize +1: Black knights stand over 7&rsquo; tall.\nSummon Reinforcements: Once per day a black knight can summon forth 1d6 demonic soldiers per success and raise on a Spirit roll. The minions appear within 6&rdquo; of the knight.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Clad in jet-black plate armor and armed with weapons swathed in balefire, black knights are the elite troops of the demon lords. Beneath their armor is a mummified corpse with burning green eyes.\nThey most often serve as unit commanders in demonic armies, but can sometimes be found as bodyguards for powerful, evil wizards and priests. Many ride nightmares.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Battle"}},"SKILL_RIDING":{"value":"d10"}}',
		wildcard: 0,
		image: 'http://www.pixel77.com/wp-content/uploads/2010/03/dark_knight_by_zeo_x.jpg',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p109'
	}
);
	// {"en-US":"Boar"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 46,
	 name: {
		 'en-US': 'Boar',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Berserk: When a boar is Shaken, it goes berserk. It gains +2 to all Fighting and Strength rolls and its Toughness, but Parry is reduced by 2.\nGore: If a boar can charge at least 6&rdquo; before attacking, it adds +4 to damage.\nTusks: Str+d4',
	},
	 tags: {
		 'en-US': 'animal,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Wild boars are hunted for their rich meat. They are tenacious fighters, especially when wounded.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.pennmac.com/blog/wp-content/uploads/2011/12/wild-boar-festival.jpeg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p103'
	}
);
	// {"en-US":"Caveman Chieftan"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 52,
	 name: {
		 'en-US': 'Caveman Chieftan',
	},
	 gear: {
		 'en-US': 'Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Brawny, Combat Reflexes, Sweep',
	},
	 hindrances: {
		 'en-US': 'All Thumbs, Mean',
	},
	 blurb: {
		 'en-US': '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes&mdash;the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.\nCave men communities are often lead by a chieftain. Typically, he is the largest and strongest individual in the tribe.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '7/8',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p106'
	}
);
	// {"en-US":"Caveman Shaman"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 53,
	 name: {
		 'en-US': 'Caveman Shaman',
	},
	 gear: {
		 'en-US': 'Flint spear (Str+d6; Parry +1; Reach +1)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Powers: Cave men shamans have 15 Power Points and know the following powers: bolt, boost/lower trait, fear, and telekinesis.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': 'All Thumbs, Mean',
	},
	 blurb: {
		 'en-US': '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes&mdash;the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.\nMost cave man tribes have at least one shaman in their number. He communes with the spirits and foretells the omens.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p106-p107'
	}
);
	// {"en-US":"Caveman Warrior"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 51,
	 name: {
		 'en-US': 'Caveman Warrior',
	},
	 gear: {
		 'en-US': 'Club (Str+d4) or flint spear (Str+d6; Parry +1; Reach 1)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Brave, Combat Reflexes',
	},
	 hindrances: {
		 'en-US': 'All Thumbs, Mean',
	},
	 blurb: {
		 'en-US': '"Cave man" is a generic term used to describe a member of a primitive, non- technological society. Some cave men actually live in caves, whereas others inhabit deserts, jungles, or swamps, living in mud or reed huts. They lack an organized society, typically being led by a chief who is advised by one or more shamans.\nCave man culture focuses on hunting and warring with rival tribes&mdash;the latter being typically for females. Some tribes fear outsiders, using force to drive them away. Others welcome limited contact, swapping furs and meat for metal tools. Some are cannibals, openly welcoming strangers, only to turn on them and eat them.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '6',
		parry: '6/7',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p106'
	}
);
	// {"en-US":"Centaur"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 54,
	 name: {
		 'en-US': 'Centaur',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager per 3 centaurs',
	},
	 abilities: {
		 'en-US': 'Fleet Footed: Centaurs roll a d8 when running, instead of a d6.\nHooves: Str.\nSize +2: Centaurs are the same size as riding horses.',
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
		 'en-US': 'Centaurs have the upper body of a human and the lower body of a horse. In some settings they are reclusive philosophers. In others, they are nomads, wandering the plains and forests in herds.',
	},
		attributes: '{"agility":"d6","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SURVIVAL":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://media1.shmoop.com/images/mythology/characters/centaurs/chiron-centaur-achilles.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '9',
		armor: '1',
		book: 2,
		page: 'p107'
	}
);
	// {"en-US":"Centipede, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 55,
	 name: {
		 'en-US': 'Centipede, Giant',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +3: Thick chitinous armor.\nBite: Str+d8, AP 4.\nLarge: Attackers add +2 when attacking a giant centipede due to their size.\nPoison: Victims must make a Vigor roll at &ndash;2 or suffer an automatic wound.\nSize +4: Giant centipedes grow up to 24\' long.',
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
		 'en-US': 'Measuring up to eight yards in length and covered in black chitinous armor, giant centipedes are predominantly found underground or in tropical jungles. Their powerful mandibles can pierce most armor and deliver a lethal poison.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '13',
		armor: '0',
		book: 2,
		page: 'p107'
	}
);
	// {"en-US":"Changeling"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 62,
	 name: {
		 'en-US': 'Changeling',
	},
	 gear: {
		 'en-US': 'As last victim',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Change Form: A changeling can assume the form of the last person it has killed. This requires an action and a Smarts roll at &ndash;2. Changing back to their natural form requires a Smarts roll. Changelings only assume the physical form&mdash;clothing and equipment must be taken from the corpse.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear -2: Anyone who sees a changeling in its natural form must make a Fear check at &ndash;2.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'In their natural form, changelings resemble skinless humans devoid of any distinguishing features, save for their gruesome appearance. Changelings have the ability to assume the exact form of their victims, taking on their mannerisms and retaining their memories.\nRegardless of the form they assume, they keep their own attributes. Thus, a changeling who assumes the form of a human with a d10 Strength may look physically impressive but lacks the muscle power of the original. However, a changeling absorbs its victim&rsquo;s memories. It gains all its victim&rsquo;s skills at one die type lower (minimum d4) unless its own skills are higher&mdash;in which case it retains its own levels.\nChangelings are used as infiltrators and assassins.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p109'
	}
);
	// {"en-US":"Chimera"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 56,
	 name: {
		 'en-US': 'Chimera',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1), bow (Range 12/24/48, Damage 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Bite/Claw: Str+d6.\nFiery Breath: Chimeras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at &ndash;2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A chimera may not attack with its claws or bite in the same round it breathes fire.\nImproved Frenzy: If a chimera does not use its Fiery Breath Ability, it may make an additional Fighting attack with no penalty.\nSize +2: Chimera weigh over 500 pounds.\nTwo Fisted: A chimera may attack with its claws and bite in the same round with no multi-action penalty.',
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
		 'en-US': 'A chimera has the head of a lion, the body of a goat, and the tail of a dragon, complete with a dragon&rsquo;s head at the tip. The creature&rsquo;s leonine head can breathe fire. A few chimera can also breathe fire from their dragon-headed tail.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://img2.wikia.nocookie.net/__cb20120615060217/dragonsdogma/images/0/06/Chimera01.png',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p107'
	}
);
	// {"en-US":"Citizen"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 57,
	 name: {
		 'en-US': 'Citizen',
	},
	 gear: {
		 'en-US': 'Knife (Str+d4), improvised weapons (Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager for every 5 citizens, Worthwhile for crafters, merchants, and the like',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'farmer,crafter,blacksmith,normal,dude,guy,waitress,bartender,average,joe,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': '"Citizens" covers everything from farmers to crafters.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Trade"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d4"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// {"en-US":"Collector"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 63,
	 name: {
		 'en-US': 'Collector',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d6. The claws of a collector ignore all mundane and magical Armor.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear -2: Collectors exude an aura of terror. Anyone seeing one must make a Fear roll at &ndash;2.\nImproved Arcane Resistance: +4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers.\nSingle Minded: Collectors are not easily swayed from their goal. They receive a +2 bonus to resist Tests of Will.\nSize +1: These cowled demons stand over 7&rsquo; tall.\nSoul Drain: The uncowled stare of a collector can literally rip the soul from a living being. Fortunately, they usually reserve this fate for their quarry. To use this Ability, the collector must grapple its foe, at which point it removes its cowl and forces its prey to stare into its demonic eyes. The victim must make an opposed Spirit roll or die instantly.\nUnnatural Senses: A collector can detect arcana as if it were part of its normal vision. It also ignores all pentalties for bad lighting, including complete darkness\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Mortals sometimes make deals with powerful demon lords in the hope of accruing power&mdash;sometimes they try to renege on the deal. When this happens, the demon lords despatch a demon whose task it is to drain souls and return them to Hell. Collectors are sometimes used as common assassins, but they are at best halfhearted in this role, finding it beneath them.\nAlthough powerful, they are not interested in wanton destruction&mdash;all that matters to them is their quarry. Of course, any creature foolish enough to stand in its way is slaughtered without mercy.\nCollectors always wear black, heavy cowls. They reveal their face only to those they are hunting, for it is said that to gaze on one is to lose one&rsquo;s soul.\nBeneath their cowls, collectors resemble bipedal vultures with rotting flesh. Their eyes are empty hollows, in which a vortex of balefire swirls.',
	},
		attributes: '{"agility":"d10","smarts":"d8","spirit":"d12","strength":"d12","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d12"},"SKILL_TRACKING":{"value":"d12+2"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p110'
	}
);
	// {"en-US":"Common Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 89,
	 name: {
		 'en-US': 'Common Giant',
	},
	 gear: {
		 'en-US': 'Skins or furs (+1), Large maul or tree trunk (Str+d10, carried in one hand), thrown rock (Range: 6/12/24, Damage: 3d6)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Clueless: Giants receive a &ndash;2 penalty to Common Knowledge rolls.\nImproved Sweep: Giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against giants due to their size.\nSize +5: Giants are over 20\' tall.',
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
		 'en-US': 'Giants come in several forms, but all share two common features&mdash;they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nDepending on where they are found, these hulking brutes are known as forest giants, hill giants, mountain giants, or simply as giants. There are slight differences between the breeds, but not enough to separate them.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+5","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '13',
		armor: '1',
		book: 2,
		page: 'p120'
	}
);
	// {"en-US":"Common Mercenary"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 130,
	 name: {
		 'en-US': 'Common Mercenary',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), various weapons',
	},
	 treasure: {
		 'en-US': 'Meager per 5 soldiers',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '-',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p134'
	}
);
	// {"en-US":"Common Mercenary"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 131,
	 name: {
		 'en-US': 'Common Mercenary',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), open helm (+3), various weapons',
	},
	 treasure: {
		 'en-US': 'Meager per 3 soldiers',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '-',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.\nHardened by battle, these tough combatants charge more for their services. As with common mercenaries, their reputation and weapons vary considerably.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p135'
	}
);
	// {"en-US":"Corpse Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 97,
	 name: {
		 'en-US': 'Corpse Golem',
	},
	 gear: {
		 'en-US': 'Typically a long sword (Str+d8)',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nArmor +1: Hard skin and muscle.\nBerserk: Corpse golems have the Berserk Edge.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFear: Characters seeing a corpse golem must make a Fear check. \nFearless: Golems are immune to Fear and Intimidation.\nSlow: Corpse golems have a Pace of 4 and roll a d4 for their running die.',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nThe vilest golems are those crafted from the body parts of corpses. Depending on the creator, the golem may be stitched together from the parts of one species or multiple species. Some corpse golems utilize animal parts.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img4.wikia.nocookie.net/__cb20100814131953/dragonage/images/4/4b/Harvester_golem.png',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p123'
	}
);
	// {"en-US":"Corrupt Naga"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 139,
	 name: {
		 'en-US': 'Corrupt Naga',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4\nConstrict: A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty.\nHypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nMagic: Corrupt nagas practice arcane magic. They have 30 Power Points and know the following powers: armor, bolt, boost/lower trait, burrow, deflection, detect/ conceal arcana, dispel, fear, invisibility, obscure, quickness, and speak language. They retain this ability in human form.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nShape Change: As an action, a naga can change into female human form with a Smarts roll at &ndash;2. Changing back into naga form requires a Smarts roll.\nSize+3: A naga is 15&rsquo; long and about a foot in diameter.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.',
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
		 'en-US': 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha&rsquo;s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.\nIn a fantasy setting, there is no reason why a naga cannot follow the gods of evil. Unlike guardian naga, who are forbidden from joining the priesthood and learning magic, corrupt naga are powerful spellcasters. Some even go so far as to form their own cults, with the naga as living gods.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d4"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// {"en-US":"Court Jester"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 144,
	 name: {
		 'en-US': 'Court Jester',
	},
	 gear: {
		 'en-US': 'Stick (Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Knowledgeable: Jesters are expected to be well versed in many topics. They get +2 to all Common Knowledge rolls.',
	},
	 tags: {
		 'en-US': 'noble',
	},
	 edges: {
		 'en-US': 'Acrobat, Ambidextrous, Strong Willed',
	},
	 hindrances: {
		 'en-US': 'Various, but often some sort of physical affliction',
	},
	 blurb: {
		 'en-US': 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nDespite often being dwarves or hunchbacks (or both), jesters are more than just comical entertainment for the nobility. They have their lord&rsquo;s ear, are privy to his most secret affairs, can get away with insulting powerful guests, and conceal great wisdom in their seemingly nonsensical riddles and japes.',
	},
		attributes: '{"agility":"d10","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// {"en-US":"Courtier"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 143,
	 name: {
		 'en-US': 'Courtier',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'noble',
	},
	 edges: {
		 'en-US': 'Charismatic',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nCourtiers are more than just servants&mdash; they are advisors and often hold positions of importance within the court. Unless the characters know a noble personally, most dealings are conducted through a trusted courtier, typically a seneschal.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_RIDING":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p139'
	}
);
	// {"en-US":"Crab, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 58,
	 name: {
		 'en-US': 'Crab, Giant',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +3: Giant crabs have thick shells.\nClaws: Str+d6.\nSize +1: These creatures weigh over 400 pounds.',
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
		 'en-US': 'Giant crabs live on beaches, hiding under the sand ready to leap out at passing prey.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p108'
	}
);
	// {"en-US":"Crocotta"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 59,
	 name: {
		 'en-US': 'Crocotta',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair.',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d10, AP 10\nFleet Footed: The crocotta rolls a d10 when running instead of a d6.\nSize -1: A crocotta is the same size as a dog.',
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
		 'en-US': 'The crocotta looks like a wolf except for its jaws, which are as long as a crocodile&rsquo;s. Its jaws are powerful enough to bite through almost any material.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// {"en-US":"Cyclops"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 60,
	 name: {
		 'en-US': 'Cyclops',
	},
	 gear: {
		 'en-US': 'Big club (Str+d10)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Lightning Bolts: A cyclops may throw a lightning bolt as an action. Range: 5/10/20; Damage: 3d6; Small Burst Template.\nOne Eye: &ndash;2 to all trait rolls involving depth perception, such as Throwing.\nSize +2: Cyclops stand over 8&rsquo; tall.',
	},
	 tags: {
		 'en-US': 'giant,giants,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Cyclopses are a race of one-eyed giants. Despite raising herds of goats, they have a taste for human flesh. In some legends, they crafted lightning bolts for the gods.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12+3","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.cartuneland.com/cyclops1.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p108'
	}
);
	// {"en-US":"Demonic Soldier"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 64,
	 name: {
		 'en-US': 'Demonic Soldier',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Berserk: Demonic soldiers can go berserk at will.\nBite/Claws: Str+d6.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nSize -1: Demonic soldiers are rarely larger than 4&rsquo; tall.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Making up the bulk of the legions of Hell are demonic soldiers, small, feral creatures with sharp teeth and claws and only a limited capacity for reasoning. They attack with berserk fury, ripping their prey to shreds with howls of glee. Demon lords use them in &ldquo;human-wave&rdquo; tactics and rarely bother to provide them with armor or weapons.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p110-111'
	}
);
	// {"en-US":"Dire Wolf"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 68,
	 name: {
		 'en-US': 'Dire Wolf',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d6\nGo for the Throat: Wolves instinctively go for an opponent&rsquo;s soft spots. With a raise on its attack roll, it hits the target&rsquo;s most weakly-armored location.\nFleet-Footed: Dire wolves roll d10s instead of d6s when running.',
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
		 'en-US': 'Dire wolves are very large and feral wolves often used by orcs as attack dogs. They may also be found roaming in packs in the deepest, darkest woods.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p112'
	}
);
	// {"en-US":"Dissolver"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 69,
	 name: {
		 'en-US': 'Dissolver',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager.',
	},
	 abilities: {
		 'en-US': 'Acid: Str+d6\nCamouflage: When lying still, dissolvers gain +4 to Stealth rolls.\nEnvelope: If a dissolver succeeds in a Fighting roll it has enveloped part of its target. Each round the victim remains enveloped, he suffers 2d6 damage. All equipment permanently loses 1 point of Toughness (Protection for armor) per round until it reaches zero, at which point it is destroyed. Trying to escape from a grapple requires a Strength roll at &ndash;6. A dissolver may only envelope one foe at a time, regardless of its size.\nPseudopod: A dissolver can extend a single pseudopod out to 1". Damage 2d6.',
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
		 'en-US': 'These vile terrors are black, amorphous blobs whose secretions are highly acidic. Their favorite tactic is to grapple their prey, subjecting them to constant attack.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p112'
	}
);
	// {"en-US":"Dragon Man Soldier"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 71,
	 name: {
		 'en-US': 'Dragon Man Soldier',
	},
	 gear: {
		 'en-US': 'Scimitar (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Meager.',
	},
	 abilities: {
		 'en-US': 'Armor+2: Scaly hide.\nBite/Claws: Str+d4.\nFiery Breath: Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only.\nFlight: Dragon men have leathery wings with a Flying Pace of 8" and a Climb of 4"',
	},
	 tags: {
		 'en-US': 'dragon,dragon men,',
	},
	 edges: {
		 'en-US': 'Brave, Combat Reflexes, Frenzy',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes&mdash;warriors and sorcerers.\nThey are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons .',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://suptg.thisisnotatrueending.com/archive/10417239/images/1276223355554.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p114'
	}
);
	// {"en-US":"Dragon Man Sorcerer"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 72,
	 name: {
		 'en-US': 'Dragon Man Sorcerer',
	},
	 gear: {
		 'en-US': 'Scimitar (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Meager.',
	},
	 abilities: {
		 'en-US': 'Armor+2: Scaly hide.\nBite/Claws: Str+d4.\nFiery Breath: Dragon men can spit balls of fire. This works as the bolt power using Shooting to aim the fireballs. The Ability is innate rather than magical. Dragon men have 15 Power Points for this purpose only.\nFlight: Dragon men have leathery wings with a Flying Pace of 8" and a Climb of 4"\nPowers: Dragon men sorcerers have 30 Power Points and know the following powers: armor, blast, deflection, detect/conceal arcana, dispel, fear, healing, obscure, shape change, smite, and speak language.',
	},
	 tags: {
		 'en-US': 'dragon,dragon men,',
	},
	 edges: {
		 'en-US': 'Combat Reflexes, Frenzy',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Dragon men are bipedal dragons, slightly taller than an average human. Scholars have long debated whether they are a natural species, a mutated dragon embryo, or the result of some ancient arcane experiment. The race consists of two castes&mdash;warriors and sorcerers.\nThey are sometimes found working with true dragons, and it seems beyond coincidence that the color of their scales usually matches that of their dragon lord. If you are using the Variant Dragon options (p113), dragon men can also have different breath weapons.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://i42.tinypic.com/2qjayk5.png',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p114'
	}
);
	// {"en-US":"Dragon"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 70,
	 name: {
		 'en-US': 'Dragon',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Three Treasure Troves in lair',
	},
	 abilities: {
		 'en-US': 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear-2: Anyone who sees a mighty dragon must make a Fear check at &ndash;2.\nFiery Breath: Dragons breathe fire using the Cone Template. Every target within this cone may make an Agility roll at &ndash;2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. A dragon may not attack with its claws or bite in the round it breathes fire.\nFlight: Dragons have a Flying Pace of 24&rdquo; and Climb 0.\nHardy: The creature does not suffer a wound from being Shaken twice.\nHuge: Attackers add +4 to their Fighting or Shooting rolls when attacking a dragon due to its massive size.\nImproved Frenzy: If a dragon does not use its Fiery Breath ability, it may make two Fighting attacks with no penalty.\nLevel Headed: Act on best of two cards.\nSize +8: Dragons are massive creatures. This version is over 40&rsquo; long from nose to tail, and weighs well over 30,000 pounds.\nTail Lash: The dragon can sweep all opponents in its rear facing in a 3&rdquo; long by 6&rdquo; wide square. This is a standard Fighting attack, and damage is equal to the dragon&rsquo;s Strength &ndash;2.',
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
		 'en-US': 'This dragon is the standard fire-breathing variety common to European mythology. If you want to use different types of dragons in your game, the Variant Dragons sidebar (p113) contains some ideas on how to make them different.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d12+9","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 1,
		image: 'http://www.gamefront.com/wp-content/uploads/2008/12/red-dragon.jpg',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '20',
		armor: '4',
		book: 2,
		page: 'p112-p113'
	}
);
	// {"en-US":"Drake"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 73,
	 name: {
		 'en-US': 'Drake',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Armor+4: Scaly hide.\nClaws/Bite: Str+d8.\nFear: Drakes are frightening creatures to behold.\nFiery Breath: Drakes breathe fire using the Cone Template. Every target within this cone may make an Agility roll at &ndash;2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire (see Fire). A drake may not attack with its claws or bite in the round it breathes fire.\nLarge: Attackers add +2 to their attack rolls when attacking a drake due to its large size.\nSize +5: Drakes are over 20&rsquo; long from snout to tail, and weigh in at over 3000 pounds.\nTail Lash: A drake can sweep all opponents in its rear facing in a 3&rdquo; long by 6&rdquo; wide rectangle. This is a standard Fighting attack, and damage is equal to the creature&rsquo;s Strength &ndash;2.',
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
		 'en-US': 'Drakes are non-flying dragons with animal intelligence (rather than the more human-like sentience of true dragons). They are much more aggressive in direct combat than their distant cousins, however.',
	},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d10","strength":"d12+6","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://img2.wikia.nocookie.net/__cb20080714125534/finalfantasy/images/5/52/Greater_Drake_ffx-2.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '17',
		armor: '4',
		book: 2,
		page: 'p114'
	}
);
	// {"en-US":"Dryad"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 74,
	 name: {
		 'en-US': 'Dryad',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Animate Tree: A dryad may animate her tree as a war tree (see War Tree). This costs 20 Power Points and has a fixed duration of one hour.\nAttractive: Dryads resemble attractive human females, but often have a green or brown tint to their skin.\nMagic: Dryads have 30 Power Points and know the following powers: armor (bark), barrier (wall of thorns), beast friend, deflection (tree branches get in the way), entangle, healing, shape change, and stun.\nTree Bond: Dryads share their soul with a particular tree. They must remain within 36&rdquo; of the tree or their magic does not work. If the tree dies or becomes unhealthy, so does the dryad (and vice versa).',
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
		 'en-US': 'Dryads are nature spirits, specifically those of the woodlands. Shy by nature, they prefer to watch intruders, only making their presence felt if the need arises. They get along well with elves and other woodland folk of good character.\nThough they are usually reluctant to deal with outsiders dryads, have been known to administer aid to kind souls in great need.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p115'
	}
);
	// {"en-US":"Dwarf"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 75,
	 name: {
		 'en-US': 'Dwarf',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), open helm (+3), battle axe (Str+d8), medium shield (+1 Parry), throwing axes (Range: 3/6/12, Damage: Str+d6)',
	},
	 treasure: {
		 'en-US': 'Meager.',
	},
	 abilities: {
		 'en-US': 'Low Light Vision: Dwarves penalties for Dim and Dark lighting.',
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
		 'en-US': 'Dwarves are common in mountains, where they live in vast underground cities. The statistics presented here are for a typical dwarf warrior.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Stonecraft"}},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '7',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p115'
	}
);
	// {"en-US":"Earth Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 76,
	 name: {
		 'en-US': 'Earth Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +4: Rocky hide.\nBash: Str+d6\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.',
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
		 'en-US': 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nEarth elementals manifest as five-foot tall, vaguely man-shaped collections of earth and stone. Though amazingly strong, they are also quite slow and ponderous.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p116'
	}
);
	// {"en-US":"Elephant, War"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 80,
	 name: {
		 'en-US': 'Elephant, War',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick Hide\nHardy: War elephants do not suffer a wound from being Shaken twice.\nHeadbutt: Str+d6. Heavy Weapon. A war elephant cannot headbutt anything of Size +3 or smaller.\nHuge: Attackers have +4 to attack rolls against these beasts due to their size.\nPlatform: The wooden platform provides Light Cover to anyone riding in it and grants +2 Armor.\nSize +8: War elephants weigh over 20,000 pounds.\nTrample: As long as the air elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check and if the air elemental wins then its foe is pulled into the swirling maelstrom of its body. While trapped, the target is at &ndash;2 on all rolls including damage, to hit and Strength rolls to free himself. The air elemental cannot move as long as it wants to keep foes trapped inside its form.\nTusks: Str+d10. The tusks of a war elephant are fitted with spiked, metal caps.',
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
		 'en-US': 'War elephants are larger than standard bull elephants and are bred purely for battle. In war, they carry a wooden platform on their back, housing the steersman and three soldiers.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+8","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p117'
	}
);
	// {"en-US":"Elf"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 81,
	 name: {
		 'en-US': 'Elf',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), long sword (Str+d8), long bow (Range: 15/30/60, Damage: 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager per 3 warriors.',
	},
	 abilities: {
		 'en-US': 'Low Light Vision: Elves ignore penalties for Dim and Dark lighting.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Combat Reflexes, Marksman, Woodsman',
	},
	 hindrances: {
		 'en-US': 'All Thumbs, Cautious',
	},
	 blurb: {
		 'en-US': 'Elves commonly inhabit forests, living in tune with nature. The statistics presented here are for a typical elf warrior.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p117'
	}
);
	// {"en-US":"Fire Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 77,
	 name: {
		 'en-US': 'Fire Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Fire Elementals are immune to all non-magical attacks, but suffer 1d6 damage when doused in at least a gallon of water, +2 per additional gallon.\nFiery Touch: Str+d6; chance of catching fire.\nFlame Strike: Fire elementals can project a searing blast of flame using the Cone Template. Characters within the cone must beat the spirit&rsquo;s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire.',
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
		 'en-US': 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nFire elementals appear as man-shaped flame.',
	},
		attributes: '{"agility":"d12+1","smarts":"d8","spirit":"d8","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p116'
	}
);
	// {"en-US":"Fire Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 90,
	 name: {
		 'en-US': 'Fire Giant',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), large great axe (Str+d12, carried in one hand), heated thrown rock (Range: 5/10/20, Damage: 3d6+2)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Fire Aura: Fire giants radiate fearsome heat. At the end of movement, all adjacent foes suffer 2d6 damage.\nImmunity (Heat): Fire giants take no damage from fire, including arcane powers with a fire or heat trapping.\nImproved Sweep: Fire giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against fire giants due to their size.\nSize +5: Fire giants are over 20\' tall.\nWeakness (Cold): Magical cold and ice attacks cause +4 damage. Nonmagical cold has no additional effect.',
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
		 'en-US': 'Giants come in several forms, but all share two common features&mdash;they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nFire giants prefer to dwell in hot places, such as near volcanoes or in the middle of scorching-hot deserts. Their ruddy complexion and flame-red hair makes them easy to identify.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.wizards.com/dnd/images/dun200_firegiant.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '14',
		armor: '2',
		book: 2,
		page: 'p120'
	}
);
	// {"en-US":"Fire Salamander"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 82,
	 name: {
		 'en-US': 'Fire Salamander',
	},
	 gear: {
		 'en-US': 'Two flaming scimitars (Str+d10)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Fiery Body: Fire attacks cause no damage. Nonmagical attacks &ldquo;melt&rdquo; as they impact the salamander&rsquo;s body. The creature has 4 points of armor against such attacks and the attacker must roll a d6. On a 5&ndash;6, wooden weapons catch fire. On a 6, metal weapons melt slightly and cause 1 less die of damage until repaired by a blacksmith. Anyone who attacks a fire salamander with their bare hands and hits suffers an automatic 2d6 damage. Salamanders often grapple their foes to scorch them in this manner.\nWeakness (Water): Magical water-based attacks cause +4 damage. Nonmagical water has no additional effect.',
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
		 'en-US': 'These bright orange creatures live in volcanic areas or baking-hot deserts. They can survive in moderate temperatures for several hours before needing to return to their infernal pits.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d10"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p117-p118'
	}
);
	// {"en-US":"Frost Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 91,
	 name: {
		 'en-US': 'Frost Giant',
	},
	 gear: {
		 'en-US': 'Thick furs (+1), large maul (Str+d10, carried in one hand), thrown rock (Range: 5/10/20, Damage: 3d6)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Icy Aura: Frost giants radiate deadly cold. At the end of movement, all adjacent foes suffer 2d6 damage.\nImmunity (Cold): Frost giants take no damage from arcane powers with a cold or ice trapping.\nImproved Sweep: Frost giants can attack all adjacent foes at no penalty.\nLarge: Attackers gain +4 to attack rolls against frost giants due to their size.\nSize +4: Frost giants are over 15\' tall.\nWeakness (Fire): Magical heat and flame attacks cause +4 damage. Nonmagical heat has no additional effect.',
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
		 'en-US': 'Giants come in several forms, but all share two common features&mdash;they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nFrost giants live in high mountains, above the snow line, or in the frozen reaches of the world. They build vast stone forts, from which they rule over lesser races, such as orcs and goblins, as veritable gods. Their skin is pale blue, and their hair as white as snow.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://img1.wikia.nocookie.net/__cb20110621041734/forgottenrealms/images/7/74/Frost_giant.png',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '12',
		armor: '1',
		book: 2,
		page: 'p121'
	}
);
	// {"en-US":"Frost Mammoth"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 126,
	 name: {
		 'en-US': 'Frost Mammoth',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick hide and fur.\nIcy Breath: Frost mammoths breathe an icy blast using the Cone Template. Every target within this cone may make an Agility roll at &ndash;2 to avoid the attack. Those who fail suffer 2d8. A frost mammoth may not attack with its tusks or trample in the round it breathes fire.\nImmunity (Cold): Mammoths take no damage from cold, including magical attacks.\nLarge: Attackers have +2 to attack rolls against these beasts due to their size\nSize +5: Frost mammoths weigh over 4,000 pounds.\nTrample: Str.\nTusks: Str+d6',
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
		 'en-US': 'Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates.\nFrost mammoths resemble small mammoths. Unlike regular mammoths, however, their breath can freeze a man to death.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '14',
		armor: '2',
		book: 2,
		page: 'p133'
	}
);
	// {"en-US":"Frost Wolf"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 83,
	 name: {
		 'en-US': 'Frost Wolf',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d6\nChill Bite: The icy bite of a frost wolf can paralyze prey. Anyone Shaken or wounded must make a Vigor roll or be paralyzed for 1d6 rounds.\nFleet Footed: Frost wolves have a d10 running die.\nGo for the Throat: If a frost wolf gets a raise on its attack roll, it strikes its opponent&rsquo;s least armored location.\nImmunity (Cold): Frost wolves take no damage from cold.\nSize +1: Frost wolves stand 5&rsquo; tall and are over 7&rsquo; long.',
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
		 'en-US': 'Frost wolves haunt arctic climes, roaming the tundra in packs. Their thick fur is pure white, allowing them to blend in with the snow and ice.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p118'
	}
);
	// {"en-US":"Fury"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 84,
	 name: {
		 'en-US': 'Fury',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +1: Hide\nBerserk: Furies can become Berserk at will.\nClaws: Str+d4\nFlight: Furies have a Flying Pace of 6" and a Climb of 3".',
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
		 'en-US': 'Furies are savage, bestial creatures sent by the gods to punish worshippers for major transgressions. The exact form of a fury varies by deity, but all have sharp claws and wings of some description.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p118'
	}
);
	// {"en-US":"Ghost Blade"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 87,
	 name: {
		 'en-US': 'Ghost Blade',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Fearless: Stone gargoyles are immune to fear and Intimidation.\nGhost Warrior: The ghostly figure cannot be harmed or dispelled by any means. The sword, however, can be damaged as a regular character. The sword breaks when Incapacitated. Because the ghostly warrior is a figment of the sword&rsquo;s memory and not a real being, it cannot be disarmed.\nGreat Sword: Str+d10. Toughness: 12.\nImproved Block: +2 Parry',
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
		 'en-US': 'Ghost blades take the form of spectral warriors clutching a great sword. The ghostly figure is, in fact, a manifestation of the true creature&mdash;the blade.\nGhost blades are created by swords used by great heroes fallen in battle. The memories of the former wielder become burned into the blade, which then creates a ghostly figure to carry it into battle. Ghost blades seek only to kill, not caring if their victims are helpless children or mighty dragons.\nThe attributes are for the ghostly form, which cannot be harmed by any means so long as the sword is intact. Attacks against the sword are conducted as normal.',
	},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d10","vigor":"d4"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '10',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p119'
	}
);
	// {"en-US":"Ghoul"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 88,
	 name: {
		 'en-US': 'Ghoul',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager per 3 ghouls',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d4.\nInfravision: Ghouls halve penalties (round down) for bad lighting when attacking living targets.\nKeen Nose: Ghouls get +2 to Notice and Tracking rolls against living targets.\nParalysis: Victims of a ghoul&rsquo;s claw attacks must make a Vigor roll at &ndash;2 or be paralyzed for 1d6 rounds.\nUndead: +2 Toughness; +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison.',
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
		 'en-US': 'Ghouls are vile scavengers, feasting off carrion and unfortunate victims who cross their path.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://fc06.deviantart.net/fs70/f/2010/276/7/d/ghoul_by_kelsm-d300tgr.jpg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p119-p120'
	}
);
	// {"en-US":"Glass Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 98,
	 name: {
		 'en-US': 'Glass Golem',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Glass golems are depicted wearing plate armor. Despite being glass, it is magically hardened and acts as metal armor.\nCamouflage: When guarding a temple, glass golems stand motionless in stained glass windows, appearing to be part of the scene. When in this environment, detecting them requires an opposed Notice roll at &ndash;4 against their Stealth.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nGlass Shield: Glass golems normally carry magically-hardened glass shields. +1 Parry; +2 Armor to ranged attacks that hit.\nGlass Sword: Str+d10. The edge is razor sharp and never dulls.\nSize +1: Glass golems average 8&rsquo; tall.\nWeakness: Glass golems take double damage from blunt weapons, such as clubs and hammers.',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nThese unusual constructs are crafted to resemble a stained glass warrior and are most often used as guardians in temples. Unlike other golems, they are almost two- dimensional, being no thicker than a pane of glass.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/1013449.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p123'
	}
);
	// {"en-US":"Glide Monkeys"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 93,
	 name: {
		 'en-US': 'Glide Monkeys',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager per 5 glide monkeys',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4.\nGliders: These monkeys can glide descending 1" vertically for every 2" moved horizontally.\nHurl: Glide monkeys hurl hard nuts or stones from the high branches of their homes before gliding down to snatch stunned prey. These cause Str+d6 damage if they are above a victim, or Str if the monkey does not have a significant altitude advantage. Range is 5/10/20.\nSize -1: Glide monkeys are the size of small children.',
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
		 'en-US': 'Glide monkeys resemble large baboons with leathery flaps stretching from their wrists to their ankles. They live in the highest treetops, and travel from tree to tree by leaping or gliding, thus avoiding ground- based predators.',
	},
		attributes: '{"agility":"d10","smarts":"d8 (A)","spirit":"d8","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p121'
	}
);
	// {"en-US":"Goblin Shaman"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 95,
	 name: {
		 'en-US': 'Goblin Shaman',
	},
	 gear: {
		 'en-US': 'Short spear (Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Infravision: Goblins halve penalties for dark lighting against living targets (round down)\nSize -1: Goblins stand 3-4&rsquo; tall.\nSpells: Shamans have 15 Power Points, and typically know bolt, fear, obscure, and smite.',
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
		 'en-US': 'Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark &ldquo;fairy tale&rdquo; goblins as well as those found alongside orcs in contemporary roleplaying games.\nGoblin shamans serve as advisors to goblin lords. Their arcane talents give them a position of respect within the tribe.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://fc01.deviantart.net/fs71/f/2010/107/4/f/wow_goblin_shaman_concept_art_by_nightlybrian212.jpg',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p122'
	}
);
	// {"en-US":"Goblin"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 94,
	 name: {
		 'en-US': 'Goblin',
	},
	 gear: {
		 'en-US': 'Short spears (Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager, per 3 goblins',
	},
	 abilities: {
		 'en-US': 'Infravision: Goblins halve penalties for dark lighting against living targets (round down)\nSize -1: Goblins stand 3-4&rsquo; tall.',
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
		 'en-US': 'Goblins of myth and legend are far more sinister creatures than some games and fiction portray. In the original tales, they were terrifying creatures that stole into homes in the middle of the night to steal and eat unruly children. The statistics here work for both dark &ldquo;fairy tale&rdquo; goblins as well as those found alongside orcs in contemporary roleplaying games.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn.obsidianportal.com/assets/62147/goblins2.jpg',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p121-p122'
	}
);
	// {"en-US":"Golden Ram"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 96,
	 name: {
		 'en-US': 'Golden Ram',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Fleece is Worthwhile, but never any relics',
	},
	 abilities: {
		 'en-US': 'Gore: Rams use the charge maneuver to gore their opponents with their long horns. If they can move at least 6&rdquo; before attacking, they add +4 to their damage total.\nHorns: Str+d6.\nMountain Beast: Golden rams ignore penalties for Difficult Terrain in mountainous regions.\nSize +2: Golden rams weight over 800 pounds.',
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
		 'en-US': 'Golden ram are large beasts, living in remote mountainous regions. Their fleece is actually made of fine gold threads, which makes them popular with hunters and trappers.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p122'
	}
);
	// {"en-US":"Grave Guardian"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 103,
	 name: {
		 'en-US': 'Grave Guardian',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None, but they usually guard a Treasure Trove',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nClaws: Str+d6\nFear -2: Anyone seeing a grave guardian must make a Fear roll at &ndash;2.\nPowers: Grave guardians are not true spellcasters, but can use the following powers: armor, burrow, detect/conceal arcana, environmental protection, fear, and obscure. They have 15PP.\nRegeneration: Grave Vigor roll every round to heal all damage, except that caused by cold iron weapons.\nUndead: +2 Toughness, +2 to recover from being Shaken; No additional damage from called shots; Immune to disease and poison.\nWeakness (Cold Iron): Grave guardians cannot Regenerate wounds inflicted by cold iron weapons, but may heal them through natural Healing.',
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
		 'en-US': 'Grave guardians are placed in tombs to watch over the valuables entombed with the deceased. They resemble blackened corpses, with long talons and yellow eyes. Their orders are simple&mdash;destroy any creature entering the tomb, and hunt down and retrieve any stolen items.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d12","vigor":"d12"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://gerezon.se/wp-content/uploads/2013/11/spit-tombguardian.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p124-p125'
	}
);
	// {"en-US":"Griffin"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 104,
	 name: {
		 'en-US': 'Griffin',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Bite/Claws: Str+d6\nFlight: Griffins have a Flying Pace of 12" and a Climb of 6".\nGrapple: If a griffin gets a raise while performing a grapple, it has knocked its foe to the ground and pinned it with its paws. Bite attacks against a pinned foe are made at +2.\nHorse Terror: Griffins&rsquo; favorite prey is horse flesh. Horses seeing a griffin must make a Fear check or become Panicked.\nImproved Frenzy: Griffins may make two Fighting attacks each action at no penalty.\nSize +2: Griffins weigh over 500 pounds.\nSwoop: Griffins often swoop on their prey to pin it to the ground. It gains +4 to its attack and damage for this action . Its Parry is reduced by &ndash;2 until its next action when performing the maneuver, however.',
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
		 'en-US': 'Griffins have the body of a lion and the head and wings of an eagle. They are fierce predators, swooping down on their foes to pin them. Once their prey is trapped and helpless, they tear them open with their sharp beaks.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img4.wikia.nocookie.net/__cb20120819183320/mythology/images/f/f1/Griffin.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p125'
	}
);
	// {"en-US":"Guardian Mummies"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 136,
	 name: {
		 'en-US': 'Guardian Mummies',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor versus magic, and +2 to rolls made to resist magical effects.\nFear: Anyone seeing a guardian mummy must make a Fear check.\nFist: Str+d6\nMummy Rot: Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has &ldquo;mummy rot&rdquo; and suffers an immediate wound.\nShuffling Gait: Guardian mummies roll a d4 running die.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called\nWeakness (Fire): Mummies take +4 damage from fire.',
	},
	 tags: {
		 'en-US': 'guardian mummy,mummy,undead',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.\nThe most common type of mummy, these creatures were servants and soldiers placed in tombs to guard them for all eternity.',
	},
		attributes: '{"agility":"d4","smarts":"d6","spirit":"d10","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p136'
	}
);
	// {"en-US":"Guardian Naga"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 138,
	 name: {
		 'en-US': 'Guardian Naga',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4\nConstrict: A naga may choose to constrict a foe in her coils by making a Fighting attack. The round it entangles and each round thereafter it causes Str+d8 damage. The prey may attempt to escape by getting a raise on an opposed Strength roll. Given its large size, a naga may constrict one foe and bite another, suffering the standard multi- action penalty.\nHypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nShape Change: As an action, a naga can change into female human form with a Smarts roll at &ndash;2. Changing back into naga form requires a Smarts roll.\nSize+3: A naga is 15&rsquo; long and about a foot in diameter.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.',
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
		 'en-US': 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha&rsquo;s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d4"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p137'
	}
);
	// {"en-US":"Hag"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 105,
	 name: {
		 'en-US': 'Hag',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d6\nFear: Anyone seeing a hag must make a Fear check.\nSpells: Hags have 20 Power Points and typically know the following spells: armor (iron skin), boost/lower trait (blessing/curse), fear (hideous visage), obscure (dark cloud), puppet (persuasive words), and quickness (superhuman reflexes).',
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
		 'en-US': 'These cannibalistic ogres have powerful magical abilities. They are fond of eating children, but are not picky and eat nearly anything made of meat.',
	},
		attributes: '{"agility":"d4","smarts":"d10","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d12"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '-2',
		pace: '5',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p125-p126'
	}
);
	// {"en-US":"Half-Folk"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 106,
	 name: {
		 'en-US': 'Half-Folk',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), sling (Range: 4/8/16, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager per 5 half-folk',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'halfling,halflings,hobbit,hobbits,',
	},
	 edges: {
		 'en-US': 'Luck, Marksman',
	},
	 hindrances: {
		 'en-US': 'Small',
	},
	 blurb: {
		 'en-US': 'Half-folk try to avoid trouble, but sometimes trouble comes to them. The statistics are for a typical militiaman.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p126'
	}
);
	// {"en-US":"Harpy"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 107,
	 name: {
		 'en-US': 'Harpy',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d4\nFlight: Harpies have a Flying Pace of 8" and a Climb of 4"\nPoison -2: Harpies live in unsanitary habitats, and their claws are caked in filth. Any victim wounded or Shaken by a claw attack must make a Vigor roll or the wound becomes infected. Each day, the victim must make a Vigor roll or gain a level of Fatigue. A successful Healing roll, also at &ndash;2, cleans out the infection. Fatigue levels are recovered at the rate of one per day once the infection is stopped.',
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
		 'en-US': 'Harpies have the lower body, wings, and claws of a vulture and the head and chest of an ugly woman. In mythology, they were created by the gods, but in your setting they may be a natural species, capable of breeding and forming a rudimentary society.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p126'
	}
);
	// {"en-US":"Hellhound"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 108,
	 name: {
		 'en-US': 'Hellhound',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d6\nFear: Anyone who sees a hellhound must make a Fear check.\nFleet Footed: Hellhounds have a d10 running die\nGo for the Throat: If a hellhound gets a raise on its attack roll, it strikes its opponent&rsquo;s least armored location.\nImmunity (Fire): Hellhounds take no damage from fire\nTerrible Wounds: The jagged teeth of a hellhound inflict terrible wounds, which do not heal quickly. Healing rolls, including magical and natural healing, are subject to a &ndash;2 penalty on top of any wound penalties.',
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
		 'en-US': 'Hellhounds are monstrous dogs, often with black skin which steams from the heat of the beast&rsquo;s demonic blood. Their eyes burn with demonic fire and their teeth are oversized, protruding from their jaw at all angles. Certain demons often keep them as pets, though they may also be found in the company of necromancers and other evil wizards.',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p126-p127'
	}
);
	// {"en-US":"Hippogriff"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 109,
	 name: {
		 'en-US': 'Hippogriff',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Bite/Claws: Str+d6\nFlight: Hippogriffs have a Flying Pace of 8" and a Climb of 4".\nImproved Frenzy: Hippogriffs may make two Fighting attacks each action at no penalty.\nSize+3: Hippogriffs are comparable in size to a war horse.',
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
		 'en-US': 'A hippogriff has the body and hindquarters of a horse and the head, wings, and forelimbs of a giant eagle. They are natural enemies of griffins, but are no less fond of flesh than their rivals.',
	},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '11',
		armor: '0',
		book: 2,
		page: 'p127'
	}
);
	// {"en-US":"Hobgoblin"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 110,
	 name: {
		 'en-US': 'Hobgoblin',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), long swords (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Infravision: Hobgoblins halve penalties for dark lighting against living targets (round down).',
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
		 'en-US': 'Hobgoblins are large goblins. They can be found in their own communities, as well as lording over their lesser kin.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p127'
	}
);
	// {"en-US":"Holy\/Unholy Knight"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 118,
	 name: {
		 'en-US': 'Holy/Unholy Knight',
	},
	 gear: {
		 'en-US': 'Corselet (+3), plates arms and legs (+3), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
	},
	 treasure: {
		 'en-US': 'Meager, Worthwhile in castle',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Command, Holy/Unholy Warrior, Noble',
	},
	 hindrances: {
		 'en-US': 'Code of Honor, Vow',
	},
	 blurb: {
		 'en-US': 'Knights are the fantasy equivalent of tanks&mdash;heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.\nReligious knights are champions of faith, acting as the military wing of a religion. Some serve good gods, defending the weak and fighting evil. Others follow dark gods, promoting their evil agendas.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '7',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// {"en-US":"Horse, Elven"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 111,
	 name: {
		 'en-US': 'Horse, Elven',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Fleet-Footed: Elven horses roll a d12 for their running die. Elven horses do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6.\nRider Empathy: Elves gain +2 to Riding rolls on an elven horse.\nSize +2: Elven horses weigh between 600 and 800 pounds.',
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
		 'en-US': 'Elven horses are slightly smaller than riding horses but are considerably faster and can cross broken ground as if it were a smooth road. Elves never sell them and only rarely give them as gifts to non-elves who have done their people a great service.',
	},
		attributes: '{"agility":"d10","smarts":"d10 (A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '4',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p127'
	}
);
	// {"en-US":"Hydra"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 112,
	 name: {
		 'en-US': 'Hydra',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair.',
	},
	 abilities: {
		 'en-US': 'Armor +2: Scaly Hide.\nBite: Str+d6, Reach 1.\nFierty Breath: Some hydras breathe fire using the Cone Template. Every target within this cone may make an Agility roll at &ndash;2 to avoid the attack. Those who fail suffer 2d10 damage and must check to see if they catch fire. Individual heads may not attack with bite in the round they breathe fire.\nMultiple Heads: Hydras have between four and ten heads. Each head may make a Fighting roll in a round without incurring a multi-action penalty, though no more than four heads may attack a single target, regardless of its size. Every head has 1 wound and is severed if it is Incapacitated. Damage caused to heads does not affect the hydra, though it dies when the last head is severed.\nRegeneration: Each round after a head is severed, the hydra makes a Vigor roll. On a success, any severed heads are replaced by two new ones. Damage caused by fire prevents regeneration, as does cauterizing the wound before a new heads grow. This requires a successful Fighting roll with a torch or other flaming object.\nSize +5: Hydra are large creatures. Most weigh over 10,000 pounds.',
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
		 'en-US': 'Hydra are multi-headed beasts, akin to dragons. Some breathe fire, others can grow new heads to replace ones lost in combat, and others are more mundane. The number of heads varies.\nThe stats below include fire breathing and regenerating heads. Whether you choose to use one, both, or none depends on how powerful a hydra you want.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.pantheon.org/areas/gallery/mythology/europe/greek_people/hydra.gif',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '13',
		armor: '2',
		book: 2,
		page: 'p128'
	}
);
	// {"en-US":"Imp"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 65,
	 name: {
		 'en-US': 'Imp',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nClaws: Str+d4.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nPowers: Imps have 20 Power Points and know the following powers: bolt, detect/ conceal arcana, entangle, invisibility, obscure, and shape change.\nLending: An imp can share its Power Points with its master. It cannot be forced to share its power.\nSize -1: Imps are the size of small children.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Imps are small, winged demons. They are often sent to the material world to serve as familiars to honored wizards. Although they aid their new masters, they also report back to their demonic overlords and are thus useful spies.',
	},
		attributes: '{"agility":"d10","smarts":"d10","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p111'
	}
);
	// {"en-US":"Jabber Birds"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 113,
	 name: {
		 'en-US': 'Jabber Birds',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, per 5 birds',
	},
	 abilities: {
		 'en-US': 'Flight: Pace 6", Climb 4"\nJabber: The jabbering of these birds fills a Medium Burst Template centered on the bird. Characters within the Template must make as Spirit roll, &ndash;1 for each additional Template they are caught in, or become disoriented. Disoriented characters suffer a &ndash;2 penalty to trait rolls and Pace so long as they remain within at least one Template and for 3 rounds after they leave.\nSize -2: Jabber birds are 1&rsquo; tall.',
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
		 'en-US': 'Jabber birds are cowardly forest-dwelling scavengers. Their high-pitched jabbering, for which they are named, serves two purposes&mdash;it disorients potential prey and alerts predators that there is an easy meal waiting. Once the predators have killed the prey and taken their fill, the jabber birds feed on the remains.\nJabber birds hunt in small flocks, surrounding prey and preventing it from escaping before the nearest predator arrives.',
	},
		attributes: '{"agility":"d10","smarts":"d6 (A)","spirit":"d6","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '4',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p128-p129'
	}
);
	// {"en-US":"Jinni"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 114,
	 name: {
		 'en-US': 'Jinni',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None, but can often bestow wealth upon their patrons',
	},
	 abilities: {
		 'en-US': 'Immunity (Fire): Jinn from fire or heat, being born of such material.\nInvisibility: Jinn can become completely invisible with a successful Smarts roll and can remain that way indefinitely.\nMagic: In addition to their other abilities, jinn have 20 Power Points and know the following powers: blast (fire trapping), bolt (fire trapping), fear, and shape change.\nServitude: A jinni Incapacitated by violent means will seek to make a bargain with its opponent. The jinni offers service for a year and a day in return for sparing its life. During the period of servitude, the jinni is gracious and obedient (though not suicidal), but once the period elapses it strives to destroy the one who forced its enslavement.\nSmoky Form: A jinni can assume a smoky form with a successful Smarts roll. While in this form, the jinni cannot be harmed by any means, but it cannot affect the world in any way. As smoke, they can fit into small containers, such as lamps.\nTeleport: Jinn can teleport anywhere in the world. A Smarts roll is required for teleporting to an unseen location as normal.\nVariable Size: Jinn can vary their size from that of a man (their base form) to over 100&rsquo; high. The base statistics assume they are human-sized. Each point of Size they gain gives them +1 Toughness and Strength. At Size +4 they become Large creatures, at Size +8 they are Huge, and at Size +12 and over they are Gargantuan. Changing Size requires a Smarts roll, with the jinni gaining or losing 1 level of Size per success and raise. The roll may be made once per round.\nWeakness (Earth): Jinn were born of fire, but man, who the gods favor over jinn, was born of clay. Attacks involving earth, whether thrown rocks or magical trappings, inflict double damage.',
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
		 'en-US': 'Jinn (singular: jinni) are grouped into five categories. Marids are the most powerful, then efrit, shaitan, jinn, and finally the jann. All five are powerful, corporeal beings with the power to disappear at will. Some jinn are good, but the majority are evil&mdash;all are masters of trickery. The Westernized spelling is genie. The stats presented here are for a typical jinni.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_TAUNT":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p129'
	}
);
	// {"en-US":"Khazok"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 115,
	 name: {
		 'en-US': 'Khazok',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, per every 5 khazoks',
	},
	 abilities: {
		 'en-US': 'Armor +2: Rocky shell.\nBite: Str+d6.\nCamouflage: While not moving, khazoks resemble small boulders. Characters actively searching for danger suffer &ndash;4 to their Notice rolls. Khazoks which aren&rsquo;t detected strike with surprise, getting the Drop on their unsuspecting foes.',
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
		 'en-US': 'Khazok is a dwarven word meaning &ldquo;rock monster.&rdquo; Khazoks are carnivorous creatures with sharp mandibles and a rocky shell and are found in mountainous terrain and deep underground. Their favorite tactic is to curl into a ball, which resembles a small boulder, then spring to attack unwary passersby.',
	},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d6","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '7',
		armor: '2',
		book: 2,
		page: 'p129'
	}
);
	// {"en-US":"Knight"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 116,
	 name: {
		 'en-US': 'Knight',
	},
	 gear: {
		 'en-US': 'Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
	},
	 treasure: {
		 'en-US': 'Meager, Worthwhile in castle',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Command, Noble',
	},
	 hindrances: {
		 'en-US': 'Code of Honor',
	},
	 blurb: {
		 'en-US': 'Knights are the fantasy equivalent of tanks&mdash;heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '7',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// {"en-US":"Knowledge Eater"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 119,
	 name: {
		 'en-US': 'Knowledge Eater',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Ambush: Knowledge eaters lurk above ground level. When prey passes beneath, they attempt to drop onto its head. If a character passes beneath an undetected knowledge eater, it has the Drop. Its first attack is always a Called Shot to the head.\nInfravision: Halve darkness penalties against living targets (round down).\nPotion: The membranous body of a knowledge eater can be boiled to make a thick, grey sludge. Successfully creating the potion requires a Smarts roll. When drunk, the imbiber gains a +1 step increase in his Smarts and all linked skills for one hour.\nProboscis: Str+d4. If the victim of a Called Shot to the head is Shaken or wounded, the beast sinks its proboscis into his brain. Each round it remains attached, the victim suffers a permanent 1 die reduction in Smarts and all linked skills. If Smarts reaches zero, the victim is left a gibbering idiot.\nSize -1: Knowledge eaters are the size of small dogs.',
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
		 'en-US': 'Knowledge eaters resemble large spiders but have an extendable proboscis and a grey, pulsating, membranous body. They feed on the knowledge of their victims, literally sucking away intelligence. It seems unlikely that such a beast could have evolved naturally, but so far no race has uncovered any knowledge regarding their creation.',
	},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '4',
		armor: '0',
		book: 2,
		page: 'p130-p131'
	}
);
	// {"en-US":"Lasher"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 66,
	 name: {
		 'en-US': 'Lasher',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing powers and +2 on trait rolls to resist opposed powers.\nArmor +3: Iron Scales\nBarbed Whip: Str+d8, Reach 2. Anyone struck by the whip, whether they are injured or not, must make a Vigor roll or be Shaken by the immense pain caused by the barbs. They cannot attempt to recover for 1d6 rounds after the attack.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nFear: Anyone seeing a lasher must make a Fear check at &ndash;2.\nFlight: Lashers have a Flying Pace of 12" and a Climb of 6"\nInfravision: Lashers halve penalties for poor lighting against living targets.\nSize +3: Lashers stand 9&rsquo; tall and weigh over 1000 pounds.\nSweep: By whirling its whip round, a lasher can attack all opponents within 2&rdquo; at no penalty.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Lashers are demonic taskmasters, using their barbed whips to keep lesser demons in line. Considerably larger than humans, they resemble an unholy giant bat with blackened, iron scales. They can be summoned into the world through dark rituals, but are usually only employed when a number of lesser demons need controlling.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '14',
		armor: '3',
		book: 2,
		page: 'p111'
	}
);
	// {"en-US":"Lava Border Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 47,
	 name: {
		 'en-US': 'Lava Border Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +3: Rocky hide.\nBurrow (6"): Lava elementals can meld into and out of the ground.\nElemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nFlame Strike: Lava elementals can spit a searing blast of flame using the Cone Template. Characters within the cone must beat the elemental&rsquo;s Shooting roll with Agility or suffer 2d10 damage, plus the chance of catching fire.',
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
		 'en-US': 'Composed of fire and earth, these creatures have a stony skin overlaying a body of molten rock. They look similar to earth elementals, but have fiery eyes, a mouth that looks like the centre of an active volcano when opened, and smoking, blackened, rocky skin.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '6',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p105'
	}
);
	// {"en-US":"Lava Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 99,
	 name: {
		 'en-US': 'Lava Golem',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Armor +3: Magically hardened stone.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nSize +1: Lava golems stand over 8&rsquo; high and weigh 2,000 pounds.\nSpit Lava: Lava golems can spew a glob of molten lava. Range 6/12/24, Damage: 2d10, Medium Burst Template. Targets under the Template may make an Agility roll at &ndash;2 to escape the glob. Victims have a chance of catching fire.\nSuperheated Fists: Str+d10',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nAlthough superficially similar to stone golems, lava golems have fiery ichor running through their rock bodies. Their eyes glow red and their fists are superheated.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://fc02.deviantart.net/fs49/f/2009/168/0/5/Lava_Golem_by_Vij_8.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p123-p124'
	}
);
	// {"en-US":"Liche"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 120,
	 name: {
		 'en-US': 'Liche',
	},
	 gear: {
		 'en-US': 'Magical armor (+6), other magical items',
	},
	 treasure: {
		 'en-US': 'Treasure Trove',
	},
	 abilities: {
		 'en-US': 'Death Touch: Liches drain the lives of those around them with a touch. Instead of a normal attack, a liche may make a touch attack. Every raise on its Fighting roll automatically inflicts one wound to its target.\nSpells: Liches have 50 Power Points and know most every spell available.\nUndead: +2 Toughness; +2 to recover from being Shaken; Called shots do no extra damage.\nZombie: Liches are necromancers first and foremost. The undead they raise through the zombie spell are permanent, so they are usually surrounded by 4d10 skeletons or zombies as they choose. Some liches have entire armies of the undead at their disposal.',
	},
	 tags: {
		 'en-US': 'undead,zombie,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Perhaps the most diabolical creature in any fantasy land is the liche&mdash;a necromancer so consumed with the black arts that he eventually becomes undead himself.',
	},
		attributes: '{"agility":"d6","smarts":"d12+2","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d12+2","special":{"en-US":"Occult"}},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 1,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '15',
		armor: '6',
		book: 2,
		page: 'p131'
	}
);
	// {"en-US":"Lizard Men"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 121,
	 name: {
		 'en-US': 'Lizard Men',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), stiff hide shield (+1 Parry), flint battle axe (Str+d8), flint throwing axe (Range: 3/6/12, Damage: Str+d6)',
	},
	 treasure: {
		 'en-US': 'Meager per 5 Lizard men',
	},
	 abilities: {
		 'en-US': 'Keen Senses: Lizard men &ldquo;taste&rdquo; the air, giving them +2 to all Notice rolls. This ever- present advantage means they are always considered &ldquo;Active&rdquo; when consulting the Stealth results table.\nNatural Swimmers: Lizard men&rsquo;s tails make them powerful swimmers, giving them +2 on all Swimming rolls and increasing their swimming Pace to equal their Swimming skill.',
	},
	 tags: {
		 'en-US': 'lizard man,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Lizard men are aggressive bipedal lizards with a fondness for warm flesh. Most live in marshy terrain, where they hunt fish and water fowl. Their society is extremely primitive. They have never developed metalworking, but prize metal tools and weapons looted from the corpses of those who intrude in their realms.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p131'
	}
);
	// {"en-US":"Mage Bane"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 125,
	 name: {
		 'en-US': 'Mage Bane',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'One relic',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImproved Arcane Resistance: +4 Armor against damage-causing powers and +4 on trait rolls to resist opposed powers.\nInvulnerability: Mage banes take no damage from non-magical attacks.\nMagic Drain: On a successful Touch Attack the mage bane drains 1d6 Power Points from a victim unless the victim succeeds in an opposed Spirit roll. Drained points are added to the mage bane&rsquo;s own pool. It cannot exceed its starting level, however.\nMagic Sense: Mage banes can detect arcana as a natural sense.\nPowers: Mage banes have 40 Power Points and know the following powers: bolt, deflection, dispel, entangle, fear, obscure, telekinesis, and teleport.',
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
		 'en-US': 'Many stories exist about how mage banes came to be. Some say they are the spirits of mages who never fulfilled their potential in life. Others claim they are the result of magical backlash. A few even say they are elementals, drawn from the realm of magic. Whatever the truth, they detest mages (but not priests or other Miracle workers). They appear as black, faceless humanoids.',
	},
		attributes: '{"agility":"d10","smarts":"d12","spirit":"d10","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p133'
	}
);
	// {"en-US":"Mage"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 122,
	 name: {
		 'en-US': 'Mage',
	},
	 gear: {
		 'en-US': 'Various',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Spells: Novice mages have 15 Power Points and typically know armor, bolt, detect/conceal arcana, and light.',
	},
	 tags: {
		 'en-US': 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,',
	},
	 edges: {
		 'en-US': 'Arcane Background (Magic), New Power, Power Points, Wizard',
	},
	 hindrances: {
		 'en-US': 'Varies',
	},
	 blurb: {
		 'en-US': 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.',
	},
		attributes: '{"agility":"d6","smarts":"d10","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// {"en-US":"Mage"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 123,
	 name: {
		 'en-US': 'Mage',
	},
	 gear: {
		 'en-US': 'Various, but at least one magic item',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Spells: Veteran mages have 25 Power Points and typically know armor, bolt, detect/conceal arcana, dispel, fly, and light.',
	},
	 tags: {
		 'en-US': 'magic user,wizard,seer,sorcerer,warlock,conjurer,illusionist,caster,',
	},
	 edges: {
		 'en-US': 'Arcane Background (Magic), New Power, Power Points, Rapid Recharge, Wizard',
	},
	 hindrances: {
		 'en-US': 'Varies',
	},
	 blurb: {
		 'en-US': 'Mages range from lowly apprentices armed with a handful of spells to arch mages, whose great power is often political as well as arcane. The stats here are for typical adventuring mages, but they need to be adjusted to fit whatever role they are found in. A court mage is very different from a magic item crafter, for example. Feel free to add new powers to suit your particular needs.',
	},
		attributes: '{"agility":"d6","smarts":"d12","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Arcana"}},"SKILL_NOTICE":{"value":"d8"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d12"},"SKILL_STEALTH":{"value":"d6"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p132'
	}
);
	// {"en-US":"Manticore"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 128,
	 name: {
		 'en-US': 'Manticore',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Bite/Claw: Str+d6\nDefensive Volley: Rather than fire its tail darts at one target, the manticore may launch them in a circular pattern. The manticore makes a single Shooting roll against all target within range. Victims suffer 2d6 damage. The manticore may take no other actions in the round it uses this ability, including movement. This ability may be used only once per day and uses all the darts in the tail. There must be at least 3 volleys of darts left for this ability to work.\nImproved Frenzy: Manticores may make two Fighting attacks each action at no penalty.\nTail Darts: Each round, a manticore may fire a volley of darts at one target (Range: 4/8/16, Damage: 2d6). It may not fire its darts at the same target it attacks with its claws or bite during the same round. A manticore can only fire 10 volleys in a single day.\nSize +2: Manticores weigh over 600 pounds.',
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
		 'en-US': 'A manticore has the body of a lion and a vaguely human head. Its mouth contains three rows of razor sharp teeth and its tail ends in a ball of darts or spines. Manticores are fierce predators and devour every part of their victims, including their gear.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://images.wikia.com/olympians/images/4/45/Percy_Jackson_Manticore.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p134'
	}
);
	// {"en-US":"Marsh Troll"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 178,
	 name: {
		 'en-US': 'Marsh Troll',
	},
	 gear: {
		 'en-US': 'Spiked clubs (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +1: Rubbery hide\nClaws: Str+d4\nImmunity: Immune to poison and disease.\nInfection: The claws of a marsh troll are caked in filth. Any creature Shaken or wounded by a claw must make a Vigor roll. On a failure, the wound becomes infected. The victim has a cumulative &ndash;1 penalty to trait rolls until the wound is cleaned. This requires a successful Healing roll for each wound.\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +1: Marsh trolls are smaller than regular trolls, being only 7&rsquo; tall.\nStench: Any creature adjacent to a marsh troll must make a Vigor roll or become Shaken with nausea.',
	},
	 tags: {
		 'en-US': 'swamp troll,swamp,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Also known as swamp trolls, bog trolls, and marsh fiends, these foul creatures haunt dank marshes. Their skin is black and slimy, matching the murky waters of their home, and they stink like rotting vegetation.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '9',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// {"en-US":"Master Thief"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 169,
	 name: {
		 'en-US': 'Master Thief',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, Rich in lair',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Acrobat, Dodge, Level Headed, Thief',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves&rsquo; guilds are often excellent sources of information&mdash;if you can find them.',
	},
		attributes: '{"agility":"d12","smarts":"d8","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_LOCKPICKING":{"value":"d12"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d12"},"SKILL_STREETWISE":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p147'
	}
);
	// {"en-US":"Mature Tree Man"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 176,
	 name: {
		 'en-US': 'Mature Tree Man',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick Bark\nCamouflage: When a tree man isn&rsquo;t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls.\nLashing Branches: Str+d10, Reach 6.\nGargantuan: Heavy Armor. Ranged attacks against tree men by man-size creatures are made at +4. His attacks are Heavy Weapons. Add Size to Damage when stomping.\nHuge: Characters add +4 when attacking a tree man because of its great size.\nImproved Sweep: May attack all adjacent foes.\nPowers: Tree men are lords of the forest. They have 25 Power Points and know beast friend and entangle.\nSize +11: Tree men are over 100&rsquo; tall.\nWeakness (Fire): Fire-based attacks do +2 damage and the chance of catching alight is 5&ndash;6 on a d6.',
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
		 'en-US': 'According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live.',
	},
		attributes: '{"agility":"d4","smarts":"d6","spirit":"d8","strength":"d12+6","vigor":"d12+1"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '10',
		parry: '7',
		toughness: '21',
		armor: '2',
		book: 2,
		page: 'p149'
	}
);
	// {"en-US":"Medusa"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 129,
	 name: {
		 'en-US': 'Medusa',
	},
	 gear: {
		 'en-US': 'Short sword (Str+d6), bow (Range: 12/24/48, Damage: 2d6)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Petrify: The visage of a medusa is deadly to behold. In combat, a character may avert his eyes by taking a penalty to his attack roll. The attacker may take a &ndash;1, &ndash;2, &ndash;4, or &ndash;6 penalty to his attack roll (his choice). Whether the attack is successful or not, he must then make a Spirit roll with a bonus equal to the penalty he took to his attack roll. On a failure, he catches sight of the medusa&rsquo;s face and is turned to stone&mdash; permanently. A character Surprised by a medusa may make an Agility roll at &ndash;4 to avert his gaze.\nSnake Hair: The writhing snake hair of a medusa can attack all adjacent foes with no multi-action penalty. The bite inflicts d4+2 damage, and also delivers poison. Victim must make a Vigor roll at &ndash;2. With success, the bite area swells and becomes numb. The victim becomes Exhausted until healed. With a failure, the victim becomes Incapacitated and must make a second Vigor roll or die.\nPoison Arrow: As an action, a medusa may drip venom from a snake onto an arrow. The poison is good for one shot and functions as described in Snake Hair.',
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
		 'en-US': 'The legendary medusa was a unique creature&mdash;a former maiden of beauty cursed by the gods for her vanity. In fantasy settings, the creature may be unique or part of a race of the same name. Medusas are found in most terrains. They lair is usually decorated with numerous "statues."',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://deyoung.famsf.org/files/imagecache/exhibition_preview_large/blog/MedusaFace.JPG',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p134'
	}
);
	// {"en-US":"Mercenary Captain"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 132,
	 name: {
		 'en-US': 'Mercenary Captain',
	},
	 gear: {
		 'en-US': 'Plate corselet (+3), chain limbs (+2), open helm (+3), various weapons, war horse',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': '-',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Mercenaries are hired soldiers. Some belong to respectable units, with a history of integrity and loyalty to their paymaster. Others happily switch sides if a better offer is made. Groups of mercenaries are often armed with the same weapons. Thus, one finds mercenary pikemen, cavalrymen, skirmishers, archers, and so on.\nCaptains are experienced soldiers commanding a mercenary unit. They typically carry the same weapons as their men but are mounted.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d12"},"SKILL_KNOWLEDGE":{"value":"d10","special":{"en-US":"Battle"}},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p135'
	}
);
	// {"en-US":"Mermaid"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 133,
	 name: {
		 'en-US': 'Mermaid',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile per 5 mermaids',
	},
	 abilities: {
		 'en-US': 'Aquatic: Pace 6\nClaws: Str+d6\nSiren Song: The mermaid&rsquo;s song is like a narcotic for men. When first heard, male characters of all species must make Spirit rolls. Those who fail stumble into the sea and become completely complacent, believing they&rsquo;re cavorting with the beautiful sea nymphs. In truth, the victims are drowning. Every time the victim suffers a wound or a Fatigue level from any source, he gets a Spirit roll at &ndash;2 (plus the Fatigue penalty) to realize his peril and break the spell. Those who do are quickly savaged by the watching mermaids. Aquatic races may fall victim to the mermaids as well, but since they can&rsquo;t drown, they&rsquo;ll simply be ripped to shreds.',
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
		 'en-US': 'Mermaids appear as beautiful, naked young women from the waist up with glistening fish tales for their lower torso. Once underwater, their true form is revealed. They are hideous monsters with jagged teeth, blood-red fish eyes, and green scaly skin covered in slime.\nOnce sailors are in the water, they attempt to hold them there and drown the unfortunate souls.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d8"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://cdn2-b.examiner.com/sites/default/files/styles/article_large/hash/17/bc/17bcc3eff2b01dec93b7cc32dae4e7d2.jpg?itok=8-GDWrLu',
		charisma: '+4',
		pace: '0',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p135'
	}
);
	// {"en-US":"Metal Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 100,
	 name: {
		 'en-US': 'Metal Golem',
	},
	 gear: {
		 'en-US': 'Great axe (Str+d10, &ndash;1 Parry, requires 2 hands)',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Armor +5: Magically hardened metal.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nImproved Sweep: Metal golems may attack all adjacent creatures at no penalty.\nSize +2: Metal golems stand over 10&rsquo; high and weigh 6,000 pounds.',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nTypically crafted in humanoid form from iron or bronze, metal golems are among the most powerful golems. Some creators give their iron golems long swords instead of hands, allowing them to attack more often.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d8","strength":"d12+3","vigor":"d12+1"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://th02.deviantart.net/fs7/PRE/i/2005/159/2/5/iron_golem_by_muninsnape.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '15',
		armor: '5',
		book: 2,
		page: 'p124'
	}
);
	// {"en-US":"Methusaleh Tree"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 134,
	 name: {
		 'en-US': 'Methusaleh Tree',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, scattered around base',
	},
	 abilities: {
		 'en-US': 'Armor +2: Bark\nBranches: Str+d6. A Methusaleh tree may make up to four attacks each round. On a raise, the creature impales the victim. The victim must make a Vigor roll or gain a level of Fatigue (recover one level per 24 hours). Every round a connected branch stays impaled, the victim must make another Vigor roll. Removing the branch requires an opposed Strength roll to pull it free. For each Fatigue level drained, the tree heals 1 wound. The branches have Toughness 10 and one wound. Severing them does not affect the tree&rsquo;s overall health. Severed branches regenerate after 1d6 days.\nCanopy: A Methusaleh tree spreads wide for sun and prey. Branches have Reach 3.\nHuge: Attackers are +4 to attack rolls due to the tree&rsquo;s size.\nPlant: Plants are not subject to Fear and Tests of Will.\nSize +8: Methusaleh trees stands over 60&rsquo; tall.',
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
		 'en-US': 'Methusaleh trees look like oaks, spruces, and other mundane trees, but are always healthy specimens unbothered by nesting birds or tree-dwelling mammals. There is good reason why animals do not bother the tree&mdash;it feeds on their life-force.\nAs well as regular foliage, a Methusaleh tree has four sharpened branches which it uses to impale prey, draining and sucking out their vitality, thus rejuvenating itself.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d10","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '17',
		armor: '2',
		book: 2,
		page: 'p136'
	}
);
	// {"en-US":"Moss Man"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 135,
	 name: {
		 'en-US': 'Moss Man',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4\nCamouflage: Moss men gain +2 to Stealth rolls in forest and jungle because of their appearance.\nSpores: Moss men can release a cloud of choking spores. The cloud fills a Medium Burst Template centered on the moss man. Creatures within the Template must make a Vigor roll or be Shaken. Each cloud costs 2 Power Points and the moss man has 10 available for this purpose only.',
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
		 'en-US': 'Moss men are mobile, semi-intelligent humanoid plants composed of tightly packed moss, vines, and grass. They have a mouth tipped with sharp thorns which function as teeth and glowing yellow eyes.',
	},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p136'
	}
);
	// {"en-US":"Mud Border Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 48,
	 name: {
		 'en-US': 'Mud Border Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImmunity: The semisolid body of a mud elemental gives it limited resistance to attacks. Nonmagical attacks of any sort cause half-damage.\nSeep: Mud elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances&mdash;there must be an actual hole through the obstacle (such as a keyhole).\nSlam: Str+d6, nonlethal damage.\nSmother: If a mud elemental scores a raise on a grapple attack it has enveloped its target. Escaping requires an opposed Strength roll. Each round the victim remains smothered, he suffers a Fatigue level.',
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
		 'en-US': 'Mud elementals bridge the realms of earth and water. They resemble earth elementals in shape, but are fluid like their water elemental kin.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// {"en-US":"Mummy Lord"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 137,
	 name: {
		 'en-US': 'Mummy Lord',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Rich',
	},
	 abilities: {
		 'en-US': 'Arcane Background (Magic): A mummy typically has 30 Power Points and knows barrier (wall of darkness), bolt (swarm of tiny skulls), deflection (shield of swirling skulls), fear (unearthly cry), obscurement (area of darkness), and zombie (ritual preparation).\nFearless: Mummy lords are immune to Fear and Intimidation.\nFist: Str+d6\nImproved Arcane Resistance: +4 Armor versus magic, and +4 to rolls made to resist magic effects.\nMummy Rot: Anyone touched by a mummy, whether he is damaged or not, must make a Vigor roll. Failure means the character has &ldquo;mummy rot&rdquo; and suffers an immediate wound.\nShuffling Gait: Guardian mummies roll a d4 running die.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called\nWeakness (Fire): Mummies take +4 damage from fire.',
	},
	 tags: {
		 'en-US': 'mummies,mummy,undead',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Mummies are undead whose bodies have been dried and preserved. The spirit is bound to the corpse through powerful necromantic rituals known only to a select few priests. In your setting, you may allow a more powerful version of the zombie power to create these horrors.\nMummy lords were priests and mages preserved for eternity and granted an unearthly life through arcane rituals.',
	},
		attributes: '{"agility":"d4","smarts":"d10","spirit":"d12","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '13',
		armor: '3',
		book: 2,
		page: 'p137'
	}
);
	// {"en-US":"Naga - Human Form"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 140,
	 name: {
		 'en-US': 'Naga - Human Form',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': '',
	},
	 abilities: {
		 'en-US': 'Hypnotic Gaze: The naga can use the puppet power using her Smarts instead of an arcane skill. She can use and maintain the power indefinitely, but may only affect one target at a time.\nQuick: A naga is frighteningly quick for its size, and redraws cards of 5 or less.\nStrong Willed: A naga cannot be swayed by threats or taunts. She receives a +2 bonus to defend against Tests of Will.\nVery Attractive: The human form of the naga is that of a beautiful, dusky-skinned woman.',
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
		 'en-US': 'Naga are giant snakes with the head of women. In Buddhist mythology, the naga tried to follow Buddha&rsquo;s teaching and become a monk, transforming into human form to nfiltrate the monks. Buddha discovered the ploy and told the naga it was a beast, not a human, and therefore could not be ordained. Still loyal to the Buddhist faith, the naga became a temple guardian. In a fantasy campaign, nagas serve as guardians of temples to the gods of good.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+4',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// {"en-US":"Naiad"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 141,
	 name: {
		 'en-US': 'Naiad',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Aquatic: Naiads have a Pace of 10 underwater.\nAttractive: Naiads resemble beautiful human females.\nMagic: Naiads have 30 Power Points and know the following powers: barrier (wall of water), beast friend (aquatic only), entangle (bound by water ), healing, invisibility (assumes a watery, translucent form), shape change (aquatic only), and stun.\nPool Bond: Naiads share their soul with a particular pool or similar small body of water. They must remain within 36&rdquo; of the water or their magic does not work. If the pool is polluted, the naiad must make a Vigor roll each day or suffer a Fatigue level until the taint is cleared.',
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
		 'en-US': 'Naiads are fresh water spirits in the way dryads are tree spirits. Nereids are the salt water equivalent to naiads and use the same stats.',
	},
		attributes: '{"agility":"d8","smarts":"d10","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d4"},"SKILL_NOTICE":{"value":"d10"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '4',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p138'
	}
);
	// {"en-US":"Natural Gargoyle"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 85,
	 name: {
		 'en-US': 'Natural Gargoyle',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager in nest',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick, leathery skin.\nBite/Claws: Str+d6.\nCamouflage: Natural gargoyles receive +2 to Stealth rolls in rocky terrain due to their skin color.\nFlight: Furies have a Flying Pace of 10" and a Climb of 4".',
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
		 'en-US': 'The little-known natural gargoyle is the base for the stone figures. They fly on leathery wings that fold flush with the body to prevent damage on jagged rocks. They perch on craggy rock faces waiting for prey, a tireless vigil that prompted their use in architecture.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '7',
		toughness: '9',
		armor: '2',
		book: 2,
		page: 'p118'
	}
);
	// {"en-US":"Nightmare"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 142,
	 name: {
		 'en-US': 'Nightmare',
	},
	 gear: {
		 'en-US': 'Some necromancers give their nightmares barding (+3)',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Brave: Nightmares are not prone to fright and gain +2 to Fear checks.\nFleet Footed: Nightmares roll a d8 for their running die. Nightmares run just above the surface of the ground and do not suffer movement penalties for Difficult Terrain.\nKick: Str+d6\nSize+3: Nightmares weigh between 800 and 1000 pounds.',
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
		 'en-US': 'Nightmares are demonic steeds. They are black as night, with fiery hooves and eyes. They only accept evil riders, throwing off and stomping those of good heart.',
	},
		attributes: '{"agility":"d6","smarts":"d6 (A)","spirit":"d6","strength":"d12+4","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '10 or',
		armor: '0',
		book: 2,
		page: 'p139'
	}
);
	// {"en-US":"Noble"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 145,
	 name: {
		 'en-US': 'Noble',
	},
	 gear: {
		 'en-US': 'Rapier (Str+d4, +1 Parry) in court; war gear varies with type of noble',
	},
	 treasure: {
		 'en-US': 'Worthwhile, Rich in castle',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'noble',
	},
	 edges: {
		 'en-US': 'Command, Connection, Noble',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'This entry covers both true nobles and their courtier lackeys, such as seneschals and chancellors. The generic noble is suitable for every noble Rank from baron to emperor.\nSome nobles are decadent dandies content with living a life of luxury. Others are rich landowners, skilled in business matters. Other noble types include military commanders, advisors to a higher authority, poverty stricken ones, extremely wealthy ones, and those who dabble in forbidden arts.\nThis version presents a typical middle-of- the-road noble. A few specific Hindrances and Edges can quickly turn this into any sort of noble you need.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d6"},"SKILL_RIDING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '6',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// {"en-US":"Octopus, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 146,
	 name: {
		 'en-US': 'Octopus, Giant',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Aquatic: Pace 6\nHuge: Characters add +4 when attacking a giant octopus due to their great size.\nInk Cloud: A giant octopus can spurt a cloud of black ink once per day. The cloud fills a sphere equal to a Large Burst Template. No sight or smell functions within this putrid stuff, even for the octopus.\nSize+6: The body of a giant octopus is as big as a sloop, while each tentacle is over 20&rsquo; long.\nTentacles: A giant octopus may make up to four attacks each round. On a raise, the creature has grappled the victim. An entangled victim may only attempt an opposed Strength roll each round to escape. Once grappled, the octopus does its Strength damage automatically by crushing with its arms and rending with its beak. A victim killed by an octopus&rsquo; tentacles is usually ripped in half.',
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
		 'en-US': 'These terrors of the deep are aggressive and always hungry. Alone, they are quite cowardly and attack only what they consider easy prey. Wounded beasts typically emit an ink cloud and attempt to escape.\nCharacters often try to sever tentacles. A tentacle is severed if it takes the creature&rsquo;s Toughness in damage in one shot from an edged weapon. Attacking a tentacle that has entangled a friend is somewhat risky&mdash;a roll of 1 on the attack die means the ally is hit instead.',
	},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d12+4","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '6',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p140'
	}
);
	// {"en-US":"Ogre"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 147,
	 name: {
		 'en-US': 'Ogre',
	},
	 gear: {
		 'en-US': 'Thick hides (+1), massive club (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Size+3: Most ogres are over 8&rsquo; tall with pot-bellies and massive arms and legs.\nSweep: May attack all adjacent foes at &ndash;2.',
	},
	 tags: {
		 'en-US': 'ogres',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Ogres are kin to orcs and lesser giants. They are often taken in by orc clans, who respect the dumb brutes for their savagery and strength. Orcs often pit their &ldquo;pet&rdquo; ogres in savage combats against their rivals&rsquo; ogres.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+3","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '0',
		parry: '7',
		toughness: '11',
		armor: '1',
		book: 2,
		page: 'p141'
	}
);
	// {"en-US":"Orc Chieftan"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 149,
	 name: {
		 'en-US': 'Orc Chieftan',
	},
	 gear: {
		 'en-US': 'Plate chest plate (+3), chain arms and legs (+2), battle axe (Str+d10).',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.\nSweep: May attack all adjacent characters at &ndash;2 penalty.',
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
		 'en-US': 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.\nThe leader of small orc clans is always the most deadly brute in the bunch. Orc chieftains generally have a magical item or two in settings where such things are relatively common (most &ldquo;swords and sorcery&rdquo; worlds).',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 1,
		image: 'http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p141'
	}
);
	// {"en-US":"Orc Shaman"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 150,
	 name: {
		 'en-US': 'Orc Shaman',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), spear (Str+d6, Parry +1, Reach 1)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Infravision: Halves penalties for poor light vs. warm targets.\nSpells: Shamans have 15 power points and typically know armor, bolt, fear, and smite.',
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
		 'en-US': 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.\nOrcs worship gods of destruction and slaughter. Their shamans personify this image, and while they are usually the smallest members of a clan, they are often the most savage.\nOrc shamans drape themselves in crude fetishes, bones, and other occult trappings to appear more menacing to their foes. Their power is simple hedge magic, however, and is not divinely inspired despite several millennia believing otherwise.',
	},
		attributes: '{"agility":"d6","smarts":"d8","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_SPELLCASTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://fc09.deviantart.net/fs71/f/2013/098/0/0/orc_chieftain_final_by_director_16-d60veug.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p142'
	}
);
	// {"en-US":"Orc"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 148,
	 name: {
		 'en-US': 'Orc',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), scimitar (Str+d8).',
	},
	 treasure: {
		 'en-US': 'Meager, per 3 orcs',
	},
	 abilities: {
		 'en-US': 'Infravision: Halves penalties for poor light vs. warm targets.\nSize +1: Orcs are slightly larger than humans.',
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
		 'en-US': 'Orcs are savage, green-skinned humanoids with pig-like features, including snouts and sometimes even tusks. They have foul temperaments, and rarely take prisoners.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: 'https://www.frontlinegaming.org/wp-content/uploads/2013/01/4e_DnD_Orcs_by_RalphHorsley1.jpeg',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p141'
	}
);
	// {"en-US":"Pegasus"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 151,
	 name: {
		 'en-US': 'Pegasus',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Flying: Pegasi have a Flying Pace of 12&rdquo; and a Climb of 6&rdquo;.\nKick: Str\nSize+2: Pegasi weigh around 800 pounds.',
	},
	 tags: {
		 'en-US': 'pegasi',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Pegasi (singular: pegasus) are horses with great, feathery wings. In Greek myth the animal was unique, but in many fantasy settings they are standard creatures.',
	},
		attributes: '{"agility":"d8","smarts":"d4 (A)","spirit":"d6","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '5',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p142'
	}
);
	// {"en-US":"Phoenix"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 152,
	 name: {
		 'en-US': 'Phoenix',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Flight: Phoenix have a Flying Pace of 12&rdquo; and a Climb of 6&rdquo;.\nPowers: A phoenix has 35 Power Points and knows the following powers: barrier, blast, bolt, burst, and light. All powers have a fire trapping.\nRebirth: If a phoenix is killed, it explodes into flame filling a Medium Burst Template. Creatures within the Template suffer 2d10 damage and have a chance of catching fire. During the explosion, the body of the phoenix transforms into an egg. A new phoenix hatches 2d6 days later.\nSize-1: A phoenix is the same size as a large eagle.\nTail Feathers: Every phoenix has 35 magical tail feathers, each acting as a one-shot spell. Each of the thirteen yellow feathers contain bolt (one bolt, 3d6 damage), the twelve orange feathers have burst, and the ten red feathers hold blast (3d6 damage in Medium Burst Template). The powers are cast using the phoenix&rsquo;s Spellcasting&mdash;all the user need do to activate the power is throw the feather at the target (as an action). Removed tail feathers do not grow back. Furthermore, each lost feather permanently reduces the bird&rsquo;s Power Points by one. When the last feather is removed, the bird explodes (as above) but is not reborn.',
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
		 'en-US': 'Clad in fiery feathers of yellow, orange, and red, the immortal phoenix is seen as a representation of the sun god. Many cultures consider the bird sacred, but its feathers contain magical power and thus the bird is often hunted.\nThe greatest gift a phoenix can bestow is one of its tail feathers. Although the magic in them is temporary, the phoenix forever weakens its life-force with the gift.',
	},
		attributes: '{"agility":"d10","smarts":"d10 (A)","spirit":"d8","strength":"d6","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_SPELLCASTING":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '2',
		parry: '5',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p142'
	}
);
	// {"en-US":"Priest of Death"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 153,
	 name: {
		 'en-US': 'Priest of Death',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), holy symbol',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Spells: Death priests typically have 15 Power Points and know armor (bone trapping), fear, and zombie.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Arcane Background (Miracles), New Power, Points',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_FAITH":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p142-p143'
	}
);
	// {"en-US":"Priest of Healing"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 154,
	 name: {
		 'en-US': 'Priest of Healing',
	},
	 gear: {
		 'en-US': 'Staff (Str+d4, Parry +1, Reach 1), holy symbol',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Spells: Healing priests typically have 15 Power Points and know deflection, healing, and light.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Arcane Background (Miracles), Healer, New Power, Power Points',
	},
	 hindrances: {
		 'en-US': 'Pacifist (Minor), Vow (care for the sick)',
	},
	 blurb: {
		 'en-US': 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d10","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FAITH":{"value":"d10"},"SKILL_HEALING":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d8"},"SKILL_TAUNT":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '3',
		toughness: '5',
		armor: '1',
		book: 2,
		page: 'p143'
	}
);
	// {"en-US":"Priest of War"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 155,
	 name: {
		 'en-US': 'Priest of War',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), battle axe (Str+d8), medium shield (+1 Parry), holy symbol',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Spells: War priests typically have 15 Power Points and know armor, boost/lower trait, and smite.',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Arcane Background (Miracles), New Power, Power Points',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Priests are the servants of the gods. Each deity has a network of priests, whose duty it is to spread the faith and ensure the tenets of the god are upheld by the faithful. Every priest has equipment and powers appropriate to his faith. A sample of commonly-encountered priests is presented below.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_FAITH":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_KNOWLEDGE":{"value":"d6","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p143'
	}
);
	// {"en-US":"Rat Men"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 158,
	 name: {
		 'en-US': 'Rat Men',
	},
	 gear: {
		 'en-US': 'Short sword (Str+d6)',
	},
	 treasure: {
		 'en-US': 'Meager, per 5 rat men',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4\nDirection Sense: Rat men usually live in sewers or slums. Maneuvering around these mazes has given them a good sense of direction. Rat men never get lost, even in nonnative locales.\nImmunity: Rat men are immune to poison and disease.\nInfection: Anyone bitten by a rat man must make a Vigor roll or the wound becomes swollen and infected. The victim suffers a level of Fatigue, which is recovered with a successful Healing roll or after 24 hours. Cumulative infections can cause a victim to be Incapacitated, but cannot lead to Death.',
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
		 'en-US': 'Rat men are, as the name implies, a cross between rats and humans. They are bipedal, but otherwise resemble rats. They are not lycanthropes, for they cannot change into a purely human form. Most rat men colonies are found in or beneath cities, where they scavenge for food and dropped coins.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d10"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p144'
	}
);
	// {"en-US":"Redcap"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 159,
	 name: {
		 'en-US': 'Redcap',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), great axe (Str+d10, &ndash;1 Parry, requires 2 hands)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': 'Fear: Characters seeing a redcap must make a Fear check.\nInfravision: Redcaps halve penalties for dark lighting against living targets (round down).\nSize+2: Redcaps stand over 8&rsquo; tall.',
	},
	 tags: {
		 'en-US': 'goblins,goblin',
	},
	 edges: {
		 'en-US': 'Berserk, Combat Reflexes, Improved Frenzy, Improved Nerves of Steel, Improved Sweep',
	},
	 hindrances: {
		 'en-US': 'Bloodthirsty',
	},
	 blurb: {
		 'en-US': 'Redcaps are related to goblins, but are much larger and more ferocious. Their name comes from the woolen hats they wear, which are soaked in the blood of their victims.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_TAUNT":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '10',
		armor: '1',
		book: 2,
		page: 'p144'
	}
);
	// {"en-US":"Roc"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 160,
	 name: {
		 'en-US': 'Roc',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Rich, In Nest',
	},
	 abilities: {
		 'en-US': 'Bash: Rocs have incredible lift, and can pick up small ships (those with a base Toughness of 15 or less) to drop them on the rocks. It takes the roc a full round to properly grasp a ship, which is a Fighting attack against a &ldquo;Parry&rdquo; of 2. With a raise, the roc lifts the boat in the air and ascends 6&rdquo; per round afterward. After five full rounds, it drops its prey, automatically destroying any boat it can lift. Characters suffer damage according to the height.\nFlight: Rocs have a Flying Pace of 16&rdquo;, with an Acceleration of 4&rdquo; and a Climb of 6&rdquo;.\nHuge: Characters add +4 when attacking a roc due to their great size.\nSize+8: Rocs are huge creatures with wingspans over 120&rsquo;.\nTalons: Str+d6; AP 4. These claws are large enough to damage ships with Heavy Armor and fortifications.',
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
		 'en-US': 'These massive birds are large enough to pick up small ships and whales. The great Sinbad the Sailor had a near-fatal encounter with one. Most roost in isolated aeries, searching for large prey for their feasts. Sailors and city guard have sometimes managed to fend off these beasts with ballistae, but even these weapons rarely penetrate the roc&rsquo;s lizard-like skin.',
	},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d6","strength":"d12+8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '14',
		armor: '0',
		book: 2,
		page: 'p144-p145'
	}
);
	// {"en-US":"Sabre-Toothed Tiger"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 161,
	 name: {
		 'en-US': 'Sabre-Toothed Tiger',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, In Lair',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d10, AP 1.\nClaws: Str+d6.\nImproved Frenzy: A sabre-toothed tiger may make two attacks each round with no penalty.\nPounce: Sabre-tooths often pounce on their prey to best bring their mass and teeth to bear. It can leap 1d6&rdquo; to gain +4 to its attack and damage. Its Parry is reduced by &ndash;2 until its next action when performing the maneuver, however.\nSize+3: Sabre-tooths weigh over 800 pounds.',
	},
	 tags: {
		 'en-US': 'saber,sabertooth',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Sabre-toothed tigers haunt grasslands using their patterned skin to sneak up on unsuspecting prey. Their twin canine teeth can slice through armor and bone as easily as flesh.',
	},
		attributes: '{"agility":"d10","smarts":"d6(A)","spirit":"d8","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p145'
	}
);
	// {"en-US":"Sand Border Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 49,
	 name: {
		 'en-US': 'Sand Border Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nImmunity: Half-damage from all non- magical attacks.\nSand Blast: Sand elementals can send directed blasts of air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d8.\nSeep: Sand elementals can squeeze through small gaps as if it were Difficult Ground. Unlike water elementals, they cannot travel through porous substances&mdash;there must be an actual hole through the obstacle (such as a keyhole).\nSlam: Str+d4\nWhirlwind: As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the sand elemental wins, its foe is pulled into the swirling maelstrom of its sandy body. While trapped, the target is at &ndash;2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form.',
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
		 'en-US': 'Sand elementals inhabit the dusty border between the realms of earth and air. They manifest as sandy humanoids, but can turn into whirling clouds of flying dust and grit.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d12","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// {"en-US":"Sand Troll"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 180,
	 name: {
		 'en-US': 'Sand Troll',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +1: Thick hide\nBurrow: Pace 4\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +3: Sand trolls are over 8&rsquo; tall.',
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
		 'en-US': 'Sand trolls primarily inhabit deserts, though they can sometimes be found on beaches. Their favorite tactic is to burrow just below the surface, then leap out to attack passing prey.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d6","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '11',
		armor: '1',
		book: 2,
		page: 'p151'
	}
);
	// {"en-US":"Scorpion Man"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 163,
	 name: {
		 'en-US': 'Scorpion Man',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, per 3 scorpion men',
	},
	 abilities: {
		 'en-US': 'Armor +2: Chitinous skin.\nFleet Footed: Scorpion Men roll a d8 for their running die, instead of a d6.\nMarksman: Scorpion men are expert archers. If they do not move in a turn, they may fire as if they took the aim maneuver.\nPoison: Anyone wounded or Shaken by a stinger attack must make a Vigor roll or become Incapacitated. Death follows in 2d6 minutes. A Healing roll at &ndash;2 prevents death\nStinger: Str+d6.',
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
		 'en-US': 'Scorpion men have the upper bodies of humans and the lower bodies of scorpions. They prefer hot, dusty environments, but can survive in temperate conditions. They guard their lairs with deadly force.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '8',
		armor: '2',
		book: 2,
		page: 'p146'
	}
);
	// {"en-US":"Scorpion, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 162,
	 name: {
		 'en-US': 'Scorpion, Giant',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, In Lair',
	},
	 abilities: {
		 'en-US': 'Armor +3: Chitinous skin.\nGrapple: A scorpion may grapple a foe with one or both pincers. If it uses both, each must make a successful opposed Strength roll. Escaping from a double grapple gives the prey a &ndash;4 penalty to his Strength roll to escape. A stinger attack against a grappled foe is made at +2, +4 if the victim is held in both pincers.\nImproved Frenzy: A sabre-toothed tiger may make two attacks each round with no penalty.\nPincers: Str+d4.\nPoison: Anyone wounded or Shaken by a stinger attack must make a Vigor roll or immediately become Incapacitated. Death follows in 2d6 rounds.\nStinger: Str+d6.\nSize+1: Giant scorpions measure 7&rsquo; in length.',
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
		 'en-US': 'Giant scorpions are usually found in hot climates. Unlike their normal-size cousins, giant scorpions are fierce predators.',
	},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d8","strength":"d12+1","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '11',
		armor: '3',
		book: 2,
		page: 'p145'
	}
);
	// {"en-US":"Sea Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 92,
	 name: {
		 'en-US': 'Sea Giant',
	},
	 gear: {
		 'en-US': 'Large maul (Str+d10, carried in one hand)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Aquatic: Sea giants have a Pace of 8 underwater.\nImproved Sweep: Sea giants can attack all adjacent foes at no penalty.\nHuge: Attackers gain +4 to attack rolls against sea giants due to their size.\nSize +8: Sea giants are over 35&rsquo; tall.',
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
		 'en-US': 'Giants come in several forms, but all share two common features&mdash;they are tall and they enjoy human flesh. Fortunately, they are also rather stupid.\nSea giants dwell in caves beneath the ocean. For the most part they eat marine animals, but sometimes they rise to the surface to swipe unsuspecting sailors from passing ships.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+7","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '15',
		armor: '0',
		book: 2,
		page: 'p121'
	}
);
	// {"en-US":"Sea Serpent"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 164,
	 name: {
		 'en-US': 'Sea Serpent',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Aquatic: Pace 12\nBite: Str+d6, Reach 2, Heavy Weapon.\nCrush: A sea serpent may wrap itsserpentine body around a ship (or large sea creature) as a grapple. Victims suffer damage each round the grapple is maintained. A sea serpent may crush and bite in the same round without incurring a multi-action penalty.\nGargantuan: Heavy Armor. Creatures add +4 when attacking the body of a sea serpent due to its great size. Add Size to damage when crushing but subtract Size of victim. This attack ignores any Armor value of a ship.\nLong Neck: A sea serpent&rsquo;s long neck gives it a Reach of 2.\nQuick: Sea serpents possess fast reflexes, able to turn in an instant and whip their long necks to attack passing prey. They redraw action cards of 5 or lower.\nSize +12: Sea serpents measure over 150&rsquo; long.',
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
		 'en-US': 'Sea serpents are monstrous beasts, capable of crushing ships into kindling. Even ship- mounted artillery can do little to hurt these nightmarish beasts.',
	},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d8","strength":"d12+8","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SWIMMING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '19',
		armor: '0',
		book: 2,
		page: 'p146'
	}
);
	// {"en-US":"Sea Troll"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 179,
	 name: {
		 'en-US': 'Sea Troll',
	},
	 gear: {
		 'en-US': 'Coral-tipped spear (Str+d6, Parry +1, Reach 1)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Aquatic: Sea trolls have a Pace of 10 underwater.\nArmor +1: Leathery hide\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSea Suit: +2 Stealth when hiding.',
	},
	 tags: {
		 'en-US': 'skrag,skrags,mane,manes,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Called sea trolls by some, skrags and manes by others, these flesh-eating fiends haunt areas of rocks and seaweed.\nThey dress in numerous soft kelps, seashells, and other natural materials that add +2 to their Stealth when they sit quietly in small pools or piles of detritus from the sea.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"},"SKILL_SWIMMING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '5',
		parry: '7',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// {"en-US":"Siren Bush"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 165,
	 name: {
		 'en-US': 'Siren Bush',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, around base',
	},
	 abilities: {
		 'en-US': 'Plant: Plants are not subject to Fear and Tests of Will.\nRoots: Str. Extending from the siren bush to a range of 3&rdquo; is a tangle of surface roots, each covered in sharp thorns. The roots are mobile and can attack everything within range with no multi-action penalty.\nSiren Song: Siren bushes emit a low, hypnotic hum when a living creatures approaches within 12&rdquo;. All creatures in range must make an opposed Spirit roll. Those who fail are subject to the puppet power. Normally the tree uses the power to draw its prey close enough for its roots to attach themselves, though if the need arises it can order them to defend it from attackers.',
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
		 'en-US': 'Siren bushes are carnivorous plants. When they detect living prey, they emit a hypnotic hum which lures the victim into the web of roots. Once close enough, the thorny roots rip into the target&rsquo;s flesh, saturating the surrounding ground in blood, which the roots then absorb.',
	},
		attributes: '{"agility":"d6","smarts":"d4(A)","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '5',
		toughness: '5',
		armor: '0',
		book: 2,
		page: 'p146'
	}
);
	// {"en-US":"Skeleton"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 166,
	 name: {
		 'en-US': 'Skeleton',
	},
	 gear: {
		 'en-US': 'Varies',
	},
	 treasure: {
		 'en-US': 'none',
	},
	 abilities: {
		 'en-US': 'Bony Claws: Str+d4\nFearless: Skeletons are immune to Fear and Intimidation.\nUndead: +2 Toughness; +2 to recover from being Shaken; No additional damage from Called Shots; Immune to disease and poison.',
	},
	 tags: {
		 'en-US': 'undead,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'The skin has already rotted from these risen dead, leaving them slightly quicker than their flesh-laden zombie counterparts.',
	},
		attributes: '{"agility":"d8","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://img2.wikia.nocookie.net/__cb20130516203624/warriorsofmyth/images/4/4a/640x747_16373_Skeleton_2d_fantasy_creature_dark_darkness_skeleton_warrior_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '7',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p147'
	}
);
	// {"en-US":"Sphinx"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 167,
	 name: {
		 'en-US': 'Sphinx',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Rich, in lair',
	},
	 abilities: {
		 'en-US': 'Bite/Claw: Str+d6\nFlight: Sphinxes have a Flying pace of 12&rdquo; and a Climb of 6&rdquo;.\nRiddles: Rather than immediately attack sentient prey, sphinxes prefer to enter into riddle contests. If the prey loses, it gets eaten. Riddle contests are conducted as an opposed Smarts roll.\nSize+2: Sphinxes are the same size as lions.\nStrong Willed: As masters of trickery, sphinxes gets a +2 bonus on Tests of Will.\nWise: Sphinxes are renowned for their wisdom. They get +2 to all Common Knowledge rolls and roll a d8 for all Knowledge skills.',
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
		 'en-US': 'An sphinx has the body of a lion, the head of a human (often female), and feathered wings. They are extremely clever, enjoy riddles, and savor the taste of human flesh.',
	},
		attributes: '{"agility":"d8","smarts":"d12+1","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TAUNT":{"value":"d12"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '7',
		toughness: '8',
		armor: '0',
		book: 2,
		page: 'p147'
	}
);
	// {"en-US":"Steam Border Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 50,
	 name: {
		 'en-US': 'Steam Border Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Elemental: No additional damage from called shots; Fearless; Immune to disease and poison.\nFlight: Steam elementals fly at a rate of 6" with a Climb rate of 4". They may never "run"\nImmunity: Steam elementals suffer no damage from non-magical attacks.\nSteam Blast: Steam elementals can send directed blasts of superheated air at foes using the Cone Template and a Shooting roll. Foes may make an opposed Agility roll to avoid the blast. The damage is 2d10 and ignores nonmagical Armor.\nSeep: Steam elementals can squeeze through any gaps or porous surfaces as if they were Difficult Ground\nSlam: Str+d4\nWhirlwind: As long as the elemental does not move that turn it may attempt to pick up a foe. Make an opposed Strength check. If the elemental wins then its foe is pulled into the swirling maelstrom of its steamy body. While trapped, the target is at &ndash;2 on all rolls (including damage, to hit, and Strength rolls to free himself), and suffers 2d6 damage per round. The elemental cannot move as long as it wants to keep foes trapped inside its form.',
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
		 'en-US': 'The last of the common border elementals are those inhabiting the overlap of the realms of fire and water. They manifest as clouds of swirling steam.',
	},
		attributes: '{"agility":"d12","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '-',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p105'
	}
);
	// {"en-US":"Stone Gargoyle"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 86,
	 name: {
		 'en-US': 'Stone Gargoyle',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Armor +4: Body of stone..\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Stone gargoyles are immune to fear and Intimidation.\nBite/Claws: Str+d6.\nCamouflage: Stone gargoyles receive +2 to Stealth rolls to blend in with normal, decorative gargoyles on buildings.\nFlight: Furies have a Flying Pace of 10" and a Climb of 4".\nPlunge: Gargoyles can literally drop like a rock. Any gargoyle that falls at least 4" to attack may add +4 to its damage.',
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
		 'en-US': 'Most gargoyles are lifeless statues used to impress or decorate, but some have been given magical life to serve as guardians. Whether they serve good or evil depends upon their controller&rsquo;s whim.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '3',
		parry: '7',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p118-p119'
	}
);
	// {"en-US":"Stone Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 101,
	 name: {
		 'en-US': 'Stone Golem',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Armor +4: Magically hardened stone.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nImproved Arcane Resistance: +4 Armor against damage-causing arcane powers and +4 on trait rolls to resist opposed powers.\nSize +1: Stone golems stand over 8&rsquo; high and weigh 4,000 pounds.\nStone Fists: Str+d6',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nStone golems are the traditional animated statue. As with most golems, they are shaped in the form of warriors and serve as guardians.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+2","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://4.bp.blogspot.com/-OM8U5jk53ao/TlqKIELs8qI/AAAAAAAAAKQ/QKcOvwxuTRk/s1600/stonegolem.jpg',
		charisma: '0',
		pace: '5',
		parry: '6',
		toughness: '13',
		armor: '4',
		book: 2,
		page: 'p124'
	}
);
	// {"en-US":"Straw Golem"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 102,
	 name: {
		 'en-US': 'Straw Golem',
	},
	 gear: {
		 'en-US': 'Pitchfork (Str+d6, Reach 1, requires 2 hands) or scythe (Str+d10, &ndash;1 Parry, requires 2 hands)',
	},
	 treasure: {
		 'en-US': 'None.',
	},
	 abilities: {
		 'en-US': 'Arcane Resistance: +2 Armor against damage-causing arcane powers and +2 on trait rolls to resist opposed powers.\nConstruct: +2 to recover from being Shaken; No additional damage from called shots; Immune to poison and disease.\nFearless: Golems are immune to Fear and Intimidation.\nWeaknes (Fire): Straw golems take double damage from fire.',
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
		 'en-US': 'Golems are magical constructs, given life through the imprisonment of a spirit within the golem&rsquo;s body. Creating one is costly and laborious, and few mages have the requisite knowledge. Despite being inhabited by a spirit, golems cannot talk.\nStraw golems are most often designed to resemble scarecrows. As well as scaring off birds and natural predators such as wolves, they can bolster a village&rsquo;s militia in times of invasion.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://www.entertainmentearth.com/images/AUTOIMAGES/MS019lg.jpg',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p124'
	}
);
	// {"en-US":"Succubus\/Incubus"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 67,
	 name: {
		 'en-US': 'Succubus/Incubus',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d4.\nDemon: +2 to recover from being Shaken; Immune to poison and disease; Half- damage from non-magical attacks except for cold iron.\nLife Drain: These foul creatures have more than one way to kill. If a succubus or incubus kisses a victim, they must make a Vigor roll opposed by the demon&rsquo;s Spirit or lose one die of Vigor. If Vigor drops to zero, the demon has sucked out the victim&rsquo;s life force, killing him. Assuming the victim survives, lost Vigor returns at the rate of one die per day.\nLure: Sometimes good looks aren&rsquo;t enough to lure prey to their doom. These demons can use the puppet power using their Spirit as their arcane skill. They have 20 Power Points for this purpose.\nVery Attractive: Succubi and Incubi resemble stunningly beautiful creatures in their illusory form. They can assume the shape of any sentient being. Their illusory appearance gives them +6 Charisma. A detect arcana spell can penetrate the illusion.\nWeakness (Cold Iron): Demons take normal damage from cold iron weapons.',
	},
	 tags: {
		 'en-US': 'demon,devil,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Succubi and incubi resemble beautiful females and males respectively. This form is illusory, however, and in their natural form they are winged demons with grotesque faces, leathery skin, and long claws. They use their illusory looks to lure unsuspecting victims into their deadly embrace.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_PERSUASION":{"value":"d12+2"}}',
		wildcard: 0,
		image: 'http://blaine.org/sevenimpossiblethings/wp-content/uploads/2009/08/incubus.jpg',
		charisma: '+6',
		pace: '6',
		parry: '6',
		toughness: '6',
		armor: '0',
		book: 2,
		page: 'p111-p112'
	}
);
	// {"en-US":"Thief"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 168,
	 name: {
		 'en-US': 'Thief',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), short sword (Str+d6), throwing knives (Range: 3/6/12, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager, Worthwhile in lair',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Thief',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Thieves earn a living from stealing from others. Some may be allies of the characters, other are antagonists. In a city or town, thieves often assemble into a guild. Despite being tricky customers, thieves&rsquo; guilds are often excellent sources of information&mdash;if you can find them.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d6"},"SKILL_LOCKPICKING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_STREETWISE":{"value":"d6"},"SKILL_TAUNT":{"value":"d6"},"SKILL_THROWING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p147'
	}
);
	// {"en-US":"Toad, Giant"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 170,
	 name: {
		 'en-US': 'Toad, Giant',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d6\nEngulf: Giant toads can swallow prey as large as Size +2 whole. While engulfed, the target is grappled as per the core rulebook with a &ndash;4 penalty to Strength rolls to escape and suffers 2d6 damage per round from digestive juices. Armor offers no protection\nLarge: Attackers are +2 to attack rolls against the toad due to its size.\nSize+4: Giant toads weigh over 4000 pounds.\nTongue: Reach 3. The tongue is coated in sticky saliva. If the toad scores a success on its Fighting roll, it has grappled its prey. Unless the foe can escape, it Engulfs him on its next action. On a raise, the victim is grappled and Engulfed in the same action.',
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
		 'en-US': 'Giant toads are monstrous, bloated amphibians, capable of swallowing a riding horse in one gulp.',
	},
		attributes: '{"agility":"d8","smarts":"d4(A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '10',
		armor: '0',
		book: 2,
		page: 'p148'
	}
);
	// {"en-US":"Town\/Village Militia"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 174,
	 name: {
		 'en-US': 'Town/Village Militia',
	},
	 gear: {
		 'en-US': 'Leather (+1), short sword (Str+d6), dagger (Str+d4), some use slings (Range: 4/8/12, Damage: Str+d4)',
	},
	 treasure: {
		 'en-US': 'Meager for every 5 soldiers',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'guard,police,guards,soldier,soldiers,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Militia are employed in smaller towns and in large villages. Though they are tasked with defending the area in case of emergency, it isn&rsquo;t their primary job, and they are not particularly skilled.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d4"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://wiki.totalwar.com/images/e/e5/Ven_pike_militia_info.png',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '6',
		armor: '1',
		book: 2,
		page: 'p149'
	}
);
	// {"en-US":"Tree Man Sapling"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 175,
	 name: {
		 'en-US': 'Tree Man Sapling',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick Bark\nCamouflage: When a tree man isn&rsquo;t moving or attacking it looks just like a normal tree. It adds +4 to Stealth rolls.\nLashing Branches: Str+d10, Reach 3.\nHuge: Characters add +4 when attacking a tree man because of its great size.\nImproved Sweep: May attack all adjacent foes.\nPowers: Tree men are lords of the forest. They have 10 Power Points and know beast friend and entangle.\nSize +6: Tree men are over 50&rsquo; tall\nWeakness (Fire): Fire-based attacks do +2 damage and the chance of catching alight is 5&ndash;6 on a d6.',
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
		 'en-US': 'According to the elves, tree men were present at the beginning of time. They are a sentient species, dedicated to guarding their forests against all forms of attack. They can resemble any form of regular tree, but are always of a type native to the forests in which they live.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d8","strength":"d12+3","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: 'http://digital-art-gallery.com/oid/10/3390x2712_3453_Tree_Man_2d_fantasy_tree_forest_god_picture_image_digital_art.jpg',
		charisma: '0',
		pace: '10',
		parry: '6',
		toughness: '15',
		armor: '2',
		book: 2,
		page: 'p149'
	}
);
	// {"en-US":"Troll"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 177,
	 name: {
		 'en-US': 'Troll',
	},
	 gear: {
		 'en-US': 'Spiked clubs (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +1: Rubbery hide\nClaws: Str+d4\nInfravision: Trolls halve penalties for bad lighting when attacking living targets (round down).\nRegeneration (Fast): Trolls roll to regenerate each round. Fire stops their regeneration, as does cutting off their heads.\nSize +2: Trolls are tall, lanky creatures over 8&rsquo; tall.',
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
		 'en-US': 'Trolls in myths and legends were horrid, flesh-eating creatures who lived in deep woods, beneath bridges, or in hidden mountain caves. In modern games and fiction, the ability to regenerate damage and a weakness to fire have been added. These statistics reflect both backgrounds.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d6","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_THROWING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '7',
		parry: '6',
		toughness: '10',
		armor: '1',
		book: 2,
		page: 'p150'
	}
);
	// {"en-US":"Typical Ranger"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 156,
	 name: {
		 'en-US': 'Typical Ranger',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Beast Master, Woodsman',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d6","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '1',
		book: 2,
		page: 'p143'
	}
);
	// {"en-US":"Tyrannosaurus Rex"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 181,
	 name: {
		 'en-US': 'Tyrannosaurus Rex',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick hide\nBite: Str+d8; AP 2.\nLarge: Creatures add +2 when attacking a T-rex due to their great size.\nRoar: As an action a T-rex can emit a terrifying roar. All those who hear the roar&mdash;typically anyone within a mile&mdash; must make a Spirit roll or be Shaken.\nSize +7: These fearsome creatures stand 30&rsquo; tall and weigh over 20,000 pounds.',
	},
	 tags: {
		 'en-US': 'dinosaur,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'King of the dinosaurs, the T-rex is a deadly predator, capable of taking on prey much larger than itself. T-rex are poorly suited for mountainous and dense forest terrain, and can most often be found in hilly areas or on plains, where they hunt large herbivores.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d8","strength":"d12+4","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.rareresource.com/photos/dinosaur-gallery/tyrannosaurus-rex.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '15',
		armor: '2',
		book: 2,
		page: 'p151'
	}
);
	// {"en-US":"Unicorn"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 182,
	 name: {
		 'en-US': 'Unicorn',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Fleet Footed: Unicorns roll a d10 for their running die, rather than a d6.\nForce of Good: Unicorns add +2 to damage when attacking supernatural evil foes, and have +2 Toughness when suffering damage from such creatures.\nHealing: A unicorn can cast healing and greater healing by touching its horn to a target. It has 40 Power Points. A horn cut from a living unicorn retains these powers. Anyone performing such a foul deed is cursed by the gods of good. The victim&rsquo;s skin becomes covered in boils and blisters which no magic can heal. He suffers &ndash;4 Charisma.\nKick: Str+d6\nSize +2: Unicorns weigh between 600 and 800 pounds.',
	},
	 tags: {
		 'en-US': 'scotland,scottish,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Often seen as the embodiment of good and purity, unicorns are white horses with a horn growing from their forehead. The horn is said to possess magical properties, which makes them a target for unscrupulous hunters. A unicorn that loses its horn while still alive instantly dies.',
	},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d10","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SPELLCASTING":{"value":"d12"},"SKILL_STEALTH":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '10',
		parry: '5',
		toughness: '9',
		armor: '0',
		book: 2,
		page: 'p151'
	}
);
	// {"en-US":"Velociraptor"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 183,
	 name: {
		 'en-US': 'Velociraptor',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +2: Velociraptors have thick scaly hides.\nBite or Rake: Str+d8\nSize +1: Velociraptors are about 7&rsquo; tall.',
	},
	 tags: {
		 'en-US': 'dinosaur,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'These smart, bipedal dinosaurs are pack hunters, and use remarkably well-developed tactics. True velociraptors were the size of turkeys&mdash;the larger variety made famous in the movies are actually dinonychus, a related species.',
	},
		attributes: '{"agility":"d8","smarts":"d8 (A)","spirit":"d6","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://velociraptorinmycloset.webstarts.com/uploads/43245373-velociraptors.jpg',
		charisma: '0',
		pace: '8',
		parry: '6',
		toughness: '9',
		armor: '2',
		book: 2,
		page: 'p152'
	}
);
	// {"en-US":"Veteran Knight"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 117,
	 name: {
		 'en-US': 'Veteran Knight',
	},
	 gear: {
		 'en-US': 'Corselet (+3), chain arms and legs (+2), closed helm (+3), long sword (Str+d8), medium shield (+1 Parry), lance (Str+d8, Reach 2, AP2 when charging), war horse',
	},
	 treasure: {
		 'en-US': 'Worthwhile, Treasure trove in castle',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Command, Noble',
	},
	 hindrances: {
		 'en-US': 'Code of Honor',
	},
	 blurb: {
		 'en-US': 'Knights are the fantasy equivalent of tanks&mdash;heavily armored and highly mobile. They differ from regular cavalry troops in that they are usually minor nobles, often with a fortified manor as their fief. Knights may be chivalric champions out to save princesses and slay dragons or despicable curs interested only in throwing their weight around.\nThese knights are the elite of a kingdom, having survived several battles. Most own a small castle and control 100 soldiers.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d10","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_KNOWLEDGE":{"value":"d8","special":{"en-US":"Battle"}},"SKILL_NOTICE":{"value":"d6"},"SKILL_RIDING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '+2',
		pace: '6',
		parry: '10',
		toughness: '10',
		armor: '3',
		book: 2,
		page: 'p130'
	}
);
	// {"en-US":"Veteran Ranger"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 157,
	 name: {
		 'en-US': 'Veteran Ranger',
	},
	 gear: {
		 'en-US': 'Leather armor (+1), long sword (Str+d8), dagger (Str+d4), long bow (Range: 15/30/60, Damage: 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': '',
	},
	 edges: {
		 'en-US': 'Beast Master, Combat Reflexes, Steady Hands, Woodsman',
	},
	 hindrances: {
		 'en-US': 'Various',
	},
	 blurb: {
		 'en-US': 'Rangers inhabit wilderness areas, preferring to avoid crowded towns and cities. Some belong to organizations often dedicated to hunting down evil creatures and protecting the wilds. Others are solitary, hiring out their services as guides and trackers.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d8"},"SKILL_FIGHTING":{"value":"d10"},"SKILL_HEALING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d10"},"SKILL_RIDING":{"value":"d6"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d8"},"SKILL_SURVIVAL":{"value":"d10"},"SKILL_TRACKING":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '8',
		armor: '1',
		book: 2,
		page: 'p144'
	}
);
	// {"en-US":"Veteran Watch"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 172,
	 name: {
		 'en-US': 'Veteran Watch',
	},
	 gear: {
		 'en-US': 'Corselet (+3), chain arms and legs (+2), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'guard,police,guards,soldier,soldiers,',
	},
	 edges: {
		 'en-US': 'Combat Reflexes',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'These fellows are well-trained, well- equipped, and well-led. They are veterans of many scrapes and know how to handle themselves.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://blogs-images.forbes.com/erikkain/files/2012/05/holy-grail-guard.jpg',
		charisma: '0',
		pace: '6',
		parry: '8',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p148'
	}
);
	// {"en-US":"War tree"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 184,
	 name: {
		 'en-US': 'War tree',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +4: Thick bark.\nBranch Swipe: Str+d6, Reach 1.\nHuge: Attackers are +4 to attack rolls against a war tree due to its siz\nPlant: Plants are not subject to Fear and Tests of Will.\nSize +8: An average war tree is over 40&rsquo; tall.\nStomp: Str+d10. The creature is naturally adept at using its full weight to smash its foes. Nonrigid armor (leather, chain mail) offers no protection against the stomp.\nSweep: A war tree can attack all adjacent opponents at no penalty.\nWeakness (Fire): Fire attacks cause +4 damage.',
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
		 'en-US': 'War trees are regular trees animated through dryad or special elven magic. They are not sentient, but possess animal-like intelligence.',
	},
		attributes: '{"agility":"d4","smarts":"d4 (A)","spirit":"d10","strength":"d12+6","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '19',
		armor: '4',
		book: 2,
		page: 'p152'
	}
);
	// {"en-US":"Watch Captain"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 173,
	 name: {
		 'en-US': 'Watch Captain',
	},
	 gear: {
		 'en-US': 'Corselet (+3), plate arms and legs (+3), open helm (+3), long sword (Str+d8), dagger (Str+d4), medium shield (+1 Parry)',
	},
	 treasure: {
		 'en-US': 'Worthwhile',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'guard,police,guards,soldier,soldiers,',
	},
	 edges: {
		 'en-US': 'Block, Combat Reflexes, Command',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Captains command a squad of town or city guards and answer only to the ruling authority.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d8","strength":"d10","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d10"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_RIDING":{"value":"d8"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 1,
		image: 'http://rs264.pbsrc.com/albums/ii174/Alowhakid/1265385946003.gif~c200',
		charisma: '0',
		pace: '6',
		parry: '9',
		toughness: '9',
		armor: '3',
		book: 2,
		page: 'p149'
	}
);
	// {"en-US":"Watch"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 171,
	 name: {
		 'en-US': 'Watch',
	},
	 gear: {
		 'en-US': 'Chain mail (+2), long sword (Str+d8), open helm (+3), medium shield (+1 Parry), some are equipped with crossbows (Range: 15/30/60, Damage 2d6)',
	},
	 treasure: {
		 'en-US': 'Meager for every 3 soldiers',
	},
	 abilities: {
		 'en-US': '',
	},
	 tags: {
		 'en-US': 'guard,police,guards,soldier,soldiers,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'The watch are charged with maintaining law and order within the settlement and defending it in time of attack. Depending on the settlement, the watch may be a full-time professional body led by officers or local farmers.',
	},
		attributes: '{"agility":"d6","smarts":"d6","spirit":"d6","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d6"},"SKILL_STEALTH":{"value":"d6"}}',
		wildcard: 0,
		image: 'http://www.oocities.org/televisioncity/4766/film/hg/frenchsn.jpg',
		charisma: '0',
		pace: '6',
		parry: '7',
		toughness: '7',
		armor: '2',
		book: 2,
		page: 'p148'
	}
);
	// {"en-US":"Water Elemental"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 78,
	 name: {
		 'en-US': 'Water Elemental',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Aquatic: Pace 12\nElemental: No additional damage from called shots;Fearless; Immune to disease and poison.\nInvulnerability: Water elementals are immune to all non-magical attacks except fire. A torch or lantern causes them 1d6 damage but is instantly put out if it hits.\nSeep: Water elementals can squeeze through any porous gap as if it were Difficult Ground.\nSlam: Str+d6; nonleathal damage.\nWaterspout: Water spirits can project a torrent of water using the Cone Template. Those in the area may make an Agility roll opposed by the spirit&rsquo;s Shooting to avoid it or suffer 2d8 nonlethal damage. This puts out any normal fires.',
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
		 'en-US': 'Elementals are living spirits of earth, fire, water, and air. These are average examples of such creatures. They may be more or less powerful in specific settings.\nWater spirits are frothing, man-shaped creatures of water and sea-foam.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d6","strength":"d10","vigor":"d10"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d6"},"SKILL_SHOOTING":{"value":"d8"},"SKILL_SWIMMING":{"value":"d12+2"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p116-117'
	}
);
	// {"en-US":"Werebear"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 185,
	 name: {
		 'en-US': 'Werebear',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Meager, in lair',
	},
	 abilities: {
		 'en-US': 'Bear Hug: A werebear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the hug on his action, which requires a raise on an opposed Strength roll.\nBite/Claws: Str+d8\nInfection: Anyone slain by a has a 50% chance of rising as a werebear themselves. The character involuntarily transforms every full moon. He gains control of his lycanthropy only after 1d6 years as a wearbear.\nImmunity: Werecreatures cannot be wounded by weapons that are not silver, only Shaken\nLow Light Vision: Werebears ignore penalties for Dim and Dark lighting.\nSize +2: These creatures stand up to 8&rsquo; tall and weigh over 1000 pounds each.\nWeakness (Silver): Wearbears suffer normal damage from silver weapons.',
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
		 'en-US': 'Whereas werewolves take delight in using their powers to kill, werebears are generally more refrained. Even in human form, werebears prefer to stay far from civilization. Good werebears, and they do exist, often help elves and rangers patrol the wilderness. Those of evil nature revel in their dark powers, however.',
	},
		attributes: '{"agility":"d8","smarts":"d6","spirit":"d8","strength":"d12+6","vigor":"d12+2"}',
		skills: '{"SKILL_FIGHTING":{"value":"d12+2"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d12"},"SKILL_SWIMMING":{"value":"d6"},"SKILL_STEALTH":{"value":"d8"},"SKILL_TRACKING":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '9',
		toughness: '11',
		armor: '0',
		book: 2,
		page: 'p153'
	}
);
	// {"en-US":"Wight"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 186,
	 name: {
		 'en-US': 'Wight',
	},
	 gear: {
		 'en-US': 'Ancient bronze breastplate (+3), bronze long sword (Str+d8)',
	},
	 treasure: {
		 'en-US': 'Rich, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +1: Leathery Skin\nBony Claws: Str+d4\nFear -1: Anyone who sees a wight must make a Fear check at &ndash;1.\nFearless: Wights are immune to Fear and Intimidation.\nPoison: Wights&rsquo; claws deliver a powerful neurotoxin. A character clawed by a wight must make a Vigor roll at &ndash;2. With success, the character gets the &ldquo;shakes,&rdquo; suffering &ndash;1 to all trait rolls for 24 hours. On a failure, the victim becomes immediately Incapacitated and dies in 2d6 rounds unless treated. A successful Healing roll at &ndash;2 prevents this.\nQuick: Wights redraw action cards less than 5.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.',
	},
	 tags: {
		 'en-US': 'undead,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Wights are restless dead, most often noble lords whose greed and earthly desires cause their spirits to remain behind to guard their treasures.',
	},
		attributes: '{"agility":"d8","smarts":"d8","spirit":"d10","strength":"d8","vigor":"d8"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d6"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '11',
		armor: '4',
		book: 2,
		page: 'p153'
	}
);
	// {"en-US":"Will-o-the-Wisp"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 187,
	 name: {
		 'en-US': 'Will-o-the-Wisp',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Charm: By swaying from side to side and pulsating, wisps can charm prey into following them. This requires a Spirit roll opposed by the victim&rsquo;s Smarts. If the victim ever loses sight of the wisp, the charm is broken.\nSize -2: Wisps measure 1&rsquo; in diameter.\nSmall: Attackers are &ndash;2 to attack wisps because of their size.',
	},
	 tags: {
		 'en-US': 'willowisp,will-o-wisp,marsh,phantom,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Also known as marsh phantoms and ghost lanterns, wisps are malicious spirits resembling glowing balls of light. They captivate victims with their lights, then lead them into quicksand or the lairs of dangerous beasts. They have no combat capabilities and so try to remain a safe distance from their prey.',
	},
		attributes: '{"agility":"d10","smarts":"d6","spirit":"d8","strength":"d4","vigor":"d6"}',
		skills: '{"SKILL_NOTICE":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '8',
		parry: '2',
		toughness: '3',
		armor: '0',
		book: 2,
		page: 'p153'
	}
);
	// {"en-US":"Woolly Mammoth"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 127,
	 name: {
		 'en-US': 'Woolly Mammoth',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick hide and fur.\nImmunity (Cold): Mammoths take no damage from cold, including magical attacks.\nLarge: Attackers have +2 to attack rolls against these beasts due to their size\nSize +6: Mammoths weigh over 5,000 pounds.\nTrample: Str.\nTusks: Str+d6',
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
		 'en-US': 'Mammoths are large elephants with long, curling tusks and thick, woolly coats. They are found only in cold climates.',
	},
		attributes: '{"agility":"d6","smarts":"d4 (A)","spirit":"d6","strength":"d12+6","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '5',
		toughness: '16',
		armor: '2',
		book: 2,
		page: 'p133'
	}
);
	// {"en-US":"Wyvern"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 188,
	 name: {
		 'en-US': 'Wyvern',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'Worthwhile, in lair',
	},
	 abilities: {
		 'en-US': 'Armor +2: Thick Scales\nBite/Sting: Str+d6, Reach 1\nImproved Frenzy: Wyverns may make a bite and sting attack in the same round at no penalty.\nPoison: Anyone Shaken or wounded by a sting attack must make a Vigor roll at &ndash;2 or be paralyzed for 1d6 rounds.\nQuick: Wyverns move with exceptional speed. They redraw action cards of 5 or lower.\nSize +3: Wyverns weigh around 1500 points',
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
		 'en-US': 'Wyverns resemble small, two-legged dragons. They have no fiery breath, but possess long necks, sharp teeth, and a poisonous sting in their tail. Some wyverns have wings (Flight: 6&rdquo;; Climb 3&rdquo;).',
	},
		attributes: '{"agility":"d8","smarts":"d6 (A)","spirit":"d8","strength":"d12+2","vigor":"d10"}',
		skills: '{"SKILL_CLIMBING":{"value":"d6"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '2',
		book: 2,
		page: 'p153'
	}
);
	// {"en-US":"Zombie Bear"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 190,
	 name: {
		 'en-US': 'Zombie Bear',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Bear Hug: Bears don&rsquo;t actually &ldquo;hug&rdquo; their victims, but they do attempt to use their weight to pin their prey and rend it with their claws and teeth. A bear that hits with a raise has pinned his foe and attacks at +2 until the foe is freed. The opponent may only attempt to escape the &ldquo;hug&rdquo; on his action, which requires a raise on an opposed Strength roll.\nClaws: Str+d6\nSize+2: These creatures stand up to 8&rsquo; tall and weigh over 1000 pounds each.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie&rsquo;s head are +2 damage.',
	},
	 tags: {
		 'en-US': 'undead,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline.',
	},
		attributes: '{"agility":"d6","smarts":"d6(A)","spirit":"d8","strength":"d12+4","vigor":"d12"}',
		skills: '{"SKILL_FIGHTING":{"value":"d8"},"SKILL_NOTICE":{"value":"d8"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '12',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);
	// {"en-US":"Zombie Giant Spider"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 191,
	 name: {
		 'en-US': 'Zombie Giant Spider',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Bite: Str+d4\nPoison(-4): The bite of the spider causes instant paralysis for those who fail their Vigor roll. It lasts for 1d6 rounds.\nWebbing: Spiders can cast webs from their thorax that are the size of Small Burst Templates. This is a Shooting roll with a range of 3/6/12. Anything in the web must cut or break their way free (Toughness 7). Webbed characters can still fight, but all physical actions are at &ndash;4.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie&rsquo;s head are +2 damage.',
	},
	 tags: {
		 'en-US': 'undead,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'Obviously zombie animals are much more dangerous than regular zombies. You may wish to increase the Power Point cost to raise zombie animals to reflect this. Increasing the cost by 1 Power Point per level of Size is a good place to start, but you could just as easily use the shape change chart as a guideline.',
	},
		attributes: '{"agility":"d10","smarts":"d4(A)","spirit":"d6","strength":"d10","vigor":"d6"}',
		skills: '{"SKILL_CLIMBING":{"value":"d12+2"},"SKILL_FIGHTING":{"value":"d8"},"SKILL_INTIMIDATION":{"value":"d10"},"SKILL_NOTICE":{"value":"d8"},"SKILL_SHOOTING":{"value":"d10"},"SKILL_STEALTH":{"value":"d10"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '6',
		parry: '6',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);
	// {"en-US":"Zombie"}
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 189,
	 name: {
		 'en-US': 'Zombie',
	},
	 gear: {
		 'en-US': '',
	},
	 treasure: {
		 'en-US': 'None',
	},
	 abilities: {
		 'en-US': 'Claws: Str+d4\nFearless: Zombies are immune to Fear and Intimidation.\nUndead: +2 Toughness; +2 to recover from being Shaken; Immune to poison and disease; No additional damage from called shots.\nWeakness (Head): Shots to a zombie&rsquo;s head are +2 damage.',
	},
	 tags: {
		 'en-US': 'undead,',
	},
	 edges: {
		 'en-US': '',
	},
	 hindrances: {
		 'en-US': '',
	},
	 blurb: {
		 'en-US': 'These walking dead are typical groaning fiends looking for fresh meat.',
	},
		attributes: '{"agility":"d6","smarts":"d4","spirit":"d4","strength":"d6","vigor":"d6"}',
		skills: '{"SKILL_FIGHTING":{"value":"d6"},"SKILL_INTIMIDATION":{"value":"d6"},"SKILL_NOTICE":{"value":"d4"},"SKILL_SHOOTING":{"value":"d6"}}',
		wildcard: 0,
		image: '',
		charisma: '0',
		pace: '4',
		parry: '5',
		toughness: '7',
		armor: '0',
		book: 2,
		page: 'p154'
	}
);



