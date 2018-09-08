import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import startProducts from '../data/products'

@Injectable()
export class ProductsService {
  products: Product[];

  constructor(){
   this.setProducts(startProducts);  }

  setProducts(startProducts){
    this.products = startProducts
  }

  getProducts(){
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((prodEl: Product)=> {
      return prodEl.id == id;
    })
  }
}