// Solution: Adapter makes incompatible interfaces compatible
class LegacyPrinter {
  printDocument(text: string): void {
    console.log(`[Legacy] Printing: ${text}`)
  }
}

interface ModernPrinter {
  print(content: string): void
}

class PrinterAdapter implements ModernPrinter {
  constructor(private legacyPrinter: LegacyPrinter) {}

  print(content: string): void {
    this.legacyPrinter.printDocument(content)
  }
}

export function run() {
  const legacy = new LegacyPrinter()
  const adapter: ModernPrinter = new PrinterAdapter(legacy)

  // Now we can use modern interface
  adapter.print('Hello World!')
}

