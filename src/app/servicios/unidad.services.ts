import { Injectable } from '@angular/core';
import { Unidad } from '../modelos/unidad.model';

@Injectable({
  providedIn: 'root'
})

// TODO: Parametros que delimitar
// Cuántas unidades pueden verse a la vez (ponemos paginación?)
// Cuántas unidades puede haber en total

export class UnidadesService {

  constructor() { }

  unidades: Unidad[] = [
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
    new Unidad('Marketing', 'assets/images/marketing_temporal_prop.png', '#FF5733'),
  ]

  getUnidades() {
    return this.unidades;
  }

}