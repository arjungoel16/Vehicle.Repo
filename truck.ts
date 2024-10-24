// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck {
  vin: string; 
  color: string;
  make: string;
  model: string;
  year: string; 
  weight: string;
  topSpeed: string;
  wheels: Wheel[];
  towingCapacity: number;

  constructor (
    vin: string,
    color: string,
    make: string,
    model: string,
    year: string, 
    weight: string,
    topSpeed: string,
    wheels: Wheel[],
    towingCapacity: number,

  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if(wheels.length !== 4) {
      this.wheels = [
        new Wheel,
        new Wheel,
        new Wheel,
        new Wheel
      ];
     } else { 
       this.wheels = wheels;
      
    }
  }
  
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Truck ${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}.`);
    } else {
      console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed by the Truck.`);
    }

  }

  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }

}

export default Truck;
