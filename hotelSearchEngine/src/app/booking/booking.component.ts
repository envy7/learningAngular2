import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  hotelDetails: Object;

  constructor() { }

  ngOnInit() {
    this.hotelDetails = JSON.parse(localStorage.getItem("hotelObj"));
    console.log(this.hotelDetails);
  }

}
