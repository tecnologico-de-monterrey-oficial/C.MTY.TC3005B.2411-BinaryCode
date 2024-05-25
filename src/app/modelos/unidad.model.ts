// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export type Unidad = {
    id?: number;
    nombre: string;
    color: string;
    imagen: string;
    id_proyecto: number;
    id_usuario: number;
};
