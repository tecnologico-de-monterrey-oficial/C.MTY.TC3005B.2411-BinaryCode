import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
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

    actualizarProyecto(proyecto: Proyecto): Observable<Proyecto> {
        const url: string = `${this.baseUrl}${proyecto.id}/`;
        return this.http.put<Proyecto>(url, proyecto);
    }

    getLideres(idProyecto: number): Usuario[] {
        idProyecto;
        return this.lideres;
    }

    async createProyecto(proyecto: Proyecto): Promise<boolean> {
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
            await response.json();
            return true;
        } catch (error) {
            console.error('Error creando el proyecto', error);
            return false;
        }
    }
}
