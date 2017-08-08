var scifiwalkerArray = [
	'$rootScope',
	'$translate',
	'$scope',
	function ($rootScope, $translate, $scope) {
		$rootScope.showSciFiCreatorMenu = true;
		var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_walker";
		var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.walker";
		var itemType = "walker";
		var itemName = "Walker";


		$scope.init = function() {
			$scope.creatorObj = new scifiCreator();



			$scope.creatorObj.init(itemType, itemName, savageWorldsSciFiSizes[itemType], savageWorldsSciFiMods[itemType], savageWorldsSciFiOptions[ itemType ]);




			if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
				$scope.creatorObj.importJSON( localStorage[ currentItemLocalStorageVariable ] );
			}

			$scope.creatorObj.useLang = localStorage["users_preferred_language"];

			$scope.selected_options = Array();
			$scope.creatorOptions = savageWorldsSciFiOptions[ itemType ];
			for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
				if( typeof($scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ] ) != "undefined") {
					$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ localStorage["users_preferred_language"] ];
				} else {
					$scope.creatorOptions[optc].local_name = $scope.creatorOptions[optc].name[ "en-US" ];
				}

				// if( typeof($scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ] ) != "undefined") {
				// 	$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ localStorage["users_preferred_language"] ];
				// } else {
				// 	$scope.creatorOptions[optc].local_description = $scope.creatorOptions[optc].description[ "en-US" ];
				// }
				$scope.selected_options[optc] = false;
			}

			$translate([
				'APP_TITLE', 'INDEX_BUTTON_SCIFI_WALKER', 'CREATOR_SIZE',
				"CREATOR_FIXED_BOW_FRONT", "CREATOR_FIXED_STARBOARD_RIGHT", "CREATOR_FIXED_PORT_LEFT",
				"CREATOR_FIXED_STERN_REAR",	"CREATOR_FIXED_TURRETED_NONE", 'CREATOR_SELECT_A_SIZE'
			]).then(
				function (translation) {

					$rootScope.title_tag = translation.INDEX_BUTTON_SCIFI_WALKER + " | " + translation.APP_TITLE;
					$rootScope.subtitle_tag = translation.INDEX_BUTTON_SCIFI_WALKER;
					$scope.sizeLabel  = translation.CREATOR_SIZE;

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
			$scope.creatorObj.addMod(modTag);
			$scope.updatePage();
		}

		$scope.addWeapon = function( modTag ) {
			$scope.creatorObj.addWeapon(modTag);
			$scope.updatePage();
		}

		$scope.removeMod = function( modTag ) {
			$scope.creatorObj.removeMod(modTag);
			$scope.updatePage();
		}

		$scope.updateSize = function() {

			$scope.creatorObj.setSize( $scope.size_selected.id );
			$scope.updatePage();
		}

		$scope.linkWeapon = function(weaponIndex, linkValue) {
			$scope.creatorObj.incrementWeaponCount( weaponIndex);
			$scope.updatePage();
		}

		$scope.setFixed = function(weaponIndex) {
			newValue = $scope.installed_weapons[weaponIndex].fixed_dd_value.id
			$scope.creatorObj.fixWeapon( weaponIndex, newValue);
			$scope.updatePage();
		}

		$scope.unlinkWeapon = function(weaponIndex, linkValue) {
			$scope.creatorObj.decrementWeaponCount( weaponIndex);
			$scope.updatePage();
		}

		$scope.updateOption = function( option_index ) {

			for(optc = 0; optc < $scope.selected_options.length; optc++ ) {
				if( $scope.creatorOptions[optc].short_tag ) {
					if( $scope.selected_options[optc] == 0 )
						$scope.creatorObj.removeOption( $scope.creatorOptions[optc].short_tag );
					else
						$scope.creatorObj.addOption( $scope.creatorOptions[optc].short_tag );
				}
			}
			$scope.updatePage();
		}

		$scope.removeWeapon = function(weaponIndex) {
			$scope.creatorObj.removeWeapon( weaponIndex );
			$scope.updatePage();
		}

		$rootScope.closeDialogs = function() {
			$rootScope.newDialogOpen = false;
			$rootScope.loadDialogOpen = false;
			$rootScope.saveDialogOpen = false;
			$rootScope.importDialogOpen = false;
			$rootScope.exportDialogOpen = false;
			$rootScope.optionsDialogOpen = false;
		}

		$rootScope.newDialog = function() {

			$rootScope.closeDialogs();
			$rootScope.newDialogOpen = true;
		}

		$rootScope.loadDialog = function() {

			if( !localStorage[ savedItemsLocalStorageVariable ])
				localStorage[ savedItemsLocalStorageVariable ] = "[]";

			$scope.load_item = 0;
			$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
			for( sic = 0; sic < $scope.saved_items.length; sic++) {
				$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
			}

			$rootScope.closeDialogs();

			$rootScope.closeDialogs();
			$rootScope.loadDialogOpen = true;
		}
		$rootScope.saveDialog = function() {
			if( !localStorage[ savedItemsLocalStorageVariable ])
				localStorage[ savedItemsLocalStorageVariable ] = "[]";

			$scope.save_over = -1;
			$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
			for( sic = 0; sic < $scope.saved_items.length; sic++) {
				$scope.saved_items[sic].datetime = new Date($scope.saved_items[sic].datetime);
			}

			$rootScope.closeDialogs();
			$scope.save_as_name = $scope.creatorObj.itemName;
			$rootScope.saveDialogOpen = true;
		}
		$rootScope.importDialog = function() {
			$scope.importJSON = "";
			$rootScope.closeDialogs();
			$rootScope.importDialogOpen = true;
		}

		$scope.updateImportData = function(importJSON) {
			$scope.importJSON = importJSON;
		}

		$scope.importData = function(importJSON) {

			localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
			$rootScope.closeDialogs();
			$scope.init();
		}

		$rootScope.exportDialog = function() {
			$scope.exportBBCode = $scope.creatorObj.exportBBCode();
			$scope.exportJSON = $scope.creatorObj.exportJSON(true);
			$rootScope.closeDialogs();
			$rootScope.exportDialogOpen = true;
		}
		$rootScope.optionsDialog = function() {
			$rootScope.closeDialogs();
			$rootScope.optionsDialogOpen = true;
		}

		$scope.loadItem = function( load_item ) {
			$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
			if( $scope.saved_items[ load_item ] )
				localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;

			$rootScope.closeDialogs();
			$scope.init();
		}

		$scope.clearCurrent = function(  ) {

			localStorage[ currentItemLocalStorageVariable ] = "";
			$rootScope.closeDialogs();
			$scope.init();
		}

		$scope.updateLoad = function( load_item ) {
			$scope.load_item = load_item;
		}

		$scope.updateSave = function( save_over ) {
			$scope.save_over = save_over;

		}

		$scope.closeConfirmDialog = function( ) {
			$scope.showConfirmDialog = false;
			// reset confirm to nothing...
			$scope.confirmDialogYes = function() {
				$scope.showConfirmDialog = false;
			}
		}

		$scope.confirmDialogYes = function() {
			// empty to be replaced...
			$scope.showConfirmDialog = false;
		}

		$scope.confirmDialogQuestion = "";

		$scope.confirmDialog = function( confirmationMessage, onYes ) {
			$scope.confirmDialogQuestion = confirmationMessage;
			$scope.showConfirmDialog = true;
			$scope.confirmDialogYes = onYes;
		}

		$scope.removeSavedItem = function( itemIndex ) {

			$translate([
				'CREATOR_DELETION_CONFIRMATION'
			]).then(
				function (translation) {
					$scope.confirmDialog(
						translation.CREATOR_DELETION_CONFIRMATION,
						function() {
							$scope.showConfirmDialog = false;
							$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
							$scope.saved_items.splice( itemIndex, 1);
							localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
						}
					);
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
				$scope.creatorObj.newUUID();
				$scope.saved_items.push( $scope.makeSaveObject( saveName ));
			}
			localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );

			$rootScope.closeDialogs();
		}

		$scope.makeSaveObject = function( saveName ) {
			save_object = {
				name: saveName,
				datetime: Date(),
				type: itemType,
				data:  $scope.creatorObj.exportJSON()
			};
			return save_object;
		}

		$scope.updatePage = function() {
			$scope.creatorObj.calculate();

			$scope.setSize = $scope.creatorObj.size;

			$scope.creator_preview = $scope.creatorObj.createStatesBlock();
			localStorage[ currentItemLocalStorageVariable ] = $scope.creatorObj.exportJSON();

			$scope.mod_list = Array();
			angular.extend(	$scope.mod_list, savageWorldsSciFiMods[ itemType ] );
			for(modc = 0; modc < $scope.mod_list.length; modc++) {
				if( $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ] ) {
					$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ localStorage["users_preferred_language"] ];
				} else {
					$scope.mod_list[modc].local_name = $scope.mod_list[modc].name[ "en-US" ];
				}
				$scope.mod_list[modc].local_mod_cost = $scope.mod_list[modc].getModCost($scope.creatorObj);
				$scope.mod_list[modc].local_cost = $scope.creatorObj.simplify_cost($scope.mod_list[modc].getCost($scope.creatorObj));
				$scope.mod_list[modc].local_max = $scope.mod_list[modc].getMax($scope.creatorObj);
				$scope.mod_list[modc].currently_added = $scope.creatorObj.getModificationCount( $scope.mod_list[modc].tag );
				if(
					( $scope.mod_list[modc].local_max == "u" || $scope.mod_list[modc].currently_added < $scope.mod_list[modc].local_max )
					&&
					( $scope.mod_list[modc].local_mod_cost <= $scope.creatorObj.mods_available )
				) {
					if( typeof($scope.mod_list[modc].isAvailable) == "function" ) {
						if ( $scope.mod_list[modc].isAvailable( $scope.creatorObj ) ) {
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

					typeof($scope.mod_list[modc].showWithOption) != "undefined"
						&&
					$scope.mod_list[modc].showWithOption != ""
				) {
					if( $scope.creatorObj.hasOption( $scope.mod_list[modc].showWithOption ) == false) {
						$scope.mod_list.splice(modc, 1);
					}

				}

				if(

					typeof($scope.mod_list[modc].hideWithOption) != "undefined"
						&&
					$scope.mod_list[modc].hideWithOption != ""
				) {
					if( $scope.creatorObj.hasOption( $scope.mod_list[modc].hideWithOption ) == true ) {
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
					$scope.setSize = 0;

					default_size_object = {
						id: 0,
						label: "- " + translation.CREATOR_SELECT_A_SIZE + " -"
					};
					$scope.size_options.push( default_size_object );
					for(sizec = 0; sizec < savageWorldsSciFiSizes[itemType].length; sizec++) {
						if( savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]])
							display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel[localStorage["users_preferred_language"]] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;
						else
							display_label = savageWorldsSciFiSizes[itemType][sizec].sizeLabel["en-US"] + " - " + $scope.sizeLabel + " " + savageWorldsSciFiSizes[itemType][sizec].size;

						push_object = {
							id: savageWorldsSciFiSizes[itemType][sizec].size,
							label: display_label
						};
						if( savageWorldsSciFiSizes[itemType][sizec].showWithOption )
							push_object.showWithOption = savageWorldsSciFiSizes[itemType][sizec].showWithOption;
						if( savageWorldsSciFiSizes[itemType][sizec].hideWithOption )
							push_object.hideWithOption = savageWorldsSciFiSizes[itemType][sizec].hideWithOption;

						$scope.size_options.push( push_object );
						if( savageWorldsSciFiSizes[itemType][sizec].size == $scope.creatorObj.size ) {
							$scope.size_selected = push_object;
							$scope.setSize = $scope.creatorObj.size;
						}


					}
					if( $scope.size_selected == null) {
						$scope.size_selected = default_size_object;
						$scope.setSize = 0;
					}

			// remove sizes that aren't enabled or disabled by option
			for(var sizec = $scope.size_options.length -1; sizec >= 0; sizec--) {

				if(

					typeof($scope.size_options[sizec].showWithOption) != "undefined"
						&&
					$scope.size_options[sizec].showWithOption != ""
				) {
					if( $scope.creatorObj.hasOption( $scope.size_options[sizec].showWithOption ) == false) {

						$scope.size_options.splice(sizec, 1);
					}

				}

				if(

					typeof($scope.size_options[sizec].hideWithOption) != "undefined"
						&&
					$scope.size_options[sizec].hideWithOption != ""
				) {
					if( $scope.creatorObj.hasOption( $scope.size_options[sizec].hideWithOption ) == true ) {
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

				// if( savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
				// 	savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ localStorage["users_preferred_language"] ];
				// } else {
				// 	savageWorldsVehicleWeapons[weap_c].local_description = savageWorldsVehicleWeapons[weap_c].description[ "en-US" ];
				// }

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
				if( typeof(savageWorldsVehicleWeapons[weap_c].isAvailable) == "function") {
					if( savageWorldsVehicleWeapons[weap_c].isAvailable( $scope.creatorObj) == false ){

						savageWorldsVehicleWeapons[weap_c].can_add = false;
					}
				}

				// change vehicleWeaponModPoints to mods_available for non power armor vehicles ;)

				if( $scope.creatorObj.vehicleWeaponModPoints < parseInt(savageWorldsVehicleWeapons[weap_c].mods) ) {

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

			angular.extend(	$scope.creatorOptions,savageWorldsSciFiOptions[ itemType ] );
			for(optc = 0; optc < $scope.creatorOptions.length; optc++) {
				if( $scope.creatorObj.hasOption($scope.creatorOptions[optc].short_tag) )
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

				// if( $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ] ) {
				// 	$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ localStorage["users_preferred_language"] ];
				// } else {
				// 	$scope.installed_weapons[weap_c].local_description = $scope.installed_weapons[weap_c].description[ "en-US" ];
				// }

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

];
angular.module("webApp").controller(
	"scifiWalkerController",
	scifiwalkerArray
);

angular.module("cordovaApp").controller(
	"scifiWalkerController",
	scifiwalkerArray
);
