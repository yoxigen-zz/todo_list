(function(){
    angular.module("FunTodo").factory("model", model);

    model.$inject = ["DAL","ToDo"];



    function model(DAL,ToDo){

        //Will represent if the filter is turn on or off
        var filterIsOn = false;
        var toDosMap = getFromStorage();

        // The id of the toDos
        var id = 1;

        // The Dictionary that collect bad words
        var Dictionary = {
            lastUpdateDate : "22-02-2015",
            badWords : ["Fuck","Fucker","Blat"]
        };

        function getFromStorage(){
            var promise = dal.getAllTodos();
            return promise.then(function(result){
                return result;
            }, function(err){
                console.log(err);
            });
        }

        // Method to decide if text is appropriate
        function isExplicit (toDoText){
            if(!filterIsOn)
                return false;

            return Dictionary.badWords.some(function (item){
                return toDoText.toLowerCase().indexOf(item.toLowerCase()) > -1
            });
        }

        var modelApi = {
            getToDos : function(){
                if(!filterIsOn){
                    return new Promise(function(resolve){
                        resolve(toDosMap);
                    });
                }

                return new Promise(function(resolve){
                    var retToDos = new Map();
                    toDosMap.forEach(function(value, key){
                        if(!value.isExplicit){
                            retToDos.set(key, value);
                        }
                    });
                    resolve(retToDos);
                });
            },

            updateFilter : function(switchOn){
                filterIsOn = switchOn;
            }
        }

        return modelApi;
    }
})();