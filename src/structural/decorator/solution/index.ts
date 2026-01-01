// Solution: Add features dynamically by wrapping
interface Coffee {
  cost(): number
  description(): string
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10
  }

  description(): string {
    return 'Simple coffee'
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number
  abstract description(): string
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2
  }

  description(): string {
    return `${this.coffee.description()}, milk`
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1
  }

  description(): string {
    return `${this.coffee.description()}, sugar`
  }
}

export function run() {
  let coffee: Coffee = new SimpleCoffee()
  console.log(`${coffee.description()}: $${coffee.cost()}`)

  coffee = new MilkDecorator(coffee)
  console.log(`${coffee.description()}: $${coffee.cost()}`)

  coffee = new SugarDecorator(coffee)
  console.log(`${coffee.description()}: $${coffee.cost()}`)
}

