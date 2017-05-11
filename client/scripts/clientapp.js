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
      controller: 'HomeController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//incomplete form
    .when('/incomplete-form', {
      templateUrl: '/views/templates/incompleteForm.html',
      controller: 'DayDetailController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//check in form
      //check in 1
      .when('/check-in-form/check-in-1', {
        templateUrl: '/views/templates/checkInForm/checkIn1.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 2
      .when('/check-in-form/check-in-2', {
        templateUrl: '/views/templates/checkInForm/checkIn2.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 3
      .when('/check-in-form/check-in-3', {
        templateUrl: '/views/templates/checkInForm/checkIn3.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 4
      .when('/check-in-form/check-in-4', {
        templateUrl: '/views/templates/checkInForm/checkIn4.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 5
      .when('/check-in-form/check-in-5', {
        templateUrl: '/views/templates/checkInForm/checkIn5.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 6
      .when('/check-in-form/check-in-6', {
        templateUrl: '/views/templates/checkInForm/checkIn6.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 7
      .when('/check-in-form/check-in-7', {
        templateUrl: '/views/templates/checkInForm/checkIn7.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 8
      .when('/check-in-form/check-in-8', {
        templateUrl: '/views/templates/checkInForm/checkIn8.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 9
      .when('/check-in-form/check-in-9', {
        templateUrl: '/views/templates/checkInForm/checkIn9.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 10
      .when('/check-in-form/check-in-10', {
        templateUrl: '/views/templates/checkInForm/checkIn10.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 11
      .when('/check-in-form/check-in-11', {
        templateUrl: '/views/templates/checkInForm/checkIn11.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 12
      .when('/check-in-form/check-in-12', {
        templateUrl: '/views/templates/checkInForm/checkIn12.html',
        controller: 'CheckInFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })
//ends check in form


//day detail
    .when('/day-detail', {
      templateUrl: '/views/templates/dayDetail.html',
      controller: 'DayDetialController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//graph summary
    .when('/graph-summary', {
      templateUrl: '/views/templates/graphSummary.html',
      controller: 'GraphSummaryController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })

//admin export
    .when('/admin-export', {
      templateUrl: '/views/templates/adminExport.html',
      controller: 'AdminExportController',
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
      redirectTo: 'login'
    });
}]);
