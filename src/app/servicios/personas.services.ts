import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import {Persona} from "../modelos/persona.model";
@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  constructor() { }

  personas: Persona[] = [
    new Persona(new Usuario("31", 'assets/images/usuarios_props/kraken.png', 'Kraken Dominguez'), '29 de febrero de 2024'),
    new Persona(new Usuario("31", 'assets/images/usuarios_props/kraken.png', 'Kraken Dominguez'), '29 de febrero de 2024'),
    new Persona(new Usuario("31", 'assets/images/usuarios_props/kraken.png', 'Kraken Dominguez'), '29 de febrero de 2024'),
    new Persona(new Usuario("31", 'assets/images/usuarios_props/kraken.png', 'Kraken Dominguez'), '29 de febrero de 2024'),
  ];


  getPersonas() {
    return this.personas;
  }

}
