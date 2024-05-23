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
        try {
            const response: Response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const proyectos: Proyecto[] = await response.json();
            return proyectos;
        } catch (error) {
            console.error('Error obteniendo los proyectos', error);
            return [];
        }
    }

    async eliminarProyecto(proyectoId: number): Promise<boolean> {
        try {
            const url: string = `${this.baseUrl}${proyectoId}/`;
            const response: Response = await fetch(url, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return true;
        } catch (error) {
            console.error('Error al eliminar el proyecto', error);
            return false;
        }
    }

    async actualizarProyecto(
        proyecto: Proyecto
    ): Promise<RespuestaProyectoServidor> {
        try {
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
            const responseJSON: Proyecto = await response.json();
            const respuesta: RespuestaProyectoServidor = {
                mensaje: responseJSON,
                exito: true,
            };
            return respuesta;
        } catch (error) {
            console.error('Error al crear el proyecto', error);
            const respuesta: RespuestaProyectoServidor = {
                mensaje: error,
                exito: false,
            };
            return respuesta;
        }
    }

    getLideres(idProyecto: number): Usuario[] {
        idProyecto;
        return this.lideres;
    }

    async createProyecto(
        proyecto: Proyecto
    ): Promise<RespuestaProyectoServidor> {
        try {
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
            const responseJSON: Proyecto = await response.json();
            const respuesta: RespuestaProyectoServidor = {
                mensaje: responseJSON,
                exito: true,
            };
            return respuesta;
        } catch (error) {
            console.error('Error al crear el proyecto', error);
            const respuesta: RespuestaProyectoServidor = {
                mensaje: error,
                exito: false,
            };
            return respuesta;
        }
    }
}
