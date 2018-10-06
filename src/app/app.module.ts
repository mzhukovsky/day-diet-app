import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { MenuListPage } from '../pages/menu-list/menu-list';
import { MenuDetailsPage } from '../pages/menu-details/menu-details';
import { MenuEditPage } from '../pages/menu-edit/menu-edit';
import { DishEditPage } from '../pages/dish-edit/dish-edit';
import { ProductSearchListPage } from "../pages/product-search-list/product-search-list";

import { MenusService } from "../services/menus.service";
import { ProductsService } from "../services/products.service";
import { CalculateMacroService } from "../services/calculate-macro.service";
import { UtilService } from "../services/util.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CalendarPage,
    MenuListPage,
    MenuDetailsPage,
    MenuEditPage,
    DishEditPage,
    ProductSearchListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CalendarPage,
    MenuListPage,
    MenuDetailsPage,
    MenuEditPage,
    DishEditPage,
    ProductSearchListPage,
  ],
  providers: [
    MenusService,
    ProductsService,
    CalculateMacroService,
    UtilService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
