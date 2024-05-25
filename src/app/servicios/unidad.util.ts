import { NzMessageService } from 'ng-zorro-antd/message';
import { Unidad } from '../modelos/unidad.model';
import { UnidadesService } from './unidad.services';

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
