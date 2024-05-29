import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { obtenerUnidades } from '../../../servicios/unidad.util';
import { Unidad } from '../../../modelos';

@Component({
    selector: 'app-permisos-cuadricula-unidades',
    templateUrl: './permisos-cuadricula-unidades.component.html',
    styleUrl: './permisos-cuadricula-unidades.component.css',
})
export class PermisosCuadriculaUnidadesComponent implements OnInit {
    @Input() proyectoId: number;

    unidades: Unidad[] = [];
    unidadesVacias: boolean;
    loading: boolean = true;

    constructor(private message: NzMessageService) {}

    async ngOnInit(): Promise<void> {
        this.unidades = await obtenerUnidades(this.proyectoId, this.message);

        if (this.unidades) {
            this.unidadesVacias = this.unidades.length === 0;
            this.loading = false;
        }
    }
}
