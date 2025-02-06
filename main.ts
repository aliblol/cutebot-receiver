function DisplayQuickNum (num: number) {
    GraphicsCCN = num
    basic.clearScreen()
    if (GraphicsCCN >= 10 && GraphicsCCN < 20) {
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        GraphicsCCN = GraphicsCCN - 10
    }
    if (GraphicsCCN >= 20 && GraphicsCCN < 30) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        GraphicsCCN = GraphicsCCN - 20
    }
    if (GraphicsCCN >= 30 && GraphicsCCN < 40) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        GraphicsCCN = GraphicsCCN - 30
    }
    if (GraphicsCCN == 0) {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 0)
        led.plot(3, 4)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
    }
    if (GraphicsCCN == 1) {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
    if (GraphicsCCN == 2) {
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        led.plot(4, 4)
    }
    if (GraphicsCCN == 3) {
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 4)
    }
    if (GraphicsCCN == 4) {
        led.plot(4, 0)
        led.plot(2, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
    if (GraphicsCCN == 5) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(4, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 4)
    }
    if (GraphicsCCN == 6) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(4, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(2, 3)
        led.plot(2, 4)
    }
    if (GraphicsCCN == 7) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
    if (GraphicsCCN == 8) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(2, 3)
        led.plot(2, 4)
    }
    if (GraphicsCCN == 9) {
        led.plot(4, 0)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
}
input.onButtonPressed(Button.A, function () {
    currentGroup += -1
    DisplayQuickNum(currentGroup)
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine("Received: " + receivedString)
    if (receivedString == "forward") {
        cuteBot.forward()
    } else if (receivedString == "left") {
        cuteBot.turnleft()
    } else if (receivedString == "right") {
        cuteBot.turnright()
    } else if (receivedString == "backward") {
        cuteBot.backforward()
    } else if (receivedString == "stop") {
        cuteBot.stopcar()
    }
})
input.onButtonPressed(Button.B, function () {
    currentGroup += 1
    DisplayQuickNum(currentGroup)
})
radio.onReceivedValue(function (name, value) {
    serial.writeLine("Received: " + name + " " + value)
    if (name == "Pitch") {
        pitchValue = value
    }
})
let pitchValue = 0
let GraphicsCCN = 0
let currentGroup = 0
radio.setGroup(currentGroup)
