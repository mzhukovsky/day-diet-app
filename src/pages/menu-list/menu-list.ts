import { Component } from '@angular/core';
import { Menu } from "../../models/menu.model";
import { NavController } from "ionic-angular";
import { MenusService } from "../../services/menus.service";
import { MenuEditPage } from "../menu-edit/menu-edit";
import { CalculateMacroService } from "../../services/calculate-macro.service";
import { MenuDetailsPage } from "../menu-details/menu-details";

@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  menus: Menu[];

  constructor (private navCtrl: NavController, 
               private menusService: MenusService,
               private calculateMacroService: CalculateMacroService) {}

  ionViewWillEnter() {
    this.menus = this.menusService.getMenus();
    this.calculateMacro();
  }

  onNewMenu() {
    this.navCtrl.push(MenuEditPage);
  }

  onEditMenu(menu: Menu, index: number) {
    this.navCtrl.push(MenuDetailsPage, { menu: menu, index: index});
  }

  calculateMacro() {
    if(this.menus){
      for(let m of this.menus){
        m.nutrionsDesc = this.calculateMacroService.calculateMenuNutrientsDesc(m)
      }
    }
  }
}
