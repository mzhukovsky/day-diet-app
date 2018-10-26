import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { MenuListPage } from '../pages/menu-list/menu-list';
import { MenuDetailsPage } from '../pages/menu-details/menu-details';
import { MenuEditPage } from '../pages/menu-edit/menu-edit';
import { DishEditPage } from '../pages/dish-edit/dish-edit';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ProductsPage } from "../pages/products/products";
import { ProductSearchListPage } from "../pages/product-search-list/product-search-list";
import { ProductEditPage } from '../pages/product-edit/product-edit'
import { UserProfilePage } from "../pages/user-profile/user-profile";

import { MenusService } from "../services/menus.service";
import { ProductsService } from "../services/products.service";
import { CalculateMacroService } from "../services/calculate-macro.service";
import { UtilService } from "../services/util.service";
import { AuthService } from "../services/auth.service";
import { environment } from '../environments/environment';
import { UserProfileService } from "../services/user-profile.service";

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
    ProductsPage,
    ProductEditPage,
    SigninPage,
    SignupPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
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
    ProductsPage,
    ProductEditPage,
    SigninPage,
    SignupPage,
    UserProfilePage
  ],
  providers: [
    MenusService,
    ProductsService,
    CalculateMacroService,
    UtilService,
    AuthService,
    UserProfileService,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
