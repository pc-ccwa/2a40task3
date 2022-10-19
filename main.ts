input.onButtonPressed(Button.A, function () {
    while (true) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . # .
        . # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
