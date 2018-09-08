import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ViewController, ModalController } from "ionic-angular";
import { MenusService } from "../../services/menus.service";
import { Menu } from "../../models/menu.model";

import { UtilService } from "../../services/util.service";
import weekdayList from "../../models/weekday.model";
import { DayDiet } from "../../models/day-diet.model";
import { CalendarPage } from "../calendar/calendar";

@Component({
  selector: 'page-menu-details',
  templateUrl: 'menu-details.html',
})
export class MenuDetailsPage implements OnInit {

  menu: Menu;
  index: number;
  weekdayList = weekdayList;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private viewCtrl: ViewController,
              private utilService: UtilService) {}

  ngOnInit(): void {
    this.menu = this.navParams.get('menu');
  }

  setMenuDay(day: string) {
    let dayDiet: DayDiet = {
      menu: this.menu,
      weekday: day
    }
    this.utilService.addMenu(dayDiet);
    this.navCtrl.pop();
  }

  onClose(){
	  this.viewCtrl.dismiss();
  }
}
