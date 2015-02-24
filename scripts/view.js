(function(){

    var view = {
        refreshToDoTable: function(){
            var toDos = model.getToDos();

            // get handle on div
            var container = document.getElementById('toDoList');
            var list = document.createElement('ul');
            // loop array
            for (i = 0; i < toDos.length; i++) {
                var toDoObject = toDos[i];
                // create li element
                    var record = document.createElement('li');
                    var toDoContent = document.createElement('div');
                    var content = document.createElement('span');
                    var date = document.createElement('small');
                    var deleteButton = document.createElement('button');
                    // set text
                    content.textContent = toDoObject.text;
                    date.textContent = toDoObject.date;
                    deleteButton.toDoObject = toDoObject;
                    deleteButton.addEventListener('click',view.deleteToDo);

                    // append record
                    toDoContent.appendChild(content);
                    toDoContent.appendChild(date);
                    record.appendChild(toDoContent);
                    record.appendChild(deleteButton);
                    list.appendChild(record);
            }
            // append li to container
            container.appendChild(list);
        },

        addToDo: function(){
        var newToDoText = document.getElementById('newToDoText');
        model.saveToDos(newToDoText.value);
        view.refreshToDoTable();
        },

        deleteToDo: function(){
        var toDoObject = this.toDoObject;
        model.deleteToDo(toDoObject.id)
        view.refreshToDoTable();
        },

        updateFilter: function(){
        model.updateFilter(this.checked);
        }
    };

view.refreshToDoTable();
window.view = view;
var filter = document.querySelector("input[type='checkbox']");
filter.addEventListener('change',view.updateFilter);

var addButton = document.querySelector("button[id='saveButton']");
addButton.addEventListener('click',view.addToDo);

})();

