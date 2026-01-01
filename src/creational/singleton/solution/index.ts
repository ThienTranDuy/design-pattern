// Solution: Ensure only one instance exists
class Database {
  private static instance: Database | null = null

  private constructor() {
    console.log('Creating database connection...')
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  query(sql: string): void {
    console.log(`Executing: ${sql}`)
  }
}

export function run() {
  const db1 = Database.getInstance()
  const db2 = Database.getInstance()
  const db3 = Database.getInstance()

  console.log('Are they the same?', db1 === db2) // true

  db1.query('SELECT * FROM users')
}

