import { Usuario } from './usuario.model';

export class Persona {
    persona: Usuario;
    fecha: string;

    constructor(persona: Usuario, fecha: string) {
        this.persona = persona;
        this.fecha = fecha;
    }
}
