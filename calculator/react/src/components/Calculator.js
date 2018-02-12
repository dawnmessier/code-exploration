import React, {Component} from 'react'
import {TotalPanel} from '../styles/Calculator'
import NumberGrid from './NumberGrid'
import {Operations, IsNumber} from '../utils/Operations'

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            total: '0'
        }

        this.numbers = []
        this.firstValue = ''
        this.nextValue = ''
        this.currentTotal = ''
        this.activeOperator = null
        this.totalClear = 0
    }

    resetCalculator = () => {
        this.numbers = []
        this.firstValue = ''
        this.nextValue = ''
        this.currentTotal = ''
        this.activeOperator = null
        this.totalClear = 0
    }

    operate = (value) => {
        let currentValue = ''

        if (IsNumber(value) || value === '.') {
            this.totalClear = 0

            if(this.currentTotal === '') {
                this.firstValue = this.firstValue.concat(value)
                currentValue = this.firstValue
            } else {
                this.nextValue = this.nextValue.concat(value)
                currentValue = this.nextValue
            }
        } else if(Object.keys(Operations).includes(value)) {
            this.totalClear = 0

            if(this.firstValue === '' && this.nextValue === ''){
                currentValue = 0
            } else if(this.activeOperator !== null && this.firstValue !== '' && this.nextValue !== '') {
                this.numbers = [parseFloat(this.firstValue), parseFloat(this.nextValue)]

                currentValue = Operations.total(this.numbers, Operations[this.activeOperator])

                this.firstValue = currentValue
                this.nextValue = ''
                this.currentTotal = currentValue
            } else if(this.nextValue === '') {
                let parsedFirst = parseFloat(this.firstValue)
                this.firstValue = parsedFirst
                currentValue = parsedFirst
                this.currentTotal = currentValue
            }

            this.activeOperator = value
        }

        return currentValue
    }

    handleClick = (e) => {
        let value = e.target.value
        let currentValue = ''

        if(value === 'clear'){
            if(this.totalClear === 0 && this.nextValue !== '') {
                this.nextValue = ''
                this.totalClear = this.totalClear++
                this.numbers = this.numbers.pop()
                currentValue = (this.firstValue !== '') ? this.firstValue : 0
            } else {
                this.resetCalculator()
                currentValue = 0
            }
        } else if(this.activeOperator === 'total'){
            this.resetCalculator()
            currentValue = this.operate(value)
        } else {
            currentValue = this.operate(value)
        }

        this.setState({
            total: currentValue
        })
    }

    render(){
        return (
            <div>
                <TotalPanel>{this.state.total}</TotalPanel>
                <NumberGrid handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Calculator
