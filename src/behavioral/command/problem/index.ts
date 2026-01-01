// Problem: Direct coupling between invoker and receiver
class Light {
  turnOn(): void {
    console.log('Light is ON')
  }

  turnOff(): void {
    console.log('Light is OFF')
  }
}

class RemoteControl {
  constructor(private light: Light) {}

  pressButton(action: string): void {
    if (action === 'on') {
      this.light.turnOn()
    } else if (action === 'off') {
      this.light.turnOff()
    }
  }
}

export function run() {
  const light = new Light()
  const remote = new RemoteControl(light)

  remote.pressButton('on')
  remote.pressButton('off')
}

