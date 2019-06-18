import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from 'src/app/interface/venda';
import { VendaService } from 'src/app/services/venda.service';
import { Router } from '@angular/router';
import { AutenticationServiceService } from 'src/app/services/autentication-service.service';

@Component({
  selector: 'app-relatorios-screen',
  templateUrl: './relatorios-screen.page.html',
  styleUrls: ['./relatorios-screen.page.scss'],
})
export class RelatoriosScreenPage implements OnInit {

  vendas: Observable<Venda[]>
  vendasLiberadas: Venda[]
  private rootUser: boolean

  constructor(
    private vendaService: VendaService,
    private authService: AutenticationServiceService,
    private router: Router
  ) {
      this.vendas = this.vendaService.getVendas()
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.rootUser = this.authService.getIsRootUser()
    console.log(this.rootUser)
    this.vendas = this.vendaService.getVendas()

   
  }

  redirecionar = (venda: Venda) => {

    this.vendaService.setItensVenda(venda.itensVendido)
    this.router.navigateByUrl("/item-vendidos-screen")
  }
}
