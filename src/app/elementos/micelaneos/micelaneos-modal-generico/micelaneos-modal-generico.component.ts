import { Component, EventEmitter, Input, Output } from '@angular/core';

export type modalGenericoInput = {
    pregunta: string;
    descripcion: string;
    botonPrincipal: string;
};

@Component({
    selector: 'app-micelaneos-modal-generico',
    templateUrl: './micelaneos-modal-generico.component.html',
    styleUrl: './micelaneos-modal-generico.component.css',
})
export class MicelaneosModalGenericoComponent {
    @Input() entrada: modalGenericoInput;

    @Output() cancelModal = new EventEmitter();
    @Output() okModal = new EventEmitter<() => void>();

    isLoading: boolean;

    finishLoading(): void {
        this.isLoading = false;
    }

    handleOk(): void {
        this.isLoading = true;
        this.okModal.emit(this.finishLoading.bind(this));
    }

    handleCancel(): void {
        this.cancelModal.emit();
    }
}
