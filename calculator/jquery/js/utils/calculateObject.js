const Calculate = {
    currentTotal: '',
    firstValue: '',
    nextValue: '',
    activeOperator: null,
    totalClear: 0,
    numbers: [],

    getValue: function(value) {
        if(value === 'clear'){
            if(this.totalClear === 0 && this.nextValue !== '') {
                    this.nextValue = ''
                    this.numbers.pop()
                    this.totalClear = this.totalClear++
                    return (this.firstValue !== '') ? this.firstValue : 0
            } else {
                this.firstValue = ''
                this.nextValue = ''
                this.currentTotal = ''
                this.activeOperator = null
                this.totalClear = 0
                this.numbers = []
                return 0
            }
        } else if(this.activeOperator === 'total'){
            //reset defaults after final total - it would be better to use resetCalculator(), but the old firstValue and currentTotal is still set despite setting the empty values (timing issue)
            this.firstValue = ''
            this.nextValue = ''
            this.currentTotal = ''
            this.activeOperator = null
            this.totalClear = 0
            this.numbers = []
        }

        if (IsNumber(value) || value === '.') {
            this.totalClear = 0
            if(this.currentTotal === '') {
                this.firstValue = this.firstValue.concat(value)
                return this.firstValue
            } else {
                this.nextValue = this.nextValue.concat(value)
                return this.nextValue
            }
        } else if(Object.keys(Operations).includes(value)) {
            this.totalClear = 0
            if(this.firstValue === '' && this.nextValue === ''){
                return 0
            } else if(this.activeOperator !== null && this.firstValue !== '' && this.nextValue !== '') {
                this.numbers[0] = parseFloat(this.firstValue)
                this.numbers[1] = parseFloat(this.nextValue)

                this.currentTotal = Operations['total'](this.numbers, Operations[this.activeOperator])
                this.firstValue = this.currentTotal
                this.nextValue = ''
            } else if(this.nextValue === '') {
                this.currentTotal = parseFloat(this.firstValue)
            }

            this.activeOperator = value

            return this.currentTotal
        }
    }
}

let Calc = {}
let Calculator = Calculate.getValue

Calc.getValue = Calculator.bind(calculate)
