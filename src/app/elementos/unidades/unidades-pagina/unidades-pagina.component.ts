import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { obtenerUnidades } from '../../../servicios/unidad.util';

@Component({
    selector: 'app-unidades-pagina',
    templateUrl: './unidades-pagina.component.html',
    styleUrl: './unidades-pagina.component.css',
})
export class UnidadesPaginaComponent implements OnInit {
    proyectoId: number;

    loadingCards: number[] = [1, 2, 3, 4, 5];

    unidades: Unidad[] = [];

    permisoParaAgregar: boolean = true;
    unidadesVacias: boolean = false;
    esqueleto: boolean = true;

    async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async params => {
            this.proyectoId = params['id'];
            this.unidades = await obtenerUnidades(
                this.proyectoId,
                this.unidadesService,
                this.message
            );

            if (this.unidades) {
                this.unidadesVacias = this.unidades.length === 0;
                this.esqueleto = false;
            }
        });
    }

    crearUnidad(unidad: Unidad): void {
        this.unidades.push(unidad);
    }

    borrarUnidad(id: number): void {
        this.unidades = this.unidades.filter(p => p.id !== id);
    }

    actualizarUnidad(unidad: Unidad): void {
        this.unidades = this.unidades.map(u =>
            u.id === unidad.id ? unidad : u
        );
    }

    constructor(
        private unidadesService: UnidadesService,
        private message: NzMessageService,
        private route: ActivatedRoute
    ) {}
}
