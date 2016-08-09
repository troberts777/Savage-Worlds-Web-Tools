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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-advanced-civilization',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elf-agile',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-agile',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-aquatic',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-claws',
	 page: 'p21',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.naturalWeapons = true;
}
},
{
	 name: {
		 'en-US': 'Extra Edge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'extra-edge',
	 page: '',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'angel-flight',
	 page: '',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Flight',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'avion-flight',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-folk-fortunate',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-orc-infravision',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dwarf-low-light-vision',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elf-low-light-vision',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rakasha-low-light-vision',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'saurian-natural-weapons',
	 page: 'p21',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.naturalWeapons = true;
}
},
{
	 name: {
		 'en-US': 'Programming',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'android-programming',
	 page: '',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'saurian-senses',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-folk-spirited',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'half-orc-strong',
	 page: 'p21',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'atlantean-tough',
	 page: 'p20',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dwarf-tough',
	 page: 'p20',
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
		 'en-US': 'Unnatural',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'android-unnatural',
	 page: '',
	 racial: 1,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Ace',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'ace',
	 page: 'p41',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'acrobat',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'alertness',
	 page: 'p35',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Ambidextrous',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'ambidextrous',
	 page: 'p35',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-background',
	 page: 'p35',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-resistance',
	 page: 'p35',
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
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'arcane-resistance',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'arcane-resistance-improved',
	 page: 'p35',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Assassin',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'assassin',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'ugly',
	 tag: 'attractive',
	 page: 'p35',
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
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'attractive',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'attractive-very',
	 page: 'p35',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'beast-bond',
	 page: 'p45',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Beast Master',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'beast-master',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'berserk',
	 page: 'p35',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'block',
	 page: 'p37',
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
	 required_edge: 'block',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-block',
	 page: 'p37',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'brave',
	 page: 'p35',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'brawler',
	 page: 'p37',
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
	 required_edge: 'brawler',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'bruiser',
	 page: 'p37',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'obese',
	 tag: 'brawny',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'champion',
	 page: 'p42',
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
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'charismatic',
	 page: 'p44',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
requires: function( charObject) {
	if(
		charObject.displayAttributes.spirit.value >= 8
	) {
		return true;
	}
		return false;
},
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.charisma = charObject.derived.charisma  + 2;
}
},
{
	 name: {
		 'en-US': 'Combat Reflexes',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'combat-reflexes',
	 page: 'p37',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'command',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'command-presence',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fervor',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'hold-the-line',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'inspire',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'leader-of-men',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'natural-leader',
	 page: 'p40',
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
	 required_edge: 'command',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'tactician',
	 page: 'p40',
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
		 'en-US': 'Fanaticism',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'command',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fanaticism',
	 page: 'p5',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 1,
requires: function( characterObject) {
persuasionSkill = characterObject.getSkill("SKILL_PERSUASION");
if( persuasionSkill.value >= 8)
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Common Bond',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'common-bond',
	 page: 'p44',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'connections',
	 page: 'p44',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'counterattack',
	 page: 'p37',
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
	 required_edge: 'counterattack',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-counterattack',
	 page: 'p37',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'danger-sense',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dead-shot',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dodge',
	 page: 'p37',
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
	 required_edge: 'dodge',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-dodge',
	 page: 'p37',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'elan',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'extraction',
	 page: 'p38',
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
	 required_edge: 'extraction',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-extraction',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fast-healer',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'first-strike',
	 page: 'p38',
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
	 required_edge: 'first-strike',
	 required_rank: 3,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-first-strike',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'fleet-footed',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'florentine',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'followers',
	 page: 'p46',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'frenzy',
	 page: 'p38',
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
	 required_edge: 'frenzy',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-frenzy',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'gadgeteer',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'giant-killer',
	 page: 'p38',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'hard-to-kill',
	 page: 'p38',
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
	 required_edge: 'hard-to-kill',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'harder-to-kill',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'healer',
	 page: 'p45',
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
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'holy-unholy-warrior',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improvisational-fighter',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'investigator',
	 page: 'p43',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'jack-of-all-trades',
	 page: 'p43',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'killer-instinct',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'level-headed',
	 page: 'p39',
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
	 required_edge: 'level-headed',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-level-headed',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'linguist',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'liquid-courage',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'bad-luck',
	 tag: 'luck',
	 page: 'p36',
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
	 required_edge: 'luck',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: 'bad-luck',
	 tag: 'great-luck',
	 page: 'p36',
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
	 required_edge: 'luck',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'scavenger',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'marksman',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'martial-artist',
	 page: 'p39',
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
	 required_edge: 'martial-artist',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-martial-artist',
	 page: 'p39',
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
	 required_edge: 'improved-martial-artist',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'martial-arts-master',
	 page: 'p46',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 2,

},
{
	 name: {
		 'en-US': 'McGyver',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mcgyver',
	 page: 'p43',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mentalist',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mighty-blow',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'mr.-fix-it',
	 page: 'p42',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'nerves-of-steel',
	 page: 'p39',
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
	 required_edge: 'nerves-of-steel',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-nerves-of-steel',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'new-power',
	 page: 'p41',
	 racial: 0,
	 reselectable: 1,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
			charObject.powers_available++;
		},
requires: function( charObject) {
if( charObject.usesSPCCreation == false) {
if( charObject.hasArcaneBackground)
return true;
else
return false;
} 
}
},
{
	 name: {
		 'en-US': 'No Mercy',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'no-mercy',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'noble',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'power-points',
	 page: 'p41',
	 racial: 0,
	 reselectable: 1,
	 book: 1,
	 child: 0,
charEffects: function ( charObject ) {
	charObject.powerPointsAvailable += 5;
	charObject.spcExtraPowerPoints += 5;
},
requires: function( charObject) {
if( charObject.usesSPCCreation == false) {
if( charObject.hasArcaneBackground)
return true;
else
return false;
} else {
if( charObject.SPCRisingStars == true  )
     return true;
else
    return false;
}
}
},
{
	 name: {
		 'en-US': 'Power Surge',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'power-surge',
	 page: 'p45',
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
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'professional',
	 page: 'p46',
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
	 required_edge: 'professional',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'expert',
	 page: 'p46',
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
	 required_edge: 'expert',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'master',
	 page: 'p46',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 2,

},
{
	 name: {
		 'en-US': 'Quick Draw',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'quick-draw',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'quick',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rapid-recharge',
	 page: 'p41',
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
	 required_edge: 'rapid-recharge',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-rapid-recharge',
	 page: 'p41',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Rich',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rich',
	 page: 'p36',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'rock-and-roll',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'scholar',
	 page: 'p43',
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
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sidekick',
	 page: 'p46',
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
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'soul-drain',
	 page: 'p41',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Steady Hands',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'steady-hands',
	 page: 'p39',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'strong-willed',
	 page: 'p44',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Sweep',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sweep',
	 page: 'p39',
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
	 required_edge: 'sweep',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-sweep',
	 page: 'p40',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'thief',
	 page: 'p44',
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
	 required_edge: '',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'tough-as-nails',
	 page: 'p46',
	 racial: 0,
	 reselectable: 0,
	 book: 1,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness = charObject.derived.toughness  + 1;
}
},
{
	 name: {
		 'en-US': 'Improved Tough as Nails',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'tough-as-nails',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-tough-as-nails',
	 page: 'p46',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'trademark-weapon',
	 page: 'p39',
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
	 required_edge: 'trademark-weapon',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-trademark-weapon',
	 page: 'p40',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'two-fisted',
	 page: 'p40',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'weapon-master',
	 page: 'p46',
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
	 required_edge: 'weapon-master',
	 required_rank: 4,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-weapon-master',
	 page: 'p46',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'wizard',
	 page: 'p44',
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
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'woodsman',
	 page: 'p44',
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
		 'en-US': 'Adaptable',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'adaptable',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
if( characterObject.race.id == 8 ||  characterObject.race.id == 1 ) {
return true;
}
return false;
}
},
{
	 name: {
		 'en-US': 'Adept',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'adept',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject)  {
fightingSkill = characterObject.getSkill("SKILL_FIGHTING");
faithSkill = characterObject.getSkill("SKILL_FAITH");

if( !characterObject.hasArcane( "miracles" ) ) 
     return false;
if( !fightingSkill )
return false;
if( !faithSkill )
return false;
if( fightingSkill.value < 3 )  // functional value of d8
     return false;
if( faithSkill.value < 3 )  // functional value of d8
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Artifact Hunter',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'artifact-hunter',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
noticeSkill =  characterObject.getSkill("SKILL_NOTICE");
if( !noticeSkill )
return false;
if( noticeSkill.value < 4 )
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Assassin',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'assassin',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
climbingSkill = characterObject.getSkill( "SKILL_CLIMBING");
fightingSkill = characterObject.getSkill( "SKILL_FIGHTING");
stealthSkill = characterObject.getSkill( "SKILL_STEALTH");
if( characterObject.displayAttributes.agility.value < 8 )
     return false;

if( !climbingSkill )
     return false;
if( climbingSkill.value < 2 )
     return false;
if( !fightingSkill )
     return false;
if( fightingSkill.value < 2 )
     return false;
if( !stealthSkill )
     return false;
if( stealthSkill.value < 3 )
     return false;

return true;
},
},
{
	 name: {
		 'en-US': 'Barbaric Blood',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'barbaric-blood',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
if( characterObject .race.id != 11 )
     return false;

if( !characterObject.hasEdge("berserk") ) 
     return false;

return true;
}
},
{
	 name: {
		 'en-US': 'Improved Barbaric Blood',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'barbaric-blood',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-barbaric-blood',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 1,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 8 )
    return true;
return false;
}
},
{
	 name: {
		 'en-US': 'Double Shot',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'double-shot',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
skillShooting = characterObject.getSkill("SKILL_SHOOTING");
if( characterObject.race.id != 9 && characterObject.race.id != 7)
     return false;
if( !skillShooting ) 
     return false;
if( skillShooting.value < 3 ) 
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Improved Double Shot',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'double-shot',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-double-shot',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Familiar',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'familiar',
	 page: 'p5',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
arcaneSkill = characterObject.getSkill("SKILL_KNOWLEDGE", "Arcana");

if( ! characterObject.hasArcane( "magic" ) ) 
     return false;
if( !arcaneSkill)
     return false;
if( arcaneSkill.value < 4 ) // functional value of d10
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Knight',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'knight',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
ridingSkill = characterObject.getSkill( "SKILL_RIDING");
fightingSkill = characterObject.getSkill( "SKILL_FIGHTING");

if( characterObject.displayAttributes.spirit.value < 2 )
     return false;
if( characterObject.displayAttributes.strength.value < 3 )
     return false;

if( characterObject.displayAttributes.vigor.value < 3 )
     return false;


if( !ridingSkill )
     return false;
if( ridingSkill.value < 3 )
     return false;
if( !fightingSkill )
     return false;
if( fightingSkill.value < 3 )
     return false;


return true;
},
},
{
	 name: {
		 'en-US': 'Natural Warrior',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'natural-warrior',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
fightingSkill = characterObject.getSkill("SKILL_FIGHTING");
if( !fightingSkill)
return false;

if( fightingSkill.value < 3)
return false;

if( this.naturalWeapons == false)
return false;

return true;
}
},
{
	 name: {
		 'en-US': 'Improved Natural Warrior',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'natural-warrior',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-natural-warrior',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Scamper',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'scamper',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {

if( characterObject.race.id != 10 )
     return false;
if( characterObject.displayAttributes.agility.value < 8 )
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Improved Scamper',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'scamper',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-scamper',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Sunder',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sunder',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
if( characterObject.race.id == 6 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Improved Sunder',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'sunder',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'improved-sunder',
	 page: 'p8',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Troubadour',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'troubadour',
	 page: 'p7',
	 racial: 0,
	 reselectable: 0,
	 book: 2,
	 child: 0,
requires: function( characterObject) {
faithSkill = characterObject.getSkill( "SKILL_FAITH");

if( !faithSkill )
     return false;
if( faithSkill.value < 3 )
     return false;

return true;
},
},
{
	 name: {
		 'en-US': 'Affect the Physical World',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'phantom-Affect-Physical-World',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Armor of the Lord',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'angel-armor-of-the-lord',
	 page: '',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
				charEffect: function( characterObject) {
					characterObject.derived.toughness += 4;
				}
},
{
	 name: {
		 'en-US': 'Bite',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'werewolf-bite',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Claws',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'vampire-claws',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Claws',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'werewolf-claws',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Divine Strength',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'angel-divine-strength',
	 page: '',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject) {
charObject.boostAttribute("strength",4);
}
},
{
	 name: {
		 'en-US': 'Ethereal',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'phantom-ethereal',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Faith',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'angel-faith',
	 page: 'faith-ange',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( characterObject) {
characterObject.addRacialSkill("SKILL_FAITH", 2);
}
},
{
	 name: {
		 'en-US': 'Fear -2',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'werewolf-fear',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Healing',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'angel-healing',
	 page: '',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Immunity',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'demon-immunity',
	 page: 'p9',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Infernal Stamina',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'demon-infernal-stamina',
	 page: 'p9',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Infravision',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'werewolf-infravision',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Invisible',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'phantom-invisible',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Invulnerability',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'werewolf-Invulnerability',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Parts',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'patchwork-man-parts',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Resistant to Normal Weapons',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'demon-resistant-to-normal-weapons',
	 page: 'p9',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Sense Vampire',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dhampyr-sense-vampire',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'Sire\'s Strength',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'dhampyr-sires-strength',
	 page: 'dhampyr-si',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject ) {
charObject.boostAttribute("strength");
}
},
{
	 name: {
		 'en-US': 'Strength of the Damned',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'vampire-strength-of-the-damned',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.boostAttribute("strength",2);
charObject.boostAttribute("vigor",2);
}
},
{
	 name: {
		 'en-US': 'Undead',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'patchwork-man-undead',
	 page: 'p10',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness = charObject.derived.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Undead',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'vampire-undead',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness = charObject.derived.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Undead',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'zombie-undead',
	 page: 'p11',
	 racial: 1,
	 reselectable: 0,
	 book: 3,
	 child: 0,
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.toughness = charObject.derived.toughness + 2;
}
},
{
	 name: {
		 'en-US': 'Exorcist',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'exorcist',
	 page: 'p5',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject)  {
faithSkill = characterObject.getSkill("SKILL_FAITH");

if( !characterObject.hasArcane( "miracles" ) ) 
     return false;
if( !faithSkill )
     return false;
if( characterObject.displayAttributes.spirit.value < 8 )
     return false;
if( faithSkill.value < 3 )  // functional value of d8
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Hardened',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'hardened',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 8 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Monster Hunter',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 1,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'monster-hunter',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 6 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Necromancer',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'necromancer',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject)  {
arcaneSkill = characterObject.getArcaneSkill();

if( !characterObject.hasArcane( "miracles" )  &&  !characterObject.hasArcane( "magic" )) 
     return false;
if( !arcaneSkill)
     return false;
if( characterObject.displayAttributes.spirit.value < 8 )
     return false;
if( arcaneSkill.value < 3 )  // functional value of d8
     return false;
return true;
},
charEffect: function( charObject ) {
// Affect Character Object Code here
//48 is the ID for the Zombie power
charObject.powerAlterations[48] = {"adjusted_rank": 0};
}

},
{
	 name: {
		 'en-US': 'Master Necromancer',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: 'necromancer',
	 required_rank: 2,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'master-necromancer',
	 page: '',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 1,

},
{
	 name: {
		 'en-US': 'Occultist',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'occultist',
	 page: 'p7',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject)  {
investigationSkill = characterObject.getSkill("SKILL_INVESTIGATION");
occultSkill = characterObject.getSkill("SKILL_KNOWLEDGE","Occult");

if( characterObject.displayAttributes.smarts.value < 8 )
     return false;
if( !investigationSkill)
     return false;
if( investigationSkill.value < 3 )  // functional value of d8
     return false;
if( !occultSkill)
     return false;
if( occultSkill.value < 3 )  // functional value of d8
     return false;
return true;
},

},
{
	 name: {
		 'en-US': 'One of the Chosen',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'one-of-the-chosen',
	 page: 'p7',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 8 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Relentless',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'relentless',
	 page: 'read FAQ',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 8 )
     return true;
return false;
},
},
{
	 name: {
		 'en-US': 'Sound Mind',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'sound-mind',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value >= 6 )
     return true;
return false;
},
charEffect: function( charObject ) {
// Affect Character Object Code here
charObject.derived.sanity = charObject.derived.sanity + 2;
}
},
{
	 name: {
		 'en-US': 'Talisman Craftsman',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'talisman-craftsman',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject)  {
arcaneSkill = characterObject.getArcaneSkill();
occultSkill = characterObject.getSkill("SKILL_KNOWLEDGE","Occult");

if( !characterObject.hasArcane( "miracles" )  &&  !characterObject.hasArcane( "magic" )) 
     return false;
if( !arcaneSkill)
     return false;
if( characterObject.displayAttributes.spirit.value < 8 )
     return false;
if( arcaneSkill.value < 3 )  // functional value of d8
     return false;
if( !occultSkill)
     return false;
if( occultSkill.value < 3 )  // functional value of d8
     return false;
return true;
},

},
{
	 name: {
		 'en-US': 'Tower of Will',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'tower-of-will',
	 page: 'p6',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,
requires: function( characterObject) {
if( characterObject.displayAttributes.spirit.value < 8 )
     return false;
if( characterObject.displayAttributes.vigor.value < 8 )
     return false;
return true;
},
},
{
	 name: {
		 'en-US': 'Visions',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'visions',
	 page: 'p7',
	 racial: 0,
	 reselectable: 0,
	 book: 3,
	 child: 0,

},
{
	 name: {
		 'en-US': 'The Best There Is',
		 'pt-BR': '',
		 'de-DE': '',
	},
	 required_edge: '',
	 required_rank: 0,
	 conflicts_edge: '',
	 conflicts_hindrance: '',
	 tag: 'the-best-there-is',
	 page: 'p7',
	 racial: 0,
	 reselectable: 0,
	 book: 5,
	 child: 0,

}
);
