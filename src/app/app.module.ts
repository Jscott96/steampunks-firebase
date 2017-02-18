import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule,
  FIREBASE_PROVIDERS,

  AuthMethods,
  AuthProviders
} from 'angularfire2';


import { AgmCoreModule , SebmGoogleMap  } from 'angular2-google-maps/core';
import { AppRouting } from './app.routing';


import { SafeUrlPipe } from './shared/security/safe-url.pipe';

import { LoginComponent } from './login/login.component';

import {GoogleMapsComponent} from './maps/googlemaps.component'
import {CoreModule} from './app.core.modules';
import {AlertService} from'./services/alert.service';

// MATERIAL DESIGN MODULES
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./login/auth.guard";
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import{AF} from './providers/af';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafeUrlPipe,
    LoginComponent,
    DashboardComponent,
    GoogleMapsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpModule,
    CoreModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJioRbIuJMQr14RqtvlIA587lm-HMHFD0' //google maps api key

    }),//google maps

    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBNHhjucR3zi7snRmJOC1w9OQLTyUnKec8",
        authDomain: "steampunks-158812.firebaseapp.com",
        databaseURL: "https://steampunks-158812.firebaseio.com",
        storageBucket: "steampunks-158812.appspot.com",
        messagingSenderId: "326075310807"
      },
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect,
        //provider: AuthProvide,
        //method: AuthMethods.Password
      }
    ),
    ...MD_MODULES
  ],

  providers: [AuthGuard, AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
