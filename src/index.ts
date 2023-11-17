class Car {
  constructor(
    public nameCar: string,
    public tire: number, 
    public priceCar: string
  ) {}
}

class ElectroCar extends Car {}
class PetrolCar extends Car {}
class HybridCar extends Car {}

class spark extends ElectroCar {}
class nexia extends PetrolCar {}
class cobalt extends HybridCar {}

interface Capacity {
  electroCar: number;
  petrolCar: number;
  hybridCar: number;
}

interface Pricing {
  electroCarPricePerMinute: number;
  petrolCarPricePerMinute: number;
  hybridCarPricePerMinute: number;
}

const capacityParking: Capacity = {
  electroCar: 4,
  petrolCar: 12,
  hybridCar: 3,
};

 function minutes22 () {
 return Math.floor(Math.random() * 60);
 }

const pricingParking: Pricing = {
  electroCarPricePerMinute:3,
  petrolCarPricePerMinute: 4,
  hybridCarPricePerMinute: 20,

};



class Parking<T extends Car> {
  public cars: T[] = [];
  constructor(public nameParking: string, public capacity: Capacity, public pricing: Pricing) {}

  enterCar(car: T) {
    if (this.cars.length < this.capacity.electroCar) {
      this.cars.push(car);
      console.log(`${car.nameCar} Pulled into the parking lot...`);
    } else {
      console.log(`${this.nameParking} is full by => ${car.constructor.name}s`);
    }
  }

  logoutCar(car: T) {
    const index = this.cars.indexOf(car);
    if (index !== -1) {
      this.cars.splice(index, 1);
      console.log(`${car.nameCar} drove out of the parking lot.`);
    }
  }

  calculateTotalPricePerCar(car: T) {
    const pricePerMinute =
      car instanceof ElectroCar
        ? this.pricing.electroCarPricePerMinute
        : car instanceof PetrolCar
        ? this.pricing.petrolCarPricePerMinute
        : this.pricing.hybridCarPricePerMinute;
    return this.calculateMinutes() * pricePerMinute;
  }

  calculateMinutes() {

		return minutes22();
  }

  calculateTotalProfit() {

    return this.cars.reduce((total, car) => total + this.calculateTotalPricePerCar(car), 0);
  }
}

const parking1 = new Parking<ElectroCar>("yashnabod", capacityParking, pricingParking);
const parking2 = new Parking<PetrolCar>("Chorsu", capacityParking, pricingParking);
const parking3 = new Parking<HybridCar>("Yunusobod", capacityParking, pricingParking);

console.log(parking1);
console.log(parking2);
console.log(parking3);



const car1 = new spark("spark", 4, "8.000$");
const car2 = new nexia("nexia", 4,  "7.000$");
const car3 = new cobalt("cobalt",4,  "12.000$");





const pricePerMinute = pricingParking.electroCarPricePerMinute;

console.log("------------- Spark -----------------");

parking1.enterCar(car1);
const minutes1 = parking1.calculateMinutes(); 
const totalPrice1 = minutes1 * pricePerMinute;
console.log(`Time: ${minutes1}s Car is stay hour`);
parking1.logoutCar(car1);
console.log(`Minute Summa: ${pricePerMinute}$`);
console.log(`Options Summa: ${totalPrice1}$`);


console.log("------------- Nexia -----------------");
parking2.enterCar(car2);
const minutes2 = parking2.calculateMinutes(); 
const totalPrice2 = minutes2 * pricePerMinute;
console.log(`Time: ${minutes2}s Car is stay hour`);
parking2.logoutCar(car2);
console.log(`Minute Summa: ${pricePerMinute}$`);
console.log(`Options Summa: ${totalPrice2}$`);


console.log("------------- Cobalt -----------------");
parking3.enterCar(car3);
const minutes3 = parking3.calculateMinutes(); 
const totalPrice3 = minutes3 * pricePerMinute;
console.log(`Time: ${minutes3}s Car is stay hour`);
parking3.logoutCar(car3);
console.log(`Minute Summa: ${pricePerMinute}$`);
console.log(`Options Summa: ${totalPrice3}$`);