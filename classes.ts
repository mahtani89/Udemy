// eslint-disable-next-line max-classes-per-file
class Vehicle {
  // eslint-disable-next-line no-empty-function,no-useless-constructor
  constructor(public color: string) {}

  protected honk(): void {
    // eslint-disable-next-line no-console
    console.log('beep');
  }
}
const vehicle = new Vehicle('orange');
// eslint-disable-next-line no-console
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // eslint-disable-next-line class-methods-use-this
  private drive(): void {
    // eslint-disable-next-line no-console
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, 'red');
car.startDrivingProcess();
