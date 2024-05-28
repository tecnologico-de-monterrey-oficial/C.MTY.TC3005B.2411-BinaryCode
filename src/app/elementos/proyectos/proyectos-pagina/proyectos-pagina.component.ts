import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { obtenerProyectosConValidacion } from '../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    proyectosVacios: boolean;
    permisoParaAgregar: boolean = true;

    proyectosActivos: Proyecto[] = [];
    proyectosInactivos: Proyecto[] = [];

    esqueleto: boolean = true;
    archivado: boolean = false;

    proyectosRespuesta: Proyecto[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private message: NzMessageService
    ) {}

    async ngOnInit(): Promise<void> {
        this.esqueleto = true;
        this.proyectosRespuesta = await obtenerProyectosConValidacion(
            this.message
        );

        if (this.proyectosRespuesta) {
            this.proyectosActivos = this.proyectosRespuesta.filter(
                proyecto => proyecto.activo
            );
            this.proyectosInactivos = this.proyectosRespuesta.filter(
                proyecto => !proyecto.activo
            );
            this.proyectosVacios = this.proyectosActivos.length === 0;
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
        this.archivado = id === 1 ? true : false;
        this.proyectosVacios = this.archivado
            ? this.proyectosInactivos.length === 0
            : this.proyectosActivos.length === 0;
    }
}
