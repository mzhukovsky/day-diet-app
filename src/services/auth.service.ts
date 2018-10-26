import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { Credentials } from "../models/credentials.model";

@Injectable()
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }

  signin({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getActiveUser() {
    return this.fireAuth.auth.currentUser;
  }

  signup({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }
  
}