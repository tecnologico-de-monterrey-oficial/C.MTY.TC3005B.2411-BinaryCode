import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-unidades',
    templateUrl: './unidades.component.html',
    styleUrl: './unidades.component.css',
})
export class UnidadesComponent implements OnInit {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;
    unidadesId: string | null = null;
    apartadosFiltrados: Unidad[] = [];
    filterParentId: string | null = null;

    constructor(
        private unidadesService: UnidadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const proyectoId: string = params['proyectoId'];
            this.unidadesId = params['unidadesId'];

            if (proyectoId) {
                this.unidadesService
                    .getUnidadesPorProyecto(proyectoId)
                    .subscribe({
                        next: data => {
                            this.unidades = data;
                            this.unidadesVacias = this.unidades.length === 0;
                            console.log(
                                'Units fetched successfully:',
                                this.unidades
                            );
                        },
                        error: err =>
                            console.error('Error fetching units:', err),
                        complete: () => console.log('Fetching units complete'),
                    });
            }

            if (this.unidadesId) {
                this.loadUnidadesData(this.unidadesId);
            }
        });
    }

    loadUnidadesData(unidadesId: string): void {
        console.log(`Cargando datos para unidad con idPadre: ${unidadesId}`);
        this.unidadesService.getApartadosPorPadre(unidadesId).subscribe({
            next: apartados => {
                this.unidades = apartados;
                this.unidadesVacias = this.unidades.length === 0;
                console.log('Apartados filtrados:', this.unidades);
            },
            error: err => console.error('Error fetching filtered units:', err),
        });
    }

    filtrarPorPadre(): void {
        if (this.filterParentId) {
            this.unidadesService
                .getApartadosPorPadre(this.filterParentId)
                .subscribe({
                    next: apartados => {
                        this.apartadosFiltrados = apartados;
                        this.unidadesVacias = apartados.length === 0;
                        console.log(
                            'Apartados filtrados:',
                            this.apartadosFiltrados
                        );
                    },
                    error: err =>
                        console.error('Error fetching filtered units:', err),
                });
        } else {
            // Si no hay filtro, mostrar todas las unidades
            this.apartadosFiltrados = this.unidades;
            this.unidadesVacias = this.unidades.length === 0;
        }
    }
}
