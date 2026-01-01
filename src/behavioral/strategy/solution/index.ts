// Strategy interface
interface NotificationStrategy {
  send(message: string): void
}

// Context class
class NotificationService {
  constructor(private readonly strategy: NotificationStrategy) {}

  // Optional: allow strategy switching at runtime
  sendMessage(message: string): void {
    this.strategy.send(message)
  }
}

// Concrete strategies
class SmsNotifier implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`)
  }
}

class EmailNotifier implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending email: ${message}`)
  }
}

class PushNotifier implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending push notification: ${message}`)
  }
}

export function run() {
  // Easy to switch strategy
  const smsService = new NotificationService(new SmsNotifier())
  smsService.sendMessage('Hello via SMS!')

  const emailService = new NotificationService(new EmailNotifier())
  emailService.sendMessage('Hello via Email!')
}
