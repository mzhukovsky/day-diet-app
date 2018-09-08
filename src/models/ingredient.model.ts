import { Product } from "./product.model";

export class Ingredient {
  constructor(public product: Product, 
              public convert: number) { }
}