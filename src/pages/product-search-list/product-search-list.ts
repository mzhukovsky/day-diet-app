import { Component } from '@angular/core';
import { ViewController, NavController } from "ionic-angular";
import { UtilService } from "../../services/util.service";
import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'page-product-search-list',
  templateUrl: 'product-search-list.html',
})
export class ProductSearchListPage {

  searchQuery: string = '';
  productList: Product[] = [];

  constructor(private viewCtrl: ViewController,
              private navCtrl: NavController,
              private utilService: UtilService,
              private productsService: ProductsService) { 
    this.initializeItems();
  }

  private initializeItems() {
    this.productList = this.productsService.getProducts()
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.productList = this.productList.filter((product) => {
        return (product.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  private onClick(item){
    this.viewCtrl.dismiss(item)
  }

  returnToDish(){
    this.navCtrl.pop();
  }

}
