var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/start');

  $stateProvider

  // START PAGE =================================
  .state('start', {
    url: '/start',
    templateUrl: 'start.html'
  })

  // QUESTIONNAIRE FORM ========================================
  .state('questionnaire', {
    url: '/questionnaire',
    templateUrl: 'questionnaire.html',
    controller: 'mainController'
  })

  // nested list with custom controller
  .state('questionnaire.question-1', {
      url: '/question-1',
      templateUrl: 'question-1.html',
  })

  .state('questionnaire.question-2', {
      url: '/question-2',
      templateUrl: 'question-2.html',
  })
  
  .state('questionnaire.question-3', {
        url: '/question-3',
        templateUrl: 'question-3.html',
  })

    ;
        
});

routerApp.controller('mainController', function($scope) {   
});


