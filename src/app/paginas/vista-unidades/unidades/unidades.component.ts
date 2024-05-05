import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';

@Component({
    selector: 'app-unidades',
    templateUrl: './unidades.component.html',
    styleUrl: './unidades.component.css',
})
export class UnidadesComponent implements OnInit {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;

    ngOnInit(): void {
        this.unidades = this.unidadesService.getUnidades('idProyecto');
        this.unidadesVacias = this.unidades.length == 0;
    }

    constructor(private unidadesService: UnidadesService) {}
}
