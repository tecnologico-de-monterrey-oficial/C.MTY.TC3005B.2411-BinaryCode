import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectosService } from '../../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyecto-borrar',
    templateUrl: './proyecto-borrar.component.html',
    styleUrls: ['./proyecto-borrar.component.css'],
})
export class ProyectoBorrarComponent {
    @Input() proyecto: Proyecto;
    @Input() isConfirmLoading: boolean = false;

    @Output() cancelModal = new EventEmitter();
    @Output() proyectoEliminado = new EventEmitter<number>();

    value?: string;

    constructor(private proyectoService: ProyectosService) {}

    handleCancel(): void {
        this.cancelModal.emit();
    }

    handleOk(): void {
        this.proyectoEliminado.emit(this.proyecto.id);
        if (this.value === this.proyecto.nombre) {
            this.isConfirmLoading = true;
            this.proyectoService.eliminarProyecto(this.proyecto.id).subscribe({
                next: () => {
                    this.isConfirmLoading = false;
                    this.proyectoEliminado.emit(this.proyecto.id);
                },
                error: err => {
                    console.error('Error deleting project:', err);
                    this.isConfirmLoading = false;
                },
            });
        }
    }
}
