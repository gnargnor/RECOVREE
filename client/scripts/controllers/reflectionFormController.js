myApp.controller('ReflectionFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ReflectionFormController sourced!');

  //toggles feeling
  function toggleFeeling(feeling){
    feeling.value = !feeling.value;
  }

  //from factory objects
  $scope.userObject = UserService.userObject;
  $scope.reflectionObject = UserService.reflectionObject;

  //from factory functions
  $scope.reflectionFormNextButton = UserService.reflectionFormNextButton;

  //from controller
  $scope.toggleFeeling = toggleFeeling;

}]);
