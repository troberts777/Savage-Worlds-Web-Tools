function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var raiseTrainerArray = 	[
	'$rootScope',
	'$translate',
	'$scope',
	function ($rootScope, $translate, $scope) {

		$rootScope.showSciFiCreatorMenu = false;
		$rootScope.showChargenMenu = false;
		$translate(['APP_TITLE', 'INDEX_RAISE_TRAINER']).then(function (translation) {
			$rootScope.title_tag = translation.INDEX_RAISE_TRAINER + " | " + translation.APP_TITLE;
			$rootScope.subtitle_tag = translation.INDEX_RAISE_TRAINER;
		});
		$scope.showWelcome = true;
		$scope.showTest = false;
		$scope.showResults = false;
		$scope.numberOfQuestions = "20";
		$scope.currentQuestion = -1;
		$scope.tnAlways4 = false;
		$scope.selectedShowInlineStats = true;
		$scope.currentQuestionDisplay = 0;

		$scope.inlineCorrect = 0;
		$scope.inlineNumQuestions = 0;

		$scope.testQuestions = Array();
		var dice_object = new classDice();
		dice_object.init();
		dice_object.setAlwaysExplodingDice(true);
		$scope.startTime = 0;

		$scope.startTest = function() {
			$scope.inlineCorrect = 0;
			$scope.inlineNumQuestions = -1;

			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.makeTestResults();
				$scope.currentQuestion = -1;
				$scope.nextQuestion();
				$scope.showWelcome = false;
				$scope.showTest = true;
				$scope.showResults = false;
				$scope.startTime = window.performance.now();
			} else {
				$scope.inlineNumQuestions = 0;
				$scope.showWelcome = false;
				$scope.showTest = true;
				$scope.showResults = false;
				$scope.nextQuestion();

			}
		}

		$scope.reset = function() {
				$scope.showWelcome = true;
				$scope.showTest = false;
				$scope.showResults = false;
		}

		$scope.nextQuestion = function() {
			$scope.currentQuestion++;

			if( $scope.numberOfQuestions / 1 > 0 ) {
				if( $scope.testQuestions[ $scope.currentQuestion ] ) {
					$scope.currentQuestionDisplay = $scope.currentQuestion + 1 + "/" + $scope.numberOfQuestions;
					$scope.testTargetNumber = $scope.testQuestions[ $scope.currentQuestion ].target;
					$scope.testRollNumber = $scope.testQuestions[ $scope.currentQuestion ].roll;


					$scope.inlineNumQuestions++;
					if(
						$scope.testQuestions[ $scope.currentQuestion - 1]
							&&
						$scope.testQuestions[ $scope.currentQuestion - 1].correct
							==
						$scope.testQuestions[ $scope.currentQuestion - 1 ].answer
					) {
						$scope.inlineCorrect++;
					}

					if( $scope.inlineNumQuestions > 0 ) {
						$scope.inlineResultsPercentage = (($scope.inlineCorrect / $scope.inlineNumQuestions )  * 100 ).toFixed(3) + " %";
					} else {
						$scope.inlineResultsPercentage = "0 %";
					}

				} else {
					$scope.calculateResults();
					$scope.showWelcome = false;
					$scope.showTest = false;
					$scope.showResults = true;
				}
			} else {

				$scope.currentQuestionDisplay = $scope.currentQuestion + 1;
				if( $scope.tnAlways4 ) {
					$scope.testTargetNumber = 4;
					$scope.testRollNumber = dice_object.rollDice("d6*");
				} else {
					$scope.testTargetNumber = getRandomIntInclusive(4,15);
					$scope.testRollNumber = dice_object.rollDice("d10*");
				}

			}
		}

		$scope.calculateResults = function() {
			correctCount = 0;
			$scope.averageAnswerTime = 0;
			$scope.totalAnswerTime = 0;
			for(var testCount = 0; testCount < $scope.testQuestions.length; testCount++) {
				if(
					$scope.testQuestions[testCount].correct
						==
					$scope.testQuestions[testCount].answer
				) {
					correctCount++;
				}
				if( testCount == 0 ) {
					$scope.testQuestions[testCount].answerTime = $scope.testQuestions[testCount].time - $scope.startTime;
				} else {
					$scope.testQuestions[testCount].answerTime = $scope.testQuestions[testCount].time - $scope.testQuestions[testCount - 1].time;
				}
				$scope.averageAnswerTime += $scope.testQuestions[testCount].answerTime;
				$scope.totalAnswerTime += $scope.testQuestions[testCount].answerTime;

				$scope.testQuestions[testCount].answerTime = ($scope.testQuestions[testCount].answerTime / 1000 ).toFixed(3);
			}
			$scope.totalAnswerTime = ($scope.totalAnswerTime / 1000 ).toFixed(3)
			$scope.averageAnswerTime = $scope.averageAnswerTime / $scope.testQuestions.length;
			$scope.averageAnswerTime = ($scope.averageAnswerTime / 1000 ).toFixed(3);
			$scope.resultsCorrect = correctCount;
			$scope.resultsPercentage = Math.ceil( correctCount / $scope.numberOfQuestions * 100 ) + "%";
			console.log( "$scope.startTime", $scope.startTime );
			console.log( "$scope.testQuestions", $scope.testQuestions );
		}

		$scope.rowClass = function(answerRow) {
			if( answerRow.correct ==  answerRow.answer )
				return "right-answer";
			else
				return "wrong-answer";
		}

		$scope.makeTestResults = function() {
			$scope.testQuestions = Array();
			for(var testCount = 0; testCount< $scope.numberOfQuestions / 1; testCount++) {
				if( $scope.tnAlways4 ) {
					var answer = {
						roll: dice_object.rollDice("d6*"),
						target: 4,
						time: -1,
						right: false,
						answer: "",
						correct: ""
					};
				} else {
					var answer = {
						roll: dice_object.rollDice("d10*"),
						target: getRandomIntInclusive(4,15),
						time: -1,
						right: false,
						answer: "",
						correct: ""
					};
				}

				if( answer.roll >= answer.target + 8) {
					answer.correct = "2raises";
				} else if( answer.roll >= answer.target + 4) {
					answer.correct = "raise";
				} else if( answer.roll >= answer.target ) {
					answer.correct = "success";
				} else {
					answer.correct = "fail";
				}

				$scope.testQuestions.push(
					answer
				);
			}

		}

		$scope.tn4Click = function($event) {
			if( $event )
				$scope.tnAlways4 = false;
			else
				$scope.tnAlways4 = true;
		}

		$scope.numQuestionsChange = function( $event ) {
			if( $event == 0 ) {
				$scope.selectedShowInlineStats = true;
			}
		}

		$scope.showInlineClick = function($event) {
			if( $event )
				$scope.selectedShowInlineStats = false;
			else
				$scope.selectedShowInlineStats = true;
		}

		$scope.adjustSuccessFails = function( answerObject ) {
			if( answerObject.correct == answerObject.answer )
				answerObject.right = true;
			else
				answerObject.right = false;

			$scope.nextQuestion();
			return answerObject;
		}

		$scope.calcCurrentQuestion = function() {
				if( $scope.testRollNumber >= $scope.testTargetNumber + 8) {
					return "2raises";
				} else if( $scope.testRollNumber >= $scope.testTargetNumber + 4) {
					return "raise";
				} else if( $scope.testRollNumber >= $scope.testTargetNumber ) {
					return "success";
				} else {
					return "fail";
				}
		}

		$scope.clickFailure = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "fail";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {
				$scope.inlineNumQuestions++;
				if( $scope.calcCurrentQuestion() == "fail" ) {
					$scope.inlineCorrect++;
				}
				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}
		}
		$scope.clickSuccess = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "success";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {
				$scope.inlineNumQuestions++;
				if( $scope.calcCurrentQuestion() == "success" ) {
					$scope.inlineCorrect++;
				}
				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}
		}
		$scope.clickSuccessRaise = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "raise";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {
				$scope.inlineNumQuestions++;
				if( $scope.calcCurrentQuestion() == "raise" ) {
					$scope.inlineCorrect++;
				}
				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}
		}
		$scope.clickSuccess2Raises = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "2raises";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {
				$scope.inlineNumQuestions++;
				if( $scope.calcCurrentQuestion() == "2raises" ) {
					$scope.inlineCorrect++;
				}
				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}

		}
	}

];

angular.module("webApp").controller(
	"raiseTrainerController",
	raiseTrainerArray
);

angular.module("cordovaApp").controller(
	"raiseTrainerController",
	raiseTrainerArray
);
