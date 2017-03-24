function get_book_by_id( book_id, language ) {
	if( !language )
		language = localStorage["users_preferred_language"];

	for( bookcount = 0; bookcount < savageWorldsBooksList.length; bookcount++) {
		if( savageWorldsBooksList[bookcount].id == book_id ) {

			if( savageWorldsBooksList[bookcount].name[ language ])
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ language ];
			else
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ "en-US" ];

			if( savageWorldsBooksList[bookcount].publisher[ language ])
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ language ];
			else
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ "en-US" ];

			if( savageWorldsBooksList[bookcount].copyright[ language ])
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ language ];
			else
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ "en-US" ];

			savageWorldsBooksList[bookcount].imagepath = "";
			if( savageWorldsBooksList[bookcount].imagename && savageWorldsBooksList[bookcount].imagename != ""  && savageWorldsBooksList[bookcount].imagename != "undefined")
				savageWorldsBooksList[bookcount].imagepath = "./images/books/" + savageWorldsBooksList[bookcount].imagename;

			if( typeof(savageWorldsBooksList[bookcount].setting_rules) == "undefined" )
				savageWorldsBooksList[bookcount].setting_rules = get_setting_rules_by_book_id( savageWorldsBooksList[bookcount].id );

			return  savageWorldsBooksList[bookcount];
		}
	}

	return null;
}

function addCommas( numericalValue ) {
  return (numericalValue + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}


function get_book_by_tag( book_tag, language ) {
	if( !language )
		language = localStorage["users_preferred_language"];

	for( bookcount = 0; bookcount < savageWorldsBooksList.length; bookcount++) {
		if( savageWorldsBooksList[bookcount].short_name == book_tag ) {
			if( savageWorldsBooksList[bookcount].name[ language ])
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ language ];
			else
				savageWorldsBooksList[bookcount].local_name = savageWorldsBooksList[bookcount].name[ "en-US" ];

			if( savageWorldsBooksList[bookcount].publisher[ language ])
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ language ];
			else
				savageWorldsBooksList[bookcount].local_publisher = savageWorldsBooksList[bookcount].publisher[ "en-US" ];

			if( savageWorldsBooksList[bookcount].copyright[ language ])
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ language ];
			else
				savageWorldsBooksList[bookcount].local_copyright = savageWorldsBooksList[bookcount].copyright[ "en-US" ];

			savageWorldsBooksList[bookcount].imagepath = "";
			if( savageWorldsBooksList[bookcount].imagename && savageWorldsBooksList[bookcount].imagename != ""  && savageWorldsBooksList[bookcount].imagename != "undefined")
				savageWorldsBooksList[bookcount].imagepath = "/images/books/" + savageWorldsBooksList[bookcount].imagename;

			if( typeof(savageWorldsBooksList[bookcount].setting_rules) == "undefined" )
				savageWorldsBooksList[bookcount].setting_rules = get_setting_rules_by_book_id( savageWorldsBooksList[bookcount].id, language );
			return  savageWorldsBooksList[bookcount];
		}
	}

	return null;
}

function get_setting_rules_by_book_id( book_id, language ) {
	if( !language )
		language = localStorage["users_preferred_language"];

	var return_array = Array();
	if( savageWorldsSettingRules ) {
		for( var setting_count = 0; setting_count < savageWorldsSettingRules.length; setting_count++) {
			if( savageWorldsSettingRules[setting_count].book == book_id ) {

				var return_item = {
					name: savageWorldsSettingRules[setting_count].name,
					tag: savageWorldsSettingRules[setting_count].tag,
					page: savageWorldsSettingRules[setting_count].page,
					char_creator: savageWorldsSettingRules[setting_count].char_creator,
					inUse: false
				}

				if( return_item.name[ language ])
					return_item.local_name = return_item.name[ language ];
				else
					return_item.local_name = return_item.name[ "en-US" ];

				if( return_item.char_creator )
					return_array.push( return_item );
			}
		}
	}

	return return_array;
}

