// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre del usuario?

export class Usuario {
    id: string;
    nombre: string;
    imagenUrl: string;

    constructor(id: string, imagenUrl: string, nombre: string) {
        this.id = id;
        this.imagenUrl = imagenUrl;
        this.nombre = nombre;
    }
}
