import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth){
        console.log("logged in");
      }
      else{
        console.log("not logged in");
      }
    })
  }

  signup(email, password) {  
    this.af.auth.createUser({
      email: email,
      password: password
    }).then(
      (success) => {
       // console.log(success);
        this.router.navigate(['/home']);
      }
    ).catch(
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }

  loginWithEmail(email, password) {
    this.af.auth.login({
      email: email,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then(
      (success) => {
        //console.log(success);
        this.router.navigate(['/home']);
      }
    ).catch(
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }

  loginWithFb() {
     this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        //console.log(success);
        this.router.navigate(['/home']);
      }
    ).catch(
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }

  loginWithGoogle() {
     this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        //console.log(success);
        this.router.navigate(['/home']);
      }
    ).catch(
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }

  logout() {
    this.af.auth.logout();
  }

}


export var AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];