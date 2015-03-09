(function(){

    angular.module("FunTodo").controller("TodoController", TodoController);

    TodoController.$inject = ["$scope"];

    function TodoController($scope){
        $scope.test = "Danger Danger Ran Door!";
    }
})();
