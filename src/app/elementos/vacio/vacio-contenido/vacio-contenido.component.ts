import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-vacio-contenido',
    templateUrl: './vacio-contenido.component.html',
    styleUrl: './vacio-contenido.component.css',
})
export class VacioContenidoComponent {
    @Input() mensaje: string;
}
