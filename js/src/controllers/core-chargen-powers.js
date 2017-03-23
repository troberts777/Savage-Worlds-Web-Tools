var coreChargenPowersFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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

			$scope.selectedArcaneBackground = $rootScope.savageCharacter.getSelectedArcaneBackground();

		}

		$scope.init();

		$scope.setArcaneBackground = function(abTag) {
			$rootScope.savageCharacter.setArcaneBackground(abTag.tag);
			$rootScope.validateAndSave();
			$rootScope.validateAndSave();
		}

		$scope.newPowerDialog = function() {
			$scope.propogatePowerDialog(-1);
			$rootScope.closeDialogs();
			$scope.propogatePowerDialog(-1);
			$rootScope.addEditPowerDialogOpen = true;
		}

		$scope.propogatePowerDialog = function (indexNumber) {

			if( indexNumber > -1 ) {
				$scope.editingPowerIndex = indexNumber;
				$scope.editingPower = $rootScope.savageCharacter.getSelectedPowers()[indexNumber];

			} else {
				for( availablePowersC = 0; availablePowersC < $rootScope.savageCharacter.getAvailablePowers().length; availablePowersC++) {
					$rootScope.savageCharacter.getAvailablePowers()[ availablePowersC ].trapping = $rootScope.savageCharacter.getAvailableTrappings()[0];
					$rootScope.savageCharacter.getAvailablePowers()[ availablePowersC ].customName = "";
				}

				$scope.editingPowerIndex = -1;
				$scope.editingPower = $rootScope.savageCharacter.getAvailablePowers()[0];
			}

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

			$rootScope.savageCharacter.setSelectedPower( $scope.editingPowerIndex, editPower );

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
							$rootScope.showConfirmDialog = false;
							$rootScope.savageCharacter.removePower(powerIndex);
							$rootScope.validateAndSave();
						}
					);
				}
			);

		}

		$scope.editPowerDialog = function(powerIndex) {

			$scope.propogatePowerDialog(powerIndex);
			$rootScope.closeDialogs();
			$scope.propogatePowerDialog(powerIndex);
			$rootScope.addEditPowerDialogOpen = true;
		}

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenPowers",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenPowersFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenPowers",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenPowersFunctions
	]
);
