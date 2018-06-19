$(document).ready(function(){

    reloadLinks();

    $('#add_button').click(function(){
        $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');
        reloadLinks();
    });


  
});

function reloadLinks(){
    $('a').each(function (index) {
        var that = $(this);
        var enlaces = that.attr("href");
        that.attr('target','_blank');
        that.text(enlaces);
    });
}