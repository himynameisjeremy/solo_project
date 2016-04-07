myApp.factory("UserService", ["$http", function($http){
  var getUser = function(data){
    $http.get('/user').then(function(response) {
      if(response.data) {
        // $scope.userName = response.data.username;
        // $scope.id = response.data.id;
        // $scope.first_name = response.data.first_name;
        console.log('User Data in factory: ', response.data.userName);
        data = response.data;
      } else {
        $window.location.href = '/index.html';
      }
    });
  };
}]);
    return{
        getUser: getUser,
        data : data
    };
}]);
