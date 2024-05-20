import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { Usuario } from '../../../../modelos/usuario.model';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { ProyectosService } from '../../../../servicios/proyecto.services';

@Component({
    selector: 'app-sidebar-permisos',
    templateUrl: './sidebar-permisos.component.html',
    styleUrl: './sidebar-permisos.component.css',
})
export class SidebarPermisosComponent implements OnInit {
    @Input() unidad: Unidad;
    @Input() proyecto: Proyecto;

    coordinadores: Usuario[];
    lideres: Usuario[];

    ngOnInit(): void {
        if (this.unidad !== null) {
            this.coordinadores = this.unidadesService.getCoordinadores(
                this.unidad.id
            );
        }
        if (this.proyecto !== null) {
            this.lideres = this.proyectosService.getLideres(this.proyecto.id);
        }
    }

    constructor(
        private unidadesService: UnidadesService,
        private proyectosService: ProyectosService
    ) {}

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }
}
