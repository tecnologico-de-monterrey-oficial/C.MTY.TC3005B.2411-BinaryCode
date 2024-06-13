// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export type Unidad = {
    id: number;
    nombre: string;
    color: string;
    imagen: string;
    id_padre: number;
    id_proyecto: number;
    fecha: string;
};

export type UnidadPost = {
    nombre: string;
    color: string;
    imagen: string;
    id_padre: number;
    id_proyecto: number;
    fecha: string;
    id_usuario: number;
};
