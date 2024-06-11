import { Archivo, fileIcons } from '../../app/modelos';
import {
    E1,
    E10,
    E11,
    E12,
    E13,
    E14,
    E15,
    E16,
    E17,
    E18,
    E2,
    E3,
    E4,
    E5,
    E6,
    E7,
    E8,
    E9,
} from './etiquetas';
import { US1, US2, US3, US4, US5, US6 } from './usuarios';

export const A1: Archivo = {
    id: 'A1',
    nombre: 'Archivo 1',
    favorito: true,
    icono: fileIcons.word,
    propietario: US1,
    etiquetas: [E12, E6, E17],
    fecha: '29 de febrero de 2024',
    terminacion: 'docx',
    descripcion: 'Descripción del archivo 1',
    id_apartado: 1,
};

export const A2: Archivo = {
    id: 'A2',
    favorito: false,
    icono: fileIcons.pdf,
    nombre: 'Archivo 2',
    propietario: US2,
    etiquetas: [E3, E14, E10],
    fecha: '29 de febrero de 2024',
    terminacion: 'pdf',
    descripcion: 'Descripción del archivo 2',
    id_apartado: 1,
};

export const A3: Archivo = {
    id: 'A3',
    favorito: true,
    icono: fileIcons.excel,
    nombre: 'Archivo 3',
    propietario: US3,
    etiquetas: [E2, E9, E16],
    fecha: '29 de febrero de 2024',
    terminacion: 'xlsx',
    descripcion: 'Descripción del archivo 3',
    id_apartado: 1,
};

export const A4: Archivo = {
    id: 'A4',
    favorito: false,
    icono: fileIcons.solidWorks,
    nombre: 'Archivo 4',
    propietario: US4,
    etiquetas: [E8, E4, E15],
    fecha: '29 de febrero de 2024',
    terminacion: 'sldprt',
    descripcion: 'Descripción del archivo 4',
    id_apartado: 1,
};

export const A5: Archivo = {
    id: 'A5',
    favorito: true,
    icono: fileIcons.ppt,
    nombre: 'Archivo 5',
    propietario: US5,
    etiquetas: [E7, E18, E11],
    fecha: '29 de febrero de 2024',
    terminacion: 'pptx',
    descripcion: 'Descripción del archivo 5',
    id_apartado: 1,
};

export const A6: Archivo = {
    id: 'A6',
    favorito: false,
    icono: fileIcons.image,
    nombre: 'Archivo 6',
    propietario: US6,
    etiquetas: [E5, E1, E13],
    fecha: '29 de febrero de 2024',
    terminacion: 'jpg',
    descripcion: 'Descripción del archivo 6',
    id_apartado: 1,
};

export const A7: Archivo = {
    id: 'A7',
    favorito: true,
    icono: fileIcons.word,
    nombre: 'Archivo 7',
    propietario: US1,
    etiquetas: [E12, E6, E17],
    fecha: '29 de febrero de 2024',
    terminacion: 'docx',
    descripcion: 'Descripción del archivo 7',
    id_apartado: 1,
};

export const A8: Archivo = {
    id: 'A8',
    favorito: true,
    icono: fileIcons.pdf,
    nombre: 'Archivo 8',
    propietario: US2,
    etiquetas: [E3, E14, E10],
    fecha: '29 de febrero de 2024',
    terminacion: 'pdf',
    descripcion: 'Descripción del archivo 8',
    id_apartado: 1,
};

export const A9: Archivo = {
    id: 'A9',
    favorito: true,
    icono: fileIcons.excel,
    nombre: 'Archivo 9',
    propietario: US4,
    etiquetas: [E2, E9, E16],
    fecha: '29 de febrero de 2024',
    terminacion: 'xlsx',
    descripcion: 'Descripción del archivo 9',
    id_apartado: 1,
};

export const A10: Archivo = {
    id: 'A10',
    favorito: true,
    icono: fileIcons.image,
    nombre: 'Archivo 10',
    propietario: US6,
    etiquetas: [E8, E4, E15],
    fecha: '29 de febrero de 2024',
    terminacion: 'jpg',
    descripcion: 'Descripción del archivo 10',
    id_apartado: 1,
};
