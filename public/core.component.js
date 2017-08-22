function MainController($scope, $http, questions) {
    var ctrl = this;
    ctrl.question = questions.questions[0]

     ctrl.updateScore = function(q){
       console.log(q);
       ctrl.question = questions.questions[1];
    }
}

NeymarEstCher.component('core', {
        controller: MainController,
        templateUrl: 'core.html',
        bindings: {
        }
    })
