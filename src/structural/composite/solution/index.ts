// Solution: Treat individual and composite objects uniformly
interface FileSystemItem {
  getName(): string
  getSize(): number
}

class File implements FileSystemItem {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }

  getSize(): number {
    return 10
  }
}

class Folder implements FileSystemItem {
  private items: FileSystemItem[] = []

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.items.push(item)
  }

  getName(): string {
    return this.name
  }

  getSize(): number {
    return this.items.reduce((sum, item) => sum + item.getSize(), 0)
  }
}

export function run() {
  const file1 = new File('doc.txt')
  const file2 = new File('image.png')

  const folder1 = new Folder('Documents')
  folder1.add(file1)

  const folder2 = new Folder('Root')
  folder2.add(folder1)
  folder2.add(file2)

  // Same interface for both!
  console.log(`${file1.getName()} size:`, file1.getSize())
  console.log(`${folder2.getName()} size:`, folder2.getSize())
}

