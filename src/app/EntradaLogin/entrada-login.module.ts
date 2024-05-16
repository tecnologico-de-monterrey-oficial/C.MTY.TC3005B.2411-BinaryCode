import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { EntradaLoginComponent } from './entrada-login.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
    imports: [
        CommonModule,
        NzFormModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
    ],
    declarations: [EntradaLoginComponent, LoginComponent, RegistroComponent],
    exports: [EntradaLoginComponent],
})
export class EntradaLoginModule {}
