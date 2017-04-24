// Code goes here

var routerApp = angular.module("routerApp", ["ui.router"]);



routerApp.config(
  ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/start");

      $stateProvider
        .state("start", {
          url: "/start",
          templateUrl: "start.html",
          controller: "startController"
        })
        .state("quest-1", {
          url: "/question-1",
          templateUrl: "quest-1.html",
          controller: "quest-1Controller"
        })
        .state("quest-2", {
            url: "/question-2",
            templateUrl: "quest-2.html",
            controller: "quest-1Controller"
        })



      ;

    }
  ]);

routerApp.controller("mainCtrl", ["$scope",
  function($scope) {
  
  }
]);
routerApp.controller("startController", ["$scope",
  function($scope) {
   
  }
]);

routerApp.controller("quest-1Controller", ["$scope",
  function($scope) {
   
  }
]);

routerApp.controller("quest-2Controller", ["$scope",
  function($scope) {
   
  }
]);