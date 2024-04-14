import { Component } from '@angular/core';
import { PersonasServices } from '../../../../servicios/personas.services';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  archivos: Archivo[] = [];

  constructor(private archivosService: PersonasServices) {
    this.archivos = archivosService.getArchivosFavoritos();
  }
}
