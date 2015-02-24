(function(){ 
    var filterIsOn = false;
    var toDosMap = new Map();
    var id =1;

    var Dictionary ={
       lastUpdateDate : "22-02-2015",
       badWords : ["Fuck","Fucker","Blat"]
    }

    function isExplicit (toDoText){
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
            

            alert(isExplicit("need to eat the diner with Mother Fucker Bitch Blat"));
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
