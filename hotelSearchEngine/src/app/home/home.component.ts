import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostVisitedCities: {name: string, imgUrl: string}[]  = [
    {name: "Bangkok", imgUrl: "../../../assets/images/bangkok.jpg"},
    {name: "London", imgUrl: "../../../assets/images/london.jpg"},
    {name: "Paris", imgUrl: "../../../assets/images/paris.jpg"},
    {name: "Singapore", imgUrl: "../../../assets/images/singapore.jpg"},
    {name: "New York", imgUrl: "../../../assets/images/newyork.jpg"},
    {name: "Istanbul", imgUrl: "../../../assets/images/istanbul.jpg"},
    {name: "Dubai", imgUrl: "../../../assets/images/dubai.jpg"},
    {name: "Kuala Lampur", imgUrl: "../../../assets/images/kualalampur.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
