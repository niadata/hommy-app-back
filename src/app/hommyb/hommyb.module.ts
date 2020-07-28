import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HommybPageRoutingModule } from './hommyb-routing.module';

import { HommybPage } from './hommyb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HommybPageRoutingModule
  ],
  declarations: [HommybPage]
})
export class HommybPageModule {}
