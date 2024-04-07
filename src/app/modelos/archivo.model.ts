import { Etiqueta } from "./etiqueta.model";
import { Icono } from "./icono.model";
import { Usuario } from "./usuario.model";

// TODO: Parametros que delimitar
// Qué tan largo puede ser el título de un archivo
// Cuántas etiquetas puede tener un archivo

export class Archivo {
    favorito: boolean;
    icono: Icono;
    nombre: string;
    propietario: Usuario;
    etiquetas: Etiqueta[];
    fecha: string;
  
    constructor(favorito: boolean, icono: Icono, nombre: string, propietario: Usuario, etiquetas: Etiqueta[], fecha: string) {
        this.favorito = favorito;
        this.icono = icono;
        this.nombre = nombre;
        this.propietario = propietario;
        this.etiquetas = etiquetas;
        this.fecha = fecha;
    }

}