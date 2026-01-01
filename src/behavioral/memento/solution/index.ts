// Solution: Save and restore state using memento
class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state
  }
}

class TextEditor {
  private content: string = ''

  write(text: string): void {
    this.content += text
  }

  getContent(): string {
    return this.content
  }

  save(): Memento {
    return new Memento(this.content)
  }

  restore(memento: Memento): void {
    this.content = memento.getState()
  }
}

class History {
  private mementos: Memento[] = []

  push(memento: Memento): void {
    this.mementos.push(memento)
  }

  pop(): Memento | undefined {
    return this.mementos.pop()
  }
}

export function run() {
  const editor = new TextEditor()
  const history = new History()

  editor.write('Hello ')
  history.push(editor.save())

  editor.write('World')
  console.log('Current:', editor.getContent())

  // Undo
  const memento = history.pop()
  if (memento) {
    editor.restore(memento)
    console.log('After undo:', editor.getContent())
  }
}

