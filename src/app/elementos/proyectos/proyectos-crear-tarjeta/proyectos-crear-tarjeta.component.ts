import { Component, EventEmitter, Output } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { crearProyecto } from '../../../servicios/proyecto.util';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    modalVisible: boolean = false;

    handleCrear(proyectoACrear: Proyecto, finishLoading: () => void): void {
        crearProyecto(
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
