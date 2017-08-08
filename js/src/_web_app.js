var availableLanguages = [];

webApp = angular.module(
	'webApp',
	['ngRoute', 'ngResource', 'ngSanitize','pascalprecht.translate'],
	[
		'$routeProvider',
		'$translateProvider',
		function ($routeProvider, $translateProvider, $scope, $http) {

			users_preferred_language = "en-us";
			if( window.navigator.userLanguage )
				users_preferred_language = window.navigator.userLanguage;
			if( navigator.language )
				users_preferred_language = navigator.language;

			//~ upl = users_preferred_language.split("-", 2);
			//~ if(upl[0] && upl[1]) {
				//~ users_preferred_language = upl[0] + "-" + upl[1].toUpperCase();
			//~ } else {
					//~ users_preferred_language = "en-US";
			//~ }

			users_preferred_language = "en-US";

			if( localStorage && localStorage["users_preferred_language"] ) {
				users_preferred_language = localStorage["users_preferred_language"];
			} else {
				localStorage["users_preferred_language"] = users_preferred_language;
			}

			users_chargen_pdf_layout = "portrait";
			if( localStorage && localStorage["users_chargen_pdf_layout"] ) {
				users_chargen_pdf_layout = localStorage["users_chargen_pdf_layout"];
			} else {
				localStorage["users_chargen_pdf_layout"] = "landscape";
			}

			for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
				if( availableLanguages[lang_count].active ) {
					$translateProvider.translations(
						availableLanguages[lang_count].short_code ,
						availableLanguages[lang_count].translations
					);
				}
			}

			users_preferred_language = "en-US";

			$translateProvider.useSanitizeValueStrategy('sanitize');

			$translateProvider.preferredLanguage(users_preferred_language);

			$routeProvider

			// route for the home/welcome page
			.when('/', {
				templateUrl : 'pages/welcome.html',
				controller  : 'welcomeController'
			})

			// route for the credits page
			.when('/credits', {
				templateUrl : 'pages/credits.html',
				controller  : 'creditsController'
			})

			// route for the credits page
			.when('/core/raise-trainer', {
				templateUrl : 'pages/core-raise-trainer.html',
				controller  : 'raiseTrainerController'
			})

			// route for the credits page
			.when('/settings', {
				templateUrl : 'pages/settings.html',
				controller  : 'settingsController'
			})

			// route for the core about page
			.when('/core/dice', {
				templateUrl : 'pages/core-dice.html',
				controller  : 'coreDiceController'
			})

			// route for the core extras page
			.when('/core/extras', {
				templateUrl : 'pages/core-extras.html',
				controller  : 'coreExtrasController'
			})

			// route for the core character maker page
			.when('/core/character-maker-welcome', {
				templateUrl : 'pages/core-character-maker-welcome.html',
				controller  : 'controllerCoreChargenWelcome',
				activetab: 'chargen-char-welcome'
			})

			// route for the core character maker page
			.when('/core/character-maker-char-info', {
				templateUrl : 'pages/core-character-maker-char-info.html',
				controller  : 'controllerCoreChargenInfo',
				activetab: 'chargen-char-info'
			})

			// route for the core character maker page traits
			.when('/core/character-maker-traits', {
				templateUrl : 'pages/core-character-maker-traits.html',
				controller  : 'controllerCoreChargenTraits',
				activetab: 'chargen-traits'
			})

			// route for the core character maker page Rifts® Iconic frameworks
			.when('/core/character-maker-iconic-frameworks', {
				templateUrl : 'pages/core-character-maker-iconic-frameworks.html',
				controller  : 'controllerCoreChargenRifts',
				activetab: 'chargen-iconic-frameworks'
			})

			// route for the core character maker page super power companion powers
			.when('/core/character-maker-spc-powers', {
				templateUrl : 'pages/core-character-maker-spc-powers.html',
				controller  : 'controllerCoreChargenSPC',
				activetab: 'chargen-spc-powers'
			})

			// route for the core character maker page edges and hindrances
			.when('/core/character-maker-hindrances-and-edges', {
				templateUrl : 'pages/core-character-maker-hindrances-and-edges.html',
				controller  : 'controllerCoreChargenEdgesHindrances',
				activetab: 'chargen-hindrances-and-edges'
			})

			// route for the core character maker gear page
			.when('/core/character-maker-gear', {
				templateUrl : 'pages/core-character-maker-gear.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-gear'
			})

			// route for the core character maker weapons page (ranged and hand)
			.when('/core/character-maker-weapons', {
				templateUrl : 'pages/core-character-maker-weapons.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-weapons'
			})

			// route for the core character maker armor page
			.when('/core/character-maker-armor', {
				templateUrl : 'pages/core-character-maker-armor.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-armor'
			})

			// route for the core character maker armor page
			.when('/core/character-maker-armor-list', {
				templateUrl : 'pages/core-character-maker-armor-list.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-armor'
			})

			// route for the core character maker gear list page
			.when('/core/character-maker-gear-list', {
				templateUrl : 'pages/core-character-maker-gear-list.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-gear'
			})

			// route for the core character maker ranged weapons list page
			.when('/core/character-maker-ranged-weapons-list', {
				templateUrl : 'pages/core-character-maker-ranged-weapons-list.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-weapons'
			})

			// route for the core character maker hand weapon list page
			.when('/core/character-maker-hand-weapons-list', {
				templateUrl : 'pages/core-character-maker-hand-weapons-list.html',
				controller  : 'controllerCoreChargenGear',
				activetab: 'chargen-weapons'
			})

			// route for the core character maker powers page
			.when('/core/character-maker-powers', {
				templateUrl : 'pages/core-character-maker-powers.html',
				controller  : 'controllerCoreChargenPowers',
				activetab: 'chargen-powers'
			})

			// route for the core character maker cyberware page
			.when('/core/character-maker-cyberware', {
				templateUrl : 'pages/core-character-maker-cyberware.html',
				controller  : 'controllerCoreChargenCyberware',
				activetab: 'chargen-cyberware'
			})

			// route for the core character maker advancements page
			.when('/core/character-maker-advancements', {
				templateUrl : 'pages/core-character-maker-advancements.html',
				controller  : 'controllerCoreChargenAdvances',
				activetab: 'chargen-advancements'
			})

			// route for the core mass battles page
			.when('/core/mass-battles', {
				templateUrl : 'pages/core-mass-battles.html',
				controller  : 'coreMassbattlesController'
			})

			// route for the core raise calc page
			.when('/core/raise-calculator', {
				templateUrl : 'pages/core-raise-calculator.html',
				controller  : 'coreRaiseCalcController'
			})

			// route for the scifi power armor maker page
			.when('/scifi/power-armor-maker', {
				templateUrl : 'pages/scifi-power-armor-maker.html',
				controller  : 'scifiPowerarmorController'
			})

			// route for the scifi robot maker page
			.when('/scifi/robot-maker', {
				templateUrl : 'pages/scifi-robot-maker.html',
				controller  : 'scifiRobotController'
			})

			// route for the scifi starship maker page
			.when('/scifi/starship-maker', {
				templateUrl : 'pages/scifi-starship-maker.html',
				controller  : 'scifiStarshipController'
			})

			// route for the scifi vehicle page
			.when('/scifi/vehicle-maker', {
				templateUrl : 'pages/scifi-vehicle-maker.html',
				controller  : 'scifiVehicleController'
			})

			// route for the scifi walker maker page
			.when('/scifi/walker-maker', {
				templateUrl : 'pages/scifi-walker-maker.html',
				controller  : 'scifiWalkerController'
			})

			// route for the scifi world maker page
			.when('/scifi/world-maker', {
				templateUrl : 'pages/scifi-world-maker.html',
				controller  : 'scifiWorldController'
			})

			;
		}
	]
);



