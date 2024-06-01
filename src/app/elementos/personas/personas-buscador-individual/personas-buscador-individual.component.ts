import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bordes, tarjeta_verde_medio } from '../../../../assets/colores';
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

    verde: string = tarjeta_verde_medio;
    gris: string = bordes;

    addClick(): void {
        this.addItemClick.emit(this.persona);
    }
}
