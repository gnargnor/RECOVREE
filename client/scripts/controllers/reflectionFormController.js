myApp.controller('ReflectionFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ReflectionFormController sourced!');

  //toggles feeling
  function toggleFeeling(feeling){
    console.log("feeling:",feeling);
    feeling.value = !feeling.value;
  }

  // takes reflectionObject and either posts it or updates it. 
  function nextButton(reflectionObject){
    console.log("you clicked the next button");
    console.log("reflectionObject:", reflectionObject);

    //makes intial post to database
    $scope.postToReflectionForm(reflectionObject);

    //moves on to the next question
    // $location.path("/reflection-form/reflect-2");
  }//ends nextButton

  //from factory
  $scope.userObject = UserService.userObject;
  $scope.reflectionObject = UserService.reflectionObject;
  $scope.postToReflectionForm = UserService.postToReflectionForm;

  //from controller
  $scope.toggleFeeling = toggleFeeling;
  $scope.nextButton = nextButton;

}]);
