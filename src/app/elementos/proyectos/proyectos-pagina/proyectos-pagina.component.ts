import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Proyecto } from '../../../modelos';
import { obtenerProyectosConValidacion } from '../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    permisoParaCrear: boolean = true;

    proyectosActivos: Proyecto[];
    proyectosArchivados: Proyecto[];

    archivado: boolean = false;
    cargando: boolean;
    vacio: boolean;

    constructor(private message: NzMessageService) {}

    async ngOnInit(): Promise<void> {
        this.cargando = true;
        const proyectosRespuesta: Proyecto[] =
            await obtenerProyectosConValidacion(this.message);

        if (proyectosRespuesta) {
            this.proyectosActivos = proyectosRespuesta.filter(
                proyecto => proyecto.activo
            );
            this.proyectosArchivados = proyectosRespuesta.filter(
                proyecto => !proyecto.activo
            );
            this.verificarVacio();
            this.cargando = false;
        }
    }

    crearProyecto(proyecto: Proyecto): void {
        this.proyectosActivos.push(proyecto);
    }

    borrarProyecto(id: number): void {
        this.proyectosActivos = this.proyectosActivos.filter(p => p.id !== id);
        this.proyectosArchivados = this.proyectosArchivados.filter(
            p => p.id !== id
        );
        this.verificarVacio();
    }

    actualizarProyecto(proyecto: Proyecto): void {
        this.proyectosActivos = this.proyectosActivos.map(p =>
            p.id === proyecto.id ? proyecto : p
        );
        this.proyectosArchivados = this.proyectosArchivados.map(p =>
            p.id === proyecto.id ? proyecto : p
        );
    }

    archivarProyecto(proyecto: Proyecto): void {
        this.proyectosArchivados.push(proyecto);
        this.proyectosActivos = this.proyectosActivos.filter(
            p => p.id !== proyecto.id
        );
        this.verificarVacio();
    }

    activarProyecto(proyecto: Proyecto): void {
        this.proyectosActivos.push(proyecto);
        this.proyectosArchivados = this.proyectosArchivados.filter(
            p => p.id !== proyecto.id
        );
        this.verificarVacio();
    }

    cambioActivo(id: number): void {
        this.archivado = id === 1 ? true : false;
        this.verificarVacio();
    }

    verificarVacio(): void {
        const longitud: boolean = this.archivado
            ? this.proyectosArchivados.length === 0
            : this.proyectosActivos.length === 0;
        this.vacio = longitud && !(!this.archivado && this.permisoParaCrear);
    }
}
