import { Unidad } from '../../app/modelos/unidad.model';
import {
    //unidad_amarilla,
    //unidad_azul,
    //unidad_morada,
    unidad_roja,
    //unidad_rosa,
    //unidad_verde,
} from '../colores';

// Datos para mockup de Unidades - agregar a la base de datos

export const UN1: Unidad = {
    id: 1,
    nombre: 'Marketing',
    imagen: 'assets/images/unidades_props/marketing_temporal_prop.png',
    color: unidad_roja,
    id_proyecto: 1,
    fecha: '',
    id_padre: null,
};
/*
export const UN2: Unidad = {
    id: 'u2',
    nombre: 'Finanzas',
    imagen: 'assets/images/unidades_props/finanzas_temporal_prop.png',
    color: unidad_morada,
    proyectoId: 'P1',
};

export const UN3: Unidad = {
    id: 'u3',
    nombre: 'Mecánica',
    imagen: 'assets/images/unidades_props/mecanica_temporal_prop.png',
    color: unidad_amarilla,
    proyectoId: 'P1',
};

export const UN4: Unidad = {
    id: 'u4',
    nombre: 'Sistemas',
    imagen: 'assets/images/unidades_props/sistemas_temporal_prop.png',
    color: unidad_verde,
    proyectoId: 'P2',
};

export const UN5: Unidad = {
    id: 'u5',
    nombre: 'Chasis',
    imagen: 'assets/images/unidades_props/chasis_temporal_prop.png',
    color: unidad_azul,
    proyectoId: 'P2',
};

export const UN6: Unidad = {
    id: 'u6',
    nombre: 'Batería',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: unidad_rosa,
    proyectoId: 'P2',
};

// Datos para pruebas - NO agregar a la base de datos

export const UNT1: Unidad = {
    id: 'u6',
    nombre: 'A',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: '#FF4D4F',
    proyectoId: 'p2',
};

export const UNT2: Unidad = {
    id: 'u6',
    nombre: 'ABCDEFGHIJKMNLO',
    imagen: '',
    color: '#914DFF',
    proyectoId: 'p2',
};

export const UNT3: Unidad = {
    id: 'u6',
    nombre: '123áüñ !”#→😀$®™',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: '#FFCD4D',
    proyectoId: 'p2',
};

export const UNT4: Unidad = {
    id: 'u6',
    nombre: 'Marketing',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: '#21B514',
    proyectoId: 1,
};

export const UNT5: Unidad = {
    id: 6,
    nombre: 'Marketing',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: '#1499B5',
    proyectoId: 'p1',
};

export const UNT6: Unidad = {
    id: 6,
    nombre: 'Marketing',
    imagen: 'assets/images/unidades_props/bateria_temporal_prop.png',
    color: '#FF4DE3',
    proyectoId: 'p1',
};
*/
