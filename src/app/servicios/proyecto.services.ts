import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
import { P1, P2, P3, P4, P5, P6 } from '../../assets/mocks/proyectos';
import { Usuario } from '../modelos/usuario.model';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RespuestaServidor {
    mensaje: string;
    exito: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    proyectos: Proyecto[] = [P1, P2, P3, P4, P5, P6];
    lideres: Usuario[] = [US4, US5, US6];

    private baseUrl = 'http://127.0.0.1:8000/api/proyectos/'; // Base URL for API

    constructor(private http: HttpClient) {}

    getProyectos(): Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(this.baseUrl);
    }

    eliminarProyecto(proyectoId: number): Observable<RespuestaServidor> {
        const url: string = `${this.baseUrl}${proyectoId}/`;
        return this.http.delete<RespuestaServidor>(url);
    }

    getLideres(idProyecto: number): Usuario[] {
        idProyecto;
        return this.lideres;
    }
}
