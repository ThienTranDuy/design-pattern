// Problem: Creating similar objects requires repeating initialization
class Enemy {
  constructor(
    readonly name: string,
    readonly health: number,
    readonly damage: number,
    readonly sprite: string
  ) {}
}

export function run() {
  // Must repeat all parameters for similar objects
  const enemy1 = new Enemy('Orc', 100, 20, 'orc.png')
  const enemy2 = new Enemy('Orc', 100, 20, 'orc.png') // Duplicate!
  const enemy3 = new Enemy('Orc', 100, 20, 'orc.png') // Duplicate!

  console.log('Enemy 1:', enemy1)
  console.log('Enemy 2:', enemy2)
  console.log('Enemy 3:', enemy3)
}

