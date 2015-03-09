angular.module("FunTodo").factory("ToDo", function(){

    function ToDo(id , toDo, date, isExplicit){
        this.id = id;
        this.toDo = toDo;
        this.date = date;
        this.isExplicit = isExplicit;
    }

    return ToDo;
});