import { Component } from '@angular/core';

@Component({
    selector: 'app-unidad-crear-tarjeta',
    templateUrl: './unidad-crear-tarjeta.component.html',
    styleUrl: './unidad-crear-tarjeta.component.css',
})
export class UnidadCrearTarjetaComponent {
    crearUnidad(): void {
        console.log('Crear unidad');
    }
}
