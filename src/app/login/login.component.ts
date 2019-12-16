import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service'
import { StorageManager } from "../utils/storage.utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: any = {
    email: "",
    password: ""
  }

  constructor(
    private services: ServicesService
  ) { }

  ngOnInit() { }


  login() {
    if (this.user.email && this.user.password) {
      this.services.auth(this.user).subscribe((data: any) => {
        this.saveToken({
          token: data.headers.get("token"),
          id: data.headers.get("id"),
          admin: data.headers.get("admin"),
          role: data.headers.get("role"),
          userType: data.headers.get("user_type"),
        });
      }, (e) => {
        alert(e.error.errors);
      });
    } else {
      alert("Campos Incompeltos");
    }
  }


  private saveToken(o: any): void {
    let storage = new StorageManager();
    storage.save('user_session', JSON.stringify({
      token: o.token,
      client: o.client,
      uid: o.uid,
      keepSession: o.keepSession
    }));
  }


}
