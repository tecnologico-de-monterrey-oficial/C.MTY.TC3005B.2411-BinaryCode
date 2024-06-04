import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto, Unidad } from '../../../modelos';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { UnidadesService } from '../../../servicios/unidades.service';

@Component({
    selector: 'app-permisos-pagina',
    templateUrl: './permisos-pagina.component.html',
    styleUrl: './permisos-pagina.component.css',
})
export class PermisosPaginaComponent implements OnInit {
    tipo: string;
    unidad: Unidad;
    proyecto: Proyecto;

    isLoading: boolean = true;

    async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async params => {
            this.tipo = params['tipo'];
            const elementoId: number = params['id'];

            if (this.tipo === 'proyecto') {
                this.proyecto =
                    await this.proyectosService.getProyectoIndividual(
                        elementoId
                    );
            } else if (this.tipo === 'unidad') {
                this.unidad =
                    await this.unidadesService.getUnidadIndividual(elementoId);
            }
            this.isLoading = false;
        });
    }

    constructor(
        private route: ActivatedRoute,
        private proyectosService: ProyectosService,
        private unidadesService: UnidadesService
    ) {}
}
