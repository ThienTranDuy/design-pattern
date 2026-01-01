// Solution: Mediator centralizes communication
interface Mediator {
  sendMessage(message: string, from: User): void
}

class User {
  constructor(
    readonly name: string,
    private mediator: Mediator
  ) {}

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`)
    this.mediator.sendMessage(message, this)
  }

  receive(message: string, from: User): void {
    console.log(`${this.name} receives from ${from.name}: ${message}`)
  }
}

class ChatRoom implements Mediator {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }

  sendMessage(message: string, from: User): void {
    // Broadcast to all except sender
    this.users.forEach((user) => {
      if (user !== from) {
        user.receive(message, from)
      }
    })
  }
}

export function run() {
  const chatRoom = new ChatRoom()

  const user1 = new User('Alice', chatRoom)
  const user2 = new User('Bob', chatRoom)
  const user3 = new User('Charlie', chatRoom)

  chatRoom.addUser(user1)
  chatRoom.addUser(user2)
  chatRoom.addUser(user3)

  // Users only know about mediator
  user1.send('Hello everyone!')
}

