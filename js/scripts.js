$(document).ready(function () {
	
    for (var i = 0; i <= 560; i++) {
        $('<div />', {
            'class': 'cell',
                'id': 'div' + i
        }).appendTo('#container');
    }

    $('.cell').mouseover(function () {
    $(this).stop(true).fadeTo(200, Math.random());
}).mouseout(function () {
    $(this).fadeTo(200, Math.random());
});

});

