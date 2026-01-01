// Problem: Different handling for individual vs grouped objects
class File {
  constructor(readonly name: string) {}

  getSize(): number {
    return 10
  }
}

class Folder {
  constructor(
    readonly name: string,
    readonly files: File[]
  ) {}

  getSize(): number {
    return this.files.reduce((sum, file) => sum + file.getSize(), 0)
  }
}

export function run() {
  const file = new File('doc.txt')
  const folder = new Folder('Documents', [
    new File('a.txt'),
    new File('b.txt'),
  ])

  // Different types, different handling
  console.log('File size:', file.getSize())
  console.log('Folder size:', folder.getSize())
}

