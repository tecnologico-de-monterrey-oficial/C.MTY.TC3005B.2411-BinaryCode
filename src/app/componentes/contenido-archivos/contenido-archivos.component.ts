import { Component } from '@angular/core';
import { Archivo } from '../../modelos/archivo.model';
import { ArchivosService } from '../../servicios/archivo.services';

@Component({
  selector: 'app-contenido-archivos',
  templateUrl: './contenido-archivos.component.html',
  styleUrl: './contenido-archivos.component.css'
})
export class ContenidoArchivosComponent {
  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService) {
    this.archivos = archivosService.getArchivos();
  }
}
