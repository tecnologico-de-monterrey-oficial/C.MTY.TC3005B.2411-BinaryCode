import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Usuario } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    private baseUrl = 'http://127.0.0.1:8000/api/apartados/';
    // unidades: Unidad[] = [UN1, UN2, UN3, UN4, UN5, UN6];
    coordinadores: Usuario[] = [US4, US5, US6];
    editores: Usuario[] = [US1, US2, US3, US4, US5, US6];

    constructor(private http: HttpClient) {}

    async getUnidadesPorProyecto(proyectoId: number): Promise<Unidad[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?search=${proyectoId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const unidades: Unidad[] = await response.json();
        return unidades;
    }

    getCoordinadores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.coordinadores;
    }

    getEditores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.editores;
    }

    eliminarUnidad(unidadId: number): Observable<Unidad> {
        const url: string = `${this.baseUrl}${unidadId}/`;
        return this.http.delete<Unidad>(url);
    }
}
