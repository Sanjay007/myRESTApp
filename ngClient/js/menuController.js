myApp.controller("MenuCtrl", ['$scope', '$location','MenuFactory',
  function($scope, $location,MenuFactory) {
      $scope.success=false;

     $scope.menus='';

      MenuFactory.getAllmenu().success(function(data){
        console.log('ddd'+data);
        $scope.menus=data;
      });


    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.createMenu=function(){

    MenuFactory.create($scope.menu).success(function(data){
    $scope.menus.push($scope.menu);
     $scope.success=true;
     $scope.menu='';

    });
    }
  }
]);