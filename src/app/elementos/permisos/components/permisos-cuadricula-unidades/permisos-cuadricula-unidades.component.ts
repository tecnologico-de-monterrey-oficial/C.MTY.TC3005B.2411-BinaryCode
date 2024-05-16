import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-permisos-cuadricula-unidades',
    templateUrl: './permisos-cuadricula-unidades.component.html',
    styleUrl: './permisos-cuadricula-unidades.component.css',
})
export class PermisosCuadriculaUnidadesComponent implements OnInit {
    unidades: Unidad[] = [];

    constructor(private unidadesService: UnidadesService) {}

    ngOnInit(): void {
        this.unidades =
            this.unidadesService.getUnidadesPorProyecto('idProyecto');
    }
}
