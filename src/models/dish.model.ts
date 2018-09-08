import { Ingredient } from "./ingredient.model";

export class Dish {
  constructor(public name: string, 
              public ingredients: Ingredient[]) { }
}