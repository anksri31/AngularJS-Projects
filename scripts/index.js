var app = angular.module('myApp',[]);
app.controller('myController',function($scope){
    $scope.name =""
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        if(!$scope.addMe) return;
        if($scope.products.indexOf($scope.addMe) === -1){
            $scope.products.push($scope.addMe);

        }else
        {
            alert('Item already Exist');
        }
        
    }  
    
    $scope.removeItem = function(index){
        
            $scope.products.splice(index,1)
            if($scope.products.length ===0){
                alert('All Items deleted');
            }
          
       
    }
});