myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  //created userObject
  var userObject = {};

  //builds reflectionObject
  var reflectionObject = {};

    //creates feelings array
    var listOfFeelings = ['angry','anxious','depressed', 'distant', 'discerning',
      'discouraged', 'excited', 'frustrated', 'grateful', 'guilty', 'happy', 'hopeful',
      'hostile', 'insignificant', 'jealous', 'loving', 'motivated', 'numb', 'optimistic',
      'overwhelmed', 'peaceful', 'proud', 'sad', 'safe', 'thoughtful', 'valuable'];
    var feelingsArray = buildArray(listOfFeelings);

    //creates stressors array
    var listOfStressors = ['children','money'];
    var stressorsArray = buildArray(listOfStressors);

    //builds an array of objects based on a list of values
    function buildArray(list){
      var newArray = [];
      for (var i = 0; i < list.length; i++){
        var newObject = {};
        newObject.name = list[i];
        newObject.value = false;
        newArray.push(newObject);
      }//ends loop
      return newArray;
    }

    var today = new Date();
    var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
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
    reflectionObject.dailyGoal = false;
    reflectionObject.gratitude = '';
    reflectionObject.peerSupport = false;
    reflectionObject.counselor = false;
    reflectionObject.reflectionDate = '';
    reflectionObject.reflectionTime = time;
    reflectionObject.userObject = userObject;
    reflectionObject.formPosition = 1;
  //finishes building reflectionObject

  function postToReflectionForm(reflectionObject){
    console.log("$http.post:", reflectionObject);
    //this funciton will need to post to the database
    //posts date, id, and feelings
    //beacuse of async we will need to .then take the response set the
    //reflectionObject = response and then pass reflectionObject into the
    //advance to next function
    advanceReflectionForm(reflectionObject);
    $http.post('/reflection', reflectionObject).then(function(response) {
      console.log('66: POST Reflection', response);
    });
  }//ends postToReflectionForm

  function updateReflectionForm(reflectionObject){
    console.log("$http.put:", reflectionObject);
    //this funciton will need to update the database
    //find by id and date then update
    //beacuse of async we will need to .then take the response set the
    //reflectionObject = response and then pass reflectionObject into the
    //advance to next function
    advanceReflectionForm(reflectionObject);
  }//ends updateReflectionForm

  function advanceReflectionForm(reflectionObject){
    //moves on to the next question
    reflectionObject.formPosition += 1;
    console.log("formPosition",reflectionObject.formPosition);
    $location.path('/reflection-form/reflect-'+reflectionObject.formPosition);
  }//ends advanceReflectionForm

  //return out of UserService Factory
  return {
    userObject : userObject,
    reflectionObject: reflectionObject,
    date: date,
    time: time,
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

    // takes reflectionObject and either posts it or updates it then advances to the next screen
    reflectionFormNextButton: function (reflectionObject){
      console.log("you clicked the next button");
      console.log("reflectionObject from NEXT Btn:", reflectionObject);

      if (reflectionObject.formPosition === 1){
        //makes intial post to database
        postToReflectionForm(reflectionObject);
      }
      else{
        //updates today's reflectionObject
        updateReflectionForm(reflectionObject);
      }
    }//ends reflectionFormNextButton

  };
}]);
