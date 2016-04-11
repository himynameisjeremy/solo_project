myApp.factory("FactoryService", ["$http", function($http){
  var user = {};
  var userStart = function(){
    $http.get('/user').then(function(response) {
        if(response.data) {
          // $scope.userName = response.data.username;
          // $scope.id = response.data.id;
          // $scope.first_name = response.data.first_name;
          user = response.data;
          console.log('User Data: ', user);
          return user;
        } else {
          $window.location.href = '/index.html';
        }
    });
  };


  return {
    userStart : userStart,
    user : user

  };
}]);
