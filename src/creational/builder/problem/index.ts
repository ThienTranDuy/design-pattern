// Problem: Complex object construction with many parameters
class House {
  constructor(
    readonly walls: number,
    readonly doors: number,
    readonly windows: number,
    readonly roof: string,
    readonly garage: boolean,
    readonly pool: boolean,
    readonly garden: boolean
  ) {}
}

export function run() {
  // Hard to read, easy to mess up parameter order
  const house1 = new House(4, 2, 6, 'tiles', false, false, false)
  const house2 = new House(4, 3, 8, 'tiles', true, true, true)

  console.log('House 1:', house1)
  console.log('House 2:', house2)
}

