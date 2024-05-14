import { Component, Input } from '@angular/core';
import { Usuario } from '../../../../modelos/usuario.model';

@Component({
    selector: 'app-persona',
    templateUrl: './persona-tarjeta.component.html',
    styleUrl: './persona-tarjeta.component.css',
})
export class PersonaTarjetaComponent {
    @Input() usuario: Usuario;
}
