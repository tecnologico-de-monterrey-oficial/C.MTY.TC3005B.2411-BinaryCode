import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos';
import { UnidadesService } from '../../../servicios/unidades.service';

@Component({
    selector: 'app-permisos-cuadricula-unidades',
    templateUrl: './permisos-cuadricula-unidades.component.html',
    styleUrl: './permisos-cuadricula-unidades.component.css',
})
export class PermisosCuadriculaUnidadesComponent implements OnInit {
    @Input() proyectoId: number;

    unidades: Unidad[];
    unidadesVacias: boolean;
    loading: boolean = true;

    async ngOnInit(): Promise<void> {
        this.unidades = await this.unidadesService.getUnidadesPorProyecto(
            this.proyectoId
        );

        if (this.unidades) {
            this.unidadesVacias = this.unidades.length === 0;
            this.loading = false;
        }
    }

    constructor(private unidadesService: UnidadesService) {}
}
