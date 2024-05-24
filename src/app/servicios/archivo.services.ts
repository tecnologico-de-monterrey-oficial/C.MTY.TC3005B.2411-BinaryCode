import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';
/*import {
    A1,
    A10,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
} from '../../assets/mocks/archivos';
import { Carpeta } from '../modelos/carpeta.model';
import { Contenidos } from '../modelos/contenidos.model';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';
*/
export interface RespuestaProyectoServidor {
    mensaje?: Archivo | Archivo[] | string;
    exito: boolean;
}
@Injectable({
    providedIn: 'root',
})

// TODO: Parametros que delimitar
// Cuántos archivos pueden verse a la vez (ponemos paginación?)
// Cuántos archivos puede haber en total
export class ArchivosService {
    private baseUrl = 'http://127.0.0.1:8000/api/'; // Base URL for API

    // archivos: Archivo[] = [A1, A2, A3, A4, A5, A6];
    async getArchivosFavoritos(id_usuario: number): Promise<Archivo[]> {
        //TODO Mejorar la funcion a que haga un filtrado desde backend
        const url: string = `${this.baseUrl}favoritos/?search=${id_usuario}`;
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const favoritos: { id_usuario: number; id_archivo: number }[] =
            await response.json();
        const archivos: Archivo[] = [];

        if (favoritos != null) {
            for (const favorito of favoritos) {
                try {
                    const archivoUrl: string = `${this.baseUrl}/${favorito.id_archivo}`;
                    const archivoResponse: Response = await fetch(archivoUrl);
                    if (archivoResponse.ok) {
                        const archivo: Archivo = await archivoResponse.json();
                        archivos.push(archivo);
                    } else
                        throw new Error(
                            `HTTP error! status: ${archivoResponse.status}`
                        );
                } catch (error) {
                    console.error(
                        `Error obteniendo el archivo con id ${favorito.id_archivo}`,
                        error
                    );
                }
            }
        }

        return archivos;
    }

    async getRecientes(id_usuario: number): Promise<Archivo[]> {
        const url: string = `${this.baseUrl}favoritos/?search=${id_usuario}`;
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const favoritos: { id_usuario: number; id_archivo: number }[] =
            await response.json();
        const archivos: Archivo[] = [];

        if (favoritos != null) {
            for (const favorito of favoritos) {
                try {
                    const archivoUrl: string = `${this.baseUrl}/${favorito.id_archivo}`;
                    const archivoResponse: Response = await fetch(archivoUrl);
                    if (!archivoResponse.ok) {
                        throw new Error(
                            `HTTP error! status: ${archivoResponse.status}`
                        );
                    }
                    const archivo: Archivo = await archivoResponse.json();
                    archivos.push(archivo);
                } catch (error) {
                    console.error(
                        `Error obteniendo el archivo con id ${favorito.id_archivo}`,
                        error
                    );
                }
            }
        }
        return archivos;
    }

    async getContenidos(): Promise<Archivo[]> {
        try {
            const response: Response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error obteniendo los archivos', error);
            return [];
        }
    }

    setFavorito(idArchivo: number, favorito: boolean): void {
        idArchivo;
        favorito;
        //TODO Llamada a API
    }
}
