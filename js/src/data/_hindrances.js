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
	 tag: 'elf-all-thumbs',
	 page: '',
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
	 tag: 'anemic-minor',
	 page: 'p28',
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
	 tag: 'arrogant-major',
	 page: 'p28',
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
	 tag: 'android-asimov-circuits',
	 page: '',
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
	 tag: 'bad-eyes-major',
	 page: 'p28',
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
	 tag: 'bad-eyes-minor',
	 page: 'p28',
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
	 tag: 'bad-luck-major',
	 page: 'p28',
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
	 tag: 'big-mouth-minor',
	 page: 'p28',
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
	 tag: 'blind-major',
	 page: 'p28',
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
	 tag: 'rakasha-bloodthirsty',
	 page: 'p21',
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
	 tag: 'bloodthirsty-major',
	 page: 'p28',
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
	 tag: 'cautious-minor',
	 page: 'p28',
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
	 tag: 'clueless-major',
	 page: 'p28',
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
	 tag: 'code-of-honor-major',
	 page: 'p29',
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
	 tag: 'android-construct',
	 page: '',
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
	 tag: 'curious-major',
	 page: 'p29',
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
	 tag: 'deathwish-minor',
	 page: 'p29',
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
	 tag: 'atlantean-dehydration',
	 page: 'p20',
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
	 tag: 'delusion-minor',
	 page: 'p29',
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
	 tag: 'delusion-major',
	 page: 'p29',
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
	 tag: 'doubting-thomas-minor',
	 page: 'p29',
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
	 tag: 'elderly-major',
	 page: 'p29',
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
	 tag: 'enemy-minor',
	 page: 'p29',
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
	 tag: 'enemy-major',
	 page: 'p29',
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
	 tag: 'greedy-minor',
	 page: 'p29',
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
	 tag: 'greedy-major',
	 page: 'p29',
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
	 tag: 'habit-minor',
	 page: 'p29',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Habit',
	},
	 tag: 'habit-major',
	 page: 'p31',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Hard of Hearing',
	},
	 tag: 'hard-of-hearing-minor',
	 page: 'p29',
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
	 tag: 'hard-of-hearing-major',
	 page: 'p29',
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
	 tag: 'heroic-major',
	 page: 'p30',
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
	 tag: 'hollow-boned',
	 page: 'p20',
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
	 tag: 'illiterate-minor',
	 page: 'p30',
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
	 tag: 'lame-major',
	 page: 'p30',
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
	 tag: 'loyal-minor',
	 page: 'p30',
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
	 tag: 'mean-minor',
	 page: 'p30',
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
	 tag: 'obese-minor',
	 page: 'p30',
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
	 tag: 'one-arm-major',
	 page: 'p30',
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
	 tag: 'one-eye-major',
	 page: 'p30',
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
	 tag: 'one-leg-major',
	 page: 'p30',
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
	 tag: 'android-outsider',
	 page: '',
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
	 tag: 'half-elf-outsider',
	 page: 'p20',
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
	 tag: 'half-orc-outsider',
	 page: 'p21',
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
	 tag: 'saurian-outsider',
	 page: 'p21',
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
	 tag: 'outsider-minor',
	 page: 'p30',
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
	 tag: 'overconfident-major',
	 page: 'p30',
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
	 tag: 'pacifist-minor',
	 page: 'p30',
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
	 tag: 'pacifist-major',
	 page: 'p30',
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
	 tag: 'phobia-minor',
	 page: 'p30',
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
	 tag: 'phobia-major',
	 page: 'p30',
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
	 tag: 'poverty-minor',
	 page: 'p30',
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
	 tag: 'quirk-minor',
	 page: 'p30',
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
	 tag: 'rakasha-racial-enemy',
	 page: 'p21',
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
	 tag: 'android-recharge',
	 page: '',
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
	 tag: 'half-folk-short',
	 page: 'p21',
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
	 tag: 'dwarf-slow',
	 page: '',
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
	 tag: 'small-major',
	 page: 'p31',
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
	 tag: 'stubborn-minor',
	 page: 'p31',
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
	 tag: 'ugly-minor',
	 page: 'p31',
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
	 tag: 'vengeful-minor',
	 page: 'p31',
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
	 tag: 'vengeful-major',
	 page: 'p31',
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
	 tag: 'vow-major',
	 page: 'p31',
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
	 tag: 'vow-minor',
	 page: 'p31',
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
	 tag: 'wanted-major',
	 page: 'p31',
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
	 tag: 'wanted-minor',
	 page: 'p31',
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
	 tag: 'saurian-warm-natured',
	 page: 'p21',
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
	 tag: 'yellow-major',
	 page: 'p31',
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
	 tag: 'young-major',
	 page: 'p31',
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
		 'en-US': ' Doubting Thomas',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: '-doubting-thomas',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Angst',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angst-major',
	 page: 'p3',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Bleeder',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'bleeder-major',
	 page: 'p3',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Bullet Magnet',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'bullet-magnet-major',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Combat Shock',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'combat-shock-major',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Combat Shock',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'combat-shock-minor',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Cursed',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'cursed-major',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Death\'s Haze',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'patchwork-man-deaths-haze',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Feast of Flesh',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'zombie-feast-of-flesh',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Feed',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'vampire-feed',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Full Moon Madness',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'werewolf-full-moon-madness',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Infection',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'werewolf-infection',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Jumpy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'jumpy-minor',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Rage',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'patchwork-man-rage',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Screamer',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'screamer-minor',
	 page: 'p4',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Slow',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'slow-major',
	 page: 'p5',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Touched',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'touched-major',
	 page: 'p5',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Touched',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'touched-minor',
	 page: 'p5',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Victim',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'victim-major',
	 page: 'p5',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Victim',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'victim-minor',
	 page: 'p5',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Warriors of Heaven',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-warriors-of-heaven',
	 page: '',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Cold Iron)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'demon-weakness-cold-iron',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Electricity)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'patchwork-man-weakness-electricity',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Garlic)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'vampire-weakness-garlic',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Salt)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'phantom-weakness-salt',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Silver)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'werewolf-weakness-silver',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Sunlight)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'dhampyrs-weakness-sunlight',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Sunlight)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'vampire-weakness-sunlight',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Unwelcome Guest)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'vampire-weakness-unwelcome-guest',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Weakness (Wood)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'vampire-weakness-wood',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: '-',
	 racial: 1,
	 specify: 0,
	 book: 3,

},
{
	 name: {
		 'en-US': 'Bloodthirsty',
	},
	 tag: 'sfc-rakashan-bloodthirsty',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Cannot Speak',
	},
	 tag: 'sfc-insectoid-cannot-speak',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Clumsy',
	},
	 tag: 'sfc-deader-clumsy',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Cyber Resistant',
	},
	 tag: 'cyber-resistant',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Dependency (Light)',
	},
	 tag: 'sfc-floran-dependency',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Dependency (Water)',
	},
	 tag: 'sfc-aquarian-dependency',
	 page: '',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Environmental Weakness (Cold)',
	},
	 tag: 'sfc-saurian-weakness-cold',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Environmental Weakness (Fire/Heat)',
	},
	 tag: 'sfc-floran-env-weak',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Environmental Weakness (Heat)',
	},
	 tag: 'sfc-yeti-weakness',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Frail',
	},
	 tag: 'sfc-avion-frail',
	 page: 'p7',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,
