// Solution: Automatic notification to all observers
interface Observer {
  update(news: string): void
}

interface Subject {
  attach(observer: Observer): void
  detach(observer: Observer): void
  notify(): void
}

class NewsAgency implements Subject {
  private observers: Observer[] = []
  private news: string = ''

  attach(observer: Observer): void {
    this.observers.push(observer)
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.splice(index, 1)
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this.news))
  }

  setNews(news: string): void {
    this.news = news
    this.notify() // Automatically notify all observers
  }
}

class NewsChannel implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`${this.name} received: ${news}`)
  }
}

export function run() {
  const agency = new NewsAgency()

  const channel1 = new NewsChannel('Channel 1')
  const channel2 = new NewsChannel('Channel 2')

  agency.attach(channel1)
  agency.attach(channel2)

  agency.setNews('Breaking news!') // All observers notified automatically
}

