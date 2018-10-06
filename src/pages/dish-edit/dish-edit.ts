import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams, ModalController, NavController } from "ionic-angular";
import { Dish } from "../../models/dish.model";
import { Ingredient } from "../../models/ingredient.model";
import { Product } from "../../models/product.model";
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from "@angular/forms";
import { ProductSearchListPage } from "../product-search-list/product-search-list";

@Component({
  selector: 'page-dish-edit',
  templateUrl: 'dish-edit.html',
})
/*
  wytłumaczenie reactive forms 
  https://www.youtube.com/watch?v=JeeUY6WaXiA
*/
export class DishEditPage implements OnInit{

  private dishForm: FormGroup; // zamienić na _dishForm

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private modalCrtl: ModalController,
              private navCtrl: NavController,
              private fb: FormBuilder) { }

  ngOnInit(){
    this.dishForm = this.fb.group({
      mealName: '',
      ingredients: this.fb.array([])
    });
  }

  private onManageIngredients(){
    const modal = this.modalCrtl.create(ProductSearchListPage);
    modal.present();
    modal.onDidDismiss((product:Product) => {
      this.addIngredient(product)
    });
  }

  get ingredientForms() {
    return this.dishForm.get('ingredients') as FormArray;
  }

  private addIngredient(item) {
    const ingredientFormGroup = this.fb.group({
        product: item,
        convert: 1
      }
    )
    this.ingredientForms.push(ingredientFormGroup);
  }

  private deleteIngredient(index){
    this.ingredientForms.removeAt(index)
  }

  private getProductName(index: number): string {
    // sprawdzić inne metody (moze at(0 ?)) https://angular.io/api/forms/FormArray
    let product = this.ingredientForms.getRawValue()[index].product;
    return product.name+" ("+product.quantity+" "+product.unit+")";
  }

  private onSubmit() {
    const dishFormValue = this.dishForm.value;
    let ingredientsData: any[] = dishFormValue.ingredients;
    let ingredients: Ingredient[] = [];

    ingredientsData.forEach(obj => {
      let ingredient = new Ingredient(obj.product, obj.convert)
      ingredients.push(ingredient)
    });

    this.viewCtrl.dismiss(new Dish(dishFormValue.mealName, ingredients))
  }

  private returnToMenu(){
    this.navCtrl.pop();
  }
}
