import { Component, Input, OnInit } from '@angular/core';
import { permisoType } from '../permisos-constantes';
import { Proyecto, Unidad, Usuario } from '../../../modelos';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { UnidadesService } from '../../../servicios/unidades.service';

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

    async ngOnInit(): Promise<void> {
        if (this.unidad) {
            this.coordinadores = this.unidadesService.getCoordinadores(
                this.unidad.id
            );
        }
        if (this.proyecto) {
            this.lideres = await this.proyectosService.getLideres(
                this.proyecto.id
            );
        }
    }

    onRemoveItemClick(idEliminado: number): void {
        // TODO: Implementar eliminación de usuario API
        this.coordinadores = this.coordinadores.filter(
            coordinador => coordinador.id !== idEliminado
        );
    }

    constructor(
        private proyectosService: ProyectosService,
        private unidadesService: UnidadesService
    ) {}
}
