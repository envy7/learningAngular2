import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  constructor(private af: AngularFire, private router: Router) {
    //this.userdata = {};
  }

  signup(email, password) {
    // this.af.auth.login({
    //   provider: AuthProviders.Google,
    //   method: AuthMethods.Popup,
    // });

    // this.af.auth.subscribe(auth => {
    //   if(auth){
    //     console.log("logged in");
    //     this.userdata = auth;
    //     console.log(this.userdata);
    //   }
    //   else{
    //     console.log("not logged in");
    //   }
    // })
    this.af.auth.createUser({
      email: email,
      password: password
    }).then(
      (success) => {
        console.log(success);
        this.router.navigate(['/login']);
      }
    ).catch(
      (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      }
    )
  }

}


export var AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];