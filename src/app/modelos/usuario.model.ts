// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre del usuario?

export class Usuario {
    nombre: string;
    imagenUrl: string;
    
    constructor(imagenUrl: string, nombre: string) {
        this.imagenUrl = imagenUrl;
        this.nombre = nombre;
    }
}