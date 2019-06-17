import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import { Venda } from '../interface/venda';
import { ItemVendido } from '../interface/item-vendido';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  vendas: Observable<Venda[]>
  vendaCollection: AngularFirestoreCollection<Venda>

  private itensVenda: ItemVendido[]

  constructor(
    private afs: AngularFirestore
  ) {
    this.vendaCollection = this.afs.collection<Venda>('venda');

    this.getVendasFB()
    console.log(this.getVendas())

   }

   getVendasFB = () => {
    this.vendas = this.vendaCollection.snapshotChanges()
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

   addVendaFB = ( venda: Venda): Promise<DocumentReference> => {
     console.log(venda)
    return this.vendaCollection.add(Object.assign({}, venda));
  }

   getVendas = () => {
    return this.vendas
  }

  getItensVenda = () => {
    return this.itensVenda
  }

  setItensVenda = (value: ItemVendido[]) => {
    this.itensVenda = value
  }
}
