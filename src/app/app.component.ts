import { Component } from '@angular/core';
import{AF} from './providers/af';

import {Router} from "@angular/router"; [Router]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SteamPunks';
  public  isLoggedIn: boolean;

  public user = {



  };

  constructor(public afService: AF, private router: Router) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(

      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");

          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else
          {
              console.log("Successfully Logged in.");


              // Set the Display Name and Email so we can attribute messages to them
              if(auth.google)
              {
                this.afService.displayName = auth.google.displayName;
                this.afService.email = auth.google.email;
                // this.user = this._getUserInfo(auth.google);
              }
              else if (auth.facebook) {
                    this.afService.displayName = auth.facebook.displayName;
                    this.afService.email = auth.facebook.email;
                    //this.user = this._getUserInfo(auth.facebook);

                }
              else if (auth.twitter) {
                     this.afService.displayName = auth.twitter.displayName;
                     this.afService.email = auth.twitter.email;
                     // this.user = this._getUserInfo(auth.twitter);

                  }
              else
                  {
                    this.afService.displayName = auth.auth.email;
                    this.afService.email = auth.auth.email;
                    //this.user = this._getUserInfo(auth.auth);

                  }

              this.isLoggedIn = true;
              this.router.navigate(['']);



          }




      }
    );
  }
  private _getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user;
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  logout() {
    this.afService.logout();


  }
}
