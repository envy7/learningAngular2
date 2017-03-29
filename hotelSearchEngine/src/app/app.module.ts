import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AUTH_PROVIDERS } from './auth.service';
import { GOOGLEAPI_PROVIDERS } from './googleapi.service';


const myFirebaseConfig = {
  apiKey: ' AIzaSyBkq-O3AIgj5MX2FGvDylmrz06bLvppLJE',
  authDomain: 'search-engine-3d775.firebaseapp.com',
  databaseURL: 'https://search-engine-3d775.firebaseio.com',
  storageBucket: 'gs://search-engine-3d775.appspot.com'
} 

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [GOOGLEAPI_PROVIDERS, AUTH_PROVIDERS, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
