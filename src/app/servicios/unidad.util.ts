import { NzMessageService } from 'ng-zorro-antd/message';
import { Unidad } from '../modelos/unidad.model';
import {
    actualizarUnidadAPI,
    crearUnidadAPI,
    eliminarUnidadAPI,
    getUnidadAPI,
    getUnidadesPorProyectoAPI,
} from './unidad.services';
import { EventEmitter } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';

export const obtenerUnidad: {
    (unidadId: number): Promise<Unidad>;
} = async unidadId => {
    try {
        const unidad: Unidad = await getUnidadAPI(unidadId);
        return unidad;
    } catch (error) {
        console.error('Error obteniendo la unidad', error);
        return null;
    }
};

export const obtenerUnidades: (
    proyectoId: number,
    message: NzMessageService
) => Promise<Unidad[]> = async (proyectoId, message) => {
    try {
        const unidades: Unidad[] = await getUnidadesPorProyectoAPI(proyectoId);
        return unidades;
    } catch (error) {
        console.error('Error obteniendo las unidades', error);
        message.error(
            'Hubo un error al obtener las unidades, por favor intente más tarde',
            {
                nzDuration: 10000,
            }
        );
        return null;
    }
};

export const crearUnidad: {
    (
        unidad: Unidad,
        crearUnidad: EventEmitter<Unidad>,
        message: NzMessageService,
        cancelModal: () => void,
        finishLoading: () => void
    ): Promise<void>;
} = async (unidad, crearUnidad, message, cancelModal, finishLoading) => {
    try {
        const respuestaAPI: Unidad = await crearUnidadAPI(unidad);
        message.success('La unidad se creó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        crearUnidad.emit(respuestaAPI);
    } catch (error) {
        console.error('Error creando la unidad', error);
        message.error('Hubo un error al crear la unidad', {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export const borrarUnidad: (
    unidadId: number,
    eliminarUnidad: EventEmitter<number>,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    unidadId,
    eliminarUnidad,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        await eliminarUnidadAPI(unidadId);
        message.success('La unidad se eliminó exitosamente', {
            nzDuration: 10000,
        });
        cancelModal();
        eliminarUnidad.emit(unidadId);
    } catch (error) {
        console.error('Error al eliminar la unidad', error);
        message.error('Hubo un error al eliminar la unidad', {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export const actualizarUnidad: (
    unidad: Unidad,
    actualizarUnidadImportada: EventEmitter<Unidad>,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    unidad,
    actualizarUnidadImportada,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const nuevaUnidad: Unidad = await actualizarUnidadAPI(unidad);
        message.success('Se actualizó la unidad exitosamente', {
            nzDuration: 10000,
        });

        cancelModal();
        actualizarUnidadImportada.emit(nuevaUnidad);
    } catch (error) {
        console.error('Error al actualizar la unidad', error);
        message.error('Hubo un error al actualizar la unidad', {
            nzDuration: 10000,
        });
    }
    finishLoading();
};

export const getCoordinadores: {
    (idUnidad: number): Usuario[];
} = idUnidad => {
    idUnidad;
    return [];
};

export const getEditores: { (idUnidad: number): Usuario[] } = idUnidad => {
    idUnidad;
    return [];
};
