import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private endpoint: any = {
    auth: 'https://fact2-dev.herokuapp.com/v1/auth',
    list: 'https://fact2-dev.herokuapp.com/v1/factoring/auctions',
    show: 'https://fact2-dev.herokuapp.com/v1/factoring/operations/{{ operation }}'
  }

  constructor(private http: HttpClient, private router: Router, ) { }

  /**
    *  Servicios de la aplicacion   */


  auth(data: any) {
    let headers: HttpHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    return this.http.post(this.endpoint.auth, JSON.stringify(data), {
      observe: "body",
      headers: headers
    })
  }



}



