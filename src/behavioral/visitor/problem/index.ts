// Problem: Adding new operations requires modifying all classes
class Circle {
  constructor(readonly radius: number) {}

  draw(): void {
    console.log(`Drawing circle with radius ${this.radius}`)
  }

  // If we want to add export(), calculateArea(), etc.
  // we must modify this class each time!
}

class Rectangle {
  constructor(
    readonly width: number,
    readonly height: number
  ) {}

  draw(): void {
    console.log(`Drawing rectangle ${this.width}x${this.height}`)
  }

  // Same problem here!
}

export function run() {
  const circle = new Circle(5)
  const rectangle = new Rectangle(10, 20)

  circle.draw()
  rectangle.draw()
}

