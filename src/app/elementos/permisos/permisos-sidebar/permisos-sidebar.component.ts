import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { Unidad } from '../../../modelos/unidad.model';
import { Usuario } from '../../../modelos/usuario.model';
import { getLideres } from '../../../servicios/proyecto.util';
import { getCoordinadores } from '../../../servicios/unidad.util';

@Component({
    selector: 'app-permisos-sidebar',
    templateUrl: './permisos-sidebar.component.html',
    styleUrl: './permisos-sidebar.component.css',
})
export class PermisosSidebarComponent implements OnInit {
    @Input() unidad: Unidad;
    @Input() proyecto: Proyecto;

    coordinadores: Usuario[];
    lideres: Usuario[];

    ngOnInit(): void {
        if (this.unidad !== null) {
            this.coordinadores = getCoordinadores(this.unidad.id);
        }
        if (this.proyecto !== null) {
            this.lideres = getLideres(this.proyecto.id);
        }
    }

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }
}
