// Solution: Factory method creates objects
interface Transport {
  deliver(): void
}

class Truck implements Transport {
  deliver(): void {
    console.log('Delivering by land in a truck')
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log('Delivering by sea in a ship')
  }
}

abstract class Logistics {
  abstract createTransport(): Transport

  planDelivery(): void {
    const transport = this.createTransport()
    transport.deliver()
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck()
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship()
  }
}

export function run() {
  let logistics: Logistics

  logistics = new RoadLogistics()
  logistics.planDelivery()

  logistics = new SeaLogistics()
  logistics.planDelivery()
}

