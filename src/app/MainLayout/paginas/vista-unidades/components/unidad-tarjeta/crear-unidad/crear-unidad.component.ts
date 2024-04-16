import { Component } from "@angular/core";

@Component({
    selector: 'app-crear-unidad',
    templateUrl: './crear-unidad.component.html',
    styleUrls: ['./crear-unidad.component.css']
})

export class CrearUnidadComponent {
    colorSeleccionado: string | null = null;

    seleccionarColor(color: string) {
        this.colorSeleccionado = this.colorSeleccionado === color ? null : color;
    }
}