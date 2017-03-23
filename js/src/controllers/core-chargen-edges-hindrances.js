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
