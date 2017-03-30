import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleapiService } from '../googleapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean;
  currentcity: string;

  mostVisitedCities: {name: string, imgUrl: string}[]  = [
    {name: "Bangkok", imgUrl: "../../../assets/images/places/bangkok.jpg"},
    {name: "London", imgUrl: "../../../assets/images/places/london.jpg"},
    {name: "Paris", imgUrl: "../../../assets/images/places/paris.jpg"},
    {name: "Singapore", imgUrl: "../../../assets/images/places/singapore.jpg"},
    {name: "New York", imgUrl: "../../../assets/images/places/newyork.jpg"},
    {name: "Istanbul", imgUrl: "../../../assets/images/places/istanbul.jpg"},
    {name: "Dubai", imgUrl: "../../../assets/images/places/dubai.jpg"},
    {name: "Kuala Lampur", imgUrl: "../../../assets/images/places/kualalampur.jpg"}
  ]

  constructor(private router: Router, private googleapi: GoogleapiService) { }

  ngOnInit() {
    this.getLocation();
  }

  search(city: string) {
    this.router.navigate(['search'], { queryParams : { query: city } });
  }

  getLocation() {
    let latlng: string;
    let latitude, longitude;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          latlng = `${latitude},${longitude}`;
          console.log(latlng);
          this.googleapi.getLocation(latlng).subscribe((res: any) => {
            this.currentcity = res.results[0].address_components[3].long_name;
            console.log(this.currentcity);
          });
      });
    }
    else {
      alert("Geolocation is not supported by browser");
    }

    
  }
}
