function QuestionController(questions, $stateParams){
    var ctrl = this;

    ctrl.$onInit = function(){
      console.log("init", ctrl.q);
    }
    ctrl.$onChanges = function(changesObj){
      console.log(changesObj);
    }

    ctrl.chose = function(key){
      ctrl.onUpdate({q:key})
    }

}

NeymarEstCher.controller('QuestionController', QuestionController)


NeymarEstCher.component('question', {
        templateUrl: 'question/question.template.html',
        controller: 'QuestionController',
        bindings: {
            q: '<',
            onUpdate: '&'
        }
    })
