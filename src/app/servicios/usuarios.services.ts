import { Usuario } from '../modelos/usuario.model';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';

const usuarios: Usuario[] = [US1, US2, US3, US4, US5, US6];

export const getUsuariosAPI: { (): Promise<Usuario[]> } = async () => {
    return usuarios;
};
