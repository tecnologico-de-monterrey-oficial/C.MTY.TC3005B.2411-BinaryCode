import { Component } from '@angular/core';

@Component({
    selector: 'app-archivos-lista-crear',
    templateUrl: './archivos-lista-crear.component.html',
    styleUrl: './archivos-lista-crear.component.css',
})
export class ArchivosListaCrearComponent {
    modalVisible: boolean = false;

    openCrearModal(): void {
        this.modalVisible = true;
    }

    handleCancel(): void {
        this.modalVisible = false;
    }
}
