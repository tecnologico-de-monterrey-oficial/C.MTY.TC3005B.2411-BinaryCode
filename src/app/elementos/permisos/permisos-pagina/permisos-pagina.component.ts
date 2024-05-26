import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ActivatedRoute } from '@angular/router';
import { obtenerProyecto } from '../../../servicios/proyecto.util';
import { obtenerUnidad } from '../../../servicios/unidad.util';

@Component({
    selector: 'app-permisos-pagina',
    templateUrl: './permisos-pagina.component.html',
    styleUrl: './permisos-pagina.component.css',
})
export class PermisosPaginaComponent implements OnInit {
    unidad: Unidad;
    proyecto: Proyecto;

    async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async params => {
            const tipo: string = params['tipo'];
            const elementoId: number = params['id'];

            if (tipo === 'proyecto') {
                this.proyecto = await obtenerProyecto(elementoId);
            } else if (tipo === 'unidad') {
                this.unidad = await obtenerUnidad(elementoId);
            }
        });
    }

    constructor(private route: ActivatedRoute) {}
}
