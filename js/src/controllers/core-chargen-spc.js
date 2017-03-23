var coreChargenSPCFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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

			$scope.SPCSelectedPowerLevel = $rootScope.savageCharacter.getSPCSelectedPowerLevel();
			$scope.SPCPowerLevels = $rootScope.savageCharacter.getSPCPowerLevels();
			$scope.SPCRisingStars = $rootScope.savageCharacter.getSPCRisingStars();

			$scope.savageWorldsSPCPowers = savageWorldsSPCPowers;
			$scope.selectedSPCPower = savageWorldsSPCPowers[0];
		}

		$scope.init();

		$scope.setRisingStars = function(powerLevel) {
			$rootScope.savageCharacter.setSPCRisingStars( powerLevel );
			$rootScope.validateAndSave();
		}

		$scope.setCampaignPowerLevel = function(powerLevel) {
			$rootScope.savageCharacter.setSPCCampaignPowerLevel( powerLevel );
			$rootScope.validateAndSave();
		}

		$scope.addSPCPower = function() {
			$rootScope.savageCharacter.addSPCPower( $scope.selectedSPCPower.id );
			$rootScope.validateAndSave();
		}


		$scope.incrementSPCPowerLevel = function( powerIndex ) {
			$rootScope.savageCharacter.incrementSPCPowerLevel( powerIndex );

			$rootScope.validateAndSave();
			return;
		}

		$scope.decrementSPCPowerLevel = function( powerIndex ) {
			$rootScope.savageCharacter.decrementSPCPowerLevel( powerIndex );
			$rootScope.validateAndSave();
			return;
		}

		$scope.removeSPCPower = function( powerIndex ) {
			$rootScope.savageCharacter.getSelectedSPCPowers().splice( powerIndex, 1)
			$rootScope.validateAndSave();
		}


		$scope.isAnArray = function(val){
			if(  typeof(val) == "object" || typeof(val) == "object")
			 	return true;
			else {
				return false;
			}
		};

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenSPC",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenSPCFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenSPC",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenSPCFunctions
	]
);
