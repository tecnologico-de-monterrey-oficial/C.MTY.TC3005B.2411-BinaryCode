import { Component, Input } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
  selector: 'app-contenido-archivos',
  templateUrl: './contenido-archivos.component.html',
  styleUrl: './contenido-archivos.component.css'
})
export class ContenidoArchivosComponent {
  @Input() archivos: Archivo[];

}
