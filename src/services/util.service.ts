import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Weekday } from "../models/weekday.model";
import { DayDiet } from "../models/day-diet.model";
import weekdayList from "../models/weekday.model";

@Injectable()
export class UtilService {
  
  private menuCard: Array<DayDiet> = [];

  constructor(){ 
    this.initMenuCard();
  }

  getMenuCard(): DayDiet[]{
    return this.menuCard.slice();
  }

  addMenu(dayDiet: DayDiet){
    const position = this.menuCard.findIndex((dayDietEl: DayDiet)=>{
      return dayDietEl.weekday == dayDiet.weekday;
    });
    this.menuCard[position] = dayDiet;
  }

  private initMenuCard(){
    weekdayList.forEach(obj =>{
      let dayDiet: DayDiet = {
        menu: null,
        weekday: obj
      }
      this.menuCard.push(dayDiet);
    })
  }
}