function get_race_by_id( race_id, language ) {
	if( language )
		language = localStorage["users_preferred_language"];

	for( var racecount = 0; racecount < savageWorldsRaces.length; racecount++) {
		if( savageWorldsRaces[racecount].id == race_id ) {
			if( savageWorldsRaces[racecount].name[ language ])
				savageWorldsRaces[racecount].local_name = savageWorldsRaces[racecount].name[ language ];
			else
				savageWorldsRaces[racecount].local_name = savageWorldsRaces[racecount].name[ "en-US" ];

			// if( savageWorldsRaces[racecount].description[ language ])
			// 	savageWorldsRaces[racecount].local_description = savageWorldsRaces[racecount].description[ language ];
			// else
			// 	savageWorldsRaces[racecount].local_description = savageWorldsRaces[racecount].description[ "en-US" ];


			savageWorldsRaces[racecount].bookObj = get_book_by_id( savageWorldsRaces[racecount].book, language);
			return  savageWorldsRaces[racecount];
		}
	}
	return null;
}

function localizeDiceValues() {
	for( var ldcv = 0 ; ldcv < globalDiceValues.length; ldcv++) {
		if( typeof(globalDiceValues[ldcv].label[ localStorage["users_preferred_language"] ] ) != "undefined") {
			globalDiceValues[ldcv].local_label = globalDiceValues[ldcv].label[ localStorage["users_preferred_language"] ];
		} else {
			globalDiceValues.local_label = globalDiceValues[ldcv].label[ "en-US" ];
		}
	}
}

function localizeSkills() {
	for( var ldcv = 0 ; ldcv < savageWorldsSkillList.length; ldcv++) {
		if( typeof(savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
			savageWorldsSkillList[ldcv].local_name = savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ];
		} else {
			savageWorldsSkillList.local_name = savageWorldsSkillList[ldcv].name[ "en-US" ];
		}

		// if( typeof(savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
		// 	savageWorldsSkillList[ldcv].local_description = savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ];
		// } else {
		// 	savageWorldsSkillList.local_description = savageWorldsSkillList[ldcv].description[ "en-US" ];
		// }
	}
}



function get_local_skill_name( skill_id ) {
	for( var ldcv = 0 ; ldcv < savageWorldsSkillList.length; ldcv++) {
		if( savageWorldsSkillList[ldcv].id == skill_id ) {
			if( typeof(savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
				return savageWorldsSkillList[ldcv].name[ localStorage["users_preferred_language"] ];;
			} else {
				//return savageWorldsSkillList[ldcv].name[ "en-US" ];
				return skill_id;
			}
		}
	}
	return skill_id;
}

function get_gear_general_by_id( class_id ) {
	for( var ldcv = 0 ; ldcv < savageWorldsGearGeneral.length; ldcv++) {
		if( savageWorldsGearGeneral[ldcv].id == class_id ) {
			return savageWorldsGearGeneral[ldcv];
		}
	}
	return null;
}

function get_gear_type_by_id( class_id ) {
	for( var ldcv = 0 ; ldcv < savageWorldsGearTypes.length; ldcv++) {
		if( savageWorldsGearTypes[ldcv].id == class_id ) {
			return savageWorldsGearTypes[ldcv];
		}
	}
	return null;
}

function get_gear_class_by_id( class_id ) {
	for( var ldcv = 0 ; ldcv < savageWorldsGearClasses.length; ldcv++) {
		if( savageWorldsGearClasses[ldcv].id == class_id ) {
			return savageWorldsGearClasses[ldcv];
		}
	}
	return null;
}

function get_first_edge_by_tag( tagname ) {
	for( var ldcv = 0 ; ldcv < savageWorldsEdges.length; ldcv++) {
		if( savageWorldsEdges[ldcv].tag  == tagname ) {
			return savageWorldsEdges[ldcv];
		}
	}
	return null;
}

function selectAll(theField) {
	theField.select()
}
