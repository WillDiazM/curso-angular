$(document).ready(function(){
    $('#mostrar').hide();
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeTo('slow',1);
    });
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $('#caja').fadeTo('slow',0);
    });

    $("#todoenuno").click(function(){
        $("#caja").fadeToggle('fast');
    });
});