function MainController($scope, $http, questions, $state, $stateParams) {
    var ctrl = this;
    ctrl.$onInit = function(){
      ctrl.question = questions.questions[$stateParams.questionid - 1]
    }

    ctrl.updateScore = function(q){
      var nextStateId = parseInt($stateParams.questionid) + 1;
      $state.go('question', {questionid: nextStateId})
    }
}

NeymarEstCher.component('core', {
        controller: MainController,
        templateUrl: 'core.html',
        bindings: {
        }
    })
