import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario.model';

@Component({
    selector: 'app-mini-coordinador',
    templateUrl: './mini-coordinador.component.html',
    styleUrl: './mini-coordinador.component.css',
})
export class MiniCoordinadorComponent {
    @Input() coordinador: Usuario;
    @Output() removeItemClick = new EventEmitter<string>();

    removeClick(): void {
        console.log('Se elimina coordinador ' + this.coordinador.nombre);
        this.removeItemClick.emit(this.coordinador.id);
    }
}
