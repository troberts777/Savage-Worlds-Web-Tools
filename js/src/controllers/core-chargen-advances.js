var coreChargenAdvancesFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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

			$scope.selectedXP = $rootScope.savageCharacter.getXP();
		}

		$scope.init();

		$scope.setXP = function(xpValue) {
			$rootScope.savageCharacter.setXP(xpValue.value);
			$rootScope.validateAndSave();
		}

		$scope.setAdvancementType = function(advIndex, advTag ) {
			$rootScope.savageCharacter.setAdvancementType(advIndex, advTag);
			$rootScope.validateAndSave();
		}

		$scope.setAdvancementOption1 = function(advIndex, advTag, advBook ) {
			specifyName = null;
			if( advTag && advTag.name )
				specifyName = advTag.name;
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
						skillItem.value + skillItem.boost >= $rootScope.savageCharacter.getAttributes()[ skillItem.attribute ]
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
						skillItem.value + skillItem.boost < $rootScope.savageCharacter.getAttributeDisplayValues()[ skillItem.attribute ].id

					)


				) {
					return true;
				} else {
					return false;
				}
			}
		}


	}
;

angular.module("webApp").controller(
	"controllerCoreChargenAdvances",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenAdvancesFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenAdvances",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenAdvancesFunctions
	]
);
