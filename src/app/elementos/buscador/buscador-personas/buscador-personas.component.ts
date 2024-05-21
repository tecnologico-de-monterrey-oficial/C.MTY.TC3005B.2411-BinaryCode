import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Fuse, { FuseResult } from 'fuse.js';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuariosServices } from '../../../servicios/usuarios.services';
import { personaBuscador } from '../buscador-mini-personas/buscador-mini-personas.component';

@Component({
    selector: 'app-buscador-personas',
    templateUrl: './buscador-personas.component.html',
    styleUrl: './buscador-personas.component.css',
})
export class BuscadorPersonasComponent implements OnInit {
    @Output() agregarCoordinadores = new EventEmitter<Usuario[]>();
    @Output() cancelar = new EventEmitter<void>();
    @Input() usuariosActuales: Usuario[];

    fuse: Fuse<personaBuscador>;
    usuariosTotales: personaBuscador[];
    usuariosFiltrados: personaBuscador[];
    terminoBusqueda?: string;
    modalConfirmaciónVisible: boolean = false;

    parametrosBusqueda = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['nombre'],
    };

    ngOnInit(): void {
        this.usuariosTotales = this.usuariosService
            .getUsuarios()
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
    }

    sortTotales(): void {
        this.usuariosTotales.sort((a, b) => {
            if (a.seleccionado === b.seleccionado) {
                return a.nombre.localeCompare(b.nombre);
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

        this.usuariosFiltrados = this.usuariosTotales;
        this.terminoBusqueda = '';
    }

    handleAgregar(): void {
        this.modalConfirmaciónVisible = true;
        this.handleConfirmacion();
    }

    handleConfirmacion(): void {
        this.modalConfirmaciónVisible = false;
        const finales: Usuario[] = this.usuariosTotales
            .filter(p => p.seleccionado)
            .map(p => ({
                id: p.id,
                nombre: p.nombre,
                imagenUrl: p.imagenUrl,
                fecha: p.fecha,
            }));
        this.agregarCoordinadores.emit(finales);
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

    constructor(private usuariosService: UsuariosServices) {}
}
