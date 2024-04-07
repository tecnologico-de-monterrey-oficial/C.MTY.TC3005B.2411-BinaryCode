// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una etiqueta

export class Etiqueta {
    nombre: string;
    color: string | null = null;
    
    constructor(nombre: string, color?: string) {
        this.nombre = nombre;
        this.color = color || null;
    }
}