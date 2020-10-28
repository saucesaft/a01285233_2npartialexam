let total_years = 0
let total_millenials = 0
let total_baby_boomers = 0
let birth_year = 0
let dice_num = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    total_years = 0
    total_millenials = 0
    total_baby_boomers = 0
    for (let index = 0; index < 5; index++) {
        birth_year = randint(1949, 2010)
        total_years += birth_year
        basic.showNumber(birth_year)
        if (birth_year >= 1949 && birth_year <= 1968) {
            basic.showString("Baby Boom")
            total_baby_boomers += 1
        } else if (birth_year >= 1969 && birth_year <= 1980) {
            basic.showString("X Generation")
        } else if (birth_year >= 1981 && birth_year <= 1993) {
            basic.showString("Millenial")
            total_millenials += 1
        } else if (birth_year >= 1994 && birth_year <= 2010) {
            basic.showString("Z Generation")
        }
    }
    basic.showString("Average year:")
    basic.showNumber(total_years / 5)
    basic.showString("Total Millenials:")
    basic.showNumber(total_millenials)
    basic.showString("Total Baby Boomers:")
    basic.showNumber(total_baby_boomers)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(index)
    }
    basic.clearScreen()
    dice_num = randint(0, 6)
    basic.showNumber(dice_num)
    if (dice_num == 3 || dice_num == 6) {
        basic.showString("Win")
        music.playMelody("F G B F G C5 - - ", 120)
    } else {
        basic.showString("Lose")
        music.playTone(131, music.beat(BeatFraction.Breve))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 2
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
