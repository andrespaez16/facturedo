import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../app/login/login.component'
import { ServicesService } from "./services/services.service";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,LoginComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CommonModule],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
