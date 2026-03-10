function setGroup () {
    basic.showNumber(currentGroup)
    radio.setGroup(currentGroup)
}
// When button A is pressed, go to the previous group
input.onButtonPressed(Button.A, function () {
    currentGroup = currentGroup - 1
    setGroup()
})
// When a string message is received, make the robot move
radio.onReceivedString(function (receivedString) {
    if (receivedString == forward) {
        cuteBot.forward()
    } else if (receivedString == left) {
        cuteBot.turnleft()
    } else if (receivedString == right) {
        cuteBot.turnright()
    } else if (receivedString == backward) {
        cuteBot.backforward()
    } else if (receivedString == stop) {
        cuteBot.stopcar()
    }
})
// When button B is pressed, go to the next group
input.onButtonPressed(Button.B, function () {
    currentGroup = currentGroup + 1
    setGroup()
})
let right = ""
let left = ""
let forward = ""
let backward = ""
let stop = ""
let currentGroup = 0
// Set the group (channel) for radio communication
radio.setGroup(currentGroup)
stop = "stop"
backward = "backward"
forward = "forward"
left = "left"
right = "right"
let RainbowLights = "RainbowLights"
