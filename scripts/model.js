(function(){ 

    //Will represent if the filter is turn on or off
    var filterIsOn = false;

    //The HashMap of the todos
    var toDosMap = {};

    //The id of the todos
    var id =1;


//The Dictionary that collect bad words
    var Dictionary ={
       lastUpdateDate : "22-02-2015",
       badWords : ["Fuck","Fucker","Blat"]
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
            if(filterIsOn){
                return toDosMap;
            }

            var returnedToDos = new Array();
            for(var toDo in toDosMap.values()){
                if(!toDo.isExplicit){
                    returnedToDos.add(toDo);
                }
            }
            return returnedToDos;
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
