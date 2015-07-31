app.controller('MainController',['$scope', function($scope){
  $scope.title = 'Search'; 
  $scope.students = [{ firstName: 'John', lastName: 'Smith' },
                     { firstName: 'Scarlett', lastName: 'Storm' },
                     { firstName: 'Dark', lastName: 'Demon'}
  ];
}]);
