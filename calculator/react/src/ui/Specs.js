import React from 'react'
import {Specifications} from '../styles/Calculator'

const Specs = () => {
    return (
        <Specifications>
            <h2>Calculator Specifications</h2>
            <ol>
                <li>Create panel for total and table of buttons including
                    <ul>
                        <li>Numbers (Floating point value)</li>
                        <li>Operators</li>
                        <li>Clear/all-clear - first press clears nextValue; second press clears all values</li>
                        <li>Decimal point</li>
                    </ul>
                </li>
                <li>If first number entered is an operator (non-number), nothing happens (total = 0)</li>
                <li>Use reducers on array of numbers = [currentTotal, nextValue]</li>
                <li>First number value is stored as a concatenation of numbers selected before the first operator key (and decimal point) = currentTotal</li>
                <li>First operator selected is stored as activeOperator
                    <ul>
                <li>If operator is "=" and there is only one value, total = currentTotal</li>
                </ul>
                </li>
                <li>Next value is stored as a concatenation of numbers selected before the next operator key = nextValue</li>
                <li>When a second operator is selected, currentTotal is updated in array with numbers.reduce(operatorFn)</li>
                <li>currentTotal is auto-updated after an operation is performed</li>
                <li>After reduction, activeOperator is updated with a new operator</li>
                <li>After reduction, nextValue is updated with a new concatenation of numbers</li>
            </ol>
        </Specifications>
    )
}

export default Specs
