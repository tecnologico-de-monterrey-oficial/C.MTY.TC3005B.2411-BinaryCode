import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Archivo, Carpeta } from '../modelos';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';
import { BASE_URL } from '../constantes';
import { AuthService } from './auth.service';
import { A1, A2, A3, A4, A5, A6, A7 } from '../../assets/mocks/archivos';

@Injectable({
    providedIn: 'root',
})
export class ArchivosService {
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
    private recientesCache: Archivo[];

    private carpetas: Carpeta[] = [C1, C2, C3];

    getArchivosFavoritos: { (): Promise<Archivo[]> } = async () => {
        if (this.favoritosCache) {
            return Object.values(this.favoritosCache);
        }
        try {
            const urlAPI: string = `${this.baseUrl}api/favoritos/`;
            const response: Response = await fetch(urlAPI, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const archivos: Archivo[] = await response.json();
            this.favoritosCache = [];
            for (const archivo of archivos) {
                this.favoritosCache.push(archivo);
            }
            return archivos;
        } catch (error) {
            console.error('Error obteniendo los archivos', error);
            this.message.error(
                'Hubo un error al obtener los archivos, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
    };

    getArchivosRecientes: { (): Promise<Archivo[]> } = async () => {
        if (this.recientesCache) {
            return Object.values(this.recientesCache);
        }
        try {
            const urlAPI: string = `${this.baseUrl}api/recientes/`;
            const response: Response = await fetch(urlAPI, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const archivos: Archivo[] = await response.json();
            this.recientesCache = [];
            for (const archivo of archivos) {
                this.recientesCache.push(archivo);
            }
            return archivos;
        } catch (error) {
            console.error('Error obteniendo los archivos', error);
            this.message.error(
                'Hubo un error al obtener los archivos, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
    };

    getArchivos: { (): Promise<Archivo[]> } = async () => {
        if (this.archivosCache) {
            return Object.values(this.archivosCache);
        }
        try {
            const urlAPI: string = `${this.baseUrl}api/archivos/`;
            const response: Response = await fetch(urlAPI, {
                method: 'GET',
                headers: this.customHeader,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const archivos: Archivo[] = await response.json();
            this.archivosCache = {};
            for (const archivo of archivos) {
                this.archivosCache[archivo.id] = archivo;
            }
            return archivos;
        } catch (error) {
            console.error('Error obteniendo los archivos', error);
            this.message.error(
                'Hubo un error al obtener los archivos, por favor intente más tarde',
                {
                    nzDuration: 10000,
                }
            );
            return null;
        }
    };

    setFavorito: {
        (archivo: Archivo, favorito: boolean): Promise<Archivo>;
    } = async (archivo, favorito) => {
        // TODO: LLAMADA A API
        favorito;
        return archivo;
    };

    getArchivosPorApartado: { (id: string): Promise<Archivo[]> } = async id => {
        id;
        return [A1, A2, A3, A4, A5, A6, A7];
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
