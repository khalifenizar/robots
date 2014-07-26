var johnnyFive = require('johnny-five'),
    board
;

board = new johnnyFive.Board();
board.on('ready', function () {
    var led13 = new johnnyFive.Led(13);
    led13.strobe(1000);
});
