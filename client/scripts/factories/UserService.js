myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');
  var feelings = [
    {
      name: 'angry',
      value: ''
    },
    {
      name: 'anxious',
      value: ''
    },
    {
      name: 'depressed',
      value: ''
    },
  ];
  var feelingsObject = {feelingsArray: feelings};
  console.log("feelingsObject", feelingsObject);

  var userObject = {};

  return {
    userObject : userObject,
    feelingsObject: feelingsObject,

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
