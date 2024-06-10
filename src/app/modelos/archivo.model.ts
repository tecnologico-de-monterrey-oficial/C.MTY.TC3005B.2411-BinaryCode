// archivo.model.ts
import { Etiqueta, EtiquetaArelacional } from './etiqueta.model';
import { Usuario } from './usuario.model';

// TODO: Parametros que delimitar
// Qué tan largo puede ser el título de un archivo
// Cuántas etiquetas puede tener un archivo

export class Archivo {
    id: string;
    nombre: string;
    descripcion: string;
    terminacion: string = 'unknown';
    fecha: string;
    propietario: Usuario;
    etiquetas: Etiqueta[];
    favorito: boolean;
    iteracion: number;
}

export type version = {
    nombre: string;
    archivo: File;
    iteracion: number;
};

export type ArchivoPost = {
    nombre: string;
    descripcion: string;
    terminacion: string;
    fecha: string;
    id_usuario: number;
    id_apartado: string;
    etiquetas: EtiquetaArelacional[];
    //versiones: version;
};
