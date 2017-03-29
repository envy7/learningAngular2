import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn : boolean;
  userData : Object = null;

   constructor(private af: AngularFire, private auth: AuthService) {

   }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if(auth){
        this.loggedIn = true;
        console.log(auth);
        this.setDetails(auth);
      }
      else{
        this.loggedIn = false;
        console.log("not logged in");
      }
    })
  }
  
  setDetails(authObj) {
    this.userData = {
      "name" : authObj.auth.providerData[0].displayName,
      "email" : authObj.auth.providerData[0].email,
      "photoUrl" : authObj.auth.providerData[0].photoURL,
      "uid" : authObj.auth.providerData[0].uid
    }  
  }

  logout() {
    this.auth.logout();
  }

}

