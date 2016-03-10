angular.module("baseApp").controller(
	"scifiStarshipController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_starship";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.starship";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.starship";
			var itemType = "starship";
			var itemName = "Starship";


			$scope.init = function() {
				$scope.creatorObj = new sciFiCreator();



				$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);


				if( typeof(localStorage[ optionsLocalStorageVariable ]) != "undefined" ) {
					$scope.user_options = localStorage[ optionsLocalStorageVariable ];
				} else {
					$scope.user_options = "";
				}

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.creatorObj.import_json( localStorage[ currentItemLocalStorageVariable ] );
				}

				$scope.creatorObj.useLang = localStorage["users_preferred_language"];

				$scope.selected_options = Array();
				$scope.creator_options = savageWorldsSciFiOptions[ itemType ];
				for(optc = 0; optc < $scope.creator_options.length; optc++) {
					if( typeof($scope.creator_options[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creator_options[optc].local_name = $scope.creator_options[optc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creator_options[optc].local_name = $scope.creator_options[optc].name[ "en-US" ];
					}

					if( typeof($scope.creator_options[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
						$scope.creator_options[optc].local_description = $scope.creator_options[optc].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.creator_options[optc].local_description = $scope.creator_options[optc].description[ "en-US" ];
					}
					$scope.selected_options[optc] = false;
				}

				$translate([
					'APP_TITLE', 'INDEX_BUTTON_SCIFI_STARSHIP', 'CREATOR_SIZE',
					"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
					"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_STARSHIP + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_STARSHIP;
						$scope.size_label  = translation.CREATOR_SIZE;

						$scope.fixed_options = Array(
							{
								id: '0',
								label: translation.CREATOR_FIXED_TURRETED_NONE
							},
							{
								id: 'bow',
								label: translation.CREATOR_FIXED_BOW_FRONT
							},
							{
								id: 'port',
								label: translation.CREATOR_FIXED_PORT_LEFT
							},
							{
								id: 'starboard',
								label: translation.CREATOR_FIXED_STARBOARD_RIGHT
							},
							{
								id: 'stern',
								label: translation.CREATOR_FIXED_STERN_REAR
							}
						);

						$scope.updatePage();
					}

				);
			}

			$scope.addMod = function( modTag ) {
				$scope.creatorObj.add_mod(modTag);
				$scope.updatePage();
			}

			$scope.addWeapon = function( modTag ) {
				$scope.creatorObj.add_weapon(modTag);
				$scope.updatePage();
			}

			$scope.removeMod = function( modTag ) {
				$scope.creatorObj.remove_mod(modTag);
				$scope.updatePage();
			}

			$scope.updateSize = function() {

				$scope.creatorObj.set_size( $scope.size_selected.id );
				$scope.updatePage();
			}

			$scope.linkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.increment_weapon_count( weaponIndex);
				$scope.updatePage();
			}

			$scope.setFixed = function(weaponIndex) {
				newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
				$scope.creatorObj.fix_weapon( weaponIndex, newValue);
				$scope.updatePage();
			}

			$scope.unlinkWeapon = function(weaponIndex, linkValue) {
				$scope.creatorObj.decrement_weapon_count( weaponIndex);
				$scope.updatePage();
			}

			$scope.updateOption = function( option_index ) {

				for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
					if( $scope.creator_options[optc].short_tag ) {
						if( $scope.selected_options[optc] == 0 )
							$scope.creatorObj.remove_option( $scope.creator_options[optc].short_tag );
						else
							$scope.creatorObj.add_option( $scope.creator_options[optc].short_tag );
					}
				}
				$scope.updatePage();
			}

			$scope.removeWeapon = function(weaponIndex) {
				$scope.creatorObj.remove_weapon( weaponIndex );
				$scope.updatePage();
			}

			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
			}

			$scope.newDialog = function() {

				$scope.closeDialogs();
				$scope.newDialogOpen = true;
			}

			$scope.loadDialog = function() {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.load_item = 0;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();

				$scope.closeDialogs();
				$scope.loadDialogOpen = true;
			}
			$scope.saveDialog = function() {
				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.save_over = -1;
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				for( sic = 0; sic < $scope.saved_items.length; sic++) {
					$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
				}

				$scope.closeDialogs();
				$scope.save_as_name = $scope.creatorObj.item_name;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.import_json = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(import_json) {
				$scope.import_json = import_json;
			}

			$scope.importData = function(import_json) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.import_json;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.export_bbcode = $scope.creatorObj.export_bbcode();
				$scope.export_json = $scope.creatorObj.export_json();
				$scope.closeDialogs();
				$scope.exportDialogOpen = true;
			}
			$scope.optionsDialog = function() {
				$scope.closeDialogs();
				$scope.optionsDialogOpen = true;
			}

			$scope.loadItem = function( load_item ) {
				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
				if( $scope.saved_items[ load_item ] )
					localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

				$scope.closeDialogs();
				$scope.init();
			}

			$scope.clearCurrent = function(  ) {

				localStorage[ currentItemLocalStorageVariable ] = "";
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.updateLoad = function( load_item ) {
				$scope.load_item = load_item;
			}

			$scope.updateSave = function( save_over ) {
				$scope.save_over = save_over;

			}

			$scope.removeSavedItem = function( itemIndex ) {

				$translate([
					'CREATOR_DELETION_CONFIRMATION'
				]).then(
					function (translation) {
						if( confirm( translation.CREATOR_DELETION_CONFIRMATION ) ) {
							$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
							$scope.saved_items.splice( itemIndex, 1);
							localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
						}
					}
				);
			}

			$scope.saveItem = function( save_over, saveName ) {

				if( !localStorage[ savedItemsLocalStorageVariable ])
					localStorage[ savedItemsLocalStorageVariable ] = "[]";

				$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

				if( save_over > -1 ) {
					$scope.saved_items[ save_over ] = $scope.makeSaveObject( saveName );
				} else {
					$scope.saved_items.push( $scope.makeSaveObject( saveName ));
				}
				localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

				$scope.closeDialogs();
			}

			$scope.makeSaveObject = function( saveName ) {
				save_object = {
					name: saveName,
					datetime: Date(),
					type: itemType,
					data:  $scope.creatorObj.export_json()
				};
				return save_object;
			}

			$scope.updatePage = function() {
				$scope.creatorObj.calculate();

				$scope.set_size = $scope.creatorObj.size;

				$scope.creator_preview = $scope.creatorObj.create_stats_block();
				localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.export_json();

				$scope.mod_list = Array();
				angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );
				for(modc = 0; modc < $scope.mod_list.length; modc++) {
					if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
					}
					$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].get_mod_cost($scope.creatorObj);
					$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].get_cost($scope.creatorObj));
					$scope.mod_list[modc].local_max = $scope.mod_list[modc].get_max($scope.creatorObj);
					$scope.mod_list[modc].currently_added = $scope.creatorObj.get_modification_count( $scope.mod_list[modc].tag );
					if(
						( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
						&&
						( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
					) {
						if( typeof($scope.mod_list[modc].is_available) == "function" ) {
							if ( $scope.mod_list[modc].is_available( $scope.creatorObj ) ) {
								$scope.mod_list[modc].can_add = true;
							} else {
								$scope.mod_list[modc].can_add = false;
							}
						} else {
							$scope.mod_list[modc].can_add = true;
						}
					} else {
						$scope.mod_list[modc].can_add = false;
					}


					if( $scope.mod_list[modc].currently_added > 0)
						$scope.mod_list[modc].can_remove = true;
					else
						$scope.mod_list[modc].can_remove = false;
				}

				// remove mods that aren't enabled or disabled by option
				for(var modc = $scope.mod_list.length -1; modc >= 0; modc--) {
					if(

						typeof($scope.mod_list[modc].show_with_option) != "undefined"
							&&
						$scope.mod_list[modc].show_with_option != ""
					) {
						if( $scope.creatorObj.has_option( $scope.mod_list[modc].show_with_option ) == false) {
							$scope.mod_list.splice(modc, 1);
						}

					}

					if(

						typeof($scope.mod_list[modc].hide_with_option) != "undefined"
							&&
						$scope.mod_list[modc].hide_with_option != ""
					) {
						if( $scope.creatorObj.has_option( $scope.mod_list[modc].hide_with_option ) == true ) {
							$scope.mod_list.splice(modc, 1);
						}

					}
				}

				$translate([
					'CREATOR_SELECT_A_SIZE'
				]).then(
					function (translation) {


						$scope.size_options = Array();
						$scope.size_selected = null;
						$scope.set_size = 0;

						default_size_object = {
							id: 0,
							label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
						};
						$scope.size_options.push( default_size_object );
						for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
							if( savageWorldsSciFiSizes[itemType][sizec].size_label[localStorage["users_preferred_language"]])
								display_label = savageWorldsSciFiSizes[itemType][sizec].size_label[localStorage["users_preferred_language"]] + " - " + $scope.size_label + " " + savageWorldsSciFiSizes[itemType][sizec].size;
							else
								display_label = savageWorldsSciFiSizes[itemType][sizec].size_label["en-US"] + " - " + $scope.size_label + " " + savageWorldsSciFiSizes[itemType][sizec].size;

							push_object = {
								id: savageWorldsSciFiSizes[itemType][sizec].size,
								label: display_label
							};
							if( savageWorldsSciFiSizes[itemType][sizec].show_with_option )
								push_object.show_with_option = savageWorldsSciFiSizes[itemType][sizec].show_with_option;
							if( savageWorldsSciFiSizes[itemType][sizec].hide_with_option )
								push_object.hide_with_option = savageWorldsSciFiSizes[itemType][sizec].hide_with_option;

							$scope.size_options.push( push_object );
							if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
								$scope.size_selected = push_object;
								$scope.set_size = $scope.creatorObj.size;
							}


						}
						if( $scope.size_selected == null) {
							$scope.size_selected = default_size_object;
							$scope.set_size = 0;
						}

				// remove sizes that aren't enabled or disabled by option
				for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

					if(

						typeof($scope.size_options[sizec].show_with_option) != "undefined"
							&&
						$scope.size_options[sizec].show_with_option != ""
					) {
						if( $scope.creatorObj.has_option( $scope.size_options[sizec].show_with_option ) == false) {

							$scope.size_options.splice(sizec, 1);
						}

					}

					if(

						typeof($scope.size_options[sizec].hide_with_option) != "undefined"
							&&
						$scope.size_options[sizec].hide_with_option != ""
					) {
						if( $scope.creatorObj.has_option( $scope.size_options[sizec].hide_with_option ) == true ) {
							$scope.size_options.splice(sizec, 1);
						}

					}
				}

				});
				$scope.available_weapons = Array();

				for( weap_c = 0; weap_c < savageWorldsVehicleWeapons.length; weap_c++) {
					if( savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name = savageWorldsVehicleWeapons[weap_c].name[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_name_plural = savageWorldsVehicleWeapons[weap_c].name_plural[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
					}

					if( savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_classification = savageWorldsVehicleWeapons[weap_c].classification[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].local_cost = $scope.creatorObj.simplify_cost( savageWorldsVehicleWeapons[weap_c].cost );
					if( savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ] ) {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ localStorage["users_preferred_language"] ];
					} else {
						savageWorldsVehicleWeapons[weap_c].local_notes = savageWorldsVehicleWeapons[weap_c].notes[ "en-US" ];
					}

					savageWorldsVehicleWeapons[weap_c].can_add = true;
					if( typeof(savageWorldsVehicleWeapons[weap_c].is_available) == "function") {
						if( savageWorldsVehicleWeapons[weap_c].is_available( $scope.creatorObj) == false ){

							savageWorldsVehicleWeapons[weap_c].can_add = false;
						}
					}

					// change vehicle_weapon_mod_points to mods_available for non power armor vehicles ;)

					if( $scope.creatorObj.vehicle_weapon_mod_points < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}

					if( savageWorldsVehicleWeapons[weap_c].can_add ) {
						$scope.available_weapons.push(savageWorldsVehicleWeapons[weap_c]);
					}
				}

				$scope.available_weapons.sort(
					function(ob1,ob2) {
						if (ob1.local_classification > ob2.local_classification) {
							return 1;
						} else if (ob1.local_classification < ob2.local_classification) {
							return -1;
						}

						// Else go to the 2nd item
						if (ob1.mods < ob2.mods) {
							return -1;
						} else if (ob1.mods > ob2.mods) {
							return 1;
						}

						// Else go to the 3nd item
						if (ob1.local_name < ob2.local_name) {
							return -1;
						} else if (ob1.local_name > ob2.local_name) {
							return 1
						}  else { // nothing to split them
							return 0;
						}
					}
				);

				$scope.selected_options = Array();

				angular.extend(	$scope.creator_options,savageWorldsSciFiOptions[ itemType ] );
				for(optc = 0; optc < $scope.creator_options.length; optc++) {
					if( $scope.creatorObj.has_option($scope.creator_options[optc].short_tag) )
						$scope.selected_options[optc] = true;
					else
						$scope.selected_options[optc] = false;
				}

				$scope.installed_weapons = $scope.creatorObj.selected_weapons;
				for(weap_c = 0; weap_c < $scope.installed_weapons.length; weap_c++) {
					if( $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name = $scope.installed_weapons[weap_c].name[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_name_plural = $scope.installed_weapons[weap_c].name_plural[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
					}

					if( $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ] ) {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ localStorage["users_preferred_language"] ];
					} else {
						$scope.installed_weapons[weap_c].local_classification = $scope.installed_weapons[weap_c].classification[ "en-US" ];
					}


					found_item = false
					for(optc = 0;optc < $scope.fixed_options.length; optc++ ) {

						if( $scope.fixed_options[optc].id == $scope.installed_weapons[weap_c].fixed ) {
							$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[optc];
							found_item = true;
						}
					}
					if(!found_item)
						$scope.installed_weapons[weap_c].fixed_dd_value = $scope.fixed_options[0];
				}

			}

			$scope.init();
		}

	]
);
