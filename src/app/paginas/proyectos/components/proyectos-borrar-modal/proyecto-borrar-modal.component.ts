import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';

@Component({
    selector: 'app-proyecto-borrar-modal',
    templateUrl: './proyecto-borrar-modal.component.html',
    styleUrl: './proyecto-borrar-modal.component.css',
})
export class ProyectosBorrarModalComponent {
    @Input() proyecto: Proyecto;
    @Input() isConfirmLoading: boolean;

    @Output() cancelModal = new EventEmitter();
    @Output() deleteProject = new EventEmitter();

    value?: string;

    handleCancel(): void {
        this.cancelModal.emit();
    }

    handleOk(): void {
        this.deleteProject.emit();
    }
}
