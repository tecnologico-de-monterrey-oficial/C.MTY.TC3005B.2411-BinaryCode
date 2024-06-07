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

    constructor(
        private unidadesService: UnidadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const proyectoId: number = params['proyectoId'];
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
        // Aquí puedes cargar los datos específicos de la unidad
        console.log(`Cargando datos para unidad: ${unidadesId}`);
        // Implementa la lógica necesaria para cargar los datos de la unidad específica
        // Ejemplo:
        // this.unidadesService.getUnidadPorId(unidadesId).subscribe({
        //     next: data => {
        //         // Maneja los datos de la unidad específica
        //     },
        //     error: err => console.error('Error fetching unit data:', err)
        // });
    }
}
