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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000;
},
get_mod_effect: function(selected_object) {
//selected_object.ts = Math.ceil(selected_object.ts / 2);
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return selected_object.size },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 10000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.armor += 2;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 50000;
},
get_mod_effect: function(selected_object) {
//selected_object.ts = Math.ceil(selected_object.ts / 2);
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
show_with_option: "faster-flight",
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return selected_object.size;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.climb++;
},
get_weight: function(selected_object) {
return 0;
},
is_available: function(selected_object) {
if( selected_object.aircraft > 0  )
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
show_with_option: "faster-flight",
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return selected_object.size;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.ts = selected_object.ts * 2;
selected_object.acc = selected_object.ts / 4;
},
get_weight: function(selected_object) {
return 0;
},
is_available: function(selected_object) {
if( selected_object.aircraft > 0  )
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
show_with_option: "climb-top-speed",
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 0;
},
get_cost: function(selected_object) {
return 0;
},
get_mod_effect: function(selected_object) {
selected_object.ts = selected_object.ts * 2;
selected_object.acc = selected_object.ts / 4;
selected_object.climb--;
},
get_weight: function(selected_object) {
return 0;
},
is_available: function(selected_object) {
if( selected_object.aircraft > 0 && selected_object.climb > -2 )
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
show_with_option: "faster-flight",
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return selected_object.size;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
if(selected_object.aircraft == 0) {
selected_object.climb = 0;
//selected_object.flying_pace = selected_object.base_pace;
selected_object.ts = selected_object.base_pace;
selected_object.acc = selected_object.ts / 4;
}
selected_object.aircraft = 1;
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
hide_with_option: "faster-flight",
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 3;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.climb++;
},
get_weight: function(selected_object) {
return 0;
},
is_available: function(selected_object) {
if( selected_object.aircraft > 0  )
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
hide_with_option: "faster-flight",
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 3;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.flying_pace = selected_object.flying_pace * 2;
},
get_weight: function(selected_object) {
return 0;
},
is_available: function(selected_object) {
if( selected_object.aircraft > 0  )
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
hide_with_option: "faster-flight",
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return selected_object.size;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
if(selected_object.aircraft == 0) {
selected_object.climb = 0;
selected_object.flying_pace = 6;
}
selected_object.aircraft = 1;
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 2;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
//selected_object.acc = Math.ceil(selected_object.acc / 2);
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 3 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
selected_object.pace++;
selected_object.pace++;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 50000 ;
},
get_mod_effect: function(selected_object) {
selected_object.pace++;
selected_object.pace++;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 10000 ;
},
get_mod_effect: function(selected_object) {
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 3;
},
get_cost: function(selected_object) {
return 10000 ;
},
get_mod_effect: function(selected_object) {
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
selected_object.strength_bonus++;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 20000 ;
},
get_mod_effect: function(selected_object) {
selected_object.strength_bonus++;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 25000 ;
},
get_mod_effect: function(selected_object) {
selected_object.strength_bonus++;
},
get_weight: function(selected_object) {
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
get_max: function(selected_object) { return 2 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 ;
},
get_mod_effect: function(selected_object) {
selected_object.has_weapon_mounts = 1;
selected_object.vehicle_weapon_mod_points++;
},
get_weight: function(selected_object) {
return 0;
}
}
);
