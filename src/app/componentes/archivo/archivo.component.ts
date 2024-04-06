import { Component, Input } from '@angular/core';
import { Archivo } from '../../modelos/archivo.model';
import { negro } from '../../../assets/colores';
import { contentBg } from '../../../assets/colores';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export class ArchivoComponent {
  @Input() archivo: Archivo;
  
  negro: String = negro;
  contentBg: String = contentBg;

  onStarClick(): void {
    this.archivo.favorito = !this.archivo.favorito;
    // TODO: Agregar llamada API
  }

  onClose(removedTag: {}): void {
    this.archivo.etiquetas = this.archivo.etiquetas.filter(tag => tag !== removedTag);
    // TODO: Agregar llamada API
  }
}
