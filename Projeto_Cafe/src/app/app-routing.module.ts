import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cadastro-screen', loadChildren: './Pages/cadastro-screen/cadastro-screen.module#CadastroScreenPageModule' },

  { path: 'sobre-screen', loadChildren: './Pages/sobre-screen/sobre-screen.module#SobreScreenPageModule' },
  { path: 'carrinho-screen', loadChildren: './Pages/carrinho-screen/carrinho-screen.module#CarrinhoScreenPageModule' },
  { path: 'item-vendidos-screen', loadChildren: './Pages/item-vendidos-screen/item-vendidos-screen.module#ItemVendidosScreenPageModule' },
  { path: 'relatorios-screen', loadChildren: './Pages/relatorios-screen/relatorios-screen.module#RelatoriosScreenPageModule' },


  { path: 'login-screen', loadChildren: './Pages/login-screen/login-screen.module#LoginScreenPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
