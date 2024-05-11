import { Unidad } from '../../app/modelos/unidad.model';
import {
    unidad_amarilla,
    unidad_azul,
    unidad_morada,
    unidad_roja,
    unidad_rosa,
    unidad_verde,
} from '../colores';

// Datos para mockup de Unidades - agregar a la base de datos

export const UN1: Unidad = new Unidad(
    'u1',
    'Marketing',
    'assets/images/unidades_props/marketing_temporal_prop.png',
    unidad_roja,
    'P1'
);
export const UN2: Unidad = new Unidad(
    'u2',
    'Finanzas',
    'assets/images/unidades_props/finanzas_temporal_prop.png',
    unidad_morada,
    'P1'
);
export const UN3: Unidad = new Unidad(
    'u3',
    'Mecánica',
    'assets/images/unidades_props/mecanica_temporal_prop.png',
    unidad_amarilla,
    'P1'
);
export const UN4: Unidad = new Unidad(
    'u4',
    'Sistemas',
    'assets/images/unidades_props/sistemas_temporal_prop.png',
    unidad_verde,
    'P2'
);
export const UN5: Unidad = new Unidad(
    'u5',
    'Chasis',
    'assets/images/unidades_props/chasis_temporal_prop.png',
    unidad_azul,
    'P2'
);
export const UN6: Unidad = new Unidad(
    'u6',
    'Batería',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    unidad_rosa,
    'P2'
);

// Datos para pruebas - NO agregar a la base de datos

export const UNT1: Unidad = new Unidad(
    'u6',
    'A',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    '#FF4D4F',
    'p2'
);

export const UNT2: Unidad = new Unidad(
    'u6',
    'ABCDEFGHIJKMNLO',
    '',
    '#914DFF',
    'p2'
);

export const UNT3: Unidad = new Unidad(
    'u6',
    '123áüñ !”#→😀$®™',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    '#FFCD4D',
    'p2'
);

export const UNT4: Unidad = new Unidad(
    'u6',
    'Marketing',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    '#21B514',
    'p1'
);

export const UNT5: Unidad = new Unidad(
    'u6',
    'Marketing',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    '#1499B5',
    'p1'
);

export const UNT6: Unidad = new Unidad(
    'u6',
    'Marketing',
    'assets/images/unidades_props/bateria_temporal_prop.png',
    '#FF4DE3',
    'p1'
);
