// Problem: Multiple instances can be created
class Database {
  constructor() {
    console.log('Creating new database connection...')
  }

  query(sql: string): void {
    console.log(`Executing: ${sql}`)
  }
}

export function run() {
  const db1 = new Database()
  const db2 = new Database() // Creates another instance!
  const db3 = new Database() // And another!

  console.log('Are they the same?', db1 === db2) // false
}

