// Solution: Facade provides simple interface
class CPU {
  freeze(): void {
    console.log('CPU: Freezing')
  }

  execute(): void {
    console.log('CPU: Executing')
  }
}

class Memory {
  load(): void {
    console.log('Memory: Loading')
  }
}

class HardDrive {
  read(): void {
    console.log('HardDrive: Reading')
  }
}

class ComputerFacade {
  private cpu: CPU
  private memory: Memory
  private hardDrive: HardDrive

  constructor() {
    this.cpu = new CPU()
    this.memory = new Memory()
    this.hardDrive = new HardDrive()
  }

  start(): void {
    console.log('Starting computer...')
    this.cpu.freeze()
    this.memory.load()
    this.hardDrive.read()
    this.cpu.execute()
    console.log('Computer started!')
  }
}

export function run() {
  // Simple interface for complex subsystem
  const computer = new ComputerFacade()
  computer.start()
}

