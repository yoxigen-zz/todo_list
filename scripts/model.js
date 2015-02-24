(function(){ 

    //Will represent if the filter is turn on or off
    var filterIsOn = false;

    //The HashMap of the todos
    var toDosMap = new Map();

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
            listOfToDos.forEach(function(key, value){
                
            });
        },

        saveToDos: function(taskText){
            var currentTime = new Date().getTime();
            
            var explicitFlag = isExplicit(taskText);

            var toDoInstance = new ToDo(taskText,currentTime,explicitFlag);
            
            toDosMap.set(id,toDoInstance);
            

               var p1 = dal.setAllTodos(toDoInstance);
               p1.then(function() {
                                    id++;
                                    console.log("The ToDo task was successfuly persisted"); // "Stuff worked!"
                }, function() {
                    toDosMap.get(id);
                    console.log("The ToDo can't be saved please try in a copule of seconds"); // Error: "It broke"
                });

            //alert("the to do id is:"+(id-1)+"text: "+toDosMap.get(id-1).toDo+" date : "+toDosMap.get(id-1).date+" explicit is: "+toDosMap.get(id-1).isExplicit);
        },

        deleteToDo: function(){
            // implement
        },

        updateFilter: function(switchOn){
            filterIsOn = switchOn;
        }
    };

    window.model = model;    
})();
