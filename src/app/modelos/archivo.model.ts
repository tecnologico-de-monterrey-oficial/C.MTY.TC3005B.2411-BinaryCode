// archivo.model.ts
import { Etiqueta } from './etiqueta.model';
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
    usuario_info: Usuario;
    etiquetas: Etiqueta[];
    favorito: boolean;
    iteracion: number;
}
