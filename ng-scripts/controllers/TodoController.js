(function(){

    angular.module("FunTodo").controller("TodoController", TodoController);

    TodoController.$inject = ["$scope","model"];


    function TodoController($scope,model){
            refreshToDoList();

            $scope.deleteToDo =  function (id) {
                 model.deleteToDo(id);
                 refreshToDoList();
            };

            $scope.addToDo = function () {
                if($scope.newToDo != ""){
                    model.saveToDos($scope.newToDo);
                    refreshToDoTable();
                    $scope.newToDo = "";
                }
            };

            $scope.updateFilter = function () {
                model.updateFilter($scope.filter);
                refreshToDoTable();
            };

            function refreshToDoList(){
               var p = model.getToDos();
                p.then(function (toDos) {
                 $scope.toDoList = toDos;
                }, function () {
                    console.log("Problem getting the ToDo list"); // Error: "It broke"
                });
                //$scope.toDoList =[{ "id": 1, "text" : "todo1" , "date": "724901741920"},{"id": 2, "text" : "todo2" , "date": "724901741920"}];
            }
    }
})();
