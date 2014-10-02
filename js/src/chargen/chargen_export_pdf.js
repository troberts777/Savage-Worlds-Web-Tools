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

			if( chargen_skills[skill_counter].specify && chargen_skills[skill_counter].specify > 0) {
				skills_of = current_character.get_skills_of(chargen_skills[skill_counter].name);
				for(skills_of_count = 0; skills_of_count < skills_of.length; skills_of_count++) {
					current_skill = skills_of[skills_of_count];
					//current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name[0] + current_skill.name[1] +  current_skill.name[2] + " (" + current_skill.specify_text + "): " + attribute_labels[current_skill.total]);
				}
			} else {
				current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
				if( current_skill ) {
					// current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name[0] + current_skill.name[1] +  current_skill.name[2] + " (" + current_skill.specify_text + "): " + attribute_labels[current_skill.total]);
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, current_skill.name + ": " + attribute_labels[current_skill.total]);
				} else {
					current_doc.text(skillCol2, 63+current_skill_count * skillLineHeight, chargen_skills[skill_counter].name + ": -");
				}

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


	// Hindrances
	current_doc.rect(5,130,65,40);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(10, 137, "Hindrances");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	for(hind_counter = 0; hind_counter < current_character.selected_hindrances.length; hind_counter++) {
		if(current_character.selected_hindrances[hind_counter].specify_text && current_character.selected_hindrances[hind_counter].specify_text != "")
			current_doc.text(10, 142 + hind_counter * 5 , current_character.selected_hindrances[hind_counter].name + " (" + current_character.selected_hindrances[hind_counter].specify_text + ")" );
		else
			current_doc.text(10, 142 + hind_counter * 5 , current_character.selected_hindrances[hind_counter].name );
	}

	// Powers
	current_doc.rect(70,130,80,40);

	if( current_character.arcane_background_selected ) {
		current_doc.setFontStyle("bold");
		current_doc.setFontSize(14);
		current_doc.text(75, 137, current_character.arcane_background_selected.name + " - " + current_character.power_points_available + " power points");
		current_doc.setFontStyle("normal");
		current_doc.setFontSize(10);
		current_location = 137;
		for(p_counter = 0; p_counter < current_character.selected_powers.length; p_counter++) {
			current_location += 5;
			if( current_character.selected_powers[p_counter].description != "") {
				power_name = current_character.selected_powers[p_counter].description + " (" + current_character.selected_powers[p_counter].name;
				if( current_character.selected_powers[p_counter].trapping != "" )
					power_name += ", " + current_character.selected_powers[p_counter].trapping  + ")";
				else
					power_name += ")";
				current_doc.text(75, current_location , power_name );
			} else {
				if( current_character.selected_powers[p_counter].trapping != "" ) {
					current_doc.text(75, current_location , current_character.selected_powers[p_counter].name + " (" + current_character.selected_powers[p_counter].trapping  + ")" );
				} else {
					current_doc.text(75, current_location , current_character.selected_powers[p_counter].name );
				}
			}

			details_line = "";

			if(current_character.selected_powers[p_counter].cost) {
				details_line += "C:" + current_character.selected_powers[p_counter].cost + " | ";
			}
			if(current_character.selected_powers[p_counter].range) {
				details_line += "R:" + current_character.selected_powers[p_counter].range + " | ";
			}
			if(current_character.selected_powers[p_counter].damage) {
				details_line += "Dm:" + current_character.selected_powers[p_counter].damage + " | ";
			}
			if(current_character.selected_powers[p_counter].duration) {
				details_line += "Du:" + current_character.selected_powers[p_counter].duration + " | ";
			}
			if(current_character.selected_powers[p_counter].book) {
				details_line += current_character.selected_powers[p_counter].book.abbrev + " " + current_character.selected_powers[p_counter].page;
			}

			if(details_line != "") {
				current_location += 2;
				current_doc.setFontSize(7);
				current_doc.text(75, current_location , details_line );
				current_doc.setFontSize(10);
			}
		}
	} else {
		current_doc.setFontStyle("bold");
		current_doc.setFontSize(14);
		current_doc.text(75, 137, "Powers");
		current_doc.setFontStyle("normal");
		current_doc.setFontSize(10);

		current_doc.text(75, 142, "No Arcane Background Selected");
	}


	// Weapons
	current_doc.rect(5,170,145,50);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(10, 175, "Weapons");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	col1 = 10;
	col2 = 45;
	col3 = 60;
	col4 = 80;
	col5 = 90;
	col6 = 120;
	col7 = 130;


	current_doc.setFontStyle("bold");
	current_doc.text(col1, 180, "Name");
	current_doc.text(col2, 180, "Weight");
	current_doc.text(col3, 180, "Damage");
	current_doc.text(col4, 180, "AP");
	current_doc.text(col5, 180, "Range");
	current_doc.text(col6, 180, "ROF");
	current_doc.text(col7, 180, "Shots");
	current_doc.setFontStyle("normal");


	current_weapons = current_character.get_weapons();
	for(w_counter = 0; w_counter < 9; w_counter++) {
		// temp line...
		//current_doc.text(col1, 185 + w_counter * 4, "This is a weapon line so that we can see how this works.");
		if(current_weapons[w_counter]) {
			if(current_weapons[w_counter].name )
				current_doc.text(col1, 185 + w_counter * 4, current_weapons[w_counter].name);

			if(current_weapons[w_counter].weight )
				current_doc.text(col2, 185 + w_counter * 4, current_weapons[w_counter].weight.toString());

			if(current_weapons[w_counter].damage )
				current_doc.text(col3, 185 + w_counter * 4, current_weapons[w_counter].damage.toString());

			if(current_weapons[w_counter].ap )
				current_doc.text(col4, 185 + w_counter * 4, current_weapons[w_counter].ap.toString());
			else
				current_doc.text(col4, 185 + w_counter * 4, "-");

			if(current_weapons[w_counter].range )
				current_doc.text(col5, 185 + w_counter * 4, current_weapons[w_counter].range.toString());

			if(current_weapons[w_counter].rof )
				current_doc.text(col6, 185 + w_counter * 4, current_weapons[w_counter].rof.toString());

			if(current_weapons[w_counter].shots )
				current_doc.text(col7, 185 + w_counter * 4, current_weapons[w_counter].shots.toString());
		}

		current_doc.lines([[0,0],[col2-col1 - 1,0]], col1, 186 + w_counter * 4);
		current_doc.lines([[0,0],[col3-col2 - 1,0]], col2, 186 + w_counter * 4);
		current_doc.lines([[0,0],[col4-col3 - 1,0]], col3, 186 + w_counter * 4);
		current_doc.lines([[0,0],[col5-col4 - 1,0]], col4, 186 + w_counter * 4);
		current_doc.lines([[0,0],[col6-col5 - 1,0]], col5, 186 + w_counter * 4);
		current_doc.lines([[0,0],[col7-col6 - 1,0]], col6, 186 + w_counter * 4);
		current_doc.lines([[0,0],[135-col6 - 1,0]], col7, 186 + w_counter * 4);
	}

	// Armor
	current_doc.rect(5,220,65,53);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(10, 225, "Armor");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	current_armor = current_character.get_armor();
	for(a_counter = 0; a_counter < 9; a_counter++) {
		if(current_armor[a_counter]) {
			armor_line = "";
			if(current_armor[a_counter].name )
				armor_line += current_armor[a_counter].name;
			if(current_armor[a_counter].armor )
				armor_line += " - armor " + current_armor[a_counter].armor;
			if(current_armor[a_counter].weight )
				armor_line += ", " + current_armor[a_counter].weight + "lbs";

			current_doc.text(10, 230 + a_counter * 5, armor_line);
			if(current_armor[a_counter].notes ) {
				current_doc.setFontSize(6);
				if(typeof(current_armor[a_counter].notes) == "array")
					current_doc.text(10, 230 + a_counter * 5 + 4, current_armor[a_counter].notes[0]);
				else
					current_doc.text(10, 230 + a_counter * 5 + 3, current_armor[a_counter].notes);
				current_doc.setFontSize(10);
			}
		}
	}

	// Equipment
	current_doc.rect(70,220,80,53);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(75, 225, "Equipment");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	current_equipment = current_character.get_mundane();
	for(e_counter = 0; e_counter < 9; e_counter++) {
		if(current_equipment[e_counter]) {

			equipment_line = "";
			if(current_equipment[e_counter].name )
				equipment_line += current_equipment[e_counter].name
			if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
				equipment_line += " x" + current_equipment[e_counter].count;
			if(current_equipment[e_counter].weight ) {
				equipment_line += " - " + current_equipment[e_counter].weight + "lbs";
				if(current_equipment[e_counter].count && current_equipment[e_counter].count > 1 )
					equipment_line += " each";
			}

			current_doc.text(75, 230 + e_counter * 4, equipment_line);

		}
	}

	// Edges and Advancement Track
	current_doc.rect(150,130,55,143);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(155, 137, "Initial Edges");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	adv_line_loc = 141;
	adv_line_height = 4;
	for( novice_slot = 0; novice_slot < 3; novice_slot++) {
		if(current_character.selected_edges[novice_slot])
			current_doc.text(152, adv_line_loc + novice_slot * adv_line_height, current_character.selected_edges[novice_slot].name);
		else
			current_doc.text(152, adv_line_loc + novice_slot * adv_line_height, "");
	}

	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(155, 155, "Advancements");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);

	adv_line_height = 4;
	adv_line_loc = 160;

	current_doc.setFontStyle("bold");
	current_doc.text(152, adv_line_loc, "Novice");
	current_doc.setFontStyle("normal");
