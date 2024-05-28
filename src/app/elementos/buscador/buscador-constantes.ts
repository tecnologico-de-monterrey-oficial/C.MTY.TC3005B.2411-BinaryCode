import { modalGenericoInput } from '../modales/modal-generico/modal-generico.component';

export const liderMensaje: modalGenericoInput = {
    pregunta:
        '¿Seguro que quiere agregar a estas personas como líderes de proyecto?',
    descripcion:
        'Esta acción le permitirá a los usuarios seleccionados borrar y crear unidades y documentos dentro del proyecto seleccionado, así como otorgar permisos para que otros usuarios puedan modificar unidades y crear documentos.',
    botonPrincipal: 'Agregar líder(es)',
};
export const coordinadorMensaje: modalGenericoInput = {
    pregunta:
        '¿Seguro que quiere agregar a estas personas como coordinadores de unidad?',
    descripcion:
        'Esta acción le permitirá a los usuarios seleccionados borrar y crear documentos de la unidad seleccionada, así como otorgar permisos para que otros usuarios puedan crear documentos.',
    botonPrincipal: 'Agregar coordinador(es)',
};
export const editorMensaje: modalGenericoInput = {
    pregunta:
        '¿Seguro que quiere agregar a estas personas como editores de la unidad?',
    descripcion:
        'Esta acción le permitirá a los usuarios seleccionados crear contenido dentro de esta unidad.',
    botonPrincipal: 'Agregar editor(es)',
};
