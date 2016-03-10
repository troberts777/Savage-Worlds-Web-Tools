var availableLanguages = [];

baseApp = angular.module(
	'baseApp',
	['ngRoute', 'ngResource', 'ngSanitize','pascalprecht.translate'],
	[
		'$routeProvider',
		'$translateProvider',
		function ($routeProvider, $translateProvider, $scope, $http) {


			users_preferred_language = "en-US";
			if( localStorage && localStorage["users_preferred_language"] ) {
				users_preferred_language = localStorage["users_preferred_language"];
			} else {
				localStorage["users_preferred_language"] = users_preferred_language;
			}

			for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
				if( availableLanguages[lang_count].active ) {
					$translateProvider.translations(
						availableLanguages[lang_count].short_code ,
						availableLanguages[lang_count].translations
					);
				}
			}

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
			.when('/core/character-maker', {
				templateUrl : 'pages/core-character-maker.html',
				controller  : 'coreChargenController'
			})

			// route for the core mass batles page
			.when('/core/mass-battles', {
				templateUrl : 'pages/core-mass-battles.html',
				controller  : 'coreMassbattlesController'
			})

			// route for the core mass bartles page
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

angular.module('baseApp').controller(
	'select_language',
	[
		'$translate',
		'$scope',
		'$route',
		function ($translate, $scope, $route) {

			console.log("$scope",  $scope);
			$scope.available_languages = Array();
			$scope.users_language = {};
			for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
				if( availableLanguages[lang_count].active ) {
					language_object = {
						id: availableLanguages[lang_count].short_code,
						label: availableLanguages[lang_count].native_name
					};
					$scope.available_languages.push(
						language_object
					);
					if(localStorage["users_preferred_language"] == availableLanguages[lang_count].short_code ) {
						$scope.users_language = language_object;
						$scope.background_image_url = "url(images/flags/64/" + availableLanguages[lang_count].icon_file + ")";
					}
				}
			}

			$scope.updateLanguage = function( language_selected ) {

				$translate.use($scope.users_language.id);
				localStorage["users_preferred_language"] = $scope.users_language.id;
				for( lang_count = 0; lang_count < availableLanguages.length; lang_count++) {
					if( availableLanguages[lang_count].active ) {
						if(localStorage["users_preferred_language"] == availableLanguages[lang_count].short_code ) {
							$scope.background_image_url = "url(images/flags/64/" + availableLanguages[lang_count].icon_file + ")";
						}
					}
				}

				$route.reload();
			}

			// $scope.change_language = function (key) {
			// 	$translate.use(key);
			// 	localStorage["users_preferred_language"] = key;

			// 	$route.reload();
			// };

		}
	]
);