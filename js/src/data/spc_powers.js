/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
*/

var savageWorldsSPCPowers = Array(
{
		 'id': 1,
	 name: {
		 'en-US': 'Absorbtion',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'absorbtion',
		 'modifiers': '[{"name":{"en-US":"Matter \/ Energy Master","pt-BR":"","de-DE":""},"points":"5"},{"name":{"en-US":"Reflection","pt-BR":"","de-DE":""},"points":"4"},{"name":{"en-US":"Transference","pt-BR":"","de-DE":""},"points":"2"}]',

},
{
		 'id': 2,
	 name: {
		 'en-US': 'Ageless',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'ageless',
		 'modifiers': '[{"name":{"en-US":"Very Old","pt-BR":"","de-DE":""},"points":"2"}]',

},
{
		 'id': 3,
	 name: {
		 'en-US': 'Altered Form ',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'altered-form',
		 'modifiers': '[{"name":{"en-US":"Grapple","pt-BR":"","de-DE":""},"points":"1","per_level":0},{"name":{"en-US":"Reach","pt-BR":"","de-DE":""},"points":"1","per_level":1}]',

},
{
		 'id': 4,
	 name: {
		 'en-US': 'Animal Control',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '1',
		 'tag': 'animal-control',
		 'modifiers': '[{"name":{"en-US":"Animal Companion","pt-BR":"","de-DE":""},"points":"0","per_level":0},{"name":{"en-US":"Summonable","pt-BR":"","de-DE":""},"points":"4","per_level":0},{"name":{"en-US":"Super Powers","pt-BR":"","de-DE":""},"points":"0","per_level":0},{"name":{"en-US":"Telepathic Link","pt-BR":"","de-DE":""},"points":"1","per_level":0}]',

},
{
		 'id': 5,
	 name: {
		 'en-US': 'Aquatic',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p21',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'aquatic',
		 'modifiers': '[]',

},
{
		 'id': 6,
	 name: {
		 'en-US': 'Armor',
		 'pt-BR': '',
		 'de-DE': '',
		 'ru-RU': '',
	},
		 'book': 5,
		 'page': 'p22',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '10',
		 'tag': 'armor',
		 'modifiers': '[{"name":{"en-US":"Hardy","pt-BR":"","de-DE":"","ru-RU":""},"points":"3","per_level":0},{"name":{"en-US":"Heavy Armor","pt-BR":"","de-DE":"","ru-RU":""},"points":"4","per_level":0},{"name":{"en-US":"Partial Protection","pt-BR":"","de-DE":"","ru-RU":""},"points":"0","per_level":0}]',
charEffect: function( charObject, powerObject ) {
	// Affect Character Object Code here
	charObject.derived.armor += powerObject.selectedLevel * 2;
}
}
);

