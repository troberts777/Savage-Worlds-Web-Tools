function get_book_by_id( book_id, language ) {
	if( language )
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

			return  savageWorldsBooksList[bookcount];
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

		if( typeof(savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
			savageWorldsSkillList[ldcv].local_description = savageWorldsSkillList[ldcv].description[ localStorage["users_preferred_language"] ];
		} else {
			savageWorldsSkillList.local_description = savageWorldsSkillList[ldcv].description[ "en-US" ];
		}
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