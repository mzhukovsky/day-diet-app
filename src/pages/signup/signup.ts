import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Poczekaj...'
    })
    loading.present();
    this.authService.signup({email: form.value.email, password: form.value.password})
      .then( data =>{
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Błąd rejestracji!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
    });
  }
}
