import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { ActivatedRoute } from '@angular/router';

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
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const proyectoId: string = params['id'];
            this.unidades =
                this.unidadesService.getUnidadesPorProyecto(proyectoId);
            this.unidadesVacias = this.unidades.length === 0;
        });
    }
}
