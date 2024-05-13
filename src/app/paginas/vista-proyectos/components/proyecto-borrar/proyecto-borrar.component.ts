import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';

@Component({
    selector: 'app-proyecto-borrar',
    templateUrl: './proyecto-borrar.component.html',
    styleUrl: './proyecto-borrar.component.css',
})
export class ProyectoBorrarComponent {
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
