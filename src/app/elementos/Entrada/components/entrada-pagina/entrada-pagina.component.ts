import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; // Importa solo lo necesario de @angular/forms

@Component({
    selector: 'app-entrada-pagina',
    templateUrl: './entrada-pagina.component.html',
    styleUrls: ['./entrada-pagina.component.css'],
})
export class EntradaPaginaComponent {
    // Declara cualquier propiedad o método necesario

    constructor(private fb: FormBuilder) {} // Usa FormBuilder
}
