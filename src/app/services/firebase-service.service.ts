import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
  private _firestore: AngularFirestore
  ) { }

  /**
   * Metodod para listar productos
   */
  getProducts(){
    return this._firestore.collection("products").snapshotChanges();
  }
  createProduct(product: any) {
    return this._firestore.collection("products").add(product);
  }
  
  updateProduct(id: any,product: any) {
    return this._firestore.collection("products").doc(id).update(product);

  }
  deleteProduct(id: any) {
    return this._firestore.collection("products").doc(id).delete();

  }

}
