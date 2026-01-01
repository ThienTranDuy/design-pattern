class Notification {
  constructor(readonly type: string) {}

  sendMessage(nsg: string): void {
    if (this.type === 'sms') {
      console.log('s')
    } else if (this.type === 'email') {
      console.log('Sending email: ${nsg}')
    } else if (this.type === 'push') {
      console.log('Sending push notification: ${nsg}')
    } else {
      throw new Error('Invalid notification type')
    }
  }
}
