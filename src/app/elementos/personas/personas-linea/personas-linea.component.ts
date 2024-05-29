import { Component, Input } from '@angular/core';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-linea',
    templateUrl: './personas-linea.component.html',
    styleUrl: './personas-linea.component.css',
})
export class PersonasLineaComponent {
    @Input() usuario: Usuario;
}
