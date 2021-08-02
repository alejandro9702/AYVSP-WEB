import { Component, OnInit } from '@angular/core';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  config: any;
  collection = {count: 60, data:[] as any}
  ngOnInit(): void {

    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        nombre: "crosfit-shirt",
        categoria: "shirt"
      })
    }
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };


  }
  pageChanged(event:any){
    this.config.current=event;
  }
  eliminar(item:any):void{
    this.collection.data.pop(item);
  }

}
