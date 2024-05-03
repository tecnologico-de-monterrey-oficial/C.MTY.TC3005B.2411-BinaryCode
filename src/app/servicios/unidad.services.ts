import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { U1, U2, U3, U4, U5, U6 } from '../../assets/mocks/unidades';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    unidades: Unidad[] = [U1, U2, U3, U4, U5, U6];

    getUnidadesPorProyecto(proyectoId: string): Unidad[] {
        // Filtrar las unidades por el ID del proyecto
        return this.unidades.filter(unidad => unidad.id === proyectoId);
    }
    
}
