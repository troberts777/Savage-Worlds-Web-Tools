/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

if(!chargen_gear)
	var chargen_gear = Array();

chargen_gear = chargen_gear.concat( Array(

	{
		name: "Chain Dagger",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 3,
		cost: 500,
		ap: 2,
		notes: Array("AP 2"),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Great Sword",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 14,
		ap: 2,
		cost: 500,
		notes: Array(
			"Parry -1",
			"2 hands",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Katana",
		damage: "Str+d6+d6+2",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 8,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Bastard sword",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		type: "Chain Weapons",
		general: "Sci-Fi Weapons",
		weight: 12,
		cost: 500,
		ap: 2,
		notes: Array("Parry –1, can be wielded in two hands for +1 damage","AP 2"),
		book: books_list[4],
		page: "p18",

	},
	{
		name: "Chain Long Sword",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 10,
		cost: 500,
		ap: 2,
		notes: Array(
			"Includes Scimitars",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Rapier",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 5,
		cost: 500,
		ap: 2,
		notes: Array(
			"Parry +1",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Short Sword",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 6,
		cost: 500,
		ap: 2,
		notes: Array(
			"Includes Calvary Sabers",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},

	/* Axes and Mauls */
	{
		name: "Chain Axe",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 4,
		cost: 500,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Battle Axe",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 12,
		cost: 500,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Chain Great Axe",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Chain Weapons",
		weight: 17,
		cost: 500,
		ap: 3,
		notes: Array(
			"AP 3",
			"Parry -1",
			"2 hands"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Dagger",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 3,
		cost: 500,
		ap: 2,
		notes: Array("AP 2"),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Great Sword",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 14,
		ap: 2,
		cost: 500,
		notes: Array(
			"Parry -1",
			"2 hands",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Katana",
		damage: "Str+d6+d6+2",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 8,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Bastard sword",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 12,
		cost: 500,
		ap: 2,
		notes: Array("Parry –1, can be wielded in two hands for +1 damage","AP 2"),
		book: books_list[4],
		page: "p18",

	},
	{
		name: "Vibro Long Sword",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 10,
		cost: 500,
		ap: 2,
		notes: Array(
			"Includes Scimitars",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Rapier",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 5,
		cost: 500,
		ap: 2,
		notes: Array(
			"Parry +1",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Short Sword",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 6,
		cost: 500,
		ap: 2,
		notes: Array(
			"Includes Calvary Sabers",
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Axe",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 4,
		cost: 500,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Battle Axe",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 12,
		cost: 500,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Vibro Great Axe",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Vibro Weapons",
		weight: 17,
		cost: 500,
		ap: 3,
		notes: Array(
			"AP 3",
			"Parry -1",
			"2 hands"
		),
		book: books_list[4],
		page: "p18",
	},
{
		name: "Energy Dagger",
		damage: "Str+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 2,
		cost: 500,
		ap: 4,
		notes: Array("AP 4", "HW"),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Great Sword",
		damage: "Str+d12",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 13,
		ap: 4,
		cost: 500,
		notes: Array(
			"Parry -1",
			"2 hands",
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Katana",
		damage: "Str+d8+2",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 7,
		cost: 500,
		ap: 6,
		notes: Array(
			"AP 6", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Bastard sword",
		damage: "Str+d10",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 11,
		cost: 500,
		ap: 4,
		notes: Array("Parry –1, can be wielded in two hands for +1 damage","AP 4", "HW"),
		book: books_list[4],
		page: "p18",

	},
	{
		name: "Energy Long Sword",
		damage: "Str+d10",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 9,
		cost: 500,
		ap: 4,
		notes: Array(
			"Includes Scimitars",
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Rapier",
		damage: "Str+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 4,
		cost: 500,
		ap: 4,
		notes: Array(
			"Parry +1",
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Short Sword",
		damage: "Str+d8",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 5,
		cost: 500,
		ap: 4,
		notes: Array(
			"Includes Calvary Sabers",
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Axe",
		damage: "Str+d8",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 3,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Battle Axe",
		damage: "Str+d10",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 11,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Energy Great Axe",
		damage: "Str+d12",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Energy Weapons",
		weight: 16,
		cost: 500,
		ap: 5,
		notes: Array(
			"AP 5",
			"Parry -1",
			"2 hands", "HW"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Dagger",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 1,
		cost: 500,
		ap: 2,
		notes: Array( "AP 2"),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Great Sword",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 12,
		cost: 500,
		ap: 5,
		notes: Array(
			"Parry -1",
			"2 hands", "AP 5"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Flail",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 8,
		cost: 500,
		ap: 3,
		notes: Array(
			"Ignores Shield Parry and Cover bonus", "AP 3"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Katana",
		damage: "Str+d6+d6+2",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 6,
		cost: 500,
		ap: 5,
		notes: Array(
			"AP 5"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Long Sword",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 8,
		cost: 500,
		ap: 4,
		notes: Array(
			"Includes Scimitars", "AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Rapier",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 3,
		cost: 500,
		ap: 2,
		notes: Array(
			"Parry +1", "AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Short Sword",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 4,
		cost: 500,
		ap: 3,
		notes: Array(
			"Includes Calvary Sabers", "AP 3"
		),
		book: books_list[4],
		page: "p18",
	},

	/* Power Weapons */
	{
		name: "Power Axe",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 2,
		cost: 500,
		ap: 3,
		notes: Array(
			"AP 3"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Battle Axe",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 10,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Great Axe",
		damage: "Str+d10+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 15,
		cost: 500,
		ap: 5,
		notes: Array(
			"AP 1",
			"Parry -1",
			"2 hands", "AP 5"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Maul",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 20,
		cost: 500,
		ap: 4,
		notes: Array(
			"AP4, AP 6 vs rigid armor",
			"Parry -1",
			"2 hands"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Warhammer",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 8,
		cost: 500,
		ap: 3,
		notes: Array(
			"AP3, AP 4 vs rigid armor"
		),
		book: books_list[4],
		page: "p18",
	},
	/* Power Weapons */
	{
		name: "Power Halberd",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 15,
		cost: 500,
		ap: 4,
		notes: Array(
			"Reach 1",
			"2 hands", "AP 4"
		),
		book: books_list[4],
		page: "p18",
	},

	{
		name: "Power Lance",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 10,
		cost: 500,
		ap: 4,
		notes: Array(
			"Reach 2",
			"AP 2 when charging",
			"mounted combat only", "AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Pike",
		damage: "Str+d8+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 25,
		cost: 500,
		ap: 4,
		notes: Array(
			"Reach 2",
			"2 hands", "AP 4"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Staff",
		damage: "Str+d4+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 8,
		cost: 500,
		ap: 2,
		notes: Array(
			"Parry + 1",
			"Reach 1",
			"2 hands", "AP 2"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Power Spear",
		damage: "Str+d6+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Power Weapons",
		weight: 5,
		cost: 500,
		ap: 3,
		notes: Array(
			"Parry + 1",
			"Reach 1",
			"2 hands", "AP 3"
		),
		book: books_list[4],
		page: "p18",
	},

	{
		name: "Stun Flail",
		damage: "Str+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Stun Weapons",
		weight: 8,
		cost: 500,
		notes: Array(
			"Ignores Shield Parry and Cover bonus"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Stun Maul",
		damage: "Str+d8",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Stun Weapons",
		weight: 20,
		cost: 500,
		ap: 0,
		notes: Array(
			"AP 2 vs rigid armor",
			"Parry -1",
			"2 hands"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Stun Warhammer",
		damage: "Str+d6",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Stun Weapons",
		weight: 8,
		cost: 500,
		ap: 0,
		notes: Array(
			"AP 1 vs rigid armor"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Stun Staff",
		damage: "Str+d4",
		class: "Close Combat Weapons",
		general: "Sci-Fi Weapons",
		type: "Stun Weapons",
		weight: 8,
		cost: 500,
		ap: 0,
		notes: Array(
			"Parry + 1",
			"Reach 1",
			"2 hands"
		),
		book: books_list[4],
		page: "p18",
	},
	{
		name: "Disintegrator Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Disintegrators",

		range: "3/6/12",
		damage: "3d10",
		rof: 1,
		shots: 5,
		min_str: 0,
		weight: 5,
		cost: 3000,
		ap: 0,
		notes: Array(
			"HW"
		),
		page: "p19",
	},
	{
		name: "Disintegrator Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Disintegrators",

		range: "5/10/20",
		damage: "3d10",
		rof: 1,
		shots: 5,
		min_str: 2,
		weight: 12,
		cost: 10000,
		ap: 0,
		notes: Array(
			"HW"
		),
		page: "p19",
	},
	{
		name: "Flak Gun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Flak Guns",

		range: "12/24/48",
		damage: "3d6+2",
		rof: 1,
		shots: 6,
		min_str: 2,
		weight: 15,
		cost: 500,
		ap: 0,
		notes: Array(
			"LBT"
		),
		page: "p19",
	},
	{
		name: "Hand Flamer",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Flame Weapons",

		range: "Cone",
		damage: "2d12",
		rof: 1,
		shots: 10,
		min_str: 0,
		weight: 5,
		cost: 500,
		ap: 0,
		notes: Array(
			"HW", "Cone"
		),
		page: "p19",
	},
	{
		name: "Heavy Flamer",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Flame Weapons",

		range: "See Notes",
		damage: "3d12",
		rof: 1,
		shots: 30,
		min_str: 2,
		weight: 30,
		cost: 1000,
		ap: 0,
		notes: Array(
			"HW", "Cone or MBT"
		),
		page: "p19",
	},
	{
		name: "Flechette Gun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Flechette Weapons",

		range: "12/24/48",
		damage: "2d4+1",
		rof: 3,
		shots: 90,
		min_str: 0,
		weight: 4,
		cost: 600,
		ap: 0,
		notes: Array(

		),
		page: "p19",
	},
	{
		name: "EMP Grenade",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Grenades",

		range: "5/10/20",
		damage: "see p20",
		rof: 1,
		shots: 1,
		min_str: 0,
		weight: .25,
		cost: 50,
		ap: 0,
		notes: Array(

		),
		page: "p20",
	},
	{
		name: "Fragmentation Grenade",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Grenades",

		range: "5/10/20",
		damage: "3d6",
		rof: 1,
		shots: 1,
		min_str: 0,
		weight: .25,
		cost: 50,
		ap: 0,
		notes: Array(
			"HW", "LBT"
		),
		page: "p20",
	},
	{
		name: "Smoke Grenade",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Grenades",

		range: "5/10/20",
		damage: "see p20",
		rof: 1,
		shots: 1,
		min_str: 0,
		weight: .25,
		cost: 50,
		ap: 0,
		notes: Array(
			"LBT"
		),
		page: "p20",
	},
	{
		name: "Thermal Grenade",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Grenades",

		range: "5/10/20",
		damage: "3d10",
		rof: 1,
		shots: 1,
		min_str: 0,
		weight: .25,
		cost: 50,
		ap: 0,
		notes: Array(
			"HW", "SBT", "Ignores non-sealed armor"
		),
		page: "p20",
	},
	{
		name: "Grenade Launcher",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Grenades",

		range: "24/48/96",
		damage: "by grenade type",
		rof: 1,
		shots: 20,
		min_str: 2,
		weight: 8,
		cost: 700,
		ap: 0,
		notes: Array(
		),
		page: "p20",
	},

	{
		name: "Gyrojet Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Gyrojet Weapons",

		range: "12/24/48",
		damage: "By Type",
		rof: 1,
		shots: 10,
		min_str: 0,
		weight: 3,
		cost: 400,
		ap: 0,
		notes: Array(
		),
		page: "p20",
	},

	{
		name: "Gyrojet Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Gyrojet Weapons",

		range: "24/48/96",
		damage: "By Type",
		rof: 1,
		shots: 30,
		min_str: 0,
		weight: 10,
		cost: 600,
		ap: 0,
		notes: Array(
		),
		page: "p20",
	},

	{
		name: "Laser Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Lasers",

		range: "15/30/60",
		damage: "2d6",
		rof: 1,
		shots: 50,
		min_str: 0,
		weight: 2,
		cost: 250,
		ap: 2,
		notes: Array(
			"Cauterize", "Overcharge", "No Recoil", "AP 2", "SA"
		),
		page: "p20",
	},

	{
		name: "Laser SMG",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Lasers",

		range: "15/30/60",
		damage: "2d6",
		rof: 4,
		shots: 100,
		min_str: 0,
		weight: 4,
		cost: 500,
		ap: 0,
		notes: Array(
			"Cauterize", "Overcharge", "No Recoil", "AP 2"
		),
		page: "p20",
	},

	{
		name: "Laser Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Lasers",

		range: "30/60/120",
		damage: "3d6",
		rof: 3,
		shots: 100,
		min_str: 2,
		weight: 8,
		cost: 700,
		ap: 2,
		notes: Array(
			"3RB", "SA", "Cauterize", "Overcharge", "No Recoil", "AP 2"
		),
		page: "p20",
	},

	{
		name: "Gatling Laser",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Lasers",

		range: "30/60/120",
		damage: "3d6+4",
		rof: 4,
		shots: 800,
		min_str: 2,
		weight: 20,
		cost: 1000,
		ap: 2,
		notes: Array(
			"Cauterize", "Overcharge", "No Recoil", "AP 2"
		),
		page: "p20",
	},

	{
		name: "Blaster Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Particle Accelerators (Blasters)",

		range: "12/24/48",
		damage: "2d6+2",
		rof: 1,
		shots: 100,
		min_str: 0,
		weight: 1,
		cost: 300,
		ap: 2,
		notes: Array(
			"AP 2", "SA"
		),
		page: "p21",
	},

	{
		name: "Blaster SMG",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Particle Accelerators (Blasters)",

		range: "12/24/48",
		damage: "2d6+2",
		rof: 3,
		shots: 100,
		min_str: 0,
		weight: 1,
		cost: 300,
		ap: 0,
		notes: Array(
			"AP 2"
		),
		page: "p21",
	},

	{
		name: "Blaster Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Particle Accelerators (Blasters)",

		range: "24/48/96",
		damage: "2d8+2",
		rof: 1,
		shots: 100,
		min_str: 0,
		weight: 5,
		cost: 500,
		ap: 2,
		notes: Array(
			"SA", "AP 2"
		),
		page: "p21",
	},

	{
		name: "Gatling Blaster",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Particle Accelerators (Blasters)",

		range: "24/48/96",
		damage: "2d8+4",
		rof: 4,
		shots: 100,
		min_str: 2,
		weight: 12,
		cost: 800,
		ap: 2,
		notes: Array(
			"AP 2"
		),
		page: "p21",
	},

	{
		name: "Plasma Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Plasma Weapons",

		range: "12/24/48",
		damage: "2d10+2",
		rof: 1,
		shots: 8,
		min_str: 0,
		weight: 7,
		cost: 600,
		ap: 0,
		notes: Array(
			"HW"
		),
		page: "p21",
	},
	{
		name: "Plasma Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Plasma Weapons",

		range: "24/48/96",
		damage: "3d10",
		rof: 1,
		shots: 12,
		min_str: 0,
		weight: 12,
		cost: 1200,
		ap: 0,
		notes: Array(
			"HW"
		),
		page: "p21",
	},
	{
		name: "Portable Missile",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Portable Missile Launcher",

		range: "50/100/200",
		damage: "6d6",
		rof: 1,
		shots: 1,
		min_str: 0,
		weight: 8,
		cost: 700,
		ap: 0,
		notes: Array(
			"AP 20", "HW", "SBT"
		),
		page: "p21",
	},
	{
		name: "Light Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "10/20/40",
		damage: "2d6-1",
		rof: 1,
		shots: 12,
		min_str: 0,
		weight: .5,
		cost: 200,
		ap: 2,
		notes: Array(
			"AP 2", "SA"
		),
		page: "p22",
	},
	{
		name: "Medium Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "10/20/40",
		damage: "2d6",
		rof: 1,
		shots: 24,
		min_str: 0,
		weight: 2,
		cost: 300,
		ap: 3,
		notes: Array(
			"AP 3", "SA"
		),
		page: "p22",
	},
	{
		name: "Heavy Pistol",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "12/24/48",
		damage: "2d6+1",
		rof: 1,
		shots: 12,
		min_str: 0,
		weight: 4,
		cost: 400,
		ap: 4,
		notes: Array(
			"AP 4", "SA"
		),
		page: "p22",
	},
	{
		name: "Submachine Gun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "12/24/48",
		damage: "2d6",
		rof: 3,
		shots: 45,
		min_str: 0,
		weight: 4,
		cost: 700,
		ap: 2,
		notes: Array(
			"AP 2", "SA", "3RB"
		),
		page: "p22",
	},
	{
		name: "Assault Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "24/48/96",
		damage: "2d8+1",
		rof: 3,
		shots: 60,
		min_str: 2,
		weight: 11,
		cost: 1500,
		ap: 3,
		notes: Array(
			"AP 3", "SA", "3RB"
		),
		page: "p22",
	},
	{
		name: "Hunting Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "24/48/96",
		damage: "2d8+1",
		rof: 1,
		shots: 8,
		min_str: 2,
		weight: 6,
		cost: 600,
		ap: 3,
		notes: Array(
			"AP 3", "Snapfire"
		),
		page: "p22",
	},
	{
		name: "Sniper Rifle",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "50/100/200",
		damage: "2d10",
		rof: 1,
		shots: 12,
		min_str: 0,
		weight: 8,
		cost: 700,
		ap: 4,
		notes: Array(
			"AP 4", "HW", "Snapfire"
		),
		page: "p22",
	},
	{
		name: "Shotgun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "12/24/48",
		damage: "1-3d6",
		rof: 1,
		shots: 8,
		min_str: 0,
		weight: 6,
		cost: 600,
		ap: 0,
		notes: Array(
			"SA"
		),
		page: "p22",
	},
	{
		name: "Shotgun, Full-Auto",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "12/24/48",
		damage: "1-3d6",
		rof: 3,
		shots: 18,
		min_str: 2,
		weight: 18,
		cost: 900,
		ap: 0,
		notes: Array(
			""
		),
		page: "p22",
	},
	{
		name: "Light MG",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "30/60/120",
		damage: "2d8",
		rof: 4,
		shots: 200,
		min_str: 3,
		weight: 20,
		cost: 700,
		ap: 2,
		notes: Array(
			"AP2"
		),
		page: "p22",
	},
	{
		name: "Heavy MG",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "50/100/200",
		damage: "2d10",
		rof: 3,
		shots: 200,
		min_str: 3,
		weight: 65,
		cost: 700,
		ap: 4,
		notes: Array(
			"AP4", "HW"
		),
		page: "p22",
	},
	{
		name: "Minigun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Slugthrowers",

		range: "24/48/96",
		damage: "2d8+4",
		rof: 5,
		shots: 1000,
		min_str: 3,
		weight: 85,
		cost: 10000,
		ap: 3,
		notes: Array(
			"AP3", "HW"
		),
		page: "p22",
	},
	{
		name: "Stun Gun",
		book: books_list[4],
		general: "Sci-Fi Weapons",
		class: "Ranged Weapons",
		type: "Stun Guns",

		range: "5/10/20",
		damage: "-",
		rof: 1,
		shots: 12,
		min_str: 0,
		weight: 1,
		cost: 300,
		ap: 0,
		notes: Array(

		),
		page: "p22",
	}
));
