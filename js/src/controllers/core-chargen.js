var corechargenFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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
			$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;

			$scope.gearAddedMessage = "";
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


		$scope.makeRange = function(min, max, step) {
			step = step || 1;
			var input = [];
			for (var i = min; i <= max; i += step) {
			    input.push(i);
			}
			return input;
		};
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

		$scope.perkVisible = function( currentPerk ) {
			if(
				currentPerk.spcOnly == true
					&&
				$scope.savageCharacter.secondMajorHindranceChosen == false
			) {
				return false;
			} else {
				return true;
			}
		}

		$scope.updateSettingRule = function( settingTag ) {
			// settingTag is not really used, but it's nice to know what's clicked for debugging.
			// console.log( "updateSettingRule", settingTag );
			$scope.validateAndSave();
		}

		$scope.addPower = function( editPower ) {
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

		$scope.savePower = function( editPower ) {

			$scope.savageCharacter.selectedPowers[ $scope.editingPowerIndex ] = editPower;

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

		$rootScope.clearGearLog = function() {
			$scope.gearAddedMessage = "";
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
			// $scope.gearDialogOpen = false;
			// $scope.armorDialogOpen = false;
			// $scope.rangedWeaponDialogOpen = false;
			// $scope.handWeaponDialogOpen = false;
			$scope.showNotifyDialog = false;
		}

		// $rootScope.rangedWeaponDialog = function() {

		// 	$rootScope.closeDialogs();
		// 	$scope.rangedWeaponDialogOpen = true;
		// }

		// $rootScope.handWeaponDialog = function() {

		// 	$rootScope.closeDialogs();
		// 	$scope.handWeaponDialogOpen = true;
		// }

		//$rootScope.armorDialog = function() {

			// $rootScope.closeDialogs();
			// $scope.armorDialogOpen = true;
		//}

		// $rootScope.gearDialog = function() {

		// 	$rootScope.closeDialogs();
		// 	$scope.gearDialogOpen = true;
		// }

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
			$location.path( "core/character-maker-char-info" );
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
			chargenPDFObject = new chargenPDF( $scope.savageCharacter );

			// if a cordova Application
			document.addEventListener('deviceready', function () {
				if( $scope.savageCharacter.name  != "" )
					fileName = $scope.savageCharacter.name.toLowerCase().replace(" ", "-").replace("'", "").replace("\"", "") + ".SWT.pdf";
				else
					fileName = "Nameless.SWT.pdf";
				if( $cordovaFile) {

					if( localStorage["users_chargen_pdf_layout"] == "landscape")
						chargenPDFObject.createBasicLandscapePDF();
					else
						chargenPDFObject.createBasicPortraitPDF();

					var pdfOutput = chargenPDFObject.currentDoc.output();
					if( cordova.file ) {
						if( cordova.file.documentsDirectory )
							saveDirectory = cordova.file.documentsDirectory; 	// iOS, OS/X, Probably Windows
						else if( cordova.file.syncedDataDirectory )
							saveDirectory = cordova.file.syncedDataDirectory;	// Possibly Windows
						else
							saveDirectory = cordova.file.externalDataDirectory;	// Android....


						$cordovaFile.writeFile(saveDirectory, fileName, pdfOutput, true)
						.then(function (success) {
							// console.log( "Saved file successfully.");
							console.log( "saveDirectory:" +  saveDirectory);
							console.log( "fileName: " + fileName);
							if( cordova.plugins && cordova.plugins.fileOpener2 ) {
								try {
									cordova.plugins.fileOpener2.open(
									    saveDirectory + fileName,
									    'application/pdf',
									    {
									        error : function(e) {
									            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
												console.log( "Could not open file - no default PDF viewer?");
												$scope.notificationDialog( "Your file has been saved at '" + saveDirectory.replace("file://", "") + fileName + "'");
									        },
									        success : function () {
									          //  console.log('file opened successfully');
									        }
									    }
									);
								}
								catch( e ) {
						            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
									console.log( "Could not open file - no default PDF viewer?");
									$scope.notificationDialog( "Your file has been saved at '" + saveDirectory.replace("file://", "") + fileName + "'");
								}
							} else {
								console.log( "cordova.plugins.fileOpener2 was not found" );
								$scope.notificationDialog( "Your file has been saved at '" + saveDirectory.replace("file://", "") + fileName + "'");
							}
						}, function (error) {
						// error
							console.log( "Could not save file.");
							console.log( "saveDirectory:" +  saveDirectory);
							console.log( "fileName: " + fileName);
						});
					} else {
						console.log( "ERROR: cordova.file is not defined!!");
					}
				}


			});

			// if just a standard browser
			if( !$cordovaFile) {
				if( localStorage["users_chargen_pdf_layout"] == "landscape")
					chargenPDFObject.createBasicLandscapePDF();
				else
					chargenPDFObject.createBasicPortraitPDF();
				chargenPDFObject.currentDoc.output('dataurlnewwindow');
				//chargenPDFObject.currentDoc.output('save', $scope.savageCharacter.name + '.pdf');
			}

			console.log( "makePDF ended");
		}


		$scope.loadItem = function( load_item ) {
			$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
			if( $scope.saved_items[ load_item ] )
				localStorage[ currentItemLocalStorageVariable ] = $scope.saved_items[ load_item ].data;
			$location.path( "core/character-maker-char-info" );
			$rootScope.closeDialogs();
			$scope.init();
		}

		$scope.clearCurrent = function(  ) {

			localStorage[ currentItemLocalStorageVariable ] = "";
			$rootScope.closeDialogs();
			$location.path( "core/character-maker-welcome" );
			$scope.init();
		}

		$scope.goToCharInfo = function(  ) {

			localStorage[ currentItemLocalStorageVariable ] = "";
			$rootScope.closeDialogs();
			$location.path( "core/character-maker-char-info" );
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

		$scope.dialogMessage = "";
		$scope.notificationDialog = function( dialogMessage ) {
			$scope.dialogMessage = dialogMessage;
			$scope.showNotifyDialog = true;
		}

		$scope.showValidationReport = function() {
			$rootScope.closeDialogs();
			$scope.validationDialogOpen = true;
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

		$scope.setAttribute = function( attributeName, diceID) {

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
			$scope.savageCharacter.updateSpecialtySkillName( skillID, specialtyIndex, updatedName );
			//$scope.validateAndSave();
		}

		$scope.addEdge = function( ){
			if( $scope.addEdgeTag.tag ) {
				$scope.savageCharacter.addEdge( $scope.addEdgeTag.book, $scope.addEdgeTag.tag);
				$scope.validateAndSave();
				$scope.addEdgeTag = $scope.savageCharacter.availableEdges[0];
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;
			}

		}

		$scope.addHindrance = function( ){
			if( $scope.addHindranceTag.tag ) {
				$scope.savageCharacter.addHindrance( $scope.addHindranceTag.book, $scope.addHindranceTag.tag);
				$scope.validateAndSave();

				$scope.addHindranceTag = $scope.savageCharacter.availableHindrances[0];
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;
			}


		}

		$scope.removeEdgeByTag = function( edgeTag ){
			if( edgeTag ) {
				$scope.savageCharacter.removeEdgeByTag( edgeTag );
				$scope.validateAndSave();
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;
			}
		}

		$scope.removeHindranceByTag = function( hindranceTag ){
			if( hindranceTag ) {
				$scope.savageCharacter.removeHindranceByTag( hindranceTag );
				$scope.validateAndSave();
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;
			}
		}

		$scope.addPerk = function( ){
			if( $scope.addPerkTag != "null" ) {
				$scope.savageCharacter.addPerk( $scope.addPerkTag);
				$scope.validateAndSave();
				$scope.addPerkTag = $scope.savageCharacter.perkOptions[0].tag;
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
			$scope.validateAndSave();
		}


		// $scope.openGearDialog = function() {
		// 	$location.path( "/core/character-maker-gear" );
		// }

		// $scope.openGearDialog = function() {
		// 	$location.path( "/core/character-maker-weapons" );
		// }

		// $scope.openGearDialog = function() {
		// 	$location.path( "/core/character-maker-armor" );
		// }

		$scope.openAdvancementsDialog = function() {
			$location.path( "/core/character-maker-advancements" );
		}

		$scope.closePageDialog = function() {
			$location.path( "/core/character-maker" );
		}

		$scope.setXP = function(xpValue) {
			$scope.savageCharacter.setXP(xpValue.value);
			$scope.validateAndSave();
		}

		$scope.setAdvancementType = function(advIndex, advTag ) {
			$scope.savageCharacter.setAdvancementType(advIndex, advTag);
			$scope.validateAndSave();
		}

		$scope.filterNewSkill = function( currentItem ) {

			return function( skillItem ) {
				if(
					(
						!skillItem.is_specialty
							&&
						skillItem.showSkill
					)
						&&
					(
						skillItem.value + skillItem.boost == 0
							||
						skillItem.specify > 0
					)
						||
					skillItem.id == 'undefined'
						||
					(
						currentItem
							&&
						currentItem.id == skillItem.id
						 	&&
						!skillItem.is_specialty
					)
				) {
					return true;
				} else {
					return false;
				}
			}
		}

		$scope.filterRaiseSkill = function( currentItem ) {
			return function (skillItem) {
				if(
					skillItem
						&&
					currentItem
						&&
					currentItem.id == skillItem.id
						||
					skillItem.id == 'undefined'
						||
					(
						!skillItem.specify
							&&
						skillItem.value + skillItem.boost
							&&
						skillItem.value + skillItem.boost >= $scope.savageCharacter.attributes[ skillItem.attribute ]
					)

				) {
					return true;
				} else {
					return false;
				}
			}
		}

		$scope.filterLowerSkill = function( currentItem, otherOption ) {
			return function (skillItem) {
				if(
					skillItem
						&&
					currentItem
						&&
					currentItem.id == skillItem.id
						||
					skillItem.id == 'undefined'
						||
					(
						!skillItem.specify
							&&
						skillItem.value + skillItem.boost > 0
							&&
						skillItem.value + skillItem.boost < $scope.savageCharacter.attributes[ skillItem.attribute ]
						// 	&&
						// skillItem.id != otherOption.id
					)
					// 	||
					// (
					// 	skillItem.specify
					// 		&&
					// 	skillItem.value + skillItem.boost > 0
					// 		&&
					// 	skillItem.value + skillItem.boost < $scope.savageCharacter.attributes[ skillItem.attribute ]
					// 		&&
					// 	skillItem.specify != otherOption.specify
					// )

				) {
					return true;
				} else {
					return false;
				}
			}
		}

		$scope.setAdvancementOption1 = function(advIndex, advTag, advBook ) {
			specifyName = null;
			if( advTag && advTag.name )
				specifyName = advTag.name;
			//console.log( "setAdvancementOption1 = function(" , advIndex, advTag, specifyName, advBook );
			$scope.savageCharacter.setAdvancementOption1(advIndex, advTag, specifyName, advBook);
			$scope.validateAndSave();
		}

		$scope.setAdvancementOption2 = function(advIndex, advTag, advBook ) {
			specifyName = null;
			if( advTag && advTag.name )
				specifyName = advTag.name;
			else
				if( advTag )
					specifyName = advTag;
			$scope.savageCharacter.setAdvancementOption2(advIndex, advTag, specifyName, advBook);
			$scope.validateAndSave();
		}


		$scope.buyMundane = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$scope.savageCharacter.addGearMundane( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$scope.validateAndSave();
		}

		$scope.removeMundane = function( indexItem ) {
			$scope.savageCharacter.removeMundane( indexItem );
			$scope.validateAndSave();
		}

		$scope.showItemAdded = function() {
			$scope.showAddedMessage = true;
			$timeout( function() {
					$scope.showAddedMessage = false;
				},
				2000
			);
		}

		$scope.buyArmor = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$scope.savageCharacter.addGearArmor( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$scope.validateAndSave();
		}

		$scope.removeArmor = function( indexItem ) {
			$scope.savageCharacter.removeArmor( indexItem );
			$scope.validateAndSave();
		}

		$scope.buyHandWeapon = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$scope.savageCharacter.addGearHandWeapon( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$scope.validateAndSave();
		}


		$scope.buyRangedWeapon = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$scope.savageCharacter.addGearRangedWeapon( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$scope.validateAndSave();
		}

		$scope.removeHandWeapon = function( indexItem ) {
			$scope.savageCharacter.removeHandWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.removeRangedWeapon = function( indexItem ) {
			$scope.savageCharacter.removeRangedWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.equipPrimaryHandWeapon = function( indexItem ) {

			$scope.savageCharacter.equipPrimaryHandWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.equipPrimaryRangedWeapon = function( indexItem ) {

			$scope.savageCharacter.equipPrimaryRangedWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.equipSecondaryHandWeapon = function( indexItem ) {

			$scope.savageCharacter.equipSecondaryHandWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.equipSecondaryRangedWeapon = function( indexItem ) {

			$scope.savageCharacter.equipSecondaryRangedWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.unequipHandWeapon = function( indexItem ) {

			$scope.savageCharacter.unequipHandWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.unequipRangedWeapon = function( indexItem ) {

			$scope.savageCharacter.unequipRangedWeapon( indexItem );
			$scope.validateAndSave();
		}

		$scope.buyShield = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$scope.savageCharacter.addGearShield( bookID, gearTag, itemCost );
			$scope.validateAndSave();
		}

		$scope.removeShield = function( indexItem ) {
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
			if( setValue )
				$scope.savageCharacter.setDroppedDuringCombat( itemType, indexItem );
			else
				$scope.savageCharacter.setUsedDuringCombat( itemType, indexItem );
			$scope.validateAndSave();
		}



	}
;
// var cordovachargenArray = Array();
// angular.extend( cordovachargenArray, corechargenArray );
// cordovachargenArray.unshift('$cordovaFile');

angular.module("webApp").controller(
	"coreChargenController",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		corechargenFunctions
	]
);

angular.module("cordovaApp").controller(
	"coreChargenController",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		corechargenFunctions
	]
);
