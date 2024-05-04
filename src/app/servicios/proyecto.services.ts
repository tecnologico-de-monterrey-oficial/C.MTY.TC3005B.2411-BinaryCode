import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
import { P1, P2, P3, P4, P5, P6 } from '../../assets/mocks/proyectos';

@Injectable({
    providedIn: 'root',
})
export class ProyectoServices {
    proyectos: Proyecto[] = [P1, P2, P3, P4, P5, P6];

    getProyectos(): Proyecto[] {
        return this.proyectos;
    }
}
