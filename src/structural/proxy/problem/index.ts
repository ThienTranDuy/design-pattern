// Problem: Direct access without control
class RealImage {
  constructor(private filename: string) {
    this.loadFromDisk()
  }

  private loadFromDisk(): void {
    console.log(`Loading image: ${this.filename}`)
  }

  display(): void {
    console.log(`Displaying: ${this.filename}`)
  }
}

export function run() {
  // Image loaded immediately even if not displayed
  const image1 = new RealImage('photo1.jpg')
  const image2 = new RealImage('photo2.jpg')
  const image3 = new RealImage('photo3.jpg')

  console.log('---')
  image1.display()
}

