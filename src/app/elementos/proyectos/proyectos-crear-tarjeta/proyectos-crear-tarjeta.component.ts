import { Component, EventEmitter, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Proyecto } from '../../../modelos';
import { crearProyectoConValidacion } from '../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    modalVisible: boolean = false;

    abrirModal(): void {
        this.modalVisible = true;
    }

    cerrarModal(): void {
        this.modalVisible = false;
    }

    handleCrearProyecto(
        proyectoACrear: Proyecto,
        finishLoading: () => void
    ): void {
        crearProyectoConValidacion(
            proyectoACrear,
            this.crearProyectoImportado,
            this.message,
            this.cerrarModal.bind(this),
            finishLoading
        );
    }

    constructor(private message: NzMessageService) {}
}
