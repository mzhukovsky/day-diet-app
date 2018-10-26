import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Weekday } from "../models/weekday.model";
import { DayDiet } from "../models/day-diet.model";
import weekdayList from "../models/weekday.model";
import { Product } from "../models/product.model";
import productListData from "../data/products"

@Injectable()
export class UtilService {
  
  private menuCards: Array<DayDiet>
  private productList: Array<Product>;

  constructor(){ 
    this.menuCards = this.initMenuCard();
    this.productList = this.initProducts();
  }

  getMenuCard(): DayDiet[]{
    let retValue;
    if(this.menuCards != null){
      retValue = this.menuCards.slice();
    }
    return retValue;
  }

  addMenu(dayDiet: DayDiet){
    if(this.menuCards != null) {
      const position = this.menuCards.findIndex((dayDietEl: DayDiet)=>{
        return dayDietEl.weekday == dayDiet.weekday;
      });
      this.menuCards[position] = dayDiet;
    }
  }

  private initMenuCard(): Array<DayDiet> {
    const menuCards: Array<DayDiet> = [];
    weekdayList.forEach(obj =>{
      let dayDiet: DayDiet = {
        menu: null,
        weekday: obj
      }
      menuCards.push(dayDiet);
    })
    return menuCards;
  }

  getProducts(): Array<Product>{
    let retValue;
    if(this.productList != null){
      retValue = this.productList.slice();
    }
    return retValue;
  }

  addProduct(product: Product){
    if(this.productList != null){
      this.productList.push(product);
    }
  }

  initProducts(){
    const products: Array<Product> = [];
    productListData.forEach(obj =>{
      //products.push(obj);
    })
    return products;
  }
}
