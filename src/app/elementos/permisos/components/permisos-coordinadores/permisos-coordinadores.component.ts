import { Component } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario.model';
import { US1, US2, US3 } from '../../../../../assets/mocks/usuarios';

@Component({
    selector: 'app-permisos-coordinadores',
    templateUrl: './permisos-coordinadores.component.html',
    styleUrl: './permisos-coordinadores.component.css',
})
export class PermisosCoordinadoresComponent {
    coordinadores: Usuario[] = [US1, US2, US3];

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }
}
