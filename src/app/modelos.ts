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
} from '../assets/colores';

export type Archivo = {
    id?: string;
    favorito: boolean;
    icono?: Icono;
    nombre: string;
    propietario: Usuario;
    etiquetas: Etiqueta[];
    fecha?: string;
};

export type Carpeta = {
    id: string;
    nombre: string;
    fecha: string;
    color?: string;
};

export type Etiqueta = {
    id: string;
    nombre: string;
    color?: string;
};

export type Icono = {
    nombre: string;
    color: string;
};

export type Proyecto = {
    id?: number;
    nombre: string;
    descripcion: string;
    color: string;
    imagen: string;
    activo: boolean;
    creator: number;
};

export type Unidad = {
    id?: number;
    nombre: string;
    color: string;
    imagen: string;
    id_proyecto: number;
    id_usuario: number;
};

export type Usuario = {
    id?: number;
    primer_nombre: string;
    segundo_nombre: string;
    color: string;
    imagenUrl: string;
    fecha?: string;
};

type DefinitionObject = {
    [key: string]: Icono;
};

export const fileIcons: DefinitionObject = {
    excel: { nombre: 'file-excel', color: icono_verde },
    jpg: { nombre: 'file-jpg', color: icono_morado },
    pdf: { nombre: 'file-pdf', color: icono_rojo },
    ppt: { nombre: 'file-ppt', color: icono_naranja },
    word: { nombre: 'file-word', color: icono_azul },
    solidWorks: { nombre: 'code-sandbox', color: icono_rosa },
    gif: { nombre: 'file-gif', color: icono_amarillo },
    image: { nombre: 'file-image', color: icono_azul_claro },
    text: { nombre: 'file-text', color: icono_gris },
    unknown: { nombre: 'file-unknown', color: icono_rosa_fuerte },
};
