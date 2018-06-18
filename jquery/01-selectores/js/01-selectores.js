$(document).ready(function(){

    $("#rojo").css("background","red")
              .css("color","white");

    $("#amarillo").css("background", "yellow")
                  .css("color", "green");

    $("#verde").css("background", "green")
               .css("color", "white");

    var mi_clase = $('.zebra');

    $('.sin_borde').click(function(){
        $(this).addClass('zebra');
    });


    //selectores de etiquetas
    
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var that = $(this);
        if (!that.hasClass('grande')){
             that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    //selectores de atributo

     $('[title="google"]').css('backgraund', 'blue');

     //otros
     //$('p, a').addClass('margen-superior');

    var busqued = $("#caja .resultado").eq(0).parent().parent().parent().find('[title="google"]');

     console.log(busqued);

});