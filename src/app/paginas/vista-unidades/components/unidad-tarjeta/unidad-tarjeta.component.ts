import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad-tarjeta.component.html',
  styleUrl: './unidad-tarjeta.component.css'
})

export class UnidadTarjetaComponent implements OnInit {

  @Input() unidad: Unidad;

  showPlaceholder : Boolean = false;

  constructor() { }
  
  ngOnInit() { }

  handleImageError() {
    this.showPlaceholder = true;
  }

  

}