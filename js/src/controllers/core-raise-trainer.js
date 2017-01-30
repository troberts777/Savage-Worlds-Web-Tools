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
		$scope.noFailures = false;
		$scope.noExactSuccesses = false;


		$scope.inlineCorrect = 0;
		$scope.inlineNumQuestions = 0;
		$scope.queryNumRaises = false;

		$scope.testQuestions = Array();
		var dice_object = new classDice();
		dice_object.init();
		dice_object.setAlwaysExplodingDice(true);
		$scope.startTime = 0;


		$translate([
			'GENERAL_CORRECT'
		]).then(
			function (translation) {
				$scope.generalCorrectWords = translation.GENERAL_CORRECT;
			}
		);

		$translate([
			'GENERAL_INCORRECT'
		]).then(
			function (translation) {
				$scope.generalInorrectWords = translation.GENERAL_INCORRECT;
			}
		);

		$scope.startTest = function() {
			$scope.inlineCorrect = 0;
			$scope.inlineNumQuestions = -1;

			$scope.lastQuestionResults = "";

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

		$scope.removeSavedItem = function( itemIndex ) {
			$translate([
				'CREATOR_DELETION_CONFIRMATION'
			]).then(
				function (translation) {
					$scope.confirmDialog(
						translation.CREATOR_DELETION_CONFIRMATION,
						function() {
							$scope.showConfirmDialog = false;
							$scope.saved_items = JSON.parse(localStorage[ savedItemsLocalStorageVariable ]);
							$scope.saved_items.splice( itemIndex, 1);
							localStorage[ savedItemsLocalStorageVariable ] = JSON.stringify( $scope.saved_items );
						}
					);
				}
			);
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
						answerObject = $scope.testQuestions[ $scope.currentQuestion - 1];
						$scope.lastQuestionResults = $scope.makeInlineResultsMessage( answerObject.roll, answerObject.target, answerObject.answer );
						$scope.inlineResultsPercentage = (($scope.inlineCorrect / $scope.inlineNumQuestions )  * 100 ).toFixed(3) + " %";
					} else {
						$scope.inlineResultsPercentage = "0 %";
						$scope.lastQuestionResults = "";
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


				if( $scope.noFailures && !$scope.noExactSuccesses  ) {
					isNotAFail = $scope.calcCurrentQuestion( $scope.testRollNumber, $scope.testTargetNumber );
					while( isNotAFail == "fail" ) {
						if($scope.tnAlways4) {
							$scope.testRollNumber = dice_object.rollDice("d6*");
						} else {
							$scope.testRollNumber = dice_object.rollDice("d10*");
						}
						isNotAFail = $scope.calcCurrentQuestion( $scope.testRollNumber, $scope.testTargetNumber );
					}
				}

				if( $scope.noExactSuccesses && !$scope.noFailures ) {
					while( $scope.testRollNumber == $scope.testTargetNumber ) {
						if($scope.tnAlways4) {
							$scope.testRollNumber = dice_object.rollDice("d6*");
						} else {
							$scope.testRollNumber = dice_object.rollDice("d10*");
						}
						isNotAFail = $scope.calcCurrentQuestion( $scope.testRollNumber, $scope.testTargetNumber );
					}
				}


				if( $scope.noFailures && $scope.noExactSuccesses  ) {
					isNotAFail = $scope.calcCurrentQuestion( $scope.testRollNumber, $scope.testTargetNumber );
					while( isNotAFail == "fail" || $scope.testRollNumber == $scope.testTargetNumber) {
						if($scope.tnAlways4) {
							$scope.testRollNumber = dice_object.rollDice("d6*");
						} else {
							$scope.testRollNumber = dice_object.rollDice("d10*");
						}
						isNotAFail = $scope.calcCurrentQuestion( $scope.testRollNumber, $scope.testTargetNumber );
					}
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

				answer.correct = $scope.calcCurrentQuestion( answer.roll, answer.target );



				if( $scope.noFailures && !$scope.noExactSuccesses  ) {
					while( answer.correct == "fail" ) {
						if( $scope.tnAlways4 ) {
							answer.roll = dice_object.rollDice("d6*");
						} else {
							answer.roll = dice_object.rollDice("d10*");
						}
						answer.correct = $scope.calcCurrentQuestion( answer.roll, answer.target );
					}
				}

				if( $scope.noExactSuccesses && !$scope.noFailures ) {
					while( answer.roll == answer.target ) {
						if( $scope.tnAlways4 ) {
							answer.roll = dice_object.rollDice("d6*");
						} else {
							answer.roll = dice_object.rollDice("d10*");
						}

						answer.correct = $scope.calcCurrentQuestion( answer.roll, answer.target );
					}
				}

				if( $scope.noFailures && $scope.noExactSuccesses  ) {
					while( answer.correct == "fail" || answer.roll == answer.target ) {
						if( $scope.tnAlways4 ) {
							answer.roll = dice_object.rollDice("d6*");
						} else {
							answer.roll = dice_object.rollDice("d10*");
						}
						answer.correct = $scope.calcCurrentQuestion( answer.roll, answer.target );
					}
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

		$scope.noFailuresClick = function($event) {
			if( $event )
				$scope.noFailures = false;
			else
				$scope.noFailures = true;
		}

		$scope.noExactSuccessesClick = function($event) {
			if( $event )
				$scope.noExactSuccesses = false;
			else
				$scope.noExactSuccesses = true;
		}


		$scope.queryNumRaisesClick = function($event) {
			if( $event )
				$scope.queryNumRaises = false;
			else
				$scope.queryNumRaises = true;
		}

		$scope.adjustSuccessFails = function( answerObject ) {
			if( answerObject.correct == answerObject.answer )
				answerObject.right = true;
			else
				answerObject.right = false;

			if( $scope.selectedShowInlineStats ) {
				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( answerObject.roll, answerObject.target, answerObject.answer );
			} else {
				$scope.lastQuestionResults = "";
			}


			$scope.nextQuestion();
			return answerObject;
		}

		$scope.calcCurrentQuestion = function(rollNum, targetNum) {
			if( $scope.queryNumRaises ) {
				if( rollNum >= $scope.testTargetNumber + 20) {
					return "5raises";
				} else if( rollNum >= targetNum + 16) {
					return "4raises";
				} else if( rollNum >= targetNum + 12) {
					return "3raises";
				} else if( rollNum >= targetNum + 8) {
					return "2raises";
				} else if( rollNum >= targetNum + 4) {
					return "raise";
				} else if( rollNum >= targetNum ) {
					return "success";
				} else {
					return "fail";
				}
			} else {
				if( rollNum >= targetNum + 4) {
					return "raise";
				} else if( rollNum >= targetNum ) {
					return "success";
				} else {
					return "fail";
				}
			}
		}

		$scope.calcCurrentQuestionName = function(rollNum, targetNum) {
			if( $scope.queryNumRaises ) {
				if( rollNum >= $scope.testTargetNumber + 20) {
					return "success with 5+ raises";
				} else if( rollNum >= targetNum + 16) {
					return "succcess with 4 raises";
				} else if( rollNum >= targetNum + 12) {
					return "success with 3 raises";
				} else if( rollNum >= targetNum + 8) {
					return "success with 2 raises";
				} else if( rollNum >= targetNum + 4) {
					return "success with a raise";
				} else if( rollNum >= targetNum ) {
					return "success";
				} else {
					return "fail";
				}
			} else {
				if( rollNum >= targetNum + 4) {
					return "success with a raise";
				} else if( rollNum >= targetNum ) {
					return "success";
				} else {
					return "fail";
				}
			}
		}


		$scope.clickFailure = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "fail";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "fail" ) ;

				$scope.inlineNumQuestions++;

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

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "success" ) ;

				$scope.inlineNumQuestions++;

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

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "raise" ) ;

				$scope.inlineNumQuestions++;

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

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "2raises" ) ;


				$scope.inlineNumQuestions++;

				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}

		}

		$scope.clickSuccess3Raises = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "3raises";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "3raises" ) ;

				$scope.inlineNumQuestions++;

				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}

		}

		$scope.clickSuccess4Raises = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "4raises";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "4raises" ) ;

				$scope.inlineNumQuestions++;

				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}

		}

		$scope.clickSuccess5Raises = function() {
			if( $scope.numberOfQuestions / 1 > 0 ) {
				$scope.testQuestions[ $scope.currentQuestion ].time = window.performance.now();
				$scope.testQuestions[ $scope.currentQuestion ].answer = "5raises";
				$scope.testQuestions[ $scope.currentQuestion ].answer = $scope.adjustSuccessFails( $scope.testQuestions[ $scope.currentQuestion ].answer );
			} else {

				$scope.lastQuestionResults = $scope.makeInlineResultsMessage( $scope.testRollNumber, $scope.testTargetNumber, "5raises" ) ;

				$scope.inlineNumQuestions++;

				$scope.inlineResultsPercentage = Math.ceil( $scope.inlineCorrect / $scope.inlineNumQuestions * 100 ) + "%";
				$scope.nextQuestion();
			}

		}

		$scope.makeInlineResultsMessage = function( rollNumber, targetNumber, selectedAnswer ) {


			returnValue = "TN " + targetNumber + " vs ROLL " + rollNumber + " is " + $scope.calcCurrentQuestionName(rollNumber, targetNumber);

			if( selectedAnswer == "5raises" ) {
				returnValue += ".<br />Your answer: " + "success with 5+ raises.<br />";
			} else if( selectedAnswer == "4raises" ) {
				returnValue += ".<br />Your answer: " + "success with 4 raises.<br />";
			} else if( selectedAnswer == "3raises" ) {
				returnValue += ".<br />Your answer: " + "success with 3 raises.<br />";
			} else if( selectedAnswer == "2raises" ) {
				returnValue += ".<br />Your answer: " + "success with 2 raises.<br />";
			} else if( selectedAnswer == "raise" ) {
				returnValue += ".<br />Your answer: " + "success with a raise.<br />";
			} else if( selectedAnswer == "success" ) {
				returnValue += ".<br />Your answer: " + "success.<br />";
			} else {
				returnValue += ".<br />Your answer: " + "fail.<br />";
			}


			if( $scope.calcCurrentQuestion(rollNumber, targetNumber) == selectedAnswer ) {
				returnValue += "<h4 class=\"color-green\">" + $scope.generalCorrectWords + "</h4>";
			} else {
				returnValue +="<h4 class=\"color-red\">" + $scope.generalInorrectWords + "</h4>";
			}

			return returnValue;
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
