import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-screen',
  templateUrl: './cadastro-screen.page.html',
  styleUrls: ['./cadastro-screen.page.scss'],
})
export class CadastroScreenPage implements OnInit {

  formRegistro: FormGroup

  constructor(
    private authService: AutenticationServiceService,
    private formBuider: FormBuilder,
    private toastCtrl: ToastController,
    private route: Router
  ) { }

  ngOnInit() {
    this.formRegistro = this.formBuider.group({email: new FormControl('', Validators.required),
                                               password: new FormControl('', Validators.required)
    })


  }

  Cadastrar = (usuario) => {
    console.log(usuario);
    this.authService.cadastroUsuario(usuario)
      .then( res => {
        this.showToast("Usuario cadastrado!")
        this.route.navigateByUrl('/login-screen');
      
      }, 
      err => {
        this.showToast("Houve um problema!")
        console.log(err)
      } );
  }

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
