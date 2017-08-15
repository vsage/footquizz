function QuestionController(questions){
    var ctrl = this;
    ctrl.test = "test"
    // ctrl.question = questions.first.question;
    ctrl.$onInit = function(){
      ctrl.test = questions.first.question;
      console.log(ctrl.question);
    }

}

NeymarEstCher.controller('QuestionController', QuestionController)


NeymarEstCher.component('question', {
        templateUrl: 'question/question.template.html',
        controller: 'QuestionController',
        bindings: {
            question: '<'
        }
    })
