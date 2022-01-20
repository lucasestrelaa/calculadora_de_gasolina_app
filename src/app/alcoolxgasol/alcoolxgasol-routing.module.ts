import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcoolxgasolPage } from './alcoolxgasol.page';

const routes: Routes = [
  {
    path: '',
    component: AlcoolxgasolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcoolxgasolPageRoutingModule {}
