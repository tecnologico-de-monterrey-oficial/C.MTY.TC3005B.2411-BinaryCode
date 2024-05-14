import { Injectable } from '@angular/core';

import { Usuario } from '../modelos/usuario.model';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
@Injectable({
    providedIn: 'root',
})
export class UsuariosServices {
    usuarios: Usuario[] = [US1, US2, US3, US4, US5, US6];

    getUsuarios(): Usuario[] {
        return this.usuarios;
    }
}
