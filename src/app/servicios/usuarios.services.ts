import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Usuario } from '../modelos';

const usuarios: Usuario[] = [US1, US2, US3, US4, US5, US6];

export const getUsuariosAPI: { (): Promise<Usuario[]> } = async () => {
    return usuarios;
};
