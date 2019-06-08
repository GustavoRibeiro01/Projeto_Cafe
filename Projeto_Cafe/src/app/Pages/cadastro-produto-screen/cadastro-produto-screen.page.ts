import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-cadastro-produto-screen',
  templateUrl: './cadastro-produto-screen.page.html',
  styleUrls: ['./cadastro-produto-screen.page.scss'],
})
export class CadastroProdutoScreenPage implements OnInit {

  formCadastroProduto: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private produtoservice: ProdutoService
  ) { }

  ngOnInit() {
    this.formCadastroProduto = this.formBuilder.group({Nome: new FormControl('',Validators.required),
                                                       Descricao: new FormControl('', Validators.required),
                                                       Preco: new FormControl('', Validators.required) 
                                                      })
  }

  Cadastrar = (produto) => {
    console.log(produto)
    this.produtoservice.addProduto(produto).then(
      dado => {
        this.router.navigateByUrl("/list")
      },
      err => console.log(err) 
    )
  }

}
