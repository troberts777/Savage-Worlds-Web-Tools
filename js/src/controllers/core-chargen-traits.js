var coreChargenTraitsFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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

			$scope.diceValues = $rootScope.savageCharacter.getDiceValues();
			$scope.displayAttributes = $rootScope.savageCharacter.getAttributeDisplayValues();

		}

		$scope.init();

		$scope.setAttribute = function( attributeTag, newValue ) {
			$rootScope.savageCharacter.setAttribute( attributeTag, newValue );
			$rootScope.validateAndSave();
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
			$rootScope.justSave();
		}

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenTraits",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenTraitsFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenTraits",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenTraitsFunctions
	]
);
