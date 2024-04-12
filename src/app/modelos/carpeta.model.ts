export class Carpeta {
    id: string;
    nombre: string;
    fecha: string;
    color: string | null = null;
    
    constructor(id: string, nombre: string, fecha: string, color?: string) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.color = color || null;
    }
}