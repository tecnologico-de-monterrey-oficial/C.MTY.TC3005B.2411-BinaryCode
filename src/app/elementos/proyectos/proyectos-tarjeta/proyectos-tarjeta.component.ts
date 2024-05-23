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
    @Output() actualizarProyecto = new EventEmitter<Proyecto>();

    borrarVisible = false;
    actualizarVisible = false;
    isConfirmLoading = false;

    showBorrarModal(): void {
        this.borrarVisible = true;
    }

    showActualizarModal(): void {
        this.actualizarVisible = true;
    }

    handleDelete(): void {
        this.borrarVisible = false;
        this.eliminarProyecto.emit(this.proyecto.id);
    }

    handleCancel(): void {
        this.borrarVisible = false;
        this.actualizarVisible = false;
    }

    handleActualizar(proyectoAActualizar: Proyecto): void {
        this.actualizarVisible = false;
        this.actualizarProyecto.emit(proyectoAActualizar);
    }
}
