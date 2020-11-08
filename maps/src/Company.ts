// @ts-ignore
import faker from 'faker';
import { Mappable } from './CustomMap';

// eslint-disable-next-line import/prefer-default-export
export class Company implements Mappable {
  companyName: string;

  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  color: string = 'blue'

  constructor() {
    this.companyName = faker.company.companyName();

    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
