import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlcoolxgasolPageRoutingModule } from './alcoolxgasol-routing.module';

import { AlcoolxgasolPage } from './alcoolxgasol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcoolxgasolPageRoutingModule
  ],
  declarations: [AlcoolxgasolPage]
})
export class AlcoolxgasolPageModule {}
