/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

app_version = "REPLACE";

function chargenPDF( characterObject) {

	this.currentCharacter = characterObject;
	app_version = characterObject.appVersion;
}


chargenPDF.prototype.createBasicLandscapePDF = function () {
	this.currentDoc = new jsPDF("l");

	// center line - temporary?
	this.currentDoc.lines([[0,0],[0,195]], 150, 5);

	this.currentDoc.setFontSize(20);
	this.currentDoc.setFontStyle("italic");
	this.currentDoc.setFontStyle("bold");

	this.currentDoc.text(20, 15, "Savage Worlds Character Sheet");
	this.currentDoc.setFontSize(12);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 30, "Character Name: " + this.currentCharacter.name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[105,0]], 40, 31);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 40, "Player Name:");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[110,0]], 35, 41);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 45, "Race: " + this.currentCharacter.race.local_name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[75,0]], 17, 46);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(98, 45, "Gender: " + this.currentCharacter.gender.label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[30,0]], 115, 46);

	this.createAttributesAndSkillsTable( [6,30,70,92,122], 5,50,140,80, 5, 9 );
	this.createDerivedStatsTable( 65,90,45,40,11 );
	this.createDamageTrackTable( 110,90,35,40, 8, 10, 6 );
	this.createEdgesAdvancementTrack( 235,5,55, 9 );
	this.createPowersTable("Powers", 155, 5, 75,40, 6);
	this.createEquipmentTable("Equipment", 155, 50, 75, 60);
	this.createWeaponTable( "Weapons", [10, 45,60,80,90,115,125], 5, 132, 6  );
	this.createArmorTable("Armor", 5, 172, 70, 28);
	this.createHindrancesTable("Hindrances", 80, 172, 65, 28, 9);

	// Footer
	this.currentDoc.setFontSize(6);
	this.currentDoc.lines([[0,0],[135,0]], 155, 189);
	this.currentDoc.text(155, 192, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	this.currentDoc.text(155, 194, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/");
	this.currentDoc.text(155, 196, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and");
	this.currentDoc.text(155, 198, "all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation");
	this.currentDoc.text(155, 200, "or warranty as to the quality, viability, or suitability for purpose of this product.");
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createBasicPortraitPDF = function () {
	this.currentDoc = new jsPDF();
	this.currentDoc.setFontSize(20);
	this.currentDoc.setFontStyle("italic");
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(50, 20, "Savage Worlds Character Sheet");

	this.currentDoc.setFontSize(12);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 30, "Character Name: " + this.currentCharacter.name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[125,0]], 40, 31);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 40, "Player Name:");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[130,0]], 35, 41);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(5, 45, "Race: " + this.currentCharacter.race.local_name );
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[95,0]], 17, 46);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(133, 45, "Gender: " + this.currentCharacter.gender.label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.lines([[0,0],[30,0]], 150, 46);

	this.createAttributesAndSkillsTable( [10,40,110,140,170], 5,50,200,80 );
	this.createDerivedStatsTable( 95,90,55,40 );
	this.createDamageTrackTable( 150,90,55,40 );
	this.createHindrancesTable("Hindrances", 5, 130,65,40);
	this.createPowersTable("Powers", 70,130,80,40);
	this.createWeaponTable( "Weapons", Array(10, 45, 60, 80, 90, 120, 130 ),  5, 170, 8  );
	this.createArmorTable("Armor",  5, 220, 65, 53);
	this.createEquipmentTable("Equipment",  70, 220, 80, 53);

	this.createEdgesAdvancementTrack( 150,130,55 );

	// Footer
	this.currentDoc.setFontSize(6);
	this.currentDoc.lines([[0,0],[200,0]], 5, 273);
	this.currentDoc.text(20, 275, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	this.currentDoc.text(20, 277, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/ and can be used offline");
	this.currentDoc.text(20, 279, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and all associated logos and trademarks");
	this.currentDoc.text(20, 281, "are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.");
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createDamageTrackTable = function(left, top, height, width, smallFontSize, spacing_between, incap_margin) {

	if(!smallFontSize)
		smallFontSize = 14;
	if(!spacing_between)
		spacing_between = 20;
	if(!incap_margin)
		incap_margin = 0;

	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left+5, top+5, "Wounds");
	this.currentDoc.text(left+spacing_between+ 10, top+5, "Fatigue");

	this.currentDoc.circle(left+10, top+11, 5);
	this.currentDoc.circle(left+10, top+22, 5);
	this.currentDoc.circle(left+10, top+33, 5);

	this.currentDoc.rect(left+spacing_between+ 12, top+7, 10, 10);
	this.currentDoc.rect(left+spacing_between+ 12, top+18, 10, 10);

	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.text(left+spacing_between+incap_margin, top+37, "Incapacitated");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(20);

	this.currentDoc.text(left+spacing_between+ 14, top+14, "-1");
	this.currentDoc.text(left+spacing_between+ 14, top+25, "-2");

	this.currentDoc.text(left+7, top+13, "-1");
	this.currentDoc.text(left+7, top+24, "-2");
	this.currentDoc.text(left+7, top+35, "-3");
	this.currentDoc.setFontSize(10);
}
chargenPDF.prototype.createDerivedStatsTable = function( left, top, height, width, smallFontSize ) {

	if(!smallFontSize)
		smallFontSize = 12;

	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left + 3, top+5, "Pace: " + this.currentCharacter.derived.pace);
	this.currentDoc.text(left + 3, top+10, "Parry: " + this.currentCharacter.derived.parry);
	this.currentDoc.text(left + 3, top+15, "Toughness: " + this.currentCharacter.derived.toughnessAndArmor);
	this.currentDoc.text(left + 3, top+20, "Charisma: " + this.currentCharacter.derived.charisma);

	this.currentDoc.text(left + 3, top+32, "Current Load");
	this.currentDoc.setFontStyle("normal");

	this.currentDoc.text(left + 3, top+36, this.currentCharacter.currentLoad + " (" + this.currentCharacter.loadModifier + ")");
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createEdgesAdvancementTrack = function( left, top, width, smallFontSize ) {

	if(!smallFontSize)
		smallFontSize = 10;

	this.currentDoc.rect(left,top,width,143);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 7, "Initial Edges");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);
	advLineLocation = top + 11;
	advLineHeight = 4;
	for( novice_slot = 0; novice_slot <= this.currentCharacter.selectedEdges.length; novice_slot++) {
		if(this.currentCharacter.selectedEdges[novice_slot])
			this.currentDoc.text(left + 2, advLineLocation + novice_slot * advLineHeight, this.currentCharacter.selectedEdges[novice_slot].local_name + " (" + this.currentCharacter.selectedEdges[novice_slot].bookObj.abbrev + " " + this.currentCharacter.selectedEdges[novice_slot].page + ")" );
		else
			this.currentDoc.text(left + 2, advLineLocation + novice_slot * advLineHeight, "");
	}

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 25, "Advancements");
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);

	advLineHeight = 4;
	advLineLocation = top + 30;

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(left + 2, advLineLocation, "Novice");
	this.currentDoc.setFontStyle("normal");
