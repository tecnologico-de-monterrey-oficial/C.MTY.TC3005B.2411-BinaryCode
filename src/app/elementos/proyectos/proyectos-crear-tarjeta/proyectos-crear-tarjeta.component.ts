import { Component, EventEmitter, Output } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    modalVisible: boolean = false;

    crearProyecto(proyectoACrear: Proyecto): void {
        this.modalVisible = false;
        this.crearProyectoImportado.emit(proyectoACrear);
    }

    handleCancel(): void {
        this.modalVisible = false;
    }

    abrirModal(): void {
        this.modalVisible = true;
    }
}
