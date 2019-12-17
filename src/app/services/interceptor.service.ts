import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { ServicesService } from "./services.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor(private services:ServicesService) { }

  intercept(req,next){
   const headerToken= req.clone({
      setHeaders:{
        Authorization:`jwt ${this.services.getToken()}`
      }
    })
 
return next.handle(headerToken);
  }

}
