var coreChargenGearFunctions = function ($timeout, $rootScope, $translate, $scope, $location, $route, $cordovaFile ) {
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

		$rootScope.clearGearLog = function() {
			$scope.gearAddedMessage = "";
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

		$scope.init();

	}
;

angular.module("webApp").controller(
	"controllerCoreChargenGear",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',

		coreChargenGearFunctions
	]
);

angular.module("cordovaApp").controller(
	"controllerCoreChargenGear",
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$scope',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenGearFunctions
	]
);
