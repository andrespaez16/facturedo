import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuxservicesService } from '../services/auxservices.service';






@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {


  remates: any = [];
  cifras: number;



  constructor(
    private services: ServicesService,
    private router: Router,
    public auxservice: AuxservicesService

  ) { }

  ngOnInit() {
    this.lista();
  }



  lista() {
    this.services.listOfEnvoices().subscribe((data: any) => {
      this.remates = data.results
      console.log(data, "esta es la data");
    })
  }

  check(operation: any) {
    console.log(operation)
    let results = operation.operation
    console.log(results, "hello")
    this.show(results)



  }

  show(operator: any) {
    this.services.showoperation(operator).subscribe((data: any) => {
      console.log(data, "esto es el show")
      this.auxservice.data = data;
      this.router.navigate(['/show']);
    }, (e) => {
      this.router.navigate(['/list']);
    })
  }






}
