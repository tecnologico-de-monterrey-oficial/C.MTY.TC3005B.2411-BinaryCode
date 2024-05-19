import { Component } from '@angular/core';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    modalVisible: boolean = false;

    crearProyecto(): void {
        this.modalVisible = true;
    }

    handleCancel(): void {
        this.modalVisible = false;
    }

    handleOk(): void {
        this.modalVisible = false;
    }
}