charEffect: function( charObject ) {
charObject.derived.toughness += -1;
}
},
{
	 name: {
		 'en-US': 'Frail',
	},
	 tag: 'sfc-kalian-frail',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness += -1;
}
},
{
	 name: {
		 'en-US': 'FTL Sickness',
	},
	 tag: 'ftl-sickness',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'High Tech (Major)',
	},
	 tag: 'high-tech-major',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'High Tech (Minor)',
	},
	 tag: 'high-tech-minor',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'High Tech Hindrance',
	},
	 tag: 'sfc-floran-high-tech',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low Tech (Major)',
	},
	 tag: 'low-tech-major',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low Tech (Minor)',
	},
	 tag: 'low-tech-minor',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low Tech',
	},
	 tag: 'sfc-aurax-low-tech',
	 page: 'p7',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low Tech',
	},
	 tag: 'sfc-yeti-low-tech',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low-G Worlder',
	},
	 tag: 'low-g-wordler',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'minor',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Low-G Worlder',
	},
	 tag: 'sfc-avion-low-g-worlder',
	 page: 'p7',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Outsider (Major)',
	},
	 tag: 'outsider-major',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 1,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Outsider Hindrance (Major)',
	},
	 tag: 'sfc-deader-outsider',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Outsider Hindrance (Minor)',
	},
	 tag: 'sfc-insectoid-outsider',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Poor Parry',
	},
	 tag: 'sfc-deader-poor-parry',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.parry += -2;
}
},
{
	 name: {
		 'en-US': 'Racial Enemy',
	},
	 tag: 'sfc-rakashan-racial-enemy',
	 page: 'p9',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Slow',
	},
	 tag: 'sfc-deader-slow',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,
charEffect: function( charObject ) {
    charObject.derived.pace = 4;
}
},
{
	 name: {
		 'en-US': 'Weak',
	},
	 tag: 'sfc-deader-weak',
	 page: 'p8',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Weak',
	},
	 tag: 'sfc-serran-weak',
	 page: 'p10',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 1,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Zero-G Sickness',
	},
	 tag: 'zero-g-sickness',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 4,

},
{
	 name: {
		 'en-US': 'Zero-G Wordler',
	},
	 tag: 'zero-g-wordler',
	 page: 'p11',
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 severity: 'major',
	 racial: 0,
	 specify: 0,
	 book: 4,

}
);
