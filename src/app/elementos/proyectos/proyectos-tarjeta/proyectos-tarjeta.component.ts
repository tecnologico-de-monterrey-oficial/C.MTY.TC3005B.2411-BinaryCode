import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';

@Component({
    selector: 'app-proyectos-tarjeta',
    templateUrl: './proyectos-tarjeta.component.html',
    styleUrl: './proyectos-tarjeta.component.css',
})
export class ProyectosTarjetaComponent {
    @Input() proyecto: Proyecto;
    @Input() descripcion: boolean = true;

    @Output() eliminarProyecto = new EventEmitter<number>();

    isVisible = false;
    isConfirmLoading = false;

    showModal(): void {
        this.isVisible = true;
    }

    handleDelete(): void {
        this.isVisible = false;
        this.eliminarProyecto.emit(this.proyecto.id);
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
