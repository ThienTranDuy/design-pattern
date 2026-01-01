// Problem: Direct communication causes tight coupling
class User {
  constructor(readonly name: string) {}

  sendMessage(message: string, to: User): void {
    console.log(`${this.name} sends to ${to.name}: ${message}`)
  }
}

export function run() {
  const user1 = new User('Alice')
  const user2 = new User('Bob')
  const user3 = new User('Charlie')

  // Users must know about each other
  user1.sendMessage('Hi Bob', user2)
  user2.sendMessage('Hi Charlie', user3)
  user3.sendMessage('Hi Alice', user1)
}

