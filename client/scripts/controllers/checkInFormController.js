myApp.controller('CheckInFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('CheckInFormController sourced!');

  $scope.nextButton = nextButton;
  function nextButton(){
    console.log("you clicked the next button");
  }
}]);
