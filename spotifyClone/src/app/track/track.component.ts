import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;
  constructor(public route: ActivatedRoute, public spotify: SpotifyService,
              public location: Location) { 
  	route.params.subscribe(params => { this.id = params['id']; });
  	console.log(this.id);
  }

  ngOnInit() :void{
  	this.spotify
  		.getTrack(this.id)
  		.subscribe((res: any) => this.renderTrack(res))
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}
