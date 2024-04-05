import { NgModule } from '@angular/core';

import { EntradaRoutingModule } from './entrada-routing.module';

import { EntradaComponent } from './entrada.component';

@NgModule({
  imports: [
    EntradaRoutingModule,
  ],
  declarations: [EntradaComponent],
  exports: [EntradaComponent],
})
export class EntradaModule { }
