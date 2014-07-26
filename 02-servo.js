var johnnyFive = require('johnny-five'),
    board
;

board = new johnnyFive.Board();
board.on('ready', function () {
    var servo = new johnnyFive.Servo(9);
    servo.sweep();

    board.wait(3000, function () {
        servo
            .stop()
            .center()
        ;
    });
});
