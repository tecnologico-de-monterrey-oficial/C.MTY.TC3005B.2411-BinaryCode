// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una etiqueta

export class Etiqueta {
    id: string;
    nombre: string;
    color: string | null = null;

    constructor(id: string, nombre: string, color?: string) {
        this.id = id;
        this.nombre = nombre;
        this.color = color || null;
    }
}
