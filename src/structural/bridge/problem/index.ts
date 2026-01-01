// Problem: Explosion of subclasses for each combination
class RedCircle {
  draw(): void {
    console.log('Drawing red circle')
  }
}

class BlueCircle {
  draw(): void {
    console.log('Drawing blue circle')
  }
}

class RedSquare {
  draw(): void {
    console.log('Drawing red square')
  }
}

class BlueSquare {
  draw(): void {
    console.log('Drawing blue square')
  }
}

// Need 4 classes for 2 shapes × 2 colors!
// Adding more shapes or colors = more classes!

export function run() {
  const shape1 = new RedCircle()
  const shape2 = new BlueSquare()

  shape1.draw()
  shape2.draw()
}

