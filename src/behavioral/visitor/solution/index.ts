// Solution: Add new operations without modifying classes
interface Visitor {
  visitCircle(circle: Circle): void
  visitRectangle(rectangle: Rectangle): void
}

interface Shape {
  accept(visitor: Visitor): void
}

class Circle implements Shape {
  constructor(readonly radius: number) {}

  accept(visitor: Visitor): void {
    visitor.visitCircle(this)
  }
}

class Rectangle implements Shape {
  constructor(
    readonly width: number,
    readonly height: number
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitRectangle(this)
  }
}

class DrawVisitor implements Visitor {
  visitCircle(circle: Circle): void {
    console.log(`Drawing circle with radius ${circle.radius}`)
  }

  visitRectangle(rectangle: Rectangle): void {
    console.log(`Drawing rectangle ${rectangle.width}x${rectangle.height}`)
  }
}

class AreaVisitor implements Visitor {
  visitCircle(circle: Circle): void {
    const area = Math.PI * circle.radius ** 2
    console.log(`Circle area: ${area.toFixed(2)}`)
  }

  visitRectangle(rectangle: Rectangle): void {
    const area = rectangle.width * rectangle.height
    console.log(`Rectangle area: ${area}`)
  }
}

export function run() {
  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)]

  const drawVisitor = new DrawVisitor()
  const areaVisitor = new AreaVisitor()

  console.log('Drawing shapes:')
  shapes.forEach((shape) => shape.accept(drawVisitor))

  console.log('\nCalculating areas:')
  shapes.forEach((shape) => shape.accept(areaVisitor))
}

