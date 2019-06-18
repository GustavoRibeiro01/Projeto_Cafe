import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticationServiceService } from './services/autentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  public appPages = [];
  private appPages1 = [];

  rootUser: boolean

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AutenticationServiceService
  ) {
    
      this.appPages.push(
        {
          title: 'Adicionar Produto',
          url: '/cadastro-produto-screen',
          icon: 'add'
        },
        {
          title: 'Produtos',
          url: '/list',
          icon: 'list'
        },
        {
          title: 'Vendas Realizadas',
          url: '/relatorios-screen',
          icon: 'grid'
        },
        {
          title: 'Sair',
          url: '/login-screen',
          icon: 'power'
        }
      )

      this.appPages1.push(
        {
          title: 'Produtos',
          url: '/list',
          icon: 'list'
        },
        {
          title: 'Carrinho',
          url: '/carrinho-screen',
          icon: 'cart'
        },
        {
          title: 'Minhas Compras',
          url: '/relatorios-screen',
          icon: 'grid'
        },
        {
          title: 'Sair',
          url: '/login-screen',
          icon: 'power'
        }
      )

    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  isRootUser = (): boolean => {
    return this.authService.getIsRootUser()
  }

  ngOnInit() {

  }

  logOut = (obj)  => {
    
    if(obj.title == "Sair")
    {
      this.authService.logoutUsuario()
      console.log(this.authService.detalhesUsuario())
    }
  }

}
