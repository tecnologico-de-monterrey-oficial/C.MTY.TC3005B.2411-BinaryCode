import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyectos.model';
import {
    proyecto_celeste,
    proyecto_rojo,
    proyecto_amarillo,
    proyecto_verde,
    proyecto_rosa,
    proyecto_morado,
} from '../../assets/colores';

@Injectable({
    providedIn: 'root',
})
export class ProyectoServices {
    // TODO: imagenes
    proyectos: Proyecto[] = [
        new Proyecto(
            'p1',
            'Proyecto 1',
            'assets/images/proyectos_props/p1.png',
            proyecto_celeste,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento.'
        ),

        new Proyecto(
            'p2',
            'Proyecto 2',
            'assets/images/proyectos_props/p2.png',
            proyecto_rojo,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento. \n' +
                'Este solo es un ejemplo de como se veria la descrip-\n' +
                'ción en otra tarjeta para que escribir algo relacionado\n' +
                'a la bateria'
        ),

        new Proyecto(
            '3',
            'Proyecto 3',
            'assets/images/proyectos_props/p3.png',
            proyecto_amarillo,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento. '
        ),

        new Proyecto(
            '4',
            'Proyecto 4',
            'assets/images/proyectos_props/p4.png',
            proyecto_morado,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento. \n' +
                'Este solo es un ejemplo de como se veria la descrip-\n' +
                'ción en otra tarjeta para que escribir algo relacionado\n' +
                'a la bateria'
        ),

        new Proyecto(
            '5',
            'Proyecto 5',
            'assets/images/proyectos_props/p5.png',
            proyecto_rosa,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento. '
        ),

        new Proyecto(
            '6',
            'Proyecto 6',
            'assets/images/proyectos_props/p6.png',
            proyecto_verde,
            'En este proyecto se puede ver todo lo realizado en el \n' +
                'año 2023 para la creación del carro utilizado para la\n' +
                'competencia de “SAE Formula Studente 2023”.\n' +
                'Incluyendo los archivos relacionados a los patroci-\n' +
                'nadores de Tec Racing en su momento. \n' +
                'Este solo es un ejemplo de como se veria la descrip-\n' +
                'ción en otra tarjeta para que escribir algo relacionado\n' +
                'a la bateria'
        ),
    ];

    getProyectos(): Proyecto[] {
        return this.proyectos;
    }
}
