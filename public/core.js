var NeymarEstCher = angular.module('NeymarEstCher', ['ui.router']);

function mainController($scope, $http, questions) {
    $scope.formData = {};
    console.log("controller");

    $scope.question = questions.question

    // when landing on the page, get all todos and show the

}
