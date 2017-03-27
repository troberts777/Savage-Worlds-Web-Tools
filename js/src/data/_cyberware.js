/*

	Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

	This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
	Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
	Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

	The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

	DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
	*/

savageWorldsCyberware = Array(
{
	 name: {
		 'en-US': 'Adrenal Surge',
	},
	 description: {
		 'en-US': 'The character\'s adrenal gland has been surgically augmented. He receives +2 to recover from being Shaken. This stacks with the Combat Reflexes Edge.',
	},
	 tag: 'adrenal-surge',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Aquatic Package',
	},
	 description: {
		 'en-US': 'The recipient is fitted with gills and collapsible webbing is installed between his fingers and toes. He can breathe in any oxygen-filled liquid (most lakes, rivers, or oceans), and his underwater Pace is equal to his Swimming skill.',
	},
	 tag: 'aquatic-package',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Armor',
	},
	 description: {
		 'en-US': 'Subdermal plates or fibers have been placed beneath the characteru2019s skin, granting him +2 Armor all over. This stacks with normal Armor, but not Heavy Armor (use the higher value).',
	},
	 tag: 'armor',
	 book: 0,
getMax: function(selectedObject) { return "u" },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 3000;
},
getModEffect: function(selectedObject) {
    selectedObject.incrementArmor( 2 );
}
},
{
	 name: {
		 'en-US': 'Attribute Increase',
	},
	 description: {
		 'en-US': 'Each time this implant is chosen, an attribute may be increased a die step. Each step after d12 adds +1.',
	},
	 tag: 'attribute-increase',
	 book: 0,
getMax: function(selectedObject) { return "u" },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 3000;
},
getModEffect: function(selectedObject) {
    if( this.option1 )
        selectedObject.boostAttribute( this.option1 );
},
chooseAttribute: true
},
{
	 name: {
		 'en-US': 'Autodoc',
	},
	 description: {
		 'en-US': 'Resident nanobots heal the recipient when wounded. They automatically heal one wound per day and add +4 to rolls to resist Bleeding Out. They have a 50% chance per day of healing any disease or poison once it gets into the blood stream (assuming the character is still alive).',
	},
	 tag: 'autodoc',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 10000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Combat Specialty',
	},
	 description: {
		 'en-US': 'he character may take a Combat Edge, ignoring all requirements except the requirement of other Edges. The Edge benefits do not stack with the same Edge if the character has it naturally as well as through his cyberware.',
	},
	 tag: 'combat-specialty',
	 book: 0,
getMax: function(selectedObject) { return "u" },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
	if( this.chosenEdge ) {
		selectedEdge =  selectedObject.getEdge( this.chosenEdge );
		if( selectedEdge )
			selectedRank = selectedEdge.rank;
		else
			selectedRank = 0;
	} else {
		selectedRank = 0;
	}
    return 5000 * ( selectedRank + 1);
},
getModEffect: function(selectedObject) {
    if( this.option1 && this.option2  )
        selectedObject.addCyberEdge( this.option1, this.option2 );
},
perRank: true,
maxRank: 3,
selectedRank: 1,
chooseCombatEdge: true,
chosenEdge: ""
},
{
	 name: {
		 'en-US': 'Communicator',
	},
	 description: {
		 'en-US': 'A small radio has been built into the character&rsquo;s skull. It has a range of five miles and can communicate with standard radio equipment.',
	},
	 tag: 'communicator',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 1000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Cyberjack',
	},
	 description: {
		 'en-US': 'Real hackers don&rsquo;t use keyboards&mdash;they tap directly into the system via a datajack in their head and &ldquo;run the matrix.&rdquo; This adds +4 to all Knowledge rolls dealing with electronics. If the character fails such a roll anyway, the intense feedback causes a level of Fatigue that fades in one hour and can cause Incapacitation but not death. If the system was particularly powerful or well-protected, failure (including during a failed Dramatic Task) causes 3d6 damage (or more for very high-end corporate or military computers). Armor offers no protection from this damage.',
	},
	 tag: 'cyberjack',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 3000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Face Changer',
	},
	 description: {
		 'en-US': 'The muscles, bones, and vocal cords in the characteru2019s face and throat have been replaced with a morphable, synthetic substance, allowing her to alter her facial features with a thought. Each change takes five minutes and requires a Smarts roll. The character may raise or lower her Charisma by 1 point per success and raise. The implant may be used to duplicate a specific personu2019s face and speech (assuming theyu2019re of the same relative size) if a picture (and voice sample for the vocal cords) exists.',
	},
	 tag: 'face-changer',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 3;
},
getCost: function(selectedObject) {
return 15000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Filters',
	},
	 description: {
		 'en-US': 'Filters in the ears, nose, throat, and lungs remove most airborne toxins and increase oxygen intake. The hero adds +4 to rolls made to resist the effects of airborne disease, poison, or deadly gases, and Thin or Dense Atmosphere.',
	},
	 tag: 'filters',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Leg Enhancement',
	},
	 description: {
		 'en-US': 'The character gains +2 Pace and increases his running die one step. He also increases his jumping distances by 1u201d. Each time this is taken after the first increases Pace by +2.',
	},
	 tag: 'leg-enhancement',
	 book: 0,
