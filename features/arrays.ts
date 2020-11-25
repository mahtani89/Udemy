const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [
	['f150'],
	['corolloa'],
	['camaro'],
];
// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();


carMakers.push(1000);

// help with map
carMakers.map((car: string): string => car);

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

