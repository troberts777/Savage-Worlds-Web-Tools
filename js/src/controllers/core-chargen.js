angular.module("baseApp").controller(
	"coreChargenController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		function ($rootScope, $translate, $scope, $location, $route) {
			$rootScope.showChargenMenu = true;
			var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_chargen";
			var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.chargen";
			var optionsLocalStorageVariable = "com.jdg.swwt2.options.chargen";
			var itemType = "character";

			$scope.$route = $route;

			$scope.init = function() {
				$translate([
					'APP_TITLE', 'INDEX_BUTTON_CORE_CHAR', 'CHARGEN_SPECIALIZATION_PLACEHOLDER', 'CHARGEN_HINDRANCE_SPECIFY_PLACEHOLDER'
				]).then(
					function (translation) {

						$rootScope.title_tag = translation.INDEX_BUTTON_CORE_CHAR + " | " + translation.APP_TITLE;
						$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_CHAR;
						$scope.specializionPlaceholder = translation.CHARGEN_SPECIALIZATION_PLACEHOLDER;
						$scope.hindranceSpecificationPlaceholder = translation.CHARGEN_HINDRANCE_SPECIFY_PLACEHOLDER;


					}
				);

				localizeDiceValues();


				$scope.savageCharacter = new savageCharacter( localStorage["users_preferred_language"] );

				if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
					$scope.savageCharacter.importJSON( localStorage[ currentItemLocalStorageVariable ] );
				}


				$scope.charGenAttributes = $scope.savageCharacter.attributes;


				$scope.addEdgeTag = $scope.savageCharacter.availableEdges[0];
				$scope.addHindranceTag = $scope.savageCharacter.availableHindrances[0];
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
			}

			$scope.init();

			$scope.validateAndSave = function() {
				$scope.savageCharacter.validate();
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.exportJSON();
			}
			$scope.justSave = function() {
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.exportJSON();
			}

			$scope.newPowerDialog = function() {
				$scope.propogatePowerDialog(-1);
				$rootScope.closeDialogs();
				$scope.propogatePowerDialog(-1);
				$scope.addEditPowerDialogOpen = true;
			}

			$scope.editPowerDialog = function(powerIndex) {

				$scope.propogatePowerDialog(powerIndex);
				$rootScope.closeDialogs();
				$scope.propogatePowerDialog(powerIndex);
				$scope.addEditPowerDialogOpen = true;
			}


			$scope.propogatePowerDialog = function (indexNumber) {

				if( indexNumber > -1 ) {
					$scope.editingPowerIndex = indexNumber;
					$scope.editingPower = $scope.savageCharacter.selectedPowers[indexNumber];

				} else {
					for( availablePowersC = 0; availablePowersC < $scope.savageCharacter.availablePowers.length; availablePowersC++) {
						$scope.savageCharacter.availablePowers[ availablePowersC ].trapping = $scope.savageCharacter.availableTrappings[0];
						$scope.savageCharacter.availablePowers[ availablePowersC ].customName = "";
					}

					$scope.editingPowerIndex = -1;
					$scope.editingPower = $scope.savageCharacter.availablePowers[0];
				}

			}

			$scope.addPower = function( editPower, editPowerName) {
				$scope.savageCharacter.addPower(
					editPower.bookObj.id,
					editPower.tag,
					editPower.trapping.bookObj.id,
					editPower.trapping.tag,
					editPower.customName
				);

				$scope.validateAndSave();
				$rootScope.closeDialogs();
			}

			$scope.savePower = function(editPowerTrapping, editPower, editPowerName) {

				$scope.validateAndSave();
				$rootScope.closeDialogs();

			}


			$scope.removePower = function(powerIndex) {
				$translate([
					'CREATOR_DELETE_POWER_CONFIRMATION'
				]).then(
					function (translation) {
						$scope.confirmDialog(
							translation.CREATOR_DELETE_POWER_CONFIRMATION,
							function() {
								$scope.showConfirmDialog = false;
								$scope.savageCharacter.removePower(powerIndex);
								$scope.validateAndSave();
							}
						);
					}
				);


			}

			$rootScope.closeDialogs = function() {
				$rootScope.newDialogOpen = false;
				$rootScope.loadDialogOpen = false;
				$rootScope.saveDialogOpen = false;
				$rootScope.importDialogOpen = false;
				$scope.addEditPowerDialogOpen = false;
				$rootScope.exportDialogOpen = false;
				$rootScope.optionsDialogOpen = false;
				$scope.validationDialogOpen = false;

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
				$scope.save_as_name = $scope.savageCharacter.name;
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
				$scope.exportBBCode = $scope.savageCharacter.exportBBCode();
				$scope.exportJSON = $scope.savageCharacter.exportJSON(true);
				$rootScope.closeDialogs();
				$rootScope.exportDialogOpen = true;
			}
			$rootScope.optionsDialog = function() {
				$rootScope.closeDialogs();
				$rootScope.optionsDialogOpen = true;
			}

			$rootScope.makePDF = function() {
				console.log( "makePDF called");
				chargenPDFObject = new chargenPDF( $scope.savageCharacter);
				chargenPDFObject.createBasicLandscapePDF();
				//chargenPDFObject.createBasicPortraitPDF();
				chargenPDFObject.currentDoc.output('dataurlnewwindow');
				//chargenPDFObject.currentDoc.output('save', $scope.savageCharacter.name + '.pdf');
				console.log( "makePDF ended");
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

			$scope.updateBook = function( book_id ) {
				$scope.validateAndSave();
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

			$scope.showValidationReport = function() {
				$rootScope.closeDialogs();
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

			$scope.setAttribute = function( attributeName, diceID) {
				//console.log( "setAttribute", attributeName, diceID);
				$scope.savageCharacter.setAttribute(attributeName, diceID);
				$scope.validateAndSave();
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

				$rootScope.closeDialogs();
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

			$scope.addEdge = function( ){
				if( $scope.addEdgeTag.tag ) {
					$scope.savageCharacter.addEdge( $scope.addEdgeTag.book, $scope.addEdgeTag.tag);
					$scope.validateAndSave();
					$scope.addEdgeTag = $scope.savageCharacter.availableEdges[0];
					$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
				}

			}

			$scope.addHindrance = function( ){
				if( $scope.addHindranceTag.tag ) {
					$scope.savageCharacter.addHindrance( $scope.addHindranceTag.book, $scope.addHindranceTag.tag);
					$scope.validateAndSave();

					$scope.addHindranceTag = $scope.savageCharacter.availableHindrances[0];
					$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
				}


			}

			$scope.removeEdgeByTag = function( edgeTag ){
				if( edgeTag ) {
					$scope.savageCharacter.removeEdgeByTag( edgeTag );
					$scope.validateAndSave();
					$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
				}
			}

			$scope.removeHindranceByTag = function( hindranceTag ){
				if( hindranceTag ) {
					$scope.savageCharacter.removeHindranceByTag( hindranceTag );
					$scope.validateAndSave();
					$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
				}
			}

			$scope.addPerk = function( ){
				if( $scope.addPerkTag.tag != "null" ) {
					$scope.savageCharacter.addPerk( $scope.addPerkTag.tag);
					$scope.validateAndSave();
					$scope.addPerkTag = $scope.savageCharacter.perkOptions[0];
				}

			}

			$scope.removePerkByTag = function( perkTag ){
				if( perkTag ) {
					$scope.savageCharacter.removePerk( perkTag );
					$scope.validateAndSave();
				}
			}

			$scope.setArcaneBackground = function(abTag) {
				$scope.savageCharacter.setArcaneBackground(abTag.tag);
				$scope.validateAndSave();
			}


			$scope.openGearDialog = function() {
				$location.path( "/core/character-maker-gear" );
			}

			$scope.openAdvancementsDialog = function() {
				console.log("openAdvancementsDialog() called");
				$location.path( "/core/character-maker-advancements" );
			}

			$scope.closePageDialog = function() {
				$location.path( "/core/character-maker" );
			}

			$scope.setXP = function(xpValue) {
				console.log( "setXP", xpValue);
				$scope.savageCharacter.setXP(xpValue.value);
				$scope.validateAndSave();
			}

			$scope.buyMundane = function( bookID, gearTag, forFree) {
			//	console.log( "buyMundane", bookID, gearTag, forFree);
				if( forFree == true)
					itemCost = 0;
				else
					itemCost = -1;
				$scope.savageCharacter.addGearMundane( bookID, gearTag, itemCost );
				$scope.validateAndSave();
			}

			$scope.removeMundane = function( indexItem ) {
			//	console.log( "removeMundane", indexItem);
				$scope.savageCharacter.removeMundane( indexItem );
				$scope.validateAndSave();
			}


			$scope.buyArmor = function( bookID, gearTag, forFree) {
			//	console.log( "buyArmor", bookID, gearTag, forFree);
				if( forFree == true)
					itemCost = 0;
				else
					itemCost = -1;
				$scope.savageCharacter.addGearArmor( bookID, gearTag, itemCost );
				$scope.validateAndSave();
			}

			$scope.removeArmor = function( indexItem ) {
			//	console.log( "removeArmor", indexItem);
				$scope.savageCharacter.removeArmor( indexItem );
				$scope.validateAndSave();
			}

			$scope.buyWeapon = function( bookID, gearTag, forFree) {
			//	console.log( "buyWeapon", bookID, gearTag, forFree);
				if( forFree == true)
					itemCost = 0;
				else
					itemCost = -1;
				$scope.savageCharacter.addGearWeapon( bookID, gearTag, itemCost );
				$scope.validateAndSave();
			}

			$scope.removeWeapon = function( indexItem ) {
			//	console.log( "removeWeapon", indexItem);
				$scope.savageCharacter.removeWeapon( indexItem );
				$scope.validateAndSave();
			}

			$scope.equipPrimaryWeapon = function( indexItem ) {

				$scope.savageCharacter.equipPrimaryWeapon( indexItem );
				$scope.validateAndSave();
			}

			$scope.equipSecondaryWeapon = function( indexItem ) {

				$scope.savageCharacter.equipSecondaryWeapon( indexItem );
				$scope.validateAndSave();
			}

			$scope.unequipWeapon = function( indexItem ) {

				$scope.savageCharacter.unequipWeapon( indexItem );
				$scope.validateAndSave();
			}

			$scope.buyShield = function( bookID, gearTag, forFree) {
			//	console.log( "buyShield", bookID, gearTag, forFree);
				if( forFree == true)
					itemCost = 0;
				else
					itemCost = -1;
				$scope.savageCharacter.addGearShield( bookID, gearTag, itemCost );
				$scope.validateAndSave();
			}

			$scope.removeShield = function( indexItem ) {
			//	console.log( "removeShield", indexItem);
				$scope.savageCharacter.removeShield( indexItem );
				$scope.validateAndSave();
			}


			$scope.equipPrimaryShield = function( indexItem ) {

				$scope.savageCharacter.equipPrimaryShield( indexItem );
				$scope.validateAndSave();
			}

			$scope.equipSecondaryShield = function( indexItem ) {

				$scope.savageCharacter.equipSecondaryShield( indexItem );
				$scope.validateAndSave();
			}

			$scope.unequipShield = function( indexItem ) {

				$scope.savageCharacter.unequipShield( indexItem );
				$scope.validateAndSave();
			}

			$scope.unequipArmor = function( indexItem ) {
				$scope.savageCharacter.unequipArmor( indexItem );
				$scope.validateAndSave();
			}

			$scope.equipArmor = function( indexItem ) {
				$scope.savageCharacter.equipArmor( indexItem );
				$scope.validateAndSave();
			}

			$scope.setDroppedDuringCombat = function( itemType, indexItem, setValue ) {
				console.log(  "setDroppedDuringCombat", itemType, indexItem, setValue );
				if( setValue )
					$scope.savageCharacter.setDroppedDuringCombat( itemType, indexItem );
				else
					$scope.savageCharacter.setUsedDuringCombat( itemType, indexItem );
				$scope.validateAndSave();
			}

			// $scope.setUsedDuringCombat = function( itemType, indexItem ) {

			// 	$scope.validateAndSave();
			// }

			// $scope.removeSpecialtyAtIndex = function( skillID, specialtyIndex ) {
			// 	console.log( "removeSpecialtyAtIndex", skillID, specialtyIndex );
			// 	$scope.savageCharacter.removeSpecialtyAtIndex( skillID, specialtyIndex );
			// 	$scope.validateAndSave();
			// }

		}
	]
);
