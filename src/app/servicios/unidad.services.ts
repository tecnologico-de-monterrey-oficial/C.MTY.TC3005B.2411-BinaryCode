import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { UN1, UN2, UN3, UN4, UN5, UN6 } from '../../assets/mocks/unidades';

@Injectable({
    providedIn: 'root',
})
export class UnidadesService {
    unidades: Unidad[] = [UN1, UN2, UN3, UN4, UN5, UN6];

    getUnidades(): Unidad[] {
        return this.unidades;
    }
}
