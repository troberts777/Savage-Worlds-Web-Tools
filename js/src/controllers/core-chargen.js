angular.module("baseApp").controller(
	"coreChargenController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {

			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_chargen";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.chargen";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.chargen";
			var itemType = "character";



			$scope.init = function() {
				$translate([
					'APP_TITLE', 'INDEX_BUTTON_CORE_CHAR', 'CHARGEN_SPECIALIZATION_PLACEHOLDER'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_CORE_CHAR + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_CHAR;
						$scope.specializionPlaceholder = translation.CHARGEN_SPECIALIZATION_PLACEHOLDER;
					}
				);

				localizeDiceValues();


				$scope.diceValues = Array();

				for(gdvc = 0; gdvc < globalDiceValues.length; gdvc++) {
					if( 0 < globalDiceValues[gdvc].id  && globalDiceValues[gdvc].id < 6 )
						$scope.diceValues.push( globalDiceValues[gdvc] );
				}

				$scope.savageCharacter = new savageCharacter( localStorage["users_preferred_language"] );

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.savageCharacter.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}


				$scope.charGenAttributes = $scope.savageCharacter.attributes;
			}

			$scope.init();

			$scope.validateAndSave = function() {
				$scope.savageCharacter.validate();
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.exportJSON();
			}
			$scope.justSave = function() {
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.exportJSON();
			}


			$scope.closeDialogs = function() {
				$scope.newDialogOpen = false;
				$scope.loadDialogOpen = false;
				$scope.saveDialogOpen = false;
				$scope.importDialogOpen = false;
				$scope.exportDialogOpen = false;
				$scope.optionsDialogOpen = false;
				$scope.validationDialogOpen = false;
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
				$scope.save_as_name = $scope.savageCharacter.name;
				$scope.saveDialogOpen = true;
			}
			$scope.importDialog = function() {
				$scope.importJSON = "";
				$scope.closeDialogs();
				$scope.importDialogOpen = true;
			}

			$scope.updateImportData = function(importJSON) {
				$scope.importJSON = importJSON;
			}

			$scope.importData = function(importJSON) {

				localStorage[ currentItemLocalStorageVariable ] = $scope.importJSON;
				$scope.closeDialogs();
				$scope.init();
			}

			$scope.exportDialog = function() {
				$scope.exportBBCode = $scope.savageCharacter.exportBBCode();
				$scope.exportJSON = $scope.savageCharacter.exportJSON();
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

			$scope.updateBook = function( book_id ) {
				$scope.validateAndSave();
			}


			$scope.closeConfirmDialog = function( ) {
				$scope.showConfirmDialog = false;
				// reset confirm to nothing...
				$scope.cofirmDialogYes = function() {
					$scope.showConfirmDialog = false;
				}
			}

			$scope.cofirmDialogYes = function() {
				// empty to be replaced...
				$scope.showConfirmDialog = false;
			}

			$scope.confirmDialogQuestion = "";

			$scope.confirmDialog = function( confirmationMessage, onYes ) {
				$scope.confirmDialogQuestion = confirmationMessage;
				$scope.showConfirmDialog = true;
				$scope.cofirmDialogYes = onYes;
			}

			$scope.showValidationReport = function() {
				$scope.closeDialogs();
				$scope.validationDialogOpen = true;
			}

			$scope.removeSavedItem = function( itemIndex ) {
				console.log("removeSavedItem", "called");
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
					data:  $scope.savageCharacter.exportJSON()
				};
				return save_object;
			}

			$scope.incrementSkill = function( skillID ) {
				$scope.savageCharacter.incrementSkill( skillID );
				$scope.validateAndSave();
			}

			$scope.decrementSkill = function( skillID ) {
				$scope.savageCharacter.decrementSkill( skillID );
				$scope.validateAndSave();
			}
			$scope.addSpecialtySkill = function( skillID ) {
				$scope.savageCharacter.addSpecialtySkill( skillID );
				$scope.validateAndSave();
			}

			$scope.incrementSpecialtySkill = function( skillID, specialtyIndex ) {
				$scope.savageCharacter.incrementSpecialtySkill( skillID, specialtyIndex );
				$scope.validateAndSave();
			}

			$scope.decrementSpecialtySkill = function( skillID, specialtyIndex ) {
				$scope.savageCharacter.decrementSpecialtySkill( skillID, specialtyIndex );
				$scope.validateAndSave();
			}

			$scope.updateSpecialtySkillName = function( skillID, specialtyIndex, updatedName ) {
				// console.log( "updateSpecialtySkillName", skillID, specialtyIndex, updatedName );
				$scope.savageCharacter.updateSpecialtySkillName( skillID, specialtyIndex, updatedName );
				$scope.validateAndSave();
			}

			// $scope.removeSpecialtyAtIndex = function( skillID, specialtyIndex ) {
			// 	console.log( "removeSpecialtyAtIndex", skillID, specialtyIndex );
			// 	$scope.savageCharacter.removeSpecialtyAtIndex( skillID, specialtyIndex );
			// 	$scope.validateAndSave();
			// }

		}
	]
);