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
  @Input() carpetas: Carpeta[];
}
