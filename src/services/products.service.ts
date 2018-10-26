import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  
  private readonly dbPath = 'products'; // zmienić na /products
  productsRef: AngularFireList<any> = null;

  constructor(private afDatabase: AngularFireDatabase) {
    this.productsRef = afDatabase.list(this.dbPath);
  }

  create(prod: Product): void {
    // zwracany obiekt z this.productForm.value lub this.productForm.getRawValue()
    // ma same stringi więc trzeba je zamieniać. Trzeba to przerobić.

    let product = {
      name: prod.name,
      unit: prod.unit,
      quantity: Number(prod.quantity),
      kcal: Number(prod.kcal),
      fat: Number(prod.fat),
      carbs: Number(prod.carbs),
      protein: Number(prod.protein)
    }

    this.productsRef.push(product).then( () => console.log("Dodano nowy produkt"));
  }

  update(prod: Product): void {
    let product = {
      name: prod.name,
      unit: prod.unit,
      quantity: prod.quantity,
      kcal: prod.kcal,
      fat: prod.fat,
      carbs: prod.carbs,
      protein: prod.protein
    }
    
    this.productsRef.update(prod.$key, product)
    .then( () => console.log("Zaaktualizowano produkt"))
    .catch(error => console.log(error)); // TODO obsługa błędu tak jak w signin
  }

  delete(key: string): void {
    this.productsRef.remove(key).catch(error => console.log(error));
  }

  getProductsList(): AngularFireList<Product> {
    return this.productsRef;
  }
}