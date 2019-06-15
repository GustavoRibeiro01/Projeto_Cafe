import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';
import {map, take} from 'rxjs/operators';
import { carrinhoCompras } from '../mook/carrinho-compras'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Observable<Produto[]>
  produtoCollection: AngularFirestoreCollection<Produto>
  private produtoDetail: Produto

  constructor(
    private afs: AngularFirestore,
    
  ) {
    this.produtoCollection = this.afs.collection<Produto>('produto');

    this.getProdutosFB()
    console.log(this.getProdutos())
   }

   getProdutosFB = () => {
    this.produtos = this.produtoCollection.snapshotChanges()
      .pipe(
        map( action => {
          return action.map(dados => {
            const data = dados.payload.doc.data();
            const id = dados.payload.doc.id
            return {id, ...data};
          });
        })
      );
   }

   getProdutos = () => {
     return this.produtos
   }

   addProduto = ( produto: Produto, img: string): Promise<DocumentReference> => {
    produto.Image = img;
    console.log(img)
    return this.produtoCollection.add(produto);
  }

  removeProduto = (id: string) => {
    return this.produtoCollection.doc(id).delete();
  }

  setProdutoDetail = (value: Produto) => {
    this.produtoDetail = value
  }

  getProdutoDetail = () => {
    return this.produtoDetail
  }

  //----------------------------------------Carrinho de Compra---------------------------------------------

  addCarrinhoCompras = (prod: Produto) => {
    carrinhoCompras.push(prod)
  }

  getCarrinhoCompras = (): Produto[] => {
    return carrinhoCompras.map(f => f)
  }

  removeCarrinho = (produto: Produto) => {

    console.log(carrinhoCompras.findIndex(f => f.id == produto.id))
    carrinhoCompras.splice(carrinhoCompras.findIndex(f => f.id == produto.id), 1)

    console.log("---------------------------------------------------");
    console.log(this.getCarrinhoCompras());
    console.log("---------------------------------------------------");

  }

  esvaziarCarrinho = () => {

    carrinhoCompras.splice(0, carrinhoCompras.length);

  }

}
