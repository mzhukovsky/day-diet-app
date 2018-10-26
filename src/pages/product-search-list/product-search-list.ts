import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewController, NavController } from "ionic-angular";
import { UtilService } from "../../services/util.service";
import { Product } from "../../models/product.model";
import { ProductsService } from "../../services/products.service";
import { Observable } from 'rxjs'; import 'rxjs/add/operator/map';


@Component({
  selector: 'page-product-search-list',
  templateUrl: 'product-search-list.html',
})
export class ProductSearchListPage implements OnInit {

  @Output() onSelected = new EventEmitter;
  private searchQuery: string = '';
  private productsDB: Product[] = [];
  private currentProductList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProductList();
  }

  private getProductList() {
    this.productsService.getProductsList().snapshotChanges().map(changes => {
      return changes.map(item => ({ $key: item.payload.key, ...item.payload.val() }));
    }).subscribe( productList => {
      this.productsDB = productList;
      this.initializeItems()
    });
  }

  private initializeItems() {
    this.currentProductList = this.productsDB;
  }

  private onSelect(product: Product){
    this.onSelected.emit(product);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.currentProductList = this.currentProductList.filter((product) => {
        return (product.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
