import { Component } from '@angular/core';

@Component({
    selector: 'app-archivos-crear-fila',
    templateUrl: './archivos-crear-fila.component.html',
    styleUrl: './archivos-crear-fila.component.css',
})
export class ArchivosCrearFilaComponent {
    modalVisible: boolean = false;

    openCrearModal(): void {
        this.modalVisible = true;
    }

    handleCancel(): void {
        this.modalVisible = false;
    }
}
