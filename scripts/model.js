(function(){ 
    var filterIsOn = false;
    var listOfToDos = new HashMap();

    var model = {
        getToDos: function(){
            listOfToDos.forEach(function(key, value){
                
            });
        },

        saveToDos: function(){
            // implement
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
