angular.module("baseApp").controller(
	"coreDiceController",
	[
		'$rootScope',
		'$translate',
		'$scope',
		function ($rootScope, $translate, $scope) {
			// Set Page Title Tag
			$rootScope.showSciFiCreatorMenu = false;
			$rootScope.showChargenMenu = false;
			var dice_object = new classDice();
			dice_object.init();
			dice_object.setAlwaysExplodingDice(true);

			$scope.show_trait_options = false;
			$scope.show_damage_options = false;

			if( localStorage["com.jdg.swwt2.dice.input_parse_dice"] )
				$scope.input_parse_dice = localStorage["com.jdg.swwt2.dice.input_parse_dice"];
			else
				$scope.input_parse_dice = "d8* + 1";


			if( localStorage["com.jdg.swwt2.dice.select_roll_type"] )
				$scope.select_roll_type = localStorage["com.jdg.swwt2.dice.select_roll_type"];
			else
				$scope.select_roll_type = "roll";

			if( localStorage["com.jdg.swwt2.dice.input_target_number"] )
				$scope.input_target_number = localStorage["com.jdg.swwt2.dice.input_target_number"] / 1;
			else
				$scope.input_target_number = 4;

			if( localStorage["com.jdg.swwt2.dice.input_base_toughness"] )
				$scope.input_base_toughness = localStorage["com.jdg.swwt2.dice.input_base_toughness"] / 1;
			else
				$scope.input_base_toughness = 5

			if( localStorage["com.jdg.swwt2.dice.input_armor"] )
				$scope.input_armor = localStorage["com.jdg.swwt2.dice.input_armor"] / 1;
			else
				$scope.input_armor = 1

			if( localStorage["com.jdg.swwt2.dice.input_weapons_ap"] )
				$scope.input_weapons_ap = localStorage["com.jdg.swwt2.dice.input_weapons_ap"] / 1;
			else
				$scope.input_weapons_ap  = 0;


			if( $scope.select_roll_type == "damage" ) {
				$scope.show_trait_options = false;
				$scope.show_damage_options = true;
			} else if( $scope.select_roll_type == "trait" ) {
				$scope.show_trait_options = true;
				$scope.show_damage_options = false;
			} else {
				$scope.show_trait_options = false;
				$scope.show_damage_options = false;
			}

			$translate(['APP_TITLE', 'INDEX_BUTTON_CORE_DICE', 'DICE_NO_DICE_THROWN' ]).then(function (translation) {
				$rootScope.title_tag = translation.INDEX_BUTTON_CORE_DICE + " | " + translation.APP_TITLE;
				$scope.dice_results = translation.DICE_NO_DICE_THROWN;
				$total_roll_label = translation.DICE_TOTAL_ROLL;
				$rootScope.subtitle_tag = translation.INDEX_BUTTON_CORE_DICE;
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
			} );



			$scope.extra_results = "";
			$scope.total_roll = "";

			$scope.rollDice = function () {
				localStorage["com.jdg.swwt2.dice.input_parse_dice"] = $scope.input_parse_dice;
				localStorage["com.jdg.swwt2.dice.select_roll_type"] = $scope.select_roll_type;

				localStorage["com.jdg.swwt2.dice.input_target_number"] = $scope.input_target_number;
				localStorage["com.jdg.swwt2.dice.input_base_toughness"] = $scope.input_base_toughness;
				localStorage["com.jdg.swwt2.dice.input_roll"] = $scope.input_roll;
				localStorage["com.jdg.swwt2.dice.input_armor"] = $scope.input_armor;
				localStorage["com.jdg.swwt2.dice.input_weapons_ap"] = $scope.input_weapons_ap;

				dice_object.setResultMargins(
				 		$scope.input_target_number,
				 		$scope.input_base_toughness,
				 		$scope.input_armor,
				 		$scope.input_weapons_ap
				);
				for_trait = 0;
				for_damage = 0;
				if( $scope.select_roll_type == "damage" ) {
					for_damage = 1;
				} else if( $scope.select_roll_type == "trait" ) {
					for_trait = 1;
				}

				$dice_roll = dice_object.parseRoll( $scope.input_parse_dice );

				$scope.dice_results  = dice_object.displayResults(for_trait, for_damage);
			};

			$scope.show_hide_options = function() {
				if( $scope.select_roll_type == "damage" ) {
					$scope.show_trait_options = false;
					$scope.show_damage_options = true;
				} else if( $scope.select_roll_type == "trait" ) {
					$scope.show_trait_options = true;
					$scope.show_damage_options = false;
				} else {
					$scope.show_trait_options = false;
					$scope.show_damage_options = false;
				}
				localStorage["com.jdg.swwt2.dice.input_target_number"] = $scope.input_target_number;
				localStorage["com.jdg.swwt2.dice.input_base_toughness"] = $scope.input_base_toughness;
				localStorage["com.jdg.swwt2.dice.input_roll"] = $scope.input_roll;
				localStorage["com.jdg.swwt2.dice.input_armor"] = $scope.input_armor;
				localStorage["com.jdg.swwt2.dice.input_weapons_ap"] = $scope.input_weapons_ap;
			}

		}
	]
);

