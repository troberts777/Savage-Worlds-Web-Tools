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
	 description: {
		 'en-US': 'Some Ideas for making more agressive flight systems for Power Armor. <a href=\'http://www.peginc.com/forum/viewtopic.php?p=423784#423784\'>Discussion is here.</a>',
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
	 description: {
		 'en-US': 'Some Ideas for making more agressive flight systems for Power Armor. <a href=\'http://www.peginc.com/forum/viewtopic.php?p=423784#423784\'>Discussion is here.</a>',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'faster-flight',
}
);
savageWorldsSciFiSizes['power_armor'] = Array(
{
	 size_label: {
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
	 size_label: {
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
	 size_label: {
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
	 description: {
		 'en-US': 'When activated (a free action via voice command), detonation packs attached to the suit explode in a Large Burst Template around the armor, causing 5d6 damage (the blast is shaped away from the suit so the wearer suffers only half damage). Wearers are advised to use this only as a last resort. Shrapnel pack reloads cost $1000, weigh 10 lb, and take one hour to install.',
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
	 description: {
		 'en-US': 'Adds +2 Heavy Armor each time this Modification is taken.',
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
	 description: {
		 'en-US': 'A well-designed suite of HUD apps and sensors to constantly monitor up to 100 team members within twenty miles. This extends the user’s Command Range to all those in contact. The Command Pack requires the Sensor Suite Modification first.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The suit has expandable wings and thrusters for VTOL flight at a Pace of 6” and a Climb of 0. Each time it’s taken doubles previous Pace or increases Climb by 1.',
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
	 description: {
		 'en-US': 'The user can jump up to 2× the suit’s Pace horizontally or 1× Pace vertically.',
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
	 description: {
		 'en-US': 'The soles and palms of the suit are fitted with powerful magnets, allowing the wearer to walk up or cling to metal surfaces at full Pace. These are most often used in zero-g to allow marines to attach to ship’s hulls or walkways.',
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
	},
	 description: {
		 'en-US': 'Powerful motors in the leg joints combine with gyroscopic stabilizers to increase Pace by +2 and the running die to d10. Each enhancement after the first only increases Pace by +2.',
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
}
},
{
	 name: {
		 'en-US': 'Power Pack',
	},
	 description: {
		 'en-US': 'Additional power cells add another 72 hours of energy.',
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
	 description: {
		 'en-US': 'Small propulsion jets allow the character to move in vacuum or water at 6”. The jets provide no benefits outside these environments.',
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
	 description: {
		 'en-US': 'The suit automatically seals minor breaches (the user suffers one or two wounds) with a fast-hardening sealant. This is critical when operating in a vacuum. If the wearer suffers three or more wounds from a single attack, however, the suit cannot seal and is breached.',
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
	 description: {
		 'en-US': 'An array of various sensors extends the suit’s +2 bonus to visual and aural Notice rolls to 500 yards.',
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
	 description: {
		 'en-US': 'Increases communication range to 500 miles.',
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
	 description: {
		 'en-US': 'This thin and pliable piezoelectric material combines chameleon-like visual skin with heat baffles, radar scramblers, and other devices to make the suit difficult to detect by vision or sensors. Those trying to attack or detect the suit subtract 4 from their rolls against it. The effect is triggered as a free action, but is negated any round in which the user fires a weapon or emits some other non-cloakable signal such as radio broadcasts or active sensor searches.',
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
	 description: {
		 'en-US': 'Increases Strength by one die type each time it’s taken. After d12, add +1 per servo (d12+1, d12+2, etc).',
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
	 description: {
		 'en-US': 'An integrated system connects to all personal and weapon mounts to compensate for movement, range, multi-actions, and the like. This negates up to two points of the user’s Shooting penalties.',
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
	 description: {
		 'en-US': 'Automated systems within the suit are loaded with minor antibiotics, stimulants, and anesthetics designed to keep a soldier alive after suffering trauma. It has a d8 Healing and adds +2 to recover from being Shaken and resisting Bleeding Out.',
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
	 description: {
		 'en-US': 'A single mount can hold any one personal weapon up to 100 pounds, or one Mod point of vehicular weaponry. Two shoulder mounts can be combined into a central weapon mount over the user’s head to hold a vehicle weapon with a Mod cost of 2. The user may fire mounted and personal weapons at standard multi-action penalties (but see Targeting System). Weaponry is purchased separately.',
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
