function MainController($scope, $http, questions, $state, $stateParams, score) {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.question = questions.questions[$stateParams.questionid - 1]
      if (score.previousScoreExists($stateParams.questionid)) {
        score.scoreUpdate("negatif", category)
      }
    }

    ctrl.updateScore = function(answer){
      var id = parseInt($stateParams.questionid)
      var nextStateId = id + 1;
      var category = questions.questions[id-1].category
      score.scoreUpdate(answer, category)
      score.pushScore(id-1, answer)
      $state.go('question', {questionid: nextStateId})
    }
}

NeymarEstCher.component('core', {
        controller: MainController,
        templateUrl: 'core.html',
        bindings: {
        }
    })
