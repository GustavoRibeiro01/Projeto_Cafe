import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto-screen',
  templateUrl: './cadastro-produto-screen.page.html',
  styleUrls: ['./cadastro-produto-screen.page.scss'],
})
export class CadastroProdutoScreenPage implements OnInit {

  formCadastroProduto: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formCadastroProduto = this.formBuilder.group({Nome: new FormControl('',Validators.required),
                                                       Descricao: new FormControl('', Validators.required),
                                                       Preco: new FormControl('', Validators.required) 
                                                      })
  }

  Cadastrar = (produto) => {
    console.log(produto)
  }

}
