/**
 * Created by davem on 13/02/2017.
 */
import { NgModule }              from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {GoogleMapsComponent} from'./maps/googlemaps.component';

import {AuthGuard} from './login/auth.guard';
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent

  },
  {
    path:'login',
    component: LoginComponent,
    data: { title: 'Log In' }
  },
  {
    path:'maps',
    component:GoogleMapsComponent,
    canActivate: [AuthGuard],
    data: { title: 'maps' }
  }

];



export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
