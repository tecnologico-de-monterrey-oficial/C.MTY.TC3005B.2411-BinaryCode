import { Component, Input } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { US1 } from '../../../assets/mocks/usuarios';

@Component({
    selector: 'app-encabezado',
    templateUrl: './encabezado.component.html',
    styleUrl: './encabezado.component.css',
})
export class EncabezadoComponent {
    @Input() usuario: Usuario = US1;

    showPlaceholderUsuario: boolean = false;

    handleImageError(): void {
        this.showPlaceholderUsuario = true;
    }
}
