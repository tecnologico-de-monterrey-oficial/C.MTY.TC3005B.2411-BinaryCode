import { Injectable } from '@angular/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { Archivo, Carpeta } from '../modelos';
import {
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
import { C1, C2, C3 } from '../../assets/mocks/carpetas';

@Injectable({
    providedIn: 'root',
})
export class ArchivosService {
    archivos: Archivo[] = [A1, A2, A3, A4, A5, A6];
    favoritos: Archivo[] = [A7, A8, A3, A9, A5, A10];

    carpetas: Carpeta[] = [C1, C2, C3];

    getArchivosFavoritos: { (): Promise<Archivo[]> } = async () => {
        // TODO: LLAMADA A API
        return this.favoritos;
    };

    getArchivosRecientes: { (): Promise<Archivo[]> } = async () => {
        // TODO: LLAMADA A API
        return this.archivos;
    };

    setFavorito: {
        (archivo: Archivo, favorito: boolean): Promise<Archivo>;
    } = async (archivo, favorito) => {
        // TODO: LLAMADA A API
        favorito;
        return archivo;
    };

    getArchivos: {
        (id: string): Promise<Archivo[]>;
    } = async id => {
        id;
        return this.archivos;
    };

    getCarpetas: {
        (id: string): Promise<Carpeta[]>;
    } = async id => {
        id;
        return this.carpetas;
    };

    constructor(private message: NzMessageModule) {}
}
