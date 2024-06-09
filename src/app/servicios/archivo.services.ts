import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';
import { Carpeta } from '../modelos/carpeta.model';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';
import { A10, A3, A5, A7, A8, A9 } from '../../assets/mocks/archivos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

// TODO: Parametros que delimitar
// Cuántos archivos pueden verse a la vez (ponemos paginación?)
// Cuántos archivos puede haber en total
export class ArchivosService {
    private baseUrl = 'http://127.0.0.1:8000/api/archivos/';

    constructor(private http: HttpClient) {}

    archivos: Archivo[];
    favoritos: Archivo[] = [A7, A8, A3, A9, A5, A10];

    carpetas: Carpeta[] = [C1, C2, C3];

    getArchivosFavoritos(): Archivo[] {
        // TODO: LLAMADA A API
        return this.favoritos;
    }

    getArchivosRecientes(): Archivo[] {
        // TODO: LLAMADA A API
        return this.archivos;
    }

    async getCarpetas(): Promise<Carpeta[]> {
        return await this.carpetas;
    }

    getArchivos(): Observable<Archivo[]> {
        return this.http.get<Archivo[]>(this.baseUrl);
    }

    getArchivosPorUnidad(unidadId: string): Observable<Archivo[]> {
        return this.http.get<Archivo[]>(
            `${this.baseUrl}?unidad_id=${unidadId}`
        );
    }

    setFavorito(idArchivo: string, favorito: boolean): void {
        idArchivo;
        favorito;
        // TODO: LLAMADA A API
    }
}
