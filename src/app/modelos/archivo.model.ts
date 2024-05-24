/*import { Etiqueta } from './etiqueta.model';
import { Icono } from './icono.model';
import { Usuario } from './usuario.model';*/

// TODO: Parametros que delimitar
// Qué tan largo puede ser el título de un archivo
// Cuántas etiquetas puede tener un archivo

export type Archivo = {
    id: number;
    nombre: string;
    descripcion: string;
    terminacion: string;
    fecha: string;
    id_usuarios: number;
    id_apartados: number;
};
