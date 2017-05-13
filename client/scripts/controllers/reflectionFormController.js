myApp.controller('ReflectionFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ReflectionFormController sourced!');


  function nextButton(feelings){
    console.log("you clicked the next button");
    console.log("feeling object", feelings);

    //copies the object
    var todaysFeelings = angular.copy(feelings);

    //testing what userObject is
    console.log('userObject', $scope.userObject);

    //makes intial post to database
    $scope.postToReflectionForm(todaysFeelings);

    //clears out feelings object answers
    for (var i = 0; i < feelings.length; i++ ){
      feelings[i].value = '';
    }
    console.log("feelings after clean out", feelings);

    //moves on to the next question
    // $location.path("/reflection-form/reflect-2");
  }//ends nextButton

  //from factory
  $scope.userObject = UserService.userObject;
  $scope.reflectionObject = UserService.reflectionObject;
  console.log("$scope.reflectionObject", $scope.reflectionObject);
  $scope.postToReflectionForm = UserService.postToReflectionForm;

  //from controller
  $scope.nextButton = nextButton;

}]);
