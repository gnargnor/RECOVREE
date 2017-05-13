myApp.controller('ReflectionFormController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ReflectionFormController sourced!');
  //tracks participants position in the form
  var formPostion = 1;

  //toggles feeling
  function toggleFeeling(feeling){
    feeling.value = !feeling.value;
  }

  // takes reflectionObject and either posts it or updates it then advances to the next screen
  function nextButton(reflectionObject){
    console.log("you clicked the next button");
    console.log("reflectionObject:", reflectionObject);

    if (formPostion === 1){
      //makes intial post to database
      $scope.postToReflectionForm(reflectionObject);
    }
    else{
      //updates today's reflectionObject
      $scope.updateReflectionForm(reflectionObject);
    }
    //moves on to the next question
    formPostion += 1;
    $location.path('/reflection-form/reflect-'+formPostion);
  }//ends nextButton

  //from factory
  $scope.userObject = UserService.userObject;
  $scope.reflectionObject = UserService.reflectionObject;
  $scope.postToReflectionForm = UserService.postToReflectionForm;
  $scope.updateReflectionForm = UserService.updateReflectionForm;

  //from controller
  $scope.toggleFeeling = toggleFeeling;
  $scope.nextButton = nextButton;

}]);
