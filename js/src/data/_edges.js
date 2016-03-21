/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

savageWorldsEdges = Array(
{
	 name: {
		 'en-US': 'Extra Edge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This edge gives an extra edge...',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'extra-edge',
	 racial: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Flight',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Angels can materialize great feathery wings when they so choose. This gives them Flight of 24” with a Climb of 2.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-flight',
	 racial: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Programming',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Androids begin with a free d6 in one skill, representing their original programmed role.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-programming',
	 racial: 1,
	 book: 1,
charEffect: function( characterObject ) {
	// TODO kludge
	characterObject.skillPoints = characterObject.skillPoints + 2;
},
},
{
	 name: {
		 'en-US': 'Unnatural',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Arcane powers, both detrimental and beneficial, suffer a –2 penalty to affect androids. This has no effect on damaging powers, which affect them normally.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'android-unnatural',
	 racial: 1,
	 book: 1,

},
{
	 name: {
		 'en-US': 'Armor of the Lord',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Angels are protected by a mystical aura that grants them +4 Toughness. It cannot be negated by Armor Piercing weapons.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-armor-of-the-lord',
	 racial: 1,
	 book: 3,
				charEffect: function( characterObject) {
					characterObject.derived.toughness += 4;
				}
},
{
	 name: {
		 'en-US': 'Divine Strength',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Angels start with a d12 as their Strength.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-divine-strength',
	 racial: 1,
	 book: 3,
				charEffect: function( characterObject) {
					characterObject.race.attributes.strength = 4;
				}
},
{
	 name: {
		 'en-US': 'Faith',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Angels start with a d6 in Faith for free.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-faith',
	 racial: 1,
	 book: 3,
				charEffect: function( characterObject) {
					characterObject.race.skills = Array(
						Array("faith", 1)
					);
				}
},
{
	 name: {
		 'en-US': 'Healing',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The touch of an angel can heal a number of wounds equal to its Faith roll. It may do this once every seven days per individual.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'angel-healing',
	 racial: 1,
	 book: 3,

}
);
