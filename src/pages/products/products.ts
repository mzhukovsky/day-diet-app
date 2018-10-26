import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from "ionic-angular";

import { Product } from "../../models/product.model";
import { ProductEditPage } from "../product-edit/product-edit";

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  private mode = 'edit';

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private navCtrl: NavController) { }

  ngOnInit() {
    if(this.navParams.get('mode')){
      this.mode = this.navParams.get('mode')
    }
  }

  private onClick(product: Product){
    if(this.mode == 'select') {
      this.viewCtrl.dismiss(product)
    } else if(this.mode == 'edit') {
      this.navCtrl.push(ProductEditPage, {mode: 'edit', data: product});
    }

  }

  onNewProduct(){
    this.navCtrl.push(ProductEditPage, {mode: 'new'});
  }

  returnToDish(){
    this.navCtrl.pop();
  }
}
