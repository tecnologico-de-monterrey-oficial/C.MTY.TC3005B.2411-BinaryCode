import { Component } from '@angular/core';

@Component({
    selector: 'app-unidades-crear-tarjeta',
    templateUrl: './unidades-crear-tarjeta.component.html',
    styleUrl: './unidades-crear-tarjeta.component.css',
})
export class UnidadesCrearTarjetaComponent {
    crearUnidad(): void {
        console.log('Crear unidad');
    }
}
