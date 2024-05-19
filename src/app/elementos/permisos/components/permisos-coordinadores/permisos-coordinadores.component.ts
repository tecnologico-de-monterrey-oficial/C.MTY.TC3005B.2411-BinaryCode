import { Component } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { UN1 } from '../../../../../assets/mocks/unidades';

@Component({
    selector: 'app-permisos-coordinadores',
    templateUrl: './permisos-coordinadores.component.html',
    styleUrl: './permisos-coordinadores.component.css',
})
export class PermisosCoordinadoresComponent {
    unidad: Unidad = UN1;
}
