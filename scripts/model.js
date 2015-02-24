(function(){ 
    var filterIsOn = false;

    var model = {
        getToDos: function(){
            return [];
        },

        saveToDos: function(){
            // implement
        },

        deleteToDo: function(){
            // implement
        }

        updateFilter: function(switchOn){
            filterIsOn = switchOn;
        }
    };

    window.model = model;    
})();
