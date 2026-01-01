// Problem: State-dependent behavior with many conditionals
class Document {
  private state: string = 'draft'

  publish(): void {
    if (this.state === 'draft') {
      this.state = 'moderation'
      console.log('Document sent to moderation')
    } else if (this.state === 'moderation') {
      this.state = 'published'
      console.log('Document published')
    } else {
      console.log('Document already published')
    }
  }

  getState(): string {
    return this.state
  }
}

export function run() {
  const doc = new Document()

  console.log('State:', doc.getState())
  doc.publish()
  console.log('State:', doc.getState())
  doc.publish()
  console.log('State:', doc.getState())
}

