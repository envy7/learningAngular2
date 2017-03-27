import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }

  signup(email: string, password: any) {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(function(result){
       console.log(result);
    })
  }

}

export var AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];