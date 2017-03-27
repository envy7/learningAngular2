import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup(email: string, password: any) {
    this.auth.signup(email, password);
  }
}
