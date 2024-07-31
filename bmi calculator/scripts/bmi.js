function calculateBMI() {
    const height = document.querySelector('.bmi-input-height')
        .value

    const weight = document.querySelector('.bmi-input-weight')
        .value


    const bmi = weight / Math.pow(height, 2)
    console.log(bmi)
}