import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';
import { AutenticationServiceService } from '../services/autentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  produtos: Observable<Produto[]>
  rootUser: boolean

  constructor(
    private produtoService: ProdutoService,
    private authService: AutenticationServiceService,
    private route: Router
  ) {
   
  }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos()
  }

  ionViewDidEnter() {
    this.rootUser = this.authService.getIsRootUser()
    console.log(this.rootUser)
  }
  
  addCarrinhoCompra = (prod: Produto) => {
    this.produtoService.addCarrinhoCompras(prod)
    console.log(this.produtoService.getCarrinhoCompras())
  }

  updateProduto = (produto: Produto) => {

    this.produtoService.setProdutoDetail(produto)
    this.route.navigateByUrl("/cadastro-produto-details-screen")

  }

  removerProduto = (id: string) => {
    console.log(id)
    this.produtoService.removeProduto(id)
  }

}
