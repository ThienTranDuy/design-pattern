// Solution: Step-by-step construction with fluent interface
class House {
  walls: number = 4
  doors: number = 1
  windows: number = 4
  roof: string = 'flat'
  garage: boolean = false
  pool: boolean = false
  garden: boolean = false

  describe(): void {
    console.log('House:', this)
  }
}

class HouseBuilder {
  private house: House

  constructor() {
    this.house = new House()
  }

  setWalls(count: number): HouseBuilder {
    this.house.walls = count
    return this
  }

  setDoors(count: number): HouseBuilder {
    this.house.doors = count
    return this
  }

  setWindows(count: number): HouseBuilder {
    this.house.windows = count
    return this
  }

  setRoof(type: string): HouseBuilder {
    this.house.roof = type
    return this
  }

  addGarage(): HouseBuilder {
    this.house.garage = true
    return this
  }

  addPool(): HouseBuilder {
    this.house.pool = true
    return this
  }

  addGarden(): HouseBuilder {
    this.house.garden = true
    return this
  }

  build(): House {
    return this.house
  }
}

export function run() {
  // Readable and flexible
  const house1 = new HouseBuilder().setDoors(2).setWindows(6).build()

  const house2 = new HouseBuilder()
    .setDoors(3)
    .setWindows(8)
    .setRoof('tiles')
    .addGarage()
    .addPool()
    .addGarden()
    .build()

  house1.describe()
  house2.describe()
}

