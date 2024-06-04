import { modalBorrarInputInput } from '../micelaneos/micelaneos-modal-borrar-input/micelaneos-modal-borrar-input.component';
import { modalGenericoInput } from '../micelaneos/micelaneos-modal-generico/micelaneos-modal-generico.component';

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
