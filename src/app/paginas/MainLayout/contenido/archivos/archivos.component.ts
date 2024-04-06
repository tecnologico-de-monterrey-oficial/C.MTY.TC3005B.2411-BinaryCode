import { Component } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrl: './archivos.component.css'
})
export class ArchivosComponent {
  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService) {
    this.archivos = archivosService.getArchivos();
  }
}
