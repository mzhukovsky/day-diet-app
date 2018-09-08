import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishList } from './dish-list';

@NgModule({
  declarations: [
    DishList,
  ],
  imports: [
    IonicPageModule.forChild(DishList),
  ],
})
export class DishListModule {}
