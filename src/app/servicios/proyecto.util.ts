import { EventEmitter } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Proyecto } from '../modelos/proyectos.model';
import {
    actualizarProyectoAPI,
    crearProyectoAPI,
    eliminarProyectoAPI,
    getProyectoAPI,
    getProyectosAPI,
} from './proyecto.services';
import { Usuario } from '../modelos/usuario.model';

export const obtenerProyectos: (
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

export const obtenerProyecto: (
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

export const crearProyecto: (
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

export const borrarProyecto: (
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

export const actualizarProyecto: (
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
