myApp.controller("MenuCtrl", ['$scope', '$location','MenuFactory',
  function($scope, $location,MenuFactory) {
      $scope.success=false;


    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.createMenu=function(){
      console.log('**');
      console.log($scope.menu);
    MenuFactory.create($scope.menu).success(function(data){
    console.log(data);
     $scope.success=true;

    });
    }
  }
]);