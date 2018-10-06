import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import startProducts from '../data/products'

@Injectable()
export class ProductsService {
  products: Product[] = [];

  constructor(){
   this.setProducts(startProducts);  
  }

  setProducts(startProducts) {
    startProducts.forEach(element => {
      let product = new Product(element.id,element.name,element.unit, element.quantity, 
                                element.kcal,element.fat,element.carbs, element.protein)
      this.products.push(product)
    });
  }

  getProducts() : Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((prodEl: Product)=> {
      return prodEl.id == id;
    })
  }
}