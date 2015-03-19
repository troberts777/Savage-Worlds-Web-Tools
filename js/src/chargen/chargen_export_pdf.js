/*
	Savage Worlds Web Tools by Jeffrey Gordon is licensed under a
	Creative Commons Attribution 4.0 International License.
*/

var current_doc = new jsPDF();

function create_basic_landscape_pdf() {
	current_doc = new jsPDF("l");

	// center line - temporary?
	current_doc.lines([[0,0],[0,195]], 150, 5);

	current_doc.setFontSize(20);
	current_doc.setFontStyle("italic");
	current_doc.setFontStyle("bold");

	current_doc.text(20, 15, "Savage Worlds Character Sheet");
	current_doc.setFontSize(12);
	current_doc.setFontStyle("bold");
	current_doc.text(5, 30, "Character Name: " + current_character.name );
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[105,0]], 40, 31);

	current_doc.setFontStyle("bold");
	current_doc.text(5, 40, "Player Name:");
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[110,0]], 35, 41);

	current_doc.setFontStyle("bold");
	current_doc.text(5, 45, "Race: " + current_character.race.name );
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[75,0]], 17, 46);

	current_doc.setFontStyle("bold");
	current_doc.text(98, 45, "Gender: " + current_character.gender);
	current_doc.setFontStyle("normal");
	current_doc.lines([[0,0],[30,0]], 115, 46);

	create_attributes_and_skills_table( [6,30,70,92,122], 5,50,140,80, 5, 9 );
	create_derived_stats_table( 65,90,45,40,11 );
	create_damage_track_table( 110,90,35,40, 8, 10, 6 );
	create_edges_advancement_track( 235,5,55, 9 );
	create_powers_table("Powers", 155, 5, 75,40, 6);
	create_equipment_table("Equipment", 155, 50, 75, 60);
	create_weapon_table( "Weapons", [10, 45,60,80,90,115,125], 5, 132, 6  );
	create_armor_table("Armor", 5, 172, 70, 28);
	create_hindrances_table("Hindrances", 80, 172, 65, 28, 9);

	// Footer
	current_doc.setFontSize(6);
	current_doc.lines([[0,0],[135,0]], 155, 189);
	current_doc.text(155, 192, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	current_doc.text(155, 194, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/ and can be used offline");
	current_doc.text(155, 196, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and");
	current_doc.text(155, 198, "all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation");
	current_doc.text(155, 200, "or warranty as to the quality, viability, or suitability for purpose of this product.");
	current_doc.setFontSize(10);
}

function create_basic_portrait_pdf() {
	current_doc = new jsPDF();
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

	create_attributes_and_skills_table( [10,40,110,140,170], 5,50,200,80 );
	create_derived_stats_table( 95,90,55,40 );
	create_damage_track_table( 150,90,55,40 );
	create_hindrances_table("Hindrances", 5, 130,65,40);
	create_powers_table("Powers", 70,130,80,40);
	create_weapon_table( "Weapons", Array(10, 45, 60, 80, 90, 120, 130 ),  5, 170, 8  );
	create_armor_table("Armor",  5, 220, 65, 53);
	create_equipment_table("Equipment",  70, 220, 80, 53);

	create_edges_advancement_track( 150,130,55 );

	// Footer
	current_doc.setFontSize(6);
	current_doc.lines([[0,0],[200,0]], 5, 273);
	current_doc.text(20, 275, "Created and Printed with Savage Worlds Web Tools by Jeffrey Gordon - version " + app_version);
	current_doc.text(20, 277, "The web tools are http://jdgwf.github.io/savage-worlds-web-tools/ and can be used offline");
	current_doc.text(20, 279, "This tool references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and all associated logos and trademarks");
	current_doc.text(20, 281, "are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.");
	current_doc.setFontSize(10);
}
function create_damage_track_table(left, top, height, width, small_font_size, spacing_between, incap_margin) {

	if(!small_font_size)
		small_font_size = 14;
	if(!spacing_between)
		spacing_between = 20;
	if(!incap_margin)
		incap_margin = 0;

	current_doc.rect(left, top, height, width);
	current_doc.setFontStyle("bold");
	current_doc.text(left+5, top+5, "Wounds");
	current_doc.text(left+spacing_between+ 10, top+5, "Fatigue");

	current_doc.circle(left+10, top+11, 5);
	current_doc.circle(left+10, top+22, 5);
	current_doc.circle(left+10, top+33, 5);

	current_doc.rect(left+spacing_between+ 12, top+7, 10, 10);
	current_doc.rect(left+spacing_between+ 12, top+18, 10, 10);

	current_doc.setFontSize(small_font_size);
	current_doc.text(left+spacing_between+incap_margin, top+37, "Incapacitated");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(20);

	current_doc.text(left+spacing_between+ 14, top+14, "-1");
	current_doc.text(left+spacing_between+ 14, top+25, "-2");

	current_doc.text(left+7, top+13, "-1");
	current_doc.text(left+7, top+24, "-2");
	current_doc.text(left+7, top+35, "-3");
	current_doc.setFontSize(10);
}
function create_derived_stats_table( left, top, height, width, small_font_size ) {

	if(!small_font_size)
		small_font_size = 12;

	current_doc.rect(left, top, height, width);
	current_doc.setFontSize(small_font_size);
	current_doc.setFontStyle("bold");
	current_doc.text(left + 3, top+5, "Pace: " + current_character.derived.pace);
	current_doc.text(left + 3, top+10, "Parry: " + current_character.derived.parry);
	current_doc.text(left + 3, top+15, "Toughness: " + current_character.derived.toughness_formatted);
	current_doc.text(left + 3, top+20, "Charisma: " + current_character.derived.charisma);

	current_doc.text(left + 3, top+32, "Current Load");
	current_doc.setFontStyle("normal");

	current_doc.text(left + 3, top+36, current_character.derived.current_load);
	current_doc.setFontSize(10);
}

function create_edges_advancement_track( left, top, width, small_font_size ) {

	if(!small_font_size)
		small_font_size = 10;

	current_doc.rect(left,top,width,143);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(left + 5, top + 7, "Initial Edges");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(small_font_size);
	adv_line_loc = top + 11;
	adv_line_height = 4;
	for( novice_slot = 0; novice_slot < 3; novice_slot++) {
		if(current_character.selected_edges[novice_slot])
			current_doc.text(left + 2, adv_line_loc + novice_slot * adv_line_height, current_character.selected_edges[novice_slot].name);
		else
			current_doc.text(left + 2, adv_line_loc + novice_slot * adv_line_height, "");
	}

	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(left + 5, top + 25, "Advancements");
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(small_font_size);

	adv_line_height = 4;
	adv_line_loc = top + 30;

	current_doc.setFontStyle("bold");
	current_doc.text(left + 2, adv_line_loc, "Novice");
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
			current_doc.text(left + 2, adv_line_loc, label);
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
				current_doc.text(left + 2, adv_line_loc, current_xp + ": " + uc_words(selected_advancement.applies_to1) + "++");
			} else if(selected_advancement.short_name == "add-skill") {
				current_doc.text(left + 2, adv_line_loc, current_xp + ": +Skill - " + selected_advancement.applies_to1);
			} else if(selected_advancement.short_name == "gain-edge") {
				current_doc.setFontStyle("bold");
				current_doc.text(left + 2, adv_line_loc, current_xp + ": +Edge - " + selected_advancement.applies_to1);
				current_doc.setFontStyle("normal");
			} else {
				if(selected_advancement.applies_to2 && selected_advancement.applies_to1 ) {
					current_doc.text(left + 2, adv_line_loc, current_xp + ": " + selected_advancement.applies_to1 + "++, " + selected_advancement.applies_to2  + "++");
				} else {
					if(selected_advancement.applies_to2 ) {
						current_doc.text(left + 2, adv_line_loc, current_xp + ": " + selected_advancement.applies_to2 + "++");
					} else {
						current_doc.text(left + 2, adv_line_loc, current_xp + ": " + selected_advancement.applies_to1 + "++");
					}
				}
			}

		} else {
			current_doc.text(left + 2, adv_line_loc, current_xp + ":");
			current_doc.lines([[0,0],[width-10,0]], left + 8, adv_line_loc);
		}
	}
	current_doc.setFontSize(10);
}

