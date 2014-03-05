$(document).ready(function(){

    var submitButton = document.getElementById("form_submit");

    if (submitButton !== null ) {
    
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
            var nameValue = document.getElementById('todo_id');
            nameValue.value = '';
            var listElements = document.getElementById('todo-list');
            listElements.innerHTML = data;

            
        }).fail(function(){
            alert('fail!');
        });

    });

} else {
    var itemSubmitButton = document.getElementById("submit");
    
    itemSubmitButton.addEventListener('click', function(event){
        event.preventDefault();
        $.ajax({
            url: " ",
            method: "POST",
            data: $("form#todo-item-form").serialize(),
        }).done(function(data){
            var nameValue = document.getElementById('task_id');
            nameValue.value = '';
            var listElements = document.getElementById('mystuff');
            listElements.innerHTML = data;

            
        }).fail(function(){
            alert('fail!');
        });

    });
    }


});


    // var getListsFromServer = function() {
    //     $.ajax({
    //         url:'/todo_lists/poll',
    //         method: 'GET',
    //     }).done(function(data) {
    //         var listElements = document.getElementById('mystuff');
    //         listElements.innerHTML = data;

    //     });
    // };
    // setInterval(getListsFromServer, 2000);

                // //nameValue.value = what's in the form input
            // var newList = document.createElement('div');
            // newList.className = 'todo-list';
            // var listText = document.createTextNode(nameValue.value);
            // newList.appendChild(listText);
            // var currentList = document.getElementById('mystuff');
            // currentList.appendChild(newList);