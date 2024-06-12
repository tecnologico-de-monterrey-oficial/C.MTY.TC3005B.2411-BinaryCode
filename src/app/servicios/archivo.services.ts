import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';
import { Carpeta } from '../modelos/carpeta.model';
//import { Contenidos } from '../modelos/contenidos.model';
import { A10, A3, A5, A7, A8, A9 } from '../../assets/mocks/archivos';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';
import { Unidad } from '../modelos/unidad.model';

@Injectable({
    providedIn: 'root',
})

// TODO: Parametros que delimitar
// Cuántos archivos pueden verse a la vez (ponemos paginación?)
// Cuántos archivos puede haber en total
export class ArchivosService {
    private baseUrl = 'http://127.0.0.1:8000/api/archivos/';
    private carpetasUrl = 'http://127.0.0.1:8000/api/apartados/';

    archivos: Archivo[];
    favoritos: Archivo[] = [A7, A8, A3, A9, A5, A10];

    carpetas: Carpeta[] = [C1, C2, C3];

    getArchivosFavoritos(): Archivo[] {
        // TODO: LLAMADA A API
        return this.favoritos;
    }

    async getCarpetasRecientes(apartado_id: string): Promise<Carpeta[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?apartado_id=${apartado_id}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const carpetas: Carpeta[] = await response.json();
        console.log(carpetas);
        return carpetas;
    }

    getArchivosRecientes(): Archivo[] {
        // TODO: LLAMADA A API
        return this.archivos;
    }

    async getCarpetas(unidadId: string): Promise<Unidad[]> {
        const response: Response = await fetch(
            `${this.carpetasUrl}?id_padre__id=${unidadId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const carpetas: Unidad[] = await response.json();
        console.log(carpetas);
        return carpetas;
    }

    async getArchivosPorProyecto(proyectoId: string): Promise<Archivo[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?proyecto_id=${proyectoId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const archivos: Archivo[] = await response.json();
        console.log(archivos);
        return archivos;
    }
    async getArchivoPorUnidades(unidadesId: string): Promise<Archivo[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?apartado_nombre=${unidadesId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const archivos: Archivo[] = await response.json();
        console.log(archivos);
        return archivos;
    }

    async getEtiquetasArchivos(etiquetaNombre: string): Promise<Archivo[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?etiqueta_nombre=${etiquetaNombre}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const archivos: Archivo[] = await response.json();
        console.log(archivos);
        return archivos;
    }
    async getPersonasArchivos(personaId: string): Promise<Archivo[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?persona=${personaId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const archivos: Archivo[] = await response.json();
        console.log(archivos);
        return archivos;
    }

    async getArchivos(unidadId: string): Promise<Archivo[]> {
        const response: Response = await fetch(
            `${this.baseUrl}?id_apartado=${unidadId}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const archivos: Archivo[] = await response.json();
        console.log(archivos);
        return archivos;
    }

    setFavorito(idArchivo: string, favorito: boolean): void {
        idArchivo;
        favorito;
        // TODO: LLAMADA A API
    }
}
