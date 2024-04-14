import { NgModule } from '@angular/core';

import { EntradaLoginRoutingModule } from './entrada-login-routing.module';

import { EntradaLoginComponent } from './entrada-login.component';

import { LoginComponent } from './Log in/Login.component';
import { RegistroComponent } from './Registro/registro.component';

@NgModule({
  imports: [
    EntradaLoginRoutingModule,
  ],
  declarations: [EntradaLoginComponent, LoginComponent, RegistroComponent],
  exports: [EntradaLoginComponent],
})
export class EntradaLoginModule { }
