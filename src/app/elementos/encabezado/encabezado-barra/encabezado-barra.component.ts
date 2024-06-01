import { Component, Input } from '@angular/core';
import { US1 } from '../../../../assets/mocks/usuarios';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-encabezado-barra',
    templateUrl: './encabezado-barra.component.html',
    styleUrl: './encabezado-barra.component.css',
})
export class EncabezadoBarraComponent {
    @Input() usuario: Usuario = US1;

    showPlaceholderUsuario: boolean = false;

    handleImageError(): void {
        this.showPlaceholderUsuario = true;
    }
}
