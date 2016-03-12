angular.module("baseApp").controller(
	"coreExtrasController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var extras_default_results = "";
			var extras_no_results_found = "";
			$scope.current_books = Array();

			if( typeof(localStorage["com.jdg.swwt2.extras.input_extras_search"]) != "undefined" )
				$scope.input_extras_search = localStorage["com.jdg.swwt2.extras.input_extras_search"];
			else
				$scope.input_extras_search = "";

			// init localStorage for book checks...
			for( swe_bc = 0; swe_bc < savageWorldsExtrasBooksList.length; swe_bc++) {
				if( typeof(localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc]) == "undefined" ) {
					localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc] = 1;
				}
			}

			$scope.activebooklist = [];
			$scope.active_books = {};

			// add book checkboxes.
			for( swe_bc = 0; swe_bc < savageWorldsExtrasBooksList.length; swe_bc++) {
				book_checked = false;
				if( typeof(localStorage["com.jdg.swwt2.extras.input_book_check_" + swe_bc]) > 0 ) {
					book_checked = true;
				}

				$scope.active_books[ swe_bc + 1 ] = book_checked;
				book_checkbox_data = get_book_by_id( savageWorldsExtrasBooksList[swe_bc]["id"], localStorage["users_preferred_language"] );
				//console.log("book_checkbox_data", book_checkbox_data);
				//console.log('savageWorldsExtrasBooksList[swe_bc]["id"]', savageWorldsExtrasBooksList[swe_bc]["id"]);
				$scope.activebooklist.push( book_checkbox_data );
			}

			if( typeof(localStorage["com.jdg.swwt2.extras.active_books"]) != "undefined"  && localStorage["com.jdg.swwt2.extras.active_books"] != "") {
				$scope.active_books = JSON.parse(localStorage["com.jdg.swwt2.extras.active_books"]);
			}

			$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_EXTRAS','EXTRAS_SEARCH', 'EXTRAS_LIBRARIES', 'EXTRAS_RESULTS', 'EXTRAS_RESULTS_INTRO', 'EXTRAS_NO_RESULTS' ]).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_BUTTON_CORE_EXTRAS + " | " + translation.APP_TITLE;
				$scope.label_search = translation.EXTRAS_SEARCH;
				$scope.label_libraries = translation.EXTRAS_SEARCH;
				$scope.label_results = translation.EXTRAS_RESULTS;
				$total_roll_label = translation.DICE_TOTAL_ROLL;
				$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_EXTRAS;
				extras_default_results = "<p>" + translation.EXTRAS_RESULTS_INTRO + "</p>";
				extras_no_results_found = "<p>" + translation.EXTRAS_NO_RESULTS + "</p>";

				$scope.update_results_pane();
			});



			$scope.update_results_pane = function() {
				localStorage["com.jdg.swwt2.extras.input_extras_search"] = $scope.input_extras_search;
				localStorage["com.jdg.swwt2.extras.active_books"] = JSON.stringify($scope.active_books);

				$scope.search_results = [];
				if( $scope.input_extras_search && $scope.input_extras_search.length >= 3 ) {
					$scope.show_default_text = false;

					for( extracount = 0; extracount < savageWorldsExtrasDatabase.length; extracount++) {
						if(
							$scope.is_found(  savageWorldsExtrasDatabase[extracount] )
						) {
							$scope.search_results.push(  $scope.localize_extra(savageWorldsExtrasDatabase[extracount]) );
						}
					}
//					console.log("search_results", $scope.search_results);
					if( $scope.search_results.length == 0)
						$scope.show_no_results = true;
					else
						$scope.show_no_results = false;
				} else {
					$scope.show_default_text = true;
				}
			}

			$scope.localize_extra = function( entry_object ) {
				$translate([
					"SKILL_BOATING", "SKILL_CLIMBING",	"SKILL_DRIVING",	"SKILL_FAITH",	"SKILL_FIGHTING",
					"SKILL_GAMBLING",	"SKILL_GUTS",	"SKILL_HEALING",	"SKILL_INTIMIDATION",	"SKILL_INVESTIGATION",
					"SKILL_KNOWLEDGE",	"SKILL_LOCKPICKING",	"SKILL_NOTICE",	"SKILL_PERSUASION",	"SKILL_PILOTING",
					"SKILL_PSIONICS",	"SKILL_REPAIR",	"SKILL_RIDING",	"SKILL_SHOOTING",	"SKILL_SPELLCASTING",
					"SKILL_STEALTH", 	"SKILL_STREETWISE",	"SKILL_SURVIVAL",	"SKILL_SWIMMING",	"SKILL_TAUNT",
					"SKILL_THROWING",	"SKILL_TRACKING",	"SKILL_WEIRD_SCIENCE"
				]).then(function (translation) {

					if( entry_object.name[ localStorage["users_preferred_language"] ] )
						 entry_object.local_name = entry_object.name[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_name = entry_object.name[  "en-US" ];

					if( entry_object.blurb[ localStorage["users_preferred_language"] ] )
						 entry_object.local_blurb = entry_object.blurb[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_blurb = entry_object.blurb[  "en-US" ];

					entry_object.local_blurb = "<p>" + entry_object.local_blurb.trim().replace(/\n/g, "</p><p>") + "</p>";
					if( entry_object.abilities[ localStorage["users_preferred_language"] ] )
						entry_object.local_abilities = entry_object.abilities[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_abilities = entry_object.abilities[  "en-US" ];

					if ( entry_object.local_abilities.trim() )
						entry_object.local_abilities = "<ul><li>" + entry_object.local_abilities.trim().replace(/\n/g, "</li><li>") + "</li></ul>";
					else
						entry_object.local_abilities = "";

					entry_object.local_book = get_book_by_id( entry_object.book );

					entry_object.parsed_attributes = JSON.parse( entry_object.attributes );
					parsed_skills = JSON.parse( entry_object.skills );
//					console.log("parsed_skills", parsed_skills);
					entry_object.display_skills = "";
					for( skill_key in parsed_skills ) {
						//console.log("...", skill_key.substring(0, "SKILL_KNOWLEDGE".length));
						if( skill_key.substring(0, "SKILL_KNOWLEDGE".length) == "SKILL_KNOWLEDGE") {
							if( parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] )
								entry_object.display_skills += get_local_skill_name(skill_key.substring(0, "SKILL_KNOWLEDGE".length)) + " (" + parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] + "): " + parsed_skills[skill_key].value + ", ";
							else
								entry_object.display_skills += get_local_skill_name(skill_key.substring(0, "SKILL_KNOWLEDGE".length)) + " (" + parsed_skills[skill_key].special["en-US"] + "): " + parsed_skills[skill_key].value + ", ";
						} else if ( skill_key.substring(0, "SKILL_CUSTOM".length) == "SKILL_CUSTOM") {
							if( parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] )
								entry_object.display_skills += parsed_skills[skill_key].special[ localStorage["users_preferred_language"] ] + ": " + parsed_skills[skill_key].value + ", ";
							else
								entry_object.display_skills += parsed_skills[skill_key].special["en-US"] + ": " + parsed_skills[skill_key].value + ", ";
						} else {
							entry_object.display_skills += get_local_skill_name(skill_key) + ": " + parsed_skills[skill_key].value + ", ";
						}
					}

					if( entry_object.display_skills != "")
						entry_object.display_skills = entry_object.display_skills.substring(0, entry_object.display_skills.length - 2);

					entry_object.display_toughness = entry_object.toughness;
					if( entry_object.armor > 0)
						entry_object.display_toughness += "(" + entry_object.armor + ")";

					if( entry_object.gear[ localStorage["users_preferred_language"] ] )
						entry_object.local_gear = entry_object.gear[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_gear = entry_object.gear[  "en-US" ];

					if( entry_object.treasure[ localStorage["users_preferred_language"] ] )
						entry_object.local_treasure = entry_object.treasure[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_treasure = entry_object.treasure[  "en-US" ];

					if( entry_object.edges[ localStorage["users_preferred_language"] ] )
						entry_object.local_edges = entry_object.edges[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_edges = entry_object.edges[  "en-US" ];

					if( entry_object.hindrances[ localStorage["users_preferred_language"] ] )
						entry_object.local_hindrances = entry_object.hindrances[ localStorage["users_preferred_language"] ] ;
					else
						entry_object.local_hindrances = entry_object.hindrances[  "en-US" ];
					//return entry_object;
				});
				return entry_object;
			}

			$scope.is_found = function( entry_object ) {
				returnValue = false;

				var search_term = $scope.input_extras_search;
				search_term = search_term.toLowerCase().trim();

				if( entry_object.name[ localStorage["users_preferred_language"] ] ) {
					if( entry_object.name[ localStorage["users_preferred_language"] ].toLowerCase().indexOf( search_term ) > -1 )
						returnValue = true;
				} else {
					if( entry_object.name[ "en-US" ].toLowerCase().indexOf( search_term )  > -1 )
						returnValue = true;
				}

				if( entry_object.tags[ localStorage["users_preferred_language"] ] ) {
					if( entry_object.tags[ localStorage["users_preferred_language"] ].toLowerCase().indexOf( search_term + "," ) > -1 )
						returnValue = true;
				} else {
					if( entry_object.tags[ "en-US" ].toLowerCase().indexOf( search_term + ",")  > -1 )
						returnValue = true;
				}
				if( $scope.active_books[ entry_object.book - 1 ] == false )
					returnValue = false;

				return returnValue;
			}



		}
	]
);

