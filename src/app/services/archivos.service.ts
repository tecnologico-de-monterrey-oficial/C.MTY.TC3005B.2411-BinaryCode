import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Archivo, Carpeta } from '../modelos';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';
import { BASE_URL } from '../constantes';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class ArchivosService {
    // archivos: Archivo[] = [A1, A2, A3, A4, A5, A6];
    // favoritos: Archivo[] = [A7, A8, A3, A9, A5, A10];

    private baseUrl: string = BASE_URL;
    private token: string = this.authService.getToken();
    private customHeader: HeadersInit = this.token
        ? {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token,
          }
        : {
              'Content-Type': 'application/json',
          };

    private archivosCache: { [id: number]: Archivo };
    private favoritosCache: Archivo[];

    private carpetas: Carpeta[] = [C1, C2, C3];

    getArchivosFavoritos: { (): Promise<Archivo[]> } = async () => {
        // TODO: LLAMADA A API
        return this.favoritos;
    };

    getArchivosRecientes: { (): Promise<Archivo[]> } = async () => {
        return this.archivos;
    };

    setFavorito: {
        (archivo: Archivo, favorito: boolean): Promise<Archivo>;
    } = async (archivo, favorito) => {
        // TODO: LLAMADA A API
        favorito;
        return archivo;
    };

    getArchivos: { (): Promise<Archivo[]> } = async () => {
        if (this.archivosCache) {
            return Object.values(this.archivosCache);
        }
        try {
            const response: Response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const proyectos: Archivo[] = await response.json();
            this.archivosCache = {};
            for (const proyecto of proyectos) {
                this.archivosCache[proyecto.id] = proyecto;
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
    };

    getArchivosPorApartado: { (id: string): Promise<Archivo[]> } = async id => {
        id;
        return this.archivos;
    };

    getCarpetas: {
        (id: string): Promise<Carpeta[]>;
    } = async id => {
        id;
        return this.carpetas;
    };

    constructor(
        private message: NzMessageService,
        private authService: AuthService
    ) {}
}
