import { Component } from '@angular/core';
import { CalendarPage } from "../calendar/calendar";
import { MenuListPage } from "../menu-list/menu-list";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  calendarPage:any = CalendarPage;
  menuListPage:any = MenuListPage;

  constructor() {
  }

}
