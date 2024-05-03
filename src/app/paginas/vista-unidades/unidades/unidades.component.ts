import { Component } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-unidades',
    templateUrl: './unidades.component.html',
    styleUrl: './unidades.component.css',
})
export class UnidadesComponent {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;

    constructor(private unidadesService: UnidadesService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            const proyectoId = params['id']; // No es necesario convertirlo
            this.unidades = unidadesService.getUnidadesPorProyecto(proyectoId);
            this.unidadesVacias = this.unidades.length === 0;
        });
    }
}
