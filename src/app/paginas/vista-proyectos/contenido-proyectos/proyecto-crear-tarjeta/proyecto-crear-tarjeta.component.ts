import { Component } from '@angular/core';

@Component({
    selector: 'app-proyecto-crear-tarjeta',
    templateUrl: './proyecto-crear-tarjeta.component.html',
    styleUrl: './proyecto-crear-tarjeta.component.css',
})
export class ProyectoCrearTarjetaComponent {
    crearProyecto(): void {
        console.log('Crear proyecto');
    }
}
