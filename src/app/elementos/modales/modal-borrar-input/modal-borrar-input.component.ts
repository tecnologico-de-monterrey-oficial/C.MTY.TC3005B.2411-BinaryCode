import { Component, EventEmitter, Input, Output } from '@angular/core';

export type modalBorrarInputInput = {
    pregunta: string;
    descripcion: string;
    placeholder: string;
};

@Component({
    selector: 'app-modal-borrar-input',
    templateUrl: './modal-borrar-input.component.html',
    styleUrl: './modal-borrar-input.component.css',
})
export class ModalBorrarInputComponent {
    @Input() entrada: modalBorrarInputInput;
    @Input() nombre: string;

    @Output() cancelModal = new EventEmitter();
    @Output() okModal = new EventEmitter<() => void>();

    isLoading: boolean;
    value?: string;

    finishLoading(): void {
        this.isLoading = false;
    }

    handleCancel(): void {
        this.cancelModal.emit();
    }

    handleOk(): void {
        this.isLoading = true;
        this.okModal.emit(this.finishLoading.bind(this));
    }
}
