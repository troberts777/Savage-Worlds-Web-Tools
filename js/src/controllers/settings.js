angular.module("baseApp").controller(
	"settingsController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		'$route',
		function ($rootScope, $translate,  $scope, $route) {
			$rootScope.showSciFiCreatorMenu = false;
			$rootScope.showChargenMenu = false;

			$translate(['APP_TITLE', 'INDEX_SETTINGS']).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_SETTINGS + " | " + translation.APP_TITLE;
				$rootScope.subtitle_tag = translation.INDEX_SETTINGS;
			});


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
