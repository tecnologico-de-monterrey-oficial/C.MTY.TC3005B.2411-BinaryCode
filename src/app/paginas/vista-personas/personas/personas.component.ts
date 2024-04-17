import { Component } from '@angular/core';
import { Persona } from '../../../modelos/persona.model';
import { PersonasServices } from '../../../servicios/personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  personas : Persona[] = [];

  constructor(private personasService: PersonasServices) {
    this.personas = personasService.getPersonas();
  }
}
