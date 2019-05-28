import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemVendidosScreenPage } from './item-vendidos-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemVendidosScreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemVendidosScreenPage]
})
export class ItemVendidosScreenPageModule {}
