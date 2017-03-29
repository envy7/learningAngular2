import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleapiService {
  GOOGLE_API_URL: string = 'https://maps.googleapis.com/maps/api/place/textsearch/json'; 
  GOOGLE_API_KEY: string = 'AIzaSyByn1EogEdVP3gI-xguSbqrrC_XE5RhVzA';

  constructor(public http: Http) { }

  search(query: string) {
    let params: string = [
        `query=${query}`,
        `type=lodging`,
        `key=${this.GOOGLE_API_KEY}`
    ].join('&');

    let queryUrl: string = `${this.GOOGLE_API_URL}?${params}`;

    return this.http.get(queryUrl)
        .map((response: Response) => {
          return (<any> response.json()).items.map(item => {
            console.log("raw item", item);
          });
        });
  }

}

export var GOOGLEAPI_PROVIDERS: Array<any> = [
  {provide: GoogleapiService, useClass: GoogleapiService}
];