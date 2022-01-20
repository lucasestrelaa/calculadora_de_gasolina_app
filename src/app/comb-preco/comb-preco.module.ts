import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombPrecoPageRoutingModule } from './comb-preco-routing.module';

import { CombPrecoPage } from './comb-preco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombPrecoPageRoutingModule
  ],
  declarations: [CombPrecoPage]
})
export class CombPrecoPageModule {}
