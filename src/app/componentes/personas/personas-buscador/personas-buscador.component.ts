import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';
import { personaBuscador } from '../personas-buscador-individual/personas-buscador-individual.component';
import {
    coordinadorMensaje,
    editorMensaje,
    liderMensaje,
} from '../personas-constantes';
import { modalGenericoInput } from '../../micelaneos/micelaneos-modal-generico/micelaneos-modal-generico.component';
import { permisoType } from '../../permisos/permisos-constantes';
import { Usuario } from '../../../modelos';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
    selector: 'app-personas-buscador',
    templateUrl: './personas-buscador.component.html',
    styleUrl: './personas-buscador.component.css',
})
export class PersonasBuscadorComponent implements OnInit {
    @Output() agregarUsuarios = new EventEmitter<Usuario[]>();
    @Output() cancelar = new EventEmitter();
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

    parametrosBusqueda: IFuseOptions<personaBuscador> = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['primer_nombre', 'segundo_nombre'],
    };

    async ngOnInit(): Promise<void> {
        const usuarios: Usuario[] = await this.usuariosService.getUsuariosAPI();
        this.usuariosTotales = usuarios
            .filter(
                usuario =>
                    !this.usuariosActuales?.some(
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
                return a.first_name.localeCompare(b.last_name);
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

    constructor(private usuariosService: UsuariosService) {}
}
