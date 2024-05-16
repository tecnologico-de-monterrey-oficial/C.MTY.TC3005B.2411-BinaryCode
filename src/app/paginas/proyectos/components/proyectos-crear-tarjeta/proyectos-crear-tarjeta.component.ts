import { Component } from '@angular/core';

@Component({
    selector: 'app-proyectos-crear-tarjeta',
    templateUrl: './proyectos-crear-tarjeta.component.html',
    styleUrl: './proyectos-crear-tarjeta.component.css',
})
export class ProyectosCrearTarjetaComponent {
    crearProyecto(): void {
        console.log('Crear proyecto');
    }
}
