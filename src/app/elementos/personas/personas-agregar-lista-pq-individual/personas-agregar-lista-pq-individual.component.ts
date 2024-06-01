import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-agregar-lista-pq-individual',
    templateUrl: './personas-agregar-lista-pq-individual.component.html',
    styleUrl: './personas-agregar-lista-pq-individual.component.css',
})
export class PersonasAgregarListaPqIndividualComponent {
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
