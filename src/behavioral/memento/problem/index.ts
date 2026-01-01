// Problem: Cannot undo/restore previous state
class TextEditor {
  private content: string = ''

  write(text: string): void {
    this.content += text
  }

  getContent(): string {
    return this.content
  }
}

export function run() {
  const editor = new TextEditor()

  editor.write('Hello ')
  editor.write('World')
  console.log('Current:', editor.getContent())

  // No way to undo or restore previous state!
}

