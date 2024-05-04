import { Component } from '@angular/core';
import { UN1 } from '../../../../assets/mocks/unidades';
import { Unidad } from '../../../modelos/unidad.model';

@Component({
    selector: 'app-permisos',
    templateUrl: './permisos.component.html',
    styleUrl: './permisos.component.css',
})
export class PermisosComponent {
    unidad: Unidad = UN1;
}
