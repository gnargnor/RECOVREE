myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  var userObject = {};

  //builds reflectionObject
  var reflectionObject = {};

    //creates feelings array
    var listOfFeelings = ['angry','anxious','depressed'];
    var feelingsArray = buildArray(listOfFeelings);

    //creates stressors array
    var listOfStressors = ['children','money'];
    var stressorsArray = buildArray(listOfStressors);

    function buildArray(list){
      var newArray = [];
      for (var i = 0; i < list.length; i++){
        console.log("is this happening?");
        var newObject = {};
        newObject.name = list[i];
        newObject.value = false;
        newArray.push(newObject);
      }//ends loop
      return newArray;
    }

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

  //return out of UserService Factory
  return {
    userObject : userObject,
    reflectionObject: reflectionObject,

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
