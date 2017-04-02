import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
  users: FirebaseListObservable<any>;
  constructor(private af: AngularFire, private router: Router) {
    //for debugging
    this.af.auth.subscribe(auth => {
      if(auth){
        console.log("logged in");
      }
      else{
        console.log("not logged in");
      }
    })

    //setting reference
    this.users = af.database.list("users");
  }

  signup(email, password) {  
    this.af.auth.createUser({
      email: email,
      password: password
    }).then(
      (success) => {
       this.successCallback(success, true);
      }
    ).catch(
      (err) => {
        this.errorCallback(err);
      }
    )
  }

  signupWithFb() {
     this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.successCallback(success, true);
      }
    ).catch(
      (err) => {
        this.errorCallback(err);
      }
    )
  }

  signupWithGoogle() {
     this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.successCallback(success, true);
      }
    ).catch(
      (err) => {
       this.errorCallback(err);
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
        this.successCallback(success, false);
      }
    ).catch(
      (err) => {
        this.errorCallback(err);
      }
    )
  }

  loginWithFb() {
     this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.successCallback(success, false);
      }
    ).catch(
      (err) => {
        this.errorCallback(err);
      }
    )
  }

  loginWithGoogle() {
     this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (success) => {
        this.successCallback(success, false);
      }
    ).catch(
      (err) => {
       this.errorCallback(err);
      }
    )
  }

  logout() {
    this.af.auth.logout();
  }

  successCallback(success, firsttime) {
    //console.log(success);
    //set user in database if user signing up and not logging in

    //intialize 0 money in wallet
    success.auth.providerData[0].wallet = 0; 
    if(firsttime){
      this.users.update(success.auth.providerData[0].uid, success.auth.providerData[0]);
    }
  
    if(localStorage.getItem('hotelObj'))
      this.router.navigate(['/booking']);
    else  
      this.router.navigate(['/home']);
  }

  errorCallback(err) {
    console.log(err);
    alert(err);
  }

}


export var AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];