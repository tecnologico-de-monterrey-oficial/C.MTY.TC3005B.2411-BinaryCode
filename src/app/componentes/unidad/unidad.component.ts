import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from '../../modelos/unidad.model';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrl: './unidad.component.css'
})

export class UnidadComponent implements OnInit {

  @Input() unidad: Unidad;

  constructor() { }
  
  ngOnInit() { }

}