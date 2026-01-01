// Problem: Creating many similar objects wastes memory
class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: string,
    private texture: string,
    private color: string
  ) {}

  render(): void {
    console.log(`Rendering ${this.type} tree at (${this.x}, ${this.y})`)
  }
}

export function run() {
  // Creating 1000 trees = lots of duplicated data!
  const trees: Tree[] = []

  for (let i = 0; i < 1000; i++) {
    trees.push(new Tree(i, i * 2, 'Oak', 'oak_texture.png', 'green'))
  }

  console.log(`Created ${trees.length} trees (memory intensive!)`)
}

