// Problem: Complex subsystem requires many steps
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

export function run() {
  // Client must know all subsystems and their order
  const cpu = new CPU()
  const memory = new Memory()
  const hardDrive = new HardDrive()

  cpu.freeze()
  memory.load()
  hardDrive.read()
  cpu.execute()
}

