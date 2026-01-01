// Problem: Request handling with many if-else conditions
class SupportSystem {
  handleRequest(issue: string, level: number): void {
    if (level === 1) {
      console.log(`Level 1 Support handling: ${issue}`)
    } else if (level === 2) {
      console.log(`Level 2 Support handling: ${issue}`)
    } else if (level === 3) {
      console.log(`Manager handling: ${issue}`)
    } else {
      console.log('No one can handle this issue')
    }
  }
}

export function run() {
  const support = new SupportSystem()

  support.handleRequest('Password reset', 1)
  support.handleRequest('Server down', 2)
  support.handleRequest('Legal issue', 3)
}

