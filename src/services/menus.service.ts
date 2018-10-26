import { Injectable } from "@angular/core";

import { Menu } from "../models/menu.model";
import { Dish } from "../models/dish.model";
import { Ingredient } from "../models/ingredient.model"

import startMenus from '../data/menus'
import { ProductsService } from "./products.service";
import { Weekday } from "../models/weekday.model";

@Injectable()
export class MenusService {
  public menus: Menu[] = [];

  constructor(public productsService: ProductsService){
    this.add();
  }

  addMenu(title: string, description: string, dishes: Dish[]){
    this.menus.push(new Menu(title, description, dishes))
  }

  getMenus(): Menu[] {
    return this.menus.slice();
  }

  updateMenu(index: number, title: string, description: string, dishes: Dish[]) {
    this.menus[index] = new Menu(title, description, dishes);
  }

  removeMenu(index: number) {
    this.menus.splice(index,1);
  }

  add(){
    for (const sm of startMenus) {
      let dishes: Array<Dish> = [];

      for (const smd of sm.dishes) {
        let ingredients: Array<Ingredient> = [];

        for(const smdi of smd.ingredients){
          //ingredients.push(new Ingredient(this.productsService.getProduct(smdi.id_produkt), smdi.convert));
        }

       dishes.push(new Dish(smd.name, ingredients));
      }
      this.addMenu(sm.title, sm.description, dishes)
    }
  }
}