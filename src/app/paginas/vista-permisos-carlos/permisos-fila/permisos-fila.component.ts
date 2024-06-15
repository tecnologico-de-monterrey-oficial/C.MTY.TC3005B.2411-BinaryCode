import { Component, Input } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-permisos-fila',
    templateUrl: './permisos-fila.component.html',
    styleUrls: ['./permisos-fila.component.css'],
})
export class PermisosFilaComponent {
    @Input() usuario: Usuario;
    checkboxValue: boolean = false;
}
