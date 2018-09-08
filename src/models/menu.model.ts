import { Dish } from "./dish.model";

export class Menu {
  
  private _nutrionsDesc: string;

  constructor(public title: string, 
              public description: string,
              public dishes: Dish[]){
  }

  set nutrionsDesc(nutrionsDesc: string) {
    this._nutrionsDesc = nutrionsDesc;
  }
  get nutrionsDesc(){
    return this._nutrionsDesc;
  }
}