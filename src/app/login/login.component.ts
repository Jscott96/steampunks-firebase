import { Component } from '@angular/core';
import {AF} from '../providers/af';
import{AppModule} from '../app.module';
import {Router} from '@angular/router';
import {NgSwitchCase, NgSwitch } from '@angular/common';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent} from '../app.component';
import {AppRouting} from "../app.routing";

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


})
export class LoginComponent {
  public error: any;

  constructor(public afService: AF, private router: Router) {}
  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data);
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }

  loginWithFacebook() {
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data);
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithTwitter() {
    this.afService.loginWithTwitter().then((data) => {
      // Send them to the homepage if they are logged in
      console.log(data);
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
  }


}

