function Calculate() {
    let currentTotal = ''
    let firstValue = ''
    let nextValue = ''
    let activeOperator = null
    let totalClear = 0
    let numbers = []

    resetCalculator = () => {
        firstValue = ''
        nextValue = ''
        currentTotal = ''
        activeOperator = null
        totalClear = 0
        numbers = []
    }

    operate = (value) => {
        if (IsNumber(value) || value === '.') {
            totalClear = 0
            if(currentTotal === '') {
                firstValue = firstValue.concat(value)
                return firstValue
            } else {
                nextValue = nextValue.concat(value)
                return nextValue
            }
        } else if(Object.keys(Operations).includes(value)) {
            totalClear = 0
            if(firstValue === '' && nextValue === ''){
                return 0
            } else if(activeOperator !== null && firstValue !== '' && nextValue !== '') {
                numbers[0] = parseFloat(firstValue)
                numbers[1] = parseFloat(nextValue)

                currentTotal = Operations.total(numbers, Operations[activeOperator])

                firstValue = currentTotal
                nextValue = ''
            } else if(nextValue === '') {
                currentTotal = parseFloat(firstValue)
            }

            activeOperator = value

            return currentTotal
        }
    }

    return {
        getValue: (value) => {
            if(value === 'clear'){
                if(totalClear === 0 && nextValue !== '') {
                        nextValue = ''
                        numbers.pop()
                        totalClear = totalClear++
                        return (firstValue !== '') ? firstValue : 0
                } else {
                    resetCalculator()
                    return 0
                }
            } else if(activeOperator === 'total'){
                resetCalculator()
                return operate(value)
            } else {
                return operate(value)
            }
        }
    }
}

let Calc = new Calculate()
