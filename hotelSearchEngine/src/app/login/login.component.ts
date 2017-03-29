import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private af: AngularFire, private router: Router) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if(auth){
        this.router.navigate(['/home']);
      }
      else{
        console.log("not logged in");
      }
    })
  }

  loginWithEmail(email:string, password:any) {
    this.auth.loginWithEmail(email, password);
  }

  loginWithFb() {
    this.auth.loginWithFb();
  }

  loginWithGoogle() { 
    this.auth.loginWithGoogle();
  }
}