getMax: function(selectedObject) { return "u" },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
    selectedObject.incrementPace( 2 );
}
},
{
	 name: {
		 'en-US': 'Mule',
	},
	 description: {
		 'en-US': 'The character&rsquo;s skeleton has been strengthened, increasing his Load Limit to 8&times; his Strength. If he has the Brawny Edge as well, it increases to 10&times; Strength.',
	},
	 tag: 'mule',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 2;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
    if( selectedObject.hasEdge("brawny") )
        selectedObject.setEncumbranceMultiplier( 10 );
    else
        selectedObject.setEncumbranceMultiplier( 8 );
}
},
{
	 name: {
		 'en-US': 'Skill Chip',
	},
	 description: {
		 'en-US': 'Add or increase a skill a die type, but no more than +4 steps in any one skill. Skill chips may be swapped freely with no surgery. This is a free action, but takes an entire round before the new skill is active. Chips carried separately are the size of thumbnails and have no significant weight.',
	},
	 tag: 'skill-chip',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
    if( this.option3 )
        return 3000 * this.option3
    else
        return 3000;
},
getModEffect: function(selectedObject) {
    if( this.option1 && this.option2 )
        selectedObject.boostSkill( this.option1, this.option2, this.option3 );
},
selectSkill: true,
maxRanks: 4
},
{
	 name: {
		 'en-US': 'Trait Bonus',
	},
	 description: {
		 'en-US': 'This represents a host of various devices that add a flat +2 bonus to any skill or attribute (but only once per Trait). A targeting eye, for example, might add +2 to Shooting. This stacks with all other bonuses as usual.',
	},
	 tag: 'trait-bonus',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000;
},
getModEffect: function(selectedObject) {

}
},
{
	 name: {
		 'en-US': 'Vision Enhancement',
	},
	 description: {
		 'en-US': 'Cybernetic eyes grant magnification (50&times;), thermal, and low-light vision. This adds +2 to appropriate sight-based Notice rolls and eliminates illumination penalties if in the appropriate mode. Changing modes is a free action.',
	},
	 tag: 'vision-enhancement',
	 book: 0,
getMax: function(selectedObject) { return 1 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 10000;
},
getModEffect: function(selectedObject) {
}
},
{
	 name: {
		 'en-US': 'Weapon, Melee',
	},
	 description: {
		 'en-US': 'The character has retractable claws or blades attached directly to the bones in one forearm. The blades may be extended as a free and instant action, and cause Str+d6 damage. For additional cost, these may be given any of the Close Combat Weapon Modifications found on page 18.',
	},
	 tag: 'weapon-melee',
	 book: 0,
getMax: function(selectedObject) { return 2 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
    if( this.customName )
        selectedObject.hasNaturalWeapons( this.customName + " - Str+" + this.dieDamage + this.localNotes );
    else
        selectedObject.hasNaturalWeapons( "Cybernetic Melee Weapon - Str+" + this.dieDamage + this.localNotes );
},
dieDamage: "d6",
localNotes: "",
sciFiMeleeWeapon: true
},
{
	 name: {
		 'en-US': 'Weapon, Ranged',
	},
	 description: {
		 'en-US': 'A small, concealed slugthrower or laser pistol has been installed in the characteru2019s forearm. Reloading is achieved by removing a flap of fake skin and manually inserting individual rounds or batteries. Other small weapons may be installed with the GMu2019s approval.',
	},
	 tag: 'weapon-ranged',
	 book: 0,
getMax: function(selectedObject) { return 2 },
getStrainCost: function(selectedObject) {
return 1;
},
getCost: function(selectedObject) {
return 5000;
},
getModEffect: function(selectedObject) {
},
chooseRangedWeapon: true
}
);
