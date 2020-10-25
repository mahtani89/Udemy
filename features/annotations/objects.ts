const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge (age: number): void {
    this.age = age
  }
}

// eslint-disable-next-line no-unused-vars
// @ts-ignore
// eslint-disable-next-line no-unused-vars
const { age, name }: { age: number; name: string} = profile
const {
  // eslint-disable-next-line no-unused-vars
  coords: { lat, lng }
}: { coords: { lat: number; lng: number} } = profile
