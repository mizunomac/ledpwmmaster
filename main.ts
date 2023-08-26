input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(123)
basic.forever(function () {
	
})
