// eslint-disable-next-line no-unused-vars
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// eslint-disable-next-line no-unused-vars
const dates = [new Date(), new Date()];

// eslint-disable-next-line no-unused-vars
const carsByMake = [
  ['f150'],
  ['corolloa'],
  ['camaro'],
];
// help with inference when extracting values

// eslint-disable-next-line no-unused-vars
const car = carMakers[0];
// eslint-disable-next-line no-unused-vars
const myCar = carMakers.pop();

// prevent incompatabale values
carMakers.push(1000);

// help with map
// eslint-disable-next-line no-shadow
carMakers.map((car: string): string => car);

// flexible types
// eslint-disable-next-line no-unused-vars

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
