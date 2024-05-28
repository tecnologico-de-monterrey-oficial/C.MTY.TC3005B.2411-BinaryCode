import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { Unidad } from '../../../modelos/unidad.model';
import { Usuario } from '../../../modelos/usuario.model';
import { getCoordinadores } from '../../../servicios/unidad.util';
import { getLideres } from '../../../servicios/proyecto.services';
import { permisoType } from '../permisos-constantes';

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

    permisosType = permisoType;

    ngOnInit(): void {
        if (this.unidad) {
            this.coordinadores = getCoordinadores(this.unidad.id);
        }
        if (this.proyecto) {
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
