import { Component, Input } from '@angular/core';
import { Archivo } from '../../modelos/archivo.model';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export class ArchivoComponent {
  @Input() archivo: Archivo;

  onStarClick(): void {
    this.archivo.favorito = !this.archivo.favorito;
    // TODO: Agregar llamada API
  }

  onFileClick(): void {
    console.log("Se abre archivo " + this.archivo.nombre)
    // TODO: Agregar ruteo
  }
}
