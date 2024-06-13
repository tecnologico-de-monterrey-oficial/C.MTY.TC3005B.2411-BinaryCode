// icono.model.ts
import {
    icono_amarillo,
    icono_azul,
    icono_azul_claro,
    icono_gris,
    icono_morado,
    icono_naranja,
    icono_rojo,
    icono_rosa,
    icono_rosa_fuerte,
    icono_verde,
} from '../../assets/colores';

export type Icono = {
    nombre: string;
    color: string;
};

export function getIcono(terminacion: string): Icono {
    const fileIcons: { [key: string]: Icono } = {
        xlsx: { nombre: 'file-excel', color: icono_verde },
        jpg: { nombre: 'file-jpg', color: icono_morado },
        pdf: { nombre: 'file-pdf', color: icono_rojo },
        ppt: { nombre: 'file-ppt', color: icono_naranja },
        word: { nombre: 'file-word', color: icono_azul },
        solidWorks: { nombre: 'code-sandbox', color: icono_rosa },
        gif: { nombre: 'file-gif', color: icono_amarillo },
        image: { nombre: 'file-image', color: icono_azul_claro },
        txt: { nombre: 'file-text', color: icono_gris },
        unknown: { nombre: 'file-unknown', color: icono_rosa_fuerte },
        cal: { nombre: 'file-cal', color: icono_rosa_fuerte },
    };

    return fileIcons[terminacion.toLowerCase()] || fileIcons['unknown'];
}
