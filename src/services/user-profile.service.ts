import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { UserProfile } from '../models/user.model'
import { AuthService } from "./auth.service";

@Injectable()
export class UserProfileService {

  private readonly path = '/users';
  private dbPath: string;
  private userRef: AngularFireObject<any> = null;

  constructor(private afDatabase: AngularFireDatabase,
              private authService: AuthService) { }

  updateUserProfile(userProfile: UserProfile) {
    this.getUserRef();

    let user = {
      name: userProfile.name,
      age: userProfile.age === null ? 0 : Number(userProfile.age),
      weight: userProfile.weight === null ? 0 : Number(userProfile.weight),
      height: userProfile.height === null ? 0 : Number(userProfile.height),
    }
    return this.userRef.set(user);
  }

  public getUserProfile(): AngularFireObject<UserProfile> {
    this.getUserRef();
    return this.userRef;
  }

  private getUserRef(){
    this.dbPath = this.path+"/"+this.authService.getActiveUser().uid;
    this.userRef = this.afDatabase.object(this.dbPath); // https://www.youtube.com/watch?v=uESqBwFVf1Qs od 7 minuty
  }
}