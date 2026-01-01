// Solution: Encapsulate state-specific behavior in classes
interface State {
  publish(doc: Document): void
}

class DraftState implements State {
  publish(doc: Document): void {
    console.log('Document sent to moderation')
    doc.setState(new ModerationState())
  }
}

class ModerationState implements State {
  publish(doc: Document): void {
    console.log('Document published')
    doc.setState(new PublishedState())
  }
}

class PublishedState implements State {
  publish(doc: Document): void {
    console.log('Document already published')
  }
}

class Document {
  private state: State

  constructor() {
    this.state = new DraftState()
  }

  setState(state: State): void {
    this.state = state
  }

  publish(): void {
    this.state.publish(this)
  }
}

export function run() {
  const doc = new Document()

  doc.publish() // Draft -> Moderation
  doc.publish() // Moderation -> Published
  doc.publish() // Already published
}