function create_attributes_and_skills_table( skillcols, left, top, height, width, skill_line_height, small_font_size  ) {

	if(!skill_line_height)
		skill_line_height = 5;
	if(!small_font_size)
		small_font_size = 10;

	// current_doc.rect(5,50,200,80);
	current_doc.rect(left, top, height, width);
	current_doc.setFontStyle("bold");
	current_doc.text(skillcols[0], top+5, "Agility: " + attribute_labels[current_character.attributes.agility]);
	current_doc.text(skillcols[1], top+5, "Smarts: " + attribute_labels[current_character.attributes.smarts]);
	current_doc.text(skillcols[2], top+5, "Spirit: " + attribute_labels[current_character.attributes.spirit]);
	current_doc.text(skillcols[3], top+5, "Strength: " + attribute_labels[current_character.attributes.strength]);
	current_doc.text(skillcols[4], top+5, "Vigor: " + attribute_labels[current_character.attributes.vigor]);

	// Agility Skills

	current_doc.setFontSize(small_font_size);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "agility") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillcols[0], top+13+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillcols[0], top+13+current_skill_count * skill_line_height, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}

	// Smarts Skills
	current_doc.setFontSize(small_font_size);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	if( current_character.arcane_background_selected && current_character.arcane_background_selected.skill) {

		current_skill = current_character.get_skill( current_character.arcane_background_selected.skill.name );
		if( current_skill )
			current_doc.text(skillcols[1], top+13+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
		else
			current_doc.text(skillcols[1], top+13+current_skill_count * skill_line_height, chargen_skills[skill_counter].name + ": -");
		current_skill_count++;
	}

	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "smarts") {

			if( chargen_skills[skill_counter].specify && chargen_skills[skill_counter].specify > 0) {
				skills_of = current_character.get_skills_of(chargen_skills[skill_counter].name);
				for(skills_of_count = 0; skills_of_count < skills_of.length; skills_of_count++) {
					current_skill = skills_of[skills_of_count];
					//current_doc.text(skillcols[1], 63+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
					current_doc.text(skillcols[1], top+13+current_skill_count * skill_line_height, current_skill.name[0] + current_skill.name[1] +  current_skill.name[2] + " (" + current_skill.specify_text + "): " + attribute_labels[current_skill.total]);
				}
			} else {
				current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
				if( current_skill ) {
					// current_doc.text(skillcols[1], 63+current_skill_count * skill_line_height, current_skill.name[0] + current_skill.name[1] +  current_skill.name[2] + " (" + current_skill.specify_text + "): " + attribute_labels[current_skill.total]);
					current_doc.text(skillcols[1], top+13+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
				} else {
					current_doc.text(skillcols[1], top+13+current_skill_count * skill_line_height, chargen_skills[skill_counter].name + ": -");
				}

			}
			current_skill_count++;
		}
	}

	// Spirit Skills
	current_doc.setFontSize(small_font_size);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "spirit") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillcols[2], top+13+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillcols[2], top+13+current_skill_count * skill_line_height, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}

	// Strength Skills
	current_doc.setFontSize(small_font_size);
	current_doc.setFontStyle("normal");
	current_skill_count = 0;
	for(skill_counter = 0; skill_counter < chargen_skills.length; skill_counter++) {
		if(chargen_skills[skill_counter].attribute == "strength") {
			current_skill = current_character.get_skill(chargen_skills[skill_counter].name);
			if( current_skill )
				current_doc.text(skillcols[3], top+13+current_skill_count * skill_line_height, current_skill.name + ": " + attribute_labels[current_skill.total]);
			else
				current_doc.text(skillcols[3], top+13+current_skill_count * skill_line_height, chargen_skills[skill_counter].name + ": -");
			current_skill_count++;
		}
	}
	current_doc.setFontSize(10);
}

