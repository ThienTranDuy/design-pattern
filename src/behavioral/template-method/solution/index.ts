// Solution: Define skeleton in base class, details in subclasses
abstract class BeverageMaker {
  // Template method
  make(): void {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }

  private boilWater(): void {
    console.log('Boiling water')
  }

  private pourInCup(): void {
    console.log('Pouring into cup')
  }

  // Abstract methods to be implemented by subclasses
  protected abstract brew(): void
  protected abstract addCondiments(): void
}

class TeaMaker extends BeverageMaker {
  protected brew(): void {
    console.log('Steeping tea')
  }

  protected addCondiments(): void {
    console.log('Adding lemon')
  }
}

class CoffeeMaker extends BeverageMaker {
  protected brew(): void {
    console.log('Brewing coffee')
  }

  protected addCondiments(): void {
    console.log('Adding sugar')
  }
}

export function run() {
  console.log('Making tea:')
  const tea = new TeaMaker()
  tea.make()

  console.log('\nMaking coffee:')
  const coffee = new CoffeeMaker()
  coffee.make()
}

