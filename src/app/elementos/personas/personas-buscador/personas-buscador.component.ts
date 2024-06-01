import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Fuse, { FuseResult } from 'fuse.js';
import { personaBuscador } from '../personas-buscador-individual/personas-buscador-individual.component';
import { getUsuariosAPI } from '../../../servicios/usuarios.services';
import {
    coordinadorMensaje,
    editorMensaje,
    liderMensaje,
} from '../personas-constantes';
import { modalGenericoInput } from '../../micelaneos/micelaneos-modal-generico/micelaneos-modal-generico.component';
import { permisoType } from '../../permisos/permisos-constantes';
import { Usuario } from '../../../modelos';

@Component({
    selector: 'app-personas-buscador',
    templateUrl: './personas-buscador.component.html',
    styleUrl: './personas-buscador.component.css',
})
export class PersonasBuscadorComponent implements OnInit {
    @Output() agregarUsuarios = new EventEmitter<Usuario[]>();
    @Output() cancelar = new EventEmitter<void>();
    @Input() usuariosActuales: Usuario[];
    @Input() permiso: permisoType;

    fuse: Fuse<personaBuscador>;
    usuariosTotales: personaBuscador[];
    usuariosFiltrados: personaBuscador[];
    terminoBusqueda?: string;
    modalConfirmacionVisible: boolean = false;
    agregarHabilitado: boolean = false;
    botonString: string;
    mensajeModal: modalGenericoInput;

    parametrosBusqueda = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['nombre'],
    };

    async ngOnInit(): Promise<void> {
        const usuarios: Usuario[] = await getUsuariosAPI();
        this.usuariosTotales = usuarios
            .filter(
                usuario =>
                    !this.usuariosActuales.some(
                        actual => actual.id === usuario.id
                    )
            )
            .map(usuario => ({ ...usuario, seleccionado: false }));
        this.sortTotales();

        this.usuariosFiltrados = this.usuariosTotales;
        this.fuse = new Fuse(this.usuariosTotales, this.parametrosBusqueda);

        if (this.permiso === permisoType.lider) {
            this.botonString = liderMensaje.botonPrincipal;
            this.mensajeModal = liderMensaje;
        } else if (this.permiso === permisoType.coordinador) {
            this.botonString = coordinadorMensaje.botonPrincipal;
            this.mensajeModal = coordinadorMensaje;
        } else if (this.permiso === permisoType.editor) {
            this.botonString = editorMensaje.botonPrincipal;
            this.mensajeModal = editorMensaje;
        }
    }

    sortTotales(): void {
        this.usuariosTotales.sort((a, b) => {
            if (a.seleccionado === b.seleccionado) {
                return a.primer_nombre.localeCompare(b.primer_nombre);
            }
            return b.seleccionado ? 1 : -1;
        });
    }

    handleCancel(): void {
        this.cancelar.emit();
    }

    handleSeleccionar(persona: personaBuscador): void {
        this.usuariosTotales = this.usuariosTotales.map(p =>
            p === persona ? { ...p, seleccionado: !p.seleccionado } : p
        );

        this.sortTotales();
        this.fuse.setCollection(this.usuariosTotales);
        this.agregarHabilitado = this.usuariosTotales.some(u => u.seleccionado);

        this.usuariosFiltrados = this.usuariosTotales;
        this.terminoBusqueda = '';
    }

    handleConfirmacion(finishLoading: () => void): void {
        this.modalConfirmacionVisible = false;
        const finales: Usuario[] = this.usuariosTotales.filter(
            p => p.seleccionado
        );
        this.agregarUsuarios.emit(finales);
        finishLoading();
    }

    handleAgregar(): void {
        this.modalConfirmacionVisible = true;
    }

    handleCloseModal(): void {
        this.modalConfirmacionVisible = false;
    }

    handleSearch(): void {
        if (!this.terminoBusqueda) {
            this.usuariosFiltrados = this.usuariosTotales;
        } else {
            const result: FuseResult<personaBuscador>[] = this.fuse.search(
                this.terminoBusqueda
            );
            this.usuariosFiltrados = result.map(resultado => resultado.item);
        }
    }
}
