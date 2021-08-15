import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  closeResult = '';
  productoForm: FormGroup;
  ERROR_MESSAGE: string = "Error, intentelo de nuevo";

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private _firebaseServiceService: FirebaseServiceService
  ) { }
  config: any;
  collection = { count: 10, data: [] as any }


  ngOnInit(): void {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.data.length
    };

    this.productoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
    });

    this._firebaseServiceService.getProducts().subscribe(result => {
      this.collection.data = result.map((product: any) => {
        return {
          id: product.payload.doc.data().id,
          nombre: product.payload.doc.data().nombre,
          categoria: product.payload.doc.data().categoria,
        }
      })
    }, err => {
      console.log(err)
    });

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  eliminar(item: any): void {
    this.collection.data.pop(item);
  }

  guardarProducto(): void {
    this._firebaseServiceService.createProduct(this.productoForm.value).then(response => {
      this.productoForm.reset();
      this.modalService.dismissAll();
    }).catch(error => {

      alert(this.ERROR_MESSAGE);
      console.log(this.ERROR_MESSAGE);

    })
    this.collection.data.push(this.productoForm.value);

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