//	advLineLocation += advLineHeight;
	for( adv_slot = 1; adv_slot < 23; adv_slot++) {
		advLineLocation += advLineHeight;
		current_xp = adv_slot * 5;

		if(this.currentCharacter.selectedAdvancements[adv_slot])
			selectedAdvancement = this.currentCharacter.selectedAdvancements[adv_slot - 1];
		else
			selectedAdvancement = null;

		if( adv_slot % 4 == 0) {
			this.currentDoc.setFontStyle("bold");
			if(current_xp >= 100 ) {
				label = "Legendary";
			} else if(current_xp >= 80) {
				label = "Heroic";
			} else if(current_xp >= 60) {
				label = "Veteran";
			} else  {
				label = "Seasoned";
			}
			this.currentDoc.text(left + 2, advLineLocation, label);
			this.currentDoc.setFontStyle("normal");
			advLineLocation += advLineHeight
		}
		current_xp = current_xp.toString();
		if(current_xp.length == 1)
			current_xp = "  " + current_xp;
		if(current_xp.length == 2)
			current_xp = " " + current_xp;

		advancement_slot = 0;
		if( selectedAdvancement) {
			if(selectedAdvancement.tag == "attribute") {
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + uc_words(selectedAdvancement.option1.local_name) + "++");
			} else if(selectedAdvancement.tag == "skill") {
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": +Skill - " + selectedAdvancement.option1.local_name);
			} else if(selectedAdvancement.tag == "edge") {
				this.currentDoc.setFontStyle("bold");
				this.currentDoc.text(left + 2, advLineLocation, current_xp + ": +Edge - " + selectedAdvancement.option1.local_name);
				this.currentDoc.setFontStyle("normal");
			} else {
				if(selectedAdvancement.option2.local_name && selectedAdvancement.option1.local_name ) {
					this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option1 + "++, " + selectedAdvancement.option2.local_name  + "++");
				} else {
					if(selectedAdvancement.option2 ) {
						this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option2.local_name + "++");
					} else {
						this.currentDoc.text(left + 2, advLineLocation, current_xp + ": " + selectedAdvancement.option1.local_name + "++");
					}
				}
			}

		} else {
			this.currentDoc.text(left + 2, advLineLocation, current_xp + ":");
			this.currentDoc.lines([[0,0],[width-10,0]], left + 8, advLineLocation);
		}
	}
	this.currentDoc.setFontSize(10);
};

