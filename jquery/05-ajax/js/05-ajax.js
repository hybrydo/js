$(document).ready(function(){
    
    // Load hacer una peticion ajax
    //$("#datos").load("https://reqres.in/");


    //GET Y POST
    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        console.log(response);
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "<img src=" + element.avatar +">"+"</img>" + "</p>");
        });
    });

   

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        //     console.log(usuario);
        // $.post($(this).attr("action"), usuario, function (response) {
        //     console.log(response);
        // });

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("enviando usuario... ");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("ha ocurrido un error");
            },
            timeout: 1000
        });

        return false;
    });

});