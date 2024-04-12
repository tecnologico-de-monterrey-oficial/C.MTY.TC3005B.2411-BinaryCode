import { Component } from '@angular/core';
import { Unidad } from '../../modelos/unidad.model';
import { UnidadesService } from '../../servicios/unidad.services';

@Component({
  selector: 'app-contenido-unidades',
  templateUrl: './contenido-unidades.component.html',
  styleUrl: './contenido-unidades.component.css'
})
export class ContenidoUnidadesComponent {
  unidades : Unidad[] = [];

  constructor(private unidadesService: UnidadesService) {
    this.unidades = unidadesService.getUnidades();
  }
}
