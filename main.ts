input.onButtonPressed(Button.A, function () {
    X = 0
    while (X == 0) {
        radio.sendString("1")
        basic.pause(100)
        basic.showIcon(IconNames.No)
        radio.sendString("1")
        basic.pause(100)
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onButtonPressed(Button.AB, function () {
    X = 1
    basic.showIcon(IconNames.Square)
    basic.pause(200)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(200)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.clearScreen()
})
let X = 0
radio.setGroup(90)
radio.setTransmitPower(7)
