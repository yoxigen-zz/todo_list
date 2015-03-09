(function(){
    angular.module("FunTodo").factory("model", model);
    model.$inject = ["DAL"];

    function model(DAL){
        // Boolean indicating if explicit words are filtered or not
        var filterIsOn = false;
        var toDosMap;

        var modelApi = {
            getToDos : function(){
                if(!filterIsOn){
                    return new Promise(function(resolve){
                        resolve(toDosMap);
                    });
                }

                return new Promise(function(resolve){
                    var retToDos =
                });
            }

            updateFilter : function(switchOn){
                filterIsOn = switchOn;
            }
        }

        return modelApi;
    }
})();