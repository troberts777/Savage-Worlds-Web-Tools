/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

var current_doc = new jsPDF();

function create_basic_pdf() {
	doc = new jsPDF();
	current_doc.setFontSize(20);
	current_doc.setFontStyle("italic");
	current_doc.setFontStyle("bold");
	current_doc.text(50, 20, "Savage Worlds Character Sheet");

	current_doc.setFontSize(12);
	current_doc.setFontStyle("bold");
	current_doc.text(5, 30, "Character Name: " + current_character.name );
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[125,0]], 40, 31);

	current_doc.setFontStyle("bold");
	current_doc.text(5, 40, "Player Name:");
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[130,0]], 35, 41);

	current_doc.setFontStyle("bold");
	current_doc.text(5, 45, "Race: " + current_character.race.name );
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[95,0]], 17, 46);

	current_doc.setFontStyle("bold");
	current_doc.text(133, 45, "Gender: " + current_character.gender);
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[30,0]], 150, 46);

	skillCol1 = 10;
	skillCol2 = 40;
	skillCol3 = 110;
	skillCol4 = 140;
	skillCol5 = 170;
	skillLineHeight = 5;
	current_doc.rect(5,50,200,80);
	current_doc.setFontStyle("bold");
	current_doc.text(skillCol1, 55, "Agility: " + attribute_labels[current_character.attributes.agility]);
	current_doc.text(skillCol2, 55, "Smarts: " + attribute_labels[current_character.attributes.smarts]);
	current_doc.text(skillCol3, 55, "Spirit: " + attribute_labels[current_character.attributes.spirit]);
	current_doc.text(skillCol4, 55, "Strength: " + attribute_labels[current_character.attributes.strength]);
	current_doc.text(skillCol5, 55, "Vigor: " + attribute_labels[current_character.attributes.vigor]);

	// Agility Skills

	current_doc.setFontSize(11);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "agility") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillCol1, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillCol1, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}

	// Smarts Skills
	current_doc.setFontSize(10);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	if( current_character.arcane_background_selected && current_character.arcane_background_selected.skill) {

		current_skill = current_character.get_skill( current_character.arcane_background_selected.skill.name );
		if( current_skill )
			current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
		else
			current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");
		current_skill_count++;
	}
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "smarts") {

			if( !chargen_skills[skill_counter].specify && chargen_skills[skill_counter].specify > 0) {
				skills_of = current_character.get_skills_of(chargen_skills[skill_counter].name);
				for(skills_of_count = 0; skills_of_count < skills_of.length; skills_of_count++) {
					current_skill = skills_of[skills_of_count];
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
				}
			} else {
				current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
				if( current_skill )
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name[0] + current_skill.name[1] +  current_skill.name[2] + " (" + current_skill.specify_text + "): " + attribute_labels[current_skill.total]);
				else
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");

			}
			current_skill_count++;
		}
	}

	// Spirit Skills
	current_doc.setFontSize(10);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "spirit") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillCol3, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillCol3, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}

	// Strength Skills
	current_doc.setFontSize(10);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "strength") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillCol4, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillCol4, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}

	// Derived Attributes
	current_doc.rect(95,90,110,40);
	current_doc.setFontSize(14);
	current_doc.setFontStyle("bold");
	current_doc.text(98, 95, "Pace: " + current_character.derived.pace);
	current_doc.text(98, 100, "Parry: " + current_character.derived.parry);
	current_doc.text(98, 105, "Toughness: " + current_character.derived.toughness_formatted);
	current_doc.text(98, 110, "Charisma: " + current_character.derived.charisma);

	current_doc.text(98, 122, "Current Load");
	current_doc.setFontStyle("normal");

	current_doc.text(98, 127, current_character.derived.current_load);
	current_doc.setFontSize(10);

	// Damage/Fatigue Track
	current_doc.rect(150,90,55,40);
	current_doc.setFontStyle("bold");
	current_doc.text(155, 95, "Wounds");
	current_doc.text(180, 95, "Fatigue");


	current_doc.circle(160, 101, 5);
	current_doc.circle(160, 112, 5);
	current_doc.circle(160, 123, 5);

	current_doc.rect(182, 97, 10, 10);
	current_doc.rect(182, 108, 10, 10);

	current_doc.setFontSize(14);
	current_doc.text(170, 127, "Incapacitated");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(20);

	current_doc.text(184, 104, "-1");
	current_doc.text(184, 115, "-2");

	current_doc.text(157, 103, "-1");
	current_doc.text(157, 114, "-2");
	current_doc.text(157, 125, "-3");



	current_doc.setFontSize(10);

	// Footer
	current_doc.setFontSize(6);
	current_doc.lines([[0,0],[160,0]], 20, 273);
	current_doc.text(20, 275, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	current_doc.text(20, 277, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/ and can be used offline");
	current_doc.text(20, 279, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and all associated logos and trademarks");
	current_doc.text(20, 281, "are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.");
	current_doc.setFontSize(10);
}

function chargen_show_preview_pane(selector_name) {
	if (navigator.msSaveBlob) {
		string = "http://microsoft.com/thisdoesnotexists";
		console.error("Sorry, we cannot show live PDFs in MSIE")
	} else {
		var string = current_doc.output("bloburi");
	}
	$(selector_name).attr("src", string);
}

function chargen_download_pdf() {
	eval("try{" + $(".js-pdftest").val() + "} catch(e) { console.error(e.message,e.stack,e); }");

	if (navigator.msSaveBlob) {
		string = "http://microsoft.com/thisdoesnotexists";
		console.error("Sorry, we cannot show live PDFs in MSIE")
	} else {
		var string = current_doc.output("bloburi");
	}
	if(doc)
		current_doc.save("My Character.pdf");
}