//	adv_line_loc += adv_line_height;
	for( adv_slot = 1; adv_slot < 23; adv_slot++) {
		adv_line_loc += adv_line_height;
		current_xp = adv_slot * 5;

		if(current_character.selected_advancements[adv_slot])
			selected_advancement = current_character.selected_advancements[adv_slot - 1];
		else
			selected_advancement = null;

		if( adv_slot % 4 == 0) {
			current_doc.setFontStyle("bold");
			if(current_xp >= 100 ) {
				label = "Legendary";
			} else if(current_xp >= 80) {
				label = "Heroic";
			} else if(current_xp >= 60) {
				label = "Veteran";
			} else  {
				label = "Seasoned";
			}
			current_doc.text(152, adv_line_loc, label);
			current_doc.setFontStyle("normal");
			adv_line_loc += adv_line_height
		}
		current_xp = current_xp.toString();
		if(current_xp.length == 1)
			current_xp = "  " + current_xp;
		if(current_xp.length == 2)
			current_xp = " " + current_xp;

		advancement_slot = 0;
		if( selected_advancement) {
			if(selected_advancement.short_name == "increase-attribute") {
				current_doc.text(152, adv_line_loc, current_xp + ": " + uc_words(selected_advancement.applies_to1) + "++");
			} else if(selected_advancement.short_name == "add-skill") {
				current_doc.text(152, adv_line_loc, current_xp + ": +Skill - " + selected_advancement.applies_to1);
			} else if(selected_advancement.short_name == "gain-edge") {
				current_doc.setFontStyle("bold");
				current_doc.text(152, adv_line_loc, current_xp + ": +Edge - " + selected_advancement.applies_to1);
				current_doc.setFontStyle("normal");
			} else {
				if(selected_advancement.applies_to2 && selected_advancement.applies_to1 ) {
					current_doc.text(152, adv_line_loc, current_xp + ": " + selected_advancement.applies_to1 + "++, " + selected_advancement.applies_to2  + "++");
				} else {
					if(selected_advancement.applies_to2 ) {
						current_doc.text(152, adv_line_loc, current_xp + ": " + selected_advancement.applies_to2 + "++");
					} else {
						current_doc.text(152, adv_line_loc, current_xp + ": " + selected_advancement.applies_to1 + "++");
					}
				}
			}

		} else {
			current_doc.text(152, adv_line_loc, current_xp + ":");
			current_doc.lines([[0,0],[45,0]], 159, adv_line_loc);
		}
	}

	// Footer
	current_doc.setFontSize(6);
	current_doc.lines([[0,0],[200,0]], 5, 273);
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