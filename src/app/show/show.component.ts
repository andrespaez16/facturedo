import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services/services.service";
import { AuxservicesService } from '../services/auxservices.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {

  constructor(private service: ServicesService, public auxservices:AuxservicesService, private router: Router,public toastController: ToastController) { }

  ngOnInit() { }


  back(){
    this.router.navigate(['/list']);
  }

  buy(){
    this.presentToast()
    this.router.navigate(['/list']);
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gracias ,Servicio al cliente te llamara para cerrar la compra.',
      duration: 2000,
      color:"dark"
    });
    toast.present();
  }


}
