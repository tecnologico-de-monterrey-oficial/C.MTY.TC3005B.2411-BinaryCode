import { Component, Input } from '@angular/core';
import { US1 } from '../../../../assets/mocks/usuarios';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-estructura-encabezado',
    templateUrl: './estructura-encabezado.component.html',
    styleUrl: './estructura-encabezado.component.css',
})
export class EstructuraEncabezadoComponent {
    @Input() usuario: Usuario = US1;

    showPlaceholderUsuario: boolean = false;

    handleImageError(): void {
        this.showPlaceholderUsuario = true;
    }
}
