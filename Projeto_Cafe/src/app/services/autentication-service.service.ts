import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth' ;
import * as flogin from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AutenticationServiceService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
  
  cadastroUsuario = (user) => {
    return new Promise<any>(( resolve , reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    });
  }

  loginUsuario = (user) => {
    return new Promise<any>(( resolve , reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
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
