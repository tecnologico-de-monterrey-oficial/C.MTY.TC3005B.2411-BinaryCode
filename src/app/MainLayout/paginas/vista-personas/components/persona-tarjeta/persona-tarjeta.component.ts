import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../../../modelos/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona-tarjeta.component.html',
  styleUrl: './persona-tarjeta.component.css'
})

export class PersonaTarjetaComponent implements OnInit {

  @Input() persona: Persona;

  constructor() { }

  ngOnInit() { }

}
