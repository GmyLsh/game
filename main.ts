WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
