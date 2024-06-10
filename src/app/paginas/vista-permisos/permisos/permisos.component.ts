import { Component, Input } from '@angular/core';
//import { UN1 } from '../../../../assets/mocks/unidades';
import { Unidad } from '../../../modelos/unidad.model';
import { Proyecto } from '../../../modelos/proyectos.model';
import { P1 } from '../../../../assets/mocks/proyectos';

@Component({
    selector: 'app-permisos',
    templateUrl: './permisos.component.html',
    styleUrl: './permisos.component.css',
})
export class PermisosComponent {
    @Input() unidad: Unidad = null;
    @Input() proyecto: Proyecto = P1;
}
