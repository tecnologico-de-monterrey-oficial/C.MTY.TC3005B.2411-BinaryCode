import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-cuadricula-permisos',
    templateUrl: './cuadricula-permisos.component.html',
    styleUrls: ['./cuadricula-permisos.component.css'],
})
export class CuadriculaPermisosComponent implements OnInit {
    unidades: Unidad[] = [];
    constructor(private unidadesService: UnidadesService) {}

    ngOnInit(): void {
        this.unidadesService.getUnidadesPorProyecto('idProyecto').subscribe({
            next: data => (this.unidades = data),
            error: err => console.error('Error fetching units:', err),
            complete: () => console.log('Fetching units complete'),
        });
    }
}
