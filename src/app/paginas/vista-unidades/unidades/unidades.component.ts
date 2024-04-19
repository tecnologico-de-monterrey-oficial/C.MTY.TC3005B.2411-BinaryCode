import { Component } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';

@Component({
    selector: 'app-unidades',
    templateUrl: './unidades.component.html',
    styleUrl: './unidades.component.css',
})
export class UnidadesComponent {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;

    constructor(private unidadesService: UnidadesService) {
        this.unidades = unidadesService.getUnidades();
        this.unidadesVacias = this.unidades.length == 0;
    }
}
