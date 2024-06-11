import { Injectable } from '@angular/core';
import { Proyecto, Usuario } from '../modelos';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BASE_URL } from '../constantes';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export type actualizarProyectoMessages = {
    success: string;
    error: string;
};

@Injectable({
    providedIn: 'root',
})
export class ProyectosService {
    private baseUrl: string = BASE_URL + 'api/proyectos/';
    private token: string = this.authService.getToken();
    private customHeader: HeadersInit = this.token
        ? {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token,
          }
        : {
              'Content-Type': 'application/json',
          };

    private lideres: Usuario[] = [US4, US5, US6];
    private proyectosCache: { [id: number]: Proyecto };

    async getProyectos(): Promise<Proyecto[]> {
        if (this.proyectosCache) {
            return Object.values(this.proyectosCache);
        }
        try {
            const response: Response = await fetch(this.baseUrl, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const proyectos: Proyecto[] = await response.json();
            this.proyectosCache = {};
            for (const proyecto of proyectos) {
                this.proyectosCache[proyecto.id] = proyecto;
            }
            return proyectos;
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

    async getProyectoIndividual(proyectoId: number): Promise<Proyecto> {
        if (this.proyectosCache && this.proyectosCache[proyectoId]) {
            return this.proyectosCache[proyectoId];
        }
        try {
            const url: string = `${this.baseUrl}${proyectoId}/`;
            const response: Response = await fetch(url, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const proyecto: Proyecto = await response.json();
            return proyecto;
        } catch (error) {
            console.error('Error obteniendo el proyecto', error);
            return null;
        }
    }

    async postProyecto(proyecto: Proyecto): Promise<Proyecto> {
        try {
            const response: Response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify(proyecto),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const respuestaAPI: Proyecto = await response.json();
            this.proyectosCache[respuestaAPI.id] = respuestaAPI;
            this.message.success('El proyecto se creó exitosamente', {
                nzDuration: 10000,
            });
            return respuestaAPI;
        } catch (error) {
            console.log('Error creando el proyecto', error);
            this.message.error('Hubo un error al crear el proyecto', {
                nzDuration: 10000,
            });
        }
    }

    async deleteProyecto(proyectoId: number): Promise<number> {
        try {
            const url: string = `${this.baseUrl}${proyectoId}/`;
            const response: Response = await fetch(url, {
                method: 'DELETE',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            delete this.proyectosCache[proyectoId];
            this.message.success('El proyecto se eliminó exitosamente', {
                nzDuration: 10000,
            });
            return proyectoId;
        } catch (error) {
            console.error('Error al eliminar el proyecto', error);
            this.message.error('Hubo un error al eliminar el proyecto', {
                nzDuration: 10000,
            });
        }
    }

    async putProyecto(proyecto: Proyecto): Promise<Proyecto> {
        try {
            const url: string = `${this.baseUrl}${proyecto.id}/`;
            const response: Response = await fetch(url, {
                method: 'PUT',
                headers: this.customHeader,
                body: JSON.stringify(proyecto),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevoProyecto: Proyecto = await response.json();
            this.proyectosCache[nuevoProyecto.id] = nuevoProyecto;
            this.message.success('El proyecto se actualizó exitosamente', {
                nzDuration: 10000,
            });
            return nuevoProyecto;
        } catch (error) {
            console.error('Error al actualizar el proyecto', error);
            this.message.error('Hubo un error al actualizar el proyecto', {
                nzDuration: 10000,
            });
        }
    }

    async archivarProyecto(proyecto: Proyecto): Promise<Proyecto> {
        const proyectoModificado: Proyecto = { ...proyecto };
        proyectoModificado.activo = false;
        proyectoModificado.imagen = undefined;
        try {
            const url: string = `${this.baseUrl}${proyecto.id}/`;
            const response: Response = await fetch(url, {
                method: 'PUT',
                headers: this.customHeader,
                body: JSON.stringify(proyectoModificado),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevoProyecto: Proyecto = await response.json();
            this.proyectosCache[nuevoProyecto.id] = nuevoProyecto;
            this.message.success('El proyecto se archivó exitosamente', {
                nzDuration: 10000,
            });
            return nuevoProyecto;
        } catch (error) {
            console.error('Error al actualizar el proyecto', error);
            this.message.error('Hubo un error al archivar el proyecto', {
                nzDuration: 10000,
            });
        }
    }

    async activarProyecto(proyecto: Proyecto): Promise<Proyecto> {
        const proyectoModificado: Proyecto = { ...proyecto };
        proyectoModificado.activo = true;
        proyectoModificado.imagen = undefined;
        try {
            const url: string = `${this.baseUrl}${proyecto.id}/`;
            const response: Response = await fetch(url, {
                method: 'PUT',
                headers: this.customHeader,
                body: JSON.stringify(proyectoModificado),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const nuevoProyecto: Proyecto = await response.json();
            this.proyectosCache[nuevoProyecto.id] = nuevoProyecto;
            this.message.success('El proyecto se activó exitosamente', {
                nzDuration: 10000,
            });
            return nuevoProyecto;
        } catch (error) {
            console.error('Error al actualizar el proyecto', error);
            this.message.error('Hubo un error al activar el proyecto', {
                nzDuration: 10000,
            });
        }
    }

    async getLideres(idProyecto: number): Promise<Usuario[]> {
        idProyecto;
        return this.lideres;
    }

    constructor(
        private message: NzMessageService,
        private authService: AuthService,
        private router: Router
    ) {}
}
