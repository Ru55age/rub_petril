rub.onSwitchEvent(RubEvents.On, function () {
    rub.setLedColor(0x00ff00)
    rub.positionServo(servoPos.Open, servoSpeed.Slow)
    basic.pause(1000)
    rub.positionServo(servoPos.Switched, servoSpeed.VeryFast)
    basic.pause(200)
    rub.positionServo(servoPos.Closed, servoSpeed.Fast)
    rub.setLedColor(0xff0000)
    basic.pause(200)
    rub.ledRainbow()
    basic.pause(200)
    rub.setLedColor(0x0000FF)
    basic.pause(500)
    basic.pause(500)
    basic.showString("PETRIL")
    rub.positionServo(servoPos.Open, servoSpeed.Fast)
    rub.positionServo(servoPos.Closed, servoSpeed.VeryFast)
    rub.positionServo(servoPos.Open, servoSpeed.Fast)
    rub.positionServo(servoPos.Closed, servoSpeed.VeryFast)
    rub.positionServo(servoPos.Open, servoSpeed.Fast)
    rub.positionServo(servoPos.Closed, servoSpeed.VeryFast)
    music.setVolume(169)
    soundExpression.sad.playUntilDone()
    basic.pause(500)
    basic.showLeds(`
        # . # . #
        . . # . .
        # # # # #
        . # # # .
        # . # . #
        `)
    rub.ledClear()
    basic.pause(500)
    basic.clearScreen()
    basic.pause(2000)
    basic.showString("CHEESE")
    soundExpression.giggle.playUntilDone()
    basic.pause(2000)
    basic.clearScreen()
    rub.setLedColor(0xff0000)
})
rub.setLedColor(0xff0000)
rub.setServoPresets(70, 100, 160)
rub.positionServo(servoPos.Closed, servoSpeed.VeryFast)
basic.forever(function () {
	
})
