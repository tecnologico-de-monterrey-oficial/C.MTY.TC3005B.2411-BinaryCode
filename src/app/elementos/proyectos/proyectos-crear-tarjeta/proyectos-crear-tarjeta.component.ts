import { Component, EventEmitter, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { crearProyectoConValidacion } from '../../../servicios/proyecto.services';
import { Proyecto } from '../../../modelos';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    modalVisible: boolean = false;

    handleCrear(proyectoACrear: Proyecto, finishLoading: () => void): void {
        crearProyectoConValidacion(
            proyectoACrear,
            this.crearProyectoImportado,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
    }

    handleCancel(): void {
        this.modalVisible = false;
    }

    abrirModal(): void {
        this.modalVisible = true;
    }

    constructor(private message: NzMessageService) {}
}
