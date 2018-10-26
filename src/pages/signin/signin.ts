import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { LoadingController, AlertController } from "ionic-angular";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService,
              private loadingCrtl: LoadingController,
              private alertCtrl: AlertController,
            
              private productsService: ProductsService) {
  }

  onSignin(form: NgForm) {
    const loading = this. loadingCrtl.create({
      content: 'Logowanie...'
    })
    loading.present();
    this.authService.signin({email: form.value.email, password: form.value.password})
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {

      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Logowanie nieudane!',
        message: error.message,
        buttons: ['Ok']
      })
      alert.present();
    })
  }
}
