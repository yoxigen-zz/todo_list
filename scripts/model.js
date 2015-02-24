(function(){ 
    var filterIsOn = false;
    var toDosMap = new Map();

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
            return toDosMap.values();
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
