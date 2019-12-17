import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {  InterceptorService} from './services/interceptor.service';
import { AuxservicesService } from "./services/auxservices.service";


import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../app/login/login.component'
import {ListComponent} from '../app/list/list.component'
import { ServicesService } from "./services/services.service";


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,ListComponent,ShowComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    ServicesService,
    AuxservicesService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
