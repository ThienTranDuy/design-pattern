// Solution: Chain of handlers, each decides to handle or pass
abstract class Handler {
  private nextHandler: Handler | null = null

  setNext(handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  handle(issue: string, level: number): void {
    if (this.canHandle(level)) {
      this.process(issue)
    } else if (this.nextHandler) {
      this.nextHandler.handle(issue, level)
    } else {
      console.log('No one can handle this issue')
    }
  }

  protected abstract canHandle(level: number): boolean
  protected abstract process(issue: string): void
}

class Level1Support extends Handler {
  protected canHandle(level: number): boolean {
    return level === 1
  }

  protected process(issue: string): void {
    console.log(`Level 1 Support handling: ${issue}`)
  }
}

class Level2Support extends Handler {
  protected canHandle(level: number): boolean {
    return level === 2
  }

  protected process(issue: string): void {
    console.log(`Level 2 Support handling: ${issue}`)
  }
}

class Manager extends Handler {
  protected canHandle(level: number): boolean {
    return level === 3
  }

  protected process(issue: string): void {
    console.log(`Manager handling: ${issue}`)
  }
}

export function run() {
  const level1 = new Level1Support()
  const level2 = new Level2Support()
  const manager = new Manager()

  // Build chain
  level1.setNext(level2).setNext(manager)

  // Send requests
  level1.handle('Password reset', 1)
  level1.handle('Server down', 2)
  level1.handle('Legal issue', 3)
}

