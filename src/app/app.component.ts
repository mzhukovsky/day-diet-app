import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from '@angular/fire/auth';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from "../services/auth.service";
import { ProductsPage } from "../pages/products/products";
import { UserProfilePage } from "../pages/user-profile/user-profile";
import { UserProfileService } from "../services/user-profile.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  productsPage = ProductsPage;
  userProfilePage = UserProfilePage;

  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private authService: AuthService,
              private angularFireAuth: AngularFireAuth,
              private userProfileService: UserProfileService) {

    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true;
        userProfileService.getUserProfile().valueChanges().subscribe(res => {
          if(res){
            this.rootPage = TabsPage
          } else {
            this.rootPage = UserProfilePage
          }
        })
      } else {
        this.isAuthenticated = false;
        this.rootPage = SigninPage
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}

