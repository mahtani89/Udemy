export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string
  color: string
}
// eslint-disable-next-line import/prefer-default-export
export class CustomMap {
  // eslint-disable-next-line no-undef
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // eslint-disable-next-line no-undef
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    // eslint-disable-next-line no-undef,no-new
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
