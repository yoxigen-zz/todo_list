(function(){ 
    var filterIsOn = false;
    var toDosMap = getFromStorage();

    var Dictionary ={
       lastUpdateDate : "22-02-2015",
       badWords : ["Fuck","Fucker","Blat"]
    };

    function getFromStorage(){
        var promise = dal.getAllTodos();
        return promise.then(function(result) {
            return result;
        }, function(err) {
            console.log(err);
        });
    }

    function isExplicit (toDoText){
        return Dictionary.badWords.some(function (item){
            return toDoText.toLowerCase().indexOf(item.toLowerCase()) > -1
        });
    }

    var model = {
        getToDos: function(){
            if(!filterIsOn){
                return new Promise(function(resolve){
                    resolve(toDosMap);
                });
            }

            return new Promise(function(resolve){
                var returnedToDos = new Map();
                toDosMap.forEach(function(value, key){
                    if(!value.isExplicit){
                        returnedToDos.set(key, value);
                    }
                });
                resolve(returnedToDos);
            });
        },

        saveToDos: function(){
            alert(isExplicit("need to eat the diner with Mother Fucker Bitch Blat"));
        },

        deleteToDo: function(id){
            if(toDosMap.has(id)){
                toDosMap.delete(id);
            }
        },

        updateFilter: function(switchOn){
            filterIsOn = switchOn;
        }
    };

    window.model = model;    
})();
