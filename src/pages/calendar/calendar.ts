import { Component } from '@angular/core';
import { DayDiet } from "../../models/day-diet.model";
import { UtilService } from "../../services/util.service";
import { NavController } from "ionic-angular";
import { MenuDetailsPage } from "../menu-details/menu-details";
import { Menu } from "../../models/menu.model";

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  private menuCard: Array<DayDiet> = [];

  constructor(private navCtrl: NavController,
              private utilService: UtilService) {
  }

  onViewMenu(menu: Menu){
    this.navCtrl.push(MenuDetailsPage, { menu: menu });

  }

  ionViewWillEnter() {
    this.menuCard = this.utilService.getMenuCard();
  }

  /*onClose(){
	  this.viewCtrl.dismiss();
  }*/
}
