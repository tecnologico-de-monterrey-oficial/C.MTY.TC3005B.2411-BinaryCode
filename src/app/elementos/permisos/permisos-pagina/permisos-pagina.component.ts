import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { obtenerProyectoConValidacion } from '../../../servicios/proyecto.services';
import { obtenerUnidad } from '../../../servicios/unidad.util';
import { Proyecto, Unidad } from '../../../modelos';

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
                this.proyecto = await obtenerProyectoConValidacion(elementoId);
            } else if (this.tipo === 'unidad') {
                this.unidad = await obtenerUnidad(elementoId);
            }
            this.isLoading = false;
        });
    }

    constructor(private route: ActivatedRoute) {}
}
