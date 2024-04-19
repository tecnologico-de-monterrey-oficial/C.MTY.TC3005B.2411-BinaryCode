import { Archivo } from './archivo.model';
import { Carpeta } from './carpeta.model';

export class Contenidos {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    constructor(archivos: Archivo[], carpetas: Carpeta[]) {
        this.archivos = archivos;
        this.carpetas = carpetas;
    }
}
