import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { BASE_URL } from '../constantes';
import { Usuario } from '../modelos';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    private baseUrl: string = BASE_URL + 'api/proyectos/';
    private token: string = this.authService.getToken();
    private customHeader: HeadersInit = this.token
        ? {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token,
          }
        : {
              'Content-Type': 'application/json',
          };

    private usuarios: Usuario[] = [US1, US2, US3, US4, US5, US6];

    getUsuariosAPI: { (): Promise<Usuario[]> } = async () => {
        return this.usuarios;
    };

    constructor(
        private message: NzMessageService,
        private authService: AuthService
    ) {}
}
