import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-cuadricula-permisos',
    templateUrl: './cuadricula-permisos.component.html',
    styleUrl: './cuadricula-permisos.component.css',
})
export class CuadriculaPermisosComponent implements OnInit {
    unidades: Unidad[] = [];

    constructor(private unidadesService: UnidadesService) {}

    ngOnInit(): void {
        this.unidades =
            this.unidadesService.getUnidadesPorProyecto('idProyecto');
    }
}
