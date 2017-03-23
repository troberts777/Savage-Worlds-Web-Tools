var coreChargenGlobalFunctions = function ($timeout, $rootScope, $translate, $location, $route, $cordovaFile ) {

	var currentItemLocalStorageVariable = "com.jdg.swwt2.tmp.current_chargen";
	var savedItemsLocalStorageVariable = "com.jdg.swwt2.saves.chargen";
	var optionsLocalStorageVariable = "com.jdg.swwt2.options.chargen";
	var itemType = "character";

	$rootScope.validateAndSave = function() {
		$rootScope.savageCharacter.validate();
		localStorage[currentItemLocalStorageVariable] = $rootScope.savageCharacter.exportJSON();
	}
	$rootScope.justSave = function() {
		localStorage[currentItemLocalStorageVariable] = $rootScope.savageCharacter.exportJSON();
	}

	$rootScope.closeDialogs = function() {
		$rootScope.newDialogOpen = false;
		$rootScope.loadDialogOpen = false;
		$rootScope.saveDialogOpen = false;
		$rootScope.importDialogOpen = false;
		$rootScope.addEditPowerDialogOpen = false;
		$rootScope.exportDialogOpen = false;
		$rootScope.optionsDialogOpen = false;
		$rootScope.validationDialogOpen = false;
		$rootScope.showNotifyDialog = false;
	}

	$rootScope.removeSavedItem = function( itemIndex ) {
		console.log( "rsi", itemIndex );
		$translate([
			'CREATOR_DELETION_CONFIRMATION'
		]).then(
			function (translation) {
				$rootScope.confirmDialog(
					translation.CREATOR_DELETION_CONFIRMATION,
					function() {
						$rootScope.showConfirmDialog = false;
						$rootScope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
						$rootScope.saved_items.splice( itemIndex, 1);
						localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $rootScope.saved_items );
					}
				);
			}
		);
	}

	$rootScope.closeConfirmDialog = function( ) {
		$rootScope.showConfirmDialog = false;
		// reset confirm to nothing...
		$rootScope.confirmDialogYes = function() {
			$rootScope.showConfirmDialog = false;
		}
	}

	$rootScope.confirmDialogYes = function() {
		// empty to be replaced...
		$rootScope.showConfirmDialog = false;
	}

	$rootScope.confirmDialogQuestion = "";

	$rootScope.confirmDialog = function( confirmationMessage, onYes ) {
		$rootScope.confirmDialogQuestion = confirmationMessage;
		$rootScope.showConfirmDialog = true;
		$rootScope.confirmDialogYes = onYes;
	}

	$rootScope.newDialog = function() {

		$rootScope.closeDialogs();
		$rootScope.newDialogOpen = true;
	}

	$rootScope.loadDialog = function() {

		if( !localStorage[ savedItemsLocalStorageVariable ])
			localStorage[ savedItemsLocalStorageVariable ] = "[]";

		$rootScope.load_item = 0;
		$rootScope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
		for( sic = 0; sic < $rootScope.saved_items.length; sic++) {
			$rootScope.saved_items[sic].datetime = new Date($rootScope.saved_items[sic].datetime);
		}

		$rootScope.closeDialogs();

		$rootScope.closeDialogs();
		$rootScope.loadDialogOpen = true;
	}
	$rootScope.saveDialog = function() {
		if( !localStorage[ savedItemsLocalStorageVariable ])
			localStorage[ savedItemsLocalStorageVariable ] = "[]";

		$rootScope.save_over = -1;
		$rootScope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
		for( sic = 0; sic < $rootScope.saved_items.length; sic++) {
			$rootScope.saved_items[sic].datetime = new Date($rootScope.saved_items[sic].datetime);
		}

		$rootScope.closeDialogs();
		$rootScope.save_as_name = $rootScope.savageCharacter.getName();
		$rootScope.saveDialogOpen = true;
	}
	$rootScope.importDialog = function() {
		$rootScope.importJSON = "";
		$rootScope.closeDialogs();
		$rootScope.importDialogOpen = true;
	}

	$rootScope.clearCurrent = function(  ) {

		localStorage[ currentItemLocalStorageVariable ] = "";
		$rootScope.closeDialogs();
		$location.path( "core/character-maker-welcome" );
	}

	$rootScope.loadItem = function( load_item ) {
		$rootScope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
		if( $rootScope.saved_items[ load_item ] )
			localStorage[ currentItemLocalStorageVariable ] = $rootScope.saved_items[ load_item ].data;
		$location.path( "core/character-maker-char-info" );
		$rootScope.closeDialogs();
	}

	$rootScope.showValidationReport = function() {
		$rootScope.closeDialogs();
		$rootScope.validationDialogOpen = true;
	}

	$rootScope.updateLoad = function( load_item ) {
		$rootScope.load_item = load_item;
	}

	$rootScope.updateSave = function( save_over ) {
		$rootScope.save_over = save_over;

	}

	$rootScope.saveItem = function( save_over, saveName ) {

		if( !localStorage[ savedItemsLocalStorageVariable ])
			localStorage[ savedItemsLocalStorageVariable ] = "[]";

		$rootScope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);

		if( save_over > -1 ) {
			$rootScope.saved_items[ save_over ] = $rootScope.makeSaveObject( saveName );
		} else {
			$rootScope.saved_items.push( $rootScope.makeSaveObject( saveName ));
		}
		localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $rootScope.saved_items );

		$rootScope.closeDialogs();
	}

	$rootScope.makeSaveObject = function( saveName ) {
		save_object = {
			name: saveName,
			datetime: Date(),
			type: itemType,
			data:  $rootScope.savageCharacter.exportJSON()
		};
		return save_object;
	}

	$rootScope.exportDialog = function() {
		$rootScope.exportBBCode = $rootScope.savageCharacter.exportBBCode();
		$rootScope.exportHTMLCode = $rootScope.savageCharacter.exportHTMLCode();
		$rootScope.exportJSON = $rootScope.savageCharacter.exportJSON(true);
		$rootScope.closeDialogs();
		$rootScope.exportDialogOpen = true;
	}

};

angular.module("webApp").run(
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$location',
		'$route',

		coreChargenGlobalFunctions
	]
);

angular.module("cordovaApp").run(
	[
		'$timeout',
		'$rootScope',
		'$translate',
		'$location',
		'$route',
		'$cordovaFile',
		coreChargenGlobalFunctions
	]
);
