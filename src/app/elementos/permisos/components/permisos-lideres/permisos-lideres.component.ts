import { Component } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario.model';
import { US1, US2, US3 } from '../../../../../assets/mocks/usuarios';

@Component({
    selector: 'app-permisos-lideres',
    templateUrl: './permisos-lideres.component.html',
    styleUrl: './permisos-lideres.component.css',
})
export class PermisosLideresComponent {
    lideres: Usuario[] = [US1, US2, US3];

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.lideres = this.lideres.filter(líder => líder.id !== idEliminado);
    }
}
