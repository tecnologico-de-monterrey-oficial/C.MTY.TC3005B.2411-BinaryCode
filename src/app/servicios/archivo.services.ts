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
        new Archivo(true, fileIcons.word, 'Archivo 1', new Usuario('', 'Kraken Dominguez'), [new Etiqueta('Etiqueta 1', tarjeta_morado), new Etiqueta('Etiqueta 2', tarjeta_amarillo), new Etiqueta('Etiqueta 3', tarjeta_azul_medio)], '29 de febrero de 2024'),
        new Archivo(false, fileIcons.pdf, 'Archivo 2', new Usuario('', 'Luis A Escudero'), [new Etiqueta('Etiqueta 4', tarjeta_azul_claro), new Etiqueta('Etiqueta 5', tarjeta_rosa), new Etiqueta('Etiqueta 6', tarjeta_amarillo)], '29 de febrero de 2024'),
        new Archivo(true, fileIcons.excel, 'Archivo 3', new Usuario('', 'Samantha Bautista'), [new Etiqueta('Etiqueta 7', tarjeta_rojo_claro), new Etiqueta('Etiqueta 8', tarjeta_morado_claro), new Etiqueta('Etiqueta 9', tarjeta_rosa)], '29 de febrero de 2024'),
        new Archivo(false, new Icono(fileIcons.unknown, icono_rosa), 'Archivo 4', new Usuario('', 'Angel Garcia'), [new Etiqueta('Etiqueta 10', tarjeta_verde_fuerte), new Etiqueta('Etiqueta 11', tarjeta_azul_fuerte), new Etiqueta('Etiqueta 12', tarjeta_morado_claro)], '29 de febrero de 2024'),
        new Archivo(true, fileIcons.ppt, 'Archivo 5', new Usuario('', 'Carlos Mallén'), [new Etiqueta('Etiqueta 13', tarjeta_rojo_medio), new Etiqueta('Etiqueta 14', tarjeta_verde_claro), new Etiqueta('Etiqueta 15', tarjeta_azul_fuerte)], '29 de febrero de 2024'),
        new Archivo(false, fileIcons.jpg, 'Archivo 6', new Usuario('', 'Presno Gonzalez'), [new Etiqueta('Etiqueta 16', tarjeta_amarillo_fuerte), new Etiqueta('Etiqueta 17', tarjeta_azul_medio), new Etiqueta('Etiqueta 18', tarjeta_verde_claro)], '29 de febrero de 2024'),
        ];

    getArchivos() {
        return this.archivos;
    }

}