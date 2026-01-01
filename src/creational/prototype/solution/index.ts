// Solution: Clone existing objects
interface Prototype {
  clone(): Prototype
}

class Enemy implements Prototype {
  constructor(
    public name: string,
    public health: number,
    public damage: number,
    public sprite: string
  ) {}

  clone(): Enemy {
    return new Enemy(this.name, this.health, this.damage, this.sprite)
  }
}

export function run() {
  // Create prototype once
  const orcPrototype = new Enemy('Orc', 100, 20, 'orc.png')

  // Clone multiple times
  const enemy1 = orcPrototype.clone()
  const enemy2 = orcPrototype.clone()
  const enemy3 = orcPrototype.clone()

  // Can modify clones independently
  enemy2.health = 150

  console.log('Prototype:', orcPrototype)
  console.log('Enemy 1:', enemy1)
  console.log('Enemy 2:', enemy2)
  console.log('Enemy 3:', enemy3)
}