chargenPDF.prototype.createAttributesAndSkillsTable = function( skillcols, left, top, height, width, skill_line_height, smallFontSize  ) {

	if(!skill_line_height)
		skill_line_height = 5;
	if(!smallFontSize)
		smallFontSize = 10;

	// this.currentDoc.rect(5,50,200,80);
	this.currentDoc.rect(left, top, height, width);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(skillcols[0], top+5, "Agility: " + getDiceValue( this.currentCharacter.attributes.agility, this.useLang).local_label );
	this.currentDoc.text(skillcols[1], top+5, "Smarts: " + getDiceValue( this.currentCharacter.attributes.smarts, this.useLang).local_label );
	this.currentDoc.text(skillcols[2], top+5, "Spirit: " + getDiceValue( this.currentCharacter.attributes.spirit, this.useLang).local_label );
	this.currentDoc.text(skillcols[3], top+5, "Strength: " + getDiceValue( this.currentCharacter.attributes.strength, this.useLang).local_label );
	this.currentDoc.text(skillcols[4], top+5, "Vigor: " + getDiceValue( this.currentCharacter.attributes.vigor, this.useLang).local_label );

	// Agility Skills

	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.skillList.length; skill_counter++) {
		if(this.currentCharacter.skillList[skill_counter].attribute == "agility") {

			currentSkill = this.currentCharacter.skillList[skill_counter];
			console.log("currentSkill", currentSkill);
			console.log( currentSkill.local_name, currentSkill.id + currentSkill.boost);
			if( currentSkill.value > 0 )
				this.currentDoc.text(skillcols[0], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
			else
				this.currentDoc.text(skillcols[0], top+13+currentSkillCount * skill_line_height, this.currentCharacter.skillList[skill_counter].local_name + ": -");
			currentSkillCount++;
		}
	}

	// Smarts Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	if( this.currentCharacter.arcane_background_selected && this.currentCharacter.arcane_background_selected.skill) {

		currentSkill = this.currentCharacter.skillList[skill_counter];
		if( currentSkill )
			this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
		else
			this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, this.currentCharacter.skillList[skill_counter].local_name + ": -");
		currentSkillCount++;
	}

	for(skill_counter = 0; skill_counter < this.currentCharacter.skillList.length; skill_counter++) {
		if(this.currentCharacter.skillList[skill_counter].attribute == "smarts") {
			if(
				this.currentCharacter.skillList[skill_counter].showSkill
			) {

				if( this.currentCharacter.skillList[skill_counter].specialties && this.currentCharacter.skillList[skill_counter].specialties.length > 0) {
					currentSkill = this.currentCharacter.skillList[skill_counter];
					for( specialtyCounter = 0; specialtyCounter < currentSkill.specialties.length; specialtyCounter++) {
						currentSpecialtySkill = currentSkill.specialties[specialtyCounter];
						//this.currentDoc.text(skillcols[1], 63+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + getDiceValue( currentSkill.value + currentSkill.boost ) );
						//console.log("currentSpecialtySkill", currentSpecialtySkill);
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + " (" + currentSpecialtySkill.name + "): " + currentSpecialtySkill.displayValue );
						currentSkillCount++;
					}
				} else {
					currentSkill = this.currentCharacter.skillList[skill_counter];
					if( currentSkill > 0 ) {
						// this.currentDoc.text(skillcols[1], 63+currentSkillCount * skill_line_height, currentSkill.local_name[0] + currentSkill.local_name[1] +  currentSkill.local_name[2] + " (" + currentSkill.specify_text + "): " + getDiceValue( currentSkill.value + currentSkill.boost ) );
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
					} else {
						this.currentDoc.text(skillcols[1], top+13+currentSkillCount * skill_line_height, this.currentCharacter.skillList[skill_counter].local_name + ": -");
					}
					currentSkillCount++;
				}
			}

		}
	}

	// Spirit Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.skillList.length; skill_counter++) {
		if(
			this.currentCharacter.skillList[skill_counter].showSkill
		) {
			if(this.currentCharacter.skillList[skill_counter].attribute == "spirit") {
				currentSkill = this.currentCharacter.skillList[skill_counter];
				if( currentSkill > 0 )
					this.currentDoc.text(skillcols[2], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
				else
					this.currentDoc.text(skillcols[2], top+13+currentSkillCount * skill_line_height, this.currentCharacter.skillList[skill_counter].local_name + ": -");
				currentSkillCount++;
			}
		}
	}

	// Strength Skills
	this.currentDoc.setFontSize(smallFontSize);
	this.currentDoc.setFontStyle("normal");
	currentSkillCount = 0;
	for(skill_counter = 0; skill_counter < this.currentCharacter.skillList.length; skill_counter++) {
		if(this.currentCharacter.skillList[skill_counter].attribute == "strength") {
			currentSkill = this.currentCharacter.skillList[skill_counter];
			if( currentSkill > 0 )
				this.currentDoc.text(skillcols[3], top+13+currentSkillCount * skill_line_height, currentSkill.local_name + ": " + currentSkill.displayValue );
			else
				this.currentDoc.text(skillcols[3], top+13+currentSkillCount * skill_line_height, this.currentCharacter.skillList[skill_counter].local_name + ": -");
			currentSkillCount++;
		}
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createWeaponTable = function( label, cols, left, top, numlines  ) {

	if(!top)
		top = 170;

	width = cols[6] + 15;
	// Weapons
	this.currentDoc.rect(5,top,width,numlines * 4 + 15);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(10, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(10);

	this.currentDoc.setFontStyle("bold");
	this.currentDoc.text(cols[0], top + 10, "Name");
	this.currentDoc.text(cols[1], top + 10, "Weight");
	this.currentDoc.text(cols[2], top + 10, "Damage");
	this.currentDoc.text(cols[3], top + 10, "AP");
	this.currentDoc.text(cols[4], top + 10, "Range");
	this.currentDoc.text(cols[5], top + 10, "ROF");
	this.currentDoc.text(cols[6], top + 10, "Shots");
	this.currentDoc.setFontStyle("normal");

	currentWeapons = this.currentCharacter.selectedWeapons;
	for(w_counter = 0; w_counter < numlines; w_counter++) {

		if(currentWeapons[w_counter]) {
			if(currentWeapons[w_counter].name )
				this.currentDoc.text(cols[0], top + 15 + w_counter * 4, currentWeapons[w_counter].local_name.toString());

			if(currentWeapons[w_counter].weight )
				this.currentDoc.text(cols[1], top + 15 + w_counter * 4, currentWeapons[w_counter].weight.toString());

			if(currentWeapons[w_counter].damage )
				this.currentDoc.text(cols[2], top + 15 + w_counter * 4, currentWeapons[w_counter].displayDamage.toString());

			if(currentWeapons[w_counter].ap )
				this.currentDoc.text(cols[3], top + 15 + w_counter * 4, currentWeapons[w_counter].ap.toString());
			else
				this.currentDoc.text(cols[3], top + 15 + w_counter * 4, "-");

			if(currentWeapons[w_counter].range )
				this.currentDoc.text(cols[4], top + 15 + w_counter * 4, currentWeapons[w_counter].range.toString());

			if(currentWeapons[w_counter].rof )
				this.currentDoc.text(cols[5], top + 15 + w_counter * 4, currentWeapons[w_counter].rof.toString());

			if(currentWeapons[w_counter].shots ) {
				this.currentDoc.text(cols[6], top + 15 + w_counter * 4, currentWeapons[w_counter].shots.toString());
			} else {
				if(currentWeapons[w_counter].range )
					this.currentDoc.text(cols[6], top + 15 + w_counter * 4, "1");
			}

		}

		this.currentDoc.lines([[0,0],[cols[1]-cols[0] - 1,0]], cols[0], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[cols[2]-cols[1] - 1,0]], cols[1], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[cols[3]-cols[2] - 1,0]], cols[2], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[cols[4]-cols[3] - 1,0]], cols[3], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[cols[5]-cols[4] - 1,0]], cols[4], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[cols[6]-cols[5] - 1,0]], cols[5], top + 16 + w_counter * 4);
		this.currentDoc.lines([[0,0],[width-cols[5] - 11,0]], cols[6], top + 16 + w_counter * 4);
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createEquipmentTable = function(label, left, top, width, height) {

	// Equipment

	this.currentDoc.rect(left, top, width, height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(10);

	current_equipment = this.currentCharacter.selectedMundaneGear;
	for(e_counter = 0; e_counter < 9; e_counter++) {
		if(current_equipment[e_counter]) {

			equipment_line = "";
			if(current_equipment[e_counter].name )
				equipment_line += current_equipment[e_counter].local_name
			if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
				equipment_line += " x" + current_equipment[e_counter].count;
			if(current_equipment[e_counter].weight ) {
				equipment_line += " - " + current_equipment[e_counter].weight + "lbs";
				if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
					equipment_line += " each";
			}

			this.currentDoc.text(left + 5, top + 10 + e_counter * 4, equipment_line);

		}
	}

	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createHindrancesTable = function(label, left, top, width, height, smallFontSize) {
	if(!smallFontSize)
		smallFontSize = 10;
	this.currentDoc.rect(left,top,width,height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(smallFontSize);
	for(hind_counter = 0; hind_counter < this.currentCharacter.selectedHindrances.length; hind_counter++) {
		majorMinor = "";
		if( this.currentCharacter.selectedHindrances[hind_counter].severity == "major")
			majorMinor = "major, ";
		if( this.currentCharacter.selectedHindrances[hind_counter].severity == "minor")
			majorMinor = "minor, ";
		if(this.currentCharacter.selectedHindrances[hind_counter].specify_text && this.currentCharacter.selectedHindrances[hind_counter].specifyField != "")
			this.currentDoc.text(left + 5, top + 10 + hind_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.selectedHindrances[hind_counter].local_name + ": " + this.currentCharacter.selectedHindrances[hind_counter].specifyField + " (" + majorMinor + this.currentCharacter.selectedHindrances[hind_counter].bookObj.abbrev + " " + this.currentCharacter.selectedHindrances[hind_counter].page + ")" );
		else
			this.currentDoc.text(left + 5, top + 10 + hind_counter * Math.floor(smallFontSize / 2) -1 , this.currentCharacter.selectedHindrances[hind_counter].local_name + " (" + majorMinor + this.currentCharacter.selectedHindrances[hind_counter].bookObj.abbrev + " " + this.currentCharacter.selectedHindrances[hind_counter].page + ")" );
	}
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createPowersTable = function(label, left, top, width, height, smallFontSize) {

	//this.currentDoc.rect(left,top,width,height);
	if(!smallFontSize)
		smallFontSize = 7;

	if( this.currentCharacter.hasArcaneBackground ) {
		this.currentDoc.rect(left, top ,width, height);
		this.currentDoc.setFontStyle("bold");
		this.currentDoc.setFontSize(14);

		this.currentDoc.text(left + 5, top + 5, this.currentCharacter.selectedArcaneBackground.local_name + " - " + this.currentCharacter.powerPointsAvailable + " power points");
		this.currentDoc.setFontStyle("normal");
		this.currentDoc.setFontSize(10);
		current_location = top + 5;
		for(p_counter = 0; p_counter < this.currentCharacter.selectedPowers.length; p_counter++) {
			current_location += 5;
			if( this.currentCharacter.selectedPowers[p_counter].customName != "") {
				power_name = this.currentCharacter.selectedPowers[p_counter].customName + " (" + this.currentCharacter.selectedPowers[p_counter].local_name;
				if( this.currentCharacter.selectedPowers[p_counter].trapping.local_name != "" )
					power_name += ", " + this.currentCharacter.selectedPowers[p_counter].trapping.local_name  + ")";
				else
					power_name += ")";
				this.currentDoc.text(left+5, current_location , power_name );
			} else {
				if( this.currentCharacter.selectedPowers[p_counter].trapping != "" ) {
					this.currentDoc.text(left+5, current_location , this.currentCharacter.selectedPowers[p_counter].local_name + " (" + this.currentCharacter.selectedPowers[p_counter].trapping.local_name  + ")" );
				} else {
					this.currentDoc.text(left+5, current_location , this.currentCharacter.selectedPowers[p_counter].local_name );
				}
			}

			details_line = "";

			if(this.currentCharacter.selectedPowers[p_counter].cost) {
				details_line += "C:" + this.currentCharacter.selectedPowers[p_counter].cost + " | ";
			}
			if(this.currentCharacter.selectedPowers[p_counter].range) {
				details_line += "R:" + this.currentCharacter.selectedPowers[p_counter].range + " | ";
			}
			if(this.currentCharacter.selectedPowers[p_counter].damage) {
				details_line += "Dm:" + this.currentCharacter.selectedPowers[p_counter].damage + " | ";
			}
			if(this.currentCharacter.selectedPowers[p_counter].local_duration) {
				details_line += "Du:" + this.currentCharacter.selectedPowers[p_counter].local_duration + " | ";
			}
			if(this.currentCharacter.selectedPowers[p_counter].bookObj) {
				details_line += this.currentCharacter.selectedPowers[p_counter].bookObj.abbrev + " " + this.currentCharacter.selectedPowers[p_counter].page;
			}

			if(details_line != "") {
				current_location += 2;
				this.currentDoc.setFontSize(smallFontSize);
				this.currentDoc.text(left + 5, current_location , details_line );
				this.currentDoc.setFontSize(10);
			}
		}
	} else {
		this.currentDoc.rect(left, top ,width, height);

		this.currentDoc.setFontStyle("bold");
		this.currentDoc.setFontSize(14);
		this.currentDoc.text(left + 5, top + 5, "Powers");
		this.currentDoc.setFontStyle("normal");
		this.currentDoc.setFontSize(10);

		this.currentDoc.text(left + 5, 142, "No Arcane Background Selected");
	}
	this.currentDoc.setFontSize(10);
}

chargenPDF.prototype.createArmorTable = function(label, left, top, width, height) {
	// Armor
	this.currentDoc.rect(left, top ,width, height);
	this.currentDoc.setFontStyle("bold");
	this.currentDoc.setFontSize(14);
	this.currentDoc.text(left + 5, top + 5, label);
	this.currentDoc.setFontStyle("normal");
	this.currentDoc.setFontSize(9);


	currentArmor = this.currentCharacter.selectedArmor;
	a_counter_total = 0;
	for(a_counter = 0; a_counter < currentArmor.length; a_counter++) {
		if(currentArmor[a_counter]) {
			armor_line = "";
			if(currentArmor[a_counter].name )
				armor_line += currentArmor[a_counter].local_name;
			if(currentArmor[a_counter].armor )
				armor_line += " - armor " + currentArmor[a_counter].armor;
			if(currentArmor[a_counter].weight )
				armor_line += ", " + currentArmor[a_counter].weight + "lbs";

			this.currentDoc.text(left + 5, top + 10 + a_counter * 5, armor_line);
			if(currentArmor[a_counter].local_notes ) {
				this.currentDoc.setFontSize(6);
				this.currentDoc.text(left + 5, top + 10 + a_counter * 5 + 3, currentArmor[a_counter].local_notes);
				this.currentDoc.setFontSize(10);
			}
			a_counter_total++;
		}

	}

	currentShields = this.currentCharacter.selectedShields;
	for(b_counter = 0; b_counter < currentShields.length; b_counter++) {
		if(currentShields[b_counter]) {
			armor_line = "";
			if(currentShields[b_counter].name )
				armor_line += currentShields[b_counter].local_name;
			if(currentShields[b_counter].parry )
				armor_line += " - parry " + currentShields[b_counter].parry;
			if(currentShields[b_counter].parry )
				armor_line += " - armor vs ranged " + currentShields[b_counter].armor;
			if(currentShields[b_counter].weight )
				armor_line += ", " + currentShields[b_counter].weight + "lbs";

			this.currentDoc.text(left + 5, top + 10 + (a_counter_total + b_counter) * 5, armor_line);
			if( currentShields[b_counter].local_notes ) {
				this.currentDoc.setFontSize(6);
				this.currentDoc.text(left + 5, top + 10 + (a_counter_total + b_counter) * 5 + 3, currentShields[b_counter].local_notes);
				this.currentDoc.setFontSize(10);
			}
		}
	}

	this.currentDoc.setFontSize(10);
}


