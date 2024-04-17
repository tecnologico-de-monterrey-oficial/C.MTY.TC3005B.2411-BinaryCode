import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PersonasComponent } from './personas/personas.component';
import { PersonaTarjetaComponent } from './components/persona-tarjeta/persona-tarjeta.component';
import {NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzTagComponent, NzTagModule} from "ng-zorro-antd/tag";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzFlexDirective} from "ng-zorro-antd/flex";

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzDropDownModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzFlexDirective,
  ],
  declarations: [
    PersonasComponent,
    PersonaTarjetaComponent
  ],
    exports: [PersonasComponent, PersonaTarjetaComponent],
})
export class VistaPersonasModule { }
