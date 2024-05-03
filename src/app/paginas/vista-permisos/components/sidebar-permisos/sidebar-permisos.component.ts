import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { US4, US5, US6 } from '../../../../../assets/mocks/usuarios';
import { Usuario } from '../../../../modelos/usuario.model';

@Component({
    selector: 'app-sidebar-permisos',
    templateUrl: './sidebar-permisos.component.html',
    styleUrl: './sidebar-permisos.component.css',
})
export class SidebarPermisosComponent {
    @Input() unidad: Unidad;
    @Input() proyecto: Proyecto;

    coordinadores: Usuario[] = [US4, US5, US6];

    onRemoveItemClick(idEliminado: string): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
        console.log('Coordinador eliminado');
    }
}
