(function(){ 
    var filterIsOn = false;

    var Dictionary ={
       lastUpdateDate : "22-02-2015",
       badWords : ["Fuck","Fuck you","Fucker","Blat"]
    }

    isExplicit : function (toDoText){
        for each (var item in Dictionary.badWords)
        {
            if (toDoText.toLowerCase().indexOf(item.toLowerCase()) > -1)
                return 1;
        }

        return 0;
    }

    

    var model = {
        getToDos: function(){
            return [];
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
