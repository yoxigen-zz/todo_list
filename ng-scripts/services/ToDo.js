angular.module("FunTodo").factory("ToDo", function(){

    function ToDo(toDo, date, isExplicit){
        this.toDo = toDo;
        this.date = date;
        this.isExplicit = isExplicit;
    }

    return ToDo;
});