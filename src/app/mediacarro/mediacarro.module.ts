import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediacarroPageRoutingModule } from './mediacarro-routing.module';

import { MediacarroPage } from './mediacarro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediacarroPageRoutingModule
  ],
  declarations: [MediacarroPage]
})
export class MediacarroPageModule {}
