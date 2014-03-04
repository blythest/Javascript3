$(document).ready(function(){

    var submitButton = document.getElementById("form_submit");
    
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        
        $.ajax({
            url: "/",
            method: "POST",
            data: $("form#todo_list_form").serialize(),
        }).done(function(data){
        var nameValue = document.getElementById('todo_id');
        nameValue.value = '';
        }).fail(function(){
            alert('fail!');
        });

    });

    var getListsFromServer = function() {
        $.ajax({
            url:'/todo_lists/poll',
            method: 'GET',
        }).done(function(data) {
       
            var listElements = document.getElementById('mystuff');
            listElements.innerHTML = data;

        });
    };
    setInterval(getListsFromServer, 2000);
});