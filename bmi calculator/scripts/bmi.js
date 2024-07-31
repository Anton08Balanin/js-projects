function calculateBMI() {
    const height = document.querySelector('.bmi-input-height')
        .value

    const weight = document.querySelector('.bmi-input-weight')
        .value

    const bmi = weight / Math.pow(height, 2)
    console.log(bmi.toFixed(1))

    let result = ''

    if (bmi.toFixed(1) < 18.5 && bmi.toFixed(1) > 0) {
        result = 'Untergewicht'
    } else if (bmi.toFixed(1) > 18.5 && bmi.toFixed(1) < 24.9) {
        result = 'Normalgewicht'
    } else {
        result = 'Übergewicht'
    }

    document.querySelector('.js-div')
        .innerHTML = `Ihr BMI ist ${bmi}.
      Sie haben ${result}`
}