input.buttonA.onEvent(ButtonEvent.Click, function () {
    crickit.motor1.stop()
    crickit.motor2.stop()
})
function forwardAndRight () {
    crickit.tank(100, 100)
    light.showAnimation(light.rainbowAnimation, 3000)
    light.clear()
    crickit.motor1.stop()
    crickit.motor2.stop()
    pause(1000)
    crickit.tank(100, -100)
    light.showAnimation(light.theaterChaseAnimation, 2000)
    light.clear()
    crickit.motor1.stop()
    crickit.motor2.stop()
    pause(1000)
}
input.buttonB.onEvent(ButtonEvent.Click, function () {
    for (let index = 0; index < 4; index++) {
        forwardAndRight()
    }
})
forever(function () {
	
})
