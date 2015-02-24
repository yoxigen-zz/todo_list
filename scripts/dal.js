(function() {

    // name of local storage
    var localStorageKey = "Fun!";

    var dal = {

        // Return a list of all tasks in the local storage (as promise)
        getAllTodos : function() {

            // create promise for all data from local storage
            var promise = new Promise(function(resolve, reject) {

                // get string from local storage
                var objectsString = localStorage.getItem(localStorageKey);

                // deserialize string to list of objects
                var objectsJson = JSON.parse(objectsString);

                // on success
                resolve(objectsJson);

            });

            // return promise for all data
            return promise;
        },

        

        // save the list of all tasks in the local storage
        setAllTodos : function(mapOfObjects) {

            // create promise for all data from local storage
            var promise = new Promise(function(resolve, reject) {

                // serialize list of objects to string
                var objectsString = JSON.stringify(mapOfObjects);

                // save string to local storage
                localStorage.setItem(localStorageKey, objectsString);

                // on success
                resolve();

            });

            // return promise for success/failure
            return promise;
        }

    };


    // make the DAL avaiable from outside of this scope
    window.dal = dal;


})();
