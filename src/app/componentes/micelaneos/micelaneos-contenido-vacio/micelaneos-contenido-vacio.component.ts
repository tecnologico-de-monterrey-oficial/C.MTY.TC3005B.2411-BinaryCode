import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-micelaneos-contenido-vacio',
    templateUrl: './micelaneos-contenido-vacio.component.html',
    styleUrl: './micelaneos-contenido-vacio.component.css',
})
export class MicelaneosContenidosVacioComponent {
    @Input() mensaje: string;
}
