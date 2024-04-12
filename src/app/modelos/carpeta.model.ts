export class Carpeta {
    id: string;
    nombre: string;
    color: string | null = null;
    
    constructor(id: string, nombre: string, color?: string) {
        this.id = id;
        this.nombre = nombre;
        this.color = color || null;
    }
}