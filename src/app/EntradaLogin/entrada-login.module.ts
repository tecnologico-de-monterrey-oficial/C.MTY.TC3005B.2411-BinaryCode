import { NgModule } from '@angular/core';

import { EntradaLoginRoutingModule } from './entrada-login-routing.module';

import { EntradaLoginComponent } from './entrada-login.component';

@NgModule({
  imports: [
    EntradaLoginRoutingModule,
  ],
  declarations: [EntradaLoginComponent],
  exports: [EntradaLoginComponent],
})
export class EntradaLoginModule { }
