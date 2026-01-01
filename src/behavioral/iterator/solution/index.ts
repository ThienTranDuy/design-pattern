// Solution: Iterator provides standard way to traverse
interface Iterator<T> {
  hasNext(): boolean
  next(): T
}

interface Iterable<T> {
  createIterator(): Iterator<T>
}

class BookIterator implements Iterator<string> {
  private index: number = 0

  constructor(private books: string[]) {}

  hasNext(): boolean {
    return this.index < this.books.length
  }

  next(): string {
    return this.books[this.index++]
  }
}

class BookCollection implements Iterable<string> {
  private books: string[] = []

  addBook(book: string): void {
    this.books.push(book)
  }

  createIterator(): Iterator<string> {
    return new BookIterator(this.books)
  }
}

export function run() {
  const collection = new BookCollection()
  collection.addBook('Design Patterns')
  collection.addBook('Clean Code')

  // Client uses iterator, doesn't know internal structure
  const iterator = collection.createIterator()
  while (iterator.hasNext()) {
    console.log(iterator.next())
  }
}

