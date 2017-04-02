import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleapiService {
  GOOGLE_API_URL: string = 'https://maps.googleapis.com/maps/api/place/textsearch/json'; 
  GOOGLE_GET_IMAGE_URL: string = 'https://maps.googleapis.com/maps/api/place/photo';
  GOOGLE_GEOCODING_URL: string = 'https://maps.googleapis.com/maps/api/geocode/json';
  GOOGLE_API_KEY: string = 'AIzaSyByn1EogEdVP3gI-xguSbqrrC_XE5RhVzA';
  // GOOGLE_API_KEY: string = 'AIzaSyCachCEaa1Wh7SZjf0Q_y2waePAtNaFTZk';

  constructor(public http: Http) { }

  search(query: string) {
    let params: string = [
        `query=${query}`,
        `type=lodging`,
        `key=${this.GOOGLE_API_KEY}`
    ].join('&');
    let queryUrl: string = `${this.GOOGLE_API_URL}?${params}`;
    return this.http.request(queryUrl).map((res: any) => res.json());
  }

  getImage(ref: string) {
    let params: string = [
      `photoreference=${ref}`,
      `maxwidth=600`,
      `key=${this.GOOGLE_API_KEY}`
    ].join('&');

    let queryUrl: string = `${this.GOOGLE_GET_IMAGE_URL}?${params}`;
    return this.http.request(queryUrl).map((res: any) => res.url);
  }

  getLocation(latlng: string) {
    let params: string = [
      `latlng=${latlng}`,
      `key=${this.GOOGLE_API_KEY}`,
    ].join('&');

    let queryUrl: string = `${this.GOOGLE_GEOCODING_URL}?${params}`;
    console.log(queryUrl);
    return this.http.request(queryUrl).map((res: any) => res.json());
  }

}

export var GOOGLEAPI_PROVIDERS: Array<any> = [
  {provide: GoogleapiService, useClass: GoogleapiService}
];