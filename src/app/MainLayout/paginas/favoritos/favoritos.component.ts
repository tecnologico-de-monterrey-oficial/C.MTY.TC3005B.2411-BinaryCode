import { Component } from '@angular/core';
import { ArchivosService } from '../../../servicios/archivo.services';
import { Archivo } from '../../../modelos/archivo.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService) {
    this.archivos = archivosService.getArchivosFavoritos();
  }
}
