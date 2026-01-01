// Problem: Evaluating expressions with manual parsing
export function run() {
  const expression = '5 + 3 - 2'

  // Manual parsing and evaluation
  const tokens = expression.split(' ')
  let result = parseInt(tokens[0])

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i]
    const operand = parseInt(tokens[i + 1])

    if (operator === '+') {
      result += operand
    } else if (operator === '-') {
      result -= operand
    }
  }

  console.log(`${expression} = ${result}`)
}

