(function(){ 
    var filterIsOn = false;
    var toDosMap = new Map();

    var model = {
        getToDos: function(){
            return toDosMap.values();
        },

        saveToDos: function(){
            // implement
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
