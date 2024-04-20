import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { U1, U2, U3, U4, U5, U6 } from '../../assets/mocks/unidades';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    unidades: Unidad[] = [U1, U2, U3, U4, U5, U6];

    getUnidades(): Unidad[] {
        return this.unidades;
    }
}
