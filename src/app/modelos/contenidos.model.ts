import { Archivo } from './archivo.model';
import { Carpeta } from './carpeta.model';

export type Contenidos = {
    archivos?: Archivo[];
    carpetas?: Carpeta[];
};
