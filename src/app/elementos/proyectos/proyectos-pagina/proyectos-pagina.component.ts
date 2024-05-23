import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import {
    ProyectosService,
    RespuestaProyectoServidor,
} from '../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    proyectos: Proyecto[] = [];
    esqueleto: boolean = true;
    numbers: number[] = [1, 2, 3, 4];

    respuesta: RespuestaProyectoServidor;

    constructor(
        private proyectoServices: ProyectosService,
        private router: Router,
        private route: ActivatedRoute,
        private message: NzMessageService
    ) {}

    async ngOnInit(): Promise<void> {
        this.esqueleto = true;
        this.respuesta = await this.proyectoServices.getProyectos();

        if (this.respuesta.exito && Array.isArray(this.respuesta.mensaje)) {
            this.proyectos = this.respuesta.mensaje;
            this.esqueleto = false;
        } else {
            this.message.error(
                'Hubo un error al obtener los proyectos, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
        }
    }

    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }

    crearProyecto(proyecto: Proyecto): void {
        this.proyectos.push(proyecto);
    }

    borrarProyecto(id: number): void {
        this.proyectos = this.proyectos.filter(p => p.id !== id);
    }

    actualizarProyecto(proyecto: Proyecto): void {
        const index: number = this.proyectos.findIndex(
            p => p.id === proyecto.id
        );
        this.proyectos[index] = proyecto;
    }
}
