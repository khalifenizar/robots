var johnnyFive = require('johnny-five'),
    board,
    motor
;

function theyBeSpinning () {
    motor.start(200);
    board.wait(2000, function () {
        motor.stop();
        board.wait(1000, function () {
            theyBeSpinning();
        });
    });
}

board = new johnnyFive.Board();
board.on('ready', function () {
    motor = new johnnyFive.Motor(9);
    theyBeSpinning();
});
