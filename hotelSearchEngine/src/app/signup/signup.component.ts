import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  signup(email: string, password: any) {
    this.auth.signup(email, password);
  }

}
