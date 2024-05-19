import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { EntradaPaginaComponent } from './components/entrada-pagina/entrada-pagina.component';
import { EntradaLoginComponent } from './components/entrada-login/entrada-login.component';
import { EntradaRegistroComponent } from './components/entrada-registro/entrada-registro.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
    ],
    declarations: [
        EntradaPaginaComponent,
        EntradaLoginComponent,
        EntradaRegistroComponent,
    ],
    exports: [EntradaPaginaComponent],
})
export class EntradaModule {}
