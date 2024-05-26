import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Unidad } from '../modelos/unidad.model';
import { Usuario } from '../modelos/usuario.model';

// Llamadas API sin validación

const baseUrl: string = 'http://127.0.0.1:8000/api/apartados/';
const coordinadores: Usuario[] = [US4, US5, US6];
const editores: Usuario[] = [US1, US2, US3, US4, US5, US6];

export const getUnidadAPI: {
    (unidadID: number): Promise<Unidad>;
} = async unidadID => {
    const response: Response = await fetch(`${baseUrl}${unidadID}/`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const unidadResponse: Unidad = await response.json();
    return unidadResponse;
};

export const getUnidadesPorProyectoAPI: {
    (proyectoId: number): Promise<Unidad[]>;
} = async proyectoId => {
    const response: Response = await fetch(`${baseUrl}?search=${proyectoId}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const unidades: Unidad[] = await response.json();
    return unidades;
};

export const crearUnidadAPI: {
    (unidad: Unidad): Promise<Unidad>;
} = async unidad => {
    const response: Response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(unidad),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const unidadResponse: Unidad = await response.json();
    return unidadResponse;
};

export const actualizarUnidadAPI: {
    (unidad: Unidad): Promise<Unidad>;
} = async unidad => {
    const response: Response = await fetch(`${baseUrl}${unidad.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(unidad),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const unidadResponse: Unidad = await response.json();
    return unidadResponse;
};

export const eliminarUnidadAPI: {
    (unidadId: number): Promise<void>;
} = async unidadId => {
    const response: Response = await fetch(`${baseUrl}${unidadId}/`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
};

export const getCoordinadoresAPI: {
    (idUnidad: number): Usuario[];
} = idUnidad => {
    idUnidad;
    return coordinadores;
};

export const getEditores: { (idUnidad: number): Usuario[] } = idUnidad => {
    idUnidad;
    return editores;
};
