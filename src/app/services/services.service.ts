import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Router } from "@angular/router";
import { StorageManager } from "../utils/storage.utils";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  /*OBjeto contenesor de los endpoints */
  private endpoint: any = {
    auth: 'https://fact2-dev.herokuapp.com/v1/auth',
    list: 'https://fact2-dev.herokuapp.com/v1/factoring/auctions',
    show: 'https://fact2-dev.herokuapp.com/v1/factoring/operations'
  }
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router, ) { }

  /*Servicios de la aplicacion */

  auth(data: any) {
    return this.http.post<any>(this.endpoint.auth, data);
  }

  listOfEnvoices() {
    return this.http.get(this.endpoint.list)
  }
  getToken() {
    let keyToken = JSON.parse(localStorage.getItem('user_session'))
    return keyToken.token
  }
  showoperation(operation: any) {
    return this.http.get(this.endpoint.show + "/" + operation)
  }



}



