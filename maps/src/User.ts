// @ts-ignore
import faker from 'faker';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Mappable } from './CustomMap';

// eslint-disable-next-line import/prefer-default-export
export class User implements Mappable {
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
