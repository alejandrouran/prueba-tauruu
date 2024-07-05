import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../interfaces/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection = this.firestore.collection<Product>('products');

  constructor(private firestore: AngularFirestore) {}

  getProducts(): Observable<Product[]>{
    return this.productsCollection.valueChanges({ idField: 'id' });
  }
  getProduct(id: string): Observable<Product | undefined >{
    return this.productsCollection.doc<Product>(id).valueChanges();
  }
  createProduct(product: Product): Promise<void>{
    const id = this.firestore.createId();
    return this.productsCollection.doc(id).set({ ...product, id });
  }
  updateProduct(id: string, product: Product): Promise<void>{
    return this.productsCollection.doc(id).update(product);
  }
  deleteProduct(id: string): Promise<void>{
    return this.productsCollection.doc(id).delete();
  }
}
