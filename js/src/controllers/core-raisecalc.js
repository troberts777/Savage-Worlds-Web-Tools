var raisecalcArray = [
	'$rootScope',
	'$translate',
	'$scope',
	function ($rootScope, $translate, $scope) {
		// Set Page Title Tag
		$rootScope.showSciFiCreatorMenu = false;
		$rootScope.showChargenMenu = false;
		var dice_object = new classDice();
		dice_object.init();

		$scope.input_half_damage = 0

		if( localStorage["com.jdg.swwt2.raisecalc.input_target_number"] )
			$scope.input_target_number = localStorage["com.jdg.swwt2.raisecalc.input_target_number"] / 1;
		else
			$scope.input_target_number = 4;

		if( localStorage["com.jdg.swwt2.raisecalc.input_roll"] )
			$scope.input_roll = localStorage["com.jdg.swwt2.raisecalc.input_roll"] / 1;
		else
			$scope.input_roll = 5

		if( localStorage["com.jdg.swwt2.raisecalc.input_armor"] )
			$scope.input_armor = localStorage["com.jdg.swwt2.raisecalc.input_armor"] / 1;
		else
			$scope.input_armor = 1

		if( localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] )
			$scope.input_weapons_ap = localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] / 1;
		else
			$scope.input_weapons_ap  = 0;

		if( localStorage["com.jdg.swwt2.raisecalc.input_half_damage"] )
			if( localStorage["com.jdg.swwt2.raisecalc.input_half_damage"]  > 0 )
				$scope.input_half_damage = 1
			else
				$scope.input_half_damage = 0
		else
			$scope.input_half_damage = 0

		$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_RAISE', 'DICE_NO_DICE_THROWN', 'DICE_TOTAL_ROLL']).then(function (translation) {
			$rootScope.title_tag = translation.INDEX_BUTTON_CORE_RAISE + " | " + translation.APP_TITLE;
			$scope.dice_results = translation.DICE_NO_DICE_THROWN;
			$total_roll_label = translation.DICE_TOTAL_ROLL;
			$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_RAISE;
		});

		$translate(
			[
			'DICE_LABEL_NO_EFFECT', 'DICE_LABEL_SHAKEN', 'DICE_LABEL_SHAKEN_AND_A_WOUND',
			'DICE_LABEL_SHAKEN_AND_X_WOUNDS', 'DICE_LABEL_CRITICAL_FAILURE', 'DICE_LABEL_FAILURE',
			'DICE_LABEL_SUCCESS', 'DICE_LABEL_SUCCESS_WITH_A_RAISE', 'DICE_LABEL_SUCCESS_WITH_X_RAISES',
			'DICE_LABEL_DIE_ROLL_NUMBER', 'DICE_LABEL_WILD_DIE_ROLL_NUMBER', 'DICE_TOTAL_ROLL',
			'DICE_ROLL_SET_NUM'
			]
		).then( function( translation ) {

			dice_object.setLabel("no_effect",  translation.DICE_LABEL_NO_EFFECT);
			dice_object.setLabel("shaken", translation.DICE_LABEL_SHAKEN);
			dice_object.setLabel("shaken_and_a_wound", translation.DICE_LABEL_SHAKEN_AND_A_WOUND);

			dice_object.setLabel("shaken_and_x_wounds", translation.DICE_LABEL_SHAKEN_AND_X_WOUNDS);
			dice_object.setLabel("critical_failure", translation.DICE_LABEL_CRITICAL_FAILURE);
			dice_object.setLabel("failure", translation.DICE_LABEL_FAILURE);

			dice_object.setLabel("success", translation.DICE_LABEL_SUCCESS);
			dice_object.setLabel("success_with_a_raise", translation.DICE_LABEL_SUCCESS_WITH_A_RAISE);
			dice_object.setLabel("success_with_x_raises", translation.DICE_LABEL_SUCCESS_WITH_X_RAISES);

			dice_object.setLabel("die_roll_number", translation.DICE_LABEL_DIE_ROLL_NUMBER);
			dice_object.setLabel("wild_die_roll_number", translation.DICE_LABEL_WILD_DIE_ROLL_NUMBER);
			dice_object.setLabel("total_roll",  translation.DICE_TOTAL_ROLL);


			dice_object.setLabel("roll_set_number",  translation.DICE_ROLL_SET_NUM);

			$scope.damage_results = dice_object.damageSuccessMargin(
					$scope.input_roll,
					$scope.input_target_number,
					$scope.input_armor,
					$scope.input_weapons_ap
				);
			$scope.trait_results  = dice_object.traitSuccessMargin( $scope.input_roll, $scope.input_target_number );
		} );



		$scope.update_results = function() {
			localStorage["com.jdg.swwt2.raisecalc.input_target_number"] = $scope.input_target_number;
			localStorage["com.jdg.swwt2.raisecalc.input_roll"] = $scope.input_roll;
			localStorage["com.jdg.swwt2.raisecalc.input_armor"] = $scope.input_armor;
			localStorage["com.jdg.swwt2.raisecalc.input_weapons_ap"] = $scope.input_weapons_ap;

			if( $scope.input_half_damage )
				localStorage["com.jdg.swwt2.raisecalc.input_half_damage"] = 1;
			else
				localStorage["com.jdg.swwt2.raisecalc.input_half_damage"] = 0;

			damage_total = $scope.input_roll;
			if( $scope.input_half_damage )
				damage_total = Math.floor( $scope.input_roll / 2);

			$scope.damage_results = dice_object.damageSuccessMargin(
					damage_total,
					$scope.input_target_number,
					$scope.input_armor,
					$scope.input_weapons_ap
				);
			$scope.trait_results  = "" + dice_object.traitSuccessMargin( $scope.input_roll, $scope.input_target_number );
		}
	}
];

angular.module("webApp").controller(
	"coreRaiseCalcController",
	raisecalcArray
);
angular.module("cordovaApp").controller(
	"coreRaiseCalcController",
	raisecalcArray
);
