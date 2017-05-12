myApp.controller('CheckInFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('CheckInFormController sourced!');
  var feelings = [
    {
      name: 'angry',
      value: false
    },
    {
      name: 'anxious',
      value: false
    },
    {
      name: 'depressed',
      value: false
    },
  ];

  var todaysFeelings = {};

  function nextButton(){
    console.log("you clicked the next button");
    console.log("feeling object");
  }

  $scope.feelings = feelings;
  $scope.todaysFeelings = todaysFeelings;
  $scope.todaysFeelings.feelings = feelings;
  $scope.nextButton = nextButton;
}]);
