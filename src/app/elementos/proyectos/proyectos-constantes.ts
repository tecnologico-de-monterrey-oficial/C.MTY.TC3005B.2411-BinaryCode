import { modalBorrarInputInput } from '../modales/modal-borrar-input/modal-borrar-input.component';
import { modalGenericoInput } from '../modales/modal-generico/modal-generico.component';
import { actualizarProyectoMessages } from '../../servicios/proyecto.services';

export const entradaBorrarProyecto: modalBorrarInputInput = {
    pregunta: '¿Estás seguro de que quieres borrar el proyecto?',
    descripcion:
        'Esto va a borrar todo el proyecto incluyendo sus archivos y versiones, si se acabó el proyecto se recomienda archivarlo para mantener el historial. Si estás seguro que quieres borrarlo, por favor reescribe el nombre del proyecto',
    placeholder: 'Escribe el nombre del proyecto',
};

export const entradaArchivarProyecto: modalGenericoInput = {
    pregunta: '¿Estás seguro de que quieres archivar el proyecto?',
    descripcion:
        'Esto va a archivar el proyecto para todos los usuarios incluyendo sus archivos y versiones. Esto se puede regresar si es necesario.',
    botonPrincipal: 'Archivar',
};

export const entradaActivarProyecto: modalGenericoInput = {
    pregunta: '¿Estás seguro de que quieres activar el proyecto?',
    descripcion:
        'Esto va a activar el proyecto para todos los usuarios incluyendo sus archivos y versiones. Esto se puede regresar si es necesario.',
    botonPrincipal: 'Activar',
};

export const mensajesArchivarProyecto: actualizarProyectoMessages = {
    success: 'El proyecto se archivó exitosamente',
    error: 'Hubo un error al archivar el proyecto',
};

export const mensajesActivarProyecto: actualizarProyectoMessages = {
    success: 'El proyecto se activó exitosamente',
    error: 'Hubo un error al activar el proyecto',
};

export const mensajesActualizarProyecto: actualizarProyectoMessages = {
    success: 'El proyecto se actualizó exitosamente',
    error: 'Hubo un error al actualizar el proyecto',
};
