import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombPrecoPage } from './comb-preco.page';

const routes: Routes = [
  {
    path: '',
    component: CombPrecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombPrecoPageRoutingModule {}
