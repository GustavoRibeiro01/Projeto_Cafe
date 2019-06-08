import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-carrinho-screen',
  templateUrl: './carrinho-screen.page.html',
  styleUrls: ['./carrinho-screen.page.scss'],
})
export class CarrinhoScreenPage implements OnInit {

  carrinhoCompras = []
  carrinhoComprasFinal = []


  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.carrinhoCompras = this.produtoService.getCarrinhoCompras()
    this.carrinhoCompras.forEach(f => this.verificaAdd(f))
  }

  verificaAdd(produto: Produto): boolean {

    let prod: Produto;

    if(this.carrinhoComprasFinal.length > 0)
    {
      prod = this.carrinhoComprasFinal.find(f => f.id == produto.id);
    }
    else
    {
      this.carrinhoComprasFinal.push(produto)
      return false;
    }

    if(prod == null)
    {
      this.carrinhoComprasFinal.push(produto)
      return false;
    }
    else
    {
      return true;
    }

  }

  returnQuantidadeItem(id: number): number {


    return this.carrinhoCompras.filter(f => f.id == id).length

  }

  returnQuantidadeTotal(): number {

    return this.carrinhoCompras.length

  }

  returnPrecoTotal(): number {

    if(this.carrinhoCompras.length == 0)
      return 0.00;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(this.carrinhoCompras.map(f => f.Preco).reduce(reducer))

    return this.carrinhoCompras.map(f => Number.parseFloat(f.Preco)).reduce(reducer)

  }

  removeCarrinhoCompras(produto: Produto) {

    console.log(produto)
    this.produtoService.removeCarrinho(produto);

    this.carrinhoCompras = this.produtoService.getCarrinhoCompras();
    this.carrinhoComprasFinal = [];
    this.carrinhoCompras.forEach(f => this.verificaAdd(f));

  }

  removerCarrinho = (prod: Produto) => {
    this.produtoService.removeCarrinho(prod)
  }

}
