import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";

import { NavParams, NavController, ModalController } from "ionic-angular";

import { MenusService } from "../../services/menus.service";
import { Menu } from "../../models/menu.model";
import { DishEditPage } from "../dish-edit/dish-edit";
import { Dish } from "../../models/dish.model";
import { CalculateMacroService } from "../../services/calculate-macro.service";
import { Ingredient } from "../../models/ingredient.model";

@Component({
  selector: 'page-menu-edit',
  templateUrl: 'menu-edit.html',
})
export class MenuEditPage implements OnInit {

  private _menuForm: FormGroup;
  private descMenu = "";

  constructor(private navParams: NavParams,
              private navCtrl: NavController,
              private fb: FormBuilder,
              private menusService: MenusService,
              private modalCrtl: ModalController,
              private calculateMacroService: CalculateMacroService) {
  }

  ngOnInit(): void {
    this._menuForm = this.fb.group({
      title: '',
      description: '',
      dishes: this.fb.array([])
    });
  }

  get menuForm(){
    return this._menuForm;
  }
  get dishForms(): FormArray {
    return this.menuForm.get('dishes') as FormArray;
  }

  private addDish(dish) {
    const dishFormGroup = this.fb.group({
      dish: dish
    })
    this.dishForms.push(dishFormGroup);
  }

  deleteDish(index) {
    this.dishForms.removeAt(index)
  }

  getDishFromForm (index: number): Dish { 
    return this.menuForm.value.dishes[index].dish;
  }

  private getMealName(index: number): string { // to much call
    return this.getDishFromForm(index).mealName;
  }

  private getDishNutrientsDesc(index: number): string { // to much call
    return this.calculateMacroService.calculateDishNutrientsDesc(this.getDishFromForm(index));
  }

  private onManageDish (){
    const modal = this.modalCrtl.create(DishEditPage);
    modal.present();
    modal.onDidDismiss((dish:Dish) => {
      this.addDish(dish);
      this.getMenuNutrientsDesc();
    });
  }

  getCurrentMenu(){
    const menuFormValue = this.menuForm.value;
    let dishData: any[] = menuFormValue.dishes;
    let dishes: Dish[] = [];
    dishData.forEach(obj => {
      let dish = new Dish(obj.dish.mealName, obj.dish.ingredients)
      dishes.push(dish)
    });

    let menu = new Menu(menuFormValue.title,menuFormValue.description, dishes);
    menu.nutrionsDesc = this.calculateMacroService.calculateMenuNutrientsDesc(menu);
    return menu;
  }

  private getMenuNutrientsDesc(){
    this.descMenu =  this.getCurrentMenu().nutrionsDesc;
  }

  onSubmit() {
    const formValue = this.menuForm.value;
    this.menusService.menus.push(this.getCurrentMenu());

    this.navCtrl.pop();
  }
}
