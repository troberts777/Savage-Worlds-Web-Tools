var welcomeArray = [
	'$rootScope',
	'$translate',
	'$scope',
	function ($rootScope, $translate, $scope) {
		$rootScope.showSciFiCreatorMenu = false;
		$rootScope.showChargenMenu = false;
		$translate(['APP_TITLE', 'INDEX_WELCOME']).then(function (translation) {
			$rootScope.title_tag = translation.INDEX_WELCOME + " | " + translation.APP_TITLE;
			$rootScope.subtitle_tag = translation.INDEX_WELCOME;
		});
	}
];
angular.module("webApp").controller(
	"welcomeController",
	welcomeArray
);

angular.module("cordovaApp").controller(
	"welcomeController",
	welcomeArray
);

