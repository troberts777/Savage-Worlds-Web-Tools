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
savageWorldsSciFiOptions['power_armor'] = Array(
{
	 name: {
		 'en-US': 'Exchange Climb for Top Speed',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'climb-top-speed',
},
{
	 name: {
		 'en-US': 'Faster Flight Systems',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'faster-flight',
}
);
savageWorldsSciFiSizes['power_armor'] = Array(
{
	 sizeLabel: {
		 'en-US': 'Light Power Armor',
		 'pt-BR': 'pg-Light Power Armor',
		 'de-DE': 'de-Light Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 1,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 0,
	 armor: 8,
	 mods: 5,
	 crew: 1,
	 cost: 500000,
	 weight: 100,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Medium Power Armor',
		 'pt-BR': 'pg-Medium Power Armor',
		 'de-DE': 'de-Medium Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 2,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 6,
	 toughness: 0,
	 armor: 10,
	 mods: 8,
	 crew: 1,
	 cost: 1000000,
	 weight: 200,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
},
{
	 sizeLabel: {
		 'en-US': 'Heavy Power Armor',
		 'pt-BR': 'pg-Heavy Power Armor',
		 'de-DE': 'de-Heavy Power Armor',
	},
	 examples: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 3,
	 strength: 0,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 4,
	 toughness: 0,
	 armor: 12,
	 mods: 12,
	 crew: 1,
	 cost: 2000000,
	 weight: 300,
	 energyCapacity: 0,
	 hideWithOption: '',
	 showWithOption: '',
}
);
savageWorldsSciFiMods['power_armor'] = Array(
{
	 name: {
		 'en-US': 'Anti-Personnel System',
	},
	 tag: 'anti-personnel-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
//selectedObject.ts = Math.ceil(selectedObject.ts / 2);
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 10;
}
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
selectedObject.armor += 2;
},
getWeight: function(selectedObject) {
//return 10;
return 0;
}
},
{
	 name: {
		 'en-US': 'Command Pack',
	},
	 tag: 'command-pack',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000;
},
getModEffect: function(selectedObject) {
//selectedObject.ts = Math.ceil(selectedObject.ts / 2);
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - +1 Climb',
	},
	 tag: 'fflight-1-climb',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.climb++;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - Double Speed',
	},
	 tag: 'fflight-double-speed',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.ts = selectedObject.ts * 2;
selectedObject.acc = selectedObject.ts / 4;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial) - Exchange Climb for Speed',
	},
	 tag: 'fflight-exchange-climb-fo',
showWithOption: "climb-top-speed",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 0;
},
getCost: function(selectedObject) {
return 0;
},
getModEffect: function(selectedObject) {
selectedObject.ts = selectedObject.ts * 2;
selectedObject.acc = selectedObject.ts / 4;
selectedObject.climb--;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0 && selectedObject.climb > -2 )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Faster Flight (unofficial)',
	},
	 tag: 'fflight',
showWithOption: "faster-flight",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
if(selectedObject.aircraft == 0) {
selectedObject.climb = 0;
//selectedObject.flyingPace = selectedObject.basePace;
selectedObject.ts = selectedObject.basePace;
selectedObject.acc = selectedObject.ts / 4;
}
selectedObject.aircraft = 1;
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Flight - +1 Climb',
	},
	 tag: 'flight-1-climb',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.climb++;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Flight - Double Speed',
	},
	 tag: 'flight-double-speed',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
selectedObject.flyingPace = selectedObject.flyingPace * 2;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}
},
{
	 name: {
		 'en-US': 'Flight',
	},
	 tag: 'flight',
hideWithOption: "faster-flight",
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return selectedObject.size;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
if(selectedObject.aircraft == 0) {
selectedObject.climb = 0;
selectedObject.flyingPace = 6;
}
selectedObject.aircraft = 1;
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Jump Pack',
	},
	 tag: 'jump-pack',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000 * selectedObject.size;
},
getModEffect: function(selectedObject) {
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Magnetic Pads',
	},
	 tag: 'magnetic-pads',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
//selectedObject.acc = Math.ceil(selectedObject.acc / 2);
},
getWeight: function(selectedObject) {
return 0;
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
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.pace++;
selectedObject.pace++;
},
getWeight: function(selectedObject) {
return 0;
},
isAvailable: function(selectedObject) {
return !selectedObject.hasMod("speed-reduction");
}
},
{
	 name: {
		 'en-US': 'Power Pack',
	},
	 tag: 'power-pack',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 50000 ;
},
getModEffect: function(selectedObject) {
selectedObject.pace++;
selectedObject.pace++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Propulsion Jets',
	},
	 tag: 'propulsion-jets',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Self-Sealing',
	},
	 tag: 'self-sealing',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
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
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Signal Booster',
	},
	 tag: 'signal-booster',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 tag: 'stealth-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 10000 ;
},
getModEffect: function(selectedObject) {
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Strength Enhancement',
	},
	 tag: 'strength-enhancement',
getMax: function(selectedObject) { return "u" },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
	},
	 tag: 'targeting-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 20000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Trauma System',
	},
	 tag: 'trauma-system',
getMax: function(selectedObject) { return 1 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 25000 ;
},
getModEffect: function(selectedObject) {
selectedObject.strengthBonus++;
},
getWeight: function(selectedObject) {
return 0;
}
},
{
	 name: {
		 'en-US': 'Weapon Mount',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'weapon-mount',
getMax: function(selectedObject) { return 2 },
getModCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000 ;
},
getModEffect: function(selectedObject) {
selectedObject.hasWeaponMounts = 1;
selectedObject.vehicleWeaponModPoints++;
},
getWeight: function(selectedObject) {
return 0;
}
}
);
