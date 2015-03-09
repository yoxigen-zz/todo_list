(function(){ 

    //Will represent if the filter is turn on or off
    var filterIsOn = false;
    var toDosMap = getFromStorage();

    //The id of the todos
    var id =1;


//The Dictionary that collect bad words
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

//Thethod the decide if text iss appropriate 
    function isExplicit (toDoText){

        if(!filterIsOn)
            return false;

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

        saveToDos: function(taskText){
            var currentTime = new Date().getTime();
            
            var explicitFlag = isExplicit(taskText);

            var toDoInstance = new ToDo(taskText,currentTime,explicitFlag);
            
            toDosMap[id]=toDoInstance;
             //alert("id is: "+id);

               var p1 = dal.setAllTodos(toDosMap);
               p1.then(function() {
                                    id++;
                                    console.log("The ToDo task was successfuly persisted"); // "Stuff worked!"
                                    //alert("id is: "+id);
                }, function() {
                    toDosMap.get(id);
                    console.log("The ToDo can't be saved please try in a copule of seconds"); // Error: "It broke"
                });

          
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
