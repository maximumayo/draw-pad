$(document).ready(function(){

    for(var i=0; i < 256; i++){
        $('#container').append('<div class="tile"></div>');
    }

    $('.tile').hover(function(){
            var red = Math.floor((Math.random() * 254) + 1);
            var green = Math.floor((Math.random() * 254) + 1);
            var blue = Math.floor((Math.random() * 254) + 1);
            $(this).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
        });

    $('#new').click(function() {
        if ($('#rows').val() === ("")) {
            $('.tile').css('background-color', 'white');
        }
        else { newPad(); }
    });

    $('#clear').click(function(){
        $('.tile').css('background-color', 'white');
    });

});

function newPad(){
    var gridSize = $('#rows').val();
    $('#container').find('.tile').remove();

    for(var i=0; i < gridSize * gridSize; i++){
        $('#container').append('<div class="tile"></div>');
    }

    var square = (600 / gridSize);

    $('.tile').css('width', square);
    $('.tile').css('height', square);

    $('.tile').hover(function(){
            var red = Math.floor((Math.random() * 254) + 1);
            var green = Math.floor((Math.random() * 254) + 1);
            var blue = Math.floor((Math.random() * 254) + 1);
            $(this).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
        });
}