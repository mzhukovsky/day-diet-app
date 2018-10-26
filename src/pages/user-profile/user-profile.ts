import { Component } from '@angular/core';
import { ViewController, NavController, NavParams, AlertController } from "ionic-angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { UserProfileService } from "../../services/user-profile.service";
import { UserProfile } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { CalendarPage } from "../calendar/calendar";

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  private userProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserProfileService,
              private authService: AuthService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      age: [null],
      weight: [null],
      height: [null],
    });
  }

  ionViewWillLoad() {
    this.userService.getUserProfile().valueChanges().subscribe( userProfile => {
      if(userProfile){
        this.userProfileForm.setValue(userProfile);
      }
    })
  }

  onSubmit() {
    this.userService.updateUserProfile(this.userProfileForm.getRawValue()).then( () => {
      const alert = this.alertCtrl.create({
        title: 'Zapisano',
        //message: 'Zapisano',
        buttons: ['Ok']
      })
      alert.present();
    })
  }
}
