import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HommybPage } from './hommyb.page';

const routes: Routes = [
  {
    path: '',
    component: HommybPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HommybPageRoutingModule {}
