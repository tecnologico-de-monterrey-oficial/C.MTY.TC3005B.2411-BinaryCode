import { Injectable } from '@angular/core';
import { Archivo, ArchivoPost } from '../modelos/archivo.model';
//import { Contenidos } from '../modelos/contenidos.model';
import { A10, A3, A5, A7, A8, A9 } from '../../assets/mocks/archivos';
import { Unidad } from '../modelos/unidad.model';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    constructor(private message: NzMessageService) {}
    getArchivosFavoritos(): Archivo[] {
        // TODO: LLAMADA A API
        return this.favoritos;
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

    async postArchivo(archivo: ArchivoPost): Promise<ArchivoPost> {
        try {
            const response: Response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(archivo),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const archivoResponse: ArchivoPost = await response.json();
            this.message.success('La unidad se creó exitosamente', {
                nzDuration: 10000,
            });
            return archivoResponse;
        } catch (error) {
            console.error('Error creando la unidad', error);
            this.message.error('Hubo un error al crear la unidad', {
                nzDuration: 10000,
            });
            throw error; // Es útil para manejar el error en otros lugares si es necesario
        }
    }
}
