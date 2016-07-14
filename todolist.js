
var myApp = angular.module('todolist',[]);          //creating the angular module with empty array(no dependencies)

myApp.controller('TodoListController', ['$scope', function($scope) {

      

 	$scope.newToDos = [];   //new to dos added in this array

      $scope.priorities = ['Low','Medium','High'];  //array for priority levels scope

      $scope.priority = $scope.priorities[1];    

 //function to add new to do and push objects into the newtodos array
      $scope.newToDofunc = function() {

      	$scope.newToDos.push(
      	{
      		name: $scope.newToDo.name,
      		priority: $scope.priority,
      		done: false
      	}
      	);

      	$scope.newToDo.name = '';                 //Resetting the valus after input added
      	$scope.priority = $scope.priorities[1];
      }

//Function to remove a to do  reused from http://yeoman.io/codelab/write-app.html
      $scope.removenewToDo = function (index) {
  $scope.newToDos.splice(index, 1);
};






    



      }]);