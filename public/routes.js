NeymarEstCher.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/first_page.html',
            controller: mainController
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('1', {
            url: '/1',
            template: '<core></core>'
        });

});
