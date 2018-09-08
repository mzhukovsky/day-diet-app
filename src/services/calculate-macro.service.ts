import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Dish } from "../models/dish.model";
import { Menu } from "../models/menu.model";
import { Nutrients } from "../models/nutrients.model";

@Injectable()
export class CalculateMacroService {

  constructor(){ }

  calculate(number: number, convert: number): number{
    return number*convert;
  }

  calculateIngredientNutrients(ingredient: Ingredient): Nutrients {
    let nutrients = new Nutrients(this.calculate(ingredient.product.kcal, ingredient.convert),
                                  this.calculate(ingredient.product.fat, ingredient.convert),
                                  this.calculate(ingredient.product.carbs, ingredient.convert),
                                  this.calculate(ingredient.product.protein, ingredient.convert));
    return nutrients;
  }

  calculateIngredientNutrientsDesc(ingredient: Ingredient): string{
    const nutrients = this.calculateIngredientNutrients(ingredient)
    return nutrients.kcal+"kcal (T:"+nutrients.fat+", W:"+nutrients.carbs+", B:"+nutrients.protein+")"; //
  }

  calculateDishNutrients(dish: Dish): Nutrients{
    let nutrients= new Nutrients(0,0,0,0);
    for(let ingredient of dish.ingredients) {
      nutrients.add(this.calculateIngredientNutrients(ingredient))
    }
    return nutrients;
  }

  calculateDishNutrientsDesc(dish: Dish): string{
    const nutrients = this.calculateDishNutrients(dish)
    return nutrients.kcal+"kcal (T:"+nutrients.fat+", W:"+nutrients.carbs+", B:"+nutrients.protein+")"; //
  }

  calculateMenuNutrients(menu: Menu): Nutrients {
    let nutrients= new Nutrients(0,0,0,0);
    for(let dish of menu.dishes) {
      nutrients.add(this.calculateDishNutrients(dish))
    }
    return nutrients;
  }

  calculateMenuNutrientsDesc(menu: Menu): string{
    const nutrients = this.calculateMenuNutrients(menu)
    return nutrients.kcal+"kcal (T:"+nutrients.fat+", W:"+nutrients.carbs+", B:"+nutrients.protein+")"; //
  }
}