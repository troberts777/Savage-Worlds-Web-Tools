/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

	var savageWorldsVehicleWeapons = Array(


{
	 name: {
		 'en-US': 'Anti-Tank Missile',
		 'pt-BR': '',
		 'de-DE': 'asa1',
	},
	 name_plural: {
		 'en-US': 'Anti-Tank Missiles',
		 'pt-BR': '',
		 'de-DE': 'asa2a',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': 'asdas3',
	},
	 notes: {
		 'en-US': 'AP 20, HW, MBT.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '100/200/400',
		 'damage': '8d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'anti-tank-missile',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0)
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Block Buster Bomb',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Block Buster Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 40, HW, 30” radius. 1001 to 4000 lb. bombs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '2',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'block-buster-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'City Buster Bomb',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'City Buster Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 40, HW, 50” radius. 4001 to 8000 lb. bombs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '1',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'city-buster-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Grenade Launcher',
	},
	 name_plural: {
		 'en-US': 'Grenade Launchers',
	},
	 classification: {
		 'en-US': 'Grenade Launcher',
	},
	 notes: {
		 'en-US': 'HW. LBT. Grenades cost $50 and weigh .25 pounds each. They are the same as the grenades listed on page 20 and may be thrown as well.',
	},
		 'range': '24/48/96',
		 'damage': '3d6',
		 'rof': '3',
		 'shots': '20',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'grenade-launcher',
		 'cost': '1000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Autocannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Autocannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 8, Auto, HW. Covers 31 to 50mm rounds',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '75/150/300',
		 'damage': '4d8',
		 'rof': '3',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'heavy-autocannon',
		 'cost': '200000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Cannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 30, HW, MBT, Up to 80mm',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '100/200/400',
		 'damage': '5d10',
		 'rof': '1',
		 'shots': '30',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'heavy-cannon',
		 'cost': '800000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Flamethrower',
	},
	 name_plural: {
		 'en-US': 'Heavy Flamethrowers',
	},
	 classification: {
		 'en-US': 'Flame Weapons',
	},
	 notes: {
		 'en-US': 'HW, targets may catch fire. Can be fired in a Cone Template or a Medium Burst Template up to 18â€ distant. Affects targetâ€™s least Armored area.',
	},
		 'range': 'Cone',
		 'damage': '3d12',
		 'rof': '1',
		 'shots': '30',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '2',
		 'tag': 'heavy-flamethrower',
		 'cost': '1000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 15, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '4d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'heavy-laser',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy MG (2)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy MG (2)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 4, Auto, HW. A 200 round belt of ammo costs $500 and weighs 20 pounds.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '50/100/200',
		 'damage': '2d10',
		 'rof': '3',
		 'shots': '200',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'heavy-mg-2',
		 'cost': '5000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Heavy Torpedo',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 80, HW, LBT. Space or watercraft only. Half Range in water.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '300/600/1200',
		 'damage': '10d12',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '4',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'heavy-torpedo',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasTorpedoTube > 0 && ( selectedObject.aircraft > 0 || selectedObject.watercraft > 0 ) )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Heavy/AT Missile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Heavy Missiles',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 15, HW, MBT.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '200/400/800',
		 'damage': '8d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'heavy-missile',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0 )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Large Bomb',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Large Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 30, HW, 20” radius. 501 to 1000 lb. bombs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': 'Dropped',
		 'damage': '10d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '4',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'large-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Light Autocannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Light Autocannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 4, Auto, HW, Reaction Fire. Up to 20mm rounds.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '50/100/200',
		 'damage': '2d12',
		 'rof': '4',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'light-autocannon',
		 'cost': '50000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Flamethrower',
	},
	 name_plural: {
		 'en-US': 'Light Flamethrowers',
	},
	 classification: {
		 'en-US': 'Flame Weapons',
	},
	 notes: {
		 'en-US': 'HW, Cone Template, targets may catch fire. Affects targetâ€™s least Armored area.',
	},
		 'range': 'Cone',
		 'damage': '2d12',
		 'rof': '1',
		 'shots': '10',
		 'missiles_per': '0',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-flamethrower',
		 'cost': '500',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Light Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 5, HW, Reaction Fire.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '2d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'light-laser',
		 'cost': '100000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Light Missile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Light Missiles',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 8, HW, SBT.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '200/400/800',
		 'damage': '6d6',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-missile',
		 'cost': '150000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasMissileLauncher > 0)
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Light Torpedo',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Light Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Missiles & Torpedoes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 40, HW, LBT. Space or watercraft only. Half Range in water.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '300/600/1200',
		 'damage': '8d12',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'light-torpedo',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.hasTorpedoTube > 0 && ( selectedObject.aircraft > 0 || selectedObject.watercraft > 0 ) )
