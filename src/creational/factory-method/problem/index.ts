// Problem: Client code depends on concrete classes
class TruckLogistics {
  deliver(): void {
    console.log('Delivering by land in a truck')
  }
}

class ShipLogistics {
  deliver(): void {
    console.log('Delivering by sea in a ship')
  }
}

export function run() {
  const type = 'ship'

  // Client must know about concrete classes
  if (type === 'truck') {
    const logistics = new TruckLogistics()
    logistics.deliver()
  } else if (type === 'ship') {
    const logistics = new ShipLogistics()
    logistics.deliver()
  }
}

