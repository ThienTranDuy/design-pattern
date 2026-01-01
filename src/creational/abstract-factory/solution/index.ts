// Solution: Abstract factory creates families of related objects
interface Button {
  render(): void
}

interface Checkbox {
  render(): void
}

class WindowsButton implements Button {
  render(): void {
    console.log('Rendering Windows button')
  }
}

class MacButton implements Button {
  render(): void {
    console.log('Rendering Mac button')
  }
}

class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Windows checkbox')
  }
}

class MacCheckbox implements Checkbox {
  render(): void {
    console.log('Rendering Mac checkbox')
  }
}

interface GUIFactory {
  createButton(): Button
  createCheckbox(): Checkbox
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton()
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox()
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton()
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox()
  }
}

export function run() {
  let factory: GUIFactory

  factory = new WindowsFactory()
  const button1 = factory.createButton()
  const checkbox1 = factory.createCheckbox()
  button1.render()
  checkbox1.render()

  factory = new MacFactory()
  const button2 = factory.createButton()
  const checkbox2 = factory.createCheckbox()
  button2.render()
  checkbox2.render()
}

