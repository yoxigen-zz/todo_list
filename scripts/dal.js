(function() {

    // name of local storage
    var localStorageKey = "Fun!";

    var dal = {

        // Return a list of all tasks in the local storage (as promise)
        getAllTodos : function() {

            // get string from local storage
            var objectsString = localStorage.getItem(localStorageKey);

            // deserialize string to list of objects
            var objectsJson = JSON.parse(objectsString);

            // TODO return promise for all data
            return objectsJson;
        },

        // save the list of all tasks in the local storage
        setAllTodos : function(mapOfObjects) {

            // serialize list of objects to string
            var objectsString = JSON.stringify(mapOfObjects);

            // save string to local storage
            localStorage.setItem(localStorageKey, objectsString);

            // TODO return promise for success/failure
        }

    };


    // make the DAL avaiable from outside of this scope
    window.dal = dal;


})();
