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

  rootUser: boolean

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AutenticationServiceService
  ) {
    this.appPages.push(
      {
        title: 'Cadastro de Produto',
        url: '/cadastro-produto-screen',
        icon: 'cart'
      },
      {
      title: 'Produtos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Carrinho',
      url: '/carrinho-screen',
      icon: 'cart'
    })

    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewDidEnter() {
    this.rootUser = this.authService.getIsRootUser()

    console.log(this.rootUser)

    if(this.rootUser)
    {
      this.appPages.push(
        {
          title: 'Cadastro de Produto',
          url: '/cadastro-produto-screen',
          icon: 'cart'
        },
        {
          title: 'Produtos',
          url: '/list',
          icon: 'list'
        }
     )
    }
    else
    {
      this.appPages.push(
        {
        title: 'Produtos',
        url: '/list',
        icon: 'list'
      },
      {
        title: 'Carrinho',
        url: '/carrinho-screen',
        icon: 'cart'
      })
    }
  }

  ngOnInit() {

   
  }
}
