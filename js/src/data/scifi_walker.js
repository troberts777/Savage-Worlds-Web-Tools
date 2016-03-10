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
	 description: {
		 'en-US': 'This is a proposed walker size for 12-15 foot tall, Heavy Gear sized, Walkers. <a href=\'http://www.peginc.com/forum/viewtopic.php?t=45126\'>The discussion is here</a>.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 type: 'bool',
	 short_tag: 'ultra-light',
}
);
savageWorldsSciFiSizes['walker'] = Array(
{
	 size_label: {
		 'en-US': 'Ultralight (unofficial)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 examples: {
		 'en-US': '12 feet tall',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 size: 4,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 30,
	 toughness: 0,
	 armor: 4,
	 mods: 15,
	 crew: 1,
	 cost: 400000,
	 weight: 0,
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: 'ultra-light',
},
{
	 size_label: {
		 'en-US': 'Light',
	},
	 examples: {
		 'en-US': '20 feet tall',
	},
	 size: 6,
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
},
{
	 size_label: {
		 'en-US': 'Medium',
	},
	 examples: {
		 'en-US': '30 feet tall',
	},
	 size: 8,
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
},
{
	 size_label: {
		 'en-US': 'Heavy',
	},
	 examples: {
		 'en-US': '50 feet tall',
	},
	 size: 10,
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
},
{
	 size_label: {
		 'en-US': 'Super Heavy',
	},
	 examples: {
		 'en-US': '80 feet tall',
	},
	 size: 12,
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
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
},
{
	 size_label: {
		 'en-US': 'Titan',
	},
	 examples: {
		 'en-US': '120 feet tall',
	},
	 size: 14,
	 acc: 0,
	 ts: 0,
	 climb: 0,
	 pace: 8,
	 toughness: 35,
	 armor: 8,
	 mods: 50,
	 crew: 1,
	 cost: 20000000,
	 weight: 0,
	 energy_capacity: 0,
	 hide_with_option: '',
	 show_with_option: '',
}
);
savageWorldsSciFiMods['walker'] = Array(
{
	 name: {
		 'en-US': 'AMCM',
	},
	 description: {
		 'en-US': 'Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.',
	},
	 tag: 'amcm',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Increases a walker&apos;s Armor value by +2. All walker Armor is considered Heavy Armor.',
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
selected_object.armor++;
selected_object.armor++;
selected_object.toughness++;
selected_object.toughness++;
}
},
{
	 name: {
		 'en-US': 'Close Combat Weapon',
	},
	 description: {
		 'en-US': 'Some walkers are equipped with chain- blades or swords designed to cut through the hard armor of rival mechs, buildings, or enemy tanks. They have AP equal to the mech&apos;s Size and cause Str+2d10 damage (Heavy Weapon). The pilot uses the lower of his Fighting or Piloting to hit. The TN to hit an enemy mech or vehicle is 4, plus or minus normal speed or Size modifiers. Walkers aren&apos;t subject to all the normal rules of close combat, but GMs can use those as the basis for situational modifiers based on specific circumstances (such as multiple mechs ganging up on a foe).',
	},
	 tag: 'close-combat-weapon',
get_max: function(selected_object) { return 2 },
get_mod_cost: function(selected_object) {
return selected_object.size / 2;
},
get_cost: function(selected_object) {
return 75000;
},
},
{
	 name: {
		 'en-US': 'Deflector Screens',
	},
	 description: {
		 'en-US': 'The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large walkers, and 3 for Huge to Gargantuan vessels.',
	},
	 tag: 'deflector-screens',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 2;
},
get_cost: function(selected_object) {
return 10000 * selected_object.size;
},
},
{
	 name: {
		 'en-US': 'Electromagnetic Shielding',
	},
	 description: {
		 'en-US': 'Adds +6 to the walker&apos;s effective Toughness from EMP missiles (see page 25).',
	},
	 tag: 'electromagnetic-shielding',
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 2;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
},
{
	 name: {
		 'en-US': 'Jump Jets',
	},
	 description: {
		 'en-US': 'Powerful rockets give walkers the ability to propel themselves high in the air—to clear obstacles or perform “death from above” attacks on foes. To jump, the pilot uses an action to make a Piloting roll to both maneuver his walker and manage his power reserves. Each round spent jumping increases his height 50 feet for Light walkers, 30 feet for Mediums, and 20 feet for Heavies. Each subsequent round spent jumping (essentially flying) afterwards inflicts a –2 to the Piloting roll, cumulative to a maximum of –6. Failure means the walker descends immediately (a critical failure results in a fall—see Falling, page 59).',
	},
	 tag: 'jump-jets',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return selected_object.size / 2;
},
get_cost: function(selected_object) {
return selected_object.size / 2;
},
},
{
	 name: {
		 'en-US': 'Linked',
	},
	 description: {
		 'en-US': 'Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)',
	},
	 tag: 'linked',
get_max: function(selected_object) { return "u" },
hidden: 1,
get_mod_cost: function(selected_object) {
return 0;
},
get_cost: function(selected_object) {
return 0;
},
},
{
	 name: {
		 'en-US': 'Missile Launcher',
	},
	 description: {
		 'en-US': 'Allows up to four Light or two Heavy (or AT) missiles to be fired at once.',
	},
	 tag: 'missile-launcher',
get_max: function(selected_object) { return "u" },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 50000;
},
get_mod_effect: function(selected_object) {
selected_object.has_missile_launcher = 1;
}
},
{
	 name: {
		 'en-US': 'Pace',
	},
	 description: {
		 'en-US': 'Increases the mech&apos;s Pace by +4. (This cannot be taken with Speed Reduction.)',
	},
	 tag: 'pace',
get_max: function(selected_object) { return 3 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 4000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.pace = selected_object.pace + 4;
}
},
{
	 name: {
		 'en-US': 'Passenger Compartment',
	},
	 description: {
		 'en-US': 'Cramped space for four passengers. Rescue mechs often use this Modification.',
	},
	 tag: 'passenger-compartment',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000;
}
},
{
	 name: {
		 'en-US': 'Reinforced Frame',
	},
	 description: {
		 'en-US': 'Increases Toughness of the chassis by +2.',
	},
	 tag: 'reinforced-frame',
get_max: function(selected_object) { return 3 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 10000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.toughness = selected_object.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Sensor Suite',
	},
	 description: {
		 'en-US': '+4 Notice vs sound, motion, strong chemicals, radiation, or electrical fields up to 1000 yards.',
	},
	 tag: 'sensor-suite',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 50000;
}
},
{
	 name: {
		 'en-US': 'Shields',
	},
	 description: {
		 'en-US': 'The walker is protected by an ablative energy field that absorbs 10×Size points of damage before it&apos;s depleted. Apply all damage to the shield first, then any left over to the mech (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A walker may regenerate its Size in shield points if it makes no attacks in a round.',
	},
	 tag: 'shields',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return selected_object.size / 2;
},
get_cost: function(selected_object) {
return 50000 * selected_object.size;
},
},
{
	 name: {
		 'en-US': 'Sloped Armor',
	},
	 description: {
		 'en-US': 'Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.',
	},
	 tag: 'sloped-armor',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 2;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
},
{
	 name: {
		 'en-US': 'Speed Reduction',
	},
	 description: {
		 'en-US': 'The walker sacrifices speed for additional room. Subtract 2 from Pace and add half its Size in Mod slots (round down).',
	},
	 tag: 'speed-reduction',
get_max: function(selected_object) { return 3 },
get_mod_cost: function(selected_object) {
return 0;
},
get_cost: function(selected_object) {
return 20000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.pace -=  2;
selected_object.mods += selected_object.size / 2;
}
},
{
	 name: {
		 'en-US': 'Stealth System',
	},
	 description: {
		 'en-US': 'Radar-absorbing paint, heat baffles, scramblers, and other devices make the walker difficult to detect by vision or sensors. Those trying to attack or spot the mech subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the walker fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.',
	},
	 tag: 'stealth-system',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return selected_object.size;
},
get_cost: function(selected_object) {
return 50000 * selected_object.size;
}
},
{
	 name: {
		 'en-US': 'Strength Enhancement',
	},
	 description: {
		 'en-US': 'Add +2 to the walker&apos;s Strength.',
	},
	 tag: 'strength-enhancement',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 5000 * selected_object.size;
},
get_mod_effect: function(selected_object) {
selected_object.strength +=  2;
}
},
{
	 name: {
		 'en-US': 'Targeting System',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The walker&apos;s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 tag: 'targeting-system',
get_max: function(selected_object) { return 1 },
get_mod_cost: function(selected_object) {
return 1;
},
get_cost: function(selected_object) {
return 10000  * selected_object.size;
}
}
);
