import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { NavParams, NavController } from "ionic-angular";

import { MenusService } from "../../services/menus.service";
import { Menu } from "../../models/menu.model";

@Component({
  selector: 'page-menu-edit',
  templateUrl: 'menu-edit.html',
})
export class MenuEditPage implements OnInit {

  mode = 'New';
  menuForm: FormGroup;
  menu: Menu;
  index: number;

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              //private alertCtrl: AlertController,
              //private toastCtrl: ToastController,
              private menusService: MenusService) {
  }

  ngOnInit(): void {
    /*this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.menu = this.navParams.get('menu');
      this.index = this.navParams.get('index');
    }*/
    this.initializeForm();
  }







  private initializeForm(){
    let title = null;
    let description = null;
    let dishes = [];

    /*
    if (this.mode == 'Edit') {
      title = this.menu.title;
      description = this.menu.description;
      for (let dish of this.menu.dishes) {
        dishes.push(new FormControl(dish.name, Validators.required));
      }
    }*/

    this.menuForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'dishes': new FormArray(dishes)
    });

  }
}
