import { Proyecto } from '../modelos/proyectos.model';
import { Usuario } from '../modelos/usuario.model';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';

export interface RespuestaProyectoServidor {
    mensaje?: Proyecto | Proyecto[] | string;
    exito: boolean;
}

const lideres: Usuario[] = [US4, US5, US6];

const baseUrl: string = 'http://127.0.0.1:8000/api/proyectos/'; // Base URL for API

export const getProyectosAPI: { (): Promise<Proyecto[]> } = async () => {
    const response: Response = await fetch(baseUrl);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const proyectos: Proyecto[] = await response.json();
    return proyectos;
};

export const getProyectoAPI: {
    (proyectoId: number): Promise<Proyecto>;
} = async proyectoId => {
    const url: string = `${baseUrl}${proyectoId}/`;
    const response: Response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const proyecto: Proyecto = await response.json();
    return proyecto;
};

export const crearProyectoAPI: {
    (proyecto: Proyecto): Promise<Proyecto>;
} = async proyecto => {
    const response: Response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proyecto),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const proyectoResponse: Proyecto = await response.json();
    return proyectoResponse;
};

export const eliminarProyectoAPI: {
    (proyectoId: number): Promise<void>;
} = async proyectoId => {
    const url: string = `${baseUrl}${proyectoId}/`;
    const response: Response = await fetch(url, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
};

export const actualizarProyectoAPI: {
    (proyecto: Proyecto): Promise<Proyecto>;
} = async proyecto => {
    const url: string = `${baseUrl}${proyecto.id}/`;
    const response: Response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(proyecto),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const nuevoProyecto: Proyecto = await response.json();
    return nuevoProyecto;
};

export const getLideresAPI: {
    (idProyecto: number): Usuario[];
} = idProyecto => {
    idProyecto;
    return lideres;
};
