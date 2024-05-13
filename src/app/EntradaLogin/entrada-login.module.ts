import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaLoginRoutingModule } from './entrada-login-routing.module';

import { EntradaLoginComponent } from './entrada-login.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        EntradaLoginRoutingModule,
        CommonModule,
        NzGridModule,
        NzInputModule,
        NzFormModule,
        NzIconModule,
        ReactiveFormsModule,
    ],
    declarations: [EntradaLoginComponent, LoginComponent, RegistroComponent],
    exports: [EntradaLoginComponent],
})
export class EntradaLoginModule {}
