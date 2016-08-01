/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	if(typeof(savageWorldsSciFiSizes) == "undefined")
		var savageWorldsSciFiSizes = Array();

	if(typeof(savageWorldsSciFiMods) == "undefined")
		var savageWorldsSciFiMods = Array();

	if(typeof(savageWorldsSciFiOptions) == "undefined")
		var savageWorldsSciFiOptions = Array();
savageWorldsSciFiOptions['walker'] = Array(
{
	 name: {
		 'en-US': 'Ultra-Light Chassis',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'ultra-light',
}
);
savageWorldsSciFiSizes['walker'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Ultralight Walker (unofficial)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '12 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 4,
	 strength: 7,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 30,
	 toughness: 15,
	 armor: 4,
	 mods: 15,
	 crew: 1,
	 cost: 400000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: 'ultra-light',
},
{
	 sizeLabel: {
		 'en-US': 'Light Walker',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '20 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 6,
	 strength: 9,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 24,
	 toughness: 20,
	 armor: 5,
	 mods: 20,
	 crew: 1,
	 cost: 1000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium Walker',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '30 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 8,
	 strength: 11,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 18,
	 toughness: 25,
	 armor: 6,
	 mods: 25,
	 crew: 1,
	 cost: 3000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Heavy Walker',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '50 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 10,
	 strength: 13,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 12,
	 toughness: 30,
	 armor: 8,
	 mods: 30,
	 crew: 1,
	 cost: 5000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Super Heavy Walker',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '80 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 12,
	 strength: 15,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 35,
	 armor: 8,
	 mods: 40,
	 crew: 1,
	 cost: 10000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Titan Walker',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '120 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 14,
	 strength: 17,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 40,
	 armor: 9,
	 mods: 50,
	 crew: 1,
	 cost: 20000000,
	 weight: 0,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['walker'] = Array(
{
	 name: {
		 'en-US': 'AMCM',
	},
	 tag: 'amcm',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 tag: 'armor',
getMax: function(selectedObject) { return selectedObject.size },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.armor++;
selectedObject.armor++;
selectedObject.toughness++;
selectedObject.toughness++;
}
},
{
	 name: {
		 'en-US': 'Close Combat Weapon',
	},
	 tag: 'close-combat-weapon',
getMax: function(selectedObject) { return 2 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 75000;
},
},
{
	 name: {
		 'en-US': 'Deflector Screens',
	},
	 tag: 'deflector-screens',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Electromagnetic Shielding',
	},
	 tag: 'electromagnetic-shielding',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Jump Jets',
	},
	 tag: 'jump-jets',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return selectedObject.size / 2;
},
},
{
	 name: {
		 'en-US': 'Missile Launcher',
	},
	 tag: 'missile-launcher',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
selectedObject.hasMissileLauncher = 1;
}
},
{
	 name: {
		 'en-US': 'Pace',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'pace',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 4000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.pace = selectedObject.pace + 4;
},
isAvailable: function(selectedObject) {
return !selectedObject.hasMod("speed-reduction");
}
},
{
	 name: {
		 'en-US': 'Passenger Compartment',
	},
	 tag: 'passenger-compartment',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
}
},
{
	 name: {
		 'en-US': 'Reinforced Frame',
	},
	 tag: 'reinforced-frame',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.toughness = selectedObject.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite',
	},
	 tag: 'sensor-suite',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Shields',
	},
	 tag: 'shields',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size / 2;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Sloped Armor',
	},
	 tag: 'sloped-armor',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
},
{
	 name: {
		 'en-US': 'Speed Reduction',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'speed-reduction',
getMax: function(selectedObject) { return 3 },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 20000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.pace -=  2;
selectedObject.mods += selectedObject.size / 2;
},
isAvailable: function(selectedObject) {
return !selectedObject.hasMod("pace");
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 50000 * selectedObject.size;
}
},
{
	 name: {
		 'en-US': 'Strength Enhancement',
	},
	 tag: 'strength-enhancement',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.strength +=  2;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000  * selectedObject.size;
}
}
);
