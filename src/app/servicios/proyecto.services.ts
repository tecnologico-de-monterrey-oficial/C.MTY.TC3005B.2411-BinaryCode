import { EventEmitter } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Proyecto } from '../modelos/proyectos.model';
import { Usuario } from '../modelos/usuario.model';

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

export const obtenerProyectosConValidacion: (
    message: NzMessageService
) => Promise<Proyecto[]> = async message => {
    try {
        const proyectos: Proyecto[] = await getProyectosAPI();
        return proyectos;
    } catch (error) {
        console.error('Error obteniendo los proyectos', error);
        message.error(
            'Hubo un error al obtener los proyectos, por favor intente más tarde',
            {
                nzDuration: 10000,
            }
        );
        return null;
    }
};

export const obtenerProyectoConValidacion: (
    proyectoId: number
) => Promise<Proyecto> = async proyectoId => {
    try {
        const proyecto: Proyecto = await getProyectoAPI(proyectoId);
        return proyecto;
    } catch (error) {
        console.error('Error obteniendo el proyecto', error);
        return null;
    }
};

export const crearProyectoConValidacion: (
    proyecto: Proyecto,
    crearProyecto: EventEmitter<Proyecto>,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyecto,
    crearProyecto,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const respuestaAPI: Proyecto = await crearProyectoAPI(proyecto);
        message.success('El proyecto se creó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        crearProyecto.emit(respuestaAPI);
    } catch (error) {
        console.log('Error creando el proyecto', error);
        message.error('Hubo un error al crear el proyecto', {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export const borrarProyectoConValidacion: (
    proyectoId: number,
    eliminarProyecto: EventEmitter<number>,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyectoId,
    eliminarProyecto,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        await eliminarProyectoAPI(proyectoId);
        message.success('El proyecto se eliminó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        eliminarProyecto.emit(proyectoId);
    } catch (error) {
        console.error('Error al eliminar el proyecto', error);
        message.error('Hubo un error al eliminar el proyecto', {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export type actualizarProyectoMessages = {
    success: string;
    error: string;
};

export const actualizarProyectoConValidacion: (
    proyecto: Proyecto,
    mensajes: actualizarProyectoMessages,
    actualizarProyectoImportado: EventEmitter<Proyecto>,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyecto,
    mensajes,
    actualizarProyectoImportado,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const nuevoProyecto: Proyecto = await actualizarProyectoAPI(proyecto);
        message.success(mensajes.success, {
            nzDuration: 10000,
        });

        cancelModal();
        actualizarProyectoImportado.emit(nuevoProyecto);
    } catch (error) {
        console.error('Error al actualizar el proyecto', error);
        message.error(mensajes.error, {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export const getLideres: {
    (idProyecto: number): Usuario[];
} = idProyecto => {
    idProyecto;
    return [];
};
