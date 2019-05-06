var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});

app.controller('yourCtrl', function($scope) {
    $scope.gender = "Male";
    $scope.age = 27;
});

app.controller('namesCtrl', function($scope) {
  $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Hege',country:'Sweden'},
      {name:'Kai',country:'Denmark'}
  ];
});

app.run(function($rootScope) {
    $rootScope.color = 'blue';
});
app.controller('colorCtrl', function($scope) {
    $scope.color = "red";
});