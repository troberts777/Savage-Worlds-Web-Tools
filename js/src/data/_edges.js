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
		 'en-US': 'Advanced Civilization',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Atlanteans are generally more intelligent than the other races of their world. They start with a d6 in Smarts rather than a d4.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-advanced-civilization',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("smarts");
}
},
{
	 name: {
		 'en-US': 'Agile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Elves are graceful and agile. They start with a d6 in Agility instead of a d4.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elf-agile',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.boostAttribute("agility",1);
}
},
{
	 name: {
		 'en-US': 'Agile',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Rakashans have the feline grace of their ancestors. They start with a d6 Agility attribute instead of a d4',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-agile',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("agility", 1);
}
},
{
	 name: {
		 'en-US': 'Aquatic',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Atlanteans live in and breathe water. They cannot drown in water, move at full Swimming skill, and get a free d6 Swimming.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-aquatic',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.addRacialSkill("SKILL_SWIMMING", 2);
}
},
{
	 name: {
		 'en-US': 'Claws',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Rakashans have retractable claws that do Str+d6 damage and grant +2 to Climbing rolls on all but completely sheer surfaces.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-claws',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'extra-edge',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( characterObject ) {
	characterObject.availableEdgePoints = characterObject.availableEdgePoints + 1;
},
},
{
	 name: {
		 'en-US': 'Flight',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Avions can fly at their basic Pace and even “run” while flying. It costs 2” of Pace to gain 1” of height.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'avion-flight',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Fortunate',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-folk draw one additional Benny per game session. This may be combined with the Luck and Great Luck Edges.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-folk-fortunate',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Infravision',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-orcs can see in the infrared spectrum, halving attack penalties (round down) for bad lighting.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-orc-infravision',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Low Light Vision',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Dwarven eyes are accustomed to the dark of the underearth. They ignore attack penalties for Dim and Dark lighting.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dwarf-low-light-vision',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Low Light Vision',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Elven eyes amplify light like a cat\'s, allowing them to see in the dark. Elves ignores attack penalties for Dim and Dark lighting.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elf-low-light-vision',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Low Light Vision',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Rakashan eyes amplify light. They can see in the dark and ignore attack penalties for Dim and Dark lighting.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-low-light-vision',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Natural Weapons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The tails, claws, and teeth of saurians allow them to tail slap, claw, or bite in combat for Str+d4 damage.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'saurian-natural-weapons',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'android-programming',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( characterObject ) {
	// TODO kludge
	characterObject.skillPointsAvailable = characterObject.skillPointsAvailable + 2;
},
},
{
	 name: {
		 'en-US': 'Saurian Senses',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Saurians\' lizard tongues can “taste” the air, giving them +2 to Notice rolls. They are always considered active guards for Stealth checks.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'saurian-senses',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Spirited',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-folk are generally optimistic beings. They start with a d6 Spirit instead of a d4.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-folk-spirited',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("spirit", 1);
}
},
{
	 name: {
		 'en-US': 'Strong',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Half-orcs have some of the strength of their ancestry. They start with a d6 Strength attribute instead of a d4',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-orc-strong',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("strength", 1);
}
},
{
	 name: {
		 'en-US': 'Tough',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The pressure of their deep homes make Atlanteans tougher than most. Increase Toughness by 1.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-tough',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness++;
}
},
{
	 name: {
		 'en-US': 'Tough',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Dwarves are stout and tough. They start with a d6 Vigor instead of a d4',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dwarf-tough',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("vigor",1);
}
},
{
	 name: {
		 'en-US': 'Ace',
	},
	 description: {
		 'en-US': 'Aces are soecual pilots and drivers who feel more comfortable behind the wheel, throttle, or flight stick than on their own two feet.,Aces add +2 to Boating, Driving, and Piloting rolls. In addition, they may also spend Bennies to make Soak rolls for any vehicle or vessel they control. This is a Boating, Driving, or Piloting roll at -2 (cancelling their usual +2). Each success and raise negates a wound and any critical hit that would have resulted from it.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'ace',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Acrobat',
	},
	 description: {
		 'en-US': 'Those who have formal training in the acrobatic arts or are naturally agile may take this Edge. It adds +2 to all Agility rolls made to perform acrobatic maneuvers (including Trick maneuvers), and also adds +1 to a character\'s Parry as long as he has no encumbrance penalty.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'acrobat',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
			&&
		characterObject.displayAttributes.strength.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Alertness',
	},
	 description: {
		 'en-US': 'Not much gets by your hero. He\'s very observant and perceptive, and adds +2 to his Notice rolls to hear, see, or otherwise sense the world around him.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'alertness',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Ambidextrous',
	},
	 description: {
		 'en-US': 'Your hero is as deft with his left hand as he is with his right. Characters normally suffer a -2 penalty when performing physical tasks with the off-hand (characters are assumed to be right-handed). With this Edge, your warrior ignores the -2 penalty for using his off-hand (see page 75).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'ambidextrous',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Arcane Background',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This is the Edge your character must purchase to have any sort of magical, psionic, or other supernatural ability. See Chapter Five for a complete description of Arcane Backgrounds.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-background',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ){
	charObject.hasArcaneBackground = 1;
}
},
{
	 name: {
		 'en-US': 'Arcane Resistance',
	},
	 description: {
		 'en-US': 'This individual is particularly resistant to magic (including psionics, weird science, etc.), whether by nature or by heritage. He acts as if he had 2 points of Armor when hit by damage-causing arcane powers, and adds +2 to his Trait rolls when resisting opposed powers. Even friendly arcane powers must subtract this modifier to affect the resistant hero.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-resistance',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Arcane Resistance, Improved',
	},
	 description: {
		 'en-US': 'As above but Armor and resistance are increased to 4.',
	},
	 required_edge: 'arcane-resistance',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-resistance,-improved',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Assassin',
	},
	 description: {
		 'en-US': 'Assassins are trained killers who know how to kill with deadly precision - if they can properly approach their prey. Assassins add +2 to any damage roll where they strike a foe unawares (even with ranged attacks).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'assassin',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Attractive',
	},
	 description: {
		 'en-US': 'It\'s no secret that beautiful people have an easier time getting their way in life. This Edge grants your beautiful or handsome character +2 to Charisma.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'ugly',
	 tag: 'attractive',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			charObject.derived.charisma = charObject.derived.charisma + 2;
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.vigor.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Attractive, Very',
	},
	 description: {
		 'en-US': 'Your hero is drop-dead gorgeous. His Charisma is increased to +4.',
	},
	 required_edge: 'attractive',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'ugly',
	 tag: 'attractive,-very',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
			charObject.derived.charisma = charObject.derived.charisma + 2;
		}
},
{
	 name: {
		 'en-US': 'Beast Bond',
	},
	 description: {
		 'en-US': 'Some individuals can exert incredible will over their animal companions. These characters may spend their own Bennies for any animals under their control, including mounts, pet dogs, familiars, and so on.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'beast-bond',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Beast Master',
	},
	 description: {
		 'en-US': 'Animals like your hero, and won\'t attack him unless he attacks them first or they are enraged for some reason. His "animal magnetism" is so great he\'s attracted a loyal animal of some sort as well. This is typically a dog, wolf, or raptor, though the GM may allow other companions if it fits the setting.,The beast is an Extra (not a Wild Card). If it should be killed, the hero finds a replacement in 2d6 days.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'beast-master',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Berserk',
	},
	 description: {
		 'en-US': 'Immediately after suffering a wound (including a Shaken result from physical damage), your hero must make a Smarts roll or go Berserk. While Berserk, his Parry is reduced by 2 but he adds +2 to all Fighting, Strength, melee damage rolls, and Toughness. The warrior ignores all wound modifiers while Berserk, but cannot use any skills, Edges, or maneuvers that require concentration, including Shooting and Taunt, but not Intimidation. Berserkers attack with reckless abandon. Anytime his Fighting die is a 1 (regardless of his Wild Die), he hits a random adjacent target (not the original target). The attack may hit friend as well as foe. If there are no other adjacent targets, the blow simply misses. The Berserker may end his rage by doing nothing (not even moving) for one full action and making a Smarts roll at -2.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'berserk',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Block',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'block',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Block',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'As above, but the hero adds +2 to his Parry.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'block',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-block',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Brave',
	},
	 description: {
		 'en-US': 'Those with this Edge have learned to master their fear. Or perhaps are so jaded or emotionally distant they\'ve just lost their normal "fight or flight" responses. Either way, your hero adds +2 to Fear tests. If the character is in a setting that uses Guts as a Setting Rule, it adds to that as well.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'brave',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {

		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Brawler',
	},
	 description: {
		 'en-US': 'Frequent fights with his bare hands have given this thug a powerful punch. When he hits a foe with a successful bare-handed Fighting roll, he adds +2 to his damage.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'brawler',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.strength.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Bruiser',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'When the bruiser gets a raise on his bare-handed Fighting attack, he rolls a d8 instead of a d6.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'brawler',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'bruiser',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Brawny',
	},
	 description: {
		 'en-US': 'Your bruiser is very large or perhaps just very fit. His bulk resists damage better than most and adds +1 to his Toughness. In addition, the character can carry more than most proportional to his Strength. He can carry 8 times his Strength in pounds without penalty instead of the usual 5 times his Strength.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'obese',
	 tag: 'brawny',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			charObject.derived.toughness++;
			charObject.encumbrance_multiplier = 8;
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.vigor.value >= 6
			&&
		characterObject.displayAttributes.strength.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Champion',
	},
	 description: {
		 'en-US': 'Champions are holy (or unholy) men and women chosen to fight for a particular deity or religion. Most are pious souls ready and willing to lay down their lives for a greater cause, but some may have been born into the role and follow their path with some reluctance.,Champions fight the forces of darkness (or good). They add +2 damage when attacking supernaturally evil (or good) creatures, and have +2 Toughness when suffering damage from supernaturally evil (or good) sources, including arcane powers and the weapons, claws, teeth, etc., of such creatures.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'champion',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
			&&
		characterObject.displayAttributes.spirit.value >= 8
			&&
		characterObject.displayAttributes.strength.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Charismatic',
	},
	 description: {
		 'en-US': 'Your hero has learned how to work with others, even those who might be somewhat opposed to him or his efforts. This adds +2 to his Charisma.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'charismatic',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Combat Reflexes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Your adventurer recovers quickly from shock and trauma. He adds +2 to his Spirit roll when attempting to recover from being Shaken.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'combat-reflexes',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Command',
	},
	 description: {
		 'en-US': 'Command is the ability to give clear instructions to surrounding allies and enforce your hero\'s will upon them. This makes your character\'s compatriots more willing to fight on despite their wounds, and so adds +1 to their Spirit rolls to recover from being Shaken',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'command',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Command Presence',
	},
	 description: {
		 'en-US': 'A booming voice, effective commands, natural charisma, or simple training results in a much more effective combat element. At the center of that element is the officer in command. A hero with this Edge has a "command radius" of 10" instead of the usual 5".',
	},
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'command-presence',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Fervor',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'A simple phrase uttered by a great leader can sometimes have momentous results. A leader with this ability can inspire his men to bloody fervor by yelling a motto, slogan, or other inspirational words. Those in the command radius add +1 to their Fighting damage rolls.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'command',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fervor',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Hold the Line!',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'hold-the-line',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Inspire',
	},
	 description: {
		 'en-US': 'Leaders with exceptional reputations and experience in battle inspire the soldiers around them. They add +2 to Spirit rolls when recovering from being Shaken (this includes the original +1 bonus for the Command Edge).',
	},
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'inspire',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Leader of Men',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'command',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'leader-of-men',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Natural Leader',
	},
	 description: {
		 'en-US': 'This Edge signifies a special link between a leader and his men. With it, he may share his Bennies with any troops under his command.',
	},
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'natural-leader',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Tactician',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The leader has a natural grasp of small unit tactics and can frequently take advantage of a rapidly changing situation.,At the beginning of a fight and before any Action Cards are dealt, the hero makes a Knowledge (Battle) roll. For each success and raise he receives one Action Card. These are kept separate from his regular Action Cards and are not placed back into the deck until used or the combat ends (including Jokers!). At the start of any round, the hero may give one or more of these extra cards to his allies, whether Extras or Wild Cards, who then use it as their Action Card for the round in place of the one dealt them. This allows Extras to operate independently of Wild Card characters for one round if they receive their own card.,Only one character per encounter may use this edge.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'command',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'tactician',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Common Bond',
	},
	 description: {
		 'en-US': 'This Edge signifies a special link between close companions-such as a typical party. It doesn\'t matter whether or not the characters get along perfectly or not, they\'ve just formed a close and common bond during their epic adventures.,A character with this Edge may freely give his Bennies to any other Wild Card he can communicate with. This represents the character giving his verbal or spiritual support to the ally. The player should say what his character is doing to give the support. The gesture could be as complex as a rousing speech, or as simple as a knowing nod.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'common-bond',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Connections',
	},
	 description: {
		 'en-US': 'Whether it\'s to the Feds, the cops, the Mob, or some big corporation, your heroine knows someone on the inside-someone who is willing to lend her a hand on occasion (usually once per game session).,This Edge may be taken more than once, but each time must be applied to a different organization. The GM should also ensure the organization is limited to a single, unique organization. A hero may, for instance, have Connections (US Army), but he shouldn\'t have a blanket Connections (Military).,To use a character\'s Connections requires that she first get in touch with one of her contacts. This requires a Streetwise roll. Failure means the particular contact wasn\'t available, their cell phone wasn\'t on, or they were otherwise tied up.,Once in contact, the hero must make a Persuasion roll. The GM should feel free to modify both the Persuasion roll and any results based on the circumstances.,A failure indicates the heroine\'s contacts just couldn\'t come through this time, or perhaps just weren\'t persuaded that their help was really necessary.,On a success, the contact might share information, but won\'t do anything too risky to help. On a raise, the contact is willing to leak sensitive information, but stops short of outright betrayal.,Two or more raises means the heroine has pushed the right buttons and can count on serious help. The Connection will risk serious consequences for the heroine, and if she needs financial assistance, may provide more than he\'s comfortable with. If the heroine asks for muscle, the contact delivers either one expert (a safe- cracker, wheel-man, security expert, etc.) or five average fighter-types for the contact\'s particular organization (a mob boss sends five thugs, the Army sends five infantrymen, etc.).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'connections',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Counterattack',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'counterattack',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Improved Counterattack',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'counterattack',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-counterattack',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Danger Sense',
	},
	 description: {
		 'en-US': 'Your hero can sense when something bad is about to happen. Anytime he\'s about to be the victim of a surprise attack, ambush, or other nasty surprise, he gets a Notice roll at -2 just before the attack or event occurs. If successful, the character knows something is about to happen and may take appropriate action against it. This means the hero is on Hold for the first round of a combat. Should the hero fail his roll, he still follows the normal Surprise rules, if applicable (see page 73).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'danger-sense',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Dead Shot',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character doubles his total damage when making a successful Shooting or Throwing attack this round.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dead-shot',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
throwingSkill = characterObject.getSkill("SKILL_THROWING");
shootingSkill = characterObject.getSkill("SKILL_SHOOTING");
if( throwingSkill.value >= 10 || shootingSkill.value >= 10)
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Dodge',
	},
	 description: {
		 'en-US': 'Some crafty types know how to get out of harm\'s way. This Edge allows them to use cover, movement, and concealment to make them harder to hit. Unless they are the victim of a surprise attack and taken completely unaware, attackers must subtract 1 from their ranged attack rolls when targeting them (even in close combat). Characters who attempt to evade area effect attacks may add +1 to their Agility roll as well (when allowed).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dodge',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Dodge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'As above but attackers subtract 2 from their attack rolls, and the character adds +2 to evade area effect weapons when allowed.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'dodge',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-dodge',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Elan',
	},
	 description: {
		 'en-US': 'When this spirited hero puts his heart into something it tends to pay off in big ways. When you spend a Benny on a Trait roll (including Soak rolls), add +2 to the final total.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elan',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Extraction',
	},
	 description: {
		 'en-US': 'When a character normally withdraws from a melee, his attacker gets a free attack before he does so-a very dangerous proposition for most. Your hero is adept at retreating from an engagement.,Make an Agility roll. If successful, one opponent doesn\'t get a free attack anytime you disengage (see page 87).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'extraction',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Extraction',
	},
	 description: {
		 'en-US': 'As above but if you succeed with a raise all opponents currently in melee with the character lose their free attack as your warrior withdraws.',
	},
	 required_edge: 'extraction',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-extraction',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Fast Healer',
	},
	 description: {
		 'en-US': 'Some individuals just seem to heal faster than others. Those with this blessing add +2 to Vigor rolls when checking for natural healing. See page 78 for complete rules on Healing.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fast-healer',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {

		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.vigor.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'First Strike',
	},
	 description: {
		 'en-US': 'Once per turn the hero (if not Shaken) gets a free Fighting attack against a single foe who moves adjacent to him. This automatically interrupts the opponent\'s action and does not cost the hero his action if he is on Hold or has not yet acted this round.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'first-strike',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved First Strike',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'As above but the hero may make one free attack against each and every foe who moves adjacent to him.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'first-strike',
	 required_rank: 3,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-first-strike',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Fleet-Footed',
	},
	 description: {
		 'en-US': 'The hero\'s Pace is increased by +2 and he rolls a d10 instead of a d6 when running.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fleet-footed',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {

		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Florentine',
	},
	 description: {
		 'en-US': 'A character trained to fight "Florentine" is a master at wielding two weapons at once. He adds +1 to his Fighting rolls versus an opponent with a single weapon and no shield. In addition, opponents subtract 1 from any "gang up" bonuses they would normally get against the fighter as his two flashing blades parry their blows.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'florentine',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Followers',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'followers',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Frenzy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'frenzy',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Improved Frenzy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'frenzy',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-frenzy',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Gadgeteer',
	},
	 description: {
		 'en-US': 'These mechanical gurus are so technically savvy they can quickly build a machine to handle nearly any situation.,Once per game session, a gadgeteer can create a "jury-rigged" device from spare parts. The device functions just like any other Weird Science device, and uses any power available to Weird Scientists in that setting (though this is still subject to Rank restrictions). It has half the inventor\'s Power Points, and once these are used up, the gadget burns out and does not recharge. The inventor must have access to some parts and a reasonable amount of time (GM\'s call, but at least 1d20 minutes) to create the gizmo.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'gadgeteer',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Giant Killer',
	},
	 description: {
		 'en-US': 'The bigger they are, the harder they are to kill. At least for most. But your hero knows how to find the weak points in massive creatures.,Your hero does +1d6 damage when attacking creatures three sizes or more larger than himself. An ogre (Size +3) with this ability, for example, gains the bonus only against creatures of Size +6 or greater. A human Giant Killer (Size 0), can claim the bonus against the ogre, however.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'giant-killer',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Hard to Kill',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This adventurer has more lives than a truckload of cats. When forced to make Vigor rolls due to Incapacitation, he may ignore his wound modifiers. This only applies to Vigor rolls called for to resist Incapacitation or death (see page 77). He still suffers from wound modifiers for other Trait rolls normally.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'hard-to-kill',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Harder to Kill',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'hard-to-kill',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'harder-to-kill',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Healer',
	},
	 description: {
		 'en-US': 'A hero with this Edge adds +2 to all Healing rolls (including natural healing rolls for his own wounds), whether natural or magical in nature. Up to five companions traveling with a Healer add the bonus to their natural healing rolls as well',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'healer',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Holy/Unholy Warrior',
	},
	 description: {
		 'en-US': 'Acolytes, clerics, paladins, holy slayers, and other avatars of the gods are frequently tasked with battling the forces of evil in the mortal world. This Edge gives them a slight advantage against such foes.,As an action, a priest or other holy person may call upon his chosen deity to repulse supernaturally evil creatures, such as the undead, demons, and the like. It also works on evil characters with the Arcane Background (Miracles) Edge.,Repulsing evil costs 1 Power Point and has a range of the character\'s Spirit. Targeted creatures within that range must make a Spirit roll. Failure means the creature is Shaken; a 1 means it is destroyed. Wild Cards suffer an automatic Wound instead.,A character may also be an Unholy Warrior working for the forces of evil. In this case, he repulses good creatures, such as angels, paladins, or good characters with Arcane Background (Miracles).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'holy/unholy-warrior',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improvisational Fighter',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improvisational-fighter',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Investigator',
	},
	 description: {
		 'en-US': 'Investigators have spent a great deal of time researching ancient legends, working the streets, or deducing devilish mysteries. Some of these heroes are actual Private Investigators for hire while others may be sleuthing mages in a fantasy world or perhaps inquisitive college professors stumbling upon Things Man Was Not Meant to Know in the dark of night. Investigators add +2 to Investigation and Streetwise rolls, as well as Notice rolls made to search through evidence.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'investigator',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Jack of All Trades',
	},
	 description: {
		 'en-US': 'Through advanced schooling, book-learning, computer-enhanced skill programs, or just amazing intuitive perception, your hero has a talent for picking up skills on the fly. There is little he can\'t figure out given a little time and a dash of luck.,Any time he makes an unskilled roll for a Smarts- based skill, he may do so at d4 instead of the usual d4-2.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'jack-of-all-trades',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 10
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Killer Instinct',
	},
	 description: {
		 'en-US': 'This hero hates losing. If he ties on an opposed roll of any sort, he wins. In addition, if his skill die on an opposed skill roll is a 1, he can reroll it (but must keep the second result, even if it\'s another 1).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'killer-instinct',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Level Headed',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Fighters who can keep their cool when everyone else is running for cover are deadly customers in combat.,A hero with this Edge draws an additional Action Card in combat and acts on the best of the draw.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'level-headed',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Level Headed',
	},
	 description: {
		 'en-US': 'As above but the hero draws 3 cards.',
	},
	 required_edge: 'level-headed',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-level-headed',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Linguist',
	},
	 description: {
		 'en-US': 'The character has an ear for languages and a rare talent for recognizing similarities between them. A character with this Edge starts with a number of languages equal to his Smarts die, and can make a Smarts roll at -2 to make herself understood in any language or dialect she has heard spoken for at least a week.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'linguist',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			attributes: {
				smarts: 2
			}
		}
},
{
	 name: {
		 'en-US': 'Liquid Courage',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'liquid-courage',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.vigor.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Luck',
	},
	 description: {
		 'en-US': 'The adventurer seems to be blessed by fate, karma, the gods, or whatever external forces he believes in (or believe in him!) He draws one extra Benny at the beginning of each game session, allowing him to succeed at important tasks more often than most, and survive incredible dangers.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'bad-luck',
	 tag: 'luck',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Great Luck',
	},
	 description: {
		 'en-US': 'The player draws two extra Bennies instead of one at the start of each session.',
	},
	 required_edge: 'luck',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'bad-luck',
	 tag: 'great-luck',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Scavenger',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'luck',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'scavenger',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Marksman',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The hero excels at taking controlled, measured shots. If he does not move in a turn, he may fire as if he took the Aim maneuver. Marksman may never be used with a Rate of Fire greater than 1.,Marksman works with both Shooting and Throwing.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'marksman',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Martial Artist',
	},
	 description: {
		 'en-US': 'This character is highly trained in hand-to-hand fighting. He is never considered unarmed in combat and so is never subject to the Unarmed Defender rule (page 87). With a successful unarmed attack, he adds +d4 to his Strength roll (as if he were using a small weapon).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'martial-artist',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Improved Martial Artist',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character now adds +d6 to his bare- handed damage.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'martial-artist',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-martial-artist',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Martial Arts Master',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The warrior is deadly with his hands. He adds +2 to his bare-handed damage every time he takes this Edge, up to a maximum of five times for a total damage bonus of +10.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'improved-martial-artist',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'martial-arts-master',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 2,

},
{
	 name: {
		 'en-US': 'McGyver',
	},
	 description: {
		 'en-US': 'This character can improvise something when the need for a tool arises. He suffers no negative penalties on Trait rolls for lack of equipment in most situations.,In addition, given a few simple tools, props, or devices, he can generally rig devices to help escape from death-traps, weapons to match some bizarre need, or otherwise create something that\'s needed when such a thing isn\'t actually present. The extent of this is completely up to the Game Master, but creativity should be rewarded, particularly in dire situations where few other answers are possible.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mcgyver',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Mentalist',
	},
	 description: {
		 'en-US': 'Mentalists are masters of mind control and psionics. Some are pulp heroes, others are trained in secret government academies to root out traitors. Their frequent toying with human minds gives them a +2 on any opposed Psionics roll, whether they are using their powers against a foe or are trying to defend against a rival Mentalist.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mentalist',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Mighty Blow',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character doubles his total damage when making a successful Fighting attack this round.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mighty-blow',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( charObject) {
fightingSkill = charObject.getSkill("SKILL_FIGHTING");
if( charObject.displayAttributes.agility.value >= 10 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Mr. Fix It',
	},
	 description: {
		 'en-US': 'The inventor adds +2 to Repair rolls. With a raise, he halves the time normally required to fix something. This means that if a particular Repair job already states that a raise repairs it in half the time, a Mr. Fix It could finish the job in one-quarter the time with a raise.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mr.-fix-it',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 10
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Nerves of Steel',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Your hero has learned to fight on through the most intense pain. He may ignore 1 point of wound penalties.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'nerves-of-steel',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.vigor.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Nerves of Steel',
	},
	 description: {
		 'en-US': 'The hero ignores 2 points of wound penalties.',
	},
	 required_edge: 'nerves-of-steel',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-nerves-of-steel',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'New Power',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'An arcane character may learn a new power by choosing this Edge (which may be taken multiple times). He may choose from any powers normally available to his particular Arcane Background.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'new-power',
	 racial: 0,
	 reselectable: 1,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			charObject.powers_available++;
		}
},
{
	 name: {
		 'en-US': 'No Mercy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character may spend a Benny to reroll any one damage roll, including those made for area effect attacks.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'no-mercy',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Noble',
	},
	 description: {
		 'en-US': 'Those born of noble blood have many perks in life, but often have just as many responsibilities. Nobles have high status in their societies, are entitled to special treatment from their foes, gain +2 Charisma, and also have the Rich Edge. This gives the hero several Edges for the price of one, but the responsibilities more than offset the additional perks. Nobles often have troops under their control, as well as land, a family home, and other assets. All of this must be determined by the GM, and balanced by the grave responsibilities the character faces. As an example, a character in a fantasy campaign might have a company of swordsmen, a small keep, and even a magical sword he inherited from his father. But he also has an entire region to manage, criminals to judge, justice to mete out, and a jealous neighbor who covets his lands and constantly plots against him at court.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'noble',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Power Points',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Wizards, weird scientists, and other arcane types always want more power. This Edge grants them an additional 5 Power Points.,Power Points may be selected more than once, but only once per Rank.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'power-points',
	 racial: 0,
	 reselectable: 1,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
	charObject.powerPointsAvailable += 5;
}
},
{
	 name: {
		 'en-US': 'Power Surge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This Edge is for those characters with Arcane Backgrounds. When dealt a Joker, the character recovers 2d6 Power Points. He may not exceed his usual limit.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'power-surge',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Professional',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character is an expert at a particular skill or attribute (his choice). That Trait becomes d12+1. This Edge may be selected more than once, but it may never be applied to the same skill or attribute twice.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'professional',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Expert',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'As above, but the Trait increases to d12+2.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'professional',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'expert',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Master',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'expert',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'master',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 2,

},
{
	 name: {
		 'en-US': 'Quick Draw',
	},
	 description: {
		 'en-US': 'This Edge allows a hero to draw a weapon as a free action (and thus ignore the usual -2 multi-action penalty if he chooses to fire as well). If the character must make an Agility roll to draw a weapon (see page 74), he adds +2 to the roll.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'quick-draw',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Quick',
	},
	 description: {
		 'en-US': 'Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt a 5 or lower in combat, you may discard and draw again until you get a card higher than 5. Characters with both the Level Headed and Quick Edges draw their additional card and take the best as usual. If that card is a Five or less, the Quick Edge may be used to draw a replacement until it\'s Six or higher.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'quick',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Rapid Recharge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'This Edge allows an arcane character to regain 1 Power Point every 30 minutes.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rapid-recharge',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 6
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Rapid Recharge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'The character regains 1 Power Point every 15 minutes.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'rapid-recharge',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-rapid-recharge',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Rich',
	},
	 description: {
		 'en-US': 'Whether the individual was born with a silver spoon in his mouth or earned it through hard work, he\'s got more money than most. Rich heroes start with three times the normal starting funds for the setting. If a regular income is appropriate for this setting, the hero receives the modern day equivalent of a $150,000 annual salary.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rich',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {

			charObject.current_funds = (charObject.current_funds / 1) * 3;
		}
},
{
	 name: {
		 'en-US': 'Rock and Roll',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Some veteran shooters learn to compensate for the recoil of fully automatic weapons. If a character with this Edge does not move, he may ignore the recoil penalty for firing a weapon on full automatic.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rock-and-roll',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Scholar',
	},
	 description: {
		 'en-US': 'Learned professors, devoted students, and amateur enthusiasts spend months of their lives studying particular subjects. They become experts in these fields, and rarely fail to answer questions in their particular area of expertise.,Pick any two Knowledge skills the Scholar has a d8 or better in. Add +2 to your total whenever these skills are used. Those who study military history have a natural edge when commanding troops in Mass Battles (see page 106)-a +2 to a Knowledge (Battle) roll can mean the difference between a rousing victory and a crushing defeat.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'scholar',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Sidekick',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sidekick',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Soul Drain',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'soul-drain',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Steady Hands',
	},
	 description: {
		 'en-US': 'Your hero ignores the "unstable platform" penalty for firing from the backs of animals or while riding in moving vehicles. In addition, when performing actions while Running (see page 74), his penalty is -1 instead of -2.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'steady-hands',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Strong Willed',
	},
	 description: {
		 'en-US': 'Characters with strong willpower use their voice, steely stares, or quick wits to unnerve their opponents. Strong Willed adds +2 to a character\'s Intimidation and Taunt rolls, as well as his Spirit and Smarts rolls when resisting Test of Wills attacks.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'strong-willed',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Sweep',
	},
	 description: {
		 'en-US': 'Sweep allows a character to make a single Fighting attack and apply it against all currently adjacent targets at a -2 penalty (friends and foes alike-be careful). Resolve each damage roll separately. The attack is applied immediately when rolled and only affects targets adjacent at that time.,A character may not use Sweep in the same round she uses Frenzy, nor may she Sweep more than once per round, or with a second weapon held in another hand. In effect, the hero may only perform Sweep once per action unless she somehow gets two entire actions (perhaps under the effects of a spell or power, for example).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sweep',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Sweep',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'sweep',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-sweep',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Thief',
	},
	 description: {
		 'en-US': 'Thieves specialize in deceit, treachery, and acrobatics. They can be invaluable where traps must be detected, walls must be climbed, and locks must be picked.,Thieves add +2 to Climbing, Lockpick, Stealth, as well as Notice or Repair rolls that relate to traps and similar devices. The bonus to Stealth does not apply when the character is in a wilderness environment-only in urban areas.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'thief',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Tough as Nails',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'Your hero is a grizzled veteran. Increase his Toughness by +1.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'tough-as-nails',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			charObject.derived.toughness += 1;
		}
},
{
	 name: {
		 'en-US': 'Improved Tough as Nails',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'tough-as-nails',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-tough-as-nails',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
			charObject.derived.toughness += 1;
		}
},
{
	 name: {
		 'en-US': 'Trademark Weapon',
	},
	 description: {
		 'en-US': 'The hero knows one unique weapon (Excalibur, Old Betsy, Sting) like the back of his hand. When using that weapon, he adds +1 to his Fighting, Shooting, or Throwing rolls. A hero can take this Edge multiple times, applying it to a different weapon each time. If a Trademark Weapon is lost, the hero can replace it, but the benefit of the Edge doesn\'t kick in for two game weeks.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'trademark-weapon',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Improved Trademark Weapon',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': 'As above but the bonus when using the weapon increases to +2.',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'trademark-weapon',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-trademark-weapon',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
		}
},
{
	 name: {
		 'en-US': 'Two-Fisted',
	},
	 description: {
		 'en-US': 'A Two-Fisted hero isn\'t ambidextrous-he\'s simply learned to fight with two weapons (or both fists) at once. When attacking with a weapon in each hand, he rolls each attack separately but ignores the multi-action penalty (see page 75).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'two-fisted',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
		},
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.agility.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Weapon Master',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'weapon-master',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function ( charObject ) {
fightingSkill = charObject.getSkill("SKILL_FIGHTING");
if( fightingSkill >= 12)
       return true;
return false;
},
charEffects: function ( charObject ) {
	charObject.derived.parry += 1;
}
},
{
	 name: {
		 'en-US': 'Improved Weapon Master',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 description: {
		 'en-US': '',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'weapon-master',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-weapon-master',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,
charEffects: function ( charObject ) {
			charObject.derived.parry += 1;
		}
},
{
	 name: {
		 'en-US': 'Wizard',
	},
	 description: {
		 'en-US': 'Wizards range from young apprentices to frighteningly powerful supreme sorcerers. They are often physically weak, however, and rarely have the divine powers or healing abilities of priestly spellcasters. What they lack in spiritual favor, however, they more than make up for in utility and eldritch might.,Wizards tend to learn their craft in formalized institutions or under the tutelage of experienced masters. Each raise a Wizard gets on his Spellcasting roll reduces the cost of the spell by 1 Power Point. The Wizard must have the points available to cast the spell in the first place before rolling.',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'wizard',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.smarts.value >= 8
	) {
		return true;
	}
		return false;
	}
},
{
	 name: {
		 'en-US': 'Woodsman',
	},
	 description: {
		 'en-US': 'Woodsmen are rangers, scouts, and hunters who are more at home in the wilderness than in urban areas. They are skilled trackers and scouts, and know how to live off the land for months at a time. Woodsmen gain +2 to Tracking, Survival, and Stealth rolls made in the wilderness (not towns, ruins, or underground).',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'woodsman',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( characterObject) {
	if(
		characterObject.displayAttributes.spirit.value >= 6
	) {
		return true;
	}
		return false;
	}
}
);
