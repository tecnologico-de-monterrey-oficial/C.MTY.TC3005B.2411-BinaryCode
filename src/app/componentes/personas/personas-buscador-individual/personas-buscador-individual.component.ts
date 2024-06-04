import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos';

export type personaBuscador = Usuario & { seleccionado: boolean };

@Component({
    selector: 'app-personas-buscador-individual',
    templateUrl: './personas-buscador-individual.component.html',
    styleUrl: './personas-buscador-individual.component.css',
})
export class PersonasBuscadorIndividualComponent {
    @Input() persona: personaBuscador;
    @Output() addItemClick = new EventEmitter<personaBuscador>();

    addClick(): void {
        this.addItemClick.emit(this.persona);
    }
}
