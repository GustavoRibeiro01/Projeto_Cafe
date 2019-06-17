import { Component, OnInit } from '@angular/core';
import { VendaService } from 'src/app/services/venda.service';
import { ItemVendido } from 'src/app/interface/item-vendido';

@Component({
  selector: 'app-item-vendidos-screen',
  templateUrl: './item-vendidos-screen.page.html',
  styleUrls: ['./item-vendidos-screen.page.scss'],
})
export class ItemVendidosScreenPage implements OnInit {

  itensVenda: ItemVendido[]

  constructor(
    private vendaService: VendaService
  ) { }

  ngOnInit() {
    this.itensVenda = this.vendaService.getItensVenda()
  }

  returnPrecoTotal(): number {

    if(this.itensVenda.length == 0)
      return 0.00;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return this.itensVenda.map(f => f.Preco * f.Quantidade).reduce(reducer)

  }

}
