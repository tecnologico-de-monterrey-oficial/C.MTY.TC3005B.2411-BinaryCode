import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type texto = {
    titulo: string;
    mensaje: string;
};

export type nivelPermiso = 'lider' | 'coordinador' | 'editor';

@Component({
    selector: 'app-buscador-confirmar-modal',
    templateUrl: './buscador-confirmar-modal.component.html',
    styleUrl: './buscador-confirmar-modal.component.css',
})
export class BuscadorConfirmarModalComponent implements OnInit {
    @Output() agregarUsuarios = new EventEmitter();
    @Output() regresar = new EventEmitter();
    @Input() nivel: nivelPermiso;

    informacion: texto;

    lider: texto = {
        titulo: '¿Seguro que quiere agregar a estas personas como líderes de proyecto?',
        mensaje:
            'Esta acción le permitirá a los usuarios seleccionados borrar y crear unidades y documentos dentro del proyecto seleccionado, así como otorgar permisos para que otros usuarios puedan modificar unidades y crear documentos.',
    };
    coordinador: texto = {
        titulo: '¿Seguro que quiere agregar a estas personas como coordinadores de unidad?',
        mensaje:
            'Esta acción le permitirá a los usuarios seleccionados borrar y crear documentos de la unidad seleccionada, así como otorgar permisos para que otros usuarios puedan crear documentos.',
    };
    editor: texto = {
        titulo: '¿Seguro que quiere agregar a estas personas como editores de la unidad?',
        mensaje:
            'Esta acción le permitirá a los usuarios seleccionados crear contenido dentro de esta unidad.',
    };

    handleCancelar(): void {
        this.regresar.emit();
    }

    handleConfirmar(): void {
        this.agregarUsuarios.emit();
    }

    ngOnInit(): void {
        if (this.nivel === 'lider') {
            this.informacion = this.lider;
        } else if (this.nivel === 'coordinador') {
            this.informacion = this.coordinador;
        } else if (this.nivel === 'editor') {
            this.informacion = this.editor;
        }
    }
}
