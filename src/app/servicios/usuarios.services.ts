import { Injectable } from '@angular/core';

import { Usuario } from '../modelos/usuario.model';
//import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
@Injectable({
    providedIn: 'root',
})
export class UsuariosServices {
    private user: Usuario;
    private baseUrl = 'http://127.0.0.1:8000/api/';
    private usuarios: Usuario[];

    getUsuarioActual(): Usuario {
        return this.user;
    }

    serUsuarioActual(User: Usuario): void {
        this.user = User;
    }
    async getUsuarios(): Promise<Usuario[]> {
        try {
            const response: Response = await fetch(`${this.baseUrl}usuarios`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.usuarios = await response.json();
            return this.usuarios;
        } catch (error) {
            console.error('Error obteniendo los archivos', error);
            return [];
        }
    }
}
