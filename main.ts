// When button A is pressed, go to the previous group
input.onButtonPressed(Button.A, function () {
    currentGroup = currentGroup - 1
    basic.showNumber(currentGroup)
    radio.setGroup(currentGroup)
})
// When a string message is received, make the robot move
radio.onReceivedString(function (receivedString) {
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
    } else if (receivedString == "RainbowLights") {
        trick = true
        rainbowLights()
        trick = false
    }
})
// When button B is pressed, go to the next group
input.onButtonPressed(Button.B, function () {
    currentGroup = currentGroup + 1
    basic.showNumber(currentGroup)
    radio.setGroup(currentGroup)
})
function rainbowLights () {
    // Create a rainbow on the NeoPixel strip
    strip.showRainbow(1, 360)
    // Define a list of rainbow colours as RGB tuples
    // Red
    // Orange
    // Yellow
    // Green
    // Blue
    // Indigo
    // Violet
    rainbowColors = [
    [255, 0, 0],
    [255, 127, 0],
    [255, 255, 0],
    [0, 255, 0],
    [0, 0, 255],
    [75, 0, 130],
    [143, 0, 255]
    ]
    for (let i = 0; i <= 19; i++) {
        // Rotate the strip lights
        strip.rotate(1)
        strip.show()
        // Cycle through rainbow colours for headlights
        colorIndex = i % rainbowColors.length
        rgb = rainbowColors[colorIndex]
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, rgb[0], rgb[1], rgb[2])
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, rgb[0], rgb[1], rgb[2])
        basic.pause(100)
    }
    // Turn off lights after
    strip.clear()
    strip.show()
    cuteBot.closeheadlights()
}
// Optional: If a number value is received (like tilt), store it
radio.onReceivedValue(function (name, value) {
    if (name == "Pitch") {
        pitchValue = value
    }
})
let pitchValue = 0
let rgb: number[] = []
let colorIndex = 0
let rainbowColors: number[][] = []
let trick = false
let strip: neopixel.Strip = null
let currentGroup = 0
// Set the group (channel) for radio communication
radio.setGroup(currentGroup)
strip = neopixel.create(DigitalPin.P15, 7, NeoPixelMode.RGB)
