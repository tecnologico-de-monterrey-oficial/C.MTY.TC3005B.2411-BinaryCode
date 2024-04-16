import { Component } from "@angular/core";

@Component({
    selector: 'app-proyecto-crear',
    templateUrl: './proyecto-crear.component.html',
    styleUrls: ['./proyecto-crear.component.css']
})

export class ProyectoCrearComponent {
    colorSeleccionado: string | null = null;

    seleccionarColor(color: string) {
        this.colorSeleccionado = this.colorSeleccionado === color ? null : color;
    }
}