return true;
else
return false;
},},
{
	 name: {
		 'en-US': 'Mass Driver 1',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 1',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 10 pound spheres that cost $100 each.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '1d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'mass-driver-1',
		 'cost': '100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 1 || selectedObject.objectType == "power_armor")
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 10',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 10',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '10d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'mass-driver-10',
		 'cost': '1000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 10)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 11',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 11',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '11d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-11',
		 'cost': '1100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 11)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 12',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 12',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '12d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-12',
		 'cost': '1200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 12)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 13',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 13',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '13d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-13',
		 'cost': '1300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 13)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 14',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 14',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 100 pound spheres that cost $1000 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '14d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'mass-driver-14',
		 'cost': '1300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 14)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 2',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 2',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 20 pound spheres that cost $200 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '2d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'mass-driver-2',
		 'cost': '200000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 2 || selectedObject.objectType == "power_armor")
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 3',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 3',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 30 pound spheres that cost $300 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '3d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'mass-driver-3',
		 'cost': '300000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 3)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 4',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 4',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 40 pound spheres that cost $400 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '4d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'mass-driver-4',
		 'cost': '400000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 4)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 5',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 5',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 50 pound spheres that cost $500 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '5d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'mass-driver-5',
		 'cost': '500000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 5)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 6',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 6',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 60 pound spheres that cost $600 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '6d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'mass-driver-6',
		 'cost': '600000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 6)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 7',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 7',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 70 pound spheres that cost $700 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '7d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'mass-driver-7',
		 'cost': '700000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 7)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 8',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 8',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 80 pound spheres that cost $800 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '8d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'mass-driver-8',
		 'cost': '100000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 8)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Mass Driver 9',
	},
	 name_plural: {
		 'en-US': 'Mass Driver 9',
	},
	 classification: {
		 'en-US': 'Mass Drivers',
	},
	 notes: {
		 'en-US': 'Hw. Projectiles are 90 pound spheres that cost $90 each.',
	},
		 'range': '100/200/400 (tripled in space)',
		 'damage': '9d12',
		 'rof': '1',
		 'shots': '15',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'mass-driver-9',
		 'cost': '900000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if(selectedObject.size / 2 >= 9)
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Massive Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Massive Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 25, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '8d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '7',
		 'tag': 'massive-laser',
		 'cost': '4000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if( selectedObject.size >= 14  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Medium Autocannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Medium Autocannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Auto-cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 6, Auto, HW. Covers 21 to 30mm rounds.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '50/100/200',
		 'damage': '3d8',
		 'rof': '3',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'medium-autocannon',
		 'cost': '75000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium Bomb',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Medium Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 20, HW, 10” radius. 251 to 500 lb. bombs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': 'Dropped',
		 'damage': '8d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '8',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'medium-bomb',
		 'cost': '1000000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Medium Cannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Medium Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 20, HW, MBT, Up to 60mm',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '75/150/300',
		 'damage': '4d10',
		 'rof': '1',
		 'shots': '40',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'medium-cannon',
		 'cost': '600000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Medium Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 10, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '3d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'medium-laser',
		 'cost': '500000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Medium MG (2)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Medium MG (2)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 3, Auto. A 200 round belt of ammo costs $400 and weighs 15 pounds.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '30/60/120',
		 'damage': '2d8+1',
		 'rof': '4',
		 'shots': '200',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'medium-mg-2',
		 'cost': '3000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Mega Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Mega Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 50, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '10d10',
		 'rof': '',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '10',
		 'tag': 'massive-laser',
		 'cost': '10000000',
		 'flying_only': '0',
isAvailable: function(selectedObject) {
if( selectedObject.size >= 16  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Minigun',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Miniguns',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Slugthrowers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 3, Auto, HW. An additional 1000 round drum of ammunition weighs 20 pounds and costs $1000.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '24/48/96',
		 'damage': '2d8+4',
		 'rof': '4',
		 'shots': '1000',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '1',
		 'tag': 'minigun',
		 'cost': '10000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Heavy',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Heavy',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
	},
	 notes: {
		 'en-US': 'AP 20, HW',
	},
		 'range': '100/200/400',
		 'damage': '6d8+2',
		 'rof': '1',
		 'shots': '0',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '6',
		 'tag': 'particle-accelerator-heavy',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Light',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Light',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 5, HW, Reaction Fire',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '100/200/400',
		 'damage': '3d8+2',
		 'rof': '1',
		 'shots': '',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '3',
		 'tag': 'particle-accelerator-light',
		 'cost': '100000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Particle Accelerator, Medium',
	},
	 name_plural: {
		 'en-US': 'Particle Accelerators, Medium',
	},
	 classification: {
		 'en-US': 'Particle Accelerators',
	},
	 notes: {
		 'en-US': 'AP 10, HW',
	},
		 'range': '100/200/400',
		 'damage': '4d8+2',
		 'rof': '1',
		 'shots': '0',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '4',
		 'tag': 'particle-accelerator-medium',
		 'cost': '500000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Small Bomb',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Small Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Bombs',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 10, HW, LBT. Up to 250 lb. bombs.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': 'Dropped',
		 'damage': '6d10',
		 'rof': '1',
		 'shots': '1',
		 'missiles_per': '12',
		 'linkable': '0',
		 'mods': '1',
		 'tag': 'small-bomb',
		 'cost': '500000',
		 'flying_only': '1',
isAvailable: function(selectedObject) {
if( selectedObject.aircraft > 0  )
return true;
else
return false;
}},
{
	 name: {
		 'en-US': 'Small Cannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Small Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 10, HW, MBT, Up to 40mm',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '50/100/200',
		 'damage': '3d10',
		 'rof': '1',
		 'shots': '50',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '2',
		 'tag': 'small-cannon',
		 'cost': '400000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Super-Heavy Cannon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Super-Heavy Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Cannons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 40, HW, MBT, Up to 200mm',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '6d10',
		 'rof': '1',
		 'shots': '20',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'super-heavy-cannon',
		 'cost': '1000000',
		 'flying_only': '0',
},
{
	 name: {
		 'en-US': 'Super-Heavy Laser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 name_plural: {
		 'en-US': 'Super-Heavy Lasers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 classification: {
		 'en-US': 'Lasers (Vehicular)',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 notes: {
		 'en-US': 'AP 20, HW.',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'range': '150/300/600',
		 'damage': '6d10',
		 'rof': '1',
		 'shots': '100',
		 'missiles_per': '0',
		 'linkable': '1',
		 'mods': '5',
		 'tag': 'super-heavy-laser',
		 'cost': '2000000',
		 'flying_only': '0',
}
);

