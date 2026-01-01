// Problem: Subclass explosion for feature combinations
class SimpleCoffee {
  cost(): number {
    return 10
  }

  description(): string {
    return 'Simple coffee'
  }
}

class CoffeeWithMilk {
  cost(): number {
    return 12
  }

  description(): string {
    return 'Coffee with milk'
  }
}

class CoffeeWithSugar {
  cost(): number {
    return 11
  }

  description(): string {
    return 'Coffee with sugar'
  }
}

class CoffeeWithMilkAndSugar {
  cost(): number {
    return 13
  }

  description(): string {
    return 'Coffee with milk and sugar'
  }
}

// Need many classes for all combinations!

export function run() {
  const coffee = new CoffeeWithMilkAndSugar()
  console.log(`${coffee.description()}: $${coffee.cost()}`)
}

