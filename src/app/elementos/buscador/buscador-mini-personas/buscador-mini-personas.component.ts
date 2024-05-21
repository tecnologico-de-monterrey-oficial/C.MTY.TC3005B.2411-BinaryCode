import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';
import { bordes, tarjeta_verde_medio } from '../../../../assets/colores';

export type personaBuscador = Usuario & { seleccionado: boolean };

@Component({
    selector: 'app-buscador-mini-personas',
    templateUrl: './buscador-mini-personas.component.html',
    styleUrl: './buscador-mini-personas.component.css',
})
export class BuscadorMiniPersonasComponent {
    @Input() persona: personaBuscador;
    @Output() addItemClick = new EventEmitter<personaBuscador>();

    verde: string = tarjeta_verde_medio;
    gris: string = bordes;

    addClick(): void {
        this.addItemClick.emit(this.persona);
    }
}
