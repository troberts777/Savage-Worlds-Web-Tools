/*

The majority of this data is copyright 2014 Pinnacle Entertainment Group
Please purchase the Sci-Fi companion and support a great company!

*/
var starship_modifications = Array(
	{
		name: "AMCM",
		description: "Dropping bombs uses Knowledge (Bombardier) rather than Shooting. Craft must be in atmosphere to drop bombs. Night, cloud cover, rain, very high altitude attacks (GM’s call) or other factors that might interfere with the bomb’s targeting systems inflicts a –2 penalty.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 5000 * selected_starship.size;
		},
	},
	{
		name: "Armor",
		description: "Increases a ship’s Armor value by +2. Due to the nature of space and the size and shape of starships, all Armor is considered Heavy Armor.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 10000 * selected_starship.size;
		},
		get_mod_effect: function(selected_starship) {
			selected_starship.armor++;
			selected_starship.armor++;

			selected_starship.toughness++;
			selected_starship.toughness++;
		}
	},
	{
		name: "Artificial Intelligence",
		description: "The ship’s AI can operate all systems — from locomotion to weapons to opening or closing hatches. It has a skill level of d10 in these tasks, but is an “Extra” and does not receive a Wild Die. The AI does not suffer from multi-action penalties if given simultaneous tasks. In combat, the AI acts on the captain’s Action Card. Giving the AI a short verbal command is a free action.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 10000 * selected_starship.size;
		},
	},
	{
		name: "Atmospheric",
		description: "Allows the ship to enter planetary atmospheres. This includes heat shielding and additional work to handle the stress and strain of entry. All starships have vertical take-off and landing (VTOL) capability.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return selected_starship.size / 2;
		},
		get_cost: function(selected_starship) {
			return 50000 * selected_starship.size;
		},
	},
	{
		name: "Bomb Bay",
		description: "Each bomb bay may drop up to four Small, 2 Medium, or 1 Large (or larger) bomb per round at no penalty. All use the same attack roll. Dropping bombs uses the Knowledge (Bombardier) skill.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 50000;
		},
	},
	{
		name: "Crew Space",
		description: "Space for four permanent crew members.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 100000;
		},
	},
	{
		name: "Defelector Screens",
		description: "The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large ships, and 3 for Huge to Gargantuan vessels.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			if( selected_starship.size < 12)
				return 2;
			if( selected_starship.size >= 12)
				return 3;

		},
		get_cost: function(selected_starship) {
			return 10000 * selected_starship.size;
		},
	},
	{
		name: "Electromagnetic Shielding",
		description: "Adds +6 to the ship’s effective Toughness from EMP missiles (see page 25).",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 5000 * selected_starship.size;
		},
	},
	{
		name: "FTL Drive",
		description: "This includes both the drive and the navigation system required to use it.",
		max: "1",
		get_mod_cost: function(selected_starship) {
			return selected_starship.size / 2;
		},
		get_cost: function(selected_starship) {
			return 2000000 * selected_starship.size;
		},
	},
	{
		name: "Fuel Pods",
		description: "Each fuel pod increases the vessel’s energy capacity by 50%",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return selected_starship.size / 2;
		},
		get_cost: function(selected_starship) {
			return 100000 * selected_starship.size;
		},
		get_mod_effect: function(selected_starship) {
			selected_starship.energy_capacity +=  selected_starship.base_energy_capacity / 2;
		}
	},
	{
		name: "Garage / Hangar",
		description: "A small hangar (or garage or external lift-hooks) can carry up 8 Size points of ship, vehicle, or walker.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 4;
		},
		get_cost: function(selected_starship) {
			return 1000000;
		}
	},
	{
		name: "Linked",
		description: "Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 0;
		},
		get_cost: function(selected_starship) {
			return 0;
		},
	},
	{
		name: "Mercantile",
		description: "Found only on Huge and Gargantuan ships, this might be a restaurant, commissary, or speciality store. Each generates Size+$1d4K a month for the ship (and the same for the mercantile’s owner). The store has 300 square feet of space. Each additional Mod adds roughly 100 square feet and +$1d4K to revenue.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 100000;
		}
	},
	{
		name: "Missile Launcher",
		description: "Allows up to four Light or two Heavy (or AT) missiles to be fired at once.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 50000;
		}
	},
	{
		name: "Passenger Pod",
		description: "Small and Medium ships only. These are rows of fairly spacious seats with safety harnesses, personal vid-screens, and other amenities designed for short travels (typically less than 24 hours). Each pod seats 10.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 50000;
		}
	},
	{
		name: "Sensor Suite (Galactic)",
		description: "Light, chemical, motion, and other active sensors allow detection of targets up to one light year away with a Knowledge (Electronics) roll. Within 10K miles, the sensors add +2 to the roll. Illumination penalties are ignored. Targets don’t have to be in direct line of sight, but asteroid or powerful energy fields may cause inaccurate or false readings at the GM’s discretion.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 1000000;
		}
	},
	{
		name: "Sensor Suite (Planetary)",
		description: "This functions exactly like the Medium Sensor Suite (page 16) but has a range of 10K miles.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 50000;
		}
	},
	{
		name: "Shields",
		description: "The craft is protected by an ablative energy field that absorbs 10×Size points of damage before it’s depleted. Apply all damage to the shield first, then any left over to the ship (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A craft may regenerate its Size in shield points if it makes no attacks in a round.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return selected_starship.size / 2;
		},
		get_cost: function(selected_starship) {
			return 25000 * selected_starship.size;
		},
	},
	{
		name: "Sloped Armor",
		description: "Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 5000 * selected_starship.size;
		},
	},
	{
		name: "Speed",
		description: "Each purchase increases the ship’s Acc by 5 and Top Speed by 50. (This cannot be taken with Speed Reduction.)",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 5000 * selected_starship.size;
		},
		get_mod_effect: function(selected_starship) {
			selected_starship.ts +=  50;
			selected_starship.acc +=  5;
		}
	},
	{
		name: "Speed Reduction",
		description: "The ship trades power and speed for additional room. Each time this is taken, reduce Acc by 5 and Top Speed by 50 to gain half the ship’s Size in Mod slots.",
		max: 3,
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 5000 * selected_starship.size;
		},
		get_mod_effect: function(selected_starship) {
			selected_starship.ts -=  50;
			selected_starship.acc -=  5;
			selected_starship.mods += selected_starship.base_mods / 2;
		}
	},
	{
		name: "Stealth System",
		description: "Radar-absorbing paint, heat baffles, scramblers, and other devices make the ship difficult to detect by vision or sensors. Those trying to spot, attack, (or lock on to) the ship subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the ship fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.",
		max: 3,
		get_mod_cost: function(selected_starship) {
			return selected_starship.size;
		},
		get_cost: function(selected_starship) {
			return 50000 * selected_starship.size;
		}
	},
	{
		name: "Superstructure",
		description: "Superstructures are large sections that add great amounts of space to large ships, typically to accommodate more passengers or cargo. Each superstructure adds one to the fuel used per day, consumes 10 regular Mods, and subtracts 1 from the ship’s base Toughness (not Armor) as it reduces overall structural integrity. Choose the type of superstructure from the sidebar below.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 10;
		},
		get_cost: function(selected_starship) {
			return 5000000;
		}
	},
	{
		name: "Targeting System",
		description: "The ship’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.",
		max: 1,
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 10000  * selected_starship.size;
		}
	},
	{
		name: "Teleporter",
		description: "Ultra Tech. Teleporters work by turning physical objects into energy, blasting them through space, and then reconstituting them at the destination. Each teleporter can transport six average size humans at a time, or 1000 pounds of cargo up to 100 miles distant, or up to 1000 miles distant if a linked transmitter is present at the destination.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 2;
		},
		get_cost: function(selected_starship) {
			return 5000000;
		}
	},
	{
		name: "Torpedo Tube",
		description: "Each tube allows up to two Light or one Heavy torpedo to be fired at once (at one or two targets, as desired).",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return 1;
		},
		get_cost: function(selected_starship) {
			return 500000;
		}
	},
	{
		name: "Tractor Beam",
		description: "Tractor beams are specialized starship weapons designed to hold an enemy ship in place and pull it to the “attacker.” Ships can only affect vessels of smaller Size. Their range is quite short (about 1000 yards), so they must get a Short Range result on the Chase table to use the weapon. This is an opposed Knowledge (Electronics) roll at –4 vs the defender’s Piloting (or Knowledge (Electronics) in Large or larger ships). If the attacker is successful, the enemy ship is caught and pulled into contact in 2d6 rounds. A captive’s ship’s life support systems remain active, but all locomotion and weapons are shut down.",
		max: "u",
		get_mod_cost: function(selected_starship) {
			return selected_starship.size / 2;
		},
		get_cost: function(selected_starship) {
			return 1000000;
		}
	}
);