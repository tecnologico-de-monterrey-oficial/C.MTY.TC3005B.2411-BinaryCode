import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-unidades-tarjeta',
    templateUrl: './unidades-tarjeta.component.html',
    styleUrl: './unidades-tarjeta.component.css',
})
export class UnidadesTarjetaComponent {
    @Input() unidad: Unidad;

    showPlaceholder: boolean = false;

    handleImageError(): void {
        this.showPlaceholder = true;
    }
}
