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
			.when('/core/character-maker-char-info', {
				templateUrl : 'pages/core-character-maker-char-info.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-char-info'
			})

			// route for the core character maker page traits
			.when('/core/character-maker-traits', {
				templateUrl : 'pages/core-character-maker-traits.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-traits'
			})

			// route for the core character maker page skills
			.when('/core/character-maker-skills', {
				templateUrl : 'pages/core-character-maker-skills.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-skills'
			})

			// route for the core character maker page edges and hindrances
			.when('/core/character-maker-hindrances-and-edges', {
				templateUrl : 'pages/core-character-maker-hindrances-and-edges.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-hindrances-and-edges'
			})

			// route for the core character maker gear page
			.when('/core/character-maker-gear', {
				templateUrl : 'pages/core-character-maker-gear.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-gear'
			})

			// route for the core character maker powers page
			.when('/core/character-maker-powers', {
				templateUrl : 'pages/core-character-maker-powers.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-powers'
			})

			// route for the core character maker cyberware page
			.when('/core/character-maker-cyberware', {
				templateUrl : 'pages/core-character-maker-cyberware.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-cyberware'
			})

			// route for the core character maker advancements page
			.when('/core/character-maker-advancements', {
				templateUrl : 'pages/core-character-maker-advancements.html',
				controller  : 'coreChargenController',
				activetab: 'chargen-advancements'
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

