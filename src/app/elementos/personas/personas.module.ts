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
import { PersonasLineaComponent } from './components/personas-linea/personas-linea.component';
import { PersonasListaComponent } from './components/personas-lista/personas-lista.component';

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
    declarations: [PersonasLineaComponent, PersonasListaComponent],
    exports: [PersonasLineaComponent, PersonasListaComponent],
})
export class PersonasModule {}
