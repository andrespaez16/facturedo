import { Component, OnInit } from '@angular/core';
import {  ServicesService} from "../services/services.service";
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {

  constructor(private service :ServicesService) { }

  ngOnInit() {}


  show(){

this.service.showoperation().subscribe((data:any)=>{
  
})



  }

}
