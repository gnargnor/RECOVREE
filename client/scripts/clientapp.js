var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

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

//reflection form
      //feelings
      .when('/reflection-form/reflect-1', {
        templateUrl: '/views/templates/reflectionForm/reflect1.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 2
      .when('/reflection-form/reflect-2', {
        templateUrl: '/views/templates/reflectionForm/reflect2.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 3
      .when('/reflection-form/reflect-3', {
        templateUrl: '/views/templates/reflectionForm/reflect3.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 4
      .when('/reflection-form/reflect-4', {
        templateUrl: '/views/templates/reflectionForm/reflect4.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 5
      .when('/reflection-form/reflect-5', {
        templateUrl: '/views/templates/reflectionForm/reflect5.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 6
      .when('/reflection-form/reflect-6', {
        templateUrl: '/views/templates/reflectionForm/reflect6.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 7
      .when('/reflection-form/reflect-7', {
        templateUrl: '/views/templates/reflectionForm/reflect7.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 8
      .when('/reflection-form/reflect-8', {
        templateUrl: '/views/templates/reflectionForm/reflect8.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 9
      .when('/reflection-form/reflect-9', {
        templateUrl: '/views/templates/reflectionForm/reflect9.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 10
      .when('/reflection-form/reflect-10', {
        templateUrl: '/views/templates/reflectionForm/reflect10.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 11
      .when('/reflection-form/reflect-11', {
        templateUrl: '/views/templates/reflectionForm/reflect11.html',
        controller: 'ReflectionFormController',
        resolve: {
          getuser : ['UserService', function(UserService){
            return UserService.getuser();
          }]
        }
      })

      //check in 12
      .when('/reflection-form/reflect-12', {
        templateUrl: '/views/templates/reflectionForm/reflect12.html',
        controller: 'ReflectionFormController',
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
      controller: 'DayDetailController',
      // resolve: {
      //   getuser : ['UserService', function(UserService){
      //     return UserService.getuser();
      //   }]
      // }
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
    // .when('/info', {
    //   templateUrl: '/views/templates/info.html',
    //   controller: 'InfoController',
    //   resolve: {
    //     getuser : ['UserService', function(UserService){
    //       return UserService.getuser();
    //     }]
    //   }
    // })
    // .when('/user', {
    //   templateUrl: '/views/templates/user.html',
    //   controller: 'UserController',
    //   resolve: {
    //     getuser : ['UserService', function(UserService){
    //       return UserService.getuser();
    //     }]
    //   }
    // })

    .otherwise({
      redirectTo: 'login'
    });
}]);
