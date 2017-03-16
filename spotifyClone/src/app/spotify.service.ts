
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  constructor(public http: Http) {
  }

  searchByTrack(query: string){
  	let params: string = [
  		`q=${query}`,
  		`type=track`
  	].join("&");

  	let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
  	return this.http.request(queryURL).map(res => res.json());
  }

}

export var SPOTIFY_PROVIDERS: Array<any> = [
  {provide: SpotifyService, useClass: SpotifyService}
];