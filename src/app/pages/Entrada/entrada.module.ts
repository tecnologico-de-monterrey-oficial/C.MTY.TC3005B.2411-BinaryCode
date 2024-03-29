import { NgModule } from '@angular/core';

import { EntradaRoutingModule } from './entrada-routing.module';

import { EntradaComponent } from './entrada.component';
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    EntradaRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [EntradaComponent],
  exports: [EntradaComponent],
})
export class EntradaModule { }
