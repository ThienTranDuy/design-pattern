// Solution: Define grammar and interpreter for language
interface Expression {
  interpret(): number
}

class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(): number {
    return this.value
  }
}

class AddExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(): number {
    return this.left.interpret() + this.right.interpret()
  }
}

class SubtractExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(): number {
    return this.left.interpret() - this.right.interpret()
  }
}

export function run() {
  // Build expression tree: (5 + 3) - 2
  const five = new NumberExpression(5)
  const three = new NumberExpression(3)
  const two = new NumberExpression(2)

  const add = new AddExpression(five, three)
  const subtract = new SubtractExpression(add, two)

  console.log('Result:', subtract.interpret()) // 6
}

