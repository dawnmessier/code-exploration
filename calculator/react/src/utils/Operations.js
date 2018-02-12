export const Operations = {
    'divide': (acc, current) => acc / current,
    'multiply': (acc, current) => acc * current,
    'subtract': (acc, current) => acc - current,
    'add': (acc, current) => acc + current,
    'total': (arr, reducer) => arr.reduce(reducer)
}

export const IsNumber = (value) => !Number.isNaN(parseFloat(value))
