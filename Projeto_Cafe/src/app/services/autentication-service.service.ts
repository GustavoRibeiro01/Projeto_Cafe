import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth' ;
import * as flogin from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AutenticationServiceService {

  private rootUser: boolean

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
      if(this.afAuth.auth.currentUser){
        this.afAuth.auth.signOut()
          .then( () => {
            console.log("log out");
            resolve();
          } )
          .catch( (error) => { reject(); } );
      }
    });
  }

  detalhesUsuario = () => {
    return this.afAuth.auth.currentUser;
  }

  getIsRootUser = (): boolean => {
    return this.rootUser
  }

  setIsRootUser = (value: boolean) => {
    this.rootUser = value

  }

}
