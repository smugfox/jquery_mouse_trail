$(document).ready(function () {
	
    for (var i = 0; i <= 560; i++) {
        $('<div />', {
            'class': 'cell',
                'id': 'div' + i
        }).appendTo('#container');
    }
//Had to ask on Stack Overflow on how to make a function that
//when you hover over a div, it'll change the color of the div.
    $('.cell').mouseover(function () {
    $(this).stop(true).fadeTo(200, Math.random());
            }).mouseout(function () {
    $(this).css("background","rgb("+Math.floor
    (Math.random()*256)+","+Math.floor(Math.random()*256)+
    ","+Math.floor(Math.random()*256)+")");
});

});


