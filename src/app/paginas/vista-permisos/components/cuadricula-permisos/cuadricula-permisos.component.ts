import { Component, OnInit } from '@angular/core';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { Unidad } from '../../../../modelos/unidad.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cuadricula-permisos',
    templateUrl: './cuadricula-permisos.component.html',
    styleUrls: ['./cuadricula-permisos.component.css'],
})
export class CuadriculaPermisosComponent implements OnInit {
    unidades: Unidad[] = [];
    unidadesVacias: boolean = true;
    constructor(
        private unidadesService: UnidadesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const proyectoId: number = params['id'];
            console.log(params['id']);
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
