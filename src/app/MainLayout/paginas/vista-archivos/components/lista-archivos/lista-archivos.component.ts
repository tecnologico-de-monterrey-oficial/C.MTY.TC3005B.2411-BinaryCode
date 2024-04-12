import { Component, Input } from '@angular/core';
import { Archivo } from '../../../../../modelos/archivo.model';
import { Carpeta } from '../../../../../modelos/carpeta.model';
import { tarjeta_morado } from '../../../../../../assets/colores';

@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrl: './lista-archivos.component.css'
})
export class ListaArchivosComponent {
  @Input() archivos: Archivo[];

  carpeta: Carpeta = new Carpeta('1', 'Carpeta 1', tarjeta_morado);

}
