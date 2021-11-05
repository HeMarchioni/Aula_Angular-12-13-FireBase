import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import { Value } from '@angular/fire/remote-config/remote-config';


@Injectable({
  providedIn: 'root'
})




export class AuthService {

  user: Observable<firebase.User>;
  authError: any;

  constructor( public firebaseAuth: AngularFireAuth ) {
    this.user =  firebaseAuth.authState;

   }

  loginWithEmail(email: string, password: string){
    let thisService = this;
    thisService.authError = null;
    this.firebaseAuth.signInWithEmailAndPassword(email , password)
    .then(Value => {

      console.log("Logado com emial e senha");

    }).catch(function(error){
      console.log(error.message);
      thisService.authError = error;
    })
  }


loginWitchGoogle(){
  let thisService = this;
  thisService.authError = null;
  this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(Value => {

    console.log("Logado com o Google");

  }).catch(function(error){
    console.log(error.message);
    thisService.authError = error;
  })
}


logout(){
  this.firebaseAuth.signOut()
}


}