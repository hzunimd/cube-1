cubebit.create(DigitalPin.P0, 5)
cubebit.setLedColor(0xff0000)
cubebit.setPlane(2, CBAxis.XY, 0x80FF00)
basic.forever(function () {
    cubebit.ledRotate()
    basic.pause(100)
})
