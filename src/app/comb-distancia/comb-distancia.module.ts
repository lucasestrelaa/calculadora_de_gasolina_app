import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombDistanciaPageRoutingModule } from './comb-distancia-routing.module';

import { CombDistanciaPage } from './comb-distancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombDistanciaPageRoutingModule
  ],
  declarations: [CombDistanciaPage]
})
export class CombDistanciaPageModule {}
