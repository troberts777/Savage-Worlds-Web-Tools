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
		$scope.numberOfQuestions = 20;
		$scope.currentQuestion = -1;
		$scope.currentQuestionDisplay = 0;
		$scope.testQuestions = Array();
		var dice_object = new classDice();
		dice_object.init();
		dice_object.setAlwaysExplodingDice(true);
		$scope.startTime = 0;

		$scope.startTest = function() {
			$scope.makeTestResults();
			$scope.currentQuestion = -1;
			$scope.nextQuestion();
			$scope.showWelcome = false;
			$scope.showTest = true;
			$scope.showResults = false;
			$scope.startTime = window.performance.now();
		}

		$scope.nextQuestion = function() {
			$scope.currentQuestion++;

			if( $scope.testQuestions[ $scope.currentQuestion ] ) {
				$scope.currentQuestionDisplay = $scope.currentQuestion + 1 + "/" + $scope.numberOfQuestions;
				$scope.testTargetNumber = $scope.testQuestions[ $scope.currentQuestion ].target;
				$scope.testRollNumber = $scope.testQuestions[ $scope.currentQuestion ].roll;

			} else {
				$scope.calculateResults();
				$scope.showWelcome = false;
				$scope.showTest = false;
				$scope.showResults = true;
			}
		}

		$scope.calculateResults = function() {
			correctCount = 0;
			$scope.averageAnswerTime = 0;
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
				$scope.testQuestions[testCount].answerTime = ($scope.testQuestions[testCount].answerTime / 1000 ).toFixed(3);
			}
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
			for(var testCount = 0; testCount< $scope.numberOfQuestions; testCount++) {
				var answer = {
					roll: dice_object.rollDice("d10*"),
					target: getRandomIntInclusive(4,15),
					time: -1,
					right: false,
					answer: "",
					correct: ""
				};

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

		$scope.adjustSuccessFails = function( answerObject ) {
			if( answerObject.correct == answerObject.answer )
				answerObject.right = true;
			else
				answerObject.right = false;

			$scope.nextQuestion();
			return answerObject;
		}

		$scope.clickFailure = function() {
			$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
			$scope.testQuestions[ $scope.currentQuestion ].answer = "fail";
			$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
		}
		$scope.clickSuccess = function() {
			$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
			$scope.testQuestions[ $scope.currentQuestion ].answer = "success";
			$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
		}
		$scope.clickSuccessRaise = function() {
			$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
			$scope.testQuestions[ $scope.currentQuestion ].answer = "raise";
			$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
		}
		$scope.clickSuccess2Raises = function() {
			$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
			$scope.testQuestions[ $scope.currentQuestion ].answer = "2raises";
			$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );

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
