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

    }
    var itemSubmitButton = document.getElementById("submit");
    if (itemSubmitButton !== null) {
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

    $('div.todo-list a').on( "click", function(event){
        event.preventDefault();
        var listId = event.target.pathname.split('/')[2];

        $.ajax({
            url: "/todo_lists/" + listId,
            method: "GET",
        }).done(function(data){
            // console.log(data);
            var replaceContainer = $('.container');
            // nameValue.value = '';
            // var listElements = document.getElementById('mystuff');
            replaceContainer.html(data);
            buttonFunction();

        }).fail(function(){
            alert('fail!');
        });

    });


    function buttonFunction(){ $('button#back').on( "click", function(event){

        console.log('button clicked');
        event.preventDefault();

        $.ajax({
            url: "/",
            method: "GET",
        }).done(function(data){
            console.log(data);
            var replaceContainer = $('body');
            // nameValue.value = '';
            // var listElements = document.getElementById('mystuff');
            replaceContainer.html(data);


        }).fail(function(){
            alert('fail!');
        });
     });
    }
});