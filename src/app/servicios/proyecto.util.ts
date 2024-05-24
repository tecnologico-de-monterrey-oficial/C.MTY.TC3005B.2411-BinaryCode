import { EventEmitter } from '@angular/core';
import { ProyectosService } from './proyecto.services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Proyecto } from '../modelos/proyectos.model';

export const obtenerProyectos: (
    proyectoService: ProyectosService,
    message: NzMessageService
) => Promise<Proyecto[]> = async (proyectoService, message) => {
    try {
        const proyectos: Proyecto[] = await proyectoService.getProyectos();
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

export const crearProyecto: (
    proyecto: Proyecto,
    crearProyecto: EventEmitter<Proyecto>,
    proyectoService: ProyectosService,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyecto,
    crearProyecto,
    proyectoService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const respuestaAPI: Proyecto =
            await proyectoService.crearProyecto(proyecto);
        message.success('El proyecto se creó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        finishLoading();
        crearProyecto.emit(respuestaAPI);
    } catch (error) {
        console.log('Error creando el proyecto', error);
        message.error('Hubo un error al crear el proyecto', {
            nzDuration: 10000,
        });
    }
};

export const borrarProyecto: (
    proyectoId: number,
    eliminarProyecto: EventEmitter<number>,
    proyectoService: ProyectosService,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyectoId,
    eliminarProyecto,
    proyectoService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        await proyectoService.eliminarProyecto(proyectoId);
        message.success('El proyecto se eliminó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        finishLoading();
        eliminarProyecto.emit(proyectoId);
    } catch (error) {
        console.error('Error al eliminar el proyecto', error);
        message.error('Hubo un error al eliminar el proyecto', {
            nzDuration: 10000,
        });
    }
};

export type actualizarProyectoMessages = {
    success: string;
    error: string;
};

export const actualizarProyecto: (
    proyecto: Proyecto,
    mensajes: actualizarProyectoMessages,
    actualizarProyectoImportado: EventEmitter<Proyecto>,
    proyectoService: ProyectosService,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    proyecto,
    mensajes,
    actualizarProyectoImportado,
    proyectoService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const nuevoProyecto: Proyecto =
            await proyectoService.actualizarProyecto(proyecto);
        message.success(mensajes.success, {
            nzDuration: 10000,
        });

        cancelModal();
        finishLoading();
        actualizarProyectoImportado.emit(nuevoProyecto);
    } catch (error) {
        console.error('Error al actualizar el proyecto', error);
        message.error(mensajes.error, {
            nzDuration: 10000,
        });
    }
};
