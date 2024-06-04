import { Injectable } from '@angular/core';
import { Unidad, Usuario } from '../modelos';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    baseUrl: string = 'http://127.0.0.1:8000/api/apartados/';
    coordinadores: Usuario[] = [US4, US5, US6];
    editores: Usuario[] = [US1, US2, US3, US4, US5, US6];

    customHeader: HeadersInit = {
        'Content-Type': 'application/json',
    };

    unidadesCache: { [id: number]: Unidad } = [];
    unidadesPorProyectoCache: { [id: number]: number[] } = [];

    async getUnidadIndividual(unidadId: number): Promise<Unidad> {
        if (this.unidadesCache && this.unidadesCache[unidadId]) {
            return this.unidadesCache[unidadId];
        }
        try {
            const response: Response = await fetch(
                `${this.baseUrl}${unidadId}/`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const unidadRespuesta: Unidad = await response.json();
            this.unidadesCache[unidadId] = unidadRespuesta;
            return unidadRespuesta;
        } catch (error) {
            console.error('Error obteniendo la unidad', error);
            return null;
        }
    }

    async getUnidadesPorProyecto(proyectoId: number): Promise<Unidad[]> {
        if (
            this.unidadesPorProyectoCache &&
            this.unidadesPorProyectoCache[proyectoId]
        ) {
            return this.getUnidadesPorProyectoCache(proyectoId);
        }
        try {
            const response: Response = await fetch(
                `${this.baseUrl}?search=${proyectoId}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const unidades: Unidad[] = await response.json();
            for (const unidad of unidades) {
                this.unidadesCache[unidad.id] = unidad;
                if (!this.unidadesPorProyectoCache[proyectoId]) {
                    this.unidadesPorProyectoCache[proyectoId] = [];
                }
                this.unidadesPorProyectoCache[proyectoId].push(unidad.id);
            }
            return unidades;
        } catch (error) {
            console.error('Error obteniendo las unidades', error);
            this.message.error(
                'Hubo un error al obtener las unidades, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
    }

    async postUnidad(unidad: Unidad): Promise<Unidad> {
        try {
            const response: Response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify(unidad),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const unidadResponse: Unidad = await response.json();
            this.unidadesCache[unidadResponse.id] = unidadResponse;
            if (this.unidadesPorProyectoCache[unidadResponse.id_proyecto]) {
                this.unidadesPorProyectoCache[unidadResponse.id_proyecto].push(
                    unidadResponse.id
                );
            }
            this.message.success('La unidad se creó exitosamente', {
                nzDuration: 10000,
            });
            return unidadResponse;
        } catch (error) {
            console.error('Error creando la unidad', error);
            this.message.error('Hubo un error al crear la unidad', {
                nzDuration: 10000,
            });
        }
    }

    async deleteUnidad(unidadId: number): Promise<number> {
        try {
            const response: Response = await fetch(
                `${this.baseUrl}${unidadId}/`,
                {
                    method: 'DELETE',
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            delete this.unidadesCache[unidadId];
            for (const proyectoId in this.unidadesPorProyectoCache) {
                this.unidadesPorProyectoCache[proyectoId] =
                    this.unidadesPorProyectoCache[proyectoId].filter(
                        id => id !== unidadId
                    );
            }
            this.message.success('La unidad se eliminó exitosamente', {
                nzDuration: 10000,
            });
            return unidadId;
        } catch (error) {
            console.error('Error al eliminar la unidad', error);
            this.message.error('Hubo un error al eliminar la unidad', {
                nzDuration: 10000,
            });
        }
    }

    async putUnidad(unidad: Unidad): Promise<Unidad> {
        try {
            const response: Response = await fetch(
                `${this.baseUrl}${unidad.id}/`,
                {
                    method: 'PUT',
                    headers: this.customHeader,
                    body: JSON.stringify(unidad),
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevaUnidad: Unidad = await response.json();
            this.unidadesCache[nuevaUnidad.id] = nuevaUnidad;
            this.message.success('Se actualizó la unidad exitosamente', {
                nzDuration: 10000,
            });
            return nuevaUnidad;
        } catch (error) {
            console.error('Error al actualizar la unidad', error);
            this.message.error('Hubo un error al actualizar la unidad', {
                nzDuration: 10000,
            });
        }
    }

    getCoordinadores(idUnidad: number): Usuario[] {
        idUnidad;
        return [];
    }

    getEditores(idUnidad: number): Usuario[] {
        idUnidad;
        return [];
    }

    getUnidadesPorProyectoCache(proyectoId: number): Unidad[] {
        const unidadesPorProyecto: Unidad[] = [];
        for (const unidadId of this.unidadesPorProyectoCache[proyectoId]) {
            if (this.unidadesCache[unidadId]) {
                unidadesPorProyecto.push(this.unidadesCache[unidadId]);
            }
        }
        return unidadesPorProyecto;
    }

    constructor(private message: NzMessageService) {}
}
