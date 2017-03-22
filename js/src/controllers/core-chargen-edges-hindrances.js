var controllerCoreChargenEdgesHindrancesFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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


			if( !localStorage["users_chargen_pdf_layout"] || localStorage["users_chargen_pdf_layout"] == "")
				localStorage["users_chargen_pdf_layout"] = "landscape";


			$rootScope.savageCharacter = new savageCharacter( localStorage["users_preferred_language"] );

			if( typeof(localStorage[ currentItemLocalStorageVariable ]) != "undefined" ) {
				$rootScope.savageCharacter.importJSON( localStorage[ currentItemLocalStorageVariable ] );
			}

			$scope.charGenAttributes = $rootScope.savageCharacter.attributes;

			$scope.addEdgeTag = $rootScope.savageCharacter.getAvailableEdges()[0];
			$scope.addHindranceTag = $rootScope.savageCharacter.getAvailableHindrances()[0];
			$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;

			$scope.gearAddedMessage = "";

			$scope.savageWorldsSPCPowers = savageWorldsSPCPowers;

			$scope.selectedSPCPower = savageWorldsSPCPowers[0];

			$scope.startingWealth = $rootScope.savageCharacter.getStartingFunds();
		}

		$scope.init();


		$scope.addEdge = function( ){
			if( $scope.addEdgeTag.tag ) {
				$rootScope.savageCharacter.addEdge( $scope.addEdgeTag.book, $scope.addEdgeTag.tag);
				$rootScope.validateAndSave();
				$scope.addEdgeTag = $rootScope.savageCharacter.getAvailableEdges()[0];
				$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;
			}

		}

		$scope.addHindrance = function( ){
			if( $scope.addHindranceTag.tag ) {
				$rootScope.savageCharacter.addHindrance( $scope.addHindranceTag.book, $scope.addHindranceTag.tag);
				$rootScope.validateAndSave();

				$scope.addHindranceTag = $rootScope.savageCharacter.getAvailableHindrances()[0];
				$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;
			}


		}

		$scope.removeEdgeByTag = function( edgeTag ){
			if( edgeTag ) {
				$rootScope.savageCharacter.removeEdgeByTag( edgeTag );
				$rootScope.validateAndSave();
				$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;
			}
		}

		$scope.removeHindranceByTag = function( hindranceTag ){
			if( hindranceTag ) {
				$rootScope.savageCharacter.removeHindranceByTag( hindranceTag );
				$rootScope.validateAndSave();
				$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;
			}
		}

		$scope.addPerk = function( ){
			if( $scope.addPerkTag != "null" ) {
				$rootScope.savageCharacter.addPerk( $scope.addPerkTag);
				$rootScope.validateAndSave();
				$scope.addPerkTag = $rootScope.savageCharacter.getPerkOptions()[0].tag;
			}

		}

		$scope.removePerkByTag = function( perkTag ){
			if( perkTag ) {
				$rootScope.savageCharacter.removePerk( perkTag );
				$rootScope.validateAndSave();
			}
		}
		$scope.perkVisible = function( currentPerk ) {
			if(
				currentPerk.spcOnly == true
					&&
				$rootScope.savageCharacter.secondMajorHindranceChosen() == false
			) {
				return false;
			} else {
				return true;
			}
		}

