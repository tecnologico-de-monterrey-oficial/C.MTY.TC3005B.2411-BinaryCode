import { Injectable } from '@angular/core';
import { 
    icono_azul, 
    icono_morado, 
    icono_naranja, 
    icono_rojo, 
    icono_rosa, 
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
import { Icono, fileIcons } from '../modelos/icono.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})

// TODO: Parametros que delimitar
// Cuántos archivos pueden verse a la vez (ponemos paginación?)
// Cuántos archivos puede haber en total

export class ArchivosService {

    constructor() { }

    archivos: Archivo[] = [
        new Archivo("1", true, fileIcons.word, 'Archivo 1', new Usuario("31", '', 'Kraken Dominguez'), [new Etiqueta("21", 'Etiqueta 1', tarjeta_morado), new Etiqueta("21", 'Etiqueta 2', tarjeta_amarillo), new Etiqueta("21", 'Etiqueta 3', tarjeta_azul_medio)], '29 de febrero de 2024'),
        new Archivo("2",false, fileIcons.pdf, 'Archivo 2', new Usuario("32", '', 'Luis A Escudero'), [new Etiqueta("22", 'Etiqueta 4', tarjeta_azul_claro), new Etiqueta("21", 'Etiqueta 5', tarjeta_rosa), new Etiqueta("21", 'Etiqueta 6', tarjeta_amarillo)], '29 de febrero de 2024'),
        new Archivo("3",true, fileIcons.excel, 'Archivo 3', new Usuario("33", '', 'Samantha Bautista'), [new Etiqueta("23", 'Etiqueta 7', tarjeta_rojo_claro), new Etiqueta("21", 'Etiqueta 8', tarjeta_morado_claro), new Etiqueta("21", 'Etiqueta 9', tarjeta_rosa)], '29 de febrero de 2024'),
        new Archivo("4",false, fileIcons.solidWorks, 'Archivo 4', new Usuario("34", '', 'Angel Garcia'), [new Etiqueta("24", 'Etiqueta 10', tarjeta_verde_fuerte), new Etiqueta("21", 'Etiqueta 11', tarjeta_azul_fuerte), new Etiqueta("21", 'Etiqueta 12', tarjeta_morado_claro)], '29 de febrero de 2024'),
        new Archivo("5",true, fileIcons.ppt, 'Archivo 5', new Usuario("35", '', 'Carlos Mallén'), [new Etiqueta("25", 'Etiqueta 13', tarjeta_rojo_medio), new Etiqueta("21", 'Etiqueta 14', tarjeta_verde_claro), new Etiqueta("21", 'Etiqueta 15', tarjeta_azul_fuerte)], '29 de febrero de 2024'),
        new Archivo("6",false, fileIcons.image, 'Archivo 6', new Usuario("36", '', 'Presno Gonzalez'), [new Etiqueta("26", 'Etiqueta 16', tarjeta_amarillo_fuerte), new Etiqueta("21", 'Etiqueta 17', tarjeta_azul_medio), new Etiqueta("21", 'Etiqueta 18', tarjeta_verde_claro)], '29 de febrero de 2024'),
        ];

    getArchivosFavoritos() {
        return this.archivos;
    }

    getArchivosRecientes() {
        return this.archivos;
    }

}