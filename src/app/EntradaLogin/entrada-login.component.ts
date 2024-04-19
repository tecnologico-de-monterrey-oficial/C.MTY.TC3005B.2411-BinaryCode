import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; // Importa solo lo necesario de @angular/forms

@Component({
  selector: 'app-entrada-login',
  templateUrl: './entrada-login.component.html',
  styleUrls: ['./entrada-login.component.css']
})
export class EntradaLoginComponent {
  // Declara cualquier propiedad o método necesario

  constructor(private fb: FormBuilder) { } // Usa FormBuilder

}
