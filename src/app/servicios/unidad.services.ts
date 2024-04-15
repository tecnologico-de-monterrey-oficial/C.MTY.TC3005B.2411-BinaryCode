import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';
import { unidad_amarilla, unidad_azul, unidad_morada, unidad_roja, unidad_rosa, unidad_verde } from '../../assets/colores';

@Injectable({
  providedIn: 'root'
})

// TODO: Parametros que delimitar
// Cuántas personas pueden verse a la vez (ponemos paginación?)
// Cuántas personas puede haber en total

export class UnidadesService {

  constructor() { }

  unidades: Unidad[] = [
    new Unidad("11", 'Marketing', 'assets/images/unidades_props/marketing_temporal_prop.png', unidad_roja),
    new Unidad("12", 'Finanzas', 'assets/images/unidades_props/finanzas_temporal_prop.png', unidad_morada),
    new Unidad("13", 'Mecánica', 'assets/images/unidades_props/mecanica_temporal_prop.png', unidad_amarilla),
    new Unidad("14", 'Sistemas', 'assets/images/unidades_props/sistemas_temporal_prop.png', unidad_verde),
    new Unidad("15", 'Chasis', 'assets/images/unidades_props/chasis_temporal_prop.png', unidad_azul),
    new Unidad("16", 'Batería', 'assets/images/unidades_props/bateria_temporal_prop.png', unidad_rosa),
  ]

  getUnidades() {
    return this.unidades;
  }

}
