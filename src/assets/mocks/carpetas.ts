import { Carpeta } from '../../app/modelos/carpeta.model';
import {
    tarjeta_azul_fuerte,
    tarjeta_rojo_claro,
    tarjeta_verde_claro,
} from '../colores';

export const C1: Carpeta = new Carpeta(
    'C1',
    'Manuales técnicos',
    '29 de febrero de 2024',
    tarjeta_azul_fuerte
);

export const C2: Carpeta = new Carpeta(
    'C2',
    'Partes motor',
    '29 de febrero de 2024',
    tarjeta_rojo_claro
);

export const C3: Carpeta = new Carpeta(
    'C3',
    'Facturas',
    '29 de febrero de 2024',
    tarjeta_verde_claro
);
