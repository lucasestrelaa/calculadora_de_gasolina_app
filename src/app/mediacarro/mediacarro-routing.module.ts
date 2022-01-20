import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediacarroPage } from './mediacarro.page';

const routes: Routes = [
  {
    path: '',
    component: MediacarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediacarroPageRoutingModule {}
