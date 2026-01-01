// Problem: Duplicated algorithm structure in subclasses
class TeaMaker {
  make(): void {
    console.log('Boiling water')
    console.log('Steeping tea')
    console.log('Pouring into cup')
    console.log('Adding lemon')
  }
}

class CoffeeMaker {
  make(): void {
    console.log('Boiling water')
    console.log('Brewing coffee')
    console.log('Pouring into cup')
    console.log('Adding sugar')
  }
}

export function run() {
  const tea = new TeaMaker()
  const coffee = new CoffeeMaker()

  console.log('Making tea:')
  tea.make()

  console.log('\nMaking coffee:')
  coffee.make()
}