function create_weapon_table( label, cols, left, top, numlines  ) {

	if(!top)
		top = 170;

	width = cols[6] + 15;
	// Weapons
	current_doc.rect(5,top,width,numlines * 4 + 15);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(10, top + 5, label);
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);

	current_doc.setFontStyle("bold");
	current_doc.text(cols[0], top + 10, "Name");
	current_doc.text(cols[1], top + 10, "Weight");
	current_doc.text(cols[2], top + 10, "Damage");
	current_doc.text(cols[3], top + 10, "AP");
	current_doc.text(cols[4], top + 10, "Range");
	current_doc.text(cols[5], top + 10, "ROF");
	current_doc.text(cols[6], top + 10, "Shots");
	current_doc.setFontStyle("normal");

	current_weapons = current_character.get_weapons();
	for(w_counter = 0; w_counter < numlines; w_counter++) {

		if(current_weapons[w_counter]) {
			if(current_weapons[w_counter].name )
				current_doc.text(cols[0], top + 15 + w_counter * 4, current_weapons[w_counter].name.toString());

			if(current_weapons[w_counter].weight )
				current_doc.text(cols[1], top + 15 + w_counter * 4, current_weapons[w_counter].weight.toString());

			if(current_weapons[w_counter].damage )
				current_doc.text(cols[2], top + 15 + w_counter * 4, current_weapons[w_counter].damage.toString());

			if(current_weapons[w_counter].ap )
				current_doc.text(cols[3], top + 15 + w_counter * 4, current_weapons[w_counter].ap.toString());
			else
				current_doc.text(cols[3], top + 15 + w_counter * 4, "-");

			if(current_weapons[w_counter].range )
				current_doc.text(cols[4], top + 15 + w_counter * 4, current_weapons[w_counter].range.toString());

			if(current_weapons[w_counter].rof )
				current_doc.text(cols[5], top + 15 + w_counter * 4, current_weapons[w_counter].rof.toString());

			if(current_weapons[w_counter].shots ) {
				current_doc.text(cols[6], top + 15 + w_counter * 4, current_weapons[w_counter].shots.toString());
			} else {
				if(current_weapons[w_counter].range )
					current_doc.text(cols[6], top + 15 + w_counter * 4, "1");
			}

		}

		current_doc.lines([[0,0],[cols[1]-cols[0] - 1,0]], cols[0], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[cols[2]-cols[1] - 1,0]], cols[1], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[cols[3]-cols[2] - 1,0]], cols[2], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[cols[4]-cols[3] - 1,0]], cols[3], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[cols[5]-cols[4] - 1,0]], cols[4], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[cols[6]-cols[5] - 1,0]], cols[5], top + 16 + w_counter * 4);
		current_doc.lines([[0,0],[width-cols[5] - 11,0]], cols[6], top + 16 + w_counter * 4);
	}
	current_doc.setFontSize(10);
}

