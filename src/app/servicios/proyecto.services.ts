import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
// import { P1, P2, P3, P4, P5, P6 } from '../../assets/mocks/proyectos';
import { Usuario } from '../modelos/usuario.model';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

interface RespuestaServidor {
    mensaje: string;
    exito: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    //proyectos: Proyecto[] = [P1, P2, P3, P4, P5, P6];
    lideres: Usuario[] = [US4, US5, US6];
    Proyecto: Proyecto[] = [];

    private baseUrl = 'http://127.0.0.1:8000/api/proyectos/'; // Base URL for API

    constructor(
        private http: HttpClient,
        private message: NzMessageService
    ) {}

    getCache(): Proyecto[] {
        return this.Proyecto;
    }

    async getProyectos(): Promise<Proyecto[]> {
        try {
            const response: Response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.Proyecto = await response.json();

            return this.Proyecto;
        } catch (error) {
            console.error('Error obteniendo los proyectos', error);
            this.message.error(
                'Hubo un error al obtener los proyectos, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
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
}