/*
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

		$scope.addSPCPower = function() {
			$rootScope.savageCharacter.addSPCPower( $scope.selectedSPCPower.id );
			$rootScope.validateAndSave();
		}

		$scope.propogatePowerDialog = function (indexNumber) {

			if( indexNumber > -1 ) {
				$scope.editingPowerIndex = indexNumber;
				$scope.editingPower = $rootScope.savageCharacter.selectedPowers[indexNumber];

			} else {
				for( availablePowersC = 0; availablePowersC < $rootScope.savageCharacter.availablePowers.length; availablePowersC++) {
					$rootScope.savageCharacter.availablePowers[ availablePowersC ].trapping = $rootScope.savageCharacter.availableTrappings[0];
					$rootScope.savageCharacter.availablePowers[ availablePowersC ].customName = "";
				}

				$scope.editingPowerIndex = -1;
				$scope.editingPower = $rootScope.savageCharacter.availablePowers[0];
			}

		}





		$scope.updateSettingRule = function( settingTag ) {
			// settingTag is not really used, but it's nice to know what's clicked for debugging.
			// console.log( "updateSettingRule", settingTag );
			$rootScope.validateAndSave();
		}

		$scope.addPower = function( editPower ) {
			$rootScope.savageCharacter.addPower(
				editPower.bookObj.id,
				editPower.tag,
				editPower.trapping.bookObj.id,
				editPower.trapping.tag,
				editPower.customName
			);

			$rootScope.validateAndSave();
			$rootScope.closeDialogs();
		}

		$scope.savePower = function( editPower ) {

			$rootScope.savageCharacter.selectedPowers[ $scope.editingPowerIndex ] = editPower;

			$rootScope.validateAndSave();
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
							$rootScope.savageCharacter.removePower(powerIndex);
							$rootScope.validateAndSave();
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
			$scope.save_as_name = $rootScope.savageCharacter.name;
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
			$scope.exportBBCode = $rootScope.savageCharacter.exportBBCode();
			$scope.exportHTMLCode = $rootScope.savageCharacter.exportHTMLCode();
			$scope.exportJSON = $rootScope.savageCharacter.exportJSON(true);
			$rootScope.closeDialogs();
			$rootScope.exportDialogOpen = true;
		}

		$rootScope.optionsDialog = function() {
			$rootScope.closeDialogs();
			$rootScope.optionsDialogOpen = true;
		}

		$rootScope.makePDF = function() {

			console.log( "makePDF called");
			chargenPDFObject = new chargenPDF( $rootScope.savageCharacter );

			// if a cordova Application
			document.addEventListener('deviceready', function () {
				if( $rootScope.savageCharacter.name  != "" )
					fileName = $rootScope.savageCharacter.name.toLowerCase().replace(" ", "-").replace("'", "").replace("\"", "") + ".SWT.pdf";
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
				//chargenPDFObject.currentDoc.output('save', $rootScope.savageCharacter.name + '.pdf');
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
			$rootScope.validateAndSave();
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

			$rootScope.savageCharacter.setAttribute(attributeName, diceID);
			$rootScope.validateAndSave();
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
				data:  $rootScope.savageCharacter.exportJSON()
			};
			return save_object;
		}

		$scope.incrementSkill = function( skillID ) {
			$rootScope.savageCharacter.incrementSkill( skillID );
			$rootScope.validateAndSave();
		}

		$scope.decrementSkill = function( skillID ) {
			$rootScope.savageCharacter.decrementSkill( skillID );
			$rootScope.validateAndSave();
		}
		$scope.addSpecialtySkill = function( skillID ) {
			$rootScope.savageCharacter.addSpecialtySkill( skillID );
			$rootScope.validateAndSave();
		}

		$scope.incrementSpecialtySkill = function( skillID, specialtyIndex ) {
			$rootScope.savageCharacter.incrementSpecialtySkill( skillID, specialtyIndex );
			$rootScope.validateAndSave();
		}

		$scope.decrementSpecialtySkill = function( skillID, specialtyIndex ) {
			$rootScope.savageCharacter.decrementSpecialtySkill( skillID, specialtyIndex );
			$rootScope.validateAndSave();
		}

		$scope.updateSpecialtySkillName = function( skillID, specialtyIndex, updatedName ) {
			$rootScope.savageCharacter.updateSpecialtySkillName( skillID, specialtyIndex, updatedName );
			//$rootScope.validateAndSave();
		}


		$scope.setArcaneBackground = function(abTag) {
			$rootScope.savageCharacter.setArcaneBackground(abTag.tag);
			$rootScope.validateAndSave();
			$rootScope.validateAndSave();
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
			$rootScope.savageCharacter.setXP(xpValue.value);
			$rootScope.validateAndSave();
		}

		$scope.setAdvancementType = function(advIndex, advTag ) {
			$rootScope.savageCharacter.setAdvancementType(advIndex, advTag);
			$rootScope.validateAndSave();
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
						skillItem.value + skillItem.boost >= $rootScope.savageCharacter.attributes[ skillItem.attribute ]
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
				//console.log( "#", skillItem.value + skillItem.boost ,skillItem.attribute, $rootScope.savageCharacter.displayAttributes[ skillItem.attribute ] )
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
						skillItem.value + skillItem.boost < $rootScope.savageCharacter.displayAttributes[ skillItem.attribute ].id
						// 	&&
						// skillItem.id != otherOption.id
					)
					// 	||
					// (
					// 	skillItem.specify
					// 		&&
					// 	skillItem.value + skillItem.boost > 0
					// 		&&
					// 	skillItem.value + skillItem.boost < $rootScope.savageCharacter.attributes[ skillItem.attribute ].value
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
			$rootScope.savageCharacter.setAdvancementOption1(advIndex, advTag, specifyName, advBook);
			$rootScope.validateAndSave();
		}

		$scope.setAdvancementOption2 = function(advIndex, advTag, advBook ) {
			specifyName = null;
			if( advTag && advTag.name )
				specifyName = advTag.name;
			else
				if( advTag )
					specifyName = advTag;
			$rootScope.savageCharacter.setAdvancementOption2(advIndex, advTag, specifyName, advBook);
			$rootScope.validateAndSave();
		}


		$scope.buyMundane = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$rootScope.savageCharacter.addGearMundane( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$rootScope.validateAndSave();
		}

		$scope.removeMundane = function( indexItem ) {
			$rootScope.savageCharacter.removeMundane( indexItem );
			$rootScope.validateAndSave();
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
			$rootScope.savageCharacter.addGearArmor( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$rootScope.validateAndSave();
		}

		$scope.removeArmor = function( indexItem ) {
			$rootScope.savageCharacter.removeArmor( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.buyHandWeapon = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$rootScope.savageCharacter.addGearHandWeapon( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$rootScope.validateAndSave();
		}


		$scope.buyRangedWeapon = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$rootScope.savageCharacter.addGearRangedWeapon( bookID, gearTag, itemCost );
			$scope.showItemAdded();
			$rootScope.validateAndSave();
		}

		$scope.removeHandWeapon = function( indexItem ) {
			$rootScope.savageCharacter.removeHandWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.removeRangedWeapon = function( indexItem ) {
			$rootScope.savageCharacter.removeRangedWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipPrimaryHandWeapon = function( indexItem ) {

			$rootScope.savageCharacter.equipPrimaryHandWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipPrimaryRangedWeapon = function( indexItem ) {

			$rootScope.savageCharacter.equipPrimaryRangedWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipSecondaryHandWeapon = function( indexItem ) {

			$rootScope.savageCharacter.equipSecondaryHandWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipSecondaryRangedWeapon = function( indexItem ) {

			$rootScope.savageCharacter.equipSecondaryRangedWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.unequipHandWeapon = function( indexItem ) {

			$rootScope.savageCharacter.unequipHandWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.unequipRangedWeapon = function( indexItem ) {

			$rootScope.savageCharacter.unequipRangedWeapon( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.buyShield = function( bookID, gearTag, forFree) {
			if( forFree == true)
				itemCost = 0;
			else
				itemCost = -1;
			$rootScope.savageCharacter.addGearShield( bookID, gearTag, itemCost );
			$rootScope.validateAndSave();
		}

		$scope.removeShield = function( indexItem ) {
			$rootScope.savageCharacter.removeShield( indexItem );
			$rootScope.validateAndSave();
		}


		$scope.equipPrimaryShield = function( indexItem ) {

			$rootScope.savageCharacter.equipPrimaryShield( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipSecondaryShield = function( indexItem ) {

			$rootScope.savageCharacter.equipSecondaryShield( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.unequipShield = function( indexItem ) {

			$rootScope.savageCharacter.unequipShield( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.unequipArmor = function( indexItem ) {
			$rootScope.savageCharacter.unequipArmor( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.equipArmor = function( indexItem ) {
			$rootScope.savageCharacter.equipArmor( indexItem );
			$rootScope.validateAndSave();
		}

		$scope.setDroppedDuringCombat = function( itemType, indexItem, setValue ) {
			if( setValue )
				$rootScope.savageCharacter.setDroppedDuringCombat( itemType, indexItem );
			else
				$rootScope.savageCharacter.setUsedDuringCombat( itemType, indexItem );
			$rootScope.validateAndSave();
		}

		$scope.incrementSPCPowerLevel = function( powerIndex ) {
			//console.log("incrementSPCPowerLevel", powerIndex);


			$rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel++;
			if( $rootScope.savageCharacter.selectedSPCPowers[powerIndex].max_level > 1 && $rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel >= $rootScope.savageCharacter.selectedSPCPowers[powerIndex].max_level) {
				$rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel = $rootScope.savageCharacter.selectedSPCPowers[powerIndex].max_level;
			}
			$rootScope.validateAndSave();
			return;
		}

		$scope.decrementSPCPowerLevel = function( powerIndex ) {
			//console.log("decrementSPCPowerLevel", powerIndex);
			$rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel--;
			if( $rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel < 1) {
				$rootScope.savageCharacter.selectedSPCPowers[powerIndex].selectedLevel = 1;
			}
			$rootScope.validateAndSave();
			return;
		}

		$scope.removeSPCPower = function( powerIndex ) {
			$rootScope.savageCharacter.selectedSPCPowers.splice( powerIndex, 1)
			$rootScope.validateAndSave();
		}

		$scope.getTypeOf = function(val){ return typeof val; };


		$scope.setStartingFunds = function( newValue ) {
			$rootScope.savageCharacter.setStartingFunds( newValue );
			$rootScope.validateAndSave();
		}

		$scope.isAnArray = function(val){
			if(  typeof(val) == "object" || typeof(val) == "object")
			 	return true;
			else {
				return false;
			}
		};

		$scope.isSwitchablePower = function(item){
		    // return function(item){
		      return item["switchable"] > 0;
		    // }
		};
*/
	}
;


angular.module("webApp").controller(
	"controllerCoreChargenEdgesHindrances",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		controllerCoreChargenEdgesHindrancesFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenEdgesHindrances",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		controllerCoreChargenEdgesHindrancesFunctions
	]
);
