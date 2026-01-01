// Solution: Encapsulate requests as objects
interface Command {
  execute(): void
  undo(): void
}

class Light {
  turnOn(): void {
    console.log('Light is ON')
  }

  turnOff(): void {
    console.log('Light is OFF')
  }
}

class TurnOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn()
  }

  undo(): void {
    this.light.turnOff()
  }
}

class TurnOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff()
  }

  undo(): void {
    this.light.turnOn()
  }
}

class RemoteControl {
  private history: Command[] = []

  pressButton(command: Command): void {
    command.execute()
    this.history.push(command)
  }

  pressUndo(): void {
    const command = this.history.pop()
    if (command) {
      command.undo()
    }
  }
}

export function run() {
  const light = new Light()
  const turnOn = new TurnOnCommand(light)
  const turnOff = new TurnOffCommand(light)

  const remote = new RemoteControl()

  remote.pressButton(turnOn)
  remote.pressButton(turnOff)
  remote.pressUndo() // Undo turn off
}

