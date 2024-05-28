export enum permisoType {
    editor = 1,
    lider = 2,
    coordinador = 3,
}

export type buscadorPersonasInput = {
    titulo: string;
    success: string;
    error: string;
};

export const liderMensaje: buscadorPersonasInput = {
    titulo: 'Agregar líder',
    success: 'Los líderes de proyecto se actualizaron exitosamente',
    error: 'Hubo un error al actualizar los líderes de proyecto',
};
export const coordinadorMensaje: buscadorPersonasInput = {
    titulo: 'Agregar coordinador',
    success: 'Los coordinadores de proyecto se actualizaron exitosamente',
    error: 'Hubo un error al actualizar los coordinadores de proyecto',
};
export const editorMensaje: buscadorPersonasInput = {
    titulo: 'Agregar editor',
    success: 'Los editores de proyecto se actualizaron exitosamente',
    error: 'Hubo un error al actualizar los editores de proyecto',
};
