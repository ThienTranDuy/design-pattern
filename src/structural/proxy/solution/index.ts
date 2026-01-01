// Solution: Proxy controls access and adds lazy loading
interface Image {
  display(): void
}

class RealImage implements Image {
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

class ImageProxy implements Image {
  private realImage: RealImage | null = null

  constructor(private filename: string) {}

  display(): void {
    // Lazy loading: only load when needed
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename)
    }
    this.realImage.display()
  }
}

export function run() {
  // Images not loaded yet
  const image1: Image = new ImageProxy('photo1.jpg')
  const image2: Image = new ImageProxy('photo2.jpg')
  const image3: Image = new ImageProxy('photo3.jpg')

  console.log('---')
  image1.display() // Only this one is loaded
}

