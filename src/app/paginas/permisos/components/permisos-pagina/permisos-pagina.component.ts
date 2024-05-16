import { Component, Input } from '@angular/core';
import { UN1 } from '../../../../../assets/mocks/unidades';
import { Unidad } from '../../../../modelos/unidad.model';
import { Proyecto } from '../../../../modelos/proyectos.model';

@Component({
    selector: 'app-permisos-pagina',
    templateUrl: './permisos-pagina.component.html',
    styleUrl: './permisos-pagina.component.css',
})
export class PermisosComponent {
    @Input() unidad: Unidad = UN1;
    @Input() proyecto: Proyecto = null;
}
