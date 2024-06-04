import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-agregar-lista-gd-individual',
    templateUrl: './personas-agregar-lista-gd-individual.component.html',
    styleUrl: './personas-agregar-lista-gd-individual.component.css',
})
export class PersonasAgregarListaGdIndividualComponent {
    @Input() editor: Usuario;
    @Output() removeItemClick = new EventEmitter<number>();

    showDeleteConfirmation: boolean = false;

    deleteClick(): void {
        this.showDeleteConfirmation = !this.showDeleteConfirmation;
    }

    confirmDelete(): void {
        this.removeItemClick.emit(this.editor.id);
    }
}
