var johnnyFive = require('johnny-five'),
    board
;

board = new johnnyFive.Board();
board.on('ready', function () {
    var button,
        led
    ;

    button = new johnnyFive.Button(5);
    led = new johnnyFive.Led(9);

    button.on('press', function () {
        led.toggle();
    });
});
