/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

savageWorldsHindrances = Array(
{
	 name: {
		 'en-US': 'All Thumbs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Elves have an inbred dislike of mechanical objects, and thus have the All Thumbs Hindrance. They shun most mechanical items and designs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'elf-all-thumbs',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Anemic',
	},
	 description: {
		 'en-US': 'An anemic character is particularly susceptible to sickness, disease, environmental effects, and fatigue. He subtracts 2 from all Fatigue checks such as those made to resist poison and disease. (See page 86 for more information on Fatigue and the various hazards that lead to it.)',
	},
	 tag: 'anemic-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Arrogant',
	},
	 description: {
	},
	 tag: 'arrogant-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Asimov Circuits',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The android cannot harm, or by inaction bring harm to sentient beings. This gives him the Pacifist Hindrance (Major).',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-asimov-circuits',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Bad Eyes',
	},
	 description: {
	},
	 tag: 'bad-eyes-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Bad Eyes',
	},
	 description: {
	},
	 tag: 'bad-eyes-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Bad Luck',
	},
	 description: {
		 'en-US': 'Your hero is a little less lucky than most. He gets one less Benny per game session than normal. A character cannot have both Bad Luck and the Luck Edge.',
	},
	 tag: 'bad-luck-major',
	 conflicts_edge: 'luck',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Big Mouth',
	},
	 description: {
		 'en-US': 'Loose lips sink ships, the saying goes. Your hero\'s mouth could drown an armada.,Your character can\'t keep a secret very well. He reveals plans and gives away things best kept among friends, usually at the worst possible times.',
	},
	 tag: 'big-mouth-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Blind',
	},
	 description: {
		 'en-US': 'The individual is completely without sight. He suffers a -6 to all physical tasks that require vision (which is most everything) and -2 to most social tasks as he can\'t "read" those he\'s interacting with as well as others.,On the plus side, Blind characters gain their choice of a free Edge to compensate for this particularly difficult Hindrance.',
	},
	 tag: 'blind-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function ( charObject ) {
			charObject.availableEdgePoints++;
		}
},
{
	 name: {
		 'en-US': 'Bloodthirsty',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Rakashans can be cruel to their foes, often toying with them for simple amusement. They rarely take prisoners and feel little compunction about punishing captured foes. This causes a ‚Ä"4 Charisma penalty among more ‚Äúcivilized‚Äù types.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'rakasha-bloodthirsty',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.charisma = charObject.derived.charisma - 4;
}
},
{
	 name: {
		 'en-US': 'Bloodthirsty',
	},
	 description: {
		 'en-US': 'Your hero never takes prisoners unless under the direct supervision of a superior. This can cause major problems in a military campaign unless his superiors condone that sort of thing. Your killer suffers -4 to his Charisma, but only if his cruel habits are known.',
	},
	 tag: 'bloodthirsty-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Cautious',
	},
	 description: {
		 'en-US': 'Some folks gather too much intelligence. This character personifies over-cautiousness. He never makes rash decisions and likes to plot things out in detail long before any action is taken.',
	},
	 tag: 'cautious-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Clueless',
	},
	 description: {
		 'en-US': 'Your hero isn\'t as aware of his world as most others. He suffers -2 to Common Knowledge rolls.',
	},
	 tag: 'clueless-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Code of Honor',
	},
	 description: {
		 'en-US': 'Honor is very important to your character. He keeps his word, won\'t abuse or kill prisoners, and generally tries to operate within his world\'s particular notion of proper gentlemanly or ladylike behavior.',
	},
	 tag: 'code-of-honor-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Construct',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Androids add +2 to recover from being Shaken, don\'t suffer wound modifers, and are immune to poison and disease. Androids cannot heal naturally. To heal an android requires the Repair skill‚Ä"which is used like the Healing skill only with no ‚ÄúGolden Hour.‚Äù',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-construct',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Curious',
	},
	 description: {
		 'en-US': 'It killed the cat, and it might kill your hero as well. Curious characters are easily dragged into any adventure. They have to check out everything and always want to know what\'s behind a potential mystery.',
	},
	 tag: 'curious-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Deathwish',
	},
	 description: {
		 'en-US': 'Having a death wish doesn\'t mean your adventurer is suicidal-but he does want to die after completing some important goal. Maybe he wants revenge for the murder of his family, or maybe he\'s dying from disease and wants to go out in a blaze of glory. He won\'t throw his life away for no reason, but when there\'s a chance to complete his goal, he\'ll do anything-and take any risk-to achieve it.,This hindrance is usually Minor unless the goal is relatively easily fulfilled (very rare)',
	},
	 tag: 'deathwish-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Dehydration',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Atlanteans must immerse themselves in water one hour out of every 24 or become automatically Fatigued each day until they are Incapacitated. The day after that, they perish.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'atlantean-dehydration',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Delusion',
	},
	 description: {
		 'en-US': 'Your hero believes something that is considered quite strange by everyone else. Minor Delusions are harmless or the character generally keeps it to himself (the government puts sedatives in soft drinks, dogs can talk, we\'re all just characters in some bizarre game, etc.).',
	},
	 tag: 'delusion-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Delusion',
	},
	 description: {
		 'en-US': 'Your hero believes something that is considered quite strange by everyone else. Minor Delusions are harmless or the character generally keeps it to himself (the government puts sedatives in soft drinks, dogs can talk, we\'re all just characters in some bizarre game, etc.).,With a Major Delusion, he expresses his view on the situation frequently and it can occasionally lead to danger (the) government is run by aliens, hospitals are deadly, I\'m allergictoarmor,zombiesare my friends).',
	},
	 tag: 'delusion-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Doubting Thomas',
	},
	 description: {
		 'en-US': 'Some people don\'t believe in the supernatural until they\'re halfway down some creature\'s gullet. Doubting Thomases are skeptics who try their best to rationalize supernatural events. Even once a Doubting Thomas realizes the supernatural exists, he still tries to rationalize weird events, following red herrings or ignoring evidence.,Doubting Thomases suffer -2 to their Fear checks when confronted with undeniable supernatural horror.',
	},
	 tag: 'doubting-thomas-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Elderly',
	},
	 description: {
		 'en-US': 'Your adventurer is getting on in years, but he\'s not quite ready for the nursing home. His Pace is reduced by 1, and his Strength and Vigor drop a die type to a minimum of d4, and cannot be raised thereafter.,On the plus side, the wisdom of his years grants the hero 5 extra skill points that may be used for any skills linked to Smarts.',
	},
	 tag: 'elderly-major',
	 conflicts_edge: '',
	 conflicts_hindrance: 'young',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function (charObject) {
			charObject.derived.pace--;
			charObject.attributes.strength--;
			charObject.attributes.vigor--;

			if(charObject.attributes.strength < 1)
				charObject.attributes.strength = 1;
			if(charObject.attributes.vigor < 1)
				charObject.attributes.vigor = 1;

			charObject.skill_points += 5;
		}
},
{
	 name: {
		 'en-US': 'Enemy',
	},
	 description: {
		 'en-US': 'Someone out there hates the character and wants him dead. The value of the Hindrance depends on how powerful the enemy is and how often he might show up. A Minor Enemy might be a lone gunslinger out for vengeance. A Major Enemy might be a supernatural gunslinger who wants your hero dead.,If the enemy is one day defeated, the GM should gradually work in a replacement, or the hero may buy off the Hindrance by sacrificing an Advance.',
	},
	 tag: 'enemy-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Enemy',
	},
	 description: {
		 'en-US': 'Someone out there hates the character and wants him dead. The value of the Hindrance depends on how powerful the enemy is and how often he might show up. A Minor Enemy might be a lone gunslinger out for vengeance. A Major Enemy might be a supernatural gunslinger who wants your hero dead.,If the enemy is one day defeated, the GM should gradually work in a replacement, or the hero may buy off the Hindrance by sacrificing an Advance.',
	},
	 tag: 'enemy-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Greedy',
	},
	 description: {
	},
	 tag: 'greedy-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Greedy',
	},
	 description: {
	},
	 tag: 'greedy-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Habit',
	},
	 description: {
	},
	 tag: 'habit-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Hard of Hearing',
	},
	 description: {
		 'en-US': 'Characters who have lost some or all of their hearing have this disadvantage. As a Minor Hindrance, it subtracts 2 from all Notice rolls made to hear, including awaking due to loud noises.',
	},
	 tag: 'hard-of-hearing-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Hard of Hearing',
	},
	 description: {
		 'en-US': 'Characters who have lost some or all of their hearing have this disadvantage. A Major Hindrance means the character is deaf. She cannot hear and automatically fails all Notice rolls that depend on hearing.',
	},
	 tag: 'hard-of-hearing-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Heroic',
	},
	 description: {
		 'en-US': 'This noble soul never says no to a person in need. She doesn\'t have to be happy about it, but she always comes to the rescue of those she feels can\'t help themselves. She\'s the first one to run into a burning building, usually agrees to hunt monsters for little or no pay, and is generally a pushover for a sob story.',
	},
	 tag: 'heroic-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Hollow-Boned',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Avions have -1 Toughness',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'hollow-boned',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( characterObject ) {
	characterObject.derived.toughness -= 1;
}
},
{
	 name: {
		 'en-US': 'Illiterate',
	},
	 description: {
		 'en-US': 'Your hero cannot read. He can probably sign his name and knows what a STOP sign says, but can do little else. He also doesn\'t know much about math either. He can probably do 2+2=4, but multiplication and the like are beyond him.,Illiterates can\'t read or write in any language, by the way, no matter how many they actually speak.',
	},
	 tag: 'illiterate-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Lame',
	},
	 description: {
		 'en-US': 'A past wound has nearly crippled your hero. His basic Pace is reduced by 2 and he rolls only a d4 for running rolls. A character\'s Pace may never be reduced below 1.',
	},
	 tag: 'lame-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function ( charObject ) {
			charObject.derived.pace = charObject.derived.pace - 2;
		}
},
{
	 name: {
		 'en-US': 'Loyal',
	},
	 description: {
		 'en-US': 'Your character may not be a hero, but he\'d give his life for his friends. This character can never leave a man behind if there\'s any chance at all he could help.',
	},
	 tag: 'loyal-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Mean',
	},
	 description: {
		 'en-US': 'This fellow is ill-tempered and disagreeable. No one really likes him, and he has trouble doing anything kind for anyone else. He must be paid for his troubles and doesn\'t even accept awards graciously. Your character suffers -2 to his Charisma.',
	},
	 tag: 'mean-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Obese',
	},
	 description: {
		 'en-US': 'Particularly large people often have great difficulty in dangerous physical situations. Those who carry their weight well have the Brawny Edge. Those who don\'t handle it very well are Obese. A character cannot be both Brawny and Obese.,An Obese hero adds 1 to his Toughness, but his Pace is decreased by 1 and his running die is a d4. Obese characters may also have difficulty finding armor or clothing that fits, squeezing into tight spaces, or even riding in confined spaces such as coach airplane seats or compact cars.',
	},
	 tag: 'obese-minor',
	 conflicts_edge: 'brawny',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function (charObject) {
			charObject.derived.toughness++;
			charObject.derived.pace--;
		}
},
{
	 name: {
		 'en-US': 'One Arm',
	},
	 description: {
		 'en-US': 'Whether by birth or battle, your hero has lost an arm. Fortunately, his other arm is (now) his "good" one. Tasks that require two hands, such as Climbing, suffer a -4 modifier.',
	},
	 tag: 'one-arm-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'One Eye',
	},
	 description: {
		 'en-US': 'Your hero lost an eye for some unfortunate reason. If he doesn\'t wear a patch or buy a glass replacement (typically $500), he suffers -1 to his Charisma for the grotesque wound.,He suffers -2 to any Trait rolls that require depth perception, such as Shooting or Throwing, jumping a ravine or rooftop, and so on.',
	},
	 tag: 'one-eye-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'One Leg',
	},
	 description: {
		 'en-US': 'With a prosthetic, One Leg acts exactly like the Lame Hindrance, reducing Pace by 2 and running rolls are now a d4. Without a prosthetic, the character\'s Pace is 2 and he can never run. He also suffers -2 to Traits that require mobility, such as Climbing and Fighting. A character with one leg also suffers a -2 penalty to his Swimming skill (and Pace).',
	},
	 tag: 'one-leg-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Outsider',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Organic races often mistrust or misunderstand androids. They subtract 2 from their Charisma when dealing with races other than their own.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-outsider',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.charisma = charObject.derived.charisma - 2;
}
},
{
	 name: {
		 'en-US': 'Outsider',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-elves aren\'t true outsiders (as per the Hindrance of the same name), but neither are they ever quite comfortable around humans or elves as one of their own, so the effect is the same.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'half-elf-outsider',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.charisma = charObject.derived.charisma - 2;
}

},
{
	 name: {
		 'en-US': 'Outsider',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-orcs aren\'t trusted by most other civilized races, and so subtract 2 from their Charisma.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'half-orc-outsider',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.charisma = charObject.derived.charisma - 2;
}
},
{
	 name: {
		 'en-US': 'Outsider',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Most races distrust the\nunblinking saurians. Their habit of eating their meat still squirming is also less than appetizing. They suffer a ‚Ä"2 Charisma\npenalty.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'saurian-outsider',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.charisma = charObject.derived.charisma - 2;
}
},
{
	 name: {
		 'en-US': 'Outsider',
	},
	 description: {
		 'en-US': 'In a society made up of only a few types of people, your hero isn\'t one of them. An Indian in a Western town, an alien in a sci-fi game of human marines, or a half-orc in a party of elves, dwarves, and humans are all examples of outsiders. Locals are likely to raise prices on the Outsider, ignore pleas for help, and generally treat him as if he\'s of a lower class than the rest of their society.,In addition to the roleplaying effects above, your hero\'s Charisma suffers a -2 modifier among all but his own people.',
	},
	 tag: 'outsider-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Overconfident',
	},
	 description: {
		 'en-US': 'There\'s nothing out there your hero can\'t defeat. At least that\'s what he thinks. He believes he can do most anything and never wants to retreat from a challenge. He\'s not suicidal, but he certainly takes on more than common sense dictates.',
	},
	 tag: 'overconfident-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Pacifist',
	},
	 description: {
		 'en-US': 'Your hero absolutely despises violence. Minor pacifism means he only fights when given no other choice, and never allows the killing of prisoners or other defenseless victims.',
	},
	 tag: 'pacifist-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Pacifist',
	},
	 description: {
		 'en-US': 'Major Pacifists won\'t fight living characters under any circumstances. They may defend themselves, but won\'t do anything to permanently harm sentient, living creatures. Note that undeniably evil creatures, undead, demons, and the like are fair game. A Major Pacifist might also fight with nonlethal methods, such as with his fists. Such characters only do so when obviously threatened, however.',
	},
	 tag: 'pacifist-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Phobia',
	},
	 description: {
		 'en-US': 'Phobias are overwhelming and irrational fears that stay with a hero for the rest of his life. Whenever a character is in the presence of his phobia, he subtracts 2 from all his Trait tests as a Minor Hindrance, and 4 if the fear is a Major Phobia.,Phobias shouldn\'t be too obvious-everyone should be afraid of vampires, for example, so it\'s not a phobia-it\'s common sense. Instead, the phobia usually centers on some random element the mind focused on during whatever encounter caused such a fright. Remember, phobias are irrational fears.',
	},
	 tag: 'phobia-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Phobia',
	},
	 description: {
		 'en-US': 'Phobias are overwhelming and irrational fears that stay with a hero for the rest of his life. Whenever a character is in the presence of his phobia, he subtracts 2 from all his Trait tests as a Minor Hindrance, and 4 if the fear is a Major Phobia.,Phobias shouldn\'t be too obvious-everyone should be afraid of vampires, for example, so it\'s not a phobia-it\'s common sense. Instead, the phobia usually centers on some random element the mind focused on during whatever encounter caused such a fright. Remember, phobias are irrational fears.',
	},
	 tag: 'phobia-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Poverty',
	},
	 description: {
		 'en-US': 'It\'s said a fool and his money are soon parted. Your hero is that fool. He starts with half the usual money for your setting and just can\'t seem to hang onto funds acquired after play begins. In general, the player halves his total funds every game week.',
	},
	 tag: 'poverty-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Quirk',
	},
	 description: {
		 'en-US': 'Your hero has some minor foible that is usually humorous, but can occasionally cause him trouble. A swashbuckler may always try to first slash his initials on his foes before attacking, a dwarf may brag constantly about his culture, or a snobby debutante might not eat, drink, or socialize with the lower class.',
	},
	 tag: 'quirk-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Racial Enemy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Rakashan society rose at the expense of another. Pick a common race in your setting. Members of each culture suffer a -4Charisma when dealing with each other. Unless fettered by other authorities or common goals, individuals of the two races typically attack each other on sight.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'rakasha-racial-enemy',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Recharge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'During character creation, the player must determine the android\'s power source. If the android cannot access his power source at least once per day, he\'s automatically Fatigued each day until he\'s Incapacitated. The day after that, he goes ‚Äúoff-line‚Äù and must be revived with a Repair roll and a four-hour charge of energy. The power source replaces the need for food and water, unless they are the chosen power source.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-recharge',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Short',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-folk average only about 4\' tall. This gives them a Size of ‚Ä"1 and subtracts 1 from their Toughness.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'half-folk-short',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.toughness = charObject.derived.toughness -1;
}
},
{
	 name: {
		 'en-US': 'Slow',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Dwarves have a Pace of 5‚Äù.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'dwarf-slow',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,
charEffect: function( charObject ) {
charObject.derived.pace = 5;
}
},
{
	 name: {
		 'en-US': 'Small',
	},
	 description: {
		 'en-US': 'Your character is either very skinny, very short, or both relative to his particular race. Subtract 1 from his Toughness for his reduced stature.',
	},
	 tag: 'small-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Stubborn',
	},
	 description: {
		 'en-US': 'This stubborn individual always wants his way and never admits he\'s wrong. Even when it\'s painfully obvious he\'s made a mistake he tries to justify it with half-truths and rationalizations.',
	},
	 tag: 'stubborn-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Ugly',
	},
	 description: {
		 'en-US': 'Unfortunately, this individual hit more than a few ugly sticks on his way down the tree of life. His Charisma is lowered by 2, and he is generally shunned by members of the opposite sex.',
	},
	 tag: 'ugly-minor',
	 conflicts_edge: 'attractive',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function (charObject) {
			charObject.derived.charisma = charObject.derived.charisma - 2;
		}
},
{
	 name: {
		 'en-US': 'Vengeful',
	},
	 description: {
		 'en-US': 'Your character always attempts to right a wrong he feels was done to him. If this is a Minor Hindrance, he usually seeks vengeance legally. The type and immediacy of his vengeance varies by character, of course. Some plot and scheme for months to extract what they see as justice. Others demand immediate results.',
	},
	 tag: 'vengeful-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Vengeful',
	},
	 description: {
		 'en-US': 'Your character always attempts to right a wrong he feels was done to him. If this is a Minor Hindrance, he usually seeks vengeance legally. The type and immediacy of his vengeance varies by character, of course. Some plot and scheme for months to extract what they see as justice. Others demand immediate results.,If this is a Major Hindrance, your character will kill to rectify his perceived injustice.',
	},
	 tag: 'vengeful-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Vow',
	},
	 description: {
		 'en-US': 'The character has a vow of some sort. Whether it\'s Major or Minor depends on the Vow itself. Some may have Vows to particular orders or causes, to the Hippocratic Oath, to rid the world of evil, and so on. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. Whatever the Vow, it\'s only a Hindrance if it actually comes into play from time to time and causes the character some discomfort.',
	},
	 tag: 'vow-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Vow',
	},
	 description: {
		 'en-US': 'The character has a vow of some sort. Whether it\'s Major or Minor depends on the Vow itself. Some may have Vows to particular orders or causes, to the Hippocratic Oath, to rid the world of evil, and so on. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. Whatever the Vow, it\'s only a Hindrance if it actually comes into play from time to time and causes the character some discomfort.',
	},
	 tag: 'vow-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Wanted',
	},
	 description: {
		 'en-US': 'Your hero has committed some crime in his past and will be arrested if discovered by the authorities. This assumes the setting actually has laws and police officers to enforce them.,The level of the Hindrance depends on how serious the crime was. A hero with numerous unpaid parking tickets (in a game where he might have to drive occasionally) has a Minor Hindrance, as does someone wanted for more serious crimes away from the main campaign area. Being accused of murder is a Major Hindrance in almost any setting.',
	},
	 tag: 'wanted-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Wanted',
	},
	 description: {
		 'en-US': 'Your hero has committed some crime in his past and will be arrested if discovered by the authorities. This assumes the setting actually has laws and police officers to enforce them.,The level of the Hindrance depends on how serious the crime was. A hero with numerous unpaid parking tickets (in a game where he might have to drive occasionally) has a Minor Hindrance, as does someone wanted for more serious crimes away from the main campaign area. Being accused of murder is a Major Hindrance in almost any setting.',
	},
	 tag: 'wanted-minor',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Warm Natured',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Though not truly cold-blooded, saurians are not comfortable in cold environments. They suffer a ‚Ä"4 penalty to resist cold environmental effects.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'saurian-warm-natured',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Yellow',
	},
	 description: {
		 'en-US': 'Not everyone has ice water in his veins. Your hero is squeamish at the sight of blood and gore and terrified of coming to harm. He subtracts 2 from all of his fear-based Spirit checks.',
	},
	 tag: 'yellow-major',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Young',
	},
	 description: {
		 'en-US': 'Children are sometimes forced to go on dangerous adventures through unfortunate circumstances. Think carefully before choosing this Hindrance, for your youngster starts at a significant disadvantage.,Young heroes are generally 8-12 years old (in human years-adjust this for races with different aging paradigms). They have only 3 points to adjust their attributes and 10 skill points. On the plus side, youths like these have a fair amount of luck. They draw one extra Benny at the beginning of each game session in addition to any additional Bennies gained from such things as the Luck or Great Luck Edges.,If the character should live long enough to mature, the Hindrance doesn\'t have to be bought off, he\'s already paid the price for the Hindrance by starting at a disadvantage. He stops getting the extra Benny when he reaches 18 years of age however (or the age of adulthood in your particular setting).',
	},
	 tag: 'young-major',
	 conflicts_edge: '',
	 conflicts_hindrance: 'elderly',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 1,
charEffects: function (charObject) {
			charObject.attribute_points = 3;
			charObject.skill_points = 10;
			charObject.bennies_total += 1;
		}
},
{
	 name: {
		 'en-US': 'Warriors of Heaven',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Angels receive commands from a distant and mysterious God. They have no one to question should they dislike such an order. If they disobey, they are stripped of their powers and become mortal.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-warriors-of-heaven',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

}
);
