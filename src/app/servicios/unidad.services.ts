import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { unidad_amarilla, unidad_azul, unidad_morada, unidad_roja, unidad_rosa, unidad_verde } from '../../assets/colores';
import { U1, U2, U3, U4, U5, U6 } from '../../assets/mocks/unidades';

@Injectable({
  providedIn: 'root'
})

export class UnidadesService {

  constructor() { }

  unidades: Unidad[] = [U1, U2, U3, U4, U5, U6]

  getUnidades() {
    return this.unidades;
  }

}
