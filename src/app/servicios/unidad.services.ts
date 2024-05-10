import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { UN1, UN2, UN3, UN4, UN5, UN6 } from '../../assets/mocks/unidades';
import { US1, US2, US3, US4, US5, US6 } from '../../assets/mocks/usuarios';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    unidades: Unidad[] = [UN1, UN2, UN3, UN4, UN5, UN6];
    coordinadores: Usuario[] = [US4, US5, US6];
    editores: Usuario[] = [US1, US2, US3, US4, US5, US6];

    getUnidadesPorProyecto(proyectoId: string): Unidad[] {
        // Filtrar las unidades por el ID del proyecto
        return this.unidades.filter(unidad => unidad.proyectoId === proyectoId);
    }

    getCoordinadores(idUnidad: string): Usuario[] {
        idUnidad;
        return this.coordinadores;
    }

    getEditores(idUnidad: string): Usuario[] {
        idUnidad;
        return this.editores;
    }
}
