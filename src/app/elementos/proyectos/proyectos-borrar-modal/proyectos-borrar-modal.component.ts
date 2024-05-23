import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-proyectos-borrar-modal',
    templateUrl: './proyectos-borrar-modal.component.html',
    styleUrl: './proyectos-borrar-modal.component.css',
})
export class ProyectosBorrarModalComponent {
    @Input() proyecto: Proyecto;

    @Output() cancelModal = new EventEmitter();
    @Output() deleteProject = new EventEmitter<number>();

    isConfirmLoading: boolean = false;
    value?: string;

    handleCancel(): void {
        this.cancelModal.emit();
    }

    async handleOk(): Promise<void> {
        this.isConfirmLoading = true;
        const successAPI: boolean = await this.proyectoService.eliminarProyecto(
            this.proyecto.id
        );
        if (successAPI) {
            this.message.success('El proyecto se eliminó exitosamente', {
                nzDuration: 10000,
            });

            this.deleteProject.emit(this.proyecto.id);
        } else {
            this.message.error('Hubo un error al eliminar el proyecto', {
                nzDuration: 10000,
            });
        }
        this.isConfirmLoading = false;
    }
    constructor(
        private proyectoService: ProyectosService,
        private message: NzMessageService
    ) {}
}
