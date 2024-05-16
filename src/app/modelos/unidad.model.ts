// TODO: Parametros que delimitar
// Qué tan largo puede ser el nombre de una unidad
// Hay límites en el tamaño de la imagen?

export type Unidad = {
    id: string;
    nombre: string;
    urlImagen: string;
    color: string;
    proyectoId: string; // Nueva propiedad proyectoId
};
