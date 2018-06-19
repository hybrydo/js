$(document).ready(function(){
    //mouseover y mouseout

    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "green");
    // });

    // hover


    function cambiaRojo() {
         $(this).css("background", "red");
    }

function cambiaVerde() {
         $(this).css("background", "green");
     }

    caja.hover(cambiaRojo, cambiaVerde);

    //click, doble click
    caja.click(function(){
        $(this).css("background", "blue");
        $(this).css("color", "white");
    });


    caja.dblclick(function () {
        $(this).css("background", "pink");
        $(this).css("color", "black");
    });


    //focos blur

    var datos = $("#datos");

    $("#nombre").focus(function(){
        $(this).css("border", "2px solid green")
    });
    $("#nombre").blur(function () {
        $(this).css("border", "2px solid transparent")
      
        $("#datos").text($(this).val()).show();
    });


    //mousedown y mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "black");
    });

    //mousemove

    $(document).mousemove(function(event){
        $('body').css("cursor","none");
        console.log("en x" + event.clientX);
        console.log("en y" + event.clientY);
        $("#sigueme").css("left", event.clientX)
                    .css("top", event.clientY);
    });
});