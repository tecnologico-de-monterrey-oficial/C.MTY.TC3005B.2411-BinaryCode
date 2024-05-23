import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { UnidadesService } from '../../../servicios/unidad.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-unidades-pagina',
    templateUrl: './unidades-pagina.component.html',
    styleUrl: './unidades-pagina.component.css',
})
export class UnidadesPaginaComponent implements OnInit {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;

    constructor(
        private unidadesService: UnidadesService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const proyectoId: number = params['id'];
            this.unidadesService.getUnidadesPorProyecto(proyectoId).subscribe({
                next: data => {
                    this.unidades = data;
                    this.unidadesVacias = this.unidades.length === 0;
                    console.log('Units fetched successfully:', this.unidades);
                },
                error: err => console.error('Error fetching units:', err),
                complete: () => console.log('Fetching units complete'),
            });
        });
    }
}
