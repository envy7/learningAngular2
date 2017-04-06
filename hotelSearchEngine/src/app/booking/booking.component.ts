import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  hotelDetails;
  items: FirebaseListObservable<any>;
  user: FirebaseObjectObservable<any>;
  userData;
  fallbackImageUrl = "../../assets/images/icons/bed.png";
  showDiscount: boolean = false;

  constructor(private af: AngularFire, private router: Router) {
    
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if(auth){
        console.log(auth);
        this.setDetails(auth);
        this.items = this.af.database.list(`users/${this.userData.uid}/bookings`);
        this.user = this.af.database.object(`users/${this.userData.uid}`, { preserveSnapshot: true });
        this.fetchWallet();
      }
      else{
        console.log("not logged in");
      }
    })
    this.hotelDetails = JSON.parse(localStorage.getItem("hotelObj"));
    console.log(this.hotelDetails);
  }

  pay(hotelDetails): void {
    let coins = hotelDetails.cost * (1 / 100);
    this.userData.wallet = this.userData.wallet + coins;
    let wallet = this.userData.wallet;
    this.items.push({
      "hotel" : hotelDetails.name,
      "price" : hotelDetails.cost
    });
    this.user.update({
      "wallet" : Math.round(wallet)
    });
    this.router.navigate(['/home']);
  }

  setDetails(authObj) {
    this.userData = {
      "name" : authObj.auth.providerData[0].displayName,
      "email" : authObj.auth.providerData[0].email,
      "photoUrl" : authObj.auth.providerData[0].photoURL,
      "uid" : authObj.auth.providerData[0].uid
    }  
  }

  fetchWallet() {
    //console.log(this.userData.uid);
    this.user.subscribe(snapshot => {
      this.userData.wallet = snapshot.val().wallet;
      if(this.userData.wallet != 0)
        this.showDiscount = true;
      console.log(this.userData);
    })
  }

  applyDiscount() {
    //deduct the money in wallet from price of hotel
    this.showDiscount = false;
    this.hotelDetails.cost -= this.userData.wallet;
    this.user.update({
      "wallet" : 0
    });
    console.log(this.hotelDetails.cost);
  }
}
