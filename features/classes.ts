class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		// eslint-disable-next-line no-console
		console.log('beep');
	}
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}

	// eslint-disable-next-line class-methods-use-this
	private drive(): void {
		console.log('vrooom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}
const car = new Car(4, 'red');
car.startDrivingProcess();

