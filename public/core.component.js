function MainController($scope, $http, questions, $state, $stateParams, score, convert) {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.question = questions.questions[$stateParams.questionid - 1]
      var id = parseInt($stateParams.questionid)
      var previousScore = score.previousScoreExists(id-1);
      previousScore ? score.scoreUpdate(-previousScore.points, ctrl.question.category) : "";
    }

    ctrl.updateScore = function(answer){
      var id = parseInt($stateParams.questionid)
      var nextStateId = id + 1;
      var category = questions.questions[id-1].category
      var points = convert(answer)
      score.scoreUpdate(points, category)
      score.pushScore(points, id-1, category)
      $state.go('question', {questionid: nextStateId})
    }
}

NeymarEstCher.component('core', {
        controller: MainController,
        templateUrl: 'core.html',
        bindings: {
        }
    })
