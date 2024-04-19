import { Component, Input } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto-tarjeta.component.html',
  styleUrl: './proyecto-tarjeta.component.css'
})

export class ProyectoTarjetaComponent {

  @Input() proyecto: Proyecto;

  constructor() { }

}
