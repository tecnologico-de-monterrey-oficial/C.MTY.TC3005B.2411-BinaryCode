import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa solo lo necesario de @angular/forms
import { NzButtonModule } from 'ng-zorro-antd/button'; // Importa el botón de NG-ZORRO

@Component({
  selector: 'app-entrada-login',
  templateUrl: './entrada-login.component.html',
  styleUrls: ['./entrada-login.component.css']
})
export class EntradaLoginComponent implements OnInit {
  // Declara cualquier propiedad o método necesario

  constructor(private fb: FormBuilder) { } // Usa FormBuilder

  ngOnInit() { 
    // Inicializa cualquier lógica necesaria
  }
}
