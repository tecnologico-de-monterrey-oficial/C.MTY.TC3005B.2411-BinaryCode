import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { crearUnidad } from '../../../servicios/unidad.util';
import { Unidad } from '../../../modelos';

@Component({
    selector: 'app-unidades-crear-tarjeta',
    templateUrl: './unidades-crear-tarjeta.component.html',
    styleUrl: './unidades-crear-tarjeta.component.css',
})
export class UnidadesCrearTarjetaComponent {
    @Output() crearUnidadImportada = new EventEmitter<Unidad>();

    @Input() proyectoId: number;
    @Input() message: NzMessageService;

    modalVisible: boolean = false;

    handleCrear(unidadACrear: Unidad, finishLoading: () => void): void {
        crearUnidad(
            unidadACrear,
            this.crearUnidadImportada,
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
}
