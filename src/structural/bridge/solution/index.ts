// Solution: Separate abstraction from implementation
interface Color {
  applyColor(): string
}

class Red implements Color {
  applyColor(): string {
    return 'red'
  }
}

class Blue implements Color {
  applyColor(): string {
    return 'blue'
  }
}

abstract class Shape {
  constructor(protected color: Color) {}

  abstract draw(): void
}

class Circle extends Shape {
  draw(): void {
    console.log(`Drawing ${this.color.applyColor()} circle`)
  }
}

class Square extends Shape {
  draw(): void {
    console.log(`Drawing ${this.color.applyColor()} square`)
  }
}

export function run() {
  const redCircle = new Circle(new Red())
  const blueSquare = new Square(new Blue())

  redCircle.draw()
  blueSquare.draw()

  // Easy to add new colors or shapes independently!
}

