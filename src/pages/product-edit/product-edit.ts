import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'page-product-edit',
  templateUrl: 'product-edit.html',
})
export class ProductEditPage {

  private mode: string; //'edit' lub 'new'
  private productForm: FormGroup;
  private buttonName = '';
  private pageTitle = '';

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private fb: FormBuilder,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.mode = this.navParams.get('mode');

    this.productForm = this.fb.group({
      $key: [null],
      name: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: [null, Validators.required],
      kcal: [null, Validators.required],
      fat: [null, Validators.required],
      carbs: [null, Validators.required],
      protein: [null, Validators.required],
    });

    if(this.mode== "edit") {                  // this.navParams.data ??
      let product = this.navParams.get('data');
      this.productForm.setValue(product);
      this.buttonName = "Aktualizuj"
      this.pageTitle = 'Edytuj produkt'
    } else if(this.mode== "new") {
      this.buttonName = 'Dodaj';
      this.pageTitle = 'Nowy produkt'
    }
  }
 
  onSubmit(){
    if(this.mode== "edit") {
      this.updateProduct();
    } else if(this.mode== "new") {
      this.createProduct();
    }
  }

  createProduct() {
    this.productsService.create(this.productForm.getRawValue());
    this.returnToProductList();
  }

  updateProduct() {
    this.productsService.update(this.productForm.getRawValue());
    this.returnToProductList();
  }
 
  deleteProduct() {
    let prod = this.productForm.value;
    this.productsService.delete(prod.$key);
  }

  private returnToProductList(){
    this.navCtrl.pop();
  }
}
