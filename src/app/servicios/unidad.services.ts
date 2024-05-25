import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Unidad } from '../modelos/unidad.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    private baseUrl = 'http://127.0.0.1:8000/api/apartados/';
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

    async crearUnidad(unidad: Unidad): Promise<Unidad> {
        const response: Response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(unidad),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const unidadResponse: Unidad = await response.json();
        return unidadResponse;
    }

    async actualizarUnidad(unidad: Unidad): Promise<Unidad> {
        const response: Response = await fetch(`${this.baseUrl}${unidad.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(unidad),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const unidadResponse: Unidad = await response.json();
        return unidadResponse;
    }

    async eliminarUnidad(unidadId: number): Promise<void> {
        const url: string = `${this.baseUrl}${unidadId}/`;
        const response: Response = await fetch(url, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

    getCoordinadores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.coordinadores;
    }

    getEditores(idUnidad: number): Usuario[] {
        idUnidad;
        return this.editores;
    }
}
