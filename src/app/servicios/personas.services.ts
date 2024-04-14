import { Injectable } from '@angular/core';
import {
  tarjeta_amarillo,
  tarjeta_amarillo_fuerte,
  tarjeta_azul_claro,
  tarjeta_azul_fuerte,
  tarjeta_azul_medio,
  tarjeta_morado,
  tarjeta_morado_claro,
  tarjeta_rojo_claro,
  tarjeta_rojo_medio,
  tarjeta_rosa,
  tarjeta_verde_claro,
  tarjeta_verde_fuerte
} from '../../assets/colores';
import { Archivo } from '../modelos/archivo.model';
import { Etiqueta } from '../modelos/etiqueta.model';
import { fileIcons } from '../modelos/icono.model';
import { Usuario } from '../modelos/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  constructor() { }

  archivos: Archivo[] = [
    new Archivo("7", true, fileIcons.word, 'Archivo 7', new Usuario("31", 'assets/images/usuarios_props/kraken.png', 'Kraken Dominguez'), [new Etiqueta("21", 'Etiqueta 1', tarjeta_morado), new Etiqueta("21", 'Etiqueta 2', tarjeta_amarillo), new Etiqueta("21", 'Etiqueta 3', tarjeta_azul_medio)], '29 de febrero de 2024'),
    new Archivo("8",false, fileIcons.pdf, 'Archivo 8', new Usuario("32", 'assets/images/usuarios_props/chihuahua.png', 'Luis A Escudero'), [new Etiqueta("22", 'Etiqueta 4', tarjeta_azul_claro), new Etiqueta("21", 'Etiqueta 5', tarjeta_rosa), new Etiqueta("21", 'Etiqueta 6', tarjeta_amarillo)], '29 de febrero de 2024'),
    new Archivo("9",true, fileIcons.excel, 'Archivo 9', new Usuario("33", 'assets/images/usuarios_props/quetzalpollo.jpeg', 'Samantha Bautista'), [new Etiqueta("23", 'Etiqueta 7', tarjeta_rojo_claro), new Etiqueta("21", 'Etiqueta 8', tarjeta_morado_claro), new Etiqueta("21", 'Etiqueta 9', tarjeta_rosa)], '29 de febrero de 2024'),
    new Archivo("10",false, fileIcons.solidWorks, 'Archivo 10', new Usuario("34", 'assets/images/usuarios_props/anya.png', 'Angel Garcia'), [new Etiqueta("24", 'Etiqueta 10', tarjeta_verde_fuerte), new Etiqueta("21", 'Etiqueta 11', tarjeta_azul_fuerte), new Etiqueta("21", 'Etiqueta 12', tarjeta_morado_claro)], '29 de febrero de 2024'),
    new Archivo("11",true, fileIcons.ppt, 'Archivo 11', new Usuario("35", 'assets/images/usuarios_props/smalldoggo.jpg', 'Carlos Mallén'), [new Etiqueta("25", 'Etiqueta 13', tarjeta_rojo_medio), new Etiqueta("21", 'Etiqueta 14', tarjeta_verde_claro), new Etiqueta("21", 'Etiqueta 15', tarjeta_azul_fuerte)], '29 de febrero de 2024'),
    new Archivo("12",false, fileIcons.image, 'Archivo 12', new Usuario("36", 'assets/images/usuarios_props/racing.jpg', 'Presno Gonzalez'), [new Etiqueta("26", 'Etiqueta 16', tarjeta_amarillo_fuerte), new Etiqueta("21", 'Etiqueta 17', tarjeta_azul_medio), new Etiqueta("21", 'Etiqueta 18', tarjeta_verde_claro)], '29 de febrero de 2024'),
  ];


  getArchivosFavoritos() {
    return this.archivos;
  }

  getArchivosRecientes() {
    return this.archivos;
  }


}
