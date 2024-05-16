// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports ng-zorro
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexDirective } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

// Declarations
import { PersonaTarjetaComponent } from './components/persona-tarjeta/persona-tarjeta.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
    imports: [
        CommonModule,
        NzBreadCrumbModule,
        NzDividerModule,
        NzDropDownModule,
        NzFlexDirective,
        NzGridModule,
        NzIconModule,
        NzTagModule,
    ],
    declarations: [PersonaTarjetaComponent, PersonasComponent],
    exports: [PersonaTarjetaComponent, PersonasComponent],
})
export class VistaPersonasModule {}
