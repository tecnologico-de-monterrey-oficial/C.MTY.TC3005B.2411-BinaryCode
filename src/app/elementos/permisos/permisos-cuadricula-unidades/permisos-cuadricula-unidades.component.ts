import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Unidad } from '../../../modelos/unidad.model';
import { obtenerUnidades } from '../../../servicios/unidad.util';

@Component({
    selector: 'app-permisos-cuadricula-unidades',
    templateUrl: './permisos-cuadricula-unidades.component.html',
    styleUrl: './permisos-cuadricula-unidades.component.css',
})
export class PermisosCuadriculaUnidadesComponent implements OnInit {
    unidades: Unidad[] = [];
    unidadesVacias: boolean;
    loading: boolean = true;

    constructor(private message: NzMessageService) {}

    async ngOnInit(): Promise<void> {
        const proyectoId: number = 0;
        this.unidades = await obtenerUnidades(proyectoId, this.message);

        if (this.unidades) {
            this.unidadesVacias = this.unidades.length === 0;
            this.loading = false;
        }
    }
}
