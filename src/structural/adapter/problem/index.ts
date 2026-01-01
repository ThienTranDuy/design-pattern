// Problem: Incompatible interfaces
class LegacyPrinter {
  printDocument(text: string): void {
    console.log(`[Legacy] Printing: ${text}`)
  }
}

interface ModernPrinter {
  print(content: string): void
}

export function run() {
  const legacy = new LegacyPrinter()

  // Cannot use legacy printer with modern interface
  // legacy.print('Hello') // Error! Method doesn't exist

  legacy.printDocument('Hello') // Works but inconsistent
}

