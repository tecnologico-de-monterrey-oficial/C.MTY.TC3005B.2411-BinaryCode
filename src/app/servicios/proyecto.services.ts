import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
import { P1, P2, P3, P4, P5, P6 } from '../../assets/mocks/proyectos';
import { Usuario } from '../modelos/usuario.model';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    proyectos: Proyecto[] = [P1, P2, P3, P4, P5, P6];
    lideres: Usuario[] = [US4, US5, US6];

    getProyectos(): Proyecto[] {
        return this.proyectos;
    }

    getLideres(idProyecto: string): Usuario[] {
        idProyecto;
        return this.lideres;
    }
}
