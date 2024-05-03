import { Archivo } from '../../app/modelos/archivo.model';
import { fileIcons } from '../../app/modelos/icono.model';
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

export const A1: Archivo = new Archivo(
    'A1',
    true,
    fileIcons.word,
    'Archivo 1',
    US1,
    [E12, E6, E17],
    '29 de febrero de 2024'
);

export const A2: Archivo = new Archivo(
    'A2',
    false,
    fileIcons.pdf,
    'Archivo 2',
    US2,
    [E3, E14, E10],
    '29 de febrero de 2024'
);

export const A3: Archivo = new Archivo(
    'A3',
    true,
    fileIcons.excel,
    'Archivo 3',
    US3,
    [E2, E9, E16],
    '29 de febrero de 2024'
);

export const A4: Archivo = new Archivo(
    'A4',
    false,
    fileIcons.solidWorks,
    'Archivo 4',
    US4,
    [E8, E4, E15],
    '29 de febrero de 2024'
);

export const A5: Archivo = new Archivo(
    'A5',
    true,
    fileIcons.ppt,
    'Archivo 5',
    US5,
    [E7, E18, E11],
    '29 de febrero de 2024'
);

export const A6: Archivo = new Archivo(
    'A6',
    false,
    fileIcons.image,
    'Archivo 6',
    US6,
    [E5, E1, E13],
    '29 de febrero de 2024'
);
