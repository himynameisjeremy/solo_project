myApp.controller('UserController', ['$scope', '$http', "FactoryService", '$window', function($scope, $http, FactoryService, $window) {
    // $scope.userName;
    // $scope.id;
    // $scope.first_name;

    // This happens after page load, which means it has authenticated if it was ever going to
    // NOT SECURE

    // $http.get('/user').then(function(response) {
    //     if(response.data) {
    //         $scope.userName = response.data.username;
    //         $scope.id = response.data.id;
    //         $scope.first_name = response.data.first_name;
    //         console.log('User Data: ', $scope.userName);
    //     } else {
    //         $window.location.href = '/index.html';
    //     }
    // });

    FactoryService.userStart();

    $scope.anything = FactoryService.user;
    console.log($scope.anything);

    // console.log(FactoryService.user);
}]);

myApp.controller('UserHomeController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.dareArray;
  $http.get('/darelist').then(function(response){
    console.log("Console Log in UserHomeController: ", response.data);
    $scope.dareArray = response.data;
  });
}]);

myApp.controller('UnfinishedController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.unfinishedArray;
  $http.get('/unfinishedList').then(function(response){
    console.log("Console Log in UnfinishedController: ", response.data);
    $scope.unfinishedArray = response.data;
  });
}]);

myApp.controller('CreateController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.createDare = {};
  $scope.submitForm = function(){
    $http.post('/create', $scope.createDare).then(function(request){
      //posts to SQL database, but idk why it is sending full html page
      // console.log("Console Log in CreateController: ", request.data);
    });
    $window.location.href = '#toBeDone';
  };
}]);
