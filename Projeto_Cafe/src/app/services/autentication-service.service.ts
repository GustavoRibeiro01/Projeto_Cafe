import { Injectable } from '@angular/core';
import * as flogin from 'firebase/app';
import { reject } from 'q';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AutenticationServiceService {

  constructor() { }

  cadastroUsuario(user){
    return new Promise<any>(( resolve , reject) => {
      flogin.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    });
  }

  loginUsuario(user){
    return new Promise<any> ( (resolve, reject) => {
      flogin.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(
          res => resolve (res),
          err => reject(err)
        )
    } );
  }

  logoutUsuario(){
    return new Promise<any>( (resolve, reject) => {
      if(flogin.auth().currentUser){
        flogin.auth().signOut()
          .then( () => {
            console.log("log out");
            resolve();
          } )
          .catch( (error) => { reject(); } );
      }
    });
  }

  detalhesUsuario(){
    return flogin.auth().currentUser;
  }

}
