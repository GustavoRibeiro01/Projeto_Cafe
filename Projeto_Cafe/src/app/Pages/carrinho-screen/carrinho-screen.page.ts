import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/classes/produto';
import { VendaService } from 'src/app/services/venda.service';
import { Router } from '@angular/router';
import { ItemVendido } from 'src/app/interface/item-vendido';
import { Venda } from 'src/app/interface/venda';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';

@Component({
  selector: 'app-carrinho-screen',
  templateUrl: './carrinho-screen.page.html',
  styleUrls: ['./carrinho-screen.page.scss'],
})
export class CarrinhoScreenPage implements OnInit {

  carrinhoCompras = []
  carrinhoComprasFinal = []

  venda: Venda

  constructor(
    private produtoService: ProdutoService,
    private vendaService: VendaService,
    private authService: AutenticationServiceService,
    private router: Router
  ) { 
    this.venda = {} as Venda
    this.venda.itensVendido = {} as ItemVendido[]
  }

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

  returnQuantidadeItem(id: string): number {


    return this.carrinhoCompras.filter(f => f.id == id).length

  }

  returnQuantidadeTotal(): number {

    return this.carrinhoCompras.length

  }

  returnPrecoTotal(): number {

    if(this.carrinhoCompras.length == 0)
      return 0.00;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

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

  //-------------------------------------------------------Finalizar Compra----------------------------------------------------------------

  gerarDataAtual = (): string => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;

  }

  gerarItemVendido = (prod: Produto): ItemVendido => {
    
    let itemVendido: ItemVendido

    itemVendido = {} as ItemVendido

    itemVendido.id = prod.id
    itemVendido.Nome = prod.Nome
    itemVendido.Descricao = prod.Descricao
    itemVendido.Quantidade = this.returnQuantidadeItem(prod.id)
    itemVendido.Preco = prod.Preco

    return itemVendido

  }

  finalizarCompra = () => {

    this.venda.data = this.gerarDataAtual()
    this.venda.itensVendido = this.carrinhoComprasFinal.map(prod => this.gerarItemVendido(prod))
    this.venda.uid = this.authService.detalhesUsuario().uid

    console.log(this.venda)

    this.vendaService.addVendaFB(this.venda).then(
      ok => {
        this.produtoService.esvaziarCarrinho()
        this.router.navigateByUrl("/carrinho-screen")
      },
      err => console.log(err) 
    )

  }

}
