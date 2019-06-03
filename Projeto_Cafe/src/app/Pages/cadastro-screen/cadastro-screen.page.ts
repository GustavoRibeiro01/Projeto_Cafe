import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';
import { Router } from '@angular/router';

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
        this.route.navigateByUrl('/login-screen');
      
      }, err => console.log(err) );
  }

}
