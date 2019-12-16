import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service'
import { StorageManager } from "../utils/storage.utils";
import { Router } from '@angular/router';
import {Login} from '../models/login.model'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  logo="assets/facturedo.png"

  constructor(
    private services: ServicesService,
    private router: Router,
  
  ) { }

  ngOnInit() { }


  login() {

    if (this.email && this.password) {
      const data:Login ={
        email:this.email,
        password:this.password
      }
  
      this.services.auth(data).subscribe((resp: any) => {
        console.log(resp)
        this.router.navigate(['/list']);
        this.saveToken(resp);
      }, (e) => {
        alert(e.error.errors);
      });
    } else {
      alert("Campos Incompletos");
    }
  }


  private saveToken(data: any): void {
    let storage = new StorageManager();
    storage.save('user_session', JSON.stringify({
      token: data.body.token,
      id: data.body.id,
      admin: data.body.admin,
      role: data.body.role,
      userType: data.body.userType,
    }));
  }


}
