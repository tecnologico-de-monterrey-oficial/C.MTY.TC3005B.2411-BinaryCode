import { Etiqueta } from "./etiqueta.model";
import { Icono } from "./icono.model";
import { Usuario } from "./usuario.model";

// TODO: Parametros que delimitar
// Qué tan largo puede ser el título de un archivo
// Cuántas etiquetas puede tener un archivo

export class Archivo {
    id: string;
    favorito: boolean;
    icono: Icono;
    nombre: string;
    propietario: Usuario;
    etiquetas: Etiqueta[];
    fecha: string;
  
    constructor(id: string, favorito: boolean, icono: Icono, nombre: string, propietario: Usuario, etiquetas: Etiqueta[], fecha: string) {
        this.id = id;
        this.favorito = favorito;
        this.icono = icono;
        this.nombre = nombre;
        this.propietario = propietario;
        this.etiquetas = etiquetas;
        this.fecha = fecha;
    }

}