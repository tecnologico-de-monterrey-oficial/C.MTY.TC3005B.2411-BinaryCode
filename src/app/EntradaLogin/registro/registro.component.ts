import { Component } from '@angular/core';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
    colorSeleccionado: string | null = null;

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
    }
}
