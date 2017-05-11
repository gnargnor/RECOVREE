var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
//login
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController'
    })

//terms of use
    .when('/terms', {
      templateUrl: '/views/templates/termsOfUse.html',
      controller: 'LoginController'
    })

//register
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })

//home
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//incomplete form
    .when('/incomplete-form', {
      templateUrl: '/views/templates/incompleteForm.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//check in form
  //lots of stuff here TBD

//day detail
    .when('/day-detail', {
      templateUrl: '/views/templates/dayDetail.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//graph summary
    .when('/graph-summary', {
      templateUrl: '/views/templates/graphSummary.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//admin export
    .when('/admin-export', {
      templateUrl: '/views/templates/adminExport.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//extra from base project
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
