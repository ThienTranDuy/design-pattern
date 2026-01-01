// Problem: Manual notification is error-prone
class NewsAgency {
  private news: string = ''

  setNews(news: string): void {
    this.news = news
  }

  getNews(): string {
    return this.news
  }
}

class NewsChannel {
  update(agency: NewsAgency): void {
    console.log(`Channel received: ${agency.getNews()}`)
  }
}

export function run() {
  const agency = new NewsAgency()
  const channel1 = new NewsChannel()
  const channel2 = new NewsChannel()

  agency.setNews('Breaking news!')

  // Must manually notify each subscriber
  channel1.update(agency)
  channel2.update(agency)
}

