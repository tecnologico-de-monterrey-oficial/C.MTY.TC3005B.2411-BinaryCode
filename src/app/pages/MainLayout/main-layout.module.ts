import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
  ],
  declarations: [
    MainLayoutComponent
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
