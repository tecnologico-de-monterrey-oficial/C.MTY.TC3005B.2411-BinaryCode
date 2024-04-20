import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-unidad',
    templateUrl: './unidad-tarjeta.component.html',
    styleUrl: './unidad-tarjeta.component.css',
})
export class UnidadTarjetaComponent {
    @Input() unidad: Unidad;

    showPlaceholder: boolean = false;

    handleImageError(): void {
        this.showPlaceholder = true;
    }
}
