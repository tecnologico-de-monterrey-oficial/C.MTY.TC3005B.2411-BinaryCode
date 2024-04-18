import { NgModule } from '@angular/core';

import { EntradaLoginRoutingModule } from './entrada-login-routing.module';

import { EntradaLoginComponent } from './entrada-login.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    EntradaLoginRoutingModule,
  ],
  declarations: [EntradaLoginComponent, LoginComponent, RegistroComponent],
  exports: [EntradaLoginComponent],
})
export class EntradaLoginModule { }
