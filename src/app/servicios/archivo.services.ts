import { Injectable } from '@angular/core';
import { Archivo } from '../modelos/archivo.model';
import { Carpeta } from '../modelos/carpeta.model';
import { Contenidos } from '../modelos/contenidos.model';
import { A1, A2, A3, A4, A5, A6 } from '../../assets/mocks/archivos';
import { C1, C2, C3 } from '../../assets/mocks/carpetas';

@Injectable({
    providedIn: 'root',
})

// TODO: Parametros que delimitar
// Cuántos archivos pueden verse a la vez (ponemos paginación?)
// Cuántos archivos puede haber en total
export class ArchivosService {
    archivos: Archivo[] = [A1, A2, A3, A4, A5, A6];

    carpetas: Carpeta[] = [C1, C2, C3];

    contenidos: Contenidos = new Contenidos(this.archivos, this.carpetas);

    getArchivosFavoritos(): Archivo[] {
        // TODO: LLAMADA A API
        return this.archivos;
    }

    getArchivosRecientes(): Archivo[] {
        // TODO: LLAMADA A API
        return this.archivos;
    }

    getContenidos(idParaAPI: string): Contenidos {
        // TODO: LLAMADA A API
        idParaAPI;
        return this.contenidos;
    }

    setFavorito(idArchivo: string, favorito: boolean): void {
        idArchivo;
        favorito;
        // TODO: LLAMADA A API
    }
}
