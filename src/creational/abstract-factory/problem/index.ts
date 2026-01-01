// Problem: Creating families of related objects is messy
class WindowsButton {
  render(): void {
    console.log('Rendering Windows button')
  }
}

class MacButton {
  render(): void {
    console.log('Rendering Mac button')
  }
}

class WindowsCheckbox {
  render(): void {
    console.log('Rendering Windows checkbox')
  }
}

class MacCheckbox {
  render(): void {
    console.log('Rendering Mac checkbox')
  }
}

export function run() {
  const os = 'windows'

  // Mixed up object creation
  if (os === 'windows') {
    const button = new WindowsButton()
    const checkbox = new WindowsCheckbox()
    button.render()
    checkbox.render()
  } else {
    const button = new MacButton()
    const checkbox = new MacCheckbox()
    button.render()
    checkbox.render()
  }
}

