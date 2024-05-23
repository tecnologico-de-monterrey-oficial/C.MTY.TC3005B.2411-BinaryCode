import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-permisos-mini-coordinador',
    templateUrl: './permisos-mini-coordinador.component.html',
    styleUrl: './permisos-mini-coordinador.component.css',
})
export class PermisosMiniCoordinadorComponent {
    @Input() coordinador: Usuario;
    @Output() removeItemClick = new EventEmitter<number>();

    showDeleteConfirmation: boolean = false;

    deleteClick(): void {
        this.showDeleteConfirmation = !this.showDeleteConfirmation;
    }

    confirmDelete(): void {
        this.removeItemClick.emit(this.coordinador.id);
    }
}
