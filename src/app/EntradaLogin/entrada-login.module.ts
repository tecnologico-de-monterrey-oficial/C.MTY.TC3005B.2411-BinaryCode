import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaLoginRoutingModule } from './entrada-login-routing.module';

import { EntradaLoginComponent } from './entrada-login.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
    imports: [EntradaLoginRoutingModule, NzGridModule, CommonModule],
    declarations: [EntradaLoginComponent, LoginComponent, RegistroComponent],
    exports: [EntradaLoginComponent],
})
export class EntradaLoginModule {}
