import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';

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
    private AuthService: AutenticationServiceService
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
    }

    this.AuthService.loginUsuario(usuario)
      .then( res => {
        console.log(res)
        this.AuthService.setIsRootUser(false)
        this.router.navigateByUrl('/list');
      
      }, err => console.log(err));
  }

}
