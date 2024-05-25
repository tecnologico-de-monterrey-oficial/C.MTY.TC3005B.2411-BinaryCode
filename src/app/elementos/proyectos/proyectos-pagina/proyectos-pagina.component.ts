import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { obtenerProyectos } from '../../../servicios/proyecto.util';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    loadingCards: number[] = [1, 2, 3, 4];

    proyectosActivos: Proyecto[] = [];
    proyectosInactivos: Proyecto[] = [];

    esqueleto: boolean = true;
    admin: boolean = true;
    inactivo: boolean = false;

    proyectosRespuesta: Proyecto[];

    constructor(
        private proyectoServices: ProyectosService,
        private router: Router,
        private route: ActivatedRoute,
        private message: NzMessageService
    ) {}

    async ngOnInit(): Promise<void> {
        this.esqueleto = true;
        this.proyectosRespuesta = await obtenerProyectos(
            this.proyectoServices,
            this.message
        );

        if (this.proyectosRespuesta) {
            this.proyectosActivos = this.proyectosRespuesta.filter(
                proyecto => proyecto.activo
            );
            this.proyectosInactivos = this.proyectosRespuesta.filter(
                proyecto => !proyecto.activo
            );
            this.esqueleto = false;
        }
    }

    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }

    crearProyecto(proyecto: Proyecto): void {
        this.proyectosActivos.push(proyecto);
    }

    borrarProyecto(id: number): void {
        this.proyectosActivos = this.proyectosActivos.filter(p => p.id !== id);
        this.proyectosInactivos = this.proyectosInactivos.filter(
            p => p.id !== id
        );
    }

    actualizarProyecto(proyecto: Proyecto): void {
        this.proyectosActivos = this.proyectosActivos.map(p =>
            p.id === proyecto.id ? proyecto : p
        );
        this.proyectosInactivos = this.proyectosInactivos.map(p =>
            p.id === proyecto.id ? proyecto : p
        );
    }

    archivarProyecto(proyecto: Proyecto): void {
        this.proyectosInactivos.push(proyecto);
        this.proyectosActivos = this.proyectosActivos.filter(
            p => p.id !== proyecto.id
        );
    }

    activarProyecto(proyecto: Proyecto): void {
        this.proyectosActivos.push(proyecto);
        this.proyectosInactivos = this.proyectosInactivos.filter(
            p => p.id !== proyecto.id
        );
    }

    handleActivoChange(id: number): void {
        this.inactivo = id === 1 ? true : false;
    }
}
