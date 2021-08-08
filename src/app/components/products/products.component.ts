import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  closeResult = '';
  productoForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder
  ) { }
  config: any;
  collection = { count: 10 , data: [] as any }


  ngOnInit(): void {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
    })

    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        nombre: "crosfit-shirt",
        categoria: "shirt"
      })
    }



  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  eliminar(item: any): void {
    this.collection.data.pop(item);
  }

  guardarProducto(): void {
    this.collection.data.push(this.productoForm.value);
    this.modalService.dismissAll();
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
