import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombDistanciaPage } from './comb-distancia.page';

const routes: Routes = [
  {
    path: '',
    component: CombDistanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombDistanciaPageRoutingModule {}
