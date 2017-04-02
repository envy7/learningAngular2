import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  hotelDetails: Object;
  items: FirebaseListObservable<any>;
  userData;

  constructor(private af: AngularFire, public appData: AppComponent) {
    this.userData = this.appData.userData;
    console.log(this.userData);
    this.items = af.database.list(`users/${this.userData.uid}/bookings`);
  }

  ngOnInit() {
    this.hotelDetails = JSON.parse(localStorage.getItem("hotelObj"));
    console.log(this.hotelDetails);
  }

  pay(hotelDetails): void {
    this.items.push({
      "hotel" : hotelDetails.name,
      "price" : hotelDetails.cost
    })
  }
}
