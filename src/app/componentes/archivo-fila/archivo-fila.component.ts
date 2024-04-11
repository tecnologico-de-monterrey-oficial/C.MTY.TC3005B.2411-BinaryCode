import { Component, Input } from '@angular/core';
import { Archivo } from '../../modelos/archivo.model';

@Component({
  selector: 'app-archivo-fila',
  templateUrl: './archivo-fila.component.html',
  styleUrl: './archivo-fila.component.css'
})
export class ArchivoFilaComponent {
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
