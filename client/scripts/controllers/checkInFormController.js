myApp.controller('CheckInFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('CheckInFormController sourced!');
  var feelingList = ['angry','anxious'];
  var feelings = [];
  var feeling = {};
  var values = [ true, false];
  feeling.name = '';
  feeling.value = Boolean;

  $scope.feelingList = feelingList;
  $scope.angry = 'angry';
  $scope.anxious = 'anxious';
  $scope.feeling = feeling;
  $scope.values = values;

  $scope.nextButton = nextButton;
  function nextButton(){
    console.log("you clicked the next button");
    console.log("feeling object");
  }
}]);
