import { Component, Input } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';

@Component({
    selector: 'app-proyecto',
    templateUrl: './proyecto-tarjeta.component.html',
    styleUrls: ['./proyecto-tarjeta.component.css'],
})
export class ProyectoTarjetaComponent {
    @Input() proyecto: Proyecto;
    @Input() descripcion: boolean = true;

    isVisible = false;
    isConfirmLoading = false;

    // ngOnChanges(changes: SimpleChanges) {
    //     if (changes.proyecto) {
    //         console.log('Proyecto data:', this.proyecto);
    //     }
    // }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 1000);
    }

    handleCancel(): void {
        this.isVisible = false;
    }
}
