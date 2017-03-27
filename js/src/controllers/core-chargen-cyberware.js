var coreChargenCyberwareFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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


		}

		$scope.init();


		$scope.addCommas = function( numericalValue ) {
			return addCommas( numericalValue );
		}

		$scope.installCyberware = function( cyberTag ) {
			$rootScope.savageCharacter.installCyberware( cyberTag );
			$rootScope.validateAndSave();
		}

		$scope.removeCyberware = function( cyberIndex ) {
			$rootScope.savageCharacter.removeCyberware( cyberIndex );
			$rootScope.validateAndSave();
		}

		$scope.setCyberOption1 = function( cyberIndex, newValue ) {
			$rootScope.savageCharacter.setCyberOption1( cyberIndex, newValue );
			$rootScope.validateAndSave();
		}

		$scope.setCyberOption2 = function( cyberIndex, newValue ) {
			$rootScope.savageCharacter.setCyberOption2( cyberIndex, newValue );
			$rootScope.validateAndSave();
		}

		$scope.setCyberOption3 = function( cyberIndex, newValue ) {
			$rootScope.savageCharacter.setCyberOption3( cyberIndex, newValue );
			$rootScope.validateAndSave();
		}

		$scope.setCyberCustomName = function( cyberIndex, newValue ) {
			$rootScope.savageCharacter.setCyberCustomName( cyberIndex, newValue );
			$rootScope.justSave();
		}

		$scope.setCombatEdge = function( cyberIndex, edgeObject ) {
			console.log("...",  cyberIndex, edgeObject);

			console.log("edgeObject.book", edgeObject.book);
			console.log("edgeObject.tag", edgeObject.tag);

			$rootScope.savageCharacter.setCyberEdge( cyberIndex, edgeObject.book, edgeObject.tag  );


			//~ $rootScope.savageCharacter.setCyberOption1( cyberIndex, edgeObject.book );
			//~ $rootScope.savageCharacter.setCyberOption2( cyberIndex, edgeObject.tag );
			$rootScope.validateAndSave();
		}


		//~ console.log("savageWorldsCyberware", savageWorldsCyberware);

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenCyberware",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenCyberwareFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenCyberware",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenCyberwareFunctions
	]
);
