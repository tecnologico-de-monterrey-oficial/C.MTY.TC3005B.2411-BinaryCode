import { Injectable } from '@angular/core';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Usuario } from '../modelos';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    usuarios: Usuario[] = [US1, US2, US3, US4, US5, US6];

    getUsuariosAPI: { (): Promise<Usuario[]> } = async () => {
        return this.usuarios;
    };
}
