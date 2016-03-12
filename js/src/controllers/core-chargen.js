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
			var itemType = "chargen";
			var itemName = "Character";



			$translate([
				'APP_TITLE', 'INDEX_BUTTON_CORE_CHAR'
			]).then(
				function (translation) {

					$rootScope.title_tag = translation.INDEX_BUTTON_CORE_CHAR + " | " + translation.APP_TITLE;
					$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_CHAR;
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
				$scope.savageCharacter.loadJSON( localStorage[ currentItemLocalStorageVariable ] );
			}



			$scope.charGenAttributes = $scope.savageCharacter.attributes;
			$scope.validateAndSave = function() {
				$scope.savageCharacter.validate();
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.saveJSON();
			}
			$scope.justSave = function() {
				localStorage[currentItemLocalStorageVariable] = $scope.savageCharacter.saveJSON();
			}
		}
	]
);