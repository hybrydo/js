$(document).ready(function(){

    //mover elemento por la página
    $('.elemento').draggable();

    //redimensionar
    $('.elemento').resizable();

    //seleccionar y ordenar elementos
   // $(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable();

    //drop

    $("€elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro de el area");
        }
    });
    
});