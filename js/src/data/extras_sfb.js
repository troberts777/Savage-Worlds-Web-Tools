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




	// Acolyte, Cultist
savageWorldsExtrasDatabase = savageWorldsExtrasDatabase.concat(
	{
		id: 206,
		name: {
			'en-US' : 'Acolyte, Cultist',
		},
		gear: {
			'en-US' : '',
		},
		treasure: {
			'en-US' : '',
		},
		abilities: {
			'en-US' : 'Fervor: Cultists can whip themselves up into a religious fervor. This takes a Spirit roll and a normal action. Once in this frenzy, they get a +2 to all Fighting and Guts rolls, and a +2 to any Smarts, Shooting, or Notice rolls. This fervor lasts until the combat ends.\nArmor+2:In a fantasy setting, acolytes usually wear medium-weight armor, such as chainmail. In a more modern setting, they\'ll wear only their ceremonial robes.\nWeapons: Acolytes typically carry swords,clubs, or maces;these are Str+d6 weapons. Some will carry crossbows (15/30/60, 2d6, AP2, takes 1 action to reload). Most will also carry a dagger, usually ceremonial but always functional (Str+d4). Modern acolytes will carry low-quality firearms (10/20/40, 2d6-1, Semi-Auto)',
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
			'en-US' : 'Acolytes are non-powered clerics, or cultists; they\'re the lowest level of a clerical or a religious organization, lacking the ability to manifest miracles. They\'re often led by a more powerful cleric.\n',
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



