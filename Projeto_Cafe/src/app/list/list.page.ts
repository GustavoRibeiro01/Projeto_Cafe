import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  produtos: Observable<Produto[]>

  constructor(
    private produtoService: ProdutoService
  ) {
   
  }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos()
  }
  
  addCarrinhoCompra = (prod: Produto) => {
    this.produtoService.addCarrinhoCompras(prod)
    console.log(this.produtoService.getCarrinhoCompras())
  }
}