webApp.run(
	function($rootScope) {
		$rootScope.appTitle = globalAppName;
		$rootScope.appVersion = globalAppVersion;



		/* Google Drive Functions */





		$rootScope.isSignedIntoGoogle = false;
		$rootScope.gapiAvailable = false;


		$rootScope.signInToGoogle = function (event) {
			gapi.auth2.getAuthInstance().signIn();
			//~ $rootScope.loadArmyLists();
		}

		$rootScope.signOutOfGoogle = function(event) {

			$rootScope.isSignedIntoGoogle = false;
			$rootScope.armyFileGoogleDriveID = false;
			gapi.auth2.getAuthInstance().signOut();
			//~ $rootScope.loadArmyLists();
		}


		$rootScope.isCreatingFile = false;
		$rootScope.isSavingFile = false;

		$rootScope.googleDriveActivity = "";

		$rootScope.armyFileGoogleDriveID = "";
		$rootScope.armyFileGoogleFilename = "config.json";

		$rootScope.createGDriveFile = function( fileName, bodyData ) {

			if( !$rootScope.isCreatingFile ) {
				isCreatingFile = true;
				$rootScope.googleDriveActivity = "Creating Config file";
				var fileBody = JSON.stringify( bodyData );

				var contentType = 'application/json';
				var boundary = '-------uf98ju9sdf908sudf8ua98gf89u9a8uas';
				var delimiter = "\r\n--" + boundary + "\r\n";
				var close_delim = "\r\n--" + boundary + "--";

				var fileMetadata = {
					'name': fileName,
					'parents': [ 'appDataFolder'],
					'mimeType': contentType
				};

				var multipartRequestBody =
					delimiter +
					'Content-Type: application/json\r\n\r\n' +
					JSON.stringify(fileMetadata) +
					delimiter +
					'Content-Type: ' + contentType + '\r\n\r\n' +
					fileBody +
					close_delim;

				var createRequest = gapi.client.request(
					{
						'path': '/upload/drive/v3/files',
						'method': 'POST',
						'params': {'uploadType': 'multipart'},
						'headers': {
							'Content-Type': 'multipart/related; boundary="' + boundary + '"'
						},
						'body': multipartRequestBody
					}
				);
				if (!createCallback) {
						var createCallback = function(file) {
						//~ console.log(file)
						isCreatingFile = false;
						$rootScope.googleDriveActivity = "";
						$rootScope.$applyAsync();
						//~ $rootScope.loadArmyLists();

					};

					createRequest.execute(createCallback);
				}

			}
		}

		$rootScope.deleteGDriveFile = function( fileId ) {
			//~ console.log( "deleteFile called", fileId );

			$rootScope.googleDriveActivity = "Deleting File";
			gapi.client.drive.files.delete({
				'fileId': fileId
			  }).then(
				function(response) {
					//~ console.log('Title: ' + response.title);
					//~ console.log('Description: ' + response.description);
					//~ console.log('MIME type: ' + response.mimeType);
				//	console.log( "deleteFile response", response.body );
				$rootScope.googleDriveActivity = "";
				}
			);
		}


		$rootScope.getGoogleDriveFileList = function() {
			//~ console.log( "$rootScope.getGoogleDriveFileList called ");
			if( gapi ) {
				if( $rootScope.isSignedIntoGoogle ) {
					$rootScope.googleDriveActivity = "Getting file list";
					//~ console.log( "$rootScope.getGoogleDriveFileList called - signed in  ");
					gapi.client.drive.files.list({
						'pageSize': 100,
						'spaces': "appDataFolder",
						'fields': "nextPageToken, files(id, name)"
					}).then(function(response) {
					  var files = response.result.files;
					  if (files && files.length > 0) {

						$rootScope.googleDriveFiles = files;
						var foundConfig = false;

						for( var fileIndex in $rootScope.googleDriveFiles ) {
							//~ $rootScope.deleteGDriveFile( $rootScope.googleDriveFiles[ fileIndex ].id );
							if( $rootScope.googleDriveFiles[ fileIndex ].name == $rootScope.armyFileGoogleFilename ) {
								$rootScope.armyFileGoogleDriveID = $rootScope.googleDriveFiles[ fileIndex ].id;
							}
						}

						if( $rootScope.armyFileGoogleDriveID == "" ) {
							//~ console.log( "Creating armies blank file on GDrive" )
							$rootScope.createGDriveFile( $rootScope.armyFileGoogleFilename, { armies: [], favorites: [] } );
						}
					  } else {
						$rootScope.googleDriveFiles = [];
						if( $rootScope.armyFileGoogleDriveID == "" ) {
							//~ console.log( "No files - creating armies blank file on GDrive" )
							$rootScope.createGDriveFile( $rootScope.armyFileGoogleFilename, { armies: [], favorites: [] } );
						}
					  }
					  $rootScope.googleDriveActivity = "";
					  $rootScope.$applyAsync();
					  //~ $rootScope.loadArmyLists();
					});
				} else {
					//~ console.log( "Not signed into Google" );
				}
			}  else {
				//~ console.log("gapi not available ");
			}
		}

		$rootScope.getGDriveFileContents = function(fileId) {
			//~ console.log( "getGDriveFileContents called", fileId );

			var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;// or this: gapi.auth.getToken().access_token;
			var xhr = new XMLHttpRequest();
			xhr.open("GET", "https://www.googleapis.com/drive/v3/files/" + fileId + '?alt=media', true);
			xhr.setRequestHeader('Authorization','Bearer ' + accessToken);

			xhr.onload = function(){
				//~ console.log( "getFileContents response", JSON.parse( xhr.response)  );
			}

			xhr.send();
		}

		$rootScope.saveGDriveFile = function( fileID, fileName, bodyData ) {

			if( !$rootScope.isSavingFile ) {
				$rootScope.googleDriveActivity = "Saving File";
				$rootScope.isSavingFile = true;
				var fileBody = JSON.stringify( bodyData );

				var contentType = 'application/json';
				var boundary = '-------uf98ju9sdf908sudf8ua98gf89u9a8uas';
				var delimiter = "\r\n--" + boundary + "\r\n";
				var close_delim = "\r\n--" + boundary + "--";

				var fileMetadata = {
					'name': fileName,
					'parents': [ 'appDataFolder'],
					'mimeType': contentType
				};

				var multipartRequestBody =
					delimiter +
					'Content-Type: application/json\r\n\r\n' +
					JSON.stringify(fileMetadata) +
					delimiter +
					'Content-Type: ' + contentType + '\r\n\r\n' +
					fileBody +
					close_delim;

				var saveRequest = gapi.client.request(
					{
						//'path': '/upload/drive/v3/files/' + fileID,
						'path': '/upload/drive/v2/files/' + fileID,

						'method': 'PUT',
						'params': {'uploadType': 'multipart'},
						'headers': {
							'Content-Type': 'multipart/related; boundary="' + boundary + '"'
						},
						'body': multipartRequestBody
					}
				);
				if (!saveCallback) {
					var saveCallback = function(file) {
						//~ console.log(file)
						$rootScope.isSavingFile = false;
						$rootScope.googleDriveActivity = "";
						$rootScope.$applyAsync();

					};

					saveRequest.execute(saveCallback);
				}

			}

		}

		$rootScope.updateSigninStatus = function( signinStatus ) {
			//~ console.log( "signinStatus", signinStatus );
			$rootScope.isSignedIntoGoogle = signinStatus;
			$rootScope.armyFileGoogleDriveID = "";
			$rootScope.armyFileGoogleFilename = "config.json";
			$rootScope.getGoogleDriveFileList();
			//~ $rootScope.loadArmyLists();
			$rootScope.$applyAsync();

		}

		$rootScope.initClient = function() {
			// Client ID and API key from the Developer Console
			var CLIENT_ID = googleDriveClientID;
			//~ console.log( googleDriveClientID );

			// Array of API discovery doc URLs for APIs used by the quickstart
			var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

			// Authorization scopes required by the API; multiple scopes can be
			// included, separated by spaces.
			var SCOPES = 'https://www.googleapis.com/auth/drive.appfolder';


			gapi.client.init({
				discoveryDocs: DISCOVERY_DOCS,
				clientId: CLIENT_ID,
				scope: SCOPES
			}).then(function () {
				// Listen for sign-in state changes.
				gapi.auth2.getAuthInstance().isSignedIn.listen($rootScope.updateSigninStatus);

				// Handle the initial sign-in state.
				$rootScope.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
				//~ authorizeButton.onclick = handleAuthClick;
				//~ signoutButton.onclick = handleSignoutClick;
			} );
		}
		if( typeof(gapi) != "undefined" ) {
			$rootScope.gapiAvailable = true;
			gapi.load('client:auth2', $rootScope.initClient);

			//~ handleClientLoad();
			//~ $rootScope.getGoogleDriveFileList();
		}

	}
);
