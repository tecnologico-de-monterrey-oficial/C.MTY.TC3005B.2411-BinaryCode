import { NzMessageService } from 'ng-zorro-antd/message';
import { Unidad } from '../modelos/unidad.model';
import { UnidadesService } from './unidad.services';
import { EventEmitter } from '@angular/core';

export const obtenerUnidades: (
    proyectoId: number,
    unidadService: UnidadesService,
    message: NzMessageService
) => Promise<Unidad[]> = async (proyectoId, unidadService, message) => {
    try {
        const unidades: Unidad[] =
            await unidadService.getUnidadesPorProyecto(proyectoId);
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
        unidadService: UnidadesService,
        message: NzMessageService,
        cancelModal: () => void,
        finishLoading: () => void
    ): Promise<void>;
} = async (
    unidad,
    crearUnidad,
    unidadService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const respuestaAPI: Unidad = await unidadService.crearUnidad(unidad);
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
    unidadService: UnidadesService,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    unidadId,
    eliminarUnidad,
    unidadService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        await unidadService.eliminarUnidad(unidadId);
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
    unidadService: UnidadesService,
    message: NzMessageService,
    cancelModal: () => void,
    finishLoading: () => void
) => Promise<void> = async (
    unidad,
    actualizarUnidadImportada,
    unidadService,
    message,
    cancelModal,
    finishLoading
) => {
    try {
        const nuevaUnidad: Unidad =
            await unidadService.actualizarUnidad(unidad);
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