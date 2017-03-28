import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
