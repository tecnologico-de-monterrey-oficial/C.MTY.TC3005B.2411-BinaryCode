// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export type Unidad = {
    id: string;
    nombre: string;
    color?: string;
    fecha?: string;
    imagen?: string;
    id_padre?: string;
    id_usuario: string;
    id_proyecto: string;
};
