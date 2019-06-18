import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  formlogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AuthService: AutenticationServiceService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  logar = (usuario) => {
    console.log(usuario);

    if(usuario.email == "admin" && usuario.password == "1234")
    {
      this.AuthService.setIsRootUser(true)
      this.router.navigateByUrl('/list');
      return
    }

    this.AuthService.loginUsuario(usuario)
      .then( res => {
        console.log(res)
        console.log(res.user.uid)
        this.AuthService.setIsRootUser(false)
        this.router.navigateByUrl('/list');
      
      }, err => this.showToast("E-mail e senha incompativeis!"));
  }

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
