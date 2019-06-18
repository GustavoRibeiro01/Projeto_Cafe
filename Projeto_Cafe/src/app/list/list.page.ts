import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';
import { AutenticationServiceService } from '../services/autentication-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private toastCtrl: ToastController,
    private route: Router
  ) {
   
  }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos()
  }

  ionViewDidEnter() {
    this.rootUser = this.authService.getIsRootUser()
  }
  
  addCarrinhoCompra = (prod: Produto) => {
    this.produtoService.addCarrinhoCompras(prod)
    this.showToast("Adicionado ao carrinho!")
    console.log(this.produtoService.getCarrinhoCompras())
  }

  updateProduto = (produto: Produto) => {

    this.produtoService.setProdutoDetail(produto)
    this.route.navigateByUrl("/cadastro-produto-details-screen")

  }

  removerProduto = (id: string) => {
    console.log(id)
    this.produtoService.removeProduto(id)
    this.showToast("Produto removido!")
  }

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
