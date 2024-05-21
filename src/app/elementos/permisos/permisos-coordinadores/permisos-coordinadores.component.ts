import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-permisos-coordinadores',
    templateUrl: './permisos-coordinadores.component.html',
    styleUrl: './permisos-coordinadores.component.css',
})
export class PermisosCoordinadoresComponent {
    coordinadores: Usuario[] = [];
    buscadorVisible: boolean = false;

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }

    addCoordinadores(personas: Usuario[]): void {
        this.coordinadores = personas;
        this.cancelarBuscador();
    }

    cancelarBuscador(): void {
        this.buscadorVisible = false;
    }
}