function create_equipment_table(label, left, top, width, height) {

	// Equipment
	current_doc.rect(left, top, width, height);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(left + 5, top + 5, label);
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

			current_doc.text(left + 5, top + 10 + e_counter * 4, equipment_line);

		}
	}
	current_doc.setFontSize(10);
}

function create_hindrances_table(label, left, top, width, height, small_font_size) {
	if(!small_font_size)
		small_font_size = 10;
	current_doc.rect(left,top,width,height);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(left + 5, top + 5, label);
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(small_font_size);
	for(hind_counter = 0; hind_counter < current_character.selected_hindrances.length; hind_counter++) {
		if(current_character.selected_hindrances[hind_counter].specify_text && current_character.selected_hindrances[hind_counter].specify_text != "")
			current_doc.text(left + 5, top + 10 + hind_counter * Math.floor(small_font_size / 2) -1 , current_character.selected_hindrances[hind_counter].name + " (" + current_character.selected_hindrances[hind_counter].specify_text + ")" );
		else
			current_doc.text(left + 5, top + 10 + hind_counter * Math.floor(small_font_size / 2) -1 , current_character.selected_hindrances[hind_counter].name );
	}
	current_doc.setFontSize(10);
}

function create_powers_table(label, left, top, width, height, small_font_size) {

	//current_doc.rect(left,top,width,height);
	if(!small_font_size)
		small_font_size = 7;

	if( current_character.arcane_background_selected ) {
		current_doc.rect(left, top ,width, height);
		current_doc.setFontStyle("bold");
		current_doc.setFontSize(14);

		current_doc.text(left + 5, top + 5, current_character.arcane_background_selected.name + " - " + current_character.power_points_available + " power points");
		current_doc.setFontStyle("normal");
		current_doc.setFontSize(10);
		current_location = top + 5;
		for(p_counter = 0; p_counter < current_character.selected_powers.length; p_counter++) {
			current_location += 5;
			if( current_character.selected_powers[p_counter].description != "") {
				power_name = current_character.selected_powers[p_counter].description + " (" + current_character.selected_powers[p_counter].name;
				if( current_character.selected_powers[p_counter].trapping != "" )
					power_name += ", " + current_character.selected_powers[p_counter].trapping  + ")";
				else
					power_name += ")";
				current_doc.text(left+5, current_location , power_name );
			} else {
				if( current_character.selected_powers[p_counter].trapping != "" ) {
					current_doc.text(left+5, current_location , current_character.selected_powers[p_counter].name + " (" + current_character.selected_powers[p_counter].trapping  + ")" );
				} else {
					current_doc.text(left+5, current_location , current_character.selected_powers[p_counter].name );
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
				current_doc.setFontSize(small_font_size);
				current_doc.text(left + 5, current_location , details_line );
				current_doc.setFontSize(10);
			}
		}
	} else {
		current_doc.rect(left, top ,width, height);
		current_doc.setFontStyle("bold");
		current_doc.setFontSize(14);
		current_doc.text(75, top + 5, "Powers");
		current_doc.setFontStyle("normal");
		current_doc.setFontSize(10);

		current_doc.text(75, 142, "No Arcane Background Selected");
	}
	current_doc.setFontSize(10);
}

function create_armor_table(label, left, top, width, height) {
	// Armor
	current_doc.rect(left, top ,width, height);
	current_doc.setFontStyle("bold");
	current_doc.setFontSize(14);
	current_doc.text(left + 5, top + 5, label);
	current_doc.setFontStyle("normal");
	current_doc.setFontSize(10);
	current_armor = current_character.get_armor();
	for(a_counter = 0; a_counter < current_armor.length; a_counter++) {
		if(current_armor[a_counter]) {
			armor_line = "";
			if(current_armor[a_counter].name )
				armor_line += current_armor[a_counter].name;
			if(current_armor[a_counter].armor )
				armor_line += " - armor " + current_armor[a_counter].armor;
			if(current_armor[a_counter].weight )
				armor_line += ", " + current_armor[a_counter].weight + "lbs";

			current_doc.text(left + 5, top + 10 + a_counter * 5, armor_line);
			if(current_armor[a_counter].notes ) {
				current_doc.setFontSize(6);
				if(typeof(current_armor[a_counter].notes) == "array")
					current_doc.text(left + 5, top + 10 + a_counter * 5 + 4, current_armor[a_counter].notes[0]);
				else
					current_doc.text(left + 5, top + 10 + a_counter * 5 + 3, current_armor[a_counter].notes);
				current_doc.setFontSize(10);
			}
		}
	}
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
	if(current_doc)
		current_doc.save("My Character.pdf");
}