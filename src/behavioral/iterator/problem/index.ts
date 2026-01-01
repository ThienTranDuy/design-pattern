// Problem: Direct access to internal collection structure
class BookCollection {
  private books: string[] = []

  addBook(book: string): void {
    this.books.push(book)
  }

  getBooks(): string[] {
    return this.books // Exposes internal structure!
  }
}

export function run() {
  const collection = new BookCollection()
  collection.addBook('Design Patterns')
  collection.addBook('Clean Code')

  // Client depends on array structure
  const books = collection.getBooks()
  for (let i = 0; i < books.length; i++) {
    console.log(books[i])
  }
}

