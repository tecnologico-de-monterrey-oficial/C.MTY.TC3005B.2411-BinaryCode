import { Component, Input } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
  selector: 'app-contenidos',
  templateUrl: './contenidos.component.html',
  styleUrl: './contenidos.component.css'
})
export class ContenidosComponent {
  @Input() idParaAPI: string;

  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService) {
    this.archivos = archivosService.getArchivos(this.idParaAPI);
  }
}
