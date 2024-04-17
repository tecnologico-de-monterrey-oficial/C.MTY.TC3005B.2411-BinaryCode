import { Component } from '@angular/core';
import { ArchivosService } from '../../../../../servicios/archivo.services';
import { Archivo } from '../../../../../modelos/archivo.model';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrl: './recientes.component.css'
})
export class RecientesComponent {
  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService) {
    this.archivos = archivosService.getArchivosRecientes();
  }
}
