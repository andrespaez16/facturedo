import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service'
import { Router } from '@angular/router';
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
    this.list();
  }

  /*Funcion de listar los remates*/

  list() {
    this.services.listOfEnvoices().subscribe((data: any) => {
      this.remates = data.results
    });
  }
  /*Funcion de capturar el serial de la operacion y se la envia al show */
  
  check(operation: any) {
    let results = operation.operation
    this.show(results)
  }
  /*Funcion de show */

  show(operator: any) {
    this.services.showoperation(operator).subscribe((data: any) => {
      this.auxservice.data = data;
      this.router.navigate(['/show']);
    }, (e) => {
      this.router.navigate(['/list']);
    })
  }






}
