import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario.model';

@Component({
    selector: 'app-mini-editor',
    templateUrl: './mini-editor.component.html',
    styleUrl: './mini-editor.component.css',
})
export class MiniEditorComponent {
    @Input() editor: Usuario;
    @Output() removeItemClick = new EventEmitter<string>();

    removeClick(): void {
        this.removeItemClick.emit(this.editor.id);
    }
}
