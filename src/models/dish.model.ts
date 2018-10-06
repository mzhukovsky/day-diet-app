import { Ingredient } from "./ingredient.model";

export class Dish {
  constructor(public mealName: string, 
              public ingredients: Ingredient[]) { }
}