myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  var userObject = {};

  //builds reflectionObject
  var reflectionObject = {};

    //creates feelings array
    var listOfFeelings = ['angry','anxious','depressed'];
    var feelingsArray = function(listOfFeelings){
      for (var i = 0; i < listOfFeelings.length; i++){
        feelingsArray.push({feeling: listOfFeelings[i], value: 'false'});
      }//ends loop
    };

    //creates stressors array
    var listOfStressors = ['children','money'];
    var stressorsArray = function(listOfStressors){
      for (var i = 0; i < listOfStressors.length; i++){
        stressorsArray.push({stressor: listOfStressors[i], value: 'false'});
      }//ends loop
    };

    // assigns key value pairs
    reflectionObject.feelings = feelingsArray;
    reflectionObject.drugAlcoholIntake = false;
    reflectionObject.medication = false;
    reflectionObject.sleep = 0;
    reflectionObject.dream = false;
    reflectionObject.exercise = 0;
    reflectionObject.food = 0;
    reflectionObject.spnsrMntrConnect = false;
    reflectionObject.groupMeet = false;
    reflectionObject.commntyService = false;
    reflectionObject.stressors = stressorsArray;
    reflectionObject.selfishDishonest = false;
    reflectionObject.howSelfshDishnt = '';
    reflectionObject.tomorrowGoal = '';
    reflectionObject.dailyGoal = '';
    reflectionObject.gratitude = '';
    reflectionObject.peerSupport = false;
    reflectionObject.counselor = false;
    reflectionObject.reflectionDate = new Date().getTime() /1000;
    reflectionObject.userObject = userObject;

  return {
    userObject : userObject,

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName);
          } else {
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/home");
        });
    },

    postToReflectionForm: function (postObject){
      console.log("$http.post:", postObject);
      //this funciton will need to post to the database
      //posts date, id, and feelings
    }

  };
}]);
