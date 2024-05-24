import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
import { Usuario } from '../modelos/usuario.model';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { HttpClient } from '@angular/common/http';

export interface RespuestaProyectoServidor {
    mensaje?: Proyecto | Proyecto[] | string;
    exito: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    lideres: Usuario[] = [US4, US5, US6];

    private baseUrl = 'http://127.0.0.1:8000/api/proyectos/'; // Base URL for API

    constructor(private http: HttpClient) {}

    async getProyectos(): Promise<Proyecto[]> {
        const response: Response = await fetch(this.baseUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const proyectos: Proyecto[] = await response.json();
        return proyectos;
    }

    async crearProyecto(proyecto: Proyecto): Promise<Proyecto> {
        const response: Response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(proyecto),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const proyectoResponse: Proyecto = await response.json();
        return proyectoResponse;
    }

    async eliminarProyecto(proyectoId: number): Promise<void> {
        const url: string = `${this.baseUrl}${proyectoId}/`;
        const response: Response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

    async actualizarProyecto(proyecto: Proyecto): Promise<Proyecto> {
        const url: string = `${this.baseUrl}${proyecto.id}/`;
        const response: Response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(proyecto),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const nuevoProyecto: Proyecto = await response.json();
        return nuevoProyecto;
    }

    getLideres(idProyecto: number): Usuario[] {
        idProyecto;
        return this.lideres;
    }
}
