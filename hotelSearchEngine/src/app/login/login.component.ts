import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
 
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
