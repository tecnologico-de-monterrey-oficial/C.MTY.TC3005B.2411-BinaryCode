export class Etiqueta {
    nombre: string;
    color: string | null = null;
    
    constructor(nombre: string, color?: string) {
        this.nombre = nombre;
        this.color = color || null;
    }
}