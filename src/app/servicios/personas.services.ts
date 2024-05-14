import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona.model';
import { US1, US2, US3, US4 } from '../../assets/mocks/usuarios';
@Injectable({
    providedIn: 'root',
})
export class PersonasServices {
    personas: Persona[] = [
        new Persona(US1, '29 de febrero de 2024'),
        new Persona(US2, '29 de febrero de 2024'),
        new Persona(US3, '29 de febrero de 2024'),
        new Persona(US4, '29 de febrero de 2024'),
    ];

    getPersonas(): Persona[] {
        return this.personas;
    }
}
