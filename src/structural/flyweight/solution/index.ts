// Solution: Share common state (intrinsic) across objects
class TreeType {
  constructor(
    private type: string,
    private texture: string,
    private color: string
  ) {}

  render(x: number, y: number): void {
    console.log(`Rendering ${this.type} tree at (${x}, ${y})`)
  }
}

class TreeTypeFactory {
  private static treeTypes: Map<string, TreeType> = new Map()

  static getTreeType(type: string, texture: string, color: string): TreeType {
    const key = `${type}-${texture}-${color}`

    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(type, texture, color))
      console.log('Creating new tree type:', key)
    }

    return this.treeTypes.get(key)!
  }
}

class Tree {
  constructor(
    private x: number,
    private y: number,
    private treeType: TreeType
  ) {}

  render(): void {
    this.treeType.render(this.x, this.y)
  }
}

export function run() {
  const trees: Tree[] = []
  const oakType = TreeTypeFactory.getTreeType('Oak', 'oak.png', 'green')

  // 1000 trees share the same TreeType object!
  for (let i = 0; i < 1000; i++) {
    trees.push(new Tree(i, i * 2, oakType))
  }

  console.log(`Created ${trees.length} trees (memory efficient!)`)
}

