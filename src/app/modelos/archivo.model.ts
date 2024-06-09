// archivo.model.ts
import { Etiqueta } from './etiqueta.model';
import { Usuario } from './usuario.model';

// TODO: Parametros que delimitar
// Qué tan largo puede ser el título de un archivo
// Cuántas etiquetas puede tener un archivo

export type Archivo = {
    id: string;
    nombre: string;
    descripcion: string;
    terminacion: string;
    fecha: string;
    usuario_info: Usuario; // Asegúrate de que tienes un tipo Usuario definido.
    etiquetas: Etiqueta[];
    favorito: boolean;
};
