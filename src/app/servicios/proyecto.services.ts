import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { P1, P2, P3, P4, P5, P6 } from '../../assets/mocks/proyectos';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Proyecto } from '../modelos/proyectos.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    proyectos: Proyecto[] = [P1, P2, P3, P4, P5, P6];
    lideres: Usuario[] = [US4, US5, US6];

    private baseUrl = 'http://127.0.0.1:8000/api/proyectos/'; // Base URL for API

    constructor(private http: HttpClient) {}

    getProyectos(): Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(`${this.baseUrl}`);
    }

    getLideres(idProyecto: string): Usuario[] {
        idProyecto;
        return this.lideres;
    }
}
