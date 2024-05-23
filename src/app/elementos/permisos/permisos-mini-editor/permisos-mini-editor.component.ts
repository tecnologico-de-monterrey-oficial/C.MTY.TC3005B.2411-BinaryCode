import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-permisos-mini-editor',
    templateUrl: './permisos-mini-editor.component.html',
    styleUrl: './permisos-mini-editor.component.css',
})
export class PermisosMiniEditorComponent {
